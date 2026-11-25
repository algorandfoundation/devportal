---
editUrl: false
next: false
prev: false
title: "AppClientCallABIArgs"
---

Defined in: [src/types/app-client.ts:202](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L202)

## Extends

- `Omit`\<[`ABIAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abiappcallargs/), `"method"`\>

## Properties

### accounts?

> `optional` **accounts?**: (`string` \| `Address`)[]

Defined in: [src/types/app.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L79)

The address of any accounts to load in

#### Inherited from

[`CoreAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/).[`accounts`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/#accounts)

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

### method

> **method**: `string`

Defined in: [src/types/app-client.ts:204](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L204)

If calling an ABI method then either the name of the method, or the ABI signature

***

### methodArgs

> **methodArgs**: [`ABIAppCallArg`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abiappcallarg/)[]

Defined in: [src/types/app.ts:117](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L117)

The ABI method args to pass in

#### Inherited from

`Omit.methodArgs`

***

### rekeyTo?

> `optional` **rekeyTo?**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/app.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L88)

Optional account / account address that should be authorised to transact on behalf of the from account the app call is sent from after this transaction.

**Note:** Use with extreme caution and review the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying) first.

#### Inherited from

[`CoreAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/).[`rekeyTo`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/coreappcallargs/#rekeyto)
