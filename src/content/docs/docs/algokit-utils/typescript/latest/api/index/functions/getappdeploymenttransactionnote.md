---
editUrl: false
next: false
prev: false
title: "getAppDeploymentTransactionNote"
---

> **getAppDeploymentTransactionNote**(`metadata`): [`Arc2TransactionNote`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/arc2transactionnote/)

Defined in: [src/app-deploy.ts:271](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deploy.ts#L271)

:::caution[Deprecated]
Use `{ dAppName: APP_DEPLOY_NOTE_DAPP, data: metadata, format: 'j' }` instead.

Return the transaction note for an app deployment.
:::

## Parameters

### metadata

[`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/)

The metadata of the deployment

## Returns

[`Arc2TransactionNote`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/arc2transactionnote/)

The transaction note as a utf-8 string
