---
title: AlgorandTestAutomationContext
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/) / AlgorandTestAutomationContext



[types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/).AlgorandTestAutomationContext

Test automation context.

## Table of contents

### Properties

- [algod](/docs/algokit-utils/typescript/latest/api/interfaces/types_testingalgorandtestautomationcontext/#algod)
- [algorand](/docs/algokit-utils/typescript/latest/api/interfaces/types_testingalgorandtestautomationcontext/#algorand)
- [generateAccount](/docs/algokit-utils/typescript/latest/api/interfaces/types_testingalgorandtestautomationcontext/#generateaccount)
- [indexer](/docs/algokit-utils/typescript/latest/api/interfaces/types_testingalgorandtestautomationcontext/#indexer)
- [kmd](/docs/algokit-utils/typescript/latest/api/interfaces/types_testingalgorandtestautomationcontext/#kmd)
- [testAccount](/docs/algokit-utils/typescript/latest/api/interfaces/types_testingalgorandtestautomationcontext/#testaccount)
- [transactionLogger](/docs/algokit-utils/typescript/latest/api/interfaces/types_testingalgorandtestautomationcontext/#transactionlogger)
- [waitForIndexer](/docs/algokit-utils/typescript/latest/api/interfaces/types_testingalgorandtestautomationcontext/#waitforindexer)
- [waitForIndexerTransaction](/docs/algokit-utils/typescript/latest/api/interfaces/types_testingalgorandtestautomationcontext/#waitforindexertransaction)

## Properties

### algod

• **algod**: `AlgodClient`

Algod client instance that will log transactions in `transactionLogger`

#### Defined in

[src/types/testing.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L22)

___

### algorand

• **algorand**: [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_clientalgorandclient/)

An AlgorandClient instance loaded with the current context, including testAccount and any generated accounts loaded as signers

#### Defined in

[src/types/testing.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L20)

___

### generateAccount

• **generateAccount**: (`params`: [`GetTestAccountParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testinggettestaccountparams/)) => `Promise`\<`Address` & `default` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/)\>

Generate and fund an additional ephemerally created account

#### Type declaration

▸ (`params`): `Promise`\<`Address` & `default` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetTestAccountParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testinggettestaccountparams/) |

##### Returns

`Promise`\<`Address` & `default` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/)\>

#### Defined in

[src/types/testing.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L32)

___

### indexer

• **indexer**: `IndexerClient`

Indexer client instance

#### Defined in

[src/types/testing.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L24)

___

### kmd

• **kmd**: `KmdClient`

KMD client instance

#### Defined in

[src/types/testing.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L26)

___

### testAccount

• **testAccount**: `Address` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/) & `default`

Default, funded test account that is ephemerally created

#### Defined in

[src/types/testing.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L30)

___

### transactionLogger

• **transactionLogger**: [`TransactionLogger`](/docs/algokit-utils/typescript/latest/api/classes/testingtransactionlogger/)

Transaction logger that will log transaction IDs for all transactions issued by `algod`

#### Defined in

[src/types/testing.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L28)

___

### waitForIndexer

• **waitForIndexer**: () => `Promise`\<`void`\>

Wait for the indexer to catch up with all transactions logged by `transactionLogger`

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/testing.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L34)

___

### waitForIndexerTransaction

• **waitForIndexerTransaction**: (`transactionId`: `string`) => `Promise`\<`TransactionResponse`\>

Wait for the indexer to catch up with the given transaction ID

#### Type declaration

▸ (`transactionId`): `Promise`\<`TransactionResponse`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `transactionId` | `string` |

##### Returns

`Promise`\<`TransactionResponse`\>

#### Defined in

[src/types/testing.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L36)