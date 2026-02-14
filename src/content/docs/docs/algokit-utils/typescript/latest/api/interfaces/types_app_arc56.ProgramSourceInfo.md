---
title: ProgramSourceInfo
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app-arc56](/docs/algokit-utils/typescript/latest/api/modules/types_app_arc56/) / ProgramSourceInfo



[types/app-arc56](/docs/algokit-utils/typescript/latest/api/modules/types_app_arc56/).ProgramSourceInfo

## Table of contents

### Properties

- [pcOffsetMethod](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56programsourceinfo/#pcoffsetmethod)
- [sourceInfo](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56programsourceinfo/#sourceinfo)

## Properties

### pcOffsetMethod

• **pcOffsetMethod**: ``"none"`` \| ``"cblocks"``

How the program counter offset is calculated
- none: The pc values in sourceInfo are not offset
- cblocks: The pc values in sourceInfo are offset by the PC of the first op following the last cblock at the top of the program

#### Defined in

[src/types/app-arc56.ts:521](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L521)

___

### sourceInfo

• **sourceInfo**: `SourceInfo`[]

The source information for the program

#### Defined in

[src/types/app-arc56.ts:516](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L516)