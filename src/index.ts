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
  id?: string;

  /** @example Landscaping Job #001 */
  name?: string;

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
  amount?: number;

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
  id?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  updated_at?: string;

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
  amount?: number;

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
   * Description to identify the callback
   * @example Users Callback
   */
  description: string;

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
  amount: string;
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
  amount: string;

  /**
   * Cap the Fee
   * @example
   */
  cap?: string;

  /**
   * Minimum Fee
   * @example
   */
  min?: string;

  /**
   * Maximum Fee
   * @example
   */
  max?: string;

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
  amount: string;

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
  amount: string;

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
  amount?: string;

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
  refund_amount?: string;

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
  release_amount?: string;

  /**
   * to be used if release flagging enabled for your marketplace
   * @example
   */
  flag_release?: boolean;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://virtserver.swaggerhub.com/AssemblyPlatforms/assembly-api/2.0";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return `${value.map(this.addQueryParam).join("&")}`;
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Assembly API
 * @version 2.0
 * @baseUrl https://virtserver.swaggerhub.com/AssemblyPlatforms/assembly-api/2.0
 * @contact <support@assemblypayments.com> (http://docs.assemblypayments.com/)
 *
 * Assembly (formely PromisePay) is a powerful payments engine custom-built for platforms and marketplaces.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  tokens = {
    /**
     * @description Exchange client application credentials for a bearer token. Please ensure to call the auth issuing server as described at https://developer.assemblypayments.com/reference#authentication
     *
     * @tags Authentication
     * @name Token
     * @summary Token
     * @request POST:/tokens
     * @secure
     */
    token: (data: TokensRequestBody, params: RequestParams = {}) =>
      this.request<TokensResponse, Error>({
        path: `/tokens`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  addresses = {
    /**
     * @description Show details of a specific Address using a given address `:id`.
     *
     * @tags Addresses
     * @name ShowAddress
     * @summary Show Address
     * @request GET:/addresses/{id}
     * @secure
     */
    showAddress: (id: string, params: RequestParams = {}) =>
      this.request<Address, any>({
        path: `/addresses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  bankAccounts = {
    /**
     * @description Show details of a specific **Bank Account** using a given `:id`.
     *
     * @tags Bank Accounts
     * @name ShowBankAccount
     * @summary Show Bank Account
     * @request GET:/bank_accounts/{id}
     * @secure
     */
    showBankAccount: (id: string, params: RequestParams = {}) =>
      this.request<BankAccount, any>({
        path: `/bank_accounts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    redactBankAccount: (id: string, params: RequestParams = {}) =>
      this.request<BankAccountDeletion, any>({
        path: `/bank_accounts/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
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
    sendPennyAmount: (id: string, params: RequestParams = {}) =>
      this.request<BankAccount, any>({
        path: `/bank_accounts/${id}/penny_send`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
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
    createBankAccount: (data: BankAccountRequestBody, params: RequestParams = {}) =>
      this.request<BankAccount, any>({
        path: `/bank_accounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    verifyPennyAmount: (id: string, data: PennyVerifyRequestBody, params: RequestParams = {}) =>
      this.request<BankAccount, any>({
        path: `/bank_accounts/${id}/penny_verify`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    showBankAccountUser: (id: string, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/bank_accounts/${id}/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  tools = {
    /**
     * @description Validate a US bank routing number before creating an account. This can be used to provide on-demand verification, and further information of the bank information a User is providing.
     *
     * @tags Bank Accounts
     * @name ValidateRoutingNumber
     * @summary Validate Routing Number
     * @request GET:/tools/routing_number
     * @secure
     */
    validateRoutingNumber: (query: { routing_number: string }, params: RequestParams = {}) =>
      this.request<SingleRoutingNumber, any>({
        path: `/tools/routing_number`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Displays a health check of the Assembly service.
     *
     * @tags Tools
     * @name HealthCheck
     * @summary Health check
     * @request GET:/tools/status
     * @secure
     */
    healthCheck: (params: RequestParams = {}) =>
      this.request<ToolsStatus, any>({
        path: `/tools/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  bpayAccounts = {
    /**
     * @description Show details of a specific **BPay Account** using a given `:id`.
     *
     * @tags BPay Accounts
     * @name ShowBPayAccount
     * @summary Show BPay Account
     * @request GET:/bpay_accounts/{id}
     * @secure
     */
    showBPayAccount: (id: string, params: RequestParams = {}) =>
      this.request<BpayAccount, any>({
        path: `/bpay_accounts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    redactBPayAccount: (id: string, params: RequestParams = {}) =>
      this.request<BpayAccountDeletion, any>({
        path: `/bpay_accounts/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
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
    createBPayAccount: (data: BpayAccountRequestBody, params: RequestParams = {}) =>
      this.request<BpayAccount, any>({
        path: `/bpay_accounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    showBPayAccountUser: (id: string, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/bpay_accounts/${id}/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  walletAccounts = {
    /**
     * @description Pay a bill by withdrawing funds from a **Wallet Account** to a specified bpay account.
     *
     * @tags Wallet Accounts
     * @name BillPayment
     * @summary Pay a Bill
     * @request POST:/wallet_accounts/{id}/bill_payment
     * @secure
     */
    billPayment: (id: string, data: BillPaymentRequestBody, params: RequestParams = {}) =>
      this.request<SingleDisbursement, any>({
        path: `/wallet_accounts/${id}/bill_payment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    showWalletAccountUser: (id: string, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/wallet_accounts/${id}/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    withdrawFunds: (id: string, data: WithdrawRequestBody, params: RequestParams = {}) =>
      this.request<SingleDisbursement, any>({
        path: `/wallet_accounts/${id}/withdraw`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    depositFunds: (id: string, data: DepositRequestBody, params: RequestParams = {}) =>
      this.request<SingleDisbursement, any>({
        path: `/wallet_accounts/${id}/deposit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    showWalletAccount: (id: string, params: RequestParams = {}) =>
      this.request<WalletAccount, any>({
        path: `/wallet_accounts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    showWalletAccountNppDetails: (id: string, params: RequestParams = {}) =>
      this.request<WalletAccountNppDetails, any>({
        path: `/wallet_accounts/${id}/npp_details`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    showWalletAccountNbpayDetails: (id: string, params: RequestParams = {}) =>
      this.request<WalletAccountBpayDetails, any>({
        path: `/wallet_accounts/${id}/bpay_details`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description List the **BPay Accounts** the **User** is associated with using a given `:id`.
     *
     * @tags Users
     * @name ListUserBPayAccounts
     * @summary List User's BPay Accounts
     * @request GET:/users/{id}/bpay_accounts
     * @secure
     */
    listUserBPayAccounts: (id: string, params: RequestParams = {}) =>
      this.request<ListBpayAccounts, any>({
        path: `/users/${id}/bpay_accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    showUserCardAccount: (id: string, params: RequestParams = {}) =>
      this.request<CardAccount, any>({
        path: `/users/${id}/card_accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    showUser: (id: string, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    updateUser: (id: string, data: UpdateUserRequestBody, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    verifyUser: (id: string, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/users/${id}/identity_verified`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
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
    showUserBankAccount: (id: string, params: RequestParams = {}) =>
      this.request<BankAccount, any>({
        path: `/users/${id}/bank_accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    setUserDisbursementAccount: (id: string, data: BankAccountIdRequestBody, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/users/${id}/disbursement_account`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    listUsers: (query: { limit?: number; offset?: number; search: string }, params: RequestParams = {}) =>
      this.request<Users, any>({
        path: `/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
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
    createUser: (data: UserRequestBody, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    listUserItems: (id: string, query?: { offset?: number; limit?: number }, params: RequestParams = {}) =>
      this.request<Items, any>({
        path: `/users/${id}/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
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
    showUserWalletAccounts: (id: string, params: RequestParams = {}) =>
      this.request<WalletAccount, any>({
        path: `/users/${id}/wallet_accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  callbacks = {
    /**
     * @description Show details of a specific **Callback** using a given `:id`.
     *
     * @tags Callbacks
     * @name ShowCallback
     * @summary Show Callback
     * @request GET:/callbacks/{id}
     * @secure
     */
    showCallback: (id: string, params: RequestParams = {}) =>
      this.request<SingleCallback, any>({
        path: `/callbacks/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete an existing Callback using a given `:id`.
     *
     * @tags Callbacks
     * @name DeleteCallback
     * @summary Delete Callback
     * @request DELETE:/callbacks/{id}
     * @secure
     */
    deleteCallback: (id: string, params: RequestParams = {}) =>
      this.request<CallbackDeletion, any>({
        path: `/callbacks/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an existing **Callback** using a given `:id`. You can change the `URL`, the `object_type` and whether the **Callback** is `enabled` or `disabled`.
     *
     * @tags Callbacks
     * @name UpdateCallback
     * @summary Update Callback
     * @request PATCH:/callbacks/{id}
     * @secure
     */
    updateCallback: (id: string, data: CallbackRequestBody, params: RequestParams = {}) =>
      this.request<SingleCallback, any>({
        path: `/callbacks/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve an ordered and paginated list of the responses garnered from a callback using a given `:id`.
     *
     * @tags Callbacks
     * @name ListCallbackResponse
     * @summary List Callback Responses
     * @request GET:/callbacks/{id}/responses
     * @secure
     */
    listCallbackResponse: (id: string, query?: { limit?: number; offset?: number }, params: RequestParams = {}) =>
      this.request<ListCallbackResponses, any>({
        path: `/callbacks/${id}/responses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Show details of a specific **Callback** response using a given `:id`.
     *
     * @tags Callbacks
     * @name ShowCallbackResponse
     * @summary Show Callback Response
     * @request GET:/callbacks/{callback_id}/responses/{id}
     * @secure
     */
    showCallbackResponse: (callbackId: string, id: string, params: RequestParams = {}) =>
      this.request<SingleCallbackResponse, any>({
        path: `/callbacks/${callbackId}/responses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve an ordered and paginated list of all created **Callbacks**.
     *
     * @tags Callbacks
     * @name ListCallbacks
     * @summary List Callbacks
     * @request GET:/callbacks
     * @secure
     */
    listCallbacks: (query?: { limit?: number; offset?: number; filter?: string }, params: RequestParams = {}) =>
      this.request<Callbacks, any>({
        path: `/callbacks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a **Callback** to notify you at the `URL` when the `object_type` changes
     *
     * @tags Callbacks
     * @name CreateCallback
     * @summary Create Callback
     * @request POST:/callbacks
     * @secure
     */
    createCallback: (data: CallbackRequestBody, params: RequestParams = {}) =>
      this.request<SingleCallback, any>({
        path: `/callbacks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  cardAccounts = {
    /**
     * @description Create a Credit **Card Account** to be used as a funding source. Store the returned `:id` and use it for a `make_payment` **Item Action** call. The `:id` is also referred to as a **token** when involving Credit Cards.
     *
     * @tags Card Accounts
     * @name CreateCardAccount
     * @summary Create Card Account
     * @request POST:/card_accounts
     * @secure
     */
    createCardAccount: (data: CardAccountRequestBody, params: RequestParams = {}) =>
      this.request<CardAccount, any>({
        path: `/card_accounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    showCardAccountUser: (id: string, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/card_accounts/${id}/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    verifyCard: (id: string, data: CardAccountVerifyRequestBody, params: RequestParams = {}) =>
      this.request<CardAccount, any>({
        path: `/card_accounts/${id}/verify`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
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
    showCardAccount: (id: string, params: RequestParams = {}) =>
      this.request<CardAccount, any>({
        path: `/card_accounts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    redactCardAccount: (id: string, params: RequestParams = {}) =>
      this.request<CardAccountDeletion, any>({
        path: `/card_accounts/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  companies = {
    /**
     * @description Retrieve an ordered and paginated list of existing **Companies**.
     *
     * @tags Companies
     * @name ListCompanies
     * @summary List Companies
     * @request GET:/companies
     * @secure
     */
    listCompanies: (query?: { limit?: number; offset?: number }, params: RequestParams = {}) =>
      this.request<SimpleCompanies, any>({
        path: `/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a **Company** associated with the **User** using a given `user_id`. **Note**: Some parameters are required for user verification. See our guide on [Onboarding a Payout User/Seller](https://developer.assemblypayments.com/docs/onboarding-a-pay-out-user) for more information.
     *
     * @tags Companies
     * @name CreateCompany
     * @summary Create Company
     * @request POST:/companies
     * @secure
     */
    createCompany: (data: CompanyRequestBody, params: RequestParams = {}) =>
      this.request<SingleCompany, any>({
        path: `/companies`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Show details of a specific **Company** using a given `:id`.
     *
     * @tags Companies
     * @name ShowCompany
     * @summary Show Company
     * @request GET:/companies/{id}
     * @secure
     */
    showCompany: (id: string, params: RequestParams = {}) =>
      this.request<SingleCompany, any>({
        path: `/companies/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an existing **Company** attributes using a given `:id`.
     *
     * @tags Companies
     * @name UpdateCompany
     * @summary Update Company
     * @request PATCH:/companies/{id}
     * @secure
     */
    updateCompany: (id: string, data: CompanyRequestBody, params: RequestParams = {}) =>
      this.request<SingleCompany, any>({
        path: `/companies/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  directDebitAuthorities = {
    /**
     * @description Retrieve an ordered and paginated list of existing **Direct Debit Authorities**.
     *
     * @tags Direct Debit Authorities
     * @name ListDirectDebitAuthorities
     * @summary List Direct Debit Authorities
     * @request GET:/direct_debit_authorities
     * @secure
     */
    listDirectDebitAuthorities: (
      query: { account_id: string; limit?: number; offset?: number },
      params: RequestParams = {},
    ) =>
      this.request<ListDirectDebitAuthorities, any>({
        path: `/direct_debit_authorities`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a **Direct Debit Authority** associated with a **Bank Account**. The **Direct Debit Authority** is required to use a **Bank Account** as a funding source (Direct Debit/ACH).
     *
     * @tags Direct Debit Authorities
     * @name CreateDirectDebitAuthority
     * @summary Create Direct Debit Authority
     * @request POST:/direct_debit_authorities
     * @secure
     */
    createDirectDebitAuthority: (data: DirectDebitAuthorityRequestBody, params: RequestParams = {}) =>
      this.request<SingleDirectDebitAuthority, any>({
        path: `/direct_debit_authorities`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Show details of a specific **Direct Debit Authority** using a given `:id`.
     *
     * @tags Direct Debit Authorities
     * @name ShowDirectDebitAuthority
     * @summary Show Direct Debit Authority
     * @request GET:/direct_debit_authorities/{id}
     * @secure
     */
    showDirectDebitAuthority: (id: string, params: RequestParams = {}) =>
      this.request<SingleDirectDebitAuthority, any>({
        path: `/direct_debit_authorities/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  fees = {
    /**
     * @description Retrieve an ordered and paginated list of existing **Fees**.
     *
     * @tags Fees
     * @name ListFees
     * @summary List Fees
     * @request GET:/fees
     * @secure
     */
    listFees: (query?: { limit?: number; offset?: number }, params: RequestParams = {}) =>
      this.request<Fees, any>({
        path: `/fees`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a **Fee** to be associated with an **Item**. **Fees** will add or subtract from the **Item** amount based on the **User**, payment type or Disbursement account type. **Fees** can be `Fixed` or `Percentage` based. **Fees** can be capped, have a maximum amount and/or a minimum amount.
     *
     * @tags Fees
     * @name CreateFee
     * @summary Create fee
     * @request POST:/fees
     * @secure
     */
    createFee: (data: FeeRequestBody, params: RequestParams = {}) =>
      this.request<SingleFee, any>({
        path: `/fees`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Show details of a specific **Fee** using a given `:id`. If the `item_amount` is specified, the response also shows the `calculated_fee` based on a percentage of the `item_amount`.
     *
     * @tags Fees
     * @name ShowFee
     * @summary Show Fee
     * @request GET:/fees/{id}
     * @secure
     */
    showFee: (id: string, query: { item_amount: number }, params: RequestParams = {}) =>
      this.request<SingleFee, any>({
        path: `/fees/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  charges = {
    /**
     * @description Retrieve an ordered and paginated list of **Charges**.
     *
     * @tags Charges
     * @name ListCharges
     * @summary List Charges
     * @request GET:/charges
     * @secure
     */
    listCharges: (query?: { limit?: number; offset?: number }, params: RequestParams = {}) =>
      this.request<Charges, any>({
        path: `/charges`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a **Charge**. **Charges** require a specified **Card Account** or **Bank Account**. You may pass through an existing **User**, or define the `user_id` of the new user that will be associated with the **Charge** and the provided Account. The `user_id` can be left blank if you wish for a new user to be created for the **Charge**, or specified if you wish for a new **User** to be created with the passed `user_id`.
     *
     * @tags Charges
     * @name CreateCharge
     * @summary Create Charge
     * @request POST:/charges
     * @secure
     */
    createCharge: (data: ChargeRequestBody, params: RequestParams = {}) =>
      this.request<SingleCharge, any>({
        path: `/charges`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Show details of a specific **Charge** using a given `:id`.
     *
     * @tags Charges
     * @name ShowCharge
     * @summary Show Charge
     * @request GET:/charges/{id}
     * @secure
     */
    showCharge: (id: string, params: RequestParams = {}) =>
      this.request<SingleCharge, any>({
        path: `/charges/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Show status of a specific **Charge** using a given `:id`.
     *
     * @tags Charges
     * @name ShowChargeStatus
     * @summary Show Charge Status
     * @request GET:/charges/{id}/status
     * @secure
     */
    showChargeStatus: (id: string, params: RequestParams = {}) =>
      this.request<SingleChargeStatus, any>({
        path: `/charges/${id}/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Show the buyer **User** associated with the **Charge** using a given `:id`.
     *
     * @tags Charges
     * @name ShowChargeBuyer
     * @summary Show Charge Buyer
     * @request GET:/charges/{id}/buyers
     * @secure
     */
    showChargeBuyer: (id: string, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/charges/${id}/buyers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  marketplace = {
    /**
     * @description Show details of your **Platform**, providing access to your configuration and related **User** and **Company**.
     *
     * @tags Marketplaces
     * @name ShowMarketplace
     * @summary Show Marketplace
     * @request GET:/marketplace
     * @secure
     */
    showMarketplace: (params: RequestParams = {}) =>
      this.request<Marketplace, any>({
        path: `/marketplace`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  tokenAuths = {
    /**
     * @description Create a token, either for a bank or a card account, that can be used with the **PromisePay.js** package to securely send Assembly credit card details.
     *
     * @tags Token Auth
     * @name GenerateToken
     * @summary Generate Token
     * @request POST:/token_auths
     * @secure
     */
    generateToken: (data: TokenAuthRequestBody, params: RequestParams = {}) =>
      this.request<{ token_auth?: { token_type?: string; token?: string; user_id?: string } }, any>({
        path: `/token_auths`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  transactions = {
    /**
     * @description Retrieve an ordered and paginated list of **Transactions**.
     *
     * @tags Transactions
     * @name ListTransactions
     * @summary List Transactions
     * @request GET:/transactions
     * @secure
     */
    listTransactions: (
      query?: {
        limit?: number;
        offset?: number;
        account_id?: string;
        item_id?: string;
        transaction_type?: "payment" | "refund" | "disbursement" | "fee" | "deposit" | "withdrawal";
        transaction_type_method?:
          | "direct_debit"
          | "credit_card"
          | "npp"
          | "bpay"
          | "wallet_account_transfer"
          | "direct_credit"
          | "wire_transfer"
          | "misc";
        direction?: "debit" | "credit";
        user_id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Transactions, any>({
        path: `/transactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
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
    showTransactionBankAccount: (id: string, params: RequestParams = {}) =>
      this.request<BankAccount, any>({
        path: `/transactions/${id}/bank_accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    showTransaction: (id: string, params: RequestParams = {}) =>
      this.request<SingleTransaction, any>({
        path: `/transactions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    showTransactionCardAccount: (id: string, params: RequestParams = {}) =>
      this.request<CardAccount, any>({
        path: `/transactions/${id}/card_accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    showTransactionFees: (id: string, params: RequestParams = {}) =>
      this.request<Fees, any>({
        path: `/transactions/${id}/fees`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    showTransactionWalletAccount: (id: string, params: RequestParams = {}) =>
      this.request<WalletAccount, any>({
        path: `/transactions/${id}/wallet_accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    showTransactionUser: (id: string, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/transactions/${id}/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  batchTransactions = {
    /**
     * @description Retrieve an ordered and paginated list of existing **Batch Transactions**. The list can be filtered by **Account**, **Batch ID**, **Item**, and **Transaction Type**.
     *
     * @tags Batch Transactions
     * @name ListBatchTransactions
     * @summary List Batch Transactions
     * @request GET:/batch_transactions
     * @secure
     */
    listBatchTransactions: (
      query?: {
        limit?: number;
        offset?: number;
        account_id?: string;
        batch_id?: string;
        item_id?: string;
        transaction_type?: "payment" | "refund" | "disbursement" | "fee" | "deposit" | "withdrawal";
        transaction_type_method?:
          | "direct_debit"
          | "credit_card"
          | "npp"
          | "bpay"
          | "wallet_account_transfer"
          | "direct_credit"
          | "wire_transfer"
          | "misc";
        direction?: "debit" | "credit";
        created_before?: string;
        created_after?: string;
        disbursement_bank?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ListBatchTransactions, any>({
        path: `/batch_transactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
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
    showBatchTransaction: (id: string, params: RequestParams = {}) =>
      this.request<SingleBatchTransaction, any>({
        path: `/batch_transactions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  disbursements = {
    /**
     * @description Retrieve an ordered and paginated list of existing **Disbursements**. The list can be filtered by **Batch ID**.
     *
     * @tags Disbursements
     * @name ListDisbursement
     * @summary List Disbursements
     * @request GET:/disbursements
     * @secure
     */
    listDisbursement: (query?: { limit?: number; offset?: number; batch_id?: string }, params: RequestParams = {}) =>
      this.request<Disbursements, any>({
        path: `/disbursements`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
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
    showDisbursement: (id: string, params: RequestParams = {}) =>
      this.request<SingleDisbursement, any>({
        path: `/disbursements/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
      query?: { limit?: number; offset?: number },
      params: RequestParams = {},
    ) =>
      this.request<Transactions, any>({
        path: `/disbursements/${id}/transactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
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
    showDisbursementWalletAccounts: (id: string, params: RequestParams = {}) =>
      this.request<WalletAccount, any>({
        path: `/disbursements/${id}/wallet_accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    showDisbursementBankAccounts: (id: string, params: RequestParams = {}) =>
      this.request<BankAccount, any>({
        path: `/disbursements/${id}/bank_accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    showDisbursementUsers: (id: string, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/disbursements/${id}/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
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
    showDisbursementItems: (id: string, params: RequestParams = {}) =>
      this.request<Items, any>({
        path: `/disbursements/${id}/items`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  items = {
    /**
     * @description OK
     *
     * @tags Items
     * @name ListItems
     * @summary List Items
     * @request GET:/items
     * @secure
     */
    listItems: (
      query: { offset?: number; limit?: number; search: string; created_before?: string; created_after?: string },
      params: RequestParams = {},
    ) =>
      this.request<Items, any>({
        path: `/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create an **Item**. Items require two **Users**, a buyer and a seller. The `buyer_id` and `seller_id` are your unique user identifiers.
     *
     * @tags Items
     * @name CreateItem
     * @summary Create Item
     * @request POST:/items
     * @secure
     */
    createItem: (data: ItemRequestBody, params: RequestParams = {}) =>
      this.request<SingleItem, any>({
        path: `/items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Show details of a specific **Item** using a given `:id`.
     *
     * @tags Items
     * @name ShowItem
     * @summary Show Item
     * @request GET:/items/{id}
     * @secure
     */
    showItem: (id: string, params: RequestParams = {}) =>
      this.request<SingleItem, any>({
        path: `/items/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete an existing **Item** using a given `:id`.
     *
     * @tags Items
     * @name DeleteItem
     * @summary Delete Item
     * @request DELETE:/items/{id}
     * @secure
     */
    deleteItem: (id: string, params: RequestParams = {}) =>
      this.request<SingleItem, any>({
        path: `/items/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an existing **Items** attributes using a given `:id`. Note: An item can only be updated if it’s in `pending` state. Once an item has begun a payment process, you cannot update it.
     *
     * @tags Items
     * @name UpdateItem
     * @summary Update Item
     * @request PATCH:/items/{id}
     * @secure
     */
    updateItem: (id: string, data: UpdateItemRequestBody, params: RequestParams = {}) =>
      this.request<SingleItem, any>({
        path: `/items/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Show the seller **User** associated with the **Item** using a given `:id`.
     *
     * @tags Items
     * @name ShowItemSeller
     * @summary Show Item Seller
     * @request GET:/items/{id}/sellers
     * @secure
     */
    showItemSeller: (id: string, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/items/${id}/sellers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Show the buyer **User** associated with the **Item** using a given `:id`.
     *
     * @tags Items
     * @name ShowItemBuyer
     * @summary Show Item Buyer
     * @request GET:/items/{id}/buyers
     * @secure
     */
    showItemBuyer: (id: string, params: RequestParams = {}) =>
      this.request<SingleUser, any>({
        path: `/items/${id}/buyers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Show the **Fees** associated with the **Item** using a given `:id`.
     *
     * @tags Items
     * @name ShowItemFees
     * @summary Show Item Fees
     * @request GET:/items/{id}/fees
     * @secure
     */
    showItemFees: (id: string, params: RequestParams = {}) =>
      this.request<Fees, any>({
        path: `/items/${id}/fees`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Show the **Item** wire payment details using a given `:id`.
     *
     * @tags Items
     * @name ShowItemWireDetails
     * @summary Show Item Wire Details
     * @request GET:/items/{id}/wire_details
     * @secure
     */
    showItemWireDetails: (id: string, params: RequestParams = {}) =>
      this.request<SingleWireDetailsWithId, any>({
        path: `/items/${id}/wire_details`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve an ordered and paginated list of **Transactions** associated with the **Item** using a given `:id`.
     *
     * @tags Items
     * @name ListItemTransactions
     * @summary List Item Transactions
     * @request GET:/items/{id}/transactions
     * @secure
     */
    listItemTransactions: (id: string, params: RequestParams = {}) =>
      this.request<Transactions, any>({
        path: `/items/${id}/transactions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve an ordered and paginated list of **Batch Transactions** associated with the `Item` using a given `:id`. This will include both direct debits coming in, and the disbursements going out.
     *
     * @tags Items
     * @name ListItemBatchTransactions
     * @summary List Item Batch Transactions
     * @request GET:/items/{id}/batch_transactions
     * @secure
     */
    listItemBatchTransactions: (id: string, params: RequestParams = {}) =>
      this.request<ListBatchTransactions, any>({
        path: `/items/${id}/batch_transactions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Show the status of an **Item** using a given `:id`.
     *
     * @tags Items
     * @name ShowItemStatus
     * @summary Show Item Status
     * @request GET:/items/{id}/status
     * @secure
     */
    showItemStatus: (id: string, params: RequestParams = {}) =>
      this.request<SingleStatus, any>({
        path: `/items/${id}/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Make a payment for an **Item**. Pass the `:account_id` of a **Bank Account** or a **Card Account** associated with the **Item’s** buyer. The **Item** state will transition to one of `payment_held`, `payment_pending` or `completed` for an **Express** or **Approve** payment type.
     *
     * @tags Item Actions
     * @name MakePayment
     * @summary Make Payment
     * @request PATCH:/items/{id}/make_payment
     * @secure
     */
    makePayment: (id: string, data: AccountIdRequestBody, params: RequestParams = {}) =>
      this.request<SingleItem, any>({
        path: `/items/${id}/make_payment`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel an **Item**. This will transition the **Item** state to `cancelled`. **Items** can only be cancelled if they haven’t been actioned in any other way.
     *
     * @tags Item Actions
     * @name CancelItem
     * @summary Cancel
     * @request PATCH:/items/{id}/cancel
     * @secure
     */
    cancelItem: (id: string, params: RequestParams = {}) =>
      this.request<SingleItem, any>({
        path: `/items/${id}/cancel`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Refund an **Item**’s funds. A partial `amount` can be specified otherwise the full amount will be refunded. This will transition the **Item** state to ‘refunded’ if the full amount is refunded, or to the previously held state if a partial `amount` is specified.
     *
     * @tags Item Actions
     * @name Refund
     * @summary Refund
     * @request PATCH:/items/{id}/refund
     * @secure
     */
    refund: (id: string, data: RefundRequestBody, params: RequestParams = {}) =>
      this.request<SingleItem, any>({
        path: `/items/${id}/refund`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Where pre-authentication is enabled on a platform, initiates a credit card payment authorization for an item. When an authorization is successful, your platform holds the item amount for capture, but there is no transfer of funds happening. This call is used with the Capture Payment or Void Payment calls.
     *
     * @tags Item Actions
     * @name AuthorizePayment
     * @summary Authorize Payment
     * @request PATCH:/items/{id}/authorize_payment
     * @secure
     */
    authorizePayment: (id: string, data: CardAccountIdRequestBody, params: RequestParams = {}) =>
      this.request<SingleItem, any>({
        path: `/items/${id}/authorize_payment`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Where pre-authentication is enabled on a platform, completes a credit card payment for an item whose payment is authorized. This call is used with the Authorize Payment call.
     *
     * @tags Item Actions
     * @name CapturePayment
     * @summary Capture Payment
     * @request PATCH:/items/{id}/capture_payment
     * @secure
     */
    capturePayment: (id: string, params: RequestParams = {}) =>
      this.request<SingleItem, any>({
        path: `/items/${id}/capture_payment`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Where pre-authentication is enabled on a platform, voids the `payment_authorized` status for an item. This call is used with the Authorize Payment call. **Note**: Not all payment gateways support the Void Payment API call. In this case, you can wait until a payment authorization expires. A payment authorisation expires after 3 to 6 days if not captured.
     *
     * @tags Item Actions
     * @name VoidPayment
     * @summary Void Payment
     * @request PATCH:/items/{id}/void_payment
     * @secure
     */
    voidPayment: (id: string, params: RequestParams = {}) =>
      this.request<SingleItem, any>({
        path: `/items/${id}/void_payment`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Included for legacy purposes for existing customers that use Escrow payments which are no longer supported for new flows/customers. Release funds held in escrow from an **Item** with an **Escrow** or **Escrow Partial Release** payment type.  This will transition the **Item** state to `completed`.
     *
     * @tags Item Actions
     * @name ReleasePayment
     * @summary Release Payment (Deprecated - Do Not Use)
     * @request PATCH:/items/{id}/release_payment
     * @secure
     */
    releasePayment: (id: string, data: ReleasePaymentRequestBody, params: RequestParams = {}) =>
      this.request<SingleItem, any>({
        path: `/items/${id}/release_payment`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
