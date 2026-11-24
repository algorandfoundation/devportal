---
editUrl: false
next: false
prev: false
title: "AppMethodCall"
---

> **AppMethodCall**\<`T`\> = [`Expand`](/docs/algokit-utils/typescript/latest/api/types/expand/type-aliases/expand/)\<`Omit`\<`T`, `"args"`\>\> & `object`

Defined in: [src/types/composer.ts:444](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L444)

Parameters to define an ABI method call.

## Type Declaration

### args?

> `optional` **args?**: (`algosdk.ABIValue` \| `TransactionWithSigner` \| `Transaction` \| `Promise`\<`Transaction`\> \| `AppMethodCall`\<[`AppCreateParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appcreateparams/)\> \| `AppMethodCall`\<[`AppUpdateParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appupdateparams/)\> \| `AppMethodCall`\<[`AppMethodCallParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcallparams/)\> \| `undefined`)[]

Arguments to the ABI method, either:
* An ABI value
* A transaction with explicit signer
* A transaction (where the signer will be automatically assigned)
* An unawaited transaction (e.g. from algorand.createTransaction.{transactionType}())
* Another method call (via method call params object)
* undefined (this represents a placeholder transaction argument that is fulfilled by another method call argument)

### method

> **method**: `algosdk.ABIMethod`

The ABI method to call

## Type Parameters

### T

`T`
