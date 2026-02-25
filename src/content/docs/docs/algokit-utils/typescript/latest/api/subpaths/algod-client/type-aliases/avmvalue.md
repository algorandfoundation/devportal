---
editUrl: false
next: false
prev: false
title: 'AvmValue'
---

> **AvmValue** = `object`

Defined in: [packages/algod_client/src/models/avm-value.ts:7](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/avm-value.ts#L7)

Represents an AVM value.

## Properties

### bytes?

> `optional` **bytes**: `Uint8Array`

Defined in: [packages/algod_client/src/models/avm-value.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/avm-value.ts#L16)

bytes value.

---

### type

> **type**: `number`

Defined in: [packages/algod_client/src/models/avm-value.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/avm-value.ts#L11)

value type. Value `1` refers to **bytes**, value `2` refers to **uint64**

---

### uint?

> `optional` **uint**: `bigint`

Defined in: [packages/algod_client/src/models/avm-value.ts:21](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/avm-value.ts#L21)

uint value.
