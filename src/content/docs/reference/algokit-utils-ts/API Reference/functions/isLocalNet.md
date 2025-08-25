---
editUrl: false
next: false
prev: false
title: "isLocalNet"
---

> **isLocalNet**(`algod`): `Promise`\<`boolean`\>

Defined in: [src/localnet/is-localnet.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/localnet/is-localnet.ts#L9)

:::caution[Deprecated]
Use `await algorand.client.isLocalNet()` or `await new ClientManager({ algod }).isLocalNet()` instead.

Returns true if the algod client is pointing to a LocalNet Algorand network
:::

## Parameters

### algod

`AlgodClient`

## Returns

`Promise`\<`boolean`\>
