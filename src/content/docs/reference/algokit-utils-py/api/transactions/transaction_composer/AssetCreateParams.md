---
title: algokit_utils.transactions.transaction_composer.AssetCreateParams
---
#### *class* algokit_utils.transactions.transaction_composer.AssetCreateParams

Bases: `_CommonTxnParams`

Parameters for creating a new asset.

#### total *: int*

The total amount of the smallest divisible unit to create

#### asset_name *: str | None* *= None*

The full name of the asset

#### unit_name *: str | None* *= None*

The short ticker name for the asset

#### url *: str | None* *= None*

The metadata URL for the asset

#### decimals *: int | None* *= None*

The amount of decimal places the asset should have

#### default_frozen *: bool | None* *= None*

Whether the asset is frozen by default in the creator address

#### manager *: str | None* *= None*

The address that can change the manager, reserve, clawback, and freeze addresses

#### reserve *: str | None* *= None*

The address that holds the uncirculated supply

#### freeze *: str | None* *= None*

The address that can freeze the asset in any account

#### clawback *: str | None* *= None*

The address that can clawback the asset from any account

#### metadata_hash *: bytes | None* *= None*

Hash of the metadata contained in the metadata URL