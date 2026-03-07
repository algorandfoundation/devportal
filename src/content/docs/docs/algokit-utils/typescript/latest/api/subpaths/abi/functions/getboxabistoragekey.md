---
editUrl: false
next: false
prev: false
title: "getBoxABIStorageKey"
---

> **getBoxABIStorageKey**(`contract`, `keyName`): [`ABIStorageKey`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistoragekey/)

Defined in: [packages/abi/src/arc56-contract.ts:410](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L410)

Get a specific box storage key with parsed ABI types

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
