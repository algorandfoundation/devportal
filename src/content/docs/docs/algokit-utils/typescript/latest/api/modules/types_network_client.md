---
title: types/network-client
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / types/network-client

## Table of contents

### Interfaces

- [AlgoClientConfig](/docs/algokit-utils/typescript/latest/api/interfaces/types_network_client.AlgoClientConfig/)
- [AlgoConfig](/docs/algokit-utils/typescript/latest/api/interfaces/types_network_client.AlgoConfig/)
- [NetworkDetails](/docs/algokit-utils/typescript/latest/api/interfaces/types_network_client.NetworkDetails/)

### Functions

- [genesisIdIsLocalNet](/docs/algokit-utils/typescript/latest/api/modules/types_network_client/#genesisidislocalnet)

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
