---
editUrl: false
next: false
prev: false
title: 'TransactionComposerParams'
---

> **TransactionComposerParams** = `object`

Defined in: [src/composer.ts:189](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L189)

Parameters to create an `TransactionComposer`.

## Properties

### algod

> **algod**: [`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

Defined in: [src/composer.ts:191](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L191)

The algod client to use to get suggestedParams and send the transaction group

---

### appManager?

> `optional` **appManager**: [`AppManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appmanager/)

Defined in: [src/composer.ts:204](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L204)

An existing `AppManager` to use to manage app compilation and cache compilation results.

If not specified then an ephemeral one will be created.

---

### composerConfig?

> `optional` **composerConfig**: [`TransactionComposerConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/transactioncomposerconfig/)

Defined in: [src/composer.ts:210](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L210)

---

### defaultValidityWindow?

> `optional` **defaultValidityWindow**: `bigint`

Defined in: [src/composer.ts:199](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L199)

How many rounds a transaction should be valid for by default; if not specified
then will be 10 rounds (or 1000 rounds if issuing transactions to LocalNet).

---

### errorTransformers?

> `optional` **errorTransformers**: [`ErrorTransformer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/errortransformer/)[]

Defined in: [src/composer.ts:209](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L209)

An array of error transformers to use when an error is caught in simulate or execute
callbacks can later be registered with `registerErrorTransformer`

---

### getSigner()

> **getSigner**: (`address`) => [`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Defined in: [src/composer.ts:193](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L193)

The function used to get the TransactionSigner for a given address

#### Parameters

##### address

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

#### Returns

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

---

### getSuggestedParams()?

> `optional` **getSuggestedParams**: () => `Promise`\<[`SuggestedParams`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/suggestedparams/)\>

Defined in: [src/composer.ts:195](https://github.com/larkiny/algokit-utils-ts/blob/main/src/composer.ts#L195)

The method used to get SuggestedParams for transactions in the group

#### Returns

`Promise`\<[`SuggestedParams`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/suggestedparams/)\>
