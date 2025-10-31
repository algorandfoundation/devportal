---
title: AlgoSdkClients
sidebar:
  label: AlgoSdkClients
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.clients.client_manager.AlgoSdkClients(algod: algosdk.v2client.algod.AlgodClient, indexer: algosdk.v2client.indexer.IndexerClient | None = None, kmd: algosdk.kmd.KMDClient | None = None)

Container for Algorand SDK client instances.

Holds references to Algod, Indexer and KMD clients.

- **Parameters:**
  - **algod** – Algod client instance
  - **indexer** – Optional Indexer client instance
  - **kmd** – Optional KMD client instance

#### algod

#### indexer _= None_

#### kmd _= None_
