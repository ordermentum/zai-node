/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Marketplace {
  marketplaces?: {
    id?: string;
    group_name?: string;
    name?: string;
    short_name?: string;
    color_1?: string;
    color_2?: string;
    color_3?: string;
    color_4?: string;
    color_5?: string;
    website?: string;
    payment_frequency?: string;
    alt_marketplace_id?: string;
    state?: string;
    logo?: string;
    active?: string;
    alt_marketplace_auth?: string;
    business_information?: {
      principal_name?: string;
      principal_government_number?: string;
      incorporation_date?: string;
      bank_account_holder?: string;
      bank_account_number?: string;
      bank_routing_number?: string;
      avg_transaction_value?: string;
      monthly_transactions?: string;
      monthly_disputes?: string;
      monthly_refunds?: string;
      monthly_chargebacks?: string;
      unique_users?: string;
      company_phone?: string;
      company_country?: string;
      transaction_time?: string;
      payments_flow?: string;
      business_model_description?: string;
      customer_support_email?: string;
      bank_name?: string;
      bank_account_type?: string;
      bank_holder_type?: string;
    };
    disable_approve_logo?: boolean;
    enable_virtual_terminal?: boolean;
    currency?: string;
    email?: string;
    seller_white_labeled?: boolean;
    partial_refunds?: boolean;
    related?: { users?: string; company?: string };
    links?: { self?: string; principal?: string; company?: string };
  };
}

export interface ToolsStatus {
  /** @example healthy */
  status?: string;
}

export interface Address {
  addresses?: {
    addressline1?: string;
    addressline2?: string;
    postcode?: string;
    city?: string;
    state?: string;
    id?: string;
    country?: string;
    links?: { self?: string };
  };
}

export interface Account {
  /** @example true */
  active?: boolean;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  updated_at?: string;

  /**
   * @format uuid
   * @example 46deb476-c1a6-41eb-8eb7-26a695bbe5bc
   */
  id?: string;

  /** @example AUD */
  currency?: string;
}

export interface BankAccountDeletion {
  /** @example Successfully redacted */
  bank_account?: string;
}

export interface BankAccount {
  bank_accounts?: {
    active?: boolean;
    created_at?: string;
    updated_at?: string;
    id?: string;
    currency?: string;
    verification_status?: "verified" | "not_verified";
    bank?: {
      bank_name?: string;
      country?: string;
      account_name?: string;
      routing_number?: string;
      account_number?: string;
      holder_type?: "personal" | "business";
      account_type?: "savings" | "checking";
      direct_debit_authority_status?: "null" | "approved";
    };
    links?: { self?: string; users?: string; direct_debit_authorities?: string };
  };
}

export interface CardAccountDeletion {
  /** @example Successfully redacted */
  card_account?: string;
}

export interface CardAccount {
  card_accounts?: {
    active?: boolean;
    created_at?: string;
    updated_at?: string;
    id?: string;
    currency?: string;
    cvv_verified?: boolean;
    verification_status?: "verified" | "not_verified";
    card?: { type?: string; full_name?: string; number?: string; expiry_month?: string; expiry_year?: string };
    links?: { self?: string; users?: string };
  };
}

export interface WalletAccount {
  wallet_accounts?: {
    active?: boolean;
    created_at?: string;
    updated_at?: string;
    id?: string;
    currency?: string;
    verification_status?: "verified" | "not_verified";
    balance?: number;
    links?: {
      self?: object;
      users?: object;
      batch_transactions?: object;
      transactions?: object;
      bpay_details?: object;
      npp_details?: object;
      virtual_accounts?: object;
    };
  };
}

export interface WalletAccountNppDetails {
  /**
   * @format uuid
   * @example 46deb476-c1a6-41eb-8eb7-26a695bbe5bc
   */
  id?: string;
  npp_details?: {
    pay_id?: string;
    marketplace_pay_ids?: { pay_id?: string; type?: "emal" | "aubn" | "orgn" }[];
    reference?: string;
    amount?: string;
    currency?: string;
  };
}

export interface WalletAccountBpayDetails {
  /**
   * @format uuid
   * @example 46deb476-c1a6-41eb-8eb7-26a695bbe5bc
   */
  id?: string;
  bpay_details?: { biller_code?: string; reference?: string; amount?: string; currency?: string };
}

export interface ListBpayAccounts {
  bpay_accounts?: {
    active?: boolean;
    created_at?: string;
    updated_at?: string;
    id?: string;
    currency?: string;
    verification_status?: "verified" | "not_verified";
    bpay_details?: { account_name?: string; biller_code?: number; biller_name?: string; crn?: number };
    links?: { self?: string; users?: string };
  }[];
  links?: { self?: string };
  meta?: { limit?: number; offset?: number; total?: number };
}

export interface BpayAccountDeletion {
  /** @example Successfully redacted */
  bpay_account?: string;
}

export interface BpayAccount {
  bpay_accounts?: {
    active?: boolean;
    created_at?: string;
    updated_at?: string;
    id?: string;
    currency?: string;
    verification_status?: "verified" | "not_verified";
    bpay_details?: { account_name?: string; biller_code?: number; biller_name?: string; crn?: number };
    links?: { self?: string; users?: string };
  };
}

export interface SingleUser {
  users?: User;
}

export interface Users {
  users?: User[];
}

export interface User {
  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  updated_at?: string;

  /** @example Samuel Seller */
  full_name?: string;

  /**
   * @format email
   * @example samuel.seller@assemblypayments.com
   */
  email?: string;

