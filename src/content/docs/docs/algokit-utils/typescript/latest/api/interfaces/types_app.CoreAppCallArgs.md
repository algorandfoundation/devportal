---
title: CoreAppCallArgs
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/) / CoreAppCallArgs

[types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/).CoreAppCallArgs

Common app call arguments for ABI and non-ABI (raw) calls

## Hierarchy

- **`CoreAppCallArgs`**

  ↳ [`RawAppCallArgs`](/docs/algokit-utils/typescript/latest/api/interfaces/types_apprawappcallargs/)

## Table of contents

### Properties

- [accounts](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/#accounts)
- [apps](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/#apps)
- [assets](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/#assets)
- [boxes](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/#boxes)
- [lease](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/#lease)
- [rekeyTo](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcoreappcallargs/#rekeyto)

## Properties

### accounts

• `Optional` **accounts**: (`string` \| `Address`)[]

The address of any accounts to load in

#### Defined in

[src/types/app.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L79)

---

### apps

• `Optional` **apps**: `number`[]

IDs of any apps to load into the foreignApps array

#### Defined in

[src/types/app.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L81)

---

### assets

• `Optional` **assets**: `number`[]

IDs of any assets to load into the foreignAssets array

#### Defined in

[src/types/app.ts:83](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L83)

---

### boxes

• `Optional` **boxes**: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appboxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#boxidentifier) \| `BoxReference`)[]

Any box references to load

#### Defined in

[src/types/app.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L77)

---

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

The optional lease for the transaction

#### Defined in

[src/types/app.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L75)

---

### rekeyTo

• `Optional` **rekeyTo**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

Optional account / account address that should be authorised to transact on behalf of the from account the app call is sent from after this transaction.

**Note:** Use with extreme caution and review the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying) first.

#### Defined in

[src/types/app.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L88)
