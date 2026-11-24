---
editUrl: false
next: false
prev: false
title: "getDefaultLocalNetConfig"
---

> **getDefaultLocalNetConfig**(`configOrPort`): [`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)

Defined in: [src/network-client.ts:54](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L54)

:::caution[Deprecated]
Use `ClientManager.getDefaultLocalNetConfig(configOrPort)` instead.

Returns the Algorand configuration to point to the default LocalNet
:::

## Parameters

### configOrPort

`number` \| `"algod"` \| `"indexer"` \| `"kmd"`

Which algod config to return - algod, kmd, or indexer OR a port number

## Returns

[`AlgoClientConfig`](/docs/algokit-utils/typescript/latest/api/types/network-client/interfaces/algoclientconfig/)