  /** @example 61491570156 */
  mobile?: string;
  phone?: string;
  logo_url?: string;
  color_1?: string;
  color_2?: string;

  /** @example Samuel */
  first_name?: string;

  /** @example Seller */
  last_name?: string;

  /** @example Seller_1234 */
  id?: string;
  custom_descriptor?: string;

  /** @example AUS */
  location?: string;

  /** @example pending */
  verification_status?: string;

  /** @example false */
  held_state?: boolean;
  roles?: string[];

  /** @example encrypted */
  dob?: string;

  /** @example encrypted */
  government_number?: string;
  drivers_license?: string;
  flags?: object;
  related?: { addresses?: string };
  links?: {
    self?: string;
    items?: string;
    card_accounts?: string;
    paypal_accounts?: string;
    payid_accounts?: string;
    bpay_accounts?: string;
    bank_accounts?: string;
    wallet_accounts?: string;
  };
}

export interface SingleRoutingNumber {
  routing_number?: {
    routing_number?: string;
    customer_name?: string;
    address?: string;
    city?: string;
    state_code?: string;
    zip?: string;
    zip_extension?: string;
    phone_area_code?: string;
    phone_prefix?: string;
    phone_suffix?: string;
  };
}

export interface SingleItem {
  items?: Item;
}

export interface Items {
  items?: Item[];
  links?: { self?: string };
  meta?: { limit?: number; offset?: number; total?: number };
}

export interface Item {
  /** @example 100fd4a0-0538-11e6-b512-3e1d05defe78 */
  id: string;

  /** @example Landscaping Job #001 */
  name: string;

  /** @example Planting of natives, removal of tree stump. */
  description?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  updated_at?: string;

  /** @example pending */
  state?:
    | "pending"
    | "payment_required"
    | "wire_pending"
    | "payment_pending"
    | "payment_held"
    | "payment_authorized"
    | "voided"
    | "fraud_hold"
    | "payment_deposited"
    | "work_completed"
    | "problem_flagged"
    | "problem_resolve_requested"
    | "problem_escalated"
    | "completed"
    | "cancelled"
    | "refunded"
    | "refund_pending"
    | "refund_flagged"
    | "off_platform_refunded"
    | "partial_completed"
    | "partial_paid"
    | "off_platform_chargedback";

  /** @example 22000 */
  status?:
    | 22000
    | 22100
    | 22110
    | 22150
    | 22175
    | 22180
    | 22195
    | 22190
    | 22200
    | 22300
    | 22400
    | 22410
    | 22420
    | 22500
    | 22575
    | 22600
    | 22610
    | 22650
    | 22670
    | 22700
    | 22800
    | 22680;

  /** @example 20000 */
  amount: number;

  /** @example 2 */
  payment_type_id?: number;

  /** @example AUD */
  currency?: string;

  /** @example Bella Buyer */
  buyer_name?: string;

  /**
   * @format email
   * @example bella.buyer@assemblypayments.com
   */
  buyer_email?: string;

  /** @example AUS */
  buyer_country?: string;

  /** @example Samuel Seller */
  seller_name?: string;

  /**
   * @format email
   * @example samuel.seller@assemblypayments.com
   */
  seller_email?: string;

  /**
   * @format email
   * @example AUS
   */
  seller_country?: string;

  /**
   * @format email
   * @example NA
   */
  tds_check_state?: string;

  /** @example null */
  batch_state?: string;

  /** @example null */
  invoice_url?: string;

  /** @example null */
  payout_descriptor?: string;

  /** @example 0 */
  remaining_amount?: number;

  /** @example 0 */
  requested_release_amount?: number;

  /** @example null */
  custom_descriptor?: string;

  /** @example 20000 */
  net_amount?: number;

  /** @example 0 */
  chargedback_amount?: number;

  /** @example 0 */
  refunded_amount?: number;

  /** @example 0 */
  released_amount?: number;

  /** @example 0 */
  buyer_fees?: number;

  /** @example 400 */
  seller_fees?: number;

  /** @example 0 */
  credit_card_fee?: number;

  /** @example 0 */
  paypal_fee?: number;
  seller_url?: string;
  buyer_url?: string;

  /** @example 0 */
  direct_debit_fee?: number;

  /** @format date */
  due_date?: string | null;

  /** @example 0 */
  pending_release_amount?: number;

  /** @example null */
  dynamic_descriptor?: string;

  /** @example 100014013961629 */
  deposit_reference?: string;

  /** @example 350 */
  promisepay_fee?: number;

  /** @example 20000 */
  total_outstanding?: number;

  /** @example 20000 */
  total_amount?: number;

  /** @example pending */
  payment_method?: string;

  /** @example true */
  payment_credit_card_enabled?: boolean;

  /** @example true */
  payment_direct_debit_enabled?: boolean;
  related?: { buyers?: string; sellers?: string };
  links?: {
    self?: string;
    buyers?: string;
    sellers?: string;
    status?: string;
    fees?: string;
    transactions?: string;
    batch_transactions?: string;
    wire_details?: string;
    bpay_details?: string;
    tds_checks?: string;
  };
}

export interface SingleChargeStatus {
  charges?: ChargeStatus;
}

export interface ChargeStatus {
  /** @example cb7eafc1-571c-425c-9adc-f56cb585cd68 */
  id?: string;

  /** @example completed */
  state?: string;

  /** @example 22500 */
  status?: number;
}

export interface SingleCharge {
  charges?: Charge;
}

export interface Charges {
  charges?: Charge[];
}

