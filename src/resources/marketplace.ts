import { Client } from '../client';

import { Marketplace } from '../types';

export default (client: Client) => ({
  /**
   * @description Show details of your **Platform**, providing access to your configuration and related **User** and **Company**.
   *
   * @tags Marketplaces
   * @name ShowMarketplace
   * @summary Show Marketplace
   * @request GET:/marketplace
   * @secure
   */
  showMarketplace: () =>
    client.request<Marketplace>({
      url: `/marketplace`,
      method: 'GET',
      secure: true,
    }),
});
