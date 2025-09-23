---
title: algokit_utils.transactions.transaction_composer.AssetFreezeParams
---
#### *class* algokit_utils.transactions.transaction_composer.AssetFreezeParams

Bases: `_CommonTxnParams`

Parameters for freezing an asset.

#### asset_id *: int*

The ID of the asset

#### account *: str*

The account to freeze or unfreeze

#### frozen *: bool*

Whether the assets in the account should be frozen