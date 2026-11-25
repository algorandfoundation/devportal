---
editUrl: false
next: false
prev: false
title: "getAlgoKmdClient"
---

> **getAlgoKmdClient**(`config?`): `KmdClient`

Defined in: [src/network-client.ts:144](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L144)

:::caution[Deprecated]
Use `ClientManager.getKmdClient(config)` or `ClientManager.getKmdClientFromEnvironment()` instead.

Returns a KMD SDK client that automatically retries transient failures on idempotent calls.

KMD client allows you to export private keys, which is useful to get the default account in a LocalNet network.
:::

## Parameters

### config?

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

The config if you want to override the default (getting config from process.env)

## Returns

`KmdClient`

## Examples

**Default (load from environment variables)**

```typescript
 // Uses process.env.ALGOD_SERVER, process.env.KMD_PORT (or if not specified: port 4002) and process.env.ALGOD_TOKEN
 const kmd = getAlgoKmdClient()
 ```

**Custom (e.g. default LocalNet, although we recommend loading this into a .env and using the Default option instead)**

```typescript
 const kmd = getAlgoKmdClient({server: 'http://localhost', port: '4002', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
```
