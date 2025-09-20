---
title: RawAppCallArgs
slug: reference/algokit-utils-ts/api/interfaces/types_apprawappcallargs
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app](/reference/algokit-utils-ts/api/modules/types_app/) / RawAppCallArgs



[types/app](/reference/algokit-utils-ts/api/modules/types_app/).RawAppCallArgs

App call args with non-ABI (raw) values (minus some processing like encoding strings as binary)

## Hierarchy

- [`CoreAppCallArgs`](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/)

  ↳ **`RawAppCallArgs`**

## Table of contents

### Properties

- [accounts](#accounts)
- [appArgs](#appargs)
- [apps](#apps)
- [assets](#assets)
- [boxes](#boxes)
- [lease](#lease)
- [method](#method)
- [rekeyTo](#rekeyto)

## Properties

### accounts

• `Optional` **accounts**: (`string` \| `Address`)[]

The address of any accounts to load in

#### Inherited from

[CoreAppCallArgs](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/).[accounts](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/#accounts)

#### Defined in

[src/types/app.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L79)

___

### appArgs

• `Optional` **appArgs**: (`string` \| `Uint8Array`)[]

Any application arguments to pass through

#### Defined in

[src/types/app.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L96)

___

### apps

• `Optional` **apps**: `number`[]

IDs of any apps to load into the foreignApps array

#### Inherited from

[CoreAppCallArgs](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/).[apps](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/#apps)

#### Defined in

[src/types/app.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L81)

___

### assets

• `Optional` **assets**: `number`[]

IDs of any assets to load into the foreignAssets array

#### Inherited from

[CoreAppCallArgs](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/).[assets](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/#assets)

#### Defined in

[src/types/app.ts:83](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L83)

___

### boxes

• `Optional` **boxes**: ([`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_appboxreference/) \| [`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app/#boxidentifier) \| `BoxReference`)[]

Any box references to load

#### Inherited from

[CoreAppCallArgs](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/).[boxes](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/#boxes)

#### Defined in

[src/types/app.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L77)

___

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

The optional lease for the transaction

#### Inherited from

[CoreAppCallArgs](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/).[lease](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/#lease)

#### Defined in

[src/types/app.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L75)

___

### method

• `Optional` **method**: `undefined`

Property to aid intellisense

#### Defined in

[src/types/app.ts:98](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L98)

___

### rekeyTo

• `Optional` **rekeyTo**: `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

Optional account / account address that should be authorised to transact on behalf of the from account the app call is sent from after this transaction.

**Note:** Use with extreme caution and review the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying) first.

#### Inherited from

[CoreAppCallArgs](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/).[rekeyTo](/reference/algokit-utils-ts/api/interfaces/types_appcoreappcallargs/#rekeyto)

#### Defined in

[src/types/app.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L88)