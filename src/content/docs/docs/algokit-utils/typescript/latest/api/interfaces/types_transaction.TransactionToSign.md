---
title: TransactionToSign
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/) / TransactionToSign

[types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/).TransactionToSign

Defines an unsigned transaction that will appear in a group of transactions along with its signing information

## Table of contents

### Properties

- [signer](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.TransactionToSign/#signer)
- [transaction](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.TransactionToSign/#transaction)

## Properties

### signer

• **signer**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

The account to use to sign the transaction, either an account (with private key loaded) or a logic signature account

#### Defined in

[src/types/transaction.ts:115](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L115)

---

### transaction

• **transaction**: `Transaction`

The unsigned transaction to sign and send

#### Defined in

[src/types/transaction.ts:113](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L113)
