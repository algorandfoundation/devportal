---
title: "algokit_utils.models.network"
---

<div class="api-ref">

## Classes

| [`AlgoClientNetworkConfig`](#class-algoclientnetworkconfig)   | Connection details for connecting to an {py:class}\`algosdk.v2client.algod.AlgodClient\` or   |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [`AlgoClientConfigs`](#class-algoclientconfigs)               |                                                                                               |

## Module Contents

### *class* AlgoClientNetworkConfig

Connection details for connecting to an {py:class}\`algosdk.v2client.algod.AlgodClient\` or
{py:class}\`algosdk.v2client.indexer.IndexerClient\`

#### server *: str*

URL for the service e.g. http://localhost or https://testnet-api.algonode.cloud

#### token *: str | None* *= None*

API Token to authenticate with the service e.g ‘4001’ or ‘8980’

#### port *: str | int | None* *= None*

#### full_url() → str

Returns the full URL for the service

### *class* AlgoClientConfigs

#### algod_config *: [AlgoClientNetworkConfig](#class-algoclientnetworkconfig)*

#### indexer_config *: [AlgoClientNetworkConfig](#class-algoclientnetworkconfig) | None*

#### kmd_config *: [AlgoClientNetworkConfig](#class-algoclientnetworkconfig) | None*


</div>
