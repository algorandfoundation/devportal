---
title: AssetInformation
sidebar:
  label: AssetInformation
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.assets.asset_manager.AssetInformation

Information about an Algorand Standard Asset (ASA).

#### asset_id _: int_

The ID of the asset

#### creator _: str_

The address of the account that created the asset

#### total _: int_

The total amount of the smallest divisible units that were created of the asset

#### decimals _: int_

The amount of decimal places the asset was created with

#### default_frozen _: bool | None_ _= None_

Whether the asset was frozen by default for all accounts, defaults to None

#### manager _: str | None_ _= None_

The address of the optional account that can manage the configuration of the asset and destroy it,
defaults to None

#### reserve _: str | None_ _= None_

The address of the optional account that holds the reserve (uncirculated supply) units of the asset,
defaults to None

#### freeze _: str | None_ _= None_

The address of the optional account that can be used to freeze or unfreeze holdings of this asset,
defaults to None

#### clawback _: str | None_ _= None_

The address of the optional account that can clawback holdings of this asset from any account,
defaults to None

#### unit_name _: str | None_ _= None_

The optional name of the unit of this asset (e.g. ticker name), defaults to None

#### unit_name_b64 _: bytes | None_ _= None_

The optional name of the unit of this asset as bytes, defaults to None

#### asset_name _: str | None_ _= None_

The optional name of the asset, defaults to None

#### asset_name_b64 _: bytes | None_ _= None_

The optional name of the asset as bytes, defaults to None

#### url _: str | None_ _= None_

The optional URL where more information about the asset can be retrieved, defaults to None

#### url_b64 _: bytes | None_ _= None_

The optional URL where more information about the asset can be retrieved as bytes, defaults to None

#### metadata_hash _: bytes | None_ _= None_

The 32-byte hash of some metadata that is relevant to the asset and/or asset holders, defaults to None
