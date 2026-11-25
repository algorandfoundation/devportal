---
editUrl: false
next: false
prev: false
title: "AlgorandFixtureConfig"
---

Defined in: [src/types/testing.ts:52](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L52)

Configuration for creating an Algorand testing fixture.

## Extends

- `Partial`\<[`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoconfig/)\>

## Properties

### accountGetter?

> `optional` **accountGetter?**: (`algod`, `kmd?`) => `Promise`\<`Account`\>

Defined in: [src/types/testing.ts:62](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L62)

Optional override for how to get an account; this allows you to retrieve accounts from a known or cached list of accounts.

#### Parameters

##### algod

`AlgodClient`

##### kmd?

`KmdClient`

#### Returns

`Promise`\<`Account`\>

***

### algod?

> `optional` **algod?**: `AlgodClient`

Defined in: [src/types/testing.ts:54](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L54)

An optional algod client, if not specified then it will create one against `algodConfig` (if present) then environment variables defined network (if present) or default LocalNet.

***

### algodConfig?

> `optional` **algodConfig?**: [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

Defined in: [src/types/network-client.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L16)

Algod client configuration

#### Inherited from

[`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoconfig/).[`algodConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoconfig/#algodconfig)

***

### indexer?

> `optional` **indexer?**: `IndexerClient`

Defined in: [src/types/testing.ts:56](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L56)

An optional indexer client, if not specified then it will create one against `indexerConfig` (if present) then environment variables defined network (if present) or default LocalNet.

***

### indexerConfig?

> `optional` **indexerConfig?**: [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

Defined in: [src/types/network-client.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L18)

Indexer client configuration

#### Inherited from

[`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoconfig/).[`indexerConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoconfig/#indexerconfig)

***

### kmd?

> `optional` **kmd?**: `KmdClient`

Defined in: [src/types/testing.ts:58](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L58)

An optional kmd client, if not specified then it will create one against `kmdConfig` (if present) then environment variables defined network (if present) or default LocalNet.

***

### kmdConfig?

> `optional` **kmdConfig?**: [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

Defined in: [src/types/network-client.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L20)

Kmd configuration

#### Inherited from

[`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoconfig/).[`kmdConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoconfig/#kmdconfig)

***

### testAccountFunding?

> `optional` **testAccountFunding?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/testing.ts:60](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L60)

The amount of funds to allocate to the default testing account, if not specified then it will get 10 ALGO.
