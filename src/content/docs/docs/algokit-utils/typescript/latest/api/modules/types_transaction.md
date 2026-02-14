---
title: types/transaction
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / types/transaction



## Table of contents

### Interfaces

- [AdditionalAtomicTransactionComposerContext](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionadditionalatomictransactioncomposercontext/)
- [AtomicTransactionComposerToSend](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionatomictransactioncomposertosend/)
- [ConfirmedTransactionResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresult/)
- [ConfirmedTransactionResults](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresults/)
- [SendAtomicTransactionComposerResults](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendatomictransactioncomposerresults/)
- [SendParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendparams/)
- [SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/)
- [SendTransactionResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/)
- [SendTransactionResults](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/)
- [TransactionGroupToSend](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactiontransactiongrouptosend/)
- [TransactionToSign](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactiontransactiontosign/)

### Type Aliases

- [Arc2TransactionNote](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#arc2transactionnote)
- [SendSingleTransactionResult](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendsingletransactionresult)
- [SendTransactionFrom](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)
- [TransactionNote](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#transactionnote)
- [TransactionNoteData](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#transactionnotedata)

## Type Aliases

### Arc2TransactionNote

Ƭ **Arc2TransactionNote**: \{ `dAppName`: `string` ; `data`: `string` ; `format`: ``"m"`` \| ``"b"`` \| ``"u"``  } \| \{ `dAppName`: `string` ; `data`: [`TransactionNoteData`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#transactionnotedata) ; `format`: ``"j"``  }

ARC-0002 compatible transaction note components https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md

#### Defined in

[src/types/transaction.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L16)

___

### SendSingleTransactionResult

Ƭ **SendSingleTransactionResult**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendatomictransactioncomposerresults/) & [`ConfirmedTransactionResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresult/)\>

Result from sending a single transaction.

#### Defined in

[src/types/transaction.ts:50](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L50)

___

### SendTransactionFrom

Ƭ **SendTransactionFrom**: `Account` \| [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/) \| `LogicSigAccount` \| [`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountmultisigaccount/) \| [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/)

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

Ƭ **TransactionNote**: `Uint8Array` \| [`TransactionNoteData`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#transactionnotedata) \| [`Arc2TransactionNote`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#arc2transactionnote)

#### Defined in

[src/types/transaction.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L12)

___

### TransactionNoteData

Ƭ **TransactionNoteData**: `string` \| ``null`` \| `undefined` \| `number` \| `any`[] \| `Record`\<`string`, `any`\>

#### Defined in

[src/types/transaction.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L14)