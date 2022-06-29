/* eslint-disable camelcase */
import { Client } from '../client';

import {
  Transactions,
  WalletAccount,
  SingleUser,
  BankAccount,
  SingleTransaction,
  Fees,
  CardAccount,
} from '../types';

export default (client: Client) => ({
  /**
   * @description Retrieve an ordered and paginated list of **Transactions**.
   *
   * @tags Transactions
   * @name ListTransactions
   * @summary List Transactions
   * @request GET:/transactions
   * @secure
   */
  listTransactions: (params?: {
    limit?: number;
    offset?: number;
    account_id?: string;
    item_id?: string;
    transaction_type?:
      | 'payment'
      | 'refund'
      | 'disbursement'
      | 'fee'
      | 'deposit'
      | 'withdrawal';
    transaction_type_method?:
      | 'direct_debit'
      | 'credit_card'
      | 'npp'
      | 'bpay'
      | 'wallet_account_transfer'
      | 'direct_credit'
      | 'wire_transfer'
      | 'misc';
    direction?: 'debit' | 'credit';
    user_id?: string;
  }) =>
    client.request<Transactions>({
      url: `/transactions`,
      method: 'GET',
      params,
      secure: true,
    }),

  /**
   * @description Show the **Bank Account** associated with the **Transaction** using a given `:id`.
   *
   * @tags Transactions
   * @name ShowTransactionBankAccount
   * @summary Show Transaction Bank Account
   * @request GET:/transactions/{id}/bank_accounts
   * @secure
   */
  showTransactionBankAccount: (id: string) =>
    client.request<BankAccount>({
      url: `/transactions/${id}/bank_accounts`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show the **Supplementary Data** associated with the **Transaction** using a given `:id`.
   *
   * @tags Transactions
   * @name ShowTransactionSupplementaryData
   * @summary Show Transaction Supplementary Data
   * @request GET:/transactions/{id}/supplementary_data
   * @secure
   */
  showSupplementaryData: (id: string) =>
    client.request<{
      id: string;
      debtor_name: string;
      debtor_bsb: string;
      debtor_account: string;
      creditor_account: string;
      creditor_name: string;
      remittance_information: string;
      type: string;
      type_method: string;
      npp_details: any;
    }>({
      baseURL: client.dataURL,
      url: `/transactions/${id}/supplementary_data`,
      method: 'GET',
      secure: true,
    }),
  /**
   * @description Show details of a specific **Transaction** using a given `:id`.
   *
   * @tags Transactions
   * @name ShowTransaction
   * @summary Show Transaction
   * @request GET:/transactions/{id}
   * @secure
   */
  showTransaction: (id: string) =>
    client.request<SingleTransaction>({
      url: `/transactions/${id}`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show the **Card Account** associated with the **Transaction** using a given `:id`.
   *
   * @tags Transactions
   * @name ShowTransactionCardAccount
   * @summary Show Transaction Card Account
   * @request GET:/transactions/{id}/card_accounts
   * @secure
   */
  showTransactionCardAccount: (id: string) =>
    client.request<CardAccount>({
      url: `/transactions/${id}/card_accounts`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show the **Fees** associated with the **Transaction** using a given `:id`.
   *
   * @tags Transactions
   * @name ShowTransactionFees
   * @summary Show Transaction Fees
   * @request GET:/transactions/{id}/fees
   * @secure
   */
  showTransactionFees: (id: string) =>
    client.request<Fees>({
      url: `/transactions/${id}/fees`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show the **Wallet Account** associated with the **Transaction** using a given `:id`.
   *
   * @tags Transactions
   * @name ShowTransactionWalletAccount
   * @summary Show Transaction Wallet Account
   * @request GET:/transactions/{id}/wallet_accounts
   * @secure
   */
  showTransactionWalletAccount: (id: string) =>
    client.request<WalletAccount>({
      url: `/transactions/${id}/wallet_accounts`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show the **User** associated with the **Transaction** using a given `:id`.
   *
   * @tags Transactions
   * @name ShowTransactionUser
   * @summary Show Transaction User
   * @request GET:/transactions/{id}/users
   * @secure
   */
  showTransactionUser: (id: string) =>
    client.request<SingleUser>({
      url: `/transactions/${id}/users`,
      method: 'GET',
      secure: true,
    }),
});
