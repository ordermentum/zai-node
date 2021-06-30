/* eslint-disable camelcase */
import { Client } from '../client';

import {
  SingleDisbursement,
  Disbursements,
  Transactions,
  WalletAccount,
  BankAccount,
  Items,
  SingleUser,
} from '../types';

export default (client: Client) => ({
  /**
   * @description Retrieve an ordered and paginated list of existing **Disbursements**. The list can be filtered by **Batch ID**.
   *
   * @tags Disbursements
   * @name ListDisbursement
   * @summary List Disbursements
   * @request GET:/disbursements
   * @secure
   */
  listDisbursement: (params?: {
    limit?: number;
    offset?: number;
    batch_id?: string;
  }) =>
    client.request<Disbursements>({
      url: `/disbursements`,
      method: 'GET',
      params,
      secure: true,
    }),

  /**
   * @description Get a disbursment using its ID
   *
   * @tags Disbursements
   * @name ShowDisbursement
   * @summary Show Disbursement
   * @request GET:/disbursements/{id}
   * @secure
   */
  showDisbursement: (id: string) =>
    client.request<SingleDisbursement>({
      url: `/disbursements/${id}`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Get all the transactions relating to a disbursment ID
   *
   * @tags Disbursements
   * @name ShowDisbursementTransactions
   * @summary Show Disbursement Transactions
   * @request GET:/disbursements/{id}/transactions
   * @secure
   */
  showDisbursementTransactions: (
    id: string,
    params?: { limit?: number; offset?: number }
  ) =>
    client.request<Transactions>({
      url: `/disbursements/${id}/transactions`,
      method: 'GET',
      params,
      secure: true,
    }),

  /**
   * @description Get all the wallet accounts relating to a disbursment ID
   *
   * @tags Disbursements
   * @name ShowDisbursementWalletAccounts
   * @summary Show Disbursement Wallet Accounts
   * @request GET:/disbursements/{id}/wallet_accounts
   * @secure
   */
  showDisbursementWalletAccounts: (id: string) =>
    client.request<WalletAccount>({
      url: `/disbursements/${id}/wallet_accounts`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Get all the bank accounts relating to disbursement ID
   *
   * @tags Disbursements
   * @name ShowDisbursementBankAccounts
   * @summary Show Disbursement Bank Accounts
   * @request GET:/disbursements/{id}/bank_accounts
   * @secure
   */
  showDisbursementBankAccounts: (id: string) =>
    client.request<BankAccount>({
      url: `/disbursements/${id}/bank_accounts`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Get all the users relating to disbursement ID
   *
   * @tags Disbursements
   * @name ShowDisbursementUsers
   * @summary Show Disbursement Users
   * @request GET:/disbursements/{id}/users
   * @secure
   */
  showDisbursementUsers: (id: string) =>
    client.request<SingleUser>({
      url: `/disbursements/${id}/users`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Get all the items relating to a disbursement ID
   *
   * @tags Disbursements
   * @name ShowDisbursementItems
   * @summary Show Disbursement Items
   * @request GET:/disbursements/{id}/items
   * @secure
   */
  showDisbursementItems: (id: string) =>
    client.request<Items>({
      url: `/disbursements/${id}/items`,
      method: 'GET',
      secure: true,
    }),
});
