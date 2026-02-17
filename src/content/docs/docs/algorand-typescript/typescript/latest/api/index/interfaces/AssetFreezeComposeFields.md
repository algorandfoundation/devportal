---
title: AssetFreezeComposeFields
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/README/) / AssetFreezeComposeFields

Defined in: [itxn-compose.ts:19](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L19)

## Extends

- [`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/)

## Properties

### fee?

> `optional` **fee**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:833](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L833)

microalgos

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`fee`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:837](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L837)

round number

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`firstValid`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:841](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L841)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`firstValidTime`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#firstvalidtime)

---

### freezeAccount?

> `optional` **freezeAccount**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:865](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L865)

32 byte address of the account whose asset slot is being frozen or un-frozen

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`freezeAccount`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#freezeaccount)

---

### freezeAsset?

> `optional` **freezeAsset**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Asset/)

Defined in: [itxn.ts:861](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L861)

Asset ID being frozen or un-frozen

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`freezeAsset`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#freezeasset)

---

### frozen?

> `optional` **frozen**: `boolean`

Defined in: [itxn.ts:869](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L869)

The new frozen value

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`frozen`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#frozen)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:845](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L845)

round number

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`lastValid`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:853](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L853)

32 byte lease value

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`lease`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#lease)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:849](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L849)

Any data up to 1024 bytes

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`note`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#note)

---

### rekeyTo?

> `optional` **rekeyTo**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:857](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L857)

32 byte Sender's new AuthAddr

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`rekeyTo`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#rekeyto)

---

### sender?

> `optional` **sender**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:829](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L829)

32 byte address

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`sender`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#sender)

---

### type

> **type**: [`AssetFreeze`](/docs/algorand-typescript/typescript/latest/api/index/enumerations/TransactionType/#assetfreeze)

Defined in: [itxn-compose.ts:20](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L20)