export interface Charge {
  /** @example cb7eafc1-571c-425c-9adc-f56cb585cd68 */
  id?: string;

  /** @example Charge for Delivery */
  name?: string;

  /** @example null */
  custom_descriptor?: string;

  /** @example null */
  custom_data?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  updated_at?: string;

  /** @example completed */
  state?: string;

  /** @example 0 */
  buyer_fees?: number;

  /** @example 400 */
  seller_fees?: number;

  /** @example 0 */
  credit_card_fee?: number;

  /** @example 22500 */
  status?: number;

  /** @example 20000 */
  amount?: number;

  /** @example ASM*Samuel Seller */
  dynamic_descriptor?: string;

  /**
   * @format uuid
   * @example b49d943f-add0-4d1c-b357-0f1a8fde677c
   */
  account_id?: string;

  /** @example credit card */
  account_type?: string;

  /** @example 187 */
  promisepay_fee?: number;

  /** @example AUD */
  currency?: string;

  /** @example charge */
  payment_method?: string;

  /** @example Anonymous Buyer */
  buyer_name?: string;

  /**
   * @format email
   * @example anonymous+buyer+1@assemblypayments.com
   */
  buyer_email?: string;

  /** @example 3000 */
  buyer_zip?: string;

  /** @example AUS */
  buyer_country?: string;

  /** @example Anonymous Seller */
  seller_name?: string;

  /**
   * @format email
   * @example anonymous+seller+1@assemblypayments.com
   */
  seller_email?: string;

  /** @example 3000 */
  seller_zip?: string;

  /** @example AUS */
  seller_country?: string;
  related?: { buyers?: string; sellers?: string };
  links?: {
    self?: string;
    buyers?: string;
    sellers?: string;
    status?: string;
    fees?: string;
    transactions?: string;
    batch_transactions?: string;
  };
}

export interface SingleBatchTransaction {
  batch_transactions?: BatchTransaction;
}

export interface ListBatchTransactions {
  batch_transactions?: BatchTransaction[];
  meta?: { limit?: number; offset?: number; total?: number };
  links?: { self?: string };
}

export interface BatchTransaction {
  id: string;
  reference_id?: string;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  updated_at: string;

  /** @example 12200 */
  status?: string;
  uuid?: string;

  /** @example Bank A */
  disbursement_bank?: string;

  /** @example Bank A */
  processing_bank?: string;

  /** @example null */
  external_reference?: string;

  /** @example null */
  reference_amount?: string;

  /** @example null */
  internal_state?: string;

  /** @example null */
  internal_status?: string;
  account_external?: { account_type_id?: string; currency?: { code?: string } };
  external_account_details?: string;
  external_account_details_encrypted?: boolean;
  marketplace?: {
    group_name?: string;
    name?: string;
    short_name?: string;
    uuid?: string;
    account_details?: string;
    account_details_encrypted?: boolean;
  };

  /** @example first name */
  first_name?: string;

  /** @example last name */
  last_name?: string;

  /** @example email@email.com */
  user_email?: string;

  /** @example buyer-71391895 */
  user_external_id?: string;

  /** @example 49fac28b-5628-4cec-854f-58a9b87dd58d */
  legal_entity_id?: string;

  /** @example 1588681395 */
  phone?: string;
  payout_currency?: string;

  /** @example disbursement */
  type?: string;

  /** @example direct_credit */
  type_method?: string;

  /** @example 302 */
  batch_id?: number;
  cuscal_payment_transaction_id?: string;
  reference?: string;

  /** @example batched */
  state?: string;

  /** @example 064d6800-fff3-11e5-86aa-5e5517507c66 */
  user_id?: string;

  /** @example e57120ea-053d-11e6-b512-3e1d05defe78 */
  account_id?: string;

  /** @example item */
  account_type?: string;

  /** @example payer */
  from_user_name?: string;

  /** @example 064d6800-fff3-11e5-86aa-5e5517507c66 */
  from_user_id?: string;
  refund_state?: string;

  /** @example 9800 */
  amount: number;

  /** @example AUD */
  currency?: string;

  /** @example ABC Pty Ltd */
  company?: string;

  /** @example Courtland Ave. */
  address_line1?: string;

  /** @example Building 1 */
  address_line2?: string;

  /** @example Melbourne */
  address_city?: string;

  /** @example VIC */
  address_state?: string;

  /** @example 3000 */
  address_postcode?: string;
  address_country?: {
    id?: string;
    name?: string;
    three_code?: string;
    two_code?: string;
    currency_id?: string;
    numeric_code?: string;
  };

  /** @example AUD */
  country?: string;

  /** @example credit */
  debit_credit?: string;

  /** @example Credit of $98.00 to Item by Debit of $98.00 from Wallet Account */
  description?: string;
  item?: { id?: string; item_number?: string };

  /** @example AUD */
  deposit_reference?: string;
  related?: { account_to?: { id?: string; account_type?: string; user_id?: string } };
  links?: {
    self?: string;
    users?: string;
    fees?: string;
    wallet_accounts?: string;
    card_accounts?: string;
    paypal_accounts?: string;
    bank_accounts?: string;
    items?: string;
    marketplace?: string;
  };
}

export interface SingleCallback {
  callbacks?: Callback;
}

export interface CallbackDeletion {
  /** @example Successfully redacted */
  callbacks?: string;
}

export interface Callbacks {
  callbacks?: Callback[];
}

export interface Callback {
  /** @example f92d4ca1-4ee5-43f3-9e34-ca5f759c5e76 */
  id?: string;

