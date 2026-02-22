---
editUrl: false
next: false
prev: false
title: "BuiltTransactions"
---

Defined in: [src/composer.ts:214](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L214)

Set of transactions built by `TransactionComposer`.

## Properties

### methodCalls

> **methodCalls**: `Map`\<`number`, [`ABIMethod`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abimethod/)\>

Defined in: [src/composer.ts:218](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L218)

Any `ABIMethod` objects associated with any of the transactions in a map keyed by transaction index.

***

### signers

> **signers**: `Map`\<`number`, [`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)\>

Defined in: [src/composer.ts:220](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L220)

Any `TransactionSigner` objects associated with any of the transactions in a map keyed by transaction index.

***

### transactions

> **transactions**: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]

Defined in: [src/composer.ts:216](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L216)

The built transactions
