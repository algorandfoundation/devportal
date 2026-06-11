---
editUrl: false
next: false
prev: false
title: 'OnApplicationComplete'
---

Defined in: [packages/transact/src/transactions/app-call.ts:127](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L127)

On-completion actions for application transactions.

These values define what additional actions occur with the transaction.

## Enumeration Members

### ClearState

> **ClearState**: `3`

Defined in: [packages/transact/src/transactions/app-call.ts:148](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L148)

ClearState is similar to CloseOut, but may never fail. This
allows users to reclaim their minimum balance from an app
they no longer wish to opt in to.

---

### CloseOut

> **CloseOut**: `2`

Defined in: [packages/transact/src/transactions/app-call.ts:142](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L142)

CloseOut indicates that an app transaction will deallocate
some local state for the app from the user's account.

---

### DeleteApplication

> **DeleteApplication**: `5`

Defined in: [packages/transact/src/transactions/app-call.ts:159](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L159)

DeleteApplication indicates that an app transaction will
delete the app parameters for the app from the creator's
balance record.

---

### NoOp

> **NoOp**: `0`

Defined in: [packages/transact/src/transactions/app-call.ts:132](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L132)

NoOp indicates that an app transaction will simply call its
approval program without any additional action.

---

### OptIn

> **OptIn**: `1`

Defined in: [packages/transact/src/transactions/app-call.ts:137](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L137)

OptIn indicates that an app transaction will allocate some
local state for the app in the sender's account.

---

### UpdateApplication

> **UpdateApplication**: `4`

Defined in: [packages/transact/src/transactions/app-call.ts:153](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L153)

UpdateApplication indicates that an app transaction will
update the approval program and clear state program for the app.
