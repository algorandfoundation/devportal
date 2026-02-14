---
title: AppStorageSchema
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/) / AppStorageSchema



[types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/).AppStorageSchema

Parameters representing the storage schema of an app.

## Table of contents

### Properties

- [extraPages](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappstorageschema/#extrapages)
- [globalByteSlices](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappstorageschema/#globalbyteslices)
- [globalInts](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappstorageschema/#globalints)
- [localByteSlices](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappstorageschema/#localbyteslices)
- [localInts](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappstorageschema/#localints)

## Properties

### extraPages

• `Optional` **extraPages**: `number`

Any extra pages that are needed for the smart contract; if left blank then the right number of pages will be calculated based on the teal code size

#### Defined in

[src/types/app.ts:209](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L209)

___

### globalByteSlices

• **globalByteSlices**: `number`

Restricts number of byte slices in global state

#### Defined in

[src/types/app.ts:207](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L207)

___

### globalInts

• **globalInts**: `number`

Restricts number of ints in global state

#### Defined in

[src/types/app.ts:205](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L205)

___

### localByteSlices

• **localByteSlices**: `number`

Restricts number of byte slices in per-user local state

#### Defined in

[src/types/app.ts:203](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L203)

___

### localInts

• **localInts**: `number`

Restricts number of ints in per-user local state

#### Defined in

[src/types/app.ts:201](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L201)