---
title: AlgorandTestAutomationContext
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/) / AlgorandTestAutomationContext

[types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/).AlgorandTestAutomationContext

Test automation context.

## Table of contents

### Properties

- [algod](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandTestAutomationContext/#algod)
- [algorand](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandTestAutomationContext/#algorand)
- [generateAccount](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandTestAutomationContext/#generateaccount)
- [indexer](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandTestAutomationContext/#indexer)
- [kmd](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandTestAutomationContext/#kmd)
- [testAccount](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandTestAutomationContext/#testaccount)
- [transactionLogger](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandTestAutomationContext/#transactionlogger)
- [waitForIndexer](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandTestAutomationContext/#waitforindexer)
- [waitForIndexerTransaction](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandTestAutomationContext/#waitforindexertransaction)

## Properties

### algod

• **algod**: `AlgodClient`

Algod client instance that will log transactions in `transactionLogger`

#### Defined in

[src/types/testing.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L22)

---

### algorand

• **algorand**: [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

An AlgorandClient instance loaded with the current context, including testAccount and any generated accounts loaded as signers

#### Defined in

[src/types/testing.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L20)

---

### generateAccount

• **generateAccount**: (`params`: [`GetTestAccountParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.GetTestAccountParams/)) => `Promise`\<`Address` & `default` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_account.TransactionSignerAccount/)\>

Generate and fund an additional ephemerally created account

#### Type declaration

▸ (`params`): `Promise`\<`Address` & `default` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_account.TransactionSignerAccount/)\>

##### Parameters

| Name     | Type                                                                                                               |
| :------- | :----------------------------------------------------------------------------------------------------------------- |
| `params` | [`GetTestAccountParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.GetTestAccountParams/) |

##### Returns

`Promise`\<`Address` & `default` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_account.TransactionSignerAccount/)\>

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

• **testAccount**: `Address` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_account.TransactionSignerAccount/) & `default`

Default, funded test account that is ephemerally created

#### Defined in

[src/types/testing.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L30)

---

### transactionLogger

• **transactionLogger**: [`TransactionLogger`](/docs/algokit-utils/typescript/latest/api/classes/testing.TransactionLogger/)

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
