---
editUrl: false
next: false
prev: false
title: "getGlobalABIStorageMap"
---

> **getGlobalABIStorageMap**(`contract`, `mapName`): [`ABIStorageMap`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abistoragemap/)

Defined in: [packages/abi/src/arc56-contract.ts:464](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L464)

Get a specific global storage map with parsed ABI types

## Parameters

### contract

[`Arc56Contract`](/algokit-utils-ts/api/subpaths/abi/type-aliases/arc56contract/)

The ARC-56 contract

### mapName

`string`

The name of the storage map

## Returns

[`ABIStorageMap`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abistoragemap/)

The ABIStorageMap with parsed types

## Throws

Error if the map is not found
