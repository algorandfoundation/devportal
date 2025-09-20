---
title: AssetConfigParams
---

#### _class_ algokit_utils.transactions.transaction_composer.AssetConfigParams

Bases: `_CommonTxnParams`

Parameters for configuring an existing asset.

#### asset*id *: int\_

The ID of the asset

#### manager _: str | None_ _= None_

The address that can change the manager, reserve, clawback, and freeze addresses, defaults to None

#### reserve _: str | None_ _= None_

The address that holds the uncirculated supply, defaults to None

#### freeze _: str | None_ _= None_

The address that can freeze the asset in any account, defaults to None

#### clawback _: str | None_ _= None_

The address that can clawback the asset from any account, defaults to None
