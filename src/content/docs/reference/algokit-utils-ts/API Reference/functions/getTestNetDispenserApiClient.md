---
editUrl: false
next: false
prev: false
title: "getTestNetDispenserApiClient"
---

> **getTestNetDispenserApiClient**(`params`): `TestNetDispenserApiClient`

Defined in: [src/dispenser-client.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/dispenser-client.ts#L21)

:::caution[Deprecated]
Use `clientManager.getTestNetDispenser` or `clientManager.getTestNetDispenserFromEnvironment` instead

Create a new TestNetDispenserApiClient instance.
Refer to [docs](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md) on guidance to obtain an access token.
:::

## Parameters

### params

An object containing parameters for the TestNetDispenserApiClient class.
Or null if you want the client to load the access token from the environment variable `ALGOKIT_DISPENSER_ACCESS_TOKEN`.

`null` | `TestNetDispenserApiClientParams`

## Returns

`TestNetDispenserApiClient`

An instance of the TestNetDispenserApiClient class.

## Example

```ts
const client = algokit.getTestNetDispenserApiClient(
    {
      authToken: 'your_auth_token',
      requestTimeout: 15,
    }
)
```
