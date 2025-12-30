---
title: AppClientDeployCoreParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/) / AppClientDeployCoreParams

[types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/).AppClientDeployCoreParams

Core parameters to pass into ApplicationClient.deploy

## Hierarchy

- **`AppClientDeployCoreParams`**

  ↳ [`AppClientDeployParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeployparams/)

## Table of contents

### Properties

- [allowDelete](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeploycoreparams/#allowdelete)
- [allowUpdate](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeploycoreparams/#allowupdate)
- [onSchemaBreak](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeploycoreparams/#onschemabreak)
- [onUpdate](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeploycoreparams/#onupdate)
- [sendParams](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeploycoreparams/#sendparams)
- [sender](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeploycoreparams/#sender)
- [version](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeploycoreparams/#version)

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

• `Optional` **onSchemaBreak**: [`OnSchemaBreak`](/reference/algokit-utils-ts/api/enums/types_apponschemabreak/) \| `"replace"` \| `"fail"` \| `"append"`

What action to perform if a schema break is detected

#### Defined in

[src/types/app-client.ts:175](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L175)

---

### onUpdate

• `Optional` **onUpdate**: `"replace"` \| `"fail"` \| `"append"` \| [`OnUpdate`](/reference/algokit-utils-ts/api/enums/types_apponupdate/) \| `"update"`

What action to perform if a TEAL update is detected

#### Defined in

[src/types/app-client.ts:177](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L177)

---

### sendParams

• `Optional` **sendParams**: `Omit`\<[`SendTransactionParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/), `"skipSending"` \| `"skipWaiting"`\>

Parameters to control transaction sending

#### Defined in

[src/types/app-client.ts:165](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L165)

---

### sender

• `Optional` **sender**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The optional sender to send the transaction from, will use the application client's default sender by default if specified

#### Defined in

[src/types/app-client.ts:163](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L163)

---

### version

• `Optional` **version**: `string`

The version of the contract, uses "1.0" by default

#### Defined in

[src/types/app-client.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L161)
