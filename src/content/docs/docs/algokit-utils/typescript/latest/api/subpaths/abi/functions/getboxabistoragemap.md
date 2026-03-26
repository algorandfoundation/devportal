---
editUrl: false
next: false
prev: false
title: 'getBoxABIStorageMap'
---

> **getBoxABIStorageMap**(`contract`, `mapName`): [`ABIStorageMap`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistoragemap/)

Defined in: [packages/abi/src/arc56-contract.ts:494](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L494)

Get a specific box storage map with parsed ABI types

## Parameters

### contract

[`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/arc56contract/)

The ARC-56 contract

### mapName

`string`

The name of the storage map

## Returns

[`ABIStorageMap`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistoragemap/)

The ABIStorageMap with parsed types

## Throws

Error if the map is not found