  /** @example Users Callback */
  description?: string;

  /** @example https://httpbin.org/post */
  url?: string;

  /** @example users */
  object_type?: "Transactions" | "Items" | "Users" | "Batch Transactions" | "Disbursements" | "Accounts";

  /** @example true */
  enabled?: boolean;
  authorization_token?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  updated_at?: string;

  /** @format uuid */
  marketplace_id?: string;
  links?: { self?: string; responses?: string };
}

export interface SingleCallbackResponse {
  call_responses?: CallbackResponse;
}

export interface ListCallbackResponses {
  callback_responses?: CallbackResponse[];
  meta?: { limit?: number; offset?: number; total?: number };
  links?: { self?: string; callbacks?: string };
}

export interface CallbackResponse {
  /** @example 4476b384-fa48-4473-98ec-8fcdda4a1e84 */
  id?: string;

  /** @example https://httpbin.org/post */
  url?: string;

  /** @format date-time */
  created_at?: string;
  payload?: { message?: string };
  response?: { error?: string };

  /** @example 200 */
  response_code?: number;
}

export interface SimpleCompany {
  /** @example 9280aa36-d7f8-4959-b1ed-0ace2c12cfa2 */
  id?: string;

  /** @example Assembly Payments */
  name?: string;

  /** @example PromisePay */
  legal_name?: string;
}

export interface SimpleCompanies {
  companies?: SimpleCompany[];
}

export interface SingleCompany {
  companies?: Company;
}

export interface Company {
  /** @example Samuel's Gardening Pty Ltd */
  legal_name?: string;

  /** @example Samuel's Gardening */
  name?: string;

  /** @example 100200300 */
  tax_number?: string;

  /** @example false */
  charge_tax?: boolean | null;

  /** @example 61400000000 */
  phone?: string;

  /** @example 7b85aa9c-fc54-4449-afef-f52fc2b94cd3 */
  id?: string;
  related?: { address?: string; users?: string };
  self?: { self?: string };
}

export interface SingleDirectDebitAuthority {
  direct_debit_authorities?: DirectDebitAuthority;
}

export interface ListDirectDebitAuthorities {
  direct_debit_authorities?: DirectDebitAuthority[];
}

export interface DirectDebitAuthority {
  /** @example 8f233e04-ffaa-4c9d-adf9-244853848e21 */
  id?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  updated_at?: string;

  /** @example 100000 */
  amount?: string;

  /** @example 83001 */
  bank_bsb?: string;

  /** @example 481561 */
  debit_user_id?: string;

  /** @example approved */
  state?: string;
  related?: { bank_accounts?: string };
  links?: { self?: string };
}

export interface SingleFee {
  fees?: Fee;
}

export interface Fees {
  fees?: Fee[];
  meta?: { limit?: number; offset?: number; total?: number };
  links?: { self?: string };
}

export interface Fee {
  /** @example 36020976-f345-4d0f-b860-9c025ccce668 */
  id?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  updated_at?: string;

  /** @example Seller Success Fee */
  name?: string;

  /** @example 2 */
  fee_type_id?: string;

  /** @example 200 */
  amount?: string;

  /** @example null */
  cap?: string;

  /** @example null */
  min?: string;

  /** @example null */
  max?: string;

  /** @example seller */
  to?: string;

  /**
   * This field is only shown in case an item amount is passed
   * @example 400
   */
  calculated_fee?: number;
  links?: { self?: string };
}

export interface SingleTransaction {
  transactions?: Transaction;
}

export interface Transactions {
  transactions?: Transaction[];
  meta?: { limit?: number; offset?: number; total?: number };
  links?: { self?: string };
}

export interface Transaction {
  /** @example 7a138862-f821-412d-a91e-367ed7391fe7 */
  id?: string;

  /** @example 7190770-1-2908 */
  reference_id?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  updated_at?: string;

  /** @example Debit of $250.00 from Credit Card for Credit of $250.00 to Item */
  description?: string;

  /** @example Test payee */
  payee_name?: string;

  /** @example payment */
  type?: string;

  /** @example credit_card */
  type_method?: string;

  /** @example successful */
  state?: string;

  /** @example 064d6800-fff3-11e5-86aa-5e5517507c66 */
  user_id?: string;

  /** @example First1556505750 LastName */
  user_name?: string;

  /** @example Item 7190985-1-9382 */
  item_name?: string;

  /** @example 100014012533407 */
  dynamic_descriptor?: string;

  /** @example 930a7f78-6bf6-4f33-8cfc-b82c787b5f83 */
  account_id?: string;

  /** @example card_account */
  account_type?: string;

  /** @example 25000 */
  amount?: string;

  /** @example AUD */
  currency?: string;

  /** @example debit */
  debit_credit?: string;
  marketplace?: { group_name?: string; name?: string; short_name?: string; uuid?: string };
  related?: {
    transactions?: {
      id?: string;
      account_id?: string;
      account_type?: string;
      user_id?: string;
      user_name?: string;
      item_name?: string;
    }[];
  };

  /** payee details. only filled for specific payment types (fast payments - npp) */
  payee_details?: {
    debtor_name?: string;
    debtor_legal_name?: string;
    debtor_bsb?: string;
    debtor_account?: string;
    clearing_system_transaction_id?: string;
    remittance_information?: string;
    pay_id?: string;
    pay_id_type?: string;
    end_to_end_id?: string;
    npp_payin_internal_id?: string;
  };
  links?: {
    self?: string;
    users?: string;
    fees?: string;
    wallet_accounts?: string;
    card_accounts?: string;
    paypal_accounts?: string;
    bank_accounts?: string;
    items?: string;
    marketplaces?: string;
    npp_payin_transaction_detail?: string;
    supplementary_data?: string;
  };
}

export interface Disbursements {
  disbursements?: Disbursement[];
  meta?: { limit?: number; offset?: number; total?: number };
}

export interface SingleDisbursement {
  disbursements?: Disbursement;
}

export interface Disbursement {
  /** @example ad688d54-6791-4f1d-add7-88fbd89b70d1 */
  id?: string;

  /** @example 7190770-1-2908 */
  reference_id?: string;

  /** @example 10000 */
  amount?: number;

  /** @example AUD */
  currency?: string;

  /** @example null */
  batch_id?: string;

  /** @example null */
  cuscal_payment_transaction_id?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  updated_at?: string;

  /** @example pending */
  state?: string;

  /** @example Bank Account */
  to?: string;

  /** @example Bank of Australia */
  bank_name?: string;

  /** @example Samuel Seller */
  bank_account_name?: string;

  /** @example XXX234 */
  bank_account_number?: string;

  /** @example XXXXX3 */
  bank_routing_number?: string;

  /** @example trying */
  npp_payout_state?: string;

  /** @example My Water Company */
  account_name?: string;

  /** @example ABC Water */
  biller_name?: string;

  /** @example 123456 */
  biller_code?: string;

  /** @example 987654321 */
  crn?: string;
  links?: {
    transactions?: string;
    wallet_accounts?: string;
    paypal_accounts?: string;
    bank_accounts?: string;
    bpay_accounts?: string;
    items?: string;
    users?: string;
  };
}

export interface WireDetails {
  /** @example Assembly Payments */
  beneficiary?: string;

  /** @example 500 Bourke Street */
  address_line1?: string;

  /** @example Melbourne */
  city?: string;

  /** @example VIC */
  state?: string;

  /** @example 3000 */
  zip?: string;

  /** @example 83001 */
  routing_number?: string;

  /** @example 844144573 */
  account_number?: string;

  /** @example National Australia Bank */
  bank_name?: string;

  /** @example NATAAU3303M */
  swift?: string;

  /** @example 100014013961629 */
  reference?: string;

  /** @example $250.00 */
  amount?: string;

  /** @example AUD */
  currency?: string;

  /** @example Australia */
  country?: string;
}

export interface WireDetailsWithId {
  /** @example 100fd4a0-0538-11e6-b512-3e1d05defe78 */
  id?: string;
  wire_details?: WireDetails;
}

export interface SingleWireDetailsWithId {
  items?: WireDetailsWithId;
}

export interface SingleStatus {
  items?: Status;
}

export interface Status {
  /** @example 100fd4a0-0538-11e6-b512-3e1d05defe78 */
  id?: string;

  /** @example 22000 */
  status?: string;

  /** @example pending */
  state?: string;
}

export interface SingleBpayDetailsWithId {
  items?: BpayDetailsWithId;
}

export interface BpayDetailsWithId {
  /** @example 100fd4a0-0538-11e6-b512-3e1d05defe78 */
  id?: string;
  bpay_details?: BpayDetails;
}

export interface BpayDetails {
  /** @example 230680 */
  biller_code?: string;

  /** @example $250.00 */
  amount?: string;

  /** @example AUD */
  currency?: string;

  /** @example 100014013961629 */
  reference?: string;
}

export interface Error {
  error?: string;
}

export interface TokensRequestBody {
  /**
   * This is a constant value of `client_credentials`
   * @example client_credentials
   */
  grant_type: string;

  /**
   * This value is supplied to you by Assembly Payments.
   * @example 10ajtntet1ccghuo8mv9ojglma
   */
  client_id: string;

  /**
   * This value is supplied to you by Assembly Payments.
   * @example hto00nsjk6osurndceon4rsn2irhi8s4lurau5f797d0smb94l6
   */
  client_secret: string;

  /**
   * This value is supplied to you by Assembly Payments.
   * @example im-au-04/cdbf9590-1db6-0139-ac4d-0a58a9feac03
   */
  scope: string;
}

export interface TokensResponse {
  /**
   * JWT issued by AWS Cognito.
   * @example ey...J9.ey...n0.Iu...7g
   */
  access_token?: string;

  /**
   * Lifetime of access token in seconds.
   * @example 3600
   */
  expires_in?: number;

  /**
   * Authorization header value prefix. This is a constant.
   * @example Bearer
   */
  token_type?: string;
}

export interface BankAccountRequestBody {
  /**
   * User ID
   * @example aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
   */
  user_id: string;

  /**
   * Bank name
   * @example Bank of Australia
   */
  bank_name: string;

  /**
   * Account name
   * @example Samuel Seller
   */
  account_name: string;

  /**
   * *Required conditionally* - Routing number / SWIFT code / BSB number. See [Bank account formats by country](https://developer.assemblypayments.com/docs/input-formats).
   *
   * @example 111123
   */
  routing_number: string;

  /**
   * Account number / IBAN. See [Bank account formats by country](https://developer.assemblypayments.com/docs/input-formats).
   *
   * @example 111234
   */
  account_number: string;

  /**
   * Bank account type (savings or checking)
   * @example checking
   */
  account_type: "savings" | "checking";

  /**
   * Holder type (personal or business)
   * @example personal
   */
  holder_type: "personal" | "business";

  /**
   * [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Officially_assigned_code_elements) country code (3 char)
   * @example AUS
   */
  country: string;

  /**
   * [ISO 4217 alpha-3](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) currency code. This parameter determines the currency with which funds are paid out.
   * @example AUD
   */
  payout_currency?: string;

  /**
   * [ISO 4217 alpha-3](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) currency code. This is an optional field and if not provided, the item will be created with the default currency of the marketplace.
   * @example AUD
   */
  currency?: string;
}

export interface PennyVerifyRequestBody {
  /** First penny amount in cents. Can range from 1 to 30 cents. */
  amount_1: number;

  /** Second penny amount in cents. Can range from 1 to 30 cents. */
  amount_2: number;
}

export interface BpayAccountRequestBody {
  /**
   * User ID
   * @example 725cc8c0-759b-0138-5d6d-0a58a9feac05
   */
  user_id: string;

  /**
   * Name assigned by the platform/marketplace to identify the account (similar to a nickname)
   * @example My Water Bill Company
   */
  account_name: string;

  /**
   * The Biller Code for the biller that will receive the payment. The Biller Code must be a numeric value with 3 to 10 digits.
   * @example 123456
   */
  biller_code: number;

  /**
   * Customer reference number (crn) to be used for this bpay account. The CRN must contain between 2 and 20 digits.
   * @example 987654321
   */
  bpay_crn: string;
}

export interface BillPaymentRequestBody {
  /**
   * BPay Account to withdraw to. This needs to be a bpay_account id
   * @example c1824ad0-73f1-0138-3700-0a58a9feac09
   */
  account_id: string;

  /**
   * Amount (in cents) to withdraw.
   * @example 173
   */
  amount: number;
}

export interface CallbackRequestBody {
  /**
   * URL to which the callbacks will notify
   * @example https://httpbin.org
   */
  url: string;

  /**
   * Object or entity to which the callbacks refer. Please refer to [Callbacks](https://developer.assemblypayments.com/docs/callbacks) for a list of object types.
   * @example users
   */
  object_type: string;

  /**
   * Toggle whether callback is active or inactive.
   * @example true
   */
  enabled: string;
}

export interface CardAccountRequestBody {
  /**
   * User full name with at least a space
   * @example John Doe
   */
  full_name: string;

  /**
   * Account number
   * @example 4444111122223333
   */
  number: string;

  /**
   * Expiry month (MM)
   * @example 1
   */
  expiry_month: number;

  /**
   * Expiry year (YYYY)
   * @example 2025
   */
  expiry_year: number;

  /**
   * CVV / CVC
   * @example 123
   */
  cvv: string;

  /**
   * User ID
   * @example 83f54680-9600-4bee-a6d1-84a5d0e10059
   */
  user_id: string;
}

export interface CardAccountVerifyRequestBody {
  /**
   * CVV / CVC
   * @example 123
   */
  cvv?: string;
}

export interface CompanyRequestBody {
  /**
   * Company name
   * @example ABC
   */
  name: string;

  /**
   * Company legal name
   * @example ABC Pty Ltd
   */
  legal_name: string;

  /**
   * ABN / Tax number
   * @example 123456789
   */
  tax_number: string;

  /**
   * Charge GST or not? allowed values are true or false
   * @example
   */
  charge_tax?: boolean | null;

  /**
   * Address line 1
   * @example Collins
   */
  address_line1?: string;

  /**
   * Address line 2
   * @example
   */
  address_line2?: string;

  /**
   * City
   * @example Melbourne
   */
  city?: string;

  /**
   * State
   * @example VIC
   */
  state?: string;

  /**
   * Zip
   * @example 3000
   */
  zip?: string;

  /**
   * 3 digit country code (eg. AUS)
   * @example AUS
   */
  country: string;

  /**
   * Company phone number
   * @example
   */
  phone?: string;

  /**
   * User ID to associate with the company
   * @example buyer-70729325
   */
  user_id: string;
}

export interface DirectDebitAuthorityRequestBody {
  /**
   * Bank account ID
   * @example 7fac6c60-6f5b-0138-eb9a-0a58a9feac03
   */
  account_id: string;

  /**
   * Amount for direct debit in cents
   * @example 100
   */
  amount: number;
}

export interface FeeRequestBody {
  /**
   * Name
   * @example Seller Success Fee
   */
  name: string;

  /**
   * Fee type:
   *   1. Fixed
   *   2. Percentage
   *   3. Percentage with Cap
   *   4. Percentage with Min
   *
   * @example 2
   */
  fee_type_id: "1" | "2" | "3" | "4";

  /**
   * Amount in cents; if the fee type is percentage, then this shows the percentage in hundredths (For example, an amount of 5 refers to 0.05% in fees.)
   * @example 200
   */
  amount: number;

  /**
   * Cap the Fee
   * @example
   */
  cap?: string;

  /**
   * Minimum Fee
   * @example
   */
  min?: number;

  /**
   * Maximum Fee
   * @example
   */
  max?: number;

  /**
   * Who pays the Fee. Allowed values are (buyer or seller). If this field has a value of buyer, then the buyer will have to pay the fee on top of the actual payment (example for an item of 100 and a fee of 2, then the buyer would have to pay 102) If this field has a value of seller, then the seller will end up receiving the amount - the fee (example for an item of 100 and a fee of 2, then the seller would end up receiving 98)
   * @example seller
   */
  to?: "buyer" | "seller" | "cc" | "int_wire";
}

export interface ChargeRequestBody {
  /**
   * Bank Account or Card Account ID
   * @example 5ef44050-4c56-0137-abdf-0242ac110002
   */
  account_id: string;

