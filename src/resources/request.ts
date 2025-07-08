import { Client } from '../client';

export default (client: Client) => ({
  /**
   * @description Show request status for async payment using a given `:id`.
   *
   * @tags Request
   * @name showRequestStatus
   * @summary Show request status for async payment
   * @request GET:/request/${id}/status
   * @secure
   */
  showRequestStatus: (id: string) =>
    client.request<any>({
      url: `/request/${id}/status`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show callbacks registered for async payment using a given `:id`.
   *
   * @tags Request
   * @name showRequestCallbacks
   * @summary Show callbacks for async payment
   * @request GET:/request/${id}/callbacks
   * @secure
   */
  showRequestCallbacks: (id: string) =>
    client.request<any>({
      url: `/request/${id}/callbacks`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Used for checking zai callbacks with the path they provided`.
   *
   * @tags Request
   * @name showRequestCallbacks
   * @summary GET using the path provided
   * @request GET:/${path}
   * @secure
   */
  getWithPath: (path: string) =>
    client.request<any>({
      url: path,
      method: 'GET',
      secure: true,
    }),
});
