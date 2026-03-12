---
editUrl: false
next: false
prev: false
title: "AppCallTransactionFields"
---

> **AppCallTransactionFields** = `object`

Defined in: [packages/transact/src/transactions/app-call.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L23)

Represents an app call transaction that interacts with Algorand Smart Contracts.

App call transactions are used to create, update, delete, opt-in to,
close out of, or clear state from Algorand apps (smart contracts).

## Properties

### accessReferences?

> `optional` **accessReferences**: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/resourcereference/)[]

Defined in: [packages/transact/src/transactions/app-call.ts:114](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L114)

Resources accessed by the application

***

### accountReferences?

> `optional` **accountReferences**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)[]

Defined in: [packages/transact/src/transactions/app-call.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L90)

List of accounts in addition to the sender that may be accessed
from the app's approval program and clear state program.

***

### appId

> **appId**: `bigint`

Defined in: [packages/transact/src/transactions/app-call.ts:29](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L29)

ID of the app being called.

Set this to 0 to indicate an app creation call.

***

### appReferences?

> `optional` **appReferences**: `bigint`[]

Defined in: [packages/transact/src/transactions/app-call.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L96)

List of apps in addition to the current app that may be called
from the app's approval program and clear state program.

***

### approvalProgram?

> `optional` **approvalProgram**: `Uint8Array`

Defined in: [packages/transact/src/transactions/app-call.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L43)

Logic executed for every app call transaction, except when
on-completion is set to "clear".

Approval programs may reject the transaction.
Only required for app creation and update transactions.

***

### args?

> `optional` **args**: `Uint8Array`[]

Defined in: [packages/transact/src/transactions/app-call.ts:84](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L84)

Transaction specific arguments available in the app's
approval program and clear state program.

***

### assetReferences?

> `optional` **assetReferences**: `bigint`[]

Defined in: [packages/transact/src/transactions/app-call.ts:104](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L104)

Lists the assets whose parameters may be accessed by this app's
approval program and clear state program.

The access is read-only.

***

### boxReferences?

> `optional` **boxReferences**: [`BoxReference`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/boxreference/)[]

Defined in: [packages/transact/src/transactions/app-call.ts:109](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L109)

The boxes that should be made available for the runtime of the program.

***

### clearStateProgram?

> `optional` **clearStateProgram**: `Uint8Array`

Defined in: [packages/transact/src/transactions/app-call.ts:51](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L51)

Logic executed for app call transactions with on-completion set to "clear".

Clear state programs cannot reject the transaction.
Only required for app creation and update transactions.

***

### extraProgramPages?

> `optional` **extraProgramPages**: `number`

Defined in: [packages/transact/src/transactions/app-call.ts:78](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L78)

Number of additional pages allocated to the app's approval
and clear state programs.

Each extra program page is 2048 bytes. The sum of approval program
and clear state program may not exceed 2048*(1+extra_program_pages) bytes.
Currently, the maximum value is 3.
This cannot be changed after creation.

***

### globalStateSchema?

> `optional` **globalStateSchema**: [`StateSchema`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/stateschema/)

Defined in: [packages/transact/src/transactions/app-call.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L59)

Holds the maximum number of global state values.

Only required for app creation transactions.
This cannot be changed after creation.

***

### localStateSchema?

> `optional` **localStateSchema**: [`StateSchema`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/stateschema/)

Defined in: [packages/transact/src/transactions/app-call.ts:67](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L67)

Holds the maximum number of local state values.

Only required for app creation transactions.
This cannot be changed after creation.

***

### onComplete

> **onComplete**: [`OnApplicationComplete`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/enumerations/onapplicationcomplete/)

Defined in: [packages/transact/src/transactions/app-call.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L34)

Defines what additional actions occur with the transaction.

***

### rejectVersion?

> `optional` **rejectVersion**: `number`

Defined in: [packages/transact/src/transactions/app-call.ts:119](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/app-call.ts#L119)

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.
