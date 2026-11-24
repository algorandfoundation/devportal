---
editUrl: false
next: false
prev: false
title: "TestNetDispenserApiClient"
---

Defined in: [src/types/dispenser-client.ts:72](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L72)

`TestNetDispenserApiClient` is a class that provides methods to interact with the [Algorand TestNet Dispenser API](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md).
It allows you to fund an address with Algo, refund a transaction, and get the funding limit for the Algo asset.

The class requires an authentication token and a request timeout to be initialized. The authentication token can be provided
either directly as a parameter or through an `ALGOKIT_DISPENSER_ACCESS_TOKEN` environment variable. If neither is provided, an error is thrown.

The request timeout can be provided as a parameter. If not provided, a default value is used.

## Method

fund - Sends a funding request to the dispenser API to fund the specified address with the given amount of Algo.

## Method

refund - Sends a refund request to the dispenser API for the specified refundTxnId.

## Method

limit - Sends a request to the dispenser API to get the funding limit for the Algo asset.

## Example

```typescript
const client = new TestNetDispenserApiClient({ authToken: 'your_auth_token', requestTimeout: 30 });
const fundResponse = await client.fund('your_address', 100);
const limitResponse = await client.getLimit();
await client.refund('your_transaction_id');
```

## Throws

If neither the environment variable 'ALGOKIT_DISPENSER_ACCESS_TOKEN' nor the authToken parameter were provided.

## Constructors

### Constructor

> **new TestNetDispenserApiClient**(`params?`): `TestNetDispenserApiClient`

Defined in: [src/types/dispenser-client.ts:76](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L76)

#### Parameters

##### params?

[`TestNetDispenserApiClientParams`](/docs/algokit-utils/typescript/latest/api/types/dispenser-client/interfaces/testnetdispenserapiclientparams/)

#### Returns

`TestNetDispenserApiClient`

## Accessors

### authToken

#### Get Signature

> **get** **authToken**(): `string`

Defined in: [src/types/dispenser-client.ts:92](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L92)

##### Returns

`string`

The authentication token used for API requests.

***

### requestTimeout

#### Get Signature

> **get** **requestTimeout**(): `number`

Defined in: [src/types/dispenser-client.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L96)

##### Returns

`number`

The timeout for API requests, in seconds.

## Methods

### fund()

> **fund**(`address`, `amount`): `Promise`\<[`DispenserFundResponse`](/docs/algokit-utils/typescript/latest/api/types/dispenser-client/interfaces/dispenserfundresponse/)\>

Defined in: [src/types/dispenser-client.ts:158](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L158)

Sends a funding request to the dispenser API to fund the specified address with the given amount of Algo.

#### Parameters

##### address

`string` \| `Address`

The address to fund.

##### amount

`number` \| `bigint`

The amount of µAlgo to fund.

#### Returns

`Promise`\<[`DispenserFundResponse`](/docs/algokit-utils/typescript/latest/api/types/dispenser-client/interfaces/dispenserfundresponse/)\>

DispenserFundResponse: An object containing the transaction ID and funded amount.

***

### getLimit()

> **getLimit**(): `Promise`\<[`DispenserLimitResponse`](/docs/algokit-utils/typescript/latest/api/types/dispenser-client/interfaces/dispenserlimitresponse/)\>

Defined in: [src/types/dispenser-client.ts:188](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L188)

Sends a request to the dispenser API to get the funding limit for the Algo asset.

#### Returns

`Promise`\<[`DispenserLimitResponse`](/docs/algokit-utils/typescript/latest/api/types/dispenser-client/interfaces/dispenserlimitresponse/)\>

DispenserLimitResponse: An object containing the funding limit amount.

***

### refund()

> **refund**(`refundTxnId`): `Promise`\<`void`\>

Defined in: [src/types/dispenser-client.ts:179](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/dispenser-client.ts#L179)

Sends a refund request to the dispenser API for the specified refundTxnId.

#### Parameters

##### refundTxnId

`string`

The transaction ID to refund.

#### Returns

`Promise`\<`void`\>
