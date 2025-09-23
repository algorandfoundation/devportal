---
title: AppClientCallABIArgs
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/) / AppClientCallABIArgs



[types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/).AppClientCallABIArgs

## Hierarchy

- `Omit`\<[`ABIAppCallArgs`](/reference/algokit-utils-ts/api/modules/types_app/#abiappcallargs), ``"method"``\>

  ↳ **`AppClientCallABIArgs`**

## Table of contents

### Properties

- [accounts](#accounts)
- [apps](#apps)
- [assets](#assets)
- [boxes](#boxes)
- [lease](#lease)
- [method](#method)
- [methodArgs](#methodargs)
- [rekeyTo](#rekeyto)

## Properties

### accounts

• `Optional` **accounts**: (`string` \| `Address`)[]

The address of any accounts to load in

#### Inherited from

Omit.accounts

#### Defined in

[src/types/app.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L79)

___

### apps

• `Optional` **apps**: `number`[]

IDs of any apps to load into the foreignApps array

#### Inherited from

Omit.apps

#### Defined in

[src/types/app.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L81)

___

### assets

• `Optional` **assets**: `number`[]

IDs of any assets to load into the foreignAssets array

#### Inherited from

Omit.assets

#### Defined in

[src/types/app.ts:83](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L83)

___

### boxes

• `Optional` **boxes**: ([`BoxReference`]() \| [`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app/#boxidentifier) \| `BoxReference`)[]

Any box references to load

#### Inherited from

Omit.boxes

#### Defined in

[src/types/app.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L77)

___

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

The optional lease for the transaction

#### Inherited from

Omit.lease

#### Defined in

[src/types/app.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L75)

___

### method

• **method**: `string`

If calling an ABI method then either the name of the method, or the ABI signature

#### Defined in

[src/types/app-client.ts:204](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L204)

___

### methodArgs

• **methodArgs**: [`ABIAppCallArg`](/reference/algokit-utils-ts/api/modules/types_app/#abiappcallarg)[]

The ABI method args to pass in

#### Inherited from

Omit.methodArgs

#### Defined in

[src/types/app.ts:117](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L117)

___

### rekeyTo

• `Optional` **rekeyTo**: `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

Optional account / account address that should be authorised to transact on behalf of the from account the app call is sent from after this transaction.

**Note:** Use with extreme caution and review the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying) first.

#### Inherited from

Omit.rekeyTo

#### Defined in

[src/types/app.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L88)