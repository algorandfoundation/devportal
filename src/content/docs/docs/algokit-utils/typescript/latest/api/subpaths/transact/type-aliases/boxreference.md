---
editUrl: false
next: false
prev: false
title: "BoxReference"
---

> **BoxReference** = `object`

Defined in: [packages/transact/src/transactions/app-call.ts:186](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L186)

Box reference for app call transactions.

References a specific box that should be made available for the runtime
of the program.

## Properties

### appId

> **appId**: `bigint`

Defined in: [packages/transact/src/transactions/app-call.ts:191](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L191)

App ID that owns the box.
A value of 0 indicates the current app.

***

### name

> **name**: `Uint8Array`

Defined in: [packages/transact/src/transactions/app-call.ts:196](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L196)

Name of the box.
