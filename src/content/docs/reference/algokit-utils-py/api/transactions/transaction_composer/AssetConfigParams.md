---
title: algokit_utils.transactions.transaction_composer.AssetConfigParams
---
#### *class* algokit_utils.transactions.transaction_composer.AssetConfigParams

Bases: `_CommonTxnParams`

Parameters for configuring an existing asset.

#### asset_id *: int*

The ID of the asset

#### manager *: str | None* *= None*

The address that can change the manager, reserve, clawback, and freeze addresses, defaults to None

#### reserve *: str | None* *= None*

The address that holds the uncirculated supply, defaults to None

#### freeze *: str | None* *= None*

The address that can freeze the asset in any account, defaults to None

#### clawback *: str | None* *= None*

The address that can clawback the asset from any account, defaults to None