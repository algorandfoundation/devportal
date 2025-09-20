---
title: TransactionLogger
slug: reference/algokit-utils-ts/api/classes/testingtransactionlogger
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [testing](/reference/algokit-utils-ts/api/modules/testing/) / TransactionLogger



[testing](/reference/algokit-utils-ts/api/modules/testing/).TransactionLogger

Allows you to keep track of Algorand transaction IDs by wrapping an `Algodv2` in a proxy.
Useful for automated tests.

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [\_latestLastValidRound](#_latestlastvalidround)
- [\_sentTransactionIds](#_senttransactionids)

### Accessors

- [sentTransactionIds](#senttransactionids)

### Methods

- [\_pushTxn](#_pushtxn)
- [capture](#capture)
- [clear](#clear)
- [logRawTransaction](#lograwtransaction)
- [waitForIndexer](#waitforindexer)

## Constructors

### constructor

• **new TransactionLogger**(): [`TransactionLogger`](/reference/algokit-utils-ts/api/classes/testingtransactionlogger/)

#### Returns

[`TransactionLogger`](/reference/algokit-utils-ts/api/classes/testingtransactionlogger/)

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