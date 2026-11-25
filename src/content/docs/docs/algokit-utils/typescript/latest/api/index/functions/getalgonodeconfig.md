---
editUrl: false
next: false
prev: false
title: "getAlgoNodeConfig"
---

> **getAlgoNodeConfig**(`network`, `config`): [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

Defined in: [src/network-client.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L43)

:::caution[Deprecated]
Use `ClientManager.getAlgoNodeConfig(network, config)` instead.

Returns the Algorand configuration to point to the AlgoNode service
:::

## Parameters

### network

`"testnet"` \| `"mainnet"`

Which network to connect to - TestNet or MainNet

### config

`"algod"` \| `"indexer"`

Which algod config to return - Algod or Indexer

## Returns

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)
