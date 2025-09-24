---
title: AlgorandTestAutomationContext
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/testing](/reference/algokit-utils-ts/api/modules/types_testing/) / AlgorandTestAutomationContext

[types/testing](/reference/algokit-utils-ts/api/modules/types_testing/).AlgorandTestAutomationContext

Test automation context.

## Table of contents

### Properties

- [algod](types_testing.AlgorandTestAutomationContext.md#algod)
- [algorand](types_testing.AlgorandTestAutomationContext.md#algorand)
- [generateAccount](types_testing.AlgorandTestAutomationContext.md#generateaccount)
- [indexer](types_testing.AlgorandTestAutomationContext.md#indexer)
- [kmd](types_testing.AlgorandTestAutomationContext.md#kmd)
- [testAccount](types_testing.AlgorandTestAutomationContext.md#testaccount)
- [transactionLogger](types_testing.AlgorandTestAutomationContext.md#transactionlogger)
- [waitForIndexer](types_testing.AlgorandTestAutomationContext.md#waitforindexer)
- [waitForIndexerTransaction](types_testing.AlgorandTestAutomationContext.md#waitforindexertransaction)

## Properties

### algod

• **algod**: `AlgodClient`

Algod client instance that will log transactions in `transactionLogger`

#### Defined in

[src/types/testing.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L22)

---

### algorand

• **algorand**: [`AlgorandClient`](/reference/algokit-utils-ts/api/classes/types_algorand_clientalgorandclient/)

An AlgorandClient instance loaded with the current context, including testAccount and any generated accounts loaded as signers

#### Defined in

[src/types/testing.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L20)

---

### generateAccount

• **generateAccount**: (`params`: [`GetTestAccountParams`](types_testing.GetTestAccountParams.md)) => `Promise`\<`Address` & `default` & [`TransactionSignerAccount`](types_account.TransactionSignerAccount.md)\>

Generate and fund an additional ephemerally created account

#### Type declaration

▸ (`params`): `Promise`\<`Address` & `default` & [`TransactionSignerAccount`](types_account.TransactionSignerAccount.md)\>

##### Parameters

| Name     | Type                                                            |
| :------- | :-------------------------------------------------------------- |
| `params` | [`GetTestAccountParams`](types_testing.GetTestAccountParams.md) |

##### Returns

`Promise`\<`Address` & `default` & [`TransactionSignerAccount`](types_account.TransactionSignerAccount.md)\>

#### Defined in

[src/types/testing.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L32)

---

### indexer

• **indexer**: `IndexerClient`

Indexer client instance

#### Defined in

[src/types/testing.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L24)

---

### kmd

• **kmd**: `KmdClient`

KMD client instance

#### Defined in

[src/types/testing.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L26)

---

### testAccount

• **testAccount**: `Address` & [`TransactionSignerAccount`](types_account.TransactionSignerAccount.md) & `default`

Default, funded test account that is ephemerally created

#### Defined in

[src/types/testing.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L30)

---

### transactionLogger

• **transactionLogger**: [`TransactionLogger`](/reference/algokit-utils-ts/api/classes/testingtransactionlogger/)

Transaction logger that will log transaction IDs for all transactions issued by `algod`

#### Defined in

[src/types/testing.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L28)

---

### waitForIndexer

• **waitForIndexer**: () => `Promise`\<`void`\>

Wait for the indexer to catch up with all transactions logged by `transactionLogger`

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/testing.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L34)

---

### waitForIndexerTransaction

• **waitForIndexerTransaction**: (`transactionId`: `string`) => `Promise`\<`TransactionResponse`\>

Wait for the indexer to catch up with the given transaction ID

#### Type declaration

▸ (`transactionId`): `Promise`\<`TransactionResponse`\>

##### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `transactionId` | `string` |

##### Returns

`Promise`\<`TransactionResponse`\>

#### Defined in

[src/types/testing.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L36)