  /**
   * Description of the Charge being created.
   * @example Test Charge 001
   */
  name?: string;

  /**
   * The cost being charged in cents.
   * @example 1000
   */
  amount: number;

  /**
   * Email of the user associated with the account being charged.
   * @example buyer-1556505753@promisepay.com
   */
  email: string;

  /**
   * Postcode
   * @example 3000
   */
  zip: number;

  /**
   * [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Officially_assigned_code_elements) country code of the User being charged.
   * @example AUS
   */
  country: string;

  /**
   * The ID of the User
   * @example buyer-1556505753
   */
  user_id?: string;

  /**
   * A comma separated list of fee IDs to apply
   * @example
   */
  fee_ids?: string;

  /**
   * [ISO 4217 alpha-3](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) currency code. This is an optional field and if not provided, the item will be created with the default currency of the marketplace.
   * @example AUD
   */
  currency?: string;

  /**
   * True - Enables the account to be charged in the future. False - Redacts the account after this charge.
   *
   * @example
   */
  retain_account?: boolean;

  /**
   * Device Information for the device initiating the payment
   * @example
   */
  device_id?: string;

  /**
   * IP Information for the device initiating the payment
   * @example
   */
  ip_address?: string;

  /**
   * When `custom_descriptors` are enabled, this is the information to appear on credit card and direct debit statements.
   * @example
   */
  custom_descriptor?: string;

  /**
   * CVV / CVC
   * @example
   */
  cvv?: string;
}

export interface TokenAuthRequestBody {
  /**
   * Token type ID. use `bank` or `card`
   * @example bank
   */
  token_type: "bank" | "card";

  /**
   * Buyer or Seller ID (already created)
   * @example seller-68611249
   */
  user_id: string;
}

export interface UpdateUserRequestBody {
  /**
   * First name of the user
   * @example Neol1556506027
   */
  first_name: string;

  /**
   * Last name of the user
   * @example Calangi
   */
  last_name?: string;

  /**
   * Email of the user. Unique to platform.
   * @example neol.calangi+buyer1556506027@promisepay.com
   */
  email?: string;

  /**
   * International number format. Include ’+’ and no spaces.
   * @example +21556506027
   */
  mobile?: string;

  /**
   * First line of the user address
   * @example
   */
  address_line1?: string;

  /**
   * Second line of the user address
   * @example
   */
  address_line2?: string;

  /**
   * State section of the user address
   * @example
   */
  state?: string;

  /**
   * City section of the user address
   * @example
   */
  city?: string;

  /**
   * Postcode
   * @example
   */
  zip?: string;

  /**
   * [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Officially_assigned_code_elements) country code (3 char)
   * @example AUS
   */
  country?: string;

  /**
   * Date of Birth (DD/MM/YYYY).
   * @example null
   */
  dob?: string;

  /**
   * Generic parameter to capture important user verification data. eg. SSN for US users, TFN for AU users.
   * @example
   */
  government_number?: string;

  /**
   * Driving license number of the user
   * @example
   */
  drivers_license_number?: string;

  /**
   * State section of the user's driving license
   * @example
   */
  drivers_license_state?: string;

  /**
   * IP address
   * @example
   */
  ip_address?: string;

  /**
   * URL link to the logo
   * @example
   */
  logo_url?: string;

  /**
   * Color code number 1
   * @example
   */
  color_1?: string;

  /**
   * Color code number 2
   * @example
   */
  color_2?: string;

  /**
   * When custom_descriptors are enabled, this is the information to appear on bundle direct debit statements (which show the buyer's custom_descriptor) as well as international wire payout, direct credit and PayPal payout statements (which show the seller's custom_descriptor)
   * @example
   */
  custom_descriptor?: string;
}

export interface BankAccountIdRequestBody {
  /**
   * Account ID (Bank account)
   * @example 901d8cd0-6af3-0138-967d-0a58a9feac04
   */
  account_id: string;
}

export interface UserRequestBody {
  /**
   * Unique ID that can be generated by the platform. Cannot contain ’.’  character. Contact Assembly support if you want user IDs to be generated automatically.
   * @example buyer-1556506027
   */
  id: string;

  /**
   * First name of the user
   * @example Neol1556506027
   */
  first_name: string;

  /**
   * Last name of the user
   * @example Calangi
   */
  last_name: string;

  /**
   * Email of the user. Unique to platform.
   * @example neol.calangi+buyer1556506027@promisepay.com
   */
  email: string;

  /**
   * International number format. Include ’+’ and no spaces.
   * @example +21556506027
   */
  mobile?: string;

  /**
   * First line of the user address
   * @example
   */
  address_line1?: string;

  /**
   * Second line of the user address
   * @example
   */
  address_line2?: string;

  /**
   * State section of the user address
   * @example
   */
  state?: string;

  /**
   * City section of the user address
   * @example
   */
  city?: string;

  /**
   * Postcode
   * @example
   */
  zip?: string;

  /**
   * [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Officially_assigned_code_elements) country code (3 char)
   * @example AUS
   */
  country: string;

  /**
   * Date of Birth (DD/MM/YYYY).
   * @example null
   */
  dob?: string;

  /**
   * Generic parameter to capture important user verification data. eg. SSN for US users, TFN for AU users.
   * @example
   */
  government_number?: string;

  /**
   * Driving license number of the user
   * @example
   */
  drivers_license_number?: string;

  /**
   * State section of the user's driving license
   * @example
   */
  drivers_license_state?: string;

