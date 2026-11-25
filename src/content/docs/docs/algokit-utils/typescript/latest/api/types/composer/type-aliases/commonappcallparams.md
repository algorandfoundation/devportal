---
editUrl: false
next: false
prev: false
title: "CommonAppCallParams"
---

> **CommonAppCallParams** = [`CommonTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/commontransactionparams/) & `object`

Defined in: [src/types/composer.ts:344](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L344)

Common parameters for defining an application call transaction.

## Type Declaration

### accessReferences?

> `optional` **accessReferences?**: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

### accountReferences?

> `optional` **accountReferences?**: (`string` \| `Address`)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

### appId

> **appId**: `bigint`

ID of the application; 0 if the application is being created.

### appReferences?

> `optional` **appReferences?**: `bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

### args?

> `optional` **args?**: `Uint8Array`[]

Any [arguments to pass to the smart contract call](https://dev.algorand.co/concepts/smart-contracts/languages/teal/#argument-passing).

### assetReferences?

> `optional` **assetReferences?**: `bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

### boxReferences?

> `optional` **boxReferences?**: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

### onComplete?

> `optional` **onComplete?**: `algosdk.OnApplicationComplete`

The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op.

### rejectVersion?

> `optional` **rejectVersion?**: `number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.
