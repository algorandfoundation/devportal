---
title: AssetFreezeComposeFields
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / AssetFreezeComposeFields

Defined in: [itxn-compose.ts:19](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L19)

## Extends

- [`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/)

## Properties

### fee?

> `optional` **fee**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:833](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L833)

microalgos

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`fee`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:837](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L837)

round number

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`firstValid`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:841](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L841)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`firstValidTime`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#firstvalidtime)

---

### freezeAccount?

> `optional` **freezeAccount**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:865](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L865)

32 byte address of the account whose asset slot is being frozen or un-frozen

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`freezeAccount`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#freezeaccount)

---

### freezeAsset?

> `optional` **freezeAsset**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) \| [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [itxn.ts:861](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L861)

Asset ID being frozen or un-frozen

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`freezeAsset`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#freezeasset)

---

### frozen?

> `optional` **frozen**: `boolean`

Defined in: [itxn.ts:869](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L869)

The new frozen value

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`frozen`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#frozen)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:845](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L845)

round number

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`lastValid`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:853](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L853)

32 byte lease value

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`lease`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#lease)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:849](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L849)

Any data up to 1024 bytes

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`note`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#note)

---

### rekeyTo?

> `optional` **rekeyTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:857](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L857)

32 byte Sender's new AuthAddr

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`rekeyTo`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#rekeyto)

---

### sender?

> `optional` **sender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:829](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L829)

32 byte address

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`sender`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#sender)

---

### type

> **type**: [`AssetFreeze`](/reference/algorand-typescript/api/index/enumerations/transactiontype/#assetfreeze)

Defined in: [itxn-compose.ts:20](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L20)
