---
editUrl: false
next: false
prev: false
title: "StorageKey"
---

> **StorageKey** = `object`

Defined in: [packages/abi/src/arc56-contract.ts:263](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L263)

Describes a single key in app storage

## Properties

### desc?

> `optional` **desc**: `string`

Defined in: [packages/abi/src/arc56-contract.ts:265](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L265)

Description of what this storage key holds

***

### key

> **key**: `string`

Defined in: [packages/abi/src/arc56-contract.ts:272](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L272)

The bytes of the key encoded as base64

***

### keyType

> **keyType**: `ABITypeName` \| [`AVMType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/avmtype/) \| [`StructName`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/structname/)

Defined in: [packages/abi/src/arc56-contract.ts:267](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L267)

The type of the key

***

### valueType

> **valueType**: `ABITypeName` \| [`AVMType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/avmtype/) \| [`StructName`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/structname/)

Defined in: [packages/abi/src/arc56-contract.ts:270](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L270)

The type of the value
