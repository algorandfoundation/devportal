---
editUrl: false
next: false
prev: false
title: "isLocalNet"
---

> **isLocalNet**(`algod`): `Promise`\<`boolean`\>

Defined in: [src/localnet/is-localnet.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/localnet/is-localnet.ts#L9)

:::caution[Deprecated]
Use `await algorand.client.isLocalNet()` or `await new ClientManager({ algod }).isLocalNet()` instead.

Returns true if the algod client is pointing to a LocalNet Algorand network
:::

## Parameters

### algod

`AlgodClient`

## Returns

`Promise`\<`boolean`\>
