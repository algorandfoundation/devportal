---
editUrl: false
next: false
prev: false
title: "getAlgoClient"
---

> **getAlgoClient**(`config?`): `AlgodClient`

Defined in: [src/network-client.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L88)

:::caution[Deprecated]
Use `ClientManager.getAlgodClient(config)` or `ClientManager.getAlgodClientFromEnvironment()` instead.

Returns an algod SDK client that automatically retries transient failures on idempotent calls
:::

## Parameters

### config?

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

The config if you want to override the default (getting config from process.env)

## Returns

`AlgodClient`

## Examples

**Default (load from environment variables)**

```typescript
 // Uses process.env.ALGOD_SERVER, process.env.ALGOD_PORT and process.env.ALGOD_TOKEN
 // Automatically detects if you are using PureStake to switch in the right header name for ALGOD_TOKEN
 const algod = getAlgoClient()
 await algod.healthCheck().do()
 ```

**AlgoNode (testnet)**

```typescript
 const algod = getAlgoClient(getAlgoNodeConfig('testnet', 'algod'))
 await algod.healthCheck().do()
```

**AlgoNode (mainnet)**

```typescript
 const algod = getAlgoClient(getAlgoNodeConfig('mainnet', 'algod'))
 await algod.healthCheck().do()
```

**Custom (e.g. default LocalNet, although we recommend loading this into a .env and using the Default option instead)**

```typescript
 const algod = getAlgoClient({server: 'http://localhost', port: '4001', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
 await algod.healthCheck().do()
```
