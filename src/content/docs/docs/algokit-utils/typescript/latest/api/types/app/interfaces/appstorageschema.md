---
editUrl: false
next: false
prev: false
title: "AppStorageSchema"
---

Defined in: [src/types/app.ts:199](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L199)

Parameters representing the storage schema of an app.

## Properties

### extraPages?

> `optional` **extraPages?**: `number`

Defined in: [src/types/app.ts:209](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L209)

Any extra pages that are needed for the smart contract; if left blank then the right number of pages will be calculated based on the teal code size

***

### globalByteSlices

> **globalByteSlices**: `number`

Defined in: [src/types/app.ts:207](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L207)

Restricts number of byte slices in global state

***

### globalInts

> **globalInts**: `number`

Defined in: [src/types/app.ts:205](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L205)

Restricts number of ints in global state

***

### localByteSlices

> **localByteSlices**: `number`

Defined in: [src/types/app.ts:203](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L203)

Restricts number of byte slices in per-user local state

***

### localInts

> **localInts**: `number`

Defined in: [src/types/app.ts:201](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L201)

Restricts number of ints in per-user local state
