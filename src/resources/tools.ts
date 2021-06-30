/* eslint-disable camelcase */
import { Client } from '../client';

import { SingleRoutingNumber, ToolsStatus } from '../types';

export default (client: Client) => ({
  /**
   * @description Validate a US bank routing number before creating an account. This can be used to provide on-demand verification, and further information of the bank information a User is providing.
   *
   * @tags Bank Accounts
   * @name ValidateRoutingNumber
   * @summary Validate Routing Number
   * @request GET:/tools/routing_number
   * @secure
   */
  validateRoutingNumber: (params: { routing_number: string }) =>
    client.request<SingleRoutingNumber>({
      url: `/tools/routing_number`,
      method: 'GET',
      params,
      secure: true,
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
  healthCheck: () =>
    client.request<ToolsStatus>({
      url: `/tools/status`,
      method: 'GET',
      secure: true,
    }),
});
