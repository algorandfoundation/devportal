---
title: algokit_utils.assets.asset_manager.AssetInformation
---
#### *class* algokit_utils.assets.asset_manager.AssetInformation

Information about an Algorand Standard Asset (ASA).

#### asset_id *: int*

The ID of the asset

#### creator *: str*

The address of the account that created the asset

#### total *: int*

The total amount of the smallest divisible units that were created of the asset

#### decimals *: int*

The amount of decimal places the asset was created with

#### default_frozen *: bool | None* *= None*

Whether the asset was frozen by default for all accounts, defaults to None

#### manager *: str | None* *= None*

The address of the optional account that can manage the configuration of the asset and destroy it,
defaults to None

#### reserve *: str | None* *= None*

The address of the optional account that holds the reserve (uncirculated supply) units of the asset,
defaults to None

#### freeze *: str | None* *= None*

The address of the optional account that can be used to freeze or unfreeze holdings of this asset,
defaults to None

#### clawback *: str | None* *= None*

The address of the optional account that can clawback holdings of this asset from any account,
defaults to None

#### unit_name *: str | None* *= None*

The optional name of the unit of this asset (e.g. ticker name), defaults to None

#### unit_name_b64 *: bytes | None* *= None*

The optional name of the unit of this asset as bytes, defaults to None

#### asset_name *: str | None* *= None*

The optional name of the asset, defaults to None

#### asset_name_b64 *: bytes | None* *= None*

The optional name of the asset as bytes, defaults to None

#### url *: str | None* *= None*

The optional URL where more information about the asset can be retrieved, defaults to None

#### url_b64 *: bytes | None* *= None*

The optional URL where more information about the asset can be retrieved as bytes, defaults to None

#### metadata_hash *: bytes | None* *= None*

The 32-byte hash of some metadata that is relevant to the asset and/or asset holders, defaults to None