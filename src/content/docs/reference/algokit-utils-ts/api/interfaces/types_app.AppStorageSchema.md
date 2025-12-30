---
title: AppStorageSchema
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app](/reference/algokit-utils-ts/api/modules/types_app/) / AppStorageSchema

[types/app](/reference/algokit-utils-ts/api/modules/types_app/).AppStorageSchema

Parameters representing the storage schema of an app.

## Table of contents

### Properties

- [extraPages](/reference/algokit-utils-ts/api/interfaces/types_appappstorageschema/#extrapages)
- [globalByteSlices](/reference/algokit-utils-ts/api/interfaces/types_appappstorageschema/#globalbyteslices)
- [globalInts](/reference/algokit-utils-ts/api/interfaces/types_appappstorageschema/#globalints)
- [localByteSlices](/reference/algokit-utils-ts/api/interfaces/types_appappstorageschema/#localbyteslices)
- [localInts](/reference/algokit-utils-ts/api/interfaces/types_appappstorageschema/#localints)

## Properties

### extraPages

• `Optional` **extraPages**: `number`

Any extra pages that are needed for the smart contract; if left blank then the right number of pages will be calculated based on the teal code size

#### Defined in

[src/types/app.ts:209](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L209)

---

### globalByteSlices

• **globalByteSlices**: `number`

Restricts number of byte slices in global state

#### Defined in

[src/types/app.ts:207](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L207)

---

### globalInts

• **globalInts**: `number`

Restricts number of ints in global state

#### Defined in

[src/types/app.ts:205](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L205)

---

### localByteSlices

• **localByteSlices**: `number`

Restricts number of byte slices in per-user local state

#### Defined in

[src/types/app.ts:203](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L203)

---

### localInts

• **localInts**: `number`

Restricts number of ints in per-user local state

#### Defined in

[src/types/app.ts:201](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L201)
