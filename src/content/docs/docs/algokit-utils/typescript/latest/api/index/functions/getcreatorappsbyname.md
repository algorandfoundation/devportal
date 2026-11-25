---
editUrl: false
next: false
prev: false
title: "getCreatorAppsByName"
---

> **getCreatorAppsByName**(`creatorAccount`, `indexer`): `Promise`\<[`AppLookup`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/applookup/)\>

Defined in: [src/app-deploy.ts:244](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deploy.ts#L244)

:::caution[Deprecated]
Use `algorand.appDeployer.getCreatorAppsByName` instead.

Returns a lookup of name => app metadata (id, address, ...metadata) for all apps created by the given account that have an `AppDeployNote` in the transaction note of the creation transaction.

**Note:** It's recommended this is only called once and then stored since it's a somewhat expensive operation (multiple indexer calls).
:::

## Parameters

### creatorAccount

`string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

The account (with private key loaded) or string address of an account that is the creator of the apps you want to search for

### indexer

`IndexerClient`

An indexer client

## Returns

`Promise`\<[`AppLookup`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/applookup/)\>

A name-based lookup of the app information (id, address)
