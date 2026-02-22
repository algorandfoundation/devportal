---
editUrl: false
next: false
prev: false
title: "TestNetDispenserApiClient"
---

Defined in: [src/dispenser-client.ts:73](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/dispenser-client.ts#L73)

`TestNetDispenserApiClient` is a class that provides methods to interact with the [Algorand TestNet Dispenser API](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md).
It allows you to fund an address with Algo, refund a transaction, and get the funding limit for the Algo asset.

The class requires an authentication token and a request timeout to be initialized. The authentication token can be provided
either directly as a parameter or through an `ALGOKIT_DISPENSER_ACCESS_TOKEN` environment variable. If neither is provided, an error is thrown.

The request timeout can be provided as a parameter. If not provided, a default value is used.

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

Defined in: [src/dispenser-client.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/dispenser-client.ts#L77)

#### Parameters

##### params?

`TestNetDispenserApiClientParams`

#### Returns

`TestNetDispenserApiClient`

## Accessors

### authToken

#### Get Signature

> **get** **authToken**(): `string`

Defined in: [src/dispenser-client.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/dispenser-client.ts#L93)

##### Returns

`string`

The authentication token used for API requests.

***

### requestTimeout

#### Get Signature

> **get** **requestTimeout**(): `number`

Defined in: [src/dispenser-client.ts:97](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/dispenser-client.ts#L97)

##### Returns

`number`

The timeout for API requests, in seconds.

Methods:
- `fund` - Sends a funding request to the dispenser API to fund the specified address with the given amount of Algo.
- `refund` - Sends a refund request to the dispenser API for the specified refundTxnId.
- `limit` - Sends a request to the dispenser API to get the funding limit for the Algo asset.

## Methods

### fund()

> **fund**(`address`, `amount`): `Promise`\<`DispenserFundResponse`\>

Defined in: [src/dispenser-client.ts:159](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/dispenser-client.ts#L159)

Sends a funding request to the dispenser API to fund the specified address with the given amount of Algo.

#### Parameters

##### address

The address to fund.

`string` | [`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)

##### amount

The amount of µAlgo to fund.

`number` | `bigint`

#### Returns

`Promise`\<`DispenserFundResponse`\>

DispenserFundResponse: An object containing the transaction ID and funded amount.

***

### getLimit()

> **getLimit**(): `Promise`\<`DispenserLimitResponse`\>

Defined in: [src/dispenser-client.ts:189](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/dispenser-client.ts#L189)

Sends a request to the dispenser API to get the funding limit for the Algo asset.

#### Returns

`Promise`\<`DispenserLimitResponse`\>

DispenserLimitResponse: An object containing the funding limit amount.

***

### refund()

> **refund**(`refundTxnId`): `Promise`\<`void`\>

Defined in: [src/dispenser-client.ts:180](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/dispenser-client.ts#L180)

Sends a refund request to the dispenser API for the specified refundTxnId.

#### Parameters

##### refundTxnId

`string`

The transaction ID to refund.

#### Returns

`Promise`\<`void`\>
