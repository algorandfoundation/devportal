---
editUrl: false
next: false
prev: false
title: "getAppClientByCreatorAndName"
---

> **getAppClientByCreatorAndName**(`appDetails`, `algod`): `ApplicationClient`

Defined in: [src/app-client.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app-client.ts#L93)

:::caution[Deprecated]
Use `AppClient` instead e.g. via `algorand.client.getAppClientByCreatorAndName`.
If you want to `create` or `deploy` then use `AppFactory` e.g. via `algorand.client.getAppFactory`,
which will in turn give you an `AppClient` instance against the created/deployed app to make other calls.

Create a new ApplicationClient instance by creator and name
:::

## Parameters

### appDetails

`AppSpecAppDetailsByCreatorAndName`

The details of the app by creator and name

### algod

`AlgodClient`

An algod instance

## Returns

`ApplicationClient`

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
