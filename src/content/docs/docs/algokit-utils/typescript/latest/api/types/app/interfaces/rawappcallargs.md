---
editUrl: false
next: false
prev: false
title: "RawAppCallArgs"
---

Defined in: [src/types/app.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L94)

App call args with non-ABI (raw) values (minus some processing like encoding strings as binary)

## Extends

- [`CoreAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/)

## Properties

### accounts?

> `optional` **accounts?**: (`string` \| `Address`)[]

Defined in: [src/types/app.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L79)

The address of any accounts to load in

#### Inherited from

[`CoreAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/).[`accounts`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/#accounts)

***

### appArgs?

> `optional` **appArgs?**: (`string` \| `Uint8Array`\<`ArrayBufferLike`\>)[]

Defined in: [src/types/app.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L96)

Any application arguments to pass through

***

### apps?

> `optional` **apps?**: `number`[]

Defined in: [src/types/app.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L81)

IDs of any apps to load into the foreignApps array

#### Inherited from

[`CoreAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/).[`apps`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/#apps)

***

### assets?

> `optional` **assets?**: `number`[]

Defined in: [src/types/app.ts:83](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L83)

IDs of any assets to load into the foreignAssets array

#### Inherited from

[`CoreAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/).[`assets`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/#assets)

***

### boxes?

> `optional` **boxes?**: (`BoxReference` \| [`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/boxidentifier/))[]

Defined in: [src/types/app.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L77)

Any box references to load

#### Inherited from

[`CoreAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/).[`boxes`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/#boxes)

***

### lease?

> `optional` **lease?**: `string` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/app.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L75)

The optional lease for the transaction

#### Inherited from

[`CoreAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/).[`lease`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/#lease)

***

### method?

> `optional` **method?**: `undefined`

Defined in: [src/types/app.ts:98](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L98)

Property to aid intellisense

***

### rekeyTo?

> `optional` **rekeyTo?**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/app.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L88)

Optional account / account address that should be authorised to transact on behalf of the from account the app call is sent from after this transaction.

**Note:** Use with extreme caution and review the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying) first.

#### Inherited from

[`CoreAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/).[`rekeyTo`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/#rekeyto)
