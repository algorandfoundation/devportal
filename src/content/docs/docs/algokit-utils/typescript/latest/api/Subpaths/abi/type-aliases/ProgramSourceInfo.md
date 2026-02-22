---
editUrl: false
next: false
prev: false
title: "ProgramSourceInfo"
---

> **ProgramSourceInfo** = `object`

Defined in: [packages/abi/src/arc56-contract.ts:298](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L298)

## Properties

### pcOffsetMethod

> **pcOffsetMethod**: `"none"` \| `"cblocks"`

Defined in: [packages/abi/src/arc56-contract.ts:305](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L305)

How the program counter offset is calculated
- none: The pc values in sourceInfo are not offset
- cblocks: The pc values in sourceInfo are offset by the PC of the first op following the last cblock at the top of the program

***

### sourceInfo

> **sourceInfo**: `SourceInfo`[]

Defined in: [packages/abi/src/arc56-contract.ts:300](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/arc56-contract.ts#L300)

The source information for the program
