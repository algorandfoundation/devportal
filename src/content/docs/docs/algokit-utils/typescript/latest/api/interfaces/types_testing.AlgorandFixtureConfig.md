---
title: AlgorandFixtureConfig
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/) / AlgorandFixtureConfig

[types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/).AlgorandFixtureConfig

Configuration for creating an Algorand testing fixture.

## Hierarchy

- `Partial`\<[`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/interfaces/types_network_client.AlgoConfig/)\>

  ↳ **`AlgorandFixtureConfig`**

## Table of contents

### Properties

- [accountGetter](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixtureConfig/#accountgetter)
- [algod](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixtureConfig/#algod)
- [algodConfig](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixtureConfig/#algodconfig)
- [indexer](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixtureConfig/#indexer)
- [indexerConfig](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixtureConfig/#indexerconfig)
- [kmd](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixtureConfig/#kmd)
- [kmdConfig](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixtureConfig/#kmdconfig)
- [testAccountFunding](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixtureConfig/#testaccountfunding)

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

• `Optional` **algodConfig**: [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/interfaces/types_network_client.AlgoClientConfig/)

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

• `Optional` **indexerConfig**: [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/interfaces/types_network_client.AlgoClientConfig/)

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

• `Optional` **kmdConfig**: [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/interfaces/types_network_client.AlgoClientConfig/)

Kmd configuration

#### Inherited from

Partial.kmdConfig

#### Defined in

[src/types/network-client.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L20)

---

### testAccountFunding

• `Optional` **testAccountFunding**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amount.AlgoAmount/)

The amount of funds to allocate to the default testing account, if not specified then it will get 10 ALGO.

#### Defined in

[src/types/testing.ts:60](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L60)
