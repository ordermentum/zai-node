import { Client } from '../client';

import {
  SingleCallback,
  CallbackDeletion,
  ListCallbackResponses,
  CallbackRequestBody,
  SingleCallbackResponse,
  Callbacks,
} from '../types';

export default (client: Client) => ({
  /**
   * @description Show details of a specific **Callback** using a given `:id`.
   *
   * @tags Callbacks
   * @name ShowCallback
   * @summary Show Callback
   * @request GET:/callbacks/{id}
   * @secure
   */
  showCallback: (id: string) =>
    client.request<SingleCallback>({
      url: `/callbacks/${id}`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Delete an existing Callback using a given `:id`.
   *
   * @tags Callbacks
   * @name DeleteCallback
   * @summary Delete Callback
   * @request DELETE:/callbacks/{id}
   * @secure
   */
  deleteCallback: (id: string) =>
    client.request<CallbackDeletion>({
      url: `/callbacks/${id}`,
      method: 'DELETE',
      secure: true,
    }),

  /**
   * @description Update an existing **Callback** using a given `:id`. You can change the `URL`, the `object_type` and whether the **Callback** is `enabled` or `disabled`.
   *
   * @tags Callbacks
   * @name UpdateCallback
   * @summary Update Callback
   * @request PATCH:/callbacks/{id}
   * @secure
   */
  updateCallback: (id: string, data: CallbackRequestBody) =>
    client.request<SingleCallback>({
      url: `/callbacks/${id}`,
      method: 'PATCH',
      data,
      secure: true,
    }),

  /**
   * @description Retrieve an ordered and paginated list of the responses garnered from a callback using a given `:id`.
   *
   * @tags Callbacks
   * @name ListCallbackResponse
   * @summary List Callback Responses
   * @request GET:/callbacks/{id}/responses
   * @secure
   */
  listCallbackResponse: (
    id: string,
    params?: { limit?: number; offset?: number }
  ) =>
    client.request<ListCallbackResponses>({
      url: `/callbacks/${id}/responses`,
      method: 'GET',
      params,
      secure: true,
    }),

  /**
   * @description Show details of a specific **Callback** response using a given `:id`.
   *
   * @tags Callbacks
   * @name ShowCallbackResponse
   * @summary Show Callback Response
   * @request GET:/callbacks/{callback_id}/responses/{id}
   * @secure
   */
  showCallbackResponse: (callbackId: string, id: string) =>
    client.request<SingleCallbackResponse>({
      url: `/callbacks/${callbackId}/responses/${id}`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Retrieve an ordered and paginated list of all created **Callbacks**.
   *
   * @tags Callbacks
   * @name ListCallbacks
   * @summary List Callbacks
   * @request GET:/callbacks
   * @secure
   */
  listCallbacks: (params?: {
    limit?: number;
    offset?: number;
    filter?: string;
  }) =>
    client.request<Callbacks>({
      url: `/callbacks`,
      method: 'GET',
      params,
      secure: true,
    }),

  /**
   * @description Create a **Callback** to notify you at the `URL` when the `object_type` changes
   *
   * @tags Callbacks
   * @name CreateCallback
   * @summary Create Callback
   * @request POST:/callbacks
   * @secure
   */
  createCallback: (data: CallbackRequestBody) =>
    client.request<SingleCallback>({
      url: `/callbacks`,
      method: 'POST',
      data,
      secure: true,
    }),
});
