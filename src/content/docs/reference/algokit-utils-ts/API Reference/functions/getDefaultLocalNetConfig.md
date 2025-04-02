---
editUrl: false
next: false
prev: false
title: "getDefaultLocalNetConfig"
---

> **getDefaultLocalNetConfig**(`configOrPort`): `AlgoClientConfig`

Defined in: [src/network-client.ts:54](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/network-client.ts#L54)

:::caution[Deprecated]
Use `ClientManager.getDefaultLocalNetConfig(configOrPort)` instead.

Returns the Algorand configuration to point to the default LocalNet
:::

## Parameters

### configOrPort

Which algod config to return - algod, kmd, or indexer OR a port number

`number` | `"algod"` | `"indexer"` | `"kmd"`

## Returns

`AlgoClientConfig`
