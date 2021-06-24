import { Client } from '../client';
import { Address } from '../types';

export default (client: Client) => ({
  /**
   * @description Show details of a specific Address using a given address `:id`.
   *
   * @tags Addresses
   * @name ShowAddress
   * @summary Show Address
   * @request GET:/addresses/{id}
   * @secure
   */
  showAddress: (id: string) =>
    client.request<Address>({
      url: `/addresses/${id}`,
      method: 'GET',
      secure: true,
    }),
});
