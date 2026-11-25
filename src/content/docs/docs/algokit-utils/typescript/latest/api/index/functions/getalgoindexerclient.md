---
editUrl: false
next: false
prev: false
title: "getAlgoIndexerClient"
---

> **getAlgoIndexerClient**(`config?`): `IndexerClient`

Defined in: [src/network-client.ts:121](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L121)

:::caution[Deprecated]
Use `ClientManager.getIndexerClient(config, overrideIntDecoding)` or `ClientManager.getIndexerClientFromEnvironment(overrideIntDecoding)` instead.

Returns an indexer SDK client that automatically retries transient failures on idempotent calls
:::

## Parameters

### config?

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

The config if you want to override the default (getting config from process.env)

## Returns

`IndexerClient`

## Examples

**Default (load from environment variables)**

```typescript
 // Uses process.env.INDEXER_SERVER, process.env.INDEXER_PORT and process.env.INDEXER_TOKEN
 const indexer = getAlgoIndexerClient()
 await indexer.makeHealthCheck().do()
 ```

**AlgoNode (testnet)**

```typescript
 const indexer = getAlgoIndexerClient(getAlgoNodeConfig('testnet', 'indexer'))
 await indexer.makeHealthCheck().do()
```

**AlgoNode (mainnet)**

```typescript
 const indexer = getAlgoIndexerClient(getAlgoNodeConfig('mainnet', 'indexer'))
 await indexer.makeHealthCheck().do()
```

**Custom (e.g. default LocalNet, although we recommend loading this into a .env and using the Default option instead)**

```typescript
 const indexer = getAlgoIndexerClient({server: 'http://localhost', port: '8980', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
 await indexer.makeHealthCheck().do()
```
