---
editUrl: false
next: false
prev: false
title: "AppClientParams"
---

Defined in: [src/types/app-client.ts:319](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L319)

Parameters to create an app client

## Properties

### algorand

> **algorand**: [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/types/algorand-client/classes/algorandclient/)

Defined in: [src/types/app-client.ts:331](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L331)

An `AlgorandClient` instance

***

### appId

> **appId**: `bigint`

Defined in: [src/types/app-client.ts:321](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L321)

The ID of the app instance this client should make calls against.

***

### appName?

> `optional` **appName?**: `string`

Defined in: [src/types/app-client.ts:337](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L337)

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name

***

### approvalSourceMap?

> `optional` **approvalSourceMap?**: `ProgramSourceMap`

Defined in: [src/types/app-client.ts:343](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L343)

Optional source map for the approval program

***

### appSpec

> **appSpec**: `string` \| [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/arc56contract/) \| [`AppSpec`](/docs/algokit-utils/typescript/latest/api/types/app-spec/interfaces/appspec/)

Defined in: [src/types/app-client.ts:328](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L328)

The ARC-56 or ARC-32 application spec as either:
 * Parsed JSON ARC-56 `Contract`
 * Parsed JSON ARC-32 `AppSpec`
 * Raw JSON string (in either ARC-56 or ARC-32 format)

***

### clearSourceMap?

> `optional` **clearSourceMap?**: `ProgramSourceMap`

Defined in: [src/types/app-client.ts:345](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L345)

Optional source map for the clear state program

***

### defaultSender?

> `optional` **defaultSender?**: `string` \| `Address`

Defined in: [src/types/app-client.ts:339](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L339)

Optional address to use for the account to use as the default sender for calls.

***

### defaultSigner?

> `optional` **defaultSigner?**: `TransactionSigner`

Defined in: [src/types/app-client.ts:341](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L341)

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).
