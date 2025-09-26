---
title: ProgramSourceInfo
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-arc56](/reference/algokit-utils-ts/api/modules/types_app_arc56/) / ProgramSourceInfo

[types/app-arc56](/reference/algokit-utils-ts/api/modules/types_app_arc56/).ProgramSourceInfo

## Table of contents

### Properties

- [pcOffsetMethod](types_app_arc56.ProgramSourceInfo.md#pcoffsetmethod)
- [sourceInfo](types_app_arc56.ProgramSourceInfo.md#sourceinfo)

## Properties

### pcOffsetMethod

• **pcOffsetMethod**: `"none"` \| `"cblocks"`

How the program counter offset is calculated

- none: The pc values in sourceInfo are not offset
- cblocks: The pc values in sourceInfo are offset by the PC of the first op following the last cblock at the top of the program

#### Defined in

[src/types/app-arc56.ts:521](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L521)

---

### sourceInfo

• **sourceInfo**: `SourceInfo`[]

The source information for the program

#### Defined in

[src/types/app-arc56.ts:516](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L516)
