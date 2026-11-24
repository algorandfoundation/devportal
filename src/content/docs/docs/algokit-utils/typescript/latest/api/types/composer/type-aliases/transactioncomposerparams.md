---
editUrl: false
next: false
prev: false
title: "TransactionComposerParams"
---

> **TransactionComposerParams** = `object`

Defined in: [src/types/composer.ts:504](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L504)

Parameters to create an `TransactionComposer`.

## Properties

### algod

> **algod**: `algosdk.Algodv2`

Defined in: [src/types/composer.ts:506](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L506)

The algod client to use to get suggestedParams and send the transaction group

***

### appManager?

> `optional` **appManager?**: [`AppManager`](/docs/algokit-utils/typescript/latest/api/types/app-manager/classes/appmanager/)

Defined in: [src/types/composer.ts:519](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L519)

An existing `AppManager` to use to manage app compilation and cache compilation results.

If not specified then an ephemeral one will be created.

***

### defaultValidityWindow?

> `optional` **defaultValidityWindow?**: `bigint`

Defined in: [src/types/composer.ts:514](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L514)

How many rounds a transaction should be valid for by default; if not specified
then will be 10 rounds (or 1000 rounds if issuing transactions to LocalNet).

***

### errorTransformers?

> `optional` **errorTransformers?**: [`ErrorTransformer`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/errortransformer/)[]

Defined in: [src/types/composer.ts:524](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L524)

An array of error transformers to use when an error is caught in simulate or execute
callbacks can later be registered with `registerErrorTransformer`

***

### getSigner

> **getSigner**: (`address`) => `algosdk.TransactionSigner`

Defined in: [src/types/composer.ts:508](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L508)

The function used to get the TransactionSigner for a given address

#### Parameters

##### address

`string` \| `Address`

#### Returns

`algosdk.TransactionSigner`

***

### getSuggestedParams?

> `optional` **getSuggestedParams?**: () => `Promise`\<`algosdk.SuggestedParams`\>

Defined in: [src/types/composer.ts:510](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L510)

The method used to get SuggestedParams for transactions in the group

#### Returns

`Promise`\<`algosdk.SuggestedParams`\>
