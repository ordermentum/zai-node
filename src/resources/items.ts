/* eslint-disable camelcase */
import { Client } from '../client';

import {
  Items,
  Fees,
  ItemRequestBody,
  SingleWireDetailsWithId,
  UpdateItemRequestBody,
  SingleStatus,
  RefundRequestBody,
  CardAccountIdRequestBody,
  Transactions,
  ReleasePaymentRequestBody,
  SingleUser,
  ListBatchTransactions,
  AccountIdRequestBody,
  SingleItem,
  AsyncMakePaymentBody,
} from '../types';

export default (client: Client) => ({
  /**
   * @description OK
   *
   * @tags Items
   * @name ListItems
   * @summary List Items
   * @request GET:/items
   * @secure
   */
  listItems: (params: {
    offset?: number;
    limit?: number;
    search: string;
    created_before?: string;
    created_after?: string;
  }) =>
    client.request<Items>({
      url: `/items`,
      method: 'GET',
      params,
      secure: true,
    }),

  /**
   * @description Create an **Item**. Items require two **Users**, a buyer and a seller. The `buyer_id` and `seller_id` are your unique user identifiers.
   *
   * @tags Items
   * @name CreateItem
   * @summary Create Item
   * @request POST:/items
   * @secure
   */
  createItem: (data: ItemRequestBody) =>
    client.request<SingleItem>({
      url: `/items`,
      method: 'POST',
      data,
      secure: true,
    }),

  /**
   * @description Show details of a specific **Item** using a given `:id`.
   *
   * @tags Items
   * @name ShowItem
   * @summary Show Item
   * @request GET:/items/{id}
   * @secure
   */
  showItem: (id: string) =>
    client.request<SingleItem>({
      url: `/items/${id}`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Delete an existing **Item** using a given `:id`.
   *
   * @tags Items
   * @name DeleteItem
   * @summary Delete Item
   * @request DELETE:/items/{id}
   * @secure
   */
  deleteItem: (id: string) =>
    client.request<SingleItem>({
      url: `/items/${id}`,
      method: 'DELETE',
      secure: true,
    }),

  /**
   * @description Update an existing **Items** attributes using a given `:id`. Note: An item can only be updated if it’s in `pending` state. Once an item has begun a payment process, you cannot update it.
   *
   * @tags Items
   * @name UpdateItem
   * @summary Update Item
   * @request PATCH:/items/{id}
   * @secure
   */
  updateItem: (id: string, data: UpdateItemRequestBody) =>
    client.request<SingleItem>({
      url: `/items/${id}`,
      method: 'PATCH',
      data,
      secure: true,
    }),

  /**
   * @description Show the seller **User** associated with the **Item** using a given `:id`.
   *
   * @tags Items
   * @name ShowItemSeller
   * @summary Show Item Seller
   * @request GET:/items/{id}/sellers
   * @secure
   */
  showItemSeller: (id: string) =>
    client.request<SingleUser>({
      url: `/items/${id}/sellers`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show the buyer **User** associated with the **Item** using a given `:id`.
   *
   * @tags Items
   * @name ShowItemBuyer
   * @summary Show Item Buyer
   * @request GET:/items/{id}/buyers
   * @secure
   */
  showItemBuyer: (id: string) =>
    client.request<SingleUser>({
      url: `/items/${id}/buyers`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show the **Fees** associated with the **Item** using a given `:id`.
   *
   * @tags Items
   * @name ShowItemFees
   * @summary Show Item Fees
   * @request GET:/items/{id}/fees
   * @secure
   */
  showItemFees: (id: string) =>
    client.request<Fees>({
      url: `/items/${id}/fees`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show the **Item** wire payment details using a given `:id`.
   *
   * @tags Items
   * @name ShowItemWireDetails
   * @summary Show Item Wire Details
   * @request GET:/items/{id}/wire_details
   * @secure
   */
  showItemWireDetails: (id: string) =>
    client.request<SingleWireDetailsWithId>({
      url: `/items/${id}/wire_details`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Retrieve an ordered and paginated list of **Transactions** associated with the **Item** using a given `:id`.
   *
   * @tags Items
   * @name ListItemTransactions
   * @summary List Item Transactions
   * @request GET:/items/{id}/transactions
   * @secure
   */
  listItemTransactions: (id: string) =>
    client.request<Transactions>({
      url: `/items/${id}/transactions`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Retrieve an ordered and paginated list of **Batch Transactions** associated with the `Item` using a given `:id`. This will include both direct debits coming in, and the disbursements going out.
   *
   * @tags Items
   * @name ListItemBatchTransactions
   * @summary List Item Batch Transactions
   * @request GET:/items/{id}/batch_transactions
   * @secure
   */
  listItemBatchTransactions: (id: string) =>
    client.request<ListBatchTransactions>({
      url: `/items/${id}/batch_transactions`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Show the status of an **Item** using a given `:id`.
   *
   * @tags Items
   * @name ShowItemStatus
   * @summary Show Item Status
   * @request GET:/items/{id}/status
   * @secure
   */
  showItemStatus: (id: string) =>
    client.request<SingleStatus>({
      url: `/items/${id}/status`,
      method: 'GET',
      secure: true,
    }),

  /**
   * @description Make a payment for an **Item**. Pass the `:account_id` of a **Bank Account** or a **Card Account** associated with the **Item’s** buyer. The **Item** state will transition to one of `payment_held`, `payment_pending` or `completed` for an **Express** or **Approve** payment type.
   *
   * @tags Item Actions
   * @name MakePayment
   * @summary Make Payment
   * @request PATCH:/items/{id}/make_payment
   * @secure
   */
  makePayment: (id: string, data: AccountIdRequestBody) =>
    client.request<SingleItem>({
      url: `/items/${id}/make_payment`,
      method: 'PATCH',
      data,
      secure: true,
    }),

  /**
   * @description Make a payment for an **Item**. Pass the `:account_id` of a **Bank Account** or a **Card Account** associated with the **Item’s** buyer. The **Item** state will transition to one of `payment_held`, `payment_pending` or `completed` for an **Express** or **Approve** payment type.
   *
   * @tags Item Actions
   * @name AsyncMakePaymentBody
   * @summary Make Payment (async)
   * @request PATCH:/items/{id}/make_payment
   * @secure
   */
  makeAsyncPayment: (id: string, data: AccountIdRequestBody) =>
    client.request<AsyncMakePaymentBody>({
      url: `/items/${id}/make_payment`,
      method: 'PATCH',
      data,
      secure: true,
    }),

  /**
   * @description Cancel an **Item**. This will transition the **Item** state to `cancelled`. **Items** can only be cancelled if they haven’t been actioned in any other way.
   *
   * @tags Item Actions
   * @name CancelItem
   * @summary Cancel
   * @request PATCH:/items/{id}/cancel
   * @secure
   */
  cancelItem: (id: string) =>
    client.request<SingleItem>({
      url: `/items/${id}/cancel`,
      method: 'PATCH',
      secure: true,
    }),

  /**
   * @description Refund an **Item**’s funds. A partial `amount` can be specified otherwise the full amount will be refunded. This will transition the **Item** state to ‘refunded’ if the full amount is refunded, or to the previously held state if a partial `amount` is specified.
   *
   * @tags Item Actions
   * @name Refund
   * @summary Refund
   * @request PATCH:/items/{id}/refund
   * @secure
   */
  refund: (id: string, data: RefundRequestBody) =>
    client.request<SingleItem>({
      url: `/items/${id}/refund`,
      method: 'PATCH',
      data,
      secure: true,
    }),

  /**
   * @description Where pre-authentication is enabled on a platform, initiates a credit card payment authorization for an item. When an authorization is successful, your platform holds the item amount for capture, but there is no transfer of funds happening. This call is used with the Capture Payment or Void Payment calls.
   *
   * @tags Item Actions
   * @name AuthorizePayment
   * @summary Authorize Payment
   * @request PATCH:/items/{id}/authorize_payment
   * @secure
   */
  authorizePayment: (id: string, data: CardAccountIdRequestBody) =>
    client.request<SingleItem>({
      url: `/items/${id}/authorize_payment`,
      method: 'PATCH',
      data,
      secure: true,
    }),

  /**
   * @description Where pre-authentication is enabled on a platform, completes a credit card payment for an item whose payment is authorized. This call is used with the Authorize Payment call.
   *
   * @tags Item Actions
   * @name CapturePayment
   * @summary Capture Payment
   * @request PATCH:/items/{id}/capture_payment
   * @secure
   */
  capturePayment: (id: string) =>
    client.request<SingleItem>({
      url: `/items/${id}/capture_payment`,
      method: 'PATCH',
      secure: true,
    }),

  /**
   * @description Where pre-authentication is enabled on a platform, voids the `payment_authorized` status for an item. This call is used with the Authorize Payment call. **Note**: Not all payment gateways support the Void Payment API call. In this case, you can wait until a payment authorization expires. A payment authorisation expires after 3 to 6 days if not captured.
   *
   * @tags Item Actions
   * @name VoidPayment
   * @summary Void Payment
   * @request PATCH:/items/{id}/void_payment
   * @secure
   */
  voidPayment: (id: string) =>
    client.request<SingleItem>({
      url: `/items/${id}/void_payment`,
      method: 'PATCH',
      secure: true,
    }),

  /**
   * @description Included for legacy purposes for existing customers that use Escrow payments which are no longer supported for new flows/customers. Release funds held in escrow from an **Item** with an **Escrow** or **Escrow Partial Release** payment type.  This will transition the **Item** state to `completed`.
   *
   * @tags Item Actions
   * @name ReleasePayment
   * @summary Release Payment (Deprecated - Do Not Use)
   * @request PATCH:/items/{id}/release_payment
   * @secure
   */
  releasePayment: (id: string, data: ReleasePaymentRequestBody) =>
    client.request<SingleItem>({
      url: `/items/${id}/release_payment`,
      method: 'PATCH',
      data,
      secure: true,
    }),
});
