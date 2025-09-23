---
title: AlgorandFixtureConfig
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/testing](/reference/algokit-utils-ts/api/modules/types_testing/) / AlgorandFixtureConfig



[types/testing](/reference/algokit-utils-ts/api/modules/types_testing/).AlgorandFixtureConfig

Configuration for creating an Algorand testing fixture.

## Hierarchy

- `Partial`\<[`AlgoConfig`]()\>

  ↳ **`AlgorandFixtureConfig`**

## Table of contents

### Properties

- [accountGetter](#accountgetter)
- [algod](#algod)
- [algodConfig](#algodconfig)
- [indexer](#indexer)
- [indexerConfig](#indexerconfig)
- [kmd](#kmd)
- [kmdConfig](#kmdconfig)
- [testAccountFunding](#testaccountfunding)

## Properties

### accountGetter

• `Optional` **accountGetter**: (`algod`: `AlgodClient`, `kmd?`: `KmdClient`) => `Promise`\<`default`\>

Optional override for how to get an account; this allows you to retrieve accounts from a known or cached list of accounts.

#### Type declaration

▸ (`algod`, `kmd?`): `Promise`\<`default`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `algod` | `AlgodClient` |
| `kmd?` | `KmdClient` |

##### Returns

`Promise`\<`default`\>

#### Defined in

[src/types/testing.ts:62](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L62)

___

### algod

• `Optional` **algod**: `AlgodClient`

An optional algod client, if not specified then it will create one against `algodConfig` (if present) then environment variables defined network (if present) or default LocalNet.

#### Defined in

[src/types/testing.ts:54](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L54)

___

### algodConfig

• `Optional` **algodConfig**: [`AlgoClientConfig`]()

Algod client configuration

#### Inherited from

Partial.algodConfig

#### Defined in

[src/types/network-client.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L16)

___

### indexer

• `Optional` **indexer**: `IndexerClient`

An optional indexer client, if not specified then it will create one against `indexerConfig` (if present) then environment variables defined network (if present) or default LocalNet.

#### Defined in

[src/types/testing.ts:56](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L56)

___

### indexerConfig

• `Optional` **indexerConfig**: [`AlgoClientConfig`]()

Indexer client configuration

#### Inherited from

Partial.indexerConfig

#### Defined in

[src/types/network-client.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L18)

___

### kmd

• `Optional` **kmd**: `KmdClient`

An optional kmd client, if not specified then it will create one against `kmdConfig` (if present) then environment variables defined network (if present) or default LocalNet.

#### Defined in

[src/types/testing.ts:58](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L58)

___

### kmdConfig

• `Optional` **kmdConfig**: [`AlgoClientConfig`]()

Kmd configuration

#### Inherited from

Partial.kmdConfig

#### Defined in

[src/types/network-client.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L20)

___

### testAccountFunding

• `Optional` **testAccountFunding**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The amount of funds to allocate to the default testing account, if not specified then it will get 10 ALGO.

#### Defined in

[src/types/testing.ts:60](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L60)