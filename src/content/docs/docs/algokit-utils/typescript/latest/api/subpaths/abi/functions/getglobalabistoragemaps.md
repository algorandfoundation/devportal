---
editUrl: false
next: false
prev: false
title: "getGlobalABIStorageMaps"
---

> **getGlobalABIStorageMaps**(`contract`): `Record`\<`string`, [`ABIStorageMap`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistoragemap/)\>

Defined in: [packages/abi/src/arc56-contract.ts:507](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L507)

Get all global storage maps with parsed ABI types

## Parameters

### contract

[`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/arc56contract/)

The ARC-56 contract

## Returns

`Record`\<`string`, [`ABIStorageMap`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistoragemap/)\>

A record of storage map names to ABIStorageMap objects
