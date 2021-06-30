/* eslint-disable camelcase */
import { Client } from '../client';

import {
  DirectDebitAuthorityRequestBody,
  ListDirectDebitAuthorities,
  SingleDirectDebitAuthority,
} from '../types';

export default (client: Client) => ({
  /**
   * @description Retrieve an ordered and paginated list of existing **Direct Debit Authorities**.
   *
   * @tags Direct Debit Authorities
   * @name ListDirectDebitAuthorities
   * @summary List Direct Debit Authorities
   * @request GET:/direct_debit_authorities
   * @secure
   */
  listDirectDebitAuthorities: (params: {
    account_id: string;
    limit?: number;
    offset?: number;
  }) =>
    client.request<ListDirectDebitAuthorities>({
      url: `/direct_debit_authorities`,
      method: 'GET',
      params,
      secure: true,
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
  createDirectDebitAuthority: (data: DirectDebitAuthorityRequestBody) =>
    client.request<SingleDirectDebitAuthority>({
      url: `/direct_debit_authorities`,
      method: 'POST',
      data,
      secure: true,
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
  showDirectDebitAuthority: (id: string) =>
    client.request<SingleDirectDebitAuthority>({
      url: `/direct_debit_authorities/${id}`,
      method: 'GET',
      secure: true,
    }),
});
