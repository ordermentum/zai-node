import { Client } from '../client';
import {
  BankAccount,
  BankAccountDeletion,
  SingleUser,
  PennyVerifyRequestBody,
  BankAccountRequestBody,
} from '../types';

export default (client: Client) => ({
  /**
   * @description Show details of a specific **Bank Account** using a given `:id`.
   *
   * @tags Bank Accounts
   * @name ShowBankAccount
   * @summary Show Bank Account
   * @request GET:/bank_accounts/{id}
   * @secure
   */
  showBankAccount: (id: string) =>
    client.request<BankAccount>({
      url: `/bank_accounts/${id}`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Redact a **Bank Account** using a given `:id`. Redacted **Bank Accounts** can no longer be used as a funding source or a Disbursement destination.
   *
   * @tags Bank Accounts
   * @name RedactBankAccount
   * @summary Redact Bank Account
   * @request DELETE:/bank_accounts/{id}
   * @secure
   */
  redactBankAccount: (id: string) =>
    client.request<BankAccountDeletion>({
      url: `/bank_accounts/${id}`,
      method: 'DELETE',
      secure: true,
    }),

  /**
   * @description When penny verification is enabled, this API call sends two penny transactions to the specified bank account for verification. **Note**: This API call is not required when your platform has automatic penny verification enabled, as this is instead done by the system. Penny credit verification is only supported for US platforms.
   *
   * @tags Bank Accounts
   * @name SendPennyAmount
   * @summary Send Penny Amount
   * @request PATCH:/bank_accounts/{id}/penny_send
   * @secure
   */
  sendPennyAmount: (id: string) =>
    client.request<BankAccount>({
      url: `/bank_accounts/${id}/penny_send`,
      method: 'PATCH',
      secure: true,
    }),

  /**
   * @description Create a **Bank Account** to be used as either a funding source or a Disbursement destination. Store the returned `:id` and use it for a `make_payment` **Item Action** call. The `:id` is also referred to as a `token` when involving **Bank Accounts**.
   *
   * @tags Bank Accounts
   * @name CreateBankAccount
   * @summary Create Bank Account
   * @request POST:/bank_accounts
   * @secure
   */
  createBankAccount: (data: BankAccountRequestBody) =>
    client.request<BankAccount>({
      url: `/bank_accounts`,
      method: 'POST',
      data,
      secure: true,
    }),

  /**
   * @description When penny verification is enabled, this API call verifies the two penny transactions that were sent to a specified bank account using **Send Penny Amount**. **Note**: This API call requires you to provide a front-end interface to your end-users into which they can input the penny amounts required for a successful verification. Your front-end interface should then pass the information into this API call. Penny credit verification is only supported for US platforms.
   *
   * @tags Bank Accounts
   * @name VerifyPennyAmount
   * @summary Verify Penny Amount
   * @request PATCH:/bank_accounts/{id}/penny_verify
   * @secure
   */
  verifyPennyAmount: (id: string, data: PennyVerifyRequestBody) =>
    client.request<BankAccount>({
      url: `/bank_accounts/${id}/penny_verify`,
      method: 'PATCH',
      data,
      secure: true,
    }),

  /**
   * @description Show the **User** the **Bank Account** is associated with using a given `:id`.
   *
   * @tags Bank Accounts
   * @name ShowBankAccountUser
   * @summary Show Bank Account User
   * @request GET:/bank_accounts/{id}/users
   * @secure
   */
  showBankAccountUser: (id: string) =>
    client.request<SingleUser>({
      url: `/bank_accounts/${id}/users`,
      method: 'GET',
      secure: true,
    }),
});
