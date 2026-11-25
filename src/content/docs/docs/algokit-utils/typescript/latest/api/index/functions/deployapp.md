---
editUrl: false
next: false
prev: false
title: "deployApp"
---

> **deployApp**(`deployment`, `algod`, `indexer?`): `Promise`\<`Partial`\<[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/)\> & [`ConfirmedTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/confirmedtransactionresults/) & [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appmetadata/) & `object` \| [`ConfirmedTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/confirmedtransactionresults/) & [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appmetadata/) & `object` \| [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appmetadata/) & `object`\>

Defined in: [src/app-deploy.ts:51](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deploy.ts#L51)

:::caution[Deprecated]
Use `algorand.appDeployer.deploy` instead.

Idempotently deploy (create, update/delete if changed) an app against the given name via the given creator account, including deploy-time template placeholder substitutions.

To understand the architecture decisions behind this functionality please see https://github.com/algorandfoundation/algokit-cli/blob/main/docs/src/content/docs/architecture-decisions/2023-01-12_smart-contract-deployment.md

**Note:** When using the return from this function be sure to check `operationPerformed` to get access to various return properties like `transaction`, `confirmation` and `deleteResult`.

**Note:** if there is a breaking state schema change to an existing app (and `onSchemaBreak` is set to `'replace'`) the existing app will be deleted and re-created.

**Note:** if there is an update (different TEAL code) to an existing app (and `onUpdate` is set to `'replace'`) the existing app will be deleted and re-created.
:::

## Parameters

### deployment

[`AppDeploymentParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymentparams/)

The arguments to control the app deployment

### algod

`AlgodClient`

An algod client

### indexer?

`IndexerClient`

An indexer client, needed if `existingDeployments` not passed in

## Returns

`Promise`\<`Partial`\<[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/)\> & [`ConfirmedTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/confirmedtransactionresults/) & [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appmetadata/) & `object` \| [`ConfirmedTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/confirmedtransactionresults/) & [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appmetadata/) & `object` \| [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appmetadata/) & `object`\>

The app reference of the new/existing app
