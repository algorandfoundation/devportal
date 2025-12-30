---
title: TransactionLogger
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [testing](/reference/algokit-utils-ts/api/modules/testing/) / TransactionLogger

[testing](/reference/algokit-utils-ts/api/modules/testing/).TransactionLogger

Allows you to keep track of Algorand transaction IDs by wrapping an `Algodv2` in a proxy.
Useful for automated tests.

## Table of contents

### Constructors

- [constructor](/reference/algokit-utils-ts/api/classes/testingtransactionlogger/#constructor)

### Properties

- [\_latestLastValidRound](/reference/algokit-utils-ts/api/classes/testingtransactionlogger/#_latestlastvalidround)
- [\_sentTransactionIds](/reference/algokit-utils-ts/api/classes/testingtransactionlogger/#_senttransactionids)

### Accessors

- [sentTransactionIds](/reference/algokit-utils-ts/api/classes/testingtransactionlogger/#senttransactionids)

### Methods

- [\_pushTxn](/reference/algokit-utils-ts/api/classes/testingtransactionlogger/#_pushtxn)
- [capture](/reference/algokit-utils-ts/api/classes/testingtransactionlogger/#capture)
- [clear](/reference/algokit-utils-ts/api/classes/testingtransactionlogger/#clear)
- [logRawTransaction](/reference/algokit-utils-ts/api/classes/testingtransactionlogger/#lograwtransaction)
- [waitForIndexer](/reference/algokit-utils-ts/api/classes/testingtransactionlogger/#waitforindexer)

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

---

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

▸ **\_pushTxn**(`stxn`): `void`

#### Parameters

| Name   | Type         |
| :----- | :----------- |
| `stxn` | `Uint8Array` |

#### Returns

`void`

#### Defined in

[src/testing/transaction-logger.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L16)

---

### capture

▸ **capture**(`algod`): `AlgodClient`

Return a proxy that wraps the given Algodv2 with this transaction logger.

#### Parameters

| Name    | Type          | Description           |
| :------ | :------------ | :-------------------- |
| `algod` | `AlgodClient` | The `Algodv2` to wrap |

#### Returns

`AlgodClient`

The wrapped `Algodv2`, any transactions sent using this algod instance will be logged by this transaction logger

#### Defined in

[src/testing/transaction-logger.ts:54](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L54)

---

### clear

▸ **clear**(): `void`

Clear all logged IDs.

#### Returns

`void`

#### Defined in

[src/testing/transaction-logger.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L34)

---

### logRawTransaction

▸ **logRawTransaction**(`signedTransactions`): `void`

The method that captures raw transactions and stores the transaction IDs.

#### Parameters

| Name                 | Type                           |
| :------------------- | :----------------------------- |
| `signedTransactions` | `Uint8Array` \| `Uint8Array`[] |

#### Returns

`void`

#### Defined in

[src/testing/transaction-logger.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L41)

---

### waitForIndexer

▸ **waitForIndexer**(`indexer`): `Promise`\<`void`\>

Wait until all logged transactions IDs appear in the given `Indexer`.

#### Parameters

| Name      | Type            |
| :-------- | :-------------- |
| `indexer` | `IndexerClient` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/testing/transaction-logger.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L59)
