---
title: AppClientDeployCoreParams
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/) / AppClientDeployCoreParams

[types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/).AppClientDeployCoreParams

Core parameters to pass into ApplicationClient.deploy

## Hierarchy

- **`AppClientDeployCoreParams`**

  ↳ [`AppClientDeployParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployParams/)

## Table of contents

### Properties

- [allowDelete](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCoreParams/#allowdelete)
- [allowUpdate](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCoreParams/#allowupdate)
- [onSchemaBreak](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCoreParams/#onschemabreak)
- [onUpdate](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCoreParams/#onupdate)
- [sendParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCoreParams/#sendparams)
- [sender](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCoreParams/#sender)
- [version](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientDeployCoreParams/#version)

## Properties

### allowDelete

• `Optional` **allowDelete**: `boolean`

Whether or not to allow deletes in the contract using the deploy-time deletability control if present in your contract.
If this is not specified then it will automatically be determined based on the AppSpec definition

#### Defined in

[src/types/app-client.ts:173](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L173)

---

### allowUpdate

• `Optional` **allowUpdate**: `boolean`

Whether or not to allow updates in the contract using the deploy-time updatability control if present in your contract.
If this is not specified then it will automatically be determined based on the AppSpec definition

#### Defined in

[src/types/app-client.ts:169](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L169)

---

### onSchemaBreak

• `Optional` **onSchemaBreak**: [`OnSchemaBreak`](/docs/algokit-utils/typescript/latest/api/enums/types_app.OnSchemaBreak/) \| `"replace"` \| `"fail"` \| `"append"`

What action to perform if a schema break is detected

#### Defined in

[src/types/app-client.ts:175](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L175)

---

### onUpdate

• `Optional` **onUpdate**: `"replace"` \| `"fail"` \| `"append"` \| [`OnUpdate`](/docs/algokit-utils/typescript/latest/api/enums/types_app.OnUpdate/) \| `"update"`

What action to perform if a TEAL update is detected

#### Defined in

[src/types/app-client.ts:177](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L177)

---

### sendParams

• `Optional` **sendParams**: `Omit`\<[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/), `"skipSending"` \| `"skipWaiting"`\>

Parameters to control transaction sending

#### Defined in

[src/types/app-client.ts:165](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L165)

---

### sender

• `Optional` **sender**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

The optional sender to send the transaction from, will use the application client's default sender by default if specified

#### Defined in

[src/types/app-client.ts:163](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L163)

---

### version

• `Optional` **version**: `string`

The version of the contract, uses "1.0" by default

#### Defined in

[src/types/app-client.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L161)
