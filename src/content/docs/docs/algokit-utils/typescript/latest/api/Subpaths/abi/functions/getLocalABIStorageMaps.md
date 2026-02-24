---
editUrl: false
next: false
prev: false
title: 'getLocalABIStorageMaps'
---

> **getLocalABIStorageMaps**(`contract`): `Record`\<`string`, [`ABIStorageMap`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistoragemap/)\>

Defined in: [packages/abi/src/arc56-contract.ts:520](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L520)

Get all local storage maps with parsed ABI types

## Parameters

### contract

[`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/arc56contract/)

The ARC-56 contract

## Returns

`Record`\<`string`, [`ABIStorageMap`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistoragemap/)\>

A record of storage map names to ABIStorageMap objects
