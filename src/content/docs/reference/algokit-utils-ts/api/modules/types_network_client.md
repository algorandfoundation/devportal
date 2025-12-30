---
title: types/network-client
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/network-client

## Table of contents

### Interfaces

- [AlgoClientConfig](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/)
- [AlgoConfig](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoconfig/)
- [NetworkDetails](/reference/algokit-utils-ts/api/interfaces/types_network_clientnetworkdetails/)

### Functions

- [genesisIdIsLocalNet](/reference/algokit-utils-ts/api/modules/types_network_client/#genesisidislocalnet)

## Functions

### genesisIdIsLocalNet

▸ **genesisIdIsLocalNet**(`genesisId`): `boolean`

Returns true if the given network genesisId is associated with a LocalNet network.

#### Parameters

| Name        | Type     | Description            |
| :---------- | :------- | :--------------------- |
| `genesisId` | `string` | The network genesis ID |

#### Returns

`boolean`

Whether the given genesis ID is associated with a LocalNet network

#### Defined in

[src/types/network-client.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/network-client.ts#L42)
