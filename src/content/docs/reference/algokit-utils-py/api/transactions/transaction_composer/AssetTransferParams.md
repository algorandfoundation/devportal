---
title: AssetTransferParams
---

#### _class_ algokit_utils.transactions.transaction_composer.AssetTransferParams

Bases: `_CommonTxnParams`

Parameters for transferring an asset.

#### asset*id *: int\_

The ID of the asset

#### amount _: int_

The amount of the asset to transfer (smallest divisible unit)

#### receiver _: str_

The account to send the asset to

#### clawback*target *: str | None\_ _= None_

The account to take the asset from, defaults to None

#### close*asset_to *: str | None\_ _= None_

The account to close the asset to, defaults to None
