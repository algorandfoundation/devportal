---
editUrl: false
next: false
prev: false
title: "AlgoClientConfig"
---

Defined in: [src/network-client.ts:2](https://github.com/larkiny/algokit-utils-ts/blob/main/src/network-client.ts#L2)

Config for an Algorand SDK client.

## Properties

### port?

> `optional` **port**: `string` \| `number`

Defined in: [src/network-client.ts:6](https://github.com/larkiny/algokit-utils-ts/blob/main/src/network-client.ts#L6)

The port to use e.g. 4001, 443, etc.

***

### server

> **server**: `string`

Defined in: [src/network-client.ts:4](https://github.com/larkiny/algokit-utils-ts/blob/main/src/network-client.ts#L4)

Base URL of the server e.g. http://localhost, https://testnet-api.algonode.cloud/, etc.

***

### token?

> `optional` **token**: `string` \| \{\[`name`: `string`\]: `string`; \}

Defined in: [src/network-client.ts:8](https://github.com/larkiny/algokit-utils-ts/blob/main/src/network-client.ts#L8)

The token to use for API authentication (or undefined if none needed) - can be a string, or an object with the header key => value
