---
editUrl: false
next: false
prev: false
title: "BuiltTransactions"
---

Defined in: [src/types/composer.ts:542](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L542)

Set of transactions built by `TransactionComposer`.

## Properties

### methodCalls

> **methodCalls**: `Map`\<`number`, `ABIMethod`\>

Defined in: [src/types/composer.ts:546](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L546)

Any `ABIMethod` objects associated with any of the transactions in a map keyed by transaction index.

***

### signers

> **signers**: `Map`\<`number`, `TransactionSigner`\>

Defined in: [src/types/composer.ts:548](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L548)

Any `TransactionSigner` objects associated with any of the transactions in a map keyed by transaction index.

***

### transactions

> **transactions**: `Transaction`[]

Defined in: [src/types/composer.ts:544](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L544)

The built transactions
