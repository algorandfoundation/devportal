---
editUrl: false
next: false
prev: false
title: "AlgorandFixtureConfig"
---

Defined in: [src/testing/types.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L55)

Configuration for creating an Algorand testing fixture.

## Extends

- `Partial`\<[`AlgoConfig`](/algokit-utils-ts/api/algokit-utils/interfaces/algoconfig/)\>

## Properties

### accountGetter()?

> `optional` **accountGetter**: (`algorand`) => `Promise`\<[`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/) & `object`\>

Defined in: [src/testing/types.ts:65](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L65)

Optional override for how to get an account; this allows you to retrieve accounts from a known or cached list of accounts.

#### Parameters

##### algorand

[`AlgorandClient`](/algokit-utils-ts/api/algokit-utils/classes/algorandclient/)

#### Returns

`Promise`\<[`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/) & `object`\>

***

### algod?

> `optional` **algod**: [`AlgodClient`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodclient/)

Defined in: [src/testing/types.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L57)

An optional algod client, if not specified then it will create one against `algodConfig` (if present) then environment variables defined network (if present) or default LocalNet.

***

### algodConfig?

> `optional` **algodConfig**: [`AlgoClientConfig`](/algokit-utils-ts/api/algokit-utils/interfaces/algoclientconfig/)

Defined in: [src/network-client.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L14)

Algod client configuration

#### Inherited from

[`AlgoConfig`](/algokit-utils-ts/api/algokit-utils/interfaces/algoconfig/).[`algodConfig`](/algokit-utils-ts/api/algokit-utils/interfaces/algoconfig/#algodconfig)

***

### indexer?

> `optional` **indexer**: [`IndexerClient`](/algokit-utils-ts/api/subpaths/indexer-client/classes/indexerclient/)

Defined in: [src/testing/types.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L59)

An optional indexer client, if not specified then it will create one against `indexerConfig` (if present) then environment variables defined network (if present) or default LocalNet.

***

### indexerConfig?

> `optional` **indexerConfig**: [`AlgoClientConfig`](/algokit-utils-ts/api/algokit-utils/interfaces/algoclientconfig/)

Defined in: [src/network-client.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L16)

Indexer client configuration

#### Inherited from

[`AlgoConfig`](/algokit-utils-ts/api/algokit-utils/interfaces/algoconfig/).[`indexerConfig`](/algokit-utils-ts/api/algokit-utils/interfaces/algoconfig/#indexerconfig)

***

### kmd?

> `optional` **kmd**: [`KmdClient`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdclient/)

Defined in: [src/testing/types.ts:61](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L61)

An optional kmd client, if not specified then it will create one against `kmdConfig` (if present) then environment variables defined network (if present) or default LocalNet.

***

### kmdConfig?

> `optional` **kmdConfig**: [`AlgoClientConfig`](/algokit-utils-ts/api/algokit-utils/interfaces/algoclientconfig/)

Defined in: [src/network-client.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L18)

Kmd configuration

#### Inherited from

[`AlgoConfig`](/algokit-utils-ts/api/algokit-utils/interfaces/algoconfig/).[`kmdConfig`](/algokit-utils-ts/api/algokit-utils/interfaces/algoconfig/#kmdconfig)

***

### testAccountFunding?

> `optional` **testAccountFunding**: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

Defined in: [src/testing/types.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L63)

The amount of funds to allocate to the default testing account, if not specified then it will get 10 ALGO.
