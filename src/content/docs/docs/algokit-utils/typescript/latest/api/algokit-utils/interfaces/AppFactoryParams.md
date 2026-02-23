---
editUrl: false
next: false
prev: false
title: 'AppFactoryParams'
---

Defined in: [src/app-factory.ts:27](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-factory.ts#L27)

Parameters to create an app client

## Properties

### algorand

> **algorand**: [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algorandclient/)

Defined in: [src/app-factory.ts:36](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-factory.ts#L36)

`AlgorandClient` instance

---

### appName?

> `optional` **appName**: `string`

Defined in: [src/app-factory.ts:42](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-factory.ts#L42)

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name.

---

### appSpec

> **appSpec**: `string` \| [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/arc56contract/) \| `AppSpec`

Defined in: [src/app-factory.ts:33](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-factory.ts#L33)

The ARC-56 or ARC-32 application spec as either:

- Parsed JSON ARC-56 `Contract`
- Parsed JSON ARC-32 `AppSpec`
- Raw JSON string (in either ARC-56 or ARC-32 format)

---

### defaultSender?

> `optional` **defaultSender**: [`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

Defined in: [src/app-factory.ts:45](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-factory.ts#L45)

Optional address to use for the account to use as the default sender for calls.

---

### defaultSigner?

> `optional` **defaultSigner**: [`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Defined in: [src/app-factory.ts:48](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-factory.ts#L48)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

---

### deletable?

> `optional` **deletable**: `boolean`

Defined in: [src/app-factory.ts:69](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-factory.ts#L69)

Whether or not the contract should have deploy-time permanence control set, undefined = ignore.
If specified here will get used in calls to `deploy` and `create` calls unless overridden in those calls.

Useful if you want to vend multiple contracts from the same factory without specifying this value
for each call.

---

### deployTimeParams?

> `optional` **deployTimeParams**: [`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/tealtemplateparams/)

Defined in: [src/app-factory.ts:78](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-factory.ts#L78)

Optional deploy-time TEAL template replacement parameters.
If specified here will get used in calls to `deploy` and `create` calls unless overridden in those calls.

Useful if you want to vend multiple contracts from the same factory without specifying this value
for each call.

---

### updatable?

> `optional` **updatable**: `boolean`

Defined in: [src/app-factory.ts:60](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-factory.ts#L60)

Whether or not the contract should have deploy-time immutability control set, undefined = ignore.
If specified here will get used in calls to `deploy` and `create` calls unless overridden in those calls.

Useful if you want to vend multiple contracts from the same factory without specifying this value
for each call.

---

### version?

> `optional` **version**: `string`

Defined in: [src/app-factory.ts:51](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-factory.ts#L51)

The version of app that is / will be deployed; defaults to 1.0
