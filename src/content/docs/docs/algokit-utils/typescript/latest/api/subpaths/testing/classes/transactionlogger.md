---
editUrl: false
next: false
prev: false
title: 'TransactionLogger'
---

Defined in: [src/testing/transaction-logger.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L11)

Allows you to keep track of Algorand transaction IDs by wrapping an `AlgodClient` in a proxy.
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

Defined in: [src/testing/transaction-logger.ts:26](https://github.com/larkiny/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L26)

The list of transaction IDs that has been logged thus far.

##### Returns

readonly `string`[]

## Methods

### capture()

> **capture**(`algod`): [`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

Defined in: [src/testing/transaction-logger.ts:53](https://github.com/larkiny/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L53)

Return a proxy that wraps the given AlgodClient with this transaction logger.

#### Parameters

##### algod

[`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

The `AlgodClient` to wrap

#### Returns

[`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

The wrapped `AlgodClient`, any transactions sent using this algod instance will be logged by this transaction logger

---

### clear()

> **clear**(): `void`

Defined in: [src/testing/transaction-logger.ts:33](https://github.com/larkiny/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L33)

Clear all logged IDs.

#### Returns

`void`

---

### logRawTransaction()

> **logRawTransaction**(`signedTransactions`): `void`

Defined in: [src/testing/transaction-logger.ts:40](https://github.com/larkiny/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L40)

The method that captures raw transactions and stores the transaction IDs.

#### Parameters

##### signedTransactions

`Uint8Array`\<`ArrayBufferLike`\> | `Uint8Array`\<`ArrayBufferLike`\>[]

#### Returns

`void`

---

### waitForIndexer()

> **waitForIndexer**(`indexer`): `Promise`\<`void`\>

Defined in: [src/testing/transaction-logger.ts:58](https://github.com/larkiny/algokit-utils-ts/blob/main/src/testing/transaction-logger.ts#L58)

Wait until all logged transactions IDs appear in the given `Indexer`.

#### Parameters

##### indexer

[`IndexerClient`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerclient/)

#### Returns

`Promise`\<`void`\>
