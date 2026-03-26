---
editUrl: false
next: false
prev: false
title: 'getGlobalABIStorageKeys'
---

> **getGlobalABIStorageKeys**(`contract`): `Record`\<`string`, [`ABIStorageKey`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistoragekey/)\>

Defined in: [packages/abi/src/arc56-contract.ts:423](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L423)

Get all global storage keys with parsed ABI types

## Parameters

### contract

[`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/arc56contract/)

The ARC-56 contract

## Returns

`Record`\<`string`, [`ABIStorageKey`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistoragekey/)\>

A record of storage key names to ABIStorageKey objects
