---
editUrl: false
next: false
prev: false
title: "getAppDeploymentTransactionNote"
---

> **getAppDeploymentTransactionNote**(`metadata`): `Arc2TransactionNote`

Defined in: [src/app-deploy.ts:271](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app-deploy.ts#L271)

:::caution[Deprecated]
Use `{ dAppName: APP_DEPLOY_NOTE_DAPP, data: metadata, format: 'j' }` instead.

Return the transaction note for an app deployment.
:::

## Parameters

### metadata

`AppDeployMetadata`

The metadata of the deployment

## Returns

`Arc2TransactionNote`

The transaction note as a utf-8 string
