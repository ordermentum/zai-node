/**
 * @title Assembly API
 * @version 2.0
 * @baseUrl https://virtserver.swaggerhub.com/AssemblyPlatforms/assembly-api/2.0
 * @contact <support@assemblypayments.com> (http://docs.assemblypayments.com/)
 *
 * Assembly (formely PromisePay) is a powerful payments engine custom-built for platforms and marketplaces.
 */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import bunyan from 'bunyan';
import { expiredToken } from './middleware';
import tokens from './resources/tokens';
import { TokensResponse } from './types';

export type RequestParams = AxiosRequestConfig & {
  secure: boolean;
};

export type ClientOptions = {
  baseURL?: string;
  authBaseURL?: string;
  clientId: string;
  clientSecret: string;
  retries?: number;
  timeout?: number;
  logger?: bunyan;
  scope: string;
};
export interface ClientInterface {
  request<T = any, _E = any>(params: RequestParams): Promise<T>;
}

let log;
const getDefaultLogger = () => {
  if (log) return log;
  log = bunyan.createLogger({
    name: 'assembly-payments-node',
    level: bunyan.DEBUG,
  });
  return log;
};

const elapsed = start => {
  const time = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
  return time;
};

class AuthClient implements ClientInterface {
  instance: AxiosInstance;

  clientId: string;

  baseURL: string;

  clientSecret: string;

  scope: string;

  logger: bunyan;

  constructor({
    baseURL = 'https://au-0000.auth.assemblypay.com/',
    clientId,
    clientSecret,
    scope,
    logger,
  }: ClientOptions) {
    this.clientId = clientId;
    this.baseURL = baseURL;
    this.clientSecret = clientSecret;
    this.scope = scope;
    this.logger = logger ?? getDefaultLogger();
    this.instance = axios.create({ baseURL });
  }

  async request<Response = any, _Error = any>(
    params: RequestParams
  ): Promise<Response> {
    return this.instance.request<Response>(params).then(resp => resp.data);
  }
}

export const jitter = () => Math.floor(Math.random() * 5) + 1;
export class Client implements ClientInterface {
  instance: AxiosInstance;

  clientId: string;

  baseURL: string;

  clientSecret: string;

  authBaseURL: string;

  scope: string;

  retries: number;

  token?: TokensResponse;

  authClient: AuthClient;

  refreshedAt?: Date;

  expiresAt?: Date;

  refreshAt?: Date;

  logger: bunyan;

  constructor({
    baseURL = 'https://au-0000.api.assemblypay.com/',
    authBaseURL = 'https://au-0000.auth.assemblypay.com/',
    clientId,
    clientSecret,
    timeout = 180 * 1000,
    logger,
    retries = 3,
    scope,
  }: ClientOptions) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.baseURL = baseURL;
    this.scope = scope;
    this.authBaseURL = authBaseURL;
    this.logger = logger ?? getDefaultLogger();
    this.retries = retries;
    this.instance = axios.create({
      baseURL,
      timeout,
      responseType: 'json',
    });

    this.authClient = new AuthClient({
      baseURL: authBaseURL,
      clientId,
      logger,
      clientSecret,
      scope,
    });

    expiredToken(this, this.retries);
  }

  getHeaders(secure = true) {
    const headers = {
      'User-Agent': `Assembly Payments Node`,
    };

    if (secure) {
      return {
        ...headers,
        Authorization: `Bearer ${this?.token?.access_token}`,
      };
    }

    return headers;
  }

  async refresh() {
    await tokens(this.authClient)
      .token({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        scope: this.scope,
        grant_type: 'client_credentials',
      })
      .then(resp => {
        this.token = resp;
        this.refreshedAt = new Date();
        const expires = (this.token.expires_in ?? 0) * 1000;

        this.expiresAt = new Date(this.refreshedAt.getTime() + expires);
        // get refresh window 5-10 minutes from expiry
        const window = 1000 * 5 + jitter() * 60 * 1000;

        this.refreshAt = new Date(
          this.refreshedAt.getTime() + (expires - window)
        );

        this.logger.debug(
          {
            refreshAt: this.refreshAt,
            expiresAt: this.expiresAt,
            expires,
            window,
            refreshedAt: this.refreshedAt,
          },
          `token refreshed`
        );
      });
  }

  async conditionalRefresh(secure: boolean) {
    if (!secure) {
      return;
    }

    if (!this.token || !this.refreshAt) {
      this.logger.debug(`no token present - refreshing token`);
      await this.refresh();
      return;
    }

    const expired = new Date() > this.refreshAt;
    if (expired) {
      this.logger.debug(`in refresh window refreshing token`);
      await this.refresh();
    }
  }

  async request<T = any, _E = any>(params: RequestParams): Promise<T> {
    const start = process.hrtime();

    await this.conditionalRefresh(params.secure);
    const headers = this.getHeaders(params.secure);
    const data = await this.instance
      .request<T>({ ...params, headers })
      .then(resp => resp.data);

    this.logger.debug(`${params.url} elapsed time (ms): ${elapsed(start)}`);
    return data;
  }
}

export default Client;
