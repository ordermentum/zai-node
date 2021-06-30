/* eslint-disable camelcase */
import { Client } from '../client';

import { TokenAuthRequestBody } from '../types';

export default (client: Client) => ({
  /**
   * @description Create a token, either for a bank or a card account, that can be used with the **PromisePay.js** package to securely send Assembly credit card details.
   *
   * @tags Token Auth
   * @name GenerateToken
   * @summary Generate Token
   * @request POST:/token_auths
   * @secure
   */
  generateToken: (data: TokenAuthRequestBody) =>
    client.request<{
      token_auth?: {
        token_type?: string;
        token?: string;
        user_id?: string;
      };
    }>({
      url: `/token_auths`,
      method: 'POST',
      data,
      secure: true,
    }),
});
