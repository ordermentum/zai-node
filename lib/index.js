"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = void 0;
const axios_1 = __importDefault(require("axios"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
class HttpClient {
    constructor(_a = {}) {
        var { securityWorker, secure, format } = _a, axiosConfig = __rest(_a, ["securityWorker", "secure", "format"]);
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = async (_a) => {
            var { secure, path, type, query, format, body } = _a, params = __rest(_a, ["secure", "path", "type", "query", "format", "body"]);
            const secureParams = ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = (format && this.format) || void 0;
            return this.instance.request(Object.assign(Object.assign({}, requestParams), { headers: Object.assign(Object.assign({}, (type && type !== ContentType.FormData ? { "Content-Type": type } : {})), (requestParams.headers || {})), params: query, responseType: responseFormat, data: body, url: path }));
        };
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: axiosConfig.baseURL || "https://virtserver.swaggerhub.com/AssemblyPlatforms/assembly-api/2.0" }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    mergeRequestParams(params1, params2) {
        return Object.assign(Object.assign(Object.assign(Object.assign({}, this.instance.defaults), params1), (params2 || {})), { headers: Object.assign(Object.assign(Object.assign({}, (this.instance.defaults.headers || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    }
}
exports.HttpClient = HttpClient;
/**
 * @title Assembly API
 * @version 2.0
 * @baseUrl https://virtserver.swaggerhub.com/AssemblyPlatforms/assembly-api/2.0
 * @contact <support@assemblypayments.com> (http://docs.assemblypayments.com/)
 *
 * Assembly (formely PromisePay) is a powerful payments engine custom-built for platforms and marketplaces.
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.tokens = {
            /**
             * @description Exchange client application credentials for a bearer token. Please ensure to call the auth issuing server as described at https://developer.assemblypayments.com/reference#authentication
             *
             * @tags Authentication
             * @name Token
             * @summary Token
             * @request POST:/tokens
             * @secure
             */
            token: (data, params = {}) => this.request(Object.assign({ path: `/tokens`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.addresses = {
            /**
             * @description Show details of a specific Address using a given address `:id`.
             *
             * @tags Addresses
             * @name ShowAddress
             * @summary Show Address
             * @request GET:/addresses/{id}
             * @secure
             */
            showAddress: (id, params = {}) => this.request(Object.assign({ path: `/addresses/${id}`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.bankAccounts = {
            /**
             * @description Show details of a specific **Bank Account** using a given `:id`.
             *
             * @tags Bank Accounts
             * @name ShowBankAccount
             * @summary Show Bank Account
             * @request GET:/bank_accounts/{id}
             * @secure
             */
            showBankAccount: (id, params = {}) => this.request(Object.assign({ path: `/bank_accounts/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Redact a **Bank Account** using a given `:id`. Redacted **Bank Accounts** can no longer be used as a funding source or a Disbursement destination.
             *
             * @tags Bank Accounts
             * @name RedactBankAccount
             * @summary Redact Bank Account
             * @request DELETE:/bank_accounts/{id}
             * @secure
             */
            redactBankAccount: (id, params = {}) => this.request(Object.assign({ path: `/bank_accounts/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * @description When penny verification is enabled, this API call sends two penny transactions to the specified bank account for verification. **Note**: This API call is not required when your platform has automatic penny verification enabled, as this is instead done by the system. Penny credit verification is only supported for US platforms.
             *
             * @tags Bank Accounts
             * @name SendPennyAmount
             * @summary Send Penny Amount
             * @request PATCH:/bank_accounts/{id}/penny_send
             * @secure
             */
            sendPennyAmount: (id, params = {}) => this.request(Object.assign({ path: `/bank_accounts/${id}/penny_send`, method: "PATCH", secure: true, format: "json" }, params)),
            /**
             * @description Create a **Bank Account** to be used as either a funding source or a Disbursement destination. Store the returned `:id` and use it for a `make_payment` **Item Action** call. The `:id` is also referred to as a `token` when involving **Bank Accounts**.
             *
             * @tags Bank Accounts
             * @name CreateBankAccount
             * @summary Create Bank Account
             * @request POST:/bank_accounts
             * @secure
             */
            createBankAccount: (data, params = {}) => this.request(Object.assign({ path: `/bank_accounts`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description When penny verification is enabled, this API call verifies the two penny transactions that were sent to a specified bank account using **Send Penny Amount**. **Note**: This API call requires you to provide a front-end interface to your end-users into which they can input the penny amounts required for a successful verification. Your front-end interface should then pass the information into this API call. Penny credit verification is only supported for US platforms.
             *
             * @tags Bank Accounts
             * @name VerifyPennyAmount
             * @summary Verify Penny Amount
             * @request PATCH:/bank_accounts/{id}/penny_verify
             * @secure
             */
            verifyPennyAmount: (id, data, params = {}) => this.request(Object.assign({ path: `/bank_accounts/${id}/penny_verify`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Show the **User** the **Bank Account** is associated with using a given `:id`.
             *
             * @tags Bank Accounts
             * @name ShowBankAccountUser
             * @summary Show Bank Account User
             * @request GET:/bank_accounts/{id}/users
             * @secure
             */
            showBankAccountUser: (id, params = {}) => this.request(Object.assign({ path: `/bank_accounts/${id}/users`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.tools = {
            /**
             * @description Validate a US bank routing number before creating an account. This can be used to provide on-demand verification, and further information of the bank information a User is providing.
             *
             * @tags Bank Accounts
             * @name ValidateRoutingNumber
             * @summary Validate Routing Number
             * @request GET:/tools/routing_number
             * @secure
             */
            validateRoutingNumber: (query, params = {}) => this.request(Object.assign({ path: `/tools/routing_number`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Displays a health check of the Assembly service.
             *
             * @tags Tools
             * @name HealthCheck
             * @summary Health check
             * @request GET:/tools/status
             * @secure
             */
            healthCheck: (params = {}) => this.request(Object.assign({ path: `/tools/status`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.bpayAccounts = {
            /**
             * @description Show details of a specific **BPay Account** using a given `:id`.
             *
             * @tags BPay Accounts
             * @name ShowBPayAccount
             * @summary Show BPay Account
             * @request GET:/bpay_accounts/{id}
             * @secure
             */
            showBPayAccount: (id, params = {}) => this.request(Object.assign({ path: `/bpay_accounts/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Redact a **BPay Account** using a given `:id`. Redacted **BPay Accounts** can no longer be used as a Disbursement destination.
             *
             * @tags BPay Accounts
             * @name RedactBPayAccount
             * @summary Redact BPay Account (Future Feature)
             * @request DELETE:/bpay_accounts/{id}
             * @secure
             */
            redactBPayAccount: (id, params = {}) => this.request(Object.assign({ path: `/bpay_accounts/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * @description Create a **BPay Account** to be used as a Disbursement destination.
             *
             * @tags BPay Accounts
             * @name CreateBPayAccount
             * @summary Create BPay Account
             * @request POST:/bpay_accounts
             * @secure
             */
            createBPayAccount: (data, params = {}) => this.request(Object.assign({ path: `/bpay_accounts`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Show the **User** the **BPay Account** is associated with using a given `:id`.
             *
             * @tags BPay Accounts
             * @name ShowBPayAccountUser
             * @summary Show BPay Account User
             * @request GET:/bpay_accounts/{id}/users
             * @secure
             */
            showBPayAccountUser: (id, params = {}) => this.request(Object.assign({ path: `/bpay_accounts/${id}/users`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.walletAccounts = {
            /**
             * @description Pay a bill by withdrawing funds from a **Wallet Account** to a specified bpay account.
             *
             * @tags Wallet Accounts
             * @name BillPayment
             * @summary Pay a Bill
             * @request POST:/wallet_accounts/{id}/bill_payment
             * @secure
             */
            billPayment: (id, data, params = {}) => this.request(Object.assign({ path: `/wallet_accounts/${id}/bill_payment`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Show the **User** the **Wallet Account** is associated with using a given `:id`.
             *
             * @tags Wallet Accounts
             * @name ShowWalletAccountUser
             * @summary Show Wallet Account User
             * @request GET:/wallet_accounts/{id}/users
             * @secure
             */
            showWalletAccountUser: (id, params = {}) => this.request(Object.assign({ path: `/wallet_accounts/${id}/users`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Withdraw funds from a **Wallet Account** to a specified disbursement account.
             *
             * @tags Wallet Accounts
             * @name WithdrawFunds
             * @summary Withdraw Funds
             * @request POST:/wallet_accounts/{id}/withdraw
             * @secure
             */
            withdrawFunds: (id, data, params = {}) => this.request(Object.assign({ path: `/wallet_accounts/${id}/withdraw`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Deposit funds to a **Wallet Account** from a specified payment account.
             *
             * @tags Wallet Accounts
             * @name DepositFunds
             * @summary Deposit Funds
             * @request POST:/wallet_accounts/{id}/deposit
             * @secure
             */
            depositFunds: (id, data, params = {}) => this.request(Object.assign({ path: `/wallet_accounts/${id}/deposit`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Show details of a specific **Wallet Account** using a given `:id.`
             *
             * @tags Wallet Accounts
             * @name ShowWalletAccount
             * @summary Show Wallet Account
             * @request GET:/wallet_accounts/{id}
             * @secure
             */
            showWalletAccount: (id, params = {}) => this.request(Object.assign({ path: `/wallet_accounts/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show NPP details of a specific **Wallet Account** using a given `:id.`
             *
             * @tags Wallet Accounts
             * @name ShowWalletAccountNppDetails
             * @summary Show Wallet Account NPP Details
             * @request GET:/wallet_accounts/{id}/npp_details
             * @secure
             */
            showWalletAccountNppDetails: (id, params = {}) => this.request(Object.assign({ path: `/wallet_accounts/${id}/npp_details`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show BPAY details of a specific **Wallet Account** using a given `:id.`
             *
             * @tags Wallet Accounts
             * @name ShowWalletAccountNbpayDetails
             * @summary Show Wallet Account BPAY Details
             * @request GET:/wallet_accounts/{id}/bpay_details
             * @secure
             */
            showWalletAccountNbpayDetails: (id, params = {}) => this.request(Object.assign({ path: `/wallet_accounts/${id}/bpay_details`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.users = {
            /**
             * @description List the **BPay Accounts** the **User** is associated with using a given `:id`.
             *
             * @tags Users
             * @name ListUserBPayAccounts
             * @summary List User's BPay Accounts
             * @request GET:/users/{id}/bpay_accounts
             * @secure
             */
            listUserBPayAccounts: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}/bpay_accounts`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show the user’s active card account using a given `:id`.
             *
             * @tags Users
             * @name ShowUserCardAccount
             * @summary Show User Card Account
             * @request GET:/users/{id}/card_accounts
             * @secure
             */
            showUserCardAccount: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}/card_accounts`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show details of a specific User using a given `:id`.
             *
             * @tags Users
             * @name ShowUser
             * @summary Show User
             * @request GET:/users/{id}
             * @secure
             */
            showUser: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Update an existing **User’s** attributes using a given `:id`.
             *
             * @tags Users
             * @name UpdateUser
             * @summary Update User
             * @request PATCH:/users/{id}
             * @secure
             */
            updateUser: (id, data, params = {}) => this.request(Object.assign({ path: `/users/${id}`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Sets a user’s verification state to `approved` on pre-live given the **User** `:id`. Ensure that a **User** has the required user verification information before using this call, otherwise the call will fail. **Note**: This API call will only work in our pre-live environment. The user verification workflow holds for all users in production.
             *
             * @tags Users
             * @name VerifyUser
             * @summary Verify User (Prelive Only)
             * @request PATCH:/users/{id}/identity_verified
             * @secure
             */
            verifyUser: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}/identity_verified`, method: "PATCH", secure: true, format: "json" }, params)),
            /**
             * @description Shows the user’s active bank account using a given `:id`.
             *
             * @tags Users
             * @name ShowUserBankAccount
             * @summary Show User Bank Account
             * @request GET:/users/{id}/bank_accounts
             * @secure
             */
            showUserBankAccount: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}/bank_accounts`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Set the **User’s Disbursement Account** using a given **User** `:id` and a **Bank Account** `:account_id`.
             *
             * @tags Users
             * @name SetUserDisbursementAccount
             * @summary Set User Disbursement Account
             * @request PATCH:/users/{id}/disbursement_account
             * @secure
             */
            setUserDisbursementAccount: (id, data, params = {}) => this.request(Object.assign({ path: `/users/${id}/disbursement_account`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Retrieve an ordered and paginated list of existing **Users**.
             *
             * @tags Users
             * @name ListUsers
             * @summary List Users
             * @request GET:/users
             * @secure
             */
            listUsers: (query, params = {}) => this.request(Object.assign({ path: `/users`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Create a **User**. **Users** can be associated with **Items** either as a buyer or a seller. **Users** can’t be both the buyer and seller for the same **Item**. **Note**: Some parameters are required for user verification. See our guide on [Onboarding a Payout User/Seller](https://developer.assemblypayments.com/docs/onboarding-a-pay-out-user) for more information.
             *
             * @tags Users
             * @name CreateUser
             * @summary Create User
             * @request POST:/users
             * @secure
             */
            createUser: (data, params = {}) => this.request(Object.assign({ path: `/users`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Retrieve an ordered and paginated list of existing **Items** the **User** is associated with using a given `:id`.
             *
             * @tags Users
             * @name ListUserItems
             * @summary List User Items
             * @request GET:/users/{id}/items
             * @secure
             */
            listUserItems: (id, query, params = {}) => this.request(Object.assign({ path: `/users/${id}/items`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Show the **User’s Wallet Account** using a given `:id`.
             *
             * @tags Users
             * @name ShowUserWalletAccounts
             * @summary Show User Wallet Account
             * @request GET:/users/{id}/wallet_accounts
             * @secure
             */
            showUserWalletAccounts: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}/wallet_accounts`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.callbacks = {
            /**
             * @description Show details of a specific **Callback** using a given `:id`.
             *
             * @tags Callbacks
             * @name ShowCallback
             * @summary Show Callback
             * @request GET:/callbacks/{id}
             * @secure
             */
            showCallback: (id, params = {}) => this.request(Object.assign({ path: `/callbacks/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Delete an existing Callback using a given `:id`.
             *
             * @tags Callbacks
             * @name DeleteCallback
             * @summary Delete Callback
             * @request DELETE:/callbacks/{id}
             * @secure
             */
            deleteCallback: (id, params = {}) => this.request(Object.assign({ path: `/callbacks/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * @description Update an existing **Callback** using a given `:id`. You can change the `URL`, the `object_type` and whether the **Callback** is `enabled` or `disabled`.
             *
             * @tags Callbacks
             * @name UpdateCallback
             * @summary Update Callback
             * @request PATCH:/callbacks/{id}
             * @secure
             */
            updateCallback: (id, data, params = {}) => this.request(Object.assign({ path: `/callbacks/${id}`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Retrieve an ordered and paginated list of the responses garnered from a callback using a given `:id`.
             *
             * @tags Callbacks
             * @name ListCallbackResponse
             * @summary List Callback Responses
             * @request GET:/callbacks/{id}/responses
             * @secure
             */
            listCallbackResponse: (id, query, params = {}) => this.request(Object.assign({ path: `/callbacks/${id}/responses`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Show details of a specific **Callback** response using a given `:id`.
             *
             * @tags Callbacks
             * @name ShowCallbackResponse
             * @summary Show Callback Response
             * @request GET:/callbacks/{callback_id}/responses/{id}
             * @secure
             */
            showCallbackResponse: (callbackId, id, params = {}) => this.request(Object.assign({ path: `/callbacks/${callbackId}/responses/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Retrieve an ordered and paginated list of all created **Callbacks**.
             *
             * @tags Callbacks
             * @name ListCallbacks
             * @summary List Callbacks
             * @request GET:/callbacks
             * @secure
             */
            listCallbacks: (query, params = {}) => this.request(Object.assign({ path: `/callbacks`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Create a **Callback** to notify you at the `URL` when the `object_type` changes
             *
             * @tags Callbacks
             * @name CreateCallback
             * @summary Create Callback
             * @request POST:/callbacks
             * @secure
             */
            createCallback: (data, params = {}) => this.request(Object.assign({ path: `/callbacks`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.cardAccounts = {
            /**
             * @description Create a Credit **Card Account** to be used as a funding source. Store the returned `:id` and use it for a `make_payment` **Item Action** call. The `:id` is also referred to as a **token** when involving Credit Cards.
             *
             * @tags Card Accounts
             * @name CreateCardAccount
             * @summary Create Card Account
             * @request POST:/card_accounts
             * @secure
             */
            createCardAccount: (data, params = {}) => this.request(Object.assign({ path: `/card_accounts`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Show the **User** the Credit **Card Account** is associated with using a given `:id`.
             *
             * @tags Card Accounts
             * @name ShowCardAccountUser
             * @summary Show Card Account User
             * @request GET:/card_accounts/{id}/users
             * @secure
             */
            showCardAccountUser: (id, params = {}) => this.request(Object.assign({ path: `/card_accounts/${id}/users`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Where pre-authorization is enabled on a platform, verifies a **Card Account** when a **Card Account** is successfully verified, its verification status is `verified`.
             *
             * @tags Card Accounts
             * @name VerifyCard
             * @summary Verify Card
             * @request PATCH:/card_accounts/{id}/verify
             * @secure
             */
            verifyCard: (id, data, params = {}) => this.request(Object.assign({ path: `/card_accounts/${id}/verify`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Show details of a specific Credit **Card Account** using a given `:id`. You can toggle the card account number display to show the first 6 digits in addition to the last 4 digits. Contact Assembly if you want to toggle the card account display.
             *
             * @tags Card Accounts
             * @name ShowCardAccount
             * @summary Show Card Account
             * @request GET:/card_accounts/{id}
             * @secure
             */
            showCardAccount: (id, params = {}) => this.request(Object.assign({ path: `/card_accounts/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Redact a Credit **Card Account** using a given `:id`. Redacted Credit **Card Accounts** can no longer be used as a funding source.
             *
             * @tags Card Accounts
             * @name RedactCardAccount
             * @summary Redact Card Account
             * @request DELETE:/card_accounts/{id}
             * @secure
             */
            redactCardAccount: (id, params = {}) => this.request(Object.assign({ path: `/card_accounts/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
        };
        this.companies = {
            /**
             * @description Retrieve an ordered and paginated list of existing **Companies**.
             *
             * @tags Companies
             * @name ListCompanies
             * @summary List Companies
             * @request GET:/companies
             * @secure
             */
            listCompanies: (query, params = {}) => this.request(Object.assign({ path: `/companies`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Create a **Company** associated with the **User** using a given `user_id`. **Note**: Some parameters are required for user verification. See our guide on [Onboarding a Payout User/Seller](https://developer.assemblypayments.com/docs/onboarding-a-pay-out-user) for more information.
             *
             * @tags Companies
             * @name CreateCompany
             * @summary Create Company
             * @request POST:/companies
             * @secure
             */
            createCompany: (data, params = {}) => this.request(Object.assign({ path: `/companies`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Show details of a specific **Company** using a given `:id`.
             *
             * @tags Companies
             * @name ShowCompany
             * @summary Show Company
             * @request GET:/companies/{id}
             * @secure
             */
            showCompany: (id, params = {}) => this.request(Object.assign({ path: `/companies/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Update an existing **Company** attributes using a given `:id`.
             *
             * @tags Companies
             * @name UpdateCompany
             * @summary Update Company
             * @request PATCH:/companies/{id}
             * @secure
             */
            updateCompany: (id, data, params = {}) => this.request(Object.assign({ path: `/companies/${id}`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.directDebitAuthorities = {
            /**
             * @description Retrieve an ordered and paginated list of existing **Direct Debit Authorities**.
             *
             * @tags Direct Debit Authorities
             * @name ListDirectDebitAuthorities
             * @summary List Direct Debit Authorities
             * @request GET:/direct_debit_authorities
             * @secure
             */
            listDirectDebitAuthorities: (query, params = {}) => this.request(Object.assign({ path: `/direct_debit_authorities`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Create a **Direct Debit Authority** associated with a **Bank Account**. The **Direct Debit Authority** is required to use a **Bank Account** as a funding source (Direct Debit/ACH).
             *
             * @tags Direct Debit Authorities
             * @name CreateDirectDebitAuthority
             * @summary Create Direct Debit Authority
             * @request POST:/direct_debit_authorities
             * @secure
             */
            createDirectDebitAuthority: (data, params = {}) => this.request(Object.assign({ path: `/direct_debit_authorities`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Show details of a specific **Direct Debit Authority** using a given `:id`.
             *
             * @tags Direct Debit Authorities
             * @name ShowDirectDebitAuthority
             * @summary Show Direct Debit Authority
             * @request GET:/direct_debit_authorities/{id}
             * @secure
             */
            showDirectDebitAuthority: (id, params = {}) => this.request(Object.assign({ path: `/direct_debit_authorities/${id}`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.fees = {
            /**
             * @description Retrieve an ordered and paginated list of existing **Fees**.
             *
             * @tags Fees
             * @name ListFees
             * @summary List Fees
             * @request GET:/fees
             * @secure
             */
            listFees: (query, params = {}) => this.request(Object.assign({ path: `/fees`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Create a **Fee** to be associated with an **Item**. **Fees** will add or subtract from the **Item** amount based on the **User**, payment type or Disbursement account type. **Fees** can be `Fixed` or `Percentage` based. **Fees** can be capped, have a maximum amount and/or a minimum amount.
             *
             * @tags Fees
             * @name CreateFee
             * @summary Create fee
             * @request POST:/fees
             * @secure
             */
            createFee: (data, params = {}) => this.request(Object.assign({ path: `/fees`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Show details of a specific **Fee** using a given `:id`. If the `item_amount` is specified, the response also shows the `calculated_fee` based on a percentage of the `item_amount`.
             *
             * @tags Fees
             * @name ShowFee
             * @summary Show Fee
             * @request GET:/fees/{id}
             * @secure
             */
            showFee: (id, query, params = {}) => this.request(Object.assign({ path: `/fees/${id}`, method: "GET", query: query, secure: true, format: "json" }, params)),
        };
        this.charges = {
            /**
             * @description Retrieve an ordered and paginated list of **Charges**.
             *
             * @tags Charges
             * @name ListCharges
             * @summary List Charges
             * @request GET:/charges
             * @secure
             */
            listCharges: (query, params = {}) => this.request(Object.assign({ path: `/charges`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Create a **Charge**. **Charges** require a specified **Card Account** or **Bank Account**. You may pass through an existing **User**, or define the `user_id` of the new user that will be associated with the **Charge** and the provided Account. The `user_id` can be left blank if you wish for a new user to be created for the **Charge**, or specified if you wish for a new **User** to be created with the passed `user_id`.
             *
             * @tags Charges
             * @name CreateCharge
             * @summary Create Charge
             * @request POST:/charges
             * @secure
             */
            createCharge: (data, params = {}) => this.request(Object.assign({ path: `/charges`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Show details of a specific **Charge** using a given `:id`.
             *
             * @tags Charges
             * @name ShowCharge
             * @summary Show Charge
             * @request GET:/charges/{id}
             * @secure
             */
            showCharge: (id, params = {}) => this.request(Object.assign({ path: `/charges/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show status of a specific **Charge** using a given `:id`.
             *
             * @tags Charges
             * @name ShowChargeStatus
             * @summary Show Charge Status
             * @request GET:/charges/{id}/status
             * @secure
             */
            showChargeStatus: (id, params = {}) => this.request(Object.assign({ path: `/charges/${id}/status`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show the buyer **User** associated with the **Charge** using a given `:id`.
             *
             * @tags Charges
             * @name ShowChargeBuyer
             * @summary Show Charge Buyer
             * @request GET:/charges/{id}/buyers
             * @secure
             */
            showChargeBuyer: (id, params = {}) => this.request(Object.assign({ path: `/charges/${id}/buyers`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.marketplace = {
            /**
             * @description Show details of your **Platform**, providing access to your configuration and related **User** and **Company**.
             *
             * @tags Marketplaces
             * @name ShowMarketplace
             * @summary Show Marketplace
             * @request GET:/marketplace
             * @secure
             */
            showMarketplace: (params = {}) => this.request(Object.assign({ path: `/marketplace`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.tokenAuths = {
            /**
             * @description Create a token, either for a bank or a card account, that can be used with the **PromisePay.js** package to securely send Assembly credit card details.
             *
             * @tags Token Auth
             * @name GenerateToken
             * @summary Generate Token
             * @request POST:/token_auths
             * @secure
             */
            generateToken: (data, params = {}) => this.request(Object.assign({ path: `/token_auths`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
        this.transactions = {
            /**
             * @description Retrieve an ordered and paginated list of **Transactions**.
             *
             * @tags Transactions
             * @name ListTransactions
             * @summary List Transactions
             * @request GET:/transactions
             * @secure
             */
            listTransactions: (query, params = {}) => this.request(Object.assign({ path: `/transactions`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Show the **Bank Account** associated with the **Transaction** using a given `:id`.
             *
             * @tags Transactions
             * @name ShowTransactionBankAccount
             * @summary Show Transaction Bank Account
             * @request GET:/transactions/{id}/bank_accounts
             * @secure
             */
            showTransactionBankAccount: (id, params = {}) => this.request(Object.assign({ path: `/transactions/${id}/bank_accounts`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show details of a specific **Transaction** using a given `:id`.
             *
             * @tags Transactions
             * @name ShowTransaction
             * @summary Show Transaction
             * @request GET:/transactions/{id}
             * @secure
             */
            showTransaction: (id, params = {}) => this.request(Object.assign({ path: `/transactions/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show the **Card Account** associated with the **Transaction** using a given `:id`.
             *
             * @tags Transactions
             * @name ShowTransactionCardAccount
             * @summary Show Transaction Card Account
             * @request GET:/transactions/{id}/card_accounts
             * @secure
             */
            showTransactionCardAccount: (id, params = {}) => this.request(Object.assign({ path: `/transactions/${id}/card_accounts`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show the **Fees** associated with the **Transaction** using a given `:id`.
             *
             * @tags Transactions
             * @name ShowTransactionFees
             * @summary Show Transaction Fees
             * @request GET:/transactions/{id}/fees
             * @secure
             */
            showTransactionFees: (id, params = {}) => this.request(Object.assign({ path: `/transactions/${id}/fees`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show the **Wallet Account** associated with the **Transaction** using a given `:id`.
             *
             * @tags Transactions
             * @name ShowTransactionWalletAccount
             * @summary Show Transaction Wallet Account
             * @request GET:/transactions/{id}/wallet_accounts
             * @secure
             */
            showTransactionWalletAccount: (id, params = {}) => this.request(Object.assign({ path: `/transactions/${id}/wallet_accounts`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show the **User** associated with the **Transaction** using a given `:id`.
             *
             * @tags Transactions
             * @name ShowTransactionUser
             * @summary Show Transaction User
             * @request GET:/transactions/{id}/users
             * @secure
             */
            showTransactionUser: (id, params = {}) => this.request(Object.assign({ path: `/transactions/${id}/users`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.batchTransactions = {
            /**
             * @description Retrieve an ordered and paginated list of existing **Batch Transactions**. The list can be filtered by **Account**, **Batch ID**, **Item**, and **Transaction Type**.
             *
             * @tags Batch Transactions
             * @name ListBatchTransactions
             * @summary List Batch Transactions
             * @request GET:/batch_transactions
             * @secure
             */
            listBatchTransactions: (query, params = {}) => this.request(Object.assign({ path: `/batch_transactions`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Get a batch transaction using its ID
             *
             * @tags Batch Transactions
             * @name ShowBatchTransaction
             * @summary Show Batch Transaction
             * @request GET:/batch_transactions/{id}
             * @secure
             */
            showBatchTransaction: (id, params = {}) => this.request(Object.assign({ path: `/batch_transactions/${id}`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.disbursements = {
            /**
             * @description Retrieve an ordered and paginated list of existing **Disbursements**. The list can be filtered by **Batch ID**.
             *
             * @tags Disbursements
             * @name ListDisbursement
             * @summary List Disbursements
             * @request GET:/disbursements
             * @secure
             */
            listDisbursement: (query, params = {}) => this.request(Object.assign({ path: `/disbursements`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Get a disbursment using its ID
             *
             * @tags Disbursements
             * @name ShowDisbursement
             * @summary Show Disbursement
             * @request GET:/disbursements/{id}
             * @secure
             */
            showDisbursement: (id, params = {}) => this.request(Object.assign({ path: `/disbursements/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Get all the transactions relating to a disbursment ID
             *
             * @tags Disbursements
             * @name ShowDisbursementTransactions
             * @summary Show Disbursement Transactions
             * @request GET:/disbursements/{id}/transactions
             * @secure
             */
            showDisbursementTransactions: (id, query, params = {}) => this.request(Object.assign({ path: `/disbursements/${id}/transactions`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Get all the wallet accounts relating to a disbursment ID
             *
             * @tags Disbursements
             * @name ShowDisbursementWalletAccounts
             * @summary Show Disbursement Wallet Accounts
             * @request GET:/disbursements/{id}/wallet_accounts
             * @secure
             */
            showDisbursementWalletAccounts: (id, params = {}) => this.request(Object.assign({ path: `/disbursements/${id}/wallet_accounts`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Get all the bank accounts relating to disbursement ID
             *
             * @tags Disbursements
             * @name ShowDisbursementBankAccounts
             * @summary Show Disbursement Bank Accounts
             * @request GET:/disbursements/{id}/bank_accounts
             * @secure
             */
            showDisbursementBankAccounts: (id, params = {}) => this.request(Object.assign({ path: `/disbursements/${id}/bank_accounts`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Get all the users relating to disbursement ID
             *
             * @tags Disbursements
             * @name ShowDisbursementUsers
             * @summary Show Disbursement Users
             * @request GET:/disbursements/{id}/users
             * @secure
             */
            showDisbursementUsers: (id, params = {}) => this.request(Object.assign({ path: `/disbursements/${id}/users`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Get all the items relating to a disbursement ID
             *
             * @tags Disbursements
             * @name ShowDisbursementItems
             * @summary Show Disbursement Items
             * @request GET:/disbursements/{id}/items
             * @secure
             */
            showDisbursementItems: (id, params = {}) => this.request(Object.assign({ path: `/disbursements/${id}/items`, method: "GET", secure: true, format: "json" }, params)),
        };
        this.items = {
            /**
             * @description OK
             *
             * @tags Items
             * @name ListItems
             * @summary List Items
             * @request GET:/items
             * @secure
             */
            listItems: (query, params = {}) => this.request(Object.assign({ path: `/items`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * @description Create an **Item**. Items require two **Users**, a buyer and a seller. The `buyer_id` and `seller_id` are your unique user identifiers.
             *
             * @tags Items
             * @name CreateItem
             * @summary Create Item
             * @request POST:/items
             * @secure
             */
            createItem: (data, params = {}) => this.request(Object.assign({ path: `/items`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Show details of a specific **Item** using a given `:id`.
             *
             * @tags Items
             * @name ShowItem
             * @summary Show Item
             * @request GET:/items/{id}
             * @secure
             */
            showItem: (id, params = {}) => this.request(Object.assign({ path: `/items/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Delete an existing **Item** using a given `:id`.
             *
             * @tags Items
             * @name DeleteItem
             * @summary Delete Item
             * @request DELETE:/items/{id}
             * @secure
             */
            deleteItem: (id, params = {}) => this.request(Object.assign({ path: `/items/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * @description Update an existing **Items** attributes using a given `:id`. Note: An item can only be updated if it’s in `pending` state. Once an item has begun a payment process, you cannot update it.
             *
             * @tags Items
             * @name UpdateItem
             * @summary Update Item
             * @request PATCH:/items/{id}
             * @secure
             */
            updateItem: (id, data, params = {}) => this.request(Object.assign({ path: `/items/${id}`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Show the seller **User** associated with the **Item** using a given `:id`.
             *
             * @tags Items
             * @name ShowItemSeller
             * @summary Show Item Seller
             * @request GET:/items/{id}/sellers
             * @secure
             */
            showItemSeller: (id, params = {}) => this.request(Object.assign({ path: `/items/${id}/sellers`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show the buyer **User** associated with the **Item** using a given `:id`.
             *
             * @tags Items
             * @name ShowItemBuyer
             * @summary Show Item Buyer
             * @request GET:/items/{id}/buyers
             * @secure
             */
            showItemBuyer: (id, params = {}) => this.request(Object.assign({ path: `/items/${id}/buyers`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show the **Fees** associated with the **Item** using a given `:id`.
             *
             * @tags Items
             * @name ShowItemFees
             * @summary Show Item Fees
             * @request GET:/items/{id}/fees
             * @secure
             */
            showItemFees: (id, params = {}) => this.request(Object.assign({ path: `/items/${id}/fees`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show the **Item** wire payment details using a given `:id`.
             *
             * @tags Items
             * @name ShowItemWireDetails
             * @summary Show Item Wire Details
             * @request GET:/items/{id}/wire_details
             * @secure
             */
            showItemWireDetails: (id, params = {}) => this.request(Object.assign({ path: `/items/${id}/wire_details`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Retrieve an ordered and paginated list of **Transactions** associated with the **Item** using a given `:id`.
             *
             * @tags Items
             * @name ListItemTransactions
             * @summary List Item Transactions
             * @request GET:/items/{id}/transactions
             * @secure
             */
            listItemTransactions: (id, params = {}) => this.request(Object.assign({ path: `/items/${id}/transactions`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Retrieve an ordered and paginated list of **Batch Transactions** associated with the `Item` using a given `:id`. This will include both direct debits coming in, and the disbursements going out.
             *
             * @tags Items
             * @name ListItemBatchTransactions
             * @summary List Item Batch Transactions
             * @request GET:/items/{id}/batch_transactions
             * @secure
             */
            listItemBatchTransactions: (id, params = {}) => this.request(Object.assign({ path: `/items/${id}/batch_transactions`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Show the status of an **Item** using a given `:id`.
             *
             * @tags Items
             * @name ShowItemStatus
             * @summary Show Item Status
             * @request GET:/items/{id}/status
             * @secure
             */
            showItemStatus: (id, params = {}) => this.request(Object.assign({ path: `/items/${id}/status`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Make a payment for an **Item**. Pass the `:account_id` of a **Bank Account** or a **Card Account** associated with the **Item’s** buyer. The **Item** state will transition to one of `payment_held`, `payment_pending` or `completed` for an **Express** or **Approve** payment type.
             *
             * @tags Item Actions
             * @name MakePayment
             * @summary Make Payment
             * @request PATCH:/items/{id}/make_payment
             * @secure
             */
            makePayment: (id, data, params = {}) => this.request(Object.assign({ path: `/items/${id}/make_payment`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Cancel an **Item**. This will transition the **Item** state to `cancelled`. **Items** can only be cancelled if they haven’t been actioned in any other way.
             *
             * @tags Item Actions
             * @name CancelItem
             * @summary Cancel
             * @request PATCH:/items/{id}/cancel
             * @secure
             */
            cancelItem: (id, params = {}) => this.request(Object.assign({ path: `/items/${id}/cancel`, method: "PATCH", secure: true, format: "json" }, params)),
            /**
             * @description Refund an **Item**’s funds. A partial `amount` can be specified otherwise the full amount will be refunded. This will transition the **Item** state to ‘refunded’ if the full amount is refunded, or to the previously held state if a partial `amount` is specified.
             *
             * @tags Item Actions
             * @name Refund
             * @summary Refund
             * @request PATCH:/items/{id}/refund
             * @secure
             */
            refund: (id, data, params = {}) => this.request(Object.assign({ path: `/items/${id}/refund`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Where pre-authentication is enabled on a platform, initiates a credit card payment authorization for an item. When an authorization is successful, your platform holds the item amount for capture, but there is no transfer of funds happening. This call is used with the Capture Payment or Void Payment calls.
             *
             * @tags Item Actions
             * @name AuthorizePayment
             * @summary Authorize Payment
             * @request PATCH:/items/{id}/authorize_payment
             * @secure
             */
            authorizePayment: (id, data, params = {}) => this.request(Object.assign({ path: `/items/${id}/authorize_payment`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Where pre-authentication is enabled on a platform, completes a credit card payment for an item whose payment is authorized. This call is used with the Authorize Payment call.
             *
             * @tags Item Actions
             * @name CapturePayment
             * @summary Capture Payment
             * @request PATCH:/items/{id}/capture_payment
             * @secure
             */
            capturePayment: (id, params = {}) => this.request(Object.assign({ path: `/items/${id}/capture_payment`, method: "PATCH", secure: true, format: "json" }, params)),
            /**
             * @description Where pre-authentication is enabled on a platform, voids the `payment_authorized` status for an item. This call is used with the Authorize Payment call. **Note**: Not all payment gateways support the Void Payment API call. In this case, you can wait until a payment authorization expires. A payment authorisation expires after 3 to 6 days if not captured.
             *
             * @tags Item Actions
             * @name VoidPayment
             * @summary Void Payment
             * @request PATCH:/items/{id}/void_payment
             * @secure
             */
            voidPayment: (id, params = {}) => this.request(Object.assign({ path: `/items/${id}/void_payment`, method: "PATCH", secure: true, format: "json" }, params)),
            /**
             * @description Included for legacy purposes for existing customers that use Escrow payments which are no longer supported for new flows/customers. Release funds held in escrow from an **Item** with an **Escrow** or **Escrow Partial Release** payment type.  This will transition the **Item** state to `completed`.
             *
             * @tags Item Actions
             * @name ReleasePayment
             * @summary Release Payment (Deprecated - Do Not Use)
             * @request PATCH:/items/{id}/release_payment
             * @secure
             */
            releasePayment: (id, data, params = {}) => this.request(Object.assign({ path: `/items/${id}/release_payment`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
    }
}
exports.Api = Api;
