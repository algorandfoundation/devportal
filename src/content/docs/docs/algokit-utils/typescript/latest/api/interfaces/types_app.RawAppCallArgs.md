---
title: RawAppCallArgs
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/) / RawAppCallArgs

[types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/).RawAppCallArgs

App call args with non-ABI (raw) values (minus some processing like encoding strings as binary)

## Hierarchy

- [`CoreAppCallArgs`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/)

  ↳ **`RawAppCallArgs`**

## Table of contents

### Properties

- [accounts](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.RawAppCallArgs/#accounts)
- [appArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.RawAppCallArgs/#appargs)
- [apps](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.RawAppCallArgs/#apps)
- [assets](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.RawAppCallArgs/#assets)
- [boxes](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.RawAppCallArgs/#boxes)
- [lease](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.RawAppCallArgs/#lease)
- [method](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.RawAppCallArgs/#method)
- [rekeyTo](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.RawAppCallArgs/#rekeyto)

## Properties

### accounts

• `Optional` **accounts**: (`string` \| `Address`)[]

The address of any accounts to load in

#### Inherited from

[CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/).[accounts](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/#accounts)

#### Defined in

[src/types/app.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L79)

---

### appArgs

• `Optional` **appArgs**: (`string` \| `Uint8Array`)[]

Any application arguments to pass through

#### Defined in

[src/types/app.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L96)

---

### apps

• `Optional` **apps**: `number`[]

IDs of any apps to load into the foreignApps array

#### Inherited from

[CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/).[apps](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/#apps)

#### Defined in

[src/types/app.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L81)

---

### assets

• `Optional` **assets**: `number`[]

IDs of any assets to load into the foreignAssets array

#### Inherited from

[CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/).[assets](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/#assets)

#### Defined in

[src/types/app.ts:83](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L83)

---

### boxes

• `Optional` **boxes**: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.BoxReference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#boxidentifier) \| `BoxReference`)[]

Any box references to load

#### Inherited from

[CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/).[boxes](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/#boxes)

#### Defined in

[src/types/app.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L77)

---

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

The optional lease for the transaction

#### Inherited from

[CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/).[lease](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/#lease)

#### Defined in

[src/types/app.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L75)

---

### method

• `Optional` **method**: `undefined`

Property to aid intellisense

#### Defined in

[src/types/app.ts:98](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L98)

---

### rekeyTo

• `Optional` **rekeyTo**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

Optional account / account address that should be authorised to transact on behalf of the from account the app call is sent from after this transaction.

**Note:** Use with extreme caution and review the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying) first.

#### Inherited from

[CoreAppCallArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/).[rekeyTo](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.CoreAppCallArgs/#rekeyto)

#### Defined in

[src/types/app.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L88)
