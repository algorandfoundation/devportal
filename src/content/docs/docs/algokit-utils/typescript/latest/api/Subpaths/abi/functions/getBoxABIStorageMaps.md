---
editUrl: false
next: false
prev: false
title: "getBoxABIStorageMaps"
---

> **getBoxABIStorageMaps**(`contract`): `Record`\<`string`, [`ABIStorageMap`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abistoragemap/)\>

Defined in: [packages/abi/src/arc56-contract.ts:533](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L533)

Get all box storage maps with parsed ABI types

## Parameters

### contract

[`Arc56Contract`](/algokit-utils-ts/api/subpaths/abi/type-aliases/arc56contract/)

The ARC-56 contract

## Returns

`Record`\<`string`, [`ABIStorageMap`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abistoragemap/)\>

A record of storage map names to ABIStorageMap objects
