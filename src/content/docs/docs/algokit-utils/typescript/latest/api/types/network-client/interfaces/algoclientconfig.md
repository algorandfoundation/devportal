---
editUrl: false
next: false
prev: false
title: "AlgoClientConfig"
---

Defined in: [src/types/network-client.ts:4](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L4)

Config for an Algorand SDK client.

## Properties

### port?

> `optional` **port?**: `string` \| `number`

Defined in: [src/types/network-client.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L8)

The port to use e.g. 4001, 443, etc.

***

### server

> **server**: `string`

Defined in: [src/types/network-client.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L6)

Base URL of the server e.g. http://localhost, https://testnet-api.algonode.cloud/, etc.

***

### token?

> `optional` **token?**: `string` \| `TokenHeader`

Defined in: [src/types/network-client.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L10)

The token to use for API authentication (or undefined if none needed) - can be a string, or an object with the header key => value
