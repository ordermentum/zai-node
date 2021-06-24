import { ClientInterface } from '../client';

import { TokensRequestBody, Error, TokensResponse } from '../types';

export default (client: ClientInterface) => ({
  /**
   * @description Exchange client application credentials for a bearer token. Please ensure to call the auth issuing server as described at https://developer.assemblypayments.com/reference#authentication
   *
   * @tags Authentication
   * @name Token
   * @summary Token
   * @request POST:/tokens
   * @secure
   */
  token: (data: TokensRequestBody) =>
    client.request<TokensResponse, Error>({
      url: `/tokens`,
      method: 'POST',
      data,
      secure: false,
    }),
});
