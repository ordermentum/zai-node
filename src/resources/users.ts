import { Client } from '../client';

import {
  ListBpayAccounts,
  WalletAccount,
  SingleUser,
  CardAccount,
  UpdateUserRequestBody,
  BankAccount,
  Items,
  BankAccountIdRequestBody,
  Users,
  UserRequestBody,
} from '../types';

export default (client: Client) => ({
  /**
   * @description List the **BPay Accounts** the **User** is associated with using a given `:id`.
   *
   * @tags Users
   * @name ListUserBPayAccounts
   * @summary List User's BPay Accounts
   * @request GET:/users/{id}/bpay_accounts
   * @secure
   */
  listUserBPayAccounts: (id: string) =>
    client.request<ListBpayAccounts>({
      url: `/users/${id}/bpay_accounts`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show the user’s active card account using a given `:id`.
   *
   * @tags Users
   * @name ShowUserCardAccount
   * @summary Show User Card Account
   * @request GET:/users/{id}/card_accounts
   * @secure
   */
  showUserCardAccount: (id: string) =>
    client.request<CardAccount>({
      url: `/users/${id}/card_accounts`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show details of a specific User using a given `:id`.
   *
   * @tags Users
   * @name ShowUser
   * @summary Show User
   * @request GET:/users/{id}
   * @secure
   */
  showUser: (id: string) =>
    client.request<SingleUser>({
      url: `/users/${id}`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Update an existing **User’s** attributes using a given `:id`.
   *
   * @tags Users
   * @name UpdateUser
   * @summary Update User
   * @request PATCH:/users/{id}
   * @secure
   */
  updateUser: (id: string, data: UpdateUserRequestBody) =>
    client.request<SingleUser>({
      url: `/users/${id}`,
      method: 'PATCH',
      data,
      secure: true,
    }),

  /**
   * @description Sets a user’s verification state to `approved` on pre-live given the **User** `:id`. Ensure that a **User** has the required user verification information before using this call, otherwise the call will fail. **Note**: This API call will only work in our pre-live environment. The user verification workflow holds for all users in production.
   *
   * @tags Users
   * @name VerifyUser
   * @summary Verify User (Prelive Only)
   * @request PATCH:/users/{id}/identity_verified
   * @secure
   */
  verifyUser: (id: string) =>
    client.request<SingleUser>({
      url: `/users/${id}/identity_verified`,
      method: 'PATCH',
      secure: true,
    }),

  /**
   * @description Shows the user’s active bank account using a given `:id`.
   *
   * @tags Users
   * @name ShowUserBankAccount
   * @summary Show User Bank Account
   * @request GET:/users/{id}/bank_accounts
   * @secure
   */
  showUserBankAccount: (id: string) =>
    client.request<BankAccount>({
      url: `/users/${id}/bank_accounts`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Set the **User’s Disbursement Account** using a given **User** `:id` and a **Bank Account** `:account_id`.
   *
   * @tags Users
   * @name SetUserDisbursementAccount
   * @summary Set User Disbursement Account
   * @request PATCH:/users/{id}/disbursement_account
   * @secure
   */
  setUserDisbursementAccount: (id: string, data: BankAccountIdRequestBody) =>
    client.request<SingleUser>({
      url: `/users/${id}/disbursement_account`,
      method: 'PATCH',
      data,
      secure: true,
    }),

  /**
   * @description Retrieve an ordered and paginated list of existing **Users**.
   *
   * @tags Users
   * @name ListUsers
   * @summary List Users
   * @request GET:/users
   * @secure
   */
  listUsers: (params: { limit?: number; offset?: number; search: string }) =>
    client.request<Users>({
      url: `/users`,
      method: 'GET',
      params,
      secure: true,
    }),

  /**
   * @description Create a **User**. **Users** can be associated with **Items** either as a buyer or a seller. **Users** can’t be both the buyer and seller for the same **Item**. **Note**: Some parameters are required for user verification. See our guide on [Onboarding a Payout User/Seller](https://developer.assemblypayments.com/docs/onboarding-a-pay-out-user) for more information.
   *
   * @tags Users
   * @name CreateUser
   * @summary Create User
   * @request POST:/users
   * @secure
   */
  createUser: (data: UserRequestBody) =>
    client.request<SingleUser>({
      url: `/users`,
      method: 'POST',
      data,
      secure: true,
    }),

  /**
   * @description Retrieve an ordered and paginated list of existing **Items** the **User** is associated with using a given `:id`.
   *
   * @tags Users
   * @name ListUserItems
   * @summary List User Items
   * @request GET:/users/{id}/items
   * @secure
   */
  listUserItems: (id: string, params?: { offset?: number; limit?: number }) =>
    client.request<Items>({
      url: `/users/${id}/items`,
      method: 'GET',
      params,
      secure: true,
    }),

  /**
   * @description Show the **User’s Wallet Account** using a given `:id`.
   *
   * @tags Users
   * @name ShowUserWalletAccounts
   * @summary Show User Wallet Account
   * @request GET:/users/{id}/wallet_accounts
   * @secure
   */
  showUserWalletAccounts: (id: string) =>
    client.request<WalletAccount>({
      url: `/users/${id}/wallet_accounts`,
      method: 'GET',
      secure: true,
    }),
});
