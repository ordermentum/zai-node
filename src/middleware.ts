import { Client } from './client';

export function expiredToken(client: Client, retries = 5) {
  return client.instance.interceptors.response.use(undefined, async error => {
    const { config } = error;
    const connectionError =
      error && ['ECONNABORTED', 'ECONNREFUSED'].includes(error.code);

    if (connectionError) {
      return Promise.reject(error);
    }

    if (!config) {
      return Promise.reject(error);
    }

    config.expiredTokenRetry = config.expiredTokenRetry || 0;

    const accessDenied = error?.data?.errors?.token === 'is not authorized';
    const status = error?.response?.status;

    const canTry =
      !config.expiredTokenRetry || config.expiredTokenRetry < retries;

    if (!accessDenied && status === 401 && canTry) {
      config.expiredTokenRetry += 1;

      try {
        await client.refresh();
        config.headers.Authorization = `Bearer ${client?.token?.access_token}`;
        return client.instance(config);
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  });
}

export default expiredToken;
