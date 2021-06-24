/**
 * @title Assembly API
 * @version 2.0
 * @baseUrl https://virtserver.swaggerhub.com/AssemblyPlatforms/assembly-api/2.0
 * @contact <support@assemblypayments.com> (http://docs.assemblypayments.com/)
 *
 * Assembly (formely PromisePay) is a powerful payments engine custom-built for platforms and marketplaces.
 */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { expiredToken } from './middleware';
import tokens from './resources/tokens';
import { TokensResponse } from './types';

export type RequestParams = AxiosRequestConfig & {
  secure: boolean;
};

type ClientOptions = {
  baseURL?: string;
  authBaseURL?: string;
  clientId: string;
  clientSecret: string;
  scope: string;
};
export interface ClientInterface {
  request<T = any, _E = any>(params: RequestParams): Promise<T>;
}

class AuthClient implements ClientInterface {
  instance: AxiosInstance;

  clientId: string;

  baseURL: string;

  clientSecret: string;

  scope: string;

  constructor({
    baseURL = 'https://au-0000.auth.assemblypay.com/',
    clientId,
    clientSecret,
    scope,
  }) {
    this.clientId = clientId;
    this.baseURL = baseURL;
    this.clientSecret = clientSecret;
    this.scope = scope;
    this.instance = axios.create({ baseURL });
  }

  async request<Response = any, _Error = any>(
    params: RequestParams
  ): Promise<Response> {
    return this.instance.request<Response>(params).then(resp => resp.data);
  }
}

export class Client implements ClientInterface {
  instance: AxiosInstance;

  clientId: string;

  baseURL: string;

  clientSecret: string;

  authBaseURL: string;

  scope: string;

  token?: TokensResponse;

  authClient: AuthClient;

  refreshedAt?: Date;

  constructor({
    baseURL = 'https://secure.api.promisepay.com/',
    authBaseURL = 'https://au-0000.auth.assemblypay.com/',
    clientId,
    clientSecret,
    scope,
  }: ClientOptions) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.baseURL = baseURL;
    this.scope = scope;
    this.authBaseURL = authBaseURL;
    this.instance = axios.create({
      baseURL,
      responseType: 'json',
    });

    this.authClient = new AuthClient({
      baseURL: authBaseURL,
      clientId,
      clientSecret,
      scope,
    });

    expiredToken(this, 3);
  }

  getHeaders(secure = true) {
    const headers = {
      'User-Agent': `Assembly Payments Node 1.0`,
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
      });
  }

  async conditionalRefresh(secure: boolean) {
    if (!secure) {
      return;
    }

    if (!this.token || !this.refreshedAt) {
      await this.refresh();
      return;
    }

    const expires = this?.token?.expires_in ?? 0;
    // expires in the next 10 minutes
    const ten = 1000 * 10 * 60;
    const future = expires * 1000;
    const window = new Date(this.refreshedAt.getTime() + future - ten);
    const expired = new Date() > window;
    if (expired) {
      await this.refresh();
    }
  }

  async request<T = any, _E = any>(params: RequestParams): Promise<T> {
    await this.conditionalRefresh(params.secure);
    const headers = this.getHeaders(params.secure);
    return this.instance
      .request<T>({ ...params, headers })
      .then(resp => resp.data);
  }
}

export default Client;
