---
editUrl: false
next: false
prev: false
title: "SignedTransaction"
---

> **SignedTransaction** = `object`

Defined in: [packages/transact/src/transactions/signed-transaction.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L9)

Represents a signed Algorand transaction

## Properties

### authAddress?

> `optional` **authAddress**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/signed-transaction.ts:33](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L33)

Optional auth address applicable if the transaction sender is a rekeyed account.

***

### lsig?

> `optional` **lsig**: [`LogicSigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/logicsigsignature/)

Defined in: [packages/transact/src/transactions/signed-transaction.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L28)

Optional logic signature for the transaction.

***

### msig?

> `optional` **msig**: [`MultisigSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/multisigsignature/)

Defined in: [packages/transact/src/transactions/signed-transaction.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L23)

Optional multisignature signature for the transaction.

***

### sig?

> `optional` **sig**: `Uint8Array`

Defined in: [packages/transact/src/transactions/signed-transaction.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L18)

Optional Ed25519 signature authorizing the transaction.

***

### txn

> **txn**: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)

Defined in: [packages/transact/src/transactions/signed-transaction.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L13)

The transaction that has been signed.
