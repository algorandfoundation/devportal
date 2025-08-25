---
editUrl: false
next: false
prev: false
title: "getAlgoNodeConfig"
---

> **getAlgoNodeConfig**(`network`, `config`): `AlgoClientConfig`

Defined in: [src/network-client.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/network-client.ts#L43)

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
