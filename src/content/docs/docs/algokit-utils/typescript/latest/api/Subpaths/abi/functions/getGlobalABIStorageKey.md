---
editUrl: false
next: false
prev: false
title: 'getGlobalABIStorageKey'
---

> **getGlobalABIStorageKey**(`contract`, `keyName`): [`ABIStorageKey`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistoragekey/)

Defined in: [packages/abi/src/arc56-contract.ts:380](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L380)

Get a specific global storage key with parsed ABI types

## Parameters

### contract

[`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/arc56contract/)

The ARC-56 contract

### keyName

`string`

The name of the storage key

## Returns

[`ABIStorageKey`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistoragekey/)

The ABIStorageKey with parsed types

## Throws

Error if the key is not found
