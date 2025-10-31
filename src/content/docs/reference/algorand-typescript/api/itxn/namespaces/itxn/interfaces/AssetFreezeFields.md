---
title: AssetFreezeFields
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [itxn](docs/_md/itxn/README) / [itxn](/reference/algorand-typescript/api/itxn/namespaces/itxn/readme/) / AssetFreezeFields

Defined in: [itxn.ts:825](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L825)

## Extended by

- [`AssetFreezeComposeFields`](/reference/algorand-typescript/api/index/interfaces/assetfreezecomposefields/)
- [`AnyTransactionComposeFields`](/reference/algorand-typescript/api/index/interfaces/anytransactioncomposefields/)

## Properties

### fee?

> `optional` **fee**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:833](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L833)

microalgos

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:837](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L837)

round number

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:841](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L841)

UNIX timestamp of block before txn.FirstValid. Fails if negative

---

### freezeAccount?

> `optional` **freezeAccount**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:865](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L865)

32 byte address of the account whose asset slot is being frozen or un-frozen

---

### freezeAsset?

> `optional` **freezeAsset**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) \| [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [itxn.ts:861](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L861)

Asset ID being frozen or un-frozen

---

### frozen?

> `optional` **frozen**: `boolean`

Defined in: [itxn.ts:869](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L869)

The new frozen value

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:845](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L845)

round number

---

### lease?

> `optional` **lease**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:853](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L853)

32 byte lease value

---

### note?

> `optional` **note**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:849](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L849)

Any data up to 1024 bytes

---

### rekeyTo?

> `optional` **rekeyTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:857](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L857)

32 byte Sender's new AuthAddr

---

### sender?

> `optional` **sender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:829](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L829)

32 byte address
