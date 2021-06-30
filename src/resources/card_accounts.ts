import { Client } from '../client';

import {
  CardAccountRequestBody,
  CardAccount,
  CardAccountVerifyRequestBody,
  SingleUser,
  CardAccountDeletion,
} from '../types';

export default (client: Client) => ({
  /**
   * @description Create a Credit **Card Account** to be used as a funding source. Store the returned `:id` and use it for a `make_payment` **Item Action** call. The `:id` is also referred to as a **token** when involving Credit Cards.
   *
   * @tags Card Accounts
   * @name CreateCardAccount
   * @summary Create Card Account
   * @request POST:/card_accounts
   * @secure
   */
  createCardAccount: (data: CardAccountRequestBody) =>
    client.request<CardAccount>({
      url: `/card_accounts`,
      method: 'POST',
      data,
      secure: true,
    }),

  /**
   * @description Show the **User** the Credit **Card Account** is associated with using a given `:id`.
   *
   * @tags Card Accounts
   * @name ShowCardAccountUser
   * @summary Show Card Account User
   * @request GET:/card_accounts/{id}/users
   * @secure
   */
  showCardAccountUser: (id: string) =>
    client.request<SingleUser>({
      url: `/card_accounts/${id}/users`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Where pre-authorization is enabled on a platform, verifies a **Card Account** when a **Card Account** is successfully verified, its verification status is `verified`.
   *
   * @tags Card Accounts
   * @name VerifyCard
   * @summary Verify Card
   * @request PATCH:/card_accounts/{id}/verify
   * @secure
   */
  verifyCard: (id: string, data: CardAccountVerifyRequestBody) =>
    client.request<CardAccount>({
      url: `/card_accounts/${id}/verify`,
      method: 'PATCH',
      data,
      secure: true,
    }),

  /**
   * @description Show details of a specific Credit **Card Account** using a given `:id`. You can toggle the card account number display to show the first 6 digits in addition to the last 4 digits. Contact Assembly if you want to toggle the card account display.
   *
   * @tags Card Accounts
   * @name ShowCardAccount
   * @summary Show Card Account
   * @request GET:/card_accounts/{id}
   * @secure
   */
  showCardAccount: (id: string) =>
    client.request<CardAccount>({
      url: `/card_accounts/${id}`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Redact a Credit **Card Account** using a given `:id`. Redacted Credit **Card Accounts** can no longer be used as a funding source.
   *
   * @tags Card Accounts
   * @name RedactCardAccount
   * @summary Redact Card Account
   * @request DELETE:/card_accounts/{id}
   * @secure
   */
  redactCardAccount: (id: string) =>
    client.request<CardAccountDeletion>({
      url: `/card_accounts/${id}`,
      method: 'DELETE',
      secure: true,
    }),
});
