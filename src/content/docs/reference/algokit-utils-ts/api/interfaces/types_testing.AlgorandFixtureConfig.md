---
title: AlgorandFixtureConfig
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/testing](/reference/algokit-utils-ts/api/modules/types_testing/) / AlgorandFixtureConfig

[types/testing](/reference/algokit-utils-ts/api/modules/types_testing/).AlgorandFixtureConfig

Configuration for creating an Algorand testing fixture.

## Hierarchy

- `Partial`\<[`AlgoConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoconfig/)\>

  ↳ **`AlgorandFixtureConfig`**

## Table of contents

### Properties

- [accountGetter](/reference/algokit-utils-ts/api/interfaces/types_testingalgorandfixtureconfig/#accountgetter)
- [algod](/reference/algokit-utils-ts/api/interfaces/types_testingalgorandfixtureconfig/#algod)
- [algodConfig](/reference/algokit-utils-ts/api/interfaces/types_testingalgorandfixtureconfig/#algodconfig)
- [indexer](/reference/algokit-utils-ts/api/interfaces/types_testingalgorandfixtureconfig/#indexer)
- [indexerConfig](/reference/algokit-utils-ts/api/interfaces/types_testingalgorandfixtureconfig/#indexerconfig)
- [kmd](/reference/algokit-utils-ts/api/interfaces/types_testingalgorandfixtureconfig/#kmd)
- [kmdConfig](/reference/algokit-utils-ts/api/interfaces/types_testingalgorandfixtureconfig/#kmdconfig)
- [testAccountFunding](/reference/algokit-utils-ts/api/interfaces/types_testingalgorandfixtureconfig/#testaccountfunding)

## Properties

### accountGetter

• `Optional` **accountGetter**: (`algod`: `AlgodClient`, `kmd?`: `KmdClient`) => `Promise`\<`default`\>

Optional override for how to get an account; this allows you to retrieve accounts from a known or cached list of accounts.

#### Type declaration

▸ (`algod`, `kmd?`): `Promise`\<`default`\>

##### Parameters

| Name    | Type          |
| :------ | :------------ |
| `algod` | `AlgodClient` |
| `kmd?`  | `KmdClient`   |

##### Returns

`Promise`\<`default`\>

#### Defined in

[src/types/testing.ts:62](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L62)

---

### algod

• `Optional` **algod**: `AlgodClient`

An optional algod client, if not specified then it will create one against `algodConfig` (if present) then environment variables defined network (if present) or default LocalNet.

#### Defined in

[src/types/testing.ts:54](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L54)

---

### algodConfig

• `Optional` **algodConfig**: [`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/)

Algod client configuration

#### Inherited from

Partial.algodConfig

#### Defined in

[src/types/network-client.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L16)

---

### indexer

• `Optional` **indexer**: `IndexerClient`

An optional indexer client, if not specified then it will create one against `indexerConfig` (if present) then environment variables defined network (if present) or default LocalNet.

#### Defined in

[src/types/testing.ts:56](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L56)

---

### indexerConfig

• `Optional` **indexerConfig**: [`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/)

Indexer client configuration

#### Inherited from

Partial.indexerConfig

#### Defined in

[src/types/network-client.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L18)

---

### kmd

• `Optional` **kmd**: `KmdClient`

An optional kmd client, if not specified then it will create one against `kmdConfig` (if present) then environment variables defined network (if present) or default LocalNet.

#### Defined in

[src/types/testing.ts:58](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L58)

---

### kmdConfig

• `Optional` **kmdConfig**: [`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/)

Kmd configuration

#### Inherited from

Partial.kmdConfig

#### Defined in

[src/types/network-client.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L20)

---

### testAccountFunding

• `Optional` **testAccountFunding**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The amount of funds to allocate to the default testing account, if not specified then it will get 10 ALGO.

#### Defined in

[src/types/testing.ts:60](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L60)
