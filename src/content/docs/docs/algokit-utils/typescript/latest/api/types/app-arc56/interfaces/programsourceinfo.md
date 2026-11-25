---
editUrl: false
next: false
prev: false
title: "ProgramSourceInfo"
---

Defined in: [src/types/app-arc56.ts:514](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L514)

## Properties

### pcOffsetMethod

> **pcOffsetMethod**: `"none"` \| `"cblocks"`

Defined in: [src/types/app-arc56.ts:521](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L521)

How the program counter offset is calculated
- none: The pc values in sourceInfo are not offset
- cblocks: The pc values in sourceInfo are offset by the PC of the first op following the last cblock at the top of the program

***

### sourceInfo

> **sourceInfo**: `SourceInfo`[]

Defined in: [src/types/app-arc56.ts:516](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L516)

The source information for the program
