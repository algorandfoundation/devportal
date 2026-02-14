---
title: TransactionLogger
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [testing](/docs/algokit-utils/typescript/latest/api/modules/testing/) / TransactionLogger



[testing](/docs/algokit-utils/typescript/latest/api/modules/testing/).TransactionLogger

Allows you to keep track of Algorand transaction IDs by wrapping an `Algodv2` in a proxy.
Useful for automated tests.

## Table of contents

### Constructors

- [constructor](/docs/algokit-utils/typescript/latest/api/classes/testingtransactionlogger/#constructor)

### Properties

- [\_latestLastValidRound](/docs/algokit-utils/typescript/latest/api/classes/testingtransactionlogger/#_latestlastvalidround)
- [\_sentTransactionIds](/docs/algokit-utils/typescript/latest/api/classes/testingtransactionlogger/#_senttransactionids)

### Accessors

- [sentTransactionIds](/docs/algokit-utils/typescript/latest/api/classes/testingtransactionlogger/#senttransactionids)

### Methods

- [\_pushTxn](/docs/algokit-utils/typescript/latest/api/classes/testingtransactionlogger/#_pushtxn)
- [capture](/docs/algokit-utils/typescript/latest/api/classes/testingtransactionlogger/#capture)
- [clear](/docs/algokit-utils/typescript/latest/api/classes/testingtransactionlogger/#clear)
- [logRawTransaction](/docs/algokit-utils/typescript/latest/api/classes/testingtransactionlogger/#lograwtransaction)
- [waitForIndexer](/docs/algokit-utils/typescript/latest/api/classes/testingtransactionlogger/#waitforindexer)

## Constructors

### constructor

• **new TransactionLogger**(): [`TransactionLogger`](/docs/algokit-utils/typescript/latest/api/classes/testingtransactionlogger/)

#### Returns

[`TransactionLogger`](/docs/algokit-utils/typescript/latest/api/classes/testingtransactionlogger/)

## Properties

### \_latestLastValidRound

• `Private` `Optional` **\_latestLastValidRound**: `bigint`

#### Defined in

[src/testing/transaction-logger.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L14)

___

### \_sentTransactionIds

• `Private` **\_sentTransactionIds**: `string`[] = `[]`

#### Defined in

[src/testing/transaction-logger.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L13)

## Accessors

### sentTransactionIds

• `get` **sentTransactionIds**(): readonly `string`[]

The list of transaction IDs that has been logged thus far.

#### Returns

readonly `string`[]

#### Defined in

[src/testing/transaction-logger.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L27)

## Methods

### \_pushTxn

▸ **_pushTxn**(`stxn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stxn` | `Uint8Array` |

#### Returns

`void`

#### Defined in

[src/testing/transaction-logger.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L16)

___

### capture

▸ **capture**(`algod`): `AlgodClient`

Return a proxy that wraps the given Algodv2 with this transaction logger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algod` | `AlgodClient` | The `Algodv2` to wrap |

#### Returns

`AlgodClient`

The wrapped `Algodv2`, any transactions sent using this algod instance will be logged by this transaction logger

#### Defined in

[src/testing/transaction-logger.ts:54](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L54)

___

### clear

▸ **clear**(): `void`

Clear all logged IDs.

#### Returns

`void`

#### Defined in

[src/testing/transaction-logger.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L34)

___

### logRawTransaction

▸ **logRawTransaction**(`signedTransactions`): `void`

The method that captures raw transactions and stores the transaction IDs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedTransactions` | `Uint8Array` \| `Uint8Array`[] |

#### Returns

`void`

#### Defined in

[src/testing/transaction-logger.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L41)

___

### waitForIndexer

▸ **waitForIndexer**(`indexer`): `Promise`\<`void`\>

Wait until all logged transactions IDs appear in the given `Indexer`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexer` | `IndexerClient` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/testing/transaction-logger.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L59)