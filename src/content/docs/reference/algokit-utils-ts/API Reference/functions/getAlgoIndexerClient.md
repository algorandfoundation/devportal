---
editUrl: false
next: false
prev: false
title: "getAlgoIndexerClient"
---

> **getAlgoIndexerClient**(`config`?): `Indexer`

Defined in: [src/network-client.ts:121](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/network-client.ts#L121)

:::caution[Deprecated]
Use `ClientManager.getIndexerClient(config, overrideIntDecoding)` or `ClientManager.getIndexerClientFromEnvironment(overrideIntDecoding)` instead.

Returns an indexer SDK client that automatically retries transient failures on idempotent calls
:::

## Parameters

### config?

`AlgoClientConfig`

The config if you want to override the default (getting config from process.env)

## Returns

`Indexer`

## Examples

```typescript
 // Uses process.env.INDEXER_SERVER, process.env.INDEXER_PORT and process.env.INDEXER_TOKEN
 const indexer = getAlgoIndexerClient()
 await indexer.makeHealthCheck().do()
 ```

```typescript
 const indexer = getAlgoIndexerClient(getAlgoNodeConfig('testnet', 'indexer'))
 await indexer.makeHealthCheck().do()
```

```typescript
 const indexer = getAlgoIndexerClient(getAlgoNodeConfig('mainnet', 'indexer'))
 await indexer.makeHealthCheck().do()
```

```typescript
 const indexer = getAlgoIndexerClient({server: 'http://localhost', port: '8980', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
 await indexer.makeHealthCheck().do()
```
