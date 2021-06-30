import { Client } from '../client';

import {
  BillPaymentRequestBody,
  WalletAccount,
  SingleUser,
  WalletAccountBpayDetails,
  SingleDisbursement,
  WithdrawRequestBody,
  WalletAccountNppDetails,
  DepositRequestBody,
} from '../types';

export default (client: Client) => ({
  /**
   * @description Pay a bill by withdrawing funds from a **Wallet Account** to a specified bpay account.
   *
   * @tags Wallet Accounts
   * @name BillPayment
   * @summary Pay a Bill
   * @request POST:/wallet_accounts/{id}/bill_payment
   * @secure
   */
  billPayment: (id: string, data: BillPaymentRequestBody) =>
    client.request<SingleDisbursement>({
      url: `/wallet_accounts/${id}/bill_payment`,
      method: 'POST',
      data,
      secure: true,
    }),

  /**
   * @description Show the **User** the **Wallet Account** is associated with using a given `:id`.
   *
   * @tags Wallet Accounts
   * @name ShowWalletAccountUser
   * @summary Show Wallet Account User
   * @request GET:/wallet_accounts/{id}/users
   * @secure
   */
  showWalletAccountUser: (id: string) =>
    client.request<SingleUser>({
      url: `/wallet_accounts/${id}/users`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Withdraw funds from a **Wallet Account** to a specified disbursement account.
   *
   * @tags Wallet Accounts
   * @name WithdrawFunds
   * @summary Withdraw Funds
   * @request POST:/wallet_accounts/{id}/withdraw
   * @secure
   */
  withdrawFunds: (id: string, data: WithdrawRequestBody) =>
    client.request<SingleDisbursement>({
      url: `/wallet_accounts/${id}/withdraw`,
      method: 'POST',
      data,
      secure: true,
    }),

  /**
   * @description Deposit funds to a **Wallet Account** from a specified payment account.
   *
   * @tags Wallet Accounts
   * @name DepositFunds
   * @summary Deposit Funds
   * @request POST:/wallet_accounts/{id}/deposit
   * @secure
   */
  depositFunds: (id: string, data: DepositRequestBody) =>
    client.request<SingleDisbursement>({
      url: `/wallet_accounts/${id}/deposit`,
      method: 'POST',
      data,
      secure: true,
    }),

  /**
   * @description Show details of a specific **Wallet Account** using a given `:id.`
   *
   * @tags Wallet Accounts
   * @name ShowWalletAccount
   * @summary Show Wallet Account
   * @request GET:/wallet_accounts/{id}
   * @secure
   */
  showWalletAccount: (id: string) =>
    client.request<WalletAccount>({
      url: `/wallet_accounts/${id}`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show NPP details of a specific **Wallet Account** using a given `:id.`
   *
   * @tags Wallet Accounts
   * @name ShowWalletAccountNppDetails
   * @summary Show Wallet Account NPP Details
   * @request GET:/wallet_accounts/{id}/npp_details
   * @secure
   */
  showWalletAccountNppDetails: (id: string) =>
    client.request<WalletAccountNppDetails>({
      url: `/wallet_accounts/${id}/npp_details`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show BPAY details of a specific **Wallet Account** using a given `:id.`
   *
   * @tags Wallet Accounts
   * @name ShowWalletAccountNbpayDetails
   * @summary Show Wallet Account BPAY Details
   * @request GET:/wallet_accounts/{id}/bpay_details
   * @secure
   */
  showWalletAccountNbpayDetails: (id: string) =>
    client.request<WalletAccountBpayDetails>({
      url: `/wallet_accounts/${id}/bpay_details`,
      method: 'GET',
      secure: true,
    }),
});
