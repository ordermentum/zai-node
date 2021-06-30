/* eslint-disable camelcase */
import { Client } from '../client';

import { Fees, FeeRequestBody, SingleFee } from '../types';

export default (client: Client) => ({
  /**
   * @description Retrieve an ordered and paginated list of existing **Fees**.
   *
   * @tags Fees
   * @name ListFees
   * @summary List Fees
   * @request GET:/fees
   * @secure
   */
  listFees: (params?: { limit?: number; offset?: number }) =>
    client.request<Fees>({
      url: `/fees`,
      method: 'GET',
      params,
      secure: true,
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
  createFee: (data: FeeRequestBody) =>
    client.request<SingleFee>({
      url: `/fees`,
      method: 'POST',
      data,
      secure: true,
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
  showFee: (id: string, params: { item_amount: number }) =>
    client.request<SingleFee>({
      url: `/fees/${id}`,
      method: 'GET',
      params,
      secure: true,
    }),
});
