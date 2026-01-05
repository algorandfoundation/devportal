---
title: BuiltTransactions
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/composer](/reference/algokit-utils-ts/api/modules/types_composer/) / BuiltTransactions

[types/composer](/reference/algokit-utils-ts/api/modules/types_composer/).BuiltTransactions

Set of transactions built by `TransactionComposer`.

## Table of contents

### Properties

- [methodCalls](/reference/algokit-utils-ts/api/interfaces/types_composerbuilttransactions/#methodcalls)
- [signers](/reference/algokit-utils-ts/api/interfaces/types_composerbuilttransactions/#signers)
- [transactions](/reference/algokit-utils-ts/api/interfaces/types_composerbuilttransactions/#transactions)

## Properties

### methodCalls

• **methodCalls**: `Map`\<`number`, `ABIMethod`\>

Any `ABIMethod` objects associated with any of the transactions in a map keyed by transaction index.

#### Defined in

[src/types/composer.ts:541](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L541)

---

### signers

• **signers**: `Map`\<`number`, `TransactionSigner`\>

Any `TransactionSigner` objects associated with any of the transactions in a map keyed by transaction index.

#### Defined in

[src/types/composer.ts:543](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L543)

---

### transactions

• **transactions**: `Transaction`[]

The built transactions

#### Defined in

[src/types/composer.ts:539](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L539)
