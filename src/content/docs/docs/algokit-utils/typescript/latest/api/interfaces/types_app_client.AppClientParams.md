---
title: AppClientParams
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/) / AppClientParams



[types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/).AppClientParams

Parameters to create an app client

## Table of contents

### Properties

- [algorand](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/#algorand)
- [appId](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/#appid)
- [appName](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/#appname)
- [appSpec](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/#appspec)
- [approvalSourceMap](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/#approvalsourcemap)
- [clearSourceMap](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/#clearsourcemap)
- [defaultSender](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/#defaultsender)
- [defaultSigner](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/#defaultsigner)

## Properties

### algorand

• **algorand**: [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_clientalgorandclient/)

An `AlgorandClient` instance

#### Defined in

[src/types/app-client.ts:331](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L331)

___

### appId

• **appId**: `bigint`

The ID of the app instance this client should make calls against.

#### Defined in

[src/types/app-client.ts:321](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L321)

___

### appName

• `Optional` **appName**: `string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name

#### Defined in

[src/types/app-client.ts:337](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L337)

___

### appSpec

• **appSpec**: `string` \| [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56arc56contract/) \| [`AppSpec`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_specappspec/)

The ARC-56 or ARC-32 application spec as either:
 * Parsed JSON ARC-56 `Contract`
 * Parsed JSON ARC-32 `AppSpec`
 * Raw JSON string (in either ARC-56 or ARC-32 format)

#### Defined in

[src/types/app-client.ts:328](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L328)

___

### approvalSourceMap

• `Optional` **approvalSourceMap**: `ProgramSourceMap`

Optional source map for the approval program

#### Defined in

[src/types/app-client.ts:343](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L343)

___

### clearSourceMap

• `Optional` **clearSourceMap**: `ProgramSourceMap`

Optional source map for the clear state program

#### Defined in

[src/types/app-client.ts:345](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L345)

___

### defaultSender

• `Optional` **defaultSender**: `string` \| `Address`

Optional address to use for the account to use as the default sender for calls.

#### Defined in

[src/types/app-client.ts:339](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L339)

___

### defaultSigner

• `Optional` **defaultSigner**: `TransactionSigner`

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

#### Defined in

[src/types/app-client.ts:341](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L341)