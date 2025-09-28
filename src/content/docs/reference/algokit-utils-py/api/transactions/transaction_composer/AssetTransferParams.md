---
title: AssetTransferParams
sidebar:
  label: AssetTransferParams
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.transactions.transaction_composer.AssetTransferParams

Bases: `_CommonTxnParams`

Parameters for transferring an asset.

#### asset_id _: int_

The ID of the asset

#### amount _: int_

The amount of the asset to transfer (smallest divisible unit)

#### receiver _: str_

The account to send the asset to

#### clawback_target _: str | None_ _= None_

The account to take the asset from, defaults to None

#### close_asset_to _: str | None_ _= None_

The account to close the asset to, defaults to None
