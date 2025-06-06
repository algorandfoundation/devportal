---
editUrl: false
next: false
prev: false
title: "getAppDeploymentTransactionNote"
---

> **getAppDeploymentTransactionNote**(`metadata`): `Arc2TransactionNote`

Defined in: [src/app-deploy.ts:271](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app-deploy.ts#L271)

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
