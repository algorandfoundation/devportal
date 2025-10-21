---
title: assets.asset_manager
sidebar:
  label: Index
  order: 0
---

## Classes

| [`AccountAssetInformation`](#algokit_utils.assets.asset_manager.AccountAssetInformation) | Information about an account's holding of a particular asset.                                   |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [`AssetInformation`](#algokit_utils.assets.asset_manager.AssetInformation)               | Information about an Algorand Standard Asset (ASA).                                             |
| [`BulkAssetOptInOutResult`](#algokit_utils.assets.asset_manager.BulkAssetOptInOutResult) | Result from performing a bulk opt-in or bulk opt-out for an account against a series of assets. |
| [`AssetManager`](#algokit_utils.assets.asset_manager.AssetManager)                       | A manager for Algorand Standard Assets (ASAs).                                                  |

## Module Contents

### _class_ algokit_utils.assets.asset_manager.AccountAssetInformation

Information about an account’s holding of a particular asset.

#### asset_id _: int_

The ID of the asset

#### balance _: int_

The amount of the asset held by the account

#### frozen _: bool_

Whether the asset is frozen for this account

#### round _: int_

The round this information was retrieved at

### _class_ algokit_utils.assets.asset_manager.AssetInformation

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

### _class_ algokit_utils.assets.asset_manager.BulkAssetOptInOutResult

Result from performing a bulk opt-in or bulk opt-out for an account against a series of assets.

- **Variables:**
  - **asset_id** – The ID of the asset opted into / out of
  - **transaction_id** – The transaction ID of the resulting opt in / out

#### asset_id _: int_

The ID of the asset opted into / out of

#### transaction_id _: str_

The transaction ID of the resulting opt in / out

### _class_ algokit_utils.assets.asset_manager.AssetManager(algod_client: algosdk.v2client.algod.AlgodClient, new_group: collections.abc.Callable[[], [algokit_utils.transactions.transaction_composer.TransactionComposer](/reference/algokit-utils-py/api/transactions/transaction_composer/#algokit_utils.transactions.transaction_composer.TransactionComposer)])

A manager for Algorand Standard Assets (ASAs).

- **Parameters:**
  - **algod_client** – An algod client
  - **new_group** – A function that creates a new TransactionComposer transaction group
- **Example:**
  ```python
  asset_manager = AssetManager(algod_client)
  ```

#### get_by_id(asset_id: int) → [AssetInformation](#algokit_utils.assets.asset_manager.AssetInformation)

Returns the current asset information for the asset with the given ID.

- **Parameters:**
  **asset_id** – The ID of the asset
- **Returns:**
  The asset information
- **Example:**
  ```python
  asset_manager = AssetManager(algod_client)
  asset_info = asset_manager.get_by_id(1234567890)
  ```

#### get_account_information(sender: str | [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/models/account/#algokit_utils.models.account.SigningAccount) | algosdk.atomic_transaction_composer.TransactionSigner, asset_id: int) → [AccountAssetInformation](#algokit_utils.assets.asset_manager.AccountAssetInformation)

Returns the given sender account’s asset holding for a given asset.

- **Parameters:**
  - **sender** – The address of the sender/account to look up
  - **asset_id** – The ID of the asset to return a holding for
- **Returns:**
  The account asset holding information
- **Example:**
  ```python
  asset_manager = AssetManager(algod_client)
  account_asset_info = asset_manager.get_account_information(sender, asset_id)
  ```

#### bulk_opt_in(account: str, asset_ids: list[int], signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, rekey_to: str | None = None, note: bytes | None = None, lease: bytes | None = None, static_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/#algokit_utils.models.amount.AlgoAmount) | None = None, extra_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/#algokit_utils.models.amount.AlgoAmount) | None = None, max_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/#algokit_utils.models.amount.AlgoAmount) | None = None, validity_window: int | None = None, first_valid_round: int | None = None, last_valid_round: int | None = None, send_params: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/models/transaction/#algokit_utils.models.transaction.SendParams) | None = None) → list[[BulkAssetOptInOutResult](#algokit_utils.assets.asset_manager.BulkAssetOptInOutResult)]

Opt an account in to a list of Algorand Standard Assets.

- **Parameters:**
  - **account** – The account to opt-in
  - **asset_ids** – The list of asset IDs to opt-in to
  - **signer** – The signer to use for the transaction, defaults to None
  - **rekey_to** – The address to rekey the account to, defaults to None
  - **note** – The note to include in the transaction, defaults to None
  - **lease** – The lease to include in the transaction, defaults to None
  - **static_fee** – The static fee to include in the transaction, defaults to None
  - **extra_fee** – The extra fee to include in the transaction, defaults to None
  - **max_fee** – The maximum fee to include in the transaction, defaults to None
  - **validity_window** – The validity window to include in the transaction, defaults to None
  - **first_valid_round** – The first valid round to include in the transaction, defaults to None
  - **last_valid_round** – The last valid round to include in the transaction, defaults to None
  - **send_params** – The send parameters to use for the transaction, defaults to None
- **Returns:**
  An array of records matching asset ID to transaction ID of the opt in
- **Example:**
  ```python
  asset_manager = AssetManager(algod_client)
  results = asset_manager.bulk_opt_in(account, asset_ids)
  ```

#### bulk_opt_out(\*, account: str, asset_ids: list[int], ensure_zero_balance: bool = True, signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, rekey_to: str | None = None, note: bytes | None = None, lease: bytes | None = None, static_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/#algokit_utils.models.amount.AlgoAmount) | None = None, extra_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/#algokit_utils.models.amount.AlgoAmount) | None = None, max_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/#algokit_utils.models.amount.AlgoAmount) | None = None, validity_window: int | None = None, first_valid_round: int | None = None, last_valid_round: int | None = None, send_params: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/models/transaction/#algokit_utils.models.transaction.SendParams) | None = None) → list[[BulkAssetOptInOutResult](#algokit_utils.assets.asset_manager.BulkAssetOptInOutResult)]

Opt an account out of a list of Algorand Standard Assets.

- **Parameters:**
  - **account** – The account to opt-out
  - **asset_ids** – The list of asset IDs to opt-out of
  - **ensure_zero_balance** – Whether to check if the account has a zero balance first, defaults to True
  - **signer** – The signer to use for the transaction, defaults to None
  - **rekey_to** – The address to rekey the account to, defaults to None
  - **note** – The note to include in the transaction, defaults to None
  - **lease** – The lease to include in the transaction, defaults to None
  - **static_fee** – The static fee to include in the transaction, defaults to None
  - **extra_fee** – The extra fee to include in the transaction, defaults to None
  - **max_fee** – The maximum fee to include in the transaction, defaults to None
  - **validity_window** – The validity window to include in the transaction, defaults to None
  - **first_valid_round** – The first valid round to include in the transaction, defaults to None
  - **last_valid_round** – The last valid round to include in the transaction, defaults to None
  - **send_params** – The send parameters to use for the transaction, defaults to None
- **Raises:**
  **ValueError** – If ensure_zero_balance is True and account has non-zero balance or is not opted in
- **Returns:**
  An array of records matching asset ID to transaction ID of the opt out
- **Example:**
  ```python
  asset_manager = AssetManager(algod_client)
  results = asset_manager.bulk_opt_out(account, asset_ids)
  ```
