---
editUrl: false
next: false
prev: false
title: "StorageMap"
---

> **StorageMap** = `object`

Defined in: [packages/abi/src/arc56-contract.ts:276](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L276)

Describes a mapping of key-value pairs in storage

## Properties

### desc?

> `optional` **desc**: `string`

Defined in: [packages/abi/src/arc56-contract.ts:278](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L278)

Description of what the key-value pairs in this mapping hold

***

### keyType

> **keyType**: `ABITypeName` \| [`AVMType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/avmtype/) \| [`StructName`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/structname/)

Defined in: [packages/abi/src/arc56-contract.ts:280](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L280)

The type of the keys in the map

***

### prefix?

> `optional` **prefix**: `string`

Defined in: [packages/abi/src/arc56-contract.ts:284](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L284)

The base64-encoded prefix of the map keys

***

### valueType

> **valueType**: `ABITypeName` \| [`AVMType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/avmtype/) \| [`StructName`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/structname/)

Defined in: [packages/abi/src/arc56-contract.ts:282](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L282)

The type of the values in the map
