---
editUrl: false
next: false
prev: false
title: "ABIStorageKey"
---

> **ABIStorageKey** = `object`

Defined in: [packages/abi/src/arc56-contract.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L8)

Describes a single key in app storage with parsed ABI types

## Properties

### desc?

> `optional` **desc**: `string`

Defined in: [packages/abi/src/arc56-contract.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L16)

Description of what this storage key holds

***

### key

> **key**: `string`

Defined in: [packages/abi/src/arc56-contract.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L10)

The bytes of the key encoded as base64

***

### keyType

> **keyType**: [`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/) \| [`AVMType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/avmtype/)

Defined in: [packages/abi/src/arc56-contract.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L12)

The parsed type of the key (ABI type or AVM type)

***

### valueType

> **valueType**: [`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/) \| [`AVMType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/avmtype/)

Defined in: [packages/abi/src/arc56-contract.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L14)

The parsed type of the value (ABI type or AVM type)
