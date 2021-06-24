import { Client } from '../client';

import {
  BpayAccount,
  BpayAccountDeletion,
  SingleUser,
  BpayAccountRequestBody,
} from '../types';

export default (client: Client) => ({
  /**
   * @description Show details of a specific **BPay Account** using a given `:id`.
   *
   * @tags BPay Accounts
   * @name ShowBPayAccount
   * @summary Show BPay Account
   * @request GET:/bpay_accounts/{id}
   * @secure
   */
  showBPayAccount: (id: string) =>
    client.request<BpayAccount>({
      url: `/bpay_accounts/${id}`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Redact a **BPay Account** using a given `:id`. Redacted **BPay Accounts** can no longer be used as a Disbursement destination.
   *
   * @tags BPay Accounts
   * @name RedactBPayAccount
   * @summary Redact BPay Account (Future Feature)
   * @request DELETE:/bpay_accounts/{id}
   * @secure
   */
  redactBPayAccount: (id: string) =>
    client.request<BpayAccountDeletion>({
      url: `/bpay_accounts/${id}`,
      method: 'DELETE',
      secure: true,
    }),

  /**
   * @description Create a **BPay Account** to be used as a Disbursement destination.
   *
   * @tags BPay Accounts
   * @name CreateBPayAccount
   * @summary Create BPay Account
   * @request POST:/bpay_accounts
   * @secure
   */
  createBPayAccount: (data: BpayAccountRequestBody) =>
    client.request<BpayAccount>({
      url: `/bpay_accounts`,
      method: 'POST',
      data,
      secure: true,
    }),

  /**
   * @description Show the **User** the **BPay Account** is associated with using a given `:id`.
   *
   * @tags BPay Accounts
   * @name ShowBPayAccountUser
   * @summary Show BPay Account User
   * @request GET:/bpay_accounts/{id}/users
   * @secure
   */
  showBPayAccountUser: (id: string) =>
    client.request<SingleUser>({
      url: `/bpay_accounts/${id}/users`,
      method: 'GET',
      secure: true,
    }),
});
