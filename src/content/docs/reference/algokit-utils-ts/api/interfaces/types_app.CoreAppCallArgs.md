---
title: CoreAppCallArgs
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app](/reference/algokit-utils-ts/api/modules/types_app/) / CoreAppCallArgs



[types/app](/reference/algokit-utils-ts/api/modules/types_app/).CoreAppCallArgs

Common app call arguments for ABI and non-ABI (raw) calls

## Hierarchy

- **`CoreAppCallArgs`**

  ↳ [`RawAppCallArgs`]()

## Table of contents

### Properties

- [accounts](#accounts)
- [apps](#apps)
- [assets](#assets)
- [boxes](#boxes)
- [lease](#lease)
- [rekeyTo](#rekeyto)

## Properties

### accounts

• `Optional` **accounts**: (`string` \| `Address`)[]

The address of any accounts to load in

#### Defined in

[src/types/app.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L79)

___

### apps

• `Optional` **apps**: `number`[]

IDs of any apps to load into the foreignApps array

#### Defined in

[src/types/app.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L81)

___

### assets

• `Optional` **assets**: `number`[]

IDs of any assets to load into the foreignAssets array

#### Defined in

[src/types/app.ts:83](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L83)

___

### boxes

• `Optional` **boxes**: ([`BoxReference`]() \| [`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app/#boxidentifier) \| `BoxReference`)[]

Any box references to load

#### Defined in

[src/types/app.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L77)

___

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

The optional lease for the transaction

#### Defined in

[src/types/app.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L75)

___

### rekeyTo

• `Optional` **rekeyTo**: `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

Optional account / account address that should be authorised to transact on behalf of the from account the app call is sent from after this transaction.

**Note:** Use with extreme caution and review the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying) first.

#### Defined in

[src/types/app.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L88)