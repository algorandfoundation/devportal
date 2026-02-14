---
title: RawAppCallArgs
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/) / RawAppCallArgs



[types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/).RawAppCallArgs

App call args with non-ABI (raw) values (minus some processing like encoding strings as binary)

## Hierarchy

- [`CoreAppCallArgs`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/)

  ↳ **`RawAppCallArgs`**

## Table of contents

### Properties

- [accounts](/docs/algokit-utils/typescript/latest/api/interfaces/types_apprawappcallargs/#accounts)
- [appArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_apprawappcallargs/#appargs)
- [apps](/docs/algokit-utils/typescript/latest/api/interfaces/types_apprawappcallargs/#apps)
- [assets](/docs/algokit-utils/typescript/latest/api/interfaces/types_apprawappcallargs/#assets)
- [boxes](/docs/algokit-utils/typescript/latest/api/interfaces/types_apprawappcallargs/#boxes)
- [lease](/docs/algokit-utils/typescript/latest/api/interfaces/types_apprawappcallargs/#lease)
- [method](/docs/algokit-utils/typescript/latest/api/interfaces/types_apprawappcallargs/#method)
- [rekeyTo](/docs/algokit-utils/typescript/latest/api/interfaces/types_apprawappcallargs/#rekeyto)

## Properties

### accounts

• `Optional` **accounts**: (`string` \| `Address`)[]

The address of any accounts to load in

#### Inherited from

[CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/).[accounts](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/#accounts)

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

[CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/).[apps](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/#apps)

#### Defined in

[src/types/app.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L81)

___

### assets

• `Optional` **assets**: `number`[]

IDs of any assets to load into the foreignAssets array

#### Inherited from

[CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/).[assets](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/#assets)

#### Defined in

[src/types/app.ts:83](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L83)

___

### boxes

• `Optional` **boxes**: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appboxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#boxidentifier) \| `BoxReference`)[]

Any box references to load

#### Inherited from

[CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/).[boxes](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/#boxes)

#### Defined in

[src/types/app.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L77)

___

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

The optional lease for the transaction

#### Inherited from

[CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/).[lease](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/#lease)

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

• `Optional` **rekeyTo**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

Optional account / account address that should be authorised to transact on behalf of the from account the app call is sent from after this transaction.

**Note:** Use with extreme caution and review the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying) first.

#### Inherited from

[CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/).[rekeyTo](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/#rekeyto)

#### Defined in

[src/types/app.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L88)