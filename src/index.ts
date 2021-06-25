import accounts from './resources/accounts';
import bankAccounts from './resources/bank_accounts';
import batchTransactions from './resources/batch_transactions';
import bpayAccounts from './resources/bpay_accounts';
import callbacks from './resources/callbacks';

import Client from './client';
import transactions from './resources/transactions';
import companies from './resources/companies';
import cardAccounts from './resources/card_accounts';
import fees from './resources/fees';
import tokenAuths from './resources/token_auths';
import marketplace from './resources/marketplace';
import items from './resources/items';
import charges from './resources/charges';
import directDebitAuthorities from './resources/direct_debit_authorities';
import disbursements from './resources/disbursements';
import walletAccounts from './resources/wallet_accounts';
import tools from './resources/tools';
import tokens from './resources/tokens';
import users from './resources/users';

export * from './types';

export function createClient({
  baseURL = 'https://secure.api.promisepay.com/',
  authBaseURL = 'https://au-0000.auth.assemblypay.com/',
  clientId,
  clientSecret,
  scope,
}) {
  const client = new Client({
    baseURL,
    authBaseURL,
    clientId,
    clientSecret,
    scope,
  });

  const api = {
    client,
    accounts: accounts(client),
    bankAccounts: bankAccounts(client),
    batchTransactions: batchTransactions(client),
    bpayAccounts: bpayAccounts(client),
    callbacks: callbacks(client),
    companies: companies(client),
    cardAccounts: cardAccounts(client),
    charges: charges(client),
    directDebitAuthorities: directDebitAuthorities(client),
    disbursements: disbursements(client),
    fees: fees(client),
    items: items(client),
    marketplace: marketplace(client),
    tokens: tokens(client),
    tools: tools(client),
    users: users(client),
    walletAccounts: walletAccounts(client),
    transactions: transactions(client),
    tokenAuths: tokenAuths(client),
  };
  return api;
}

export default createClient;
