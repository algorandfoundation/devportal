---
editUrl: false
next: false
prev: false
title: "getAppClientByCreatorAndName"
---

> **getAppClientByCreatorAndName**(`appDetails`, `algod`): [`ApplicationClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/applicationclient/)

Defined in: [src/app-client.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L93)

:::caution[Deprecated]
Use `AppClient` instead e.g. via `algorand.client.getAppClientByCreatorAndName`.
If you want to `create` or `deploy` then use `AppFactory` e.g. via `algorand.client.getAppFactory`,
which will in turn give you an `AppClient` instance against the created/deployed app to make other calls.

Create a new ApplicationClient instance by creator and name
:::

## Parameters

### appDetails

[`AppSpecAppDetailsByCreatorAndName`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appspecappdetailsbycreatorandname/)

The details of the app by creator and name

### algod

`AlgodClient`

An algod instance

## Returns

[`ApplicationClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/applicationclient/)

The application client

## Example

```ts
const client = algokit.getAppClientByCreatorAndName(
    {
      app: appSpec,
      sender: account,
      creatorAddress: account,
      findExistingUsing: indexerClient,
    },
    algodClient,
  )
```
