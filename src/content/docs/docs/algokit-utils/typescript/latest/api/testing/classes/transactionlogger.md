---
editUrl: false
next: false
prev: false
title: "TransactionLogger"
---

Defined in: [src/testing/transaction-logger.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L12)

Allows you to keep track of Algorand transaction IDs by wrapping an `Algodv2` in a proxy.
Useful for automated tests.

## Constructors

### Constructor

> **new TransactionLogger**(): `TransactionLogger`

#### Returns

`TransactionLogger`

## Accessors

### sentTransactionIds

#### Get Signature

> **get** **sentTransactionIds**(): readonly `string`[]

Defined in: [src/testing/transaction-logger.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L27)

The list of transaction IDs that has been logged thus far.

##### Returns

readonly `string`[]

## Methods

### capture()

> **capture**(`algod`): `AlgodClient`

Defined in: [src/testing/transaction-logger.ts:54](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L54)

Return a proxy that wraps the given Algodv2 with this transaction logger.

#### Parameters

##### algod

`AlgodClient`

The `Algodv2` to wrap

#### Returns

`AlgodClient`

The wrapped `Algodv2`, any transactions sent using this algod instance will be logged by this transaction logger

***

### clear()

> **clear**(): `void`

Defined in: [src/testing/transaction-logger.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L34)

Clear all logged IDs.

#### Returns

`void`

***

### logRawTransaction()

> **logRawTransaction**(`signedTransactions`): `void`

Defined in: [src/testing/transaction-logger.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L41)

The method that captures raw transactions and stores the transaction IDs.

#### Parameters

##### signedTransactions

`Uint8Array`\<`ArrayBufferLike`\> \| `Uint8Array`\<`ArrayBufferLike`\>[]

#### Returns

`void`

***

### waitForIndexer()

> **waitForIndexer**(`indexer`): `Promise`\<`void`\>

Defined in: [src/testing/transaction-logger.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L59)

Wait until all logged transactions IDs appear in the given `Indexer`.

#### Parameters

##### indexer

`IndexerClient`

#### Returns

`Promise`\<`void`\>
