---
editUrl: false
next: false
prev: false
title: "getAlgoNodeConfig"
---

> **getAlgoNodeConfig**(`network`, `config`): `AlgoClientConfig`

Defined in: [src/network-client.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/network-client.ts#L43)

:::caution[Deprecated]
Use `ClientManager.getAlgoNodeConfig(network, config)` instead.

Returns the Algorand configuration to point to the AlgoNode service
:::

## Parameters

### network

Which network to connect to - TestNet or MainNet

`"testnet"` | `"mainnet"`

### config

Which algod config to return - Algod or Indexer

`"algod"` | `"indexer"`

## Returns

`AlgoClientConfig`
