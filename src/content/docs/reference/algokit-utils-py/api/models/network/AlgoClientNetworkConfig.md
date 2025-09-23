---
title: algokit_utils.models.network.AlgoClientNetworkConfig
---

#### _class_ algokit_utils.models.network.AlgoClientNetworkConfig

Connection details for connecting to an {py:class}\`algosdk.v2client.algod.AlgodClient\` or
{py:class}\`algosdk.v2client.indexer.IndexerClient\`

#### server _: str_

URL for the service e.g. http://localhost or https://testnet-api.algonode.cloud

#### token _: str | None_ _= None_

API Token to authenticate with the service e.g ‘4001’ or ‘8980’

#### port _: str | int | None_ _= None_

#### full_url() → str

Returns the full URL for the service
