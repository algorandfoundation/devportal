---
title: BuiltTransactions
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/composer](/docs/algokit-utils/typescript/latest/api/modules/types_composer/) / BuiltTransactions

[types/composer](/docs/algokit-utils/typescript/latest/api/modules/types_composer/).BuiltTransactions

Set of transactions built by `TransactionComposer`.

## Table of contents

### Properties

- [methodCalls](/docs/algokit-utils/typescript/latest/api/interfaces/types_composer.BuiltTransactions/#methodcalls)
- [signers](/docs/algokit-utils/typescript/latest/api/interfaces/types_composer.BuiltTransactions/#signers)
- [transactions](/docs/algokit-utils/typescript/latest/api/interfaces/types_composer.BuiltTransactions/#transactions)

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
