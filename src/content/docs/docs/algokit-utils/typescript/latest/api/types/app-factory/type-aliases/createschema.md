---
editUrl: false
next: false
prev: false
title: "CreateSchema"
---

> **CreateSchema** = `object`

Defined in: [src/types/app-factory.ts:107](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L107)

Specifies a schema used for creating an app

## Properties

### extraProgramPages?

> `optional` **extraProgramPages?**: `number`

Defined in: [src/types/app-factory.ts:122](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L122)

Number of extra pages required for the programs.
Defaults to the number needed for the programs in this call if not specified.
This is immutable once the app is created.

***

### schema?

> `optional` **schema?**: `object`

Defined in: [src/types/app-factory.ts:109](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L109)

The state schema for the app. This is immutable once the app is created. By default uses the ARC32/ARC-56 spec.

#### globalByteSlices

> **globalByteSlices**: `number`

The number of byte slices saved in global state.

#### globalInts

> **globalInts**: `number`

The number of integers saved in global state.

#### localByteSlices

> **localByteSlices**: `number`

The number of byte slices saved in local state.

#### localInts

> **localInts**: `number`

The number of integers saved in local state.
