---
title: 'algokit_utils.models.network'
---

<div class="api-ref">

# algokit_utils.models.network

## Classes

| [`AlgoClientNetworkConfig`](#algokit_utils.models.network.AlgoClientNetworkConfig) | Connection details for connecting to an {py:class}\`algokit_algod_client.AlgodClient\` or |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`AlgoClientConfigs`](#algokit_utils.models.network.AlgoClientConfigs)             |                                                                                           |

## Module Contents

### _class_ AlgoClientNetworkConfig

Connection details for connecting to an {py:class}\`algokit_algod_client.AlgodClient\` or
{py:class}\`algokit_indexer_client.IndexerClient\` instance.

#### server _: str_

URL for the service e.g. http://localhost or https://testnet-api.algonode.cloud

#### token _: str | None_ _= None_

API Token to authenticate with the service e.g ‘4001’ or ‘8980’

#### port _: str | int | None_ _= None_

#### full_url() → str

Returns the full URL for the service

### _class_ AlgoClientConfigs

#### algod*config *: [AlgoClientNetworkConfig](#algokit_utils.models.network.AlgoClientNetworkConfig)\_

#### indexer*config *: [AlgoClientNetworkConfig](#algokit_utils.models.network.AlgoClientNetworkConfig) | None\_

#### kmd*config *: [AlgoClientNetworkConfig](#algokit_utils.models.network.AlgoClientNetworkConfig) | None\_

</div>
