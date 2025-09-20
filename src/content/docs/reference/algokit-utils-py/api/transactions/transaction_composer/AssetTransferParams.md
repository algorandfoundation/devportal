---
title: AssetTransferParams
---
#### *class* algokit_utils.transactions.transaction_composer.AssetTransferParams

Bases: `_CommonTxnParams`

Parameters for transferring an asset.

#### asset_id *: int*

The ID of the asset

#### amount *: int*

The amount of the asset to transfer (smallest divisible unit)

#### receiver *: str*

The account to send the asset to

#### clawback_target *: str | None* *= None*

The account to take the asset from, defaults to None

#### close_asset_to *: str | None* *= None*

The account to close the asset to, defaults to None