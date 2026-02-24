---
editUrl: false
next: false
prev: false
title: 'AppInformation'
---

Defined in: [src/app-manager.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L16)

Information about an app.

## Properties

### appAddress

> **appAddress**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [src/app-manager.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L20)

The escrow address that the app operates with.

---

### appId

> **appId**: `bigint`

Defined in: [src/app-manager.ts:18](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L18)

The ID of the app.

---

### approvalProgram

> **approvalProgram**: `Uint8Array`

Defined in: [src/app-manager.ts:24](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L24)

Approval program.

---

### clearStateProgram

> **clearStateProgram**: `Uint8Array`

Defined in: [src/app-manager.ts:28](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L28)

Clear state program.

---

### creator

> **creator**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [src/app-manager.ts:33](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L33)

The address that created this application. This is the address where the
parameters and global state for this application can be found.

---

### extraProgramPages?

> `optional` **extraProgramPages**: `number`

Defined in: [src/app-manager.ts:47](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L47)

Any extra pages that are needed for the smart contract.

---

### globalByteSlices

> **globalByteSlices**: `number`

Defined in: [src/app-manager.ts:45](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L45)

The number of allocated byte slices in global state.

---

### globalInts

> **globalInts**: `number`

Defined in: [src/app-manager.ts:43](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L43)

The number of allocated ints in global state.

---

### globalState

> **globalState**: [`AppState`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/appstate/)

Defined in: [src/app-manager.ts:37](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L37)

Current global state values.

---

### localByteSlices

> **localByteSlices**: `number`

Defined in: [src/app-manager.ts:41](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L41)

The number of allocated byte slices in per-user local state.

---

### localInts

> **localInts**: `number`

Defined in: [src/app-manager.ts:39](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L39)

The number of allocated ints in per-user local state.

---

### version?

> `optional` **version**: `number`

Defined in: [src/app-manager.ts:49](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L49)

The number of updates to the application programs
