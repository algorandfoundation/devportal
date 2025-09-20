---
title: AlgoClientConfig
slug: reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/network-client](/reference/algokit-utils-ts/api/modules/types_network_client/) / AlgoClientConfig



[types/network-client](/reference/algokit-utils-ts/api/modules/types_network_client/).AlgoClientConfig

Config for an Algorand SDK client.

## Table of contents

### Properties

- [port](#port)
- [server](#server)
- [token](#token)

## Properties

### port

• `Optional` **port**: `string` \| `number`

The port to use e.g. 4001, 443, etc.

#### Defined in

[src/types/network-client.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L8)

___

### server

• **server**: `string`

Base URL of the server e.g. http://localhost, https://testnet-api.algonode.cloud/, etc.

#### Defined in

[src/types/network-client.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L6)

___

### token

• `Optional` **token**: `string` \| `TokenHeader`

The token to use for API authentication (or undefined if none needed) - can be a string, or an object with the header key => value

#### Defined in

[src/types/network-client.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L10)