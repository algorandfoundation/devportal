---
title: types/transaction
slug: reference/algokit-utils-ts/api/modules/types_transaction
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / types/transaction



## Table of contents

### Interfaces

- [AdditionalAtomicTransactionComposerContext](/reference/algokit-utils-ts/api/interfaces/types_transactionadditionalatomictransactioncomposercontext/)
- [AtomicTransactionComposerToSend](/reference/algokit-utils-ts/api/interfaces/types_transactionatomictransactioncomposertosend/)
- [ConfirmedTransactionResult](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult/)
- [ConfirmedTransactionResults](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresults/)
- [SendAtomicTransactionComposerResults](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/)
- [SendParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)
- [SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/)
- [SendTransactionResult](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)
- [SendTransactionResults](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/)
- [TransactionGroupToSend](/reference/algokit-utils-ts/api/interfaces/types_transactiontransactiongrouptosend/)
- [TransactionToSign](/reference/algokit-utils-ts/api/interfaces/types_transactiontransactiontosign/)

### Type Aliases

- [Arc2TransactionNote](#arc2transactionnote)
- [SendSingleTransactionResult](#sendsingletransactionresult)
- [SendTransactionFrom](#sendtransactionfrom)
- [TransactionNote](#transactionnote)
- [TransactionNoteData](#transactionnotedata)

## Type Aliases

### Arc2TransactionNote

Ƭ **Arc2TransactionNote**: \{ `dAppName`: `string` ; `data`: `string` ; `format`: ``"m"`` \| ``"b"`` \| ``"u"``  } \| \{ `dAppName`: `string` ; `data`: [`TransactionNoteData`](#transactionnotedata) ; `format`: ``"j"``  }

ARC-0002 compatible transaction note components https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md

#### Defined in

[src/types/transaction.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L16)

___

### SendSingleTransactionResult

Ƭ **SendSingleTransactionResult**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/) & [`ConfirmedTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult/)\>

Result from sending a single transaction.

#### Defined in

[src/types/transaction.ts:50](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L50)

___

### SendTransactionFrom

Ƭ **SendTransactionFrom**: `Account` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/) \| `LogicSigAccount` \| [`MultisigAccount`](/reference/algokit-utils-ts/api/classes/types_accountmultisigaccount/) \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/)

Core account abstraction when signing/sending transactions

This type is used across the entire AlgoKit Utils library and allows you to pass through
many types of accounts, including:
* `Account` - The in-built `algosdk.Account` type for mnemonic accounts
* `SigningAccount` - An AlgoKit Utils class that wraps Account to provide support for rekeyed accounts
* `LogicSigAccount` - The in-built `algosdk.LogicSigAccount` type for logic signatures
* `MultisigAccount` - An AlgoKit Utils class that wraps a multisig account and provides mechanisms to get a multisig account
* `TransactionSignerAccount` - An AlgoKit Utils class that wraps the in-built `algosdk.TransactionSigner` along with the sender address

#### Defined in

[src/types/transaction.ts:108](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L108)

___

### TransactionNote

Ƭ **TransactionNote**: `Uint8Array` \| [`TransactionNoteData`](#transactionnotedata) \| [`Arc2TransactionNote`](#arc2transactionnote)

#### Defined in

[src/types/transaction.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L12)

___

### TransactionNoteData

Ƭ **TransactionNoteData**: `string` \| ``null`` \| `undefined` \| `number` \| `any`[] \| `Record`\<`string`, `any`\>

#### Defined in

[src/types/transaction.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L14)