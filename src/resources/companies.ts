import { Client } from '../client';

import { SimpleCompanies, CompanyRequestBody, SingleCompany } from '../types';

export default (client: Client) => ({
  /**
   * @description Retrieve an ordered and paginated list of existing **Companies**.
   *
   * @tags Companies
   * @name ListCompanies
   * @summary List Companies
   * @request GET:/companies
   * @secure
   */
  listCompanies: (params?: { limit?: number; offset?: number }) =>
    client.request<SimpleCompanies>({
      url: `/companies`,
      method: 'GET',
      params,
      secure: true,
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
  createCompany: (data: CompanyRequestBody) =>
    client.request<SingleCompany>({
      url: `/companies`,
      method: 'POST',
      data,
      secure: true,
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
  showCompany: (id: string) =>
    client.request<SingleCompany>({
      url: `/companies/${id}`,
      method: 'GET',
      secure: true,
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
  updateCompany: (id: string, data: CompanyRequestBody) =>
    client.request<SingleCompany>({
      url: `/companies/${id}`,
      method: 'PATCH',
      data,
      secure: true,
    }),
});
