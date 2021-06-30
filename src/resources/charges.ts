import { Client } from '../client';

import {
  ChargeRequestBody,
  Charges,
  SingleUser,
  SingleCharge,
  SingleChargeStatus,
} from '../types';

export default (client: Client) => ({
  /**
   * @description Retrieve an ordered and paginated list of **Charges**.
   *
   * @tags Charges
   * @name ListCharges
   * @summary List Charges
   * @request GET:/charges
   * @secure
   */
  listCharges: (params?: { limit?: number; offset?: number }) =>
    client.request<Charges>({
      url: `/charges`,
      method: 'GET',
      params,
      secure: true,
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
  createCharge: (data: ChargeRequestBody) =>
    client.request<SingleCharge>({
      url: `/charges`,
      method: 'POST',
      data,
      secure: true,
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
  showCharge: (id: string) =>
    client.request<SingleCharge>({
      url: `/charges/${id}`,
      method: 'GET',
      secure: true,
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
  showChargeStatus: (id: string) =>
    client.request<SingleChargeStatus>({
      url: `/charges/${id}/status`,
      method: 'GET',
      secure: true,
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
  showChargeBuyer: (id: string) =>
    client.request<SingleUser>({
      url: `/charges/${id}/buyers`,
      method: 'GET',
      secure: true,
    }),
});
