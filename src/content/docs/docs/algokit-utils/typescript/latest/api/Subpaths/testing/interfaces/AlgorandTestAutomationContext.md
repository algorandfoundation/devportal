---
editUrl: false
next: false
prev: false
title: "AlgorandTestAutomationContext"
---

Defined in: [src/testing/types.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L21)

Test automation context.

## Properties

### algod

> **algod**: [`AlgodClient`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodclient/)

Defined in: [src/testing/types.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L25)

Algod client instance that will log transactions in `transactionLogger`

***

### algorand

> **algorand**: [`AlgorandClient`](/algokit-utils-ts/api/algokit-utils/classes/algorandclient/)

Defined in: [src/testing/types.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L23)

An AlgorandClient instance loaded with the current context, including testAccount and any generated accounts loaded as signers

***

### generateAccount()

> **generateAccount**: (`params`) => `Promise`\<[`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/) & `object`\>

Defined in: [src/testing/types.ts:35](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L35)

Generate and fund an additional ephemerally created account

#### Parameters

##### params

[`GetTestAccountParams`](/algokit-utils-ts/api/subpaths/testing/interfaces/gettestaccountparams/)

#### Returns

`Promise`\<[`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/) & `object`\>

***

### indexer

> **indexer**: [`IndexerClient`](/algokit-utils-ts/api/subpaths/indexer-client/classes/indexerclient/)

Defined in: [src/testing/types.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L27)

Indexer client instance

***

### kmd

> **kmd**: [`KmdClient`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdclient/)

Defined in: [src/testing/types.ts:29](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L29)

KMD client instance

***

### testAccount

> **testAccount**: [`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/) & `object`

Defined in: [src/testing/types.ts:33](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L33)

Default, funded test account that is ephemerally created

#### Type Declaration

##### addr

> **addr**: `Readonly`\<[`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)\>

##### lsigSigner

> **lsigSigner**: [`DelegatedLsigSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/delegatedlsigsigner/)

##### mxBytesSigner

> **mxBytesSigner**: [`MxBytesSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/mxbytessigner/)

##### programDataSigner

> **programDataSigner**: [`ProgramDataSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/programdatasigner/)

##### signer

> **signer**: [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)

***

### transactionLogger

> **transactionLogger**: [`TransactionLogger`](/algokit-utils-ts/api/subpaths/testing/classes/transactionlogger/)

Defined in: [src/testing/types.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L31)

Transaction logger that will log transaction IDs for all transactions issued by `algod`

***

### waitForIndexer()

> **waitForIndexer**: () => `Promise`\<`void`\>

Defined in: [src/testing/types.ts:37](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L37)

Wait for the indexer to catch up with all transactions logged by `transactionLogger`

#### Returns

`Promise`\<`void`\>

***

### waitForIndexerTransaction()

> **waitForIndexerTransaction**: (`transactionId`) => `Promise`\<[`TransactionResponse`](/algokit-utils-ts/api/subpaths/indexer-client/type-aliases/transactionresponse/)\>

Defined in: [src/testing/types.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L39)

Wait for the indexer to catch up with the given transaction ID

#### Parameters

##### transactionId

`string`

#### Returns

`Promise`\<[`TransactionResponse`](/algokit-utils-ts/api/subpaths/indexer-client/type-aliases/transactionresponse/)\>
