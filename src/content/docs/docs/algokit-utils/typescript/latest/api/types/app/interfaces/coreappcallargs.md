---
editUrl: false
next: false
prev: false
title: "CoreAppCallArgs"
---

Defined in: [src/types/app.ts:73](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L73)

Common app call arguments for ABI and non-ABI (raw) calls

## Extended by

- [`RawAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/rawappcallargs/)

## Properties

### accounts?

> `optional` **accounts?**: (`string` \| `Address`)[]

Defined in: [src/types/app.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L79)

The address of any accounts to load in

***

### apps?

> `optional` **apps?**: `number`[]

Defined in: [src/types/app.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L81)

IDs of any apps to load into the foreignApps array

***

### assets?

> `optional` **assets?**: `number`[]

Defined in: [src/types/app.ts:83](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L83)

IDs of any assets to load into the foreignAssets array

***

### boxes?

> `optional` **boxes?**: (`BoxReference` \| [`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/boxidentifier/))[]

Defined in: [src/types/app.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L77)

Any box references to load

***

### lease?

> `optional` **lease?**: `string` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/app.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L75)

The optional lease for the transaction

***

### rekeyTo?

> `optional` **rekeyTo?**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/app.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L88)

Optional account / account address that should be authorised to transact on behalf of the from account the app call is sent from after this transaction.

**Note:** Use with extreme caution and review the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying) first.
