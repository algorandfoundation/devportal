---
title: AssetManager
---
#### *class* algokit_utils.assets.asset_manager.AssetManager(algod_client: algosdk.v2client.algod.AlgodClient, new_group: collections.abc.Callable[[], [algokit_utils.transactions.transaction_composer.TransactionComposer](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/transactions/transaction_composer/transactioncomposer/#algokit_utils.transactions.transaction_composer.TransactionComposer)])

A manager for Algorand Standard Assets (ASAs).

* **Parameters:**
  * **algod_client** – An algod client
  * **new_group** – A function that creates a new TransactionComposer transaction group
* **Example:**
  ```pycon
  >>> asset_manager = AssetManager(algod_client)
  ```

#### get_by_id(asset_id: int) → [AssetInformation](/reference/algokit-utils-py/api/assets/asset_manager/assetinformation/#algokit_utils.assets.asset_manager.AssetInformation)

Returns the current asset information for the asset with the given ID.

* **Parameters:**
  **asset_id** – The ID of the asset
* **Returns:**
  The asset information
* **Example:**
  ```pycon
  >>> asset_manager = AssetManager(algod_client)
  >>> asset_info = asset_manager.get_by_id(1234567890)
  ```

#### get_account_information(sender: str | [algokit_utils.models.account.SigningAccount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/account/signingaccount/#algokit_utils.models.account.SigningAccount) | algosdk.atomic_transaction_composer.TransactionSigner, asset_id: int) → [AccountAssetInformation](/reference/algokit-utils-py/api/assets/asset_manager/accountassetinformation/#algokit_utils.assets.asset_manager.AccountAssetInformation)

Returns the given sender account’s asset holding for a given asset.

* **Parameters:**
  * **sender** – The address of the sender/account to look up
  * **asset_id** – The ID of the asset to return a holding for
* **Returns:**
  The account asset holding information
* **Example:**
  ```pycon
  >>> asset_manager = AssetManager(algod_client)
  >>> account_asset_info = asset_manager.get_account_information(sender, asset_id)
  ```

#### bulk_opt_in(account: str, asset_ids: list[int], signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, rekey_to: str | None = None, note: bytes | None = None, lease: bytes | None = None, static_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, extra_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, max_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, validity_window: int | None = None, first_valid_round: int | None = None, last_valid_round: int | None = None, send_params: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/transaction/sendparams/#algokit_utils.models.transaction.SendParams) | None = None) → list[[BulkAssetOptInOutResult](/reference/algokit-utils-py/api/assets/asset_manager/bulkassetoptinoutresult/#algokit_utils.assets.asset_manager.BulkAssetOptInOutResult)]

Opt an account in to a list of Algorand Standard Assets.

* **Parameters:**
  * **account** – The account to opt-in
  * **asset_ids** – The list of asset IDs to opt-in to
  * **signer** – The signer to use for the transaction, defaults to None
  * **rekey_to** – The address to rekey the account to, defaults to None
  * **note** – The note to include in the transaction, defaults to None
  * **lease** – The lease to include in the transaction, defaults to None
  * **static_fee** – The static fee to include in the transaction, defaults to None
  * **extra_fee** – The extra fee to include in the transaction, defaults to None
  * **max_fee** – The maximum fee to include in the transaction, defaults to None
  * **validity_window** – The validity window to include in the transaction, defaults to None
  * **first_valid_round** – The first valid round to include in the transaction, defaults to None
  * **last_valid_round** – The last valid round to include in the transaction, defaults to None
  * **send_params** – The send parameters to use for the transaction, defaults to None
* **Returns:**
  An array of records matching asset ID to transaction ID of the opt in
* **Example:**
  ```pycon
  >>> asset_manager = AssetManager(algod_client)
  >>> results = asset_manager.bulk_opt_in(account, asset_ids)
  ```

#### bulk_opt_out(\*, account: str, asset_ids: list[int], ensure_zero_balance: bool = True, signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, rekey_to: str | None = None, note: bytes | None = None, lease: bytes | None = None, static_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, extra_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, max_fee: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None, validity_window: int | None = None, first_valid_round: int | None = None, last_valid_round: int | None = None, send_params: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/transaction/sendparams/#algokit_utils.models.transaction.SendParams) | None = None) → list[[BulkAssetOptInOutResult](/reference/algokit-utils-py/api/assets/asset_manager/bulkassetoptinoutresult/#algokit_utils.assets.asset_manager.BulkAssetOptInOutResult)]

Opt an account out of a list of Algorand Standard Assets.

* **Parameters:**
  * **account** – The account to opt-out
  * **asset_ids** – The list of asset IDs to opt-out of
  * **ensure_zero_balance** – Whether to check if the account has a zero balance first, defaults to True
  * **signer** – The signer to use for the transaction, defaults to None
  * **rekey_to** – The address to rekey the account to, defaults to None
  * **note** – The note to include in the transaction, defaults to None
  * **lease** – The lease to include in the transaction, defaults to None
  * **static_fee** – The static fee to include in the transaction, defaults to None
  * **extra_fee** – The extra fee to include in the transaction, defaults to None
  * **max_fee** – The maximum fee to include in the transaction, defaults to None
  * **validity_window** – The validity window to include in the transaction, defaults to None
  * **first_valid_round** – The first valid round to include in the transaction, defaults to None
  * **last_valid_round** – The last valid round to include in the transaction, defaults to None
  * **send_params** – The send parameters to use for the transaction, defaults to None
* **Raises:**
  **ValueError** – If ensure_zero_balance is True and account has non-zero balance or is not opted in
* **Returns:**
  An array of records matching asset ID to transaction ID of the opt out
* **Example:**
  ```pycon
  >>> asset_manager = AssetManager(algod_client)
  >>> results = asset_manager.bulk_opt_out(account, asset_ids)
  ```