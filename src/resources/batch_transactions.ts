/* eslint-disable camelcase */
import { Client } from '../client';

import { ListBatchTransactions, SingleBatchTransaction } from '../types';

export default (client: Client) => ({
  /**
   * @description Retrieve an ordered and paginated list of existing **Batch Transactions**. The list can be filtered by **Account**, **Batch ID**, **Item**, and **Transaction Type**.
   *
   * @tags Batch Transactions
   * @name ListBatchTransactions
   * @summary List Batch Transactions
   * @request GET:/batch_transactions
   * @secure
   */
  listBatchTransactions: (params?: {
    limit?: number;
    offset?: number;
    account_id?: string;
    batch_id?: string;
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
    created_before?: string;
    created_after?: string;
    disbursement_bank?: string;
  }) =>
    client.request<ListBatchTransactions>({
      url: `/batch_transactions`,
      method: 'GET',
      params,
      secure: true,
    }),

  /**
   * @description Get a batch transaction using its ID
   *
   * @tags Batch Transactions
   * @name ShowBatchTransaction
   * @summary Show Batch Transaction
   * @request GET:/batch_transactions/{id}
   * @secure
   */
  showBatchTransaction: (id: string) =>
    client.request<SingleBatchTransaction>({
      url: `/batch_transactions/${id}`,
      method: 'GET',
      secure: true,
    }),
});
