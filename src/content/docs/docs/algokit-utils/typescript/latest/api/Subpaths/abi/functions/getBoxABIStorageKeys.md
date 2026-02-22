---
editUrl: false
next: false
prev: false
title: "getBoxABIStorageKeys"
---

> **getBoxABIStorageKeys**(`contract`): `Record`\<`string`, [`ABIStorageKey`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abistoragekey/)\>

Defined in: [packages/abi/src/arc56-contract.ts:449](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L449)

Get all box storage keys with parsed ABI types

## Parameters

### contract

[`Arc56Contract`](/algokit-utils-ts/api/subpaths/abi/type-aliases/arc56contract/)

The ARC-56 contract

## Returns

`Record`\<`string`, [`ABIStorageKey`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abistoragekey/)\>

A record of storage key names to ABIStorageKey objects
