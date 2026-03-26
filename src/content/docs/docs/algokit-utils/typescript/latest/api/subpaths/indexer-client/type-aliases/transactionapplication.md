---
editUrl: false
next: false
prev: false
title: 'TransactionApplication'
---

> **TransactionApplication** = `object`

Defined in: [packages/indexer_client/src/models/transaction-application.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L28)

Fields for application transactions.

Definition:
data/transactions/application.go : ApplicationCallTxnFields

## Properties

### access?

> `optional` **access**: [`ResourceRef`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/resourceref/)[]

Defined in: [packages/indexer_client/src/models/transaction-application.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L43)

\[al\] Access unifies `accounts`, `foreign-apps`, `foreign-assets`, and `box-references` under a single list. If access is non-empty, these lists must be empty. If access is empty, those lists may be non-empty.

---

### accounts?

> `optional` **accounts**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)[]

Defined in: [packages/indexer_client/src/models/transaction-application.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L48)

\[apat\] List of accounts in addition to the sender that may be accessed from the application's approval-program and clear-state-program.

---

### applicationArgs?

> `optional` **applicationArgs**: `Uint8Array`[]

Defined in: [packages/indexer_client/src/models/transaction-application.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L38)

\[apaa\] transaction specific arguments accessed from the application's approval-program and clear-state-program.

---

### applicationId

> **applicationId**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction-application.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L32)

\[apid\] ID of the application being configured or empty if creating.

---

### approvalProgram?

> `optional` **approvalProgram**: `Uint8Array`

Defined in: [packages/indexer_client/src/models/transaction-application.ts:70](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L70)

\[apap\] Logic executed for every application transaction, except when on-completion is set to "clear". It can read and write global state for the application, as well as account-specific local state. Approval programs may reject the transaction.

---

### boxReferences?

> `optional` **boxReferences**: [`BoxReference`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/boxreference/)[]

Defined in: [packages/indexer_client/src/models/transaction-application.ts:53](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L53)

\[apbx\] the boxes that can be accessed by this transaction (and others in the same group).

---

### clearStateProgram?

> `optional` **clearStateProgram**: `Uint8Array`

Defined in: [packages/indexer_client/src/models/transaction-application.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L75)

\[apsu\] Logic executed for application transactions with on-completion set to "clear". It can read and write global state for the application, as well as account-specific local state. Clear state programs cannot reject the transaction.

---

### extraProgramPages?

> `optional` **extraProgramPages**: `number`

Defined in: [packages/indexer_client/src/models/transaction-application.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L80)

\[epp\] specifies the additional app program len requested in pages.

---

### foreignApps?

> `optional` **foreignApps**: `bigint`[]

Defined in: [packages/indexer_client/src/models/transaction-application.ts:58](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L58)

\[apfa\] Lists the applications in addition to the application-id whose global states may be accessed by this application's approval-program and clear-state-program. The access is read-only.

---

### foreignAssets?

> `optional` **foreignAssets**: `bigint`[]

Defined in: [packages/indexer_client/src/models/transaction-application.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L63)

\[apas\] lists the assets whose parameters may be accessed by this application's ApprovalProgram and ClearStateProgram. The access is read-only.

---

### globalStateSchema?

> `optional` **globalStateSchema**: [`StateSchema`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/stateschema/)

Defined in: [packages/indexer_client/src/models/transaction-application.ts:65](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L65)

---

### localStateSchema?

> `optional` **localStateSchema**: [`StateSchema`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/stateschema/)

Defined in: [packages/indexer_client/src/models/transaction-application.ts:64](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L64)

---

### onCompletion

> **onCompletion**: [`OnCompletion`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/oncompletion/)

Defined in: [packages/indexer_client/src/models/transaction-application.ts:33](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L33)

---

### rejectVersion?

> `optional` **rejectVersion**: `number`

Defined in: [packages/indexer_client/src/models/transaction-application.ts:85](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-application.ts#L85)

\[aprv\] the lowest application version for which this transaction should immediately fail. 0 indicates that no version check should be performed.
