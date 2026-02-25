---
editUrl: false
next: false
prev: false
title: 'ABIStorageMap'
---

> **ABIStorageMap** = `object`

Defined in: [packages/abi/src/arc56-contract.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L20)

Describes a storage map with parsed ABI types

## Properties

### desc?

> `optional` **desc**: `string`

Defined in: [packages/abi/src/arc56-contract.ts:26](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L26)

Description of what the key-value pairs in this mapping hold

---

### keyType

> **keyType**: [`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/) \| [`AVMType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/avmtype/)

Defined in: [packages/abi/src/arc56-contract.ts:22](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L22)

The parsed type of the keys in the map (ABI type or AVM type)

---

### prefix?

> `optional` **prefix**: `string`

Defined in: [packages/abi/src/arc56-contract.ts:28](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L28)

The base64-encoded prefix of the map keys

---

### valueType

> **valueType**: [`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/) \| [`AVMType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/avmtype/)

Defined in: [packages/abi/src/arc56-contract.ts:24](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L24)

The parsed type of the values in the map (ABI type or AVM type)
