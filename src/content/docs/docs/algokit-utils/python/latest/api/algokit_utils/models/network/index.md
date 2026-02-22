---
title: "algokit_utils.models.network"
---

<div class="api-ref">

# algokit_utils.models.network

## Classes

| [`AlgoClientNetworkConfig`](#algokit_utils.models.network.AlgoClientNetworkConfig)   | Connection details for connecting to an {py:class}\`algokit_algod_client.AlgodClient\` or   |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`AlgoClientConfigs`](#algokit_utils.models.network.AlgoClientConfigs)               |                                                                                             |

## Module Contents

### *class* AlgoClientNetworkConfig

Connection details for connecting to an {py:class}\`algokit_algod_client.AlgodClient\` or
{py:class}\`algokit_indexer_client.IndexerClient\` instance.

#### server *: str*

URL for the service e.g. http://localhost or https://testnet-api.algonode.cloud

#### token *: str | None* *= None*

API Token to authenticate with the service e.g ‘4001’ or ‘8980’

#### port *: str | int | None* *= None*

#### full_url() → str

Returns the full URL for the service

### *class* AlgoClientConfigs

#### algod_config *: [AlgoClientNetworkConfig](#algokit_utils.models.network.AlgoClientNetworkConfig)*

#### indexer_config *: [AlgoClientNetworkConfig](#algokit_utils.models.network.AlgoClientNetworkConfig) | None*

#### kmd_config *: [AlgoClientNetworkConfig](#algokit_utils.models.network.AlgoClientNetworkConfig) | None*

</div>