  /**
   * IP address
   * @example
   */
  ip_address?: string;

  /**
   * URL link to the logo
   * @example
   */
  logo_url?: string;

  /**
   * Color code number 1
   * @example
   */
  color_1?: string;

  /**
   * Color code number 2
   * @example
   */
  color_2?: string;

  /**
   * When custom_descriptors are enabled, this is the information to appear on bundle direct debit statements (which show the buyer's custom_descriptor) as well as international wire payout, direct credit and PayPal payout statements (which show the seller's custom_descriptor)
   * @example
   */
  custom_descriptor?: string;
}

export interface WithdrawRequestBody {
  /**
   * Account to withdraw to.
   * @example c1824ad0-73f1-0138-3700-0a58a9feac09
   */
  account_id: string;

  /**
   * Amount (in cents) to withdraw.
   * @example 173
   */
  amount: number;

  /**
   * A descriptor specified by the customer to be passed on the withdraw call. This requires that custom_descriptors are enabled. In the case of fast payments (AU / NPP) Assembly will append a value in the beginning of descriptor, the customer can use 200 characters (excluding URL, javascript/code, emojis). In the case of DE batch payments will allow 18 characters
   * @example
   */
  custom_descriptor?: string;

  /**
   * Unique ID information that can be specified by Platforms for wallet withdrawal request. This is an optional field and cannot contain ’.’ character.
   * @example 7190770-1-2908
   */
  reference_id?: string;
}

export interface DepositRequestBody {
  /**
   * Account to deposit from.
   * @example c1824ad0-73f1-0138-3700-0a58a9feac09
   */
  account_id: string;

  /**
   * Amount (in cents) to deposit.
   * @example 100
   */
  amount: number;
}

export interface ItemRequestBody {
  /**
   * Unique ID that can be generated by the platform. Cannot contain ’.’ character. Contact Assembly support if you want item IDs to be generated automatically.
   * @example 7190770-1-2908
   */
  id: string;

  /**
   * A name for the item
   * @example Item 7190770-1-2908
   */
  name: string;

  /**
   * The cost in cents
   * @example 102
   */
  amount: number;

  /**
   * [ISO 4217 alpha-3](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) currency code. This is an optional field and if not provided, the item will be created with the default currency of the marketplace.
   * @example AUD
   */
  currency?: string;

  /**
   * Payment type: 2. Express
   * @example 2
   */
  payment_type: number;

  /**
   * Marketplace / Pltform buyer ID
   * @example buyer-719013950014
   */
  buyer_id: string;

  /**
   * Marketplace / Platform Seller ID
   * @example seller-71718579
   */
  seller_id: string;

  /**
   * A comma separated list of fee IDs to apply
   * @example
   */
  fee_ids?: string;

  /**
   * A description of the item
   * @example Test Item 7190770-1-2908
   */
  description?: string;

  /**
   * Link for the buyer CTA (Call To Action)
   * @example
   */
  buyer_url?: string;

  /**
   * Link for the seller CTA (Call To Action)
   * @example
   */
  seller_url?: string;

  /**
   * Toggle to generate tax invoice once Item is complete
   * @example
   */
  tax_invoice?: boolean;

  /**
   * When `custom_descriptors` are enabled, this is the information to appear on credit card and direct debit statements.
   * @example
   */
  custom_descriptor?: string;
}

export interface UpdateItemRequestBody {
  /**
   * The cost in cents
   * @example 102
   */
  amount?: number;

  /**
   * A name for the item
   * @example Item 7190770-1-2908
   */
  name?: string;

  /**
   * Marketplace / Pltform buyer ID
   * @example buyer-719013950014
   */
  buyer_id?: string;

  /**
   * Marketplace / Platform Seller ID
   * @example seller-71718579
   */
  seller_id?: string;

  /**
   * A description of the item
   * @example Test Item 7190770-1-2908
   */
  description?: string;

  /**
   * When `custom_descriptors` are enabled, this is the information to appear on credit card and direct debit statements.
   * @example
   */
  custom_descriptor?: string;
}

export interface AccountIdRequestBody {
  /**
   * Account id of the bank account/credit card, etc making payment (not user id)
   * @example 725cc8c0-759b-0138-5d6d-0a58a9feac05
   */
  account_id: string;

  /**
   * Device Information for the device initiating the payment. This will need to be provided for card payments.
   * @example
   */
  device_id?: string;

  /**
   * IP Information for the device initiating the payment. This will need to be provided for card payments.
   * @example
   */
  ip_address?: string;

  /**
   * CVV / CVC
   * @example
   */
  cvv?: string;
}

export interface RefundRequestBody {
  /**
   * For partial refunds, if they are enabled for marketplace.
   * @example
   */
  refund_amount?: number;

  /**
   * Reason for the request.
   * @example
   */
  refund_message?: string;

  /**
   * The account id to be used to get the refunds from. This will need to be an account that has already been set up within Assembly
   * @example
   */
  account_id?: string;
}

export interface CardAccountIdRequestBody {
  /**
   * Card account ID
   * @example 725cc8c0-759b-0138-5d6d-0a58a9feac05
   */
  account_id: string;

  /**
   * CVV / CVC
   * @example
   */
  cvv?: string;
}

export interface ReleasePaymentRequestBody {
  /**
   * Partial amount to be released in cents
   * @example
   */
  release_amount?: number;

  /**
   * to be used if release flagging enabled for your marketplace
   * @example
   */
  flag_release?: boolean;
}
