---
title: algokit_utils.transactions.transaction_composer.AssetCreateParams
---

#### _class_ algokit_utils.transactions.transaction_composer.AssetCreateParams

Bases: `_CommonTxnParams`

Parameters for creating a new asset.

#### total _: int_

The total amount of the smallest divisible unit to create

#### asset*name *: str | None\_ _= None_

The full name of the asset

#### unit*name *: str | None\_ _= None_

The short ticker name for the asset

#### url _: str | None_ _= None_

The metadata URL for the asset

#### decimals _: int | None_ _= None_

The amount of decimal places the asset should have

#### default*frozen *: bool | None\_ _= None_

Whether the asset is frozen by default in the creator address

#### manager _: str | None_ _= None_

The address that can change the manager, reserve, clawback, and freeze addresses

#### reserve _: str | None_ _= None_

The address that holds the uncirculated supply

#### freeze _: str | None_ _= None_

The address that can freeze the asset in any account

#### clawback _: str | None_ _= None_

The address that can clawback the asset from any account

#### metadata*hash *: bytes | None\_ _= None_

Hash of the metadata contained in the metadata URL
