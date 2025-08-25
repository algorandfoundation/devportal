---
editUrl: false
next: false
prev: false
title: "getAlgoKmdClient"
---

> **getAlgoKmdClient**(`config`?): `Kmd`

Defined in: [src/network-client.ts:144](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/network-client.ts#L144)

:::caution[Deprecated]
Use `ClientManager.getKmdClient(config)` or `ClientManager.getKmdClientFromEnvironment()` instead.

Returns a KMD SDK client that automatically retries transient failures on idempotent calls.

KMD client allows you to export private keys, which is useful to get the default account in a LocalNet network.
:::

## Parameters

### config?

`AlgoClientConfig`

The config if you want to override the default (getting config from process.env)

## Returns

`Kmd`

## Examples

```typescript
 // Uses process.env.ALGOD_SERVER, process.env.KMD_PORT (or if not specified: port 4002) and process.env.ALGOD_TOKEN
 const kmd = getAlgoKmdClient()
 ```

```typescript
 const kmd = getAlgoKmdClient({server: 'http://localhost', port: '4002', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
```
