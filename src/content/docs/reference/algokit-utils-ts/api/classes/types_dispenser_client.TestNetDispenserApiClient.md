---
title: TestNetDispenserApiClient
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/dispenser-client](/reference/algokit-utils-ts/api/modules/types_dispenser_client/) / TestNetDispenserApiClient

[types/dispenser-client](/reference/algokit-utils-ts/api/modules/types_dispenser_client/).TestNetDispenserApiClient

`TestNetDispenserApiClient` is a class that provides methods to interact with the [Algorand TestNet Dispenser API](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md).
It allows you to fund an address with Algo, refund a transaction, and get the funding limit for the Algo asset.

The class requires an authentication token and a request timeout to be initialized. The authentication token can be provided
either directly as a parameter or through an `ALGOKIT_DISPENSER_ACCESS_TOKEN` environment variable. If neither is provided, an error is thrown.

The request timeout can be provided as a parameter. If not provided, a default value is used.

**`Method`**

fund - Sends a funding request to the dispenser API to fund the specified address with the given amount of Algo.

**`Method`**

refund - Sends a refund request to the dispenser API for the specified refundTxnId.

**`Method`**

limit - Sends a request to the dispenser API to get the funding limit for the Algo asset.

**`Example`**

```typescript
const client = new TestNetDispenserApiClient({ authToken: 'your_auth_token', requestTimeout: 30 });
const fundResponse = await client.fund('your_address', 100);
const limitResponse = await client.getLimit();
await client.refund('your_transaction_id');
```

**`Throws`**

If neither the environment variable 'ALGOKIT_DISPENSER_ACCESS_TOKEN' nor the authToken parameter were provided.

## Table of contents

### Constructors

- [constructor](types_dispenser_client.TestNetDispenserApiClient.md#constructor)

### Properties

- [\_authToken](types_dispenser_client.TestNetDispenserApiClient.md#_authtoken)
- [\_requestTimeout](types_dispenser_client.TestNetDispenserApiClient.md#_requesttimeout)

### Accessors

- [authToken](types_dispenser_client.TestNetDispenserApiClient.md#authtoken)
- [requestTimeout](types_dispenser_client.TestNetDispenserApiClient.md#requesttimeout)

### Methods

- [fund](types_dispenser_client.TestNetDispenserApiClient.md#fund)
- [getLimit](types_dispenser_client.TestNetDispenserApiClient.md#getlimit)
- [processDispenserRequest](types_dispenser_client.TestNetDispenserApiClient.md#processdispenserrequest)
- [refund](types_dispenser_client.TestNetDispenserApiClient.md#refund)

## Constructors

### constructor

• **new TestNetDispenserApiClient**(`params?`): [`TestNetDispenserApiClient`](types_dispenser_client.TestNetDispenserApiClient.md)

#### Parameters

| Name      | Type                                                                                                                                   |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `params?` | [`TestNetDispenserApiClientParams`](/reference/algokit-utils-ts/api/interfaces/types_dispenser_clienttestnetdispenserapiclientparams/) |

#### Returns

[`TestNetDispenserApiClient`](types_dispenser_client.TestNetDispenserApiClient.md)

#### Defined in

[src/types/dispenser-client.ts:76](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L76)

## Properties

### \_authToken

• `Private` **\_authToken**: `string`

#### Defined in

[src/types/dispenser-client.ts:73](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L73)

---

### \_requestTimeout

• `Private` **\_requestTimeout**: `number`

#### Defined in

[src/types/dispenser-client.ts:74](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L74)

## Accessors

### authToken

• `get` **authToken**(): `string`

The authentication token used for API requests.

#### Returns

`string`

#### Defined in

[src/types/dispenser-client.ts:92](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L92)

---

### requestTimeout

• `get` **requestTimeout**(): `number`

The timeout for API requests, in seconds.

#### Returns

`number`

#### Defined in

[src/types/dispenser-client.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L96)

## Methods

### fund

▸ **fund**(`address`, `amount`): `Promise`\<[`DispenserFundResponse`](/reference/algokit-utils-ts/api/interfaces/types_dispenser_clientdispenserfundresponse/)\>

Sends a funding request to the dispenser API to fund the specified address with the given amount of Algo.

#### Parameters

| Name      | Type                  | Description                  |
| :-------- | :-------------------- | :--------------------------- |
| `address` | `string` \| `Address` | The address to fund.         |
| `amount`  | `number` \| `bigint`  | The amount of µAlgo to fund. |

#### Returns

`Promise`\<[`DispenserFundResponse`](/reference/algokit-utils-ts/api/interfaces/types_dispenser_clientdispenserfundresponse/)\>

DispenserFundResponse: An object containing the transaction ID and funded amount.

#### Defined in

[src/types/dispenser-client.ts:158](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L158)

---

### getLimit

▸ **getLimit**(): `Promise`\<[`DispenserLimitResponse`](/reference/algokit-utils-ts/api/interfaces/types_dispenser_clientdispenserlimitresponse/)\>

Sends a request to the dispenser API to get the funding limit for the Algo asset.

#### Returns

`Promise`\<[`DispenserLimitResponse`](/reference/algokit-utils-ts/api/interfaces/types_dispenser_clientdispenserlimitresponse/)\>

DispenserLimitResponse: An object containing the funding limit amount.

#### Defined in

[src/types/dispenser-client.ts:188](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L188)

---

### processDispenserRequest

▸ **processDispenserRequest**(`authToken`, `urlSuffix`, `body?`, `method?`): `Promise`\<`Response`\>

Processes a dispenser API request.

#### Parameters

| Name        | Type                                                 | Default value | Description                         |
| :---------- | :--------------------------------------------------- | :------------ | :---------------------------------- |
| `authToken` | `string`                                             | `undefined`   | The authentication token.           |
| `urlSuffix` | `string`                                             | `undefined`   | The URL suffix for the API request. |
| `body`      | `null` \| `Record`\<`string`, `string` \| `number`\> | `null`        | The request body.                   |
| `method`    | `string`                                             | `'POST'`      | The HTTP method.                    |

#### Returns

`Promise`\<`Response`\>

The API response.

#### Defined in

[src/types/dispenser-client.ts:110](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L110)

---

### refund

▸ **refund**(`refundTxnId`): `Promise`\<`void`\>

Sends a refund request to the dispenser API for the specified refundTxnId.

#### Parameters

| Name          | Type     | Description                   |
| :------------ | :------- | :---------------------------- |
| `refundTxnId` | `string` | The transaction ID to refund. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/dispenser-client.ts:179](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L179)
