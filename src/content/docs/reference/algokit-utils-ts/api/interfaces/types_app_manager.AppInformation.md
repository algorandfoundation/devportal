---
title: AppInformation
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-manager](/reference/algokit-utils-ts/api/modules/types_app_manager/) / AppInformation

[types/app-manager](/reference/algokit-utils-ts/api/modules/types_app_manager/).AppInformation

Information about an app.

## Table of contents

### Properties

- [appAddress](#appaddress)
- [appId](#appid)
- [approvalProgram](#approvalprogram)
- [clearStateProgram](#clearstateprogram)
- [creator](#creator)
- [extraProgramPages](#extraprogrampages)
- [globalByteSlices](#globalbyteslices)
- [globalInts](#globalints)
- [globalState](#globalstate)
- [localByteSlices](#localbyteslices)
- [localInts](#localints)

## Properties

### appAddress

• **appAddress**: `Address`

The escrow address that the app operates with.

#### Defined in

[src/types/app-manager.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L20)

---

### appId

• **appId**: `bigint`

The ID of the app.

#### Defined in

[src/types/app-manager.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L18)

---

### approvalProgram

• **approvalProgram**: `Uint8Array`

Approval program.

#### Defined in

[src/types/app-manager.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L24)

---

### clearStateProgram

• **clearStateProgram**: `Uint8Array`

Clear state program.

#### Defined in

[src/types/app-manager.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L28)

---

### creator

• **creator**: `Address`

The address that created this application. This is the address where the
parameters and global state for this application can be found.

#### Defined in

[src/types/app-manager.ts:33](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L33)

---

### extraProgramPages

• `Optional` **extraProgramPages**: `number`

Any extra pages that are needed for the smart contract.

#### Defined in

[src/types/app-manager.ts:47](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L47)

---

### globalByteSlices

• **globalByteSlices**: `number`

The number of allocated byte slices in global state.

#### Defined in

[src/types/app-manager.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L45)

---

### globalInts

• **globalInts**: `number`

The number of allocated ints in global state.

#### Defined in

[src/types/app-manager.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L43)

---

### globalState

• **globalState**: [`AppState`]()

Current global state values.

#### Defined in

[src/types/app-manager.ts:37](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L37)

---

### localByteSlices

• **localByteSlices**: `number`

The number of allocated byte slices in per-user local state.

#### Defined in

[src/types/app-manager.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L41)

---

### localInts

• **localInts**: `number`

The number of allocated ints in per-user local state.

#### Defined in

[src/types/app-manager.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L39)
