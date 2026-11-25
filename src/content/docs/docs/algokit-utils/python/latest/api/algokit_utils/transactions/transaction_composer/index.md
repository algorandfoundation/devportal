---
title: "algokit_utils.transactions.transaction_composer"
---

<div class="api-ref">

## Attributes

| [`ErrorTransformer`](#errortransformer)                                 |    |
|-------------------------------------------------------------------------------------------------------------------------|----|
| [`MethodCallParams`](#methodcallparams)                                 |    |
| [`AppMethodCallTransactionArgument`](#appmethodcalltransactionargument) |    |
| [`TxnParams`](#txnparams)                                               |    |

## Classes

| [`PaymentParams`](#class-paymentparams)                                               | Parameters for a payment transaction.                                |
|---------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`AssetCreateParams`](#class-assetcreateparams)                                       | Parameters for creating a new asset.                                 |
| [`AssetConfigParams`](#class-assetconfigparams)                                       | Parameters for configuring an existing asset.                        |
| [`AssetFreezeParams`](#class-assetfreezeparams)                                       | Parameters for freezing an asset.                                    |
| [`AssetDestroyParams`](#class-assetdestroyparams)                                     | Parameters for destroying an asset.                                  |
| [`OnlineKeyRegistrationParams`](#class-onlinekeyregistrationparams)                   | Parameters for online key registration.                              |
| [`OfflineKeyRegistrationParams`](#class-offlinekeyregistrationparams)                 | Parameters for offline key registration.                             |
| [`AssetTransferParams`](#class-assettransferparams)                                   | Parameters for transferring an asset.                                |
| [`AssetOptInParams`](#class-assetoptinparams)                                         | Parameters for opting into an asset.                                 |
| [`AssetOptOutParams`](#class-assetoptoutparams)                                       | Parameters for opting out of an asset.                               |
| [`AppCallParams`](#class-appcallparams)                                               | Parameters for calling an application.                               |
| [`AppCreateSchema`](#class-appcreateschema)                                           | dict() -> new empty dictionary                                       |
| [`AppCreateParams`](#class-appcreateparams)                                           | Parameters for creating an application.                              |
| [`AppUpdateParams`](#class-appupdateparams)                                           | Parameters for updating an application.                              |
| [`AppDeleteParams`](#class-appdeleteparams)                                           | Parameters for deleting an application.                              |
| [`AppCallMethodCallParams`](#class-appcallmethodcallparams)                           | Parameters for a regular ABI method call.                            |
| [`AppCreateMethodCallParams`](#class-appcreatemethodcallparams)                       | Parameters for an ABI method call that creates an application.       |
| [`AppUpdateMethodCallParams`](#class-appupdatemethodcallparams)                       | Parameters for an ABI method call that updates an application.       |
| [`AppDeleteMethodCallParams`](#class-appdeletemethodcallparams)                       | Parameters for an ABI method call that deletes an application.       |
| [`BuiltTransactions`](#class-builttransactions)                                       | Set of transactions built by TransactionComposer.                    |
| [`TransactionComposerBuildResult`](#class-transactioncomposerbuildresult)             | Result of building transactions with TransactionComposer.            |
| [`SendAtomicTransactionComposerResults`](#class-sendatomictransactioncomposerresults) | Results from sending an AtomicTransactionComposer transaction group. |
| [`TransactionComposer`](#class-transactioncomposer)                                   | A class for composing and managing Algorand transactions.            |

## Functions

| [`calculate_extra_program_pages`](#calculate_extra_program_pagesapproval-bytes--none-clear-bytes--none--int)(→ int)     | Calculate minimum number of extra_pages required for provided approval and clear programs                  |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [`populate_app_call_resources`](#populate_app_call_resourcesatc-algosdkatomic_transaction_composeratomictransactioncomposer-algod-algosdkv2clientalgodalgodclient--algosdkatomic_transaction_composeratomictransactioncomposer)(...)           | Populate application call resources based on simulation results.                                           |
| [`prepare_group_for_sending`](#prepare_group_for_sendingatc-algosdkatomic_transaction_composeratomictransactioncomposer-algod-algosdkv2clientalgodalgodclient-populate_app_call_resources-bool--none--none-cover_app_call_inner_transaction_fees-bool--none--none-additional_atc_context-additionalatccontext--none--none--algosdkatomic_transaction_composeratomictransactioncomposer)(...)               | Take an existing Atomic Transaction Composer and return a new one with changes applied to the transactions |
| [`send_atomic_transaction_composer`](#send_atomic_transaction_composeratc-algosdkatomic_transaction_composeratomictransactioncomposer-algod-algosdkv2clientalgodalgodclient--max_rounds_to_wait-int--none--5-skip_waiting-bool--false-suppress_log-bool--none--none-populate_app_call_resources-bool--none--none-cover_app_call_inner_transaction_fees-bool--none--none-additional_atc_context-additionalatccontext--none--none--sendatomictransactioncomposerresults)(...) | Send an AtomicTransactionComposer transaction group.                                                       |

## Module Contents

### ErrorTransformer

### *class* PaymentParams

Bases: `_CommonTxnParams`

Parameters for a payment transaction.

#### receiver *: str*

The account that will receive the ALGO

#### amount *: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#class-algoamount)*

Amount to send

#### close_remainder_to *: str | None* *= None*

If given, close the sender account and send the remaining balance to this address, defaults to None

### *class* AssetCreateParams

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

### *class* AssetConfigParams

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

### *class* AssetFreezeParams

Bases: `_CommonTxnParams`

Parameters for freezing an asset.

#### asset_id *: int*

The ID of the asset

#### account *: str*

The account to freeze or unfreeze

#### frozen *: bool*

Whether the assets in the account should be frozen

### *class* AssetDestroyParams

Bases: `_CommonTxnParams`

Parameters for destroying an asset.

#### asset_id *: int*

The ID of the asset

### *class* OnlineKeyRegistrationParams

Bases: `_CommonTxnParams`

Parameters for online key registration.

#### vote_key *: str*

The root participation public key

#### selection_key *: str*

The VRF public key

#### vote_first *: int*

The first round that the participation key is valid

#### vote_last *: int*

The last round that the participation key is valid

#### vote_key_dilution *: int*

The dilution for the 2-level participation key

#### state_proof_key *: bytes | None* *= None*

The 64 byte state proof public key commitment, defaults to None

### *class* OfflineKeyRegistrationParams

Bases: `_CommonTxnParams`

Parameters for offline key registration.

#### prevent_account_from_ever_participating_again *: bool*

Whether to prevent the account from ever participating again

### *class* AssetTransferParams

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

### *class* AssetOptInParams

Bases: `_CommonTxnParams`

Parameters for opting into an asset.

#### asset_id *: int*

The ID of the asset

### *class* AssetOptOutParams

Bases: `_CommonTxnParams`

Parameters for opting out of an asset.

#### asset_id *: int*

The ID of the asset

#### creator *: str*

The creator address of the asset

### *class* AppCallParams

Bases: `_CommonTxnParams`

Parameters for calling an application.

#### on_complete *: algosdk.transaction.OnComplete*

The OnComplete action, defaults to None

#### app_id *: int | None* *= None*

The ID of the application, defaults to None

#### approval_program *: str | bytes | None* *= None*

The program to execute for all OnCompletes other than ClearState, defaults to None

#### clear_state_program *: str | bytes | None* *= None*

The program to execute for ClearState OnComplete, defaults to None

#### schema *: dict[str, int] | None* *= None*

The state schema for the app, defaults to None

#### args *: list[bytes] | None* *= None*

Application arguments, defaults to None

#### account_references *: list[str] | None* *= None*

Account references, defaults to None

#### app_references *: list[int] | None* *= None*

App references, defaults to None

#### asset_references *: list[int] | None* *= None*

Asset references, defaults to None

#### extra_pages *: int | None* *= None*

Number of extra pages required for the programs, defaults to None

#### box_references *: list[[BoxReference](/docs/algokit-utils/python/latest/api/algokit_utils/models/state/#class-boxreference) | BoxIdentifier] | None* *= None*

Box references, defaults to None

### *class* AppCreateSchema

Bases: `TypedDict`

dict() -> new empty dictionary
dict(mapping) -> new dictionary initialized from a mapping object’s

> (key, value) pairs

dict(iterable) -> new dictionary initialized as if via:
: d = {}
  for k, v in iterable:
  <br/>
  > d[k] = v

dict(

```
**
```

kwargs) -> new dictionary initialized with the name=value pairs
: in the keyword argument list.  For example:  dict(one=1, two=2)

#### global_ints *: int*

The number of global ints in the schema

#### global_byte_slices *: int*

The number of global byte slices in the schema

#### local_ints *: int*

The number of local ints in the schema

#### local_byte_slices *: int*

The number of local byte slices in the schema

### *class* AppCreateParams

Bases: `_CommonTxnParams`

Parameters for creating an application.

#### approval_program *: str | bytes*

The program to execute for all OnCompletes other than ClearState

#### clear_state_program *: str | bytes*

The program to execute for ClearState OnComplete

#### schema *: [AppCreateSchema](#class-appcreateschema) | None* *= None*

The state schema for the app, defaults to None

#### on_complete *: algosdk.transaction.OnComplete | None* *= None*

The OnComplete action, defaults to None

#### args *: list[bytes] | None* *= None*

Application arguments, defaults to None

#### account_references *: list[str] | None* *= None*

Account references, defaults to None

#### app_references *: list[int] | None* *= None*

App references, defaults to None

#### asset_references *: list[int] | None* *= None*

Asset references, defaults to None

#### box_references *: list[[BoxReference](/docs/algokit-utils/python/latest/api/algokit_utils/models/state/#class-boxreference) | BoxIdentifier] | None* *= None*

Box references, defaults to None

#### extra_program_pages *: int | None* *= None*

Number of extra pages required for the programs, defaults to None

### *class* AppUpdateParams

Bases: `_CommonTxnParams`

Parameters for updating an application.

#### app_id *: int*

The ID of the application

#### approval_program *: str | bytes*

The program to execute for all OnCompletes other than ClearState

#### clear_state_program *: str | bytes*

The program to execute for ClearState OnComplete

#### args *: list[bytes] | None* *= None*

Application arguments, defaults to None

#### account_references *: list[str] | None* *= None*

Account references, defaults to None

#### app_references *: list[int] | None* *= None*

App references, defaults to None

#### asset_references *: list[int] | None* *= None*

Asset references, defaults to None

#### box_references *: list[[BoxReference](/docs/algokit-utils/python/latest/api/algokit_utils/models/state/#class-boxreference) | BoxIdentifier] | None* *= None*

Box references, defaults to None

#### on_complete *: algosdk.transaction.OnComplete | None* *= None*

The OnComplete action, defaults to None

### *class* AppDeleteParams

Bases: `_CommonTxnParams`

Parameters for deleting an application.

#### app_id *: int*

The ID of the application

#### args *: list[bytes] | None* *= None*

Application arguments, defaults to None

#### account_references *: list[str] | None* *= None*

Account references, defaults to None

#### app_references *: list[int] | None* *= None*

App references, defaults to None

#### asset_references *: list[int] | None* *= None*

Asset references, defaults to None

#### box_references *: list[[BoxReference](/docs/algokit-utils/python/latest/api/algokit_utils/models/state/#class-boxreference) | BoxIdentifier] | None* *= None*

Box references, defaults to None

#### on_complete *: algosdk.transaction.OnComplete*

The OnComplete action, defaults to DeleteApplicationOC

### *class* AppCallMethodCallParams

Bases: `_BaseAppMethodCall`

Parameters for a regular ABI method call.

#### app_id *: int*

The ID of the application

#### on_complete *: algosdk.transaction.OnComplete | None* *= None*

The OnComplete action, defaults to None

### *class* AppCreateMethodCallParams

Bases: `_BaseAppMethodCall`

Parameters for an ABI method call that creates an application.

#### approval_program *: str | bytes*

The program to execute for all OnCompletes other than ClearState

#### clear_state_program *: str | bytes*

The program to execute for ClearState OnComplete

#### schema *: [AppCreateSchema](#class-appcreateschema) | None* *= None*

The state schema for the app, defaults to None

#### on_complete *: algosdk.transaction.OnComplete | None* *= None*

The OnComplete action (cannot be ClearState), defaults to None

#### extra_program_pages *: int | None* *= None*

Number of extra pages required for the programs, defaults to None

### *class* AppUpdateMethodCallParams

Bases: `_BaseAppMethodCall`

Parameters for an ABI method call that updates an application.

#### app_id *: int*

The ID of the application

#### approval_program *: str | bytes*

The program to execute for all OnCompletes other than ClearState

#### clear_state_program *: str | bytes*

The program to execute for ClearState OnComplete

#### on_complete *: algosdk.transaction.OnComplete*

The OnComplete action

### *class* AppDeleteMethodCallParams

Bases: `_BaseAppMethodCall`

Parameters for an ABI method call that deletes an application.

#### app_id *: int*

The ID of the application

#### on_complete *: algosdk.transaction.OnComplete*

The OnComplete action

### MethodCallParams

### AppMethodCallTransactionArgument

### TxnParams

### *class* BuiltTransactions

Set of transactions built by TransactionComposer.

#### transactions *: list[algosdk.transaction.Transaction]*

The built transactions

#### method_calls *: dict[int, algosdk.abi.Method]*

Map of transaction index to ABI method

#### signers *: dict[int, algosdk.atomic_transaction_composer.TransactionSigner]*

Map of transaction index to TransactionSigner

### *class* TransactionComposerBuildResult

Result of building transactions with TransactionComposer.

#### atc *: algosdk.atomic_transaction_composer.AtomicTransactionComposer*

The AtomicTransactionComposer instance

#### transactions *: list[algosdk.atomic_transaction_composer.TransactionWithSigner]*

The list of transactions with signers

#### method_calls *: dict[int, algosdk.abi.Method]*

Map of transaction index to ABI method

### *class* SendAtomicTransactionComposerResults

Results from sending an AtomicTransactionComposer transaction group.

#### group_id *: str*

The group ID if this was a transaction group

#### confirmations *: list[algosdk.v2client.algod.AlgodResponseType]*

The confirmation info for each transaction

#### tx_ids *: list[str]*

The transaction IDs that were sent

#### transactions *: list[[TransactionWrapper](/docs/algokit-utils/python/latest/api/algokit_utils/models/transaction/#class-transactionwrapper)]*

The transactions that were sent

#### returns *: list[[ABIReturn](/docs/algokit-utils/python/latest/api/algokit_utils/applications/abi/#class-abireturn)]*

The ABI return values from any ABI method calls

#### simulate_response *: dict[str, Any] | None* *= None*

The simulation response if simulation was performed, defaults to None

### calculate_extra_program_pages(approval: bytes | None, clear: bytes | None) → int

Calculate minimum number of extra_pages required for provided approval and clear programs

### populate_app_call_resources(atc: algosdk.atomic_transaction_composer.AtomicTransactionComposer, algod: algosdk.v2client.algod.AlgodClient) → algosdk.atomic_transaction_composer.AtomicTransactionComposer

Populate application call resources based on simulation results.

* **Parameters:**
  * **atc** – The AtomicTransactionComposer containing transactions
  * **algod** – Algod client for simulation
* **Returns:**
  Modified AtomicTransactionComposer with populated resources

### prepare_group_for_sending(atc: algosdk.atomic_transaction_composer.AtomicTransactionComposer, algod: algosdk.v2client.algod.AlgodClient, populate_app_call_resources: bool | None = None, cover_app_call_inner_transaction_fees: bool | None = None, additional_atc_context: AdditionalAtcContext | None = None) → algosdk.atomic_transaction_composer.AtomicTransactionComposer

Take an existing Atomic Transaction Composer and return a new one with changes applied to the transactions
based on the supplied parameters to prepare it for sending.
Please note, that before calling .execute() on the returned ATC, you must call .build_group().

* **Parameters:**
  * **atc** – The AtomicTransactionComposer containing transactions
  * **algod** – Algod client for simulation
  * **populate_app_call_resources** – Whether to populate app call resources
  * **cover_app_call_inner_transaction_fees** – Whether to cover inner txn fees
  * **additional_atc_context** – Additional context for the AtomicTransactionComposer
* **Returns:**
  Modified AtomicTransactionComposer ready for sending

### send_atomic_transaction_composer(atc: algosdk.atomic_transaction_composer.AtomicTransactionComposer, algod: algosdk.v2client.algod.AlgodClient, , max_rounds_to_wait: int | None = 5, skip_waiting: bool = False, suppress_log: bool | None = None, populate_app_call_resources: bool | None = None, cover_app_call_inner_transaction_fees: bool | None = None, additional_atc_context: AdditionalAtcContext | None = None) → [SendAtomicTransactionComposerResults](#class-sendatomictransactioncomposerresults)

Send an AtomicTransactionComposer transaction group.

Executes a group of transactions atomically using the AtomicTransactionComposer.

* **Parameters:**
  * **atc** – The AtomicTransactionComposer instance containing the transaction group to send
  * **algod** – The Algod client to use for sending the transactions
  * **max_rounds_to_wait** – Maximum number of rounds to wait for confirmation, defaults to 5
  * **skip_waiting** – If True, don’t wait for transaction confirmation, defaults to False
  * **suppress_log** – If True, suppress logging, defaults to None
  * **populate_app_call_resources** – If True, populate app call resources, defaults to None
  * **cover_app_call_inner_transaction_fees** – If True, cover app call inner transaction fees, defaults to None
  * **additional_atc_context** – Additional context for the AtomicTransactionComposer
* **Returns:**
  Results from sending the transaction group
* **Raises:**
  * **Exception** – If there is an error sending the transactions
  * **error** – If there is an error from the Algorand node

### *class* TransactionComposer
A class for composing and managing Algorand transactions.

Provides a high-level interface for building and executing transaction groups using the Algosdk library.
Supports various transaction types including payments, asset operations, application calls, and key registrations.

* **Parameters:**
  * **algod** – An instance of AlgodClient used to get suggested params and send transactions
  * **get_signer** – A function that takes an address and returns a TransactionSigner for that address
  * **get_suggested_params** – Optional function to get suggested transaction parameters,
    defaults to using algod.suggested_params()
  * **default_validity_window** – Optional default validity window for transactions in rounds, defaults to 10
  * **app_manager** – Optional AppManager instance for compiling TEAL programs, defaults to None
  * **error_transformers** – Optional list of error transformers to use when an error is caught in simulate or send

#### register_error_transformer(transformer: ErrorTransformer) → [TransactionComposer](#class-transactioncomposer)

Register a function that will be used to transform an error caught when simulating or sending.

* **Parameters:**
  **transformer** – The error transformer function
* **Returns:**
  The composer so you can chain method calls

#### add_transaction(transaction: algosdk.transaction.Transaction, signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None) → [TransactionComposer](#class-transactioncomposer)

Add a raw transaction to the composer.

* **Parameters:**
  * **transaction** – The transaction to add
  * **signer** – Optional transaction signer, defaults to getting signer from transaction sender
* **Returns:**
  The transaction composer instance for chaining
* **Example:**
  ```python
  composer.add_transaction(transaction)
  ```

#### add_payment(params: [PaymentParams](#class-paymentparams)) → [TransactionComposer](#class-transactioncomposer)

Add a payment transaction.

* **Example:**
  ```python
  params = PaymentParams(
      sender="SENDER_ADDRESS",
      receiver="RECEIVER_ADDRESS",
      amount=AlgoAmount.from_algo(1),
      close_remainder_to="CLOSE_ADDRESS"
      ... (see PaymentParams for more options)
  )
  composer.add_payment(params)
  ```
* **Parameters:**
  **params** – The payment transaction parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_asset_create(params: [AssetCreateParams](#class-assetcreateparams)) → [TransactionComposer](#class-transactioncomposer)

Add an asset creation transaction.

* **Example:**
  ```python
  params = AssetCreateParams(
      sender="SENDER_ADDRESS",
      total=1000,
      asset_name="MyAsset",
      unit_name="MA",
      url="https://example.com",
      decimals=0,
      default_frozen=False,
      manager="MANAGER_ADDRESS",
      reserve="RESERVE_ADDRESS",
      freeze="FREEZE_ADDRESS",
      clawback="CLAWBACK_ADDRESS"
      ... (see AssetCreateParams for more options)
  composer.add_asset_create(params)
  ```
* **Parameters:**
  **params** – The asset creation parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_asset_config(params: [AssetConfigParams](#class-assetconfigparams)) → [TransactionComposer](#class-transactioncomposer)

Add an asset configuration transaction.

* **Example:**
  ```python
  params = AssetConfigParams(
      sender="SENDER_ADDRESS",
      asset_id=123456,
      manager="NEW_MANAGER_ADDRESS",
      reserve="NEW_RESERVE_ADDRESS",
      freeze="NEW_FREEZE_ADDRESS",
      clawback="NEW_CLAWBACK_ADDRESS"
      ... (see AssetConfigParams for more options)
  )
  composer.add_asset_config(params)
  ```
* **Parameters:**
  **params** – The asset configuration parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_asset_freeze(params: [AssetFreezeParams](#class-assetfreezeparams)) → [TransactionComposer](#class-transactioncomposer)

Add an asset freeze transaction.

* **Example:**
  ```python
  params = AssetFreezeParams(
      sender="SENDER_ADDRESS",
      asset_id=123456,
      account="ACCOUNT_TO_FREEZE",
      frozen=True
      ... (see AssetFreezeParams for more options)
  )
  composer.add_asset_freeze(params)
  ```
* **Parameters:**
  **params** – The asset freeze parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_asset_destroy(params: [AssetDestroyParams](#class-assetdestroyparams)) → [TransactionComposer](#class-transactioncomposer)

Add an asset destruction transaction.

* **Example:**
  ```python
  params = AssetDestroyParams(
      sender="SENDER_ADDRESS",
      asset_id=123456
      ... (see AssetDestroyParams for more options)
  composer.add_asset_destroy(params)
  ```
* **Parameters:**
  **params** – The asset destruction parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_asset_transfer(params: [AssetTransferParams](#class-assettransferparams)) → [TransactionComposer](#class-transactioncomposer)

Add an asset transfer transaction.

* **Example:**
  ```python
  params = AssetTransferParams(
      sender="SENDER_ADDRESS",
      asset_id=123456,
      amount=10,
      receiver="RECEIVER_ADDRESS",
      clawback_target="CLAWBACK_TARGET_ADDRESS",
      close_asset_to="CLOSE_ADDRESS"
      ... (see AssetTransferParams for more options)
  composer.add_asset_transfer(params)
  ```
* **Parameters:**
  **params** – The asset transfer parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_asset_opt_in(params: [AssetOptInParams](#class-assetoptinparams)) → [TransactionComposer](#class-transactioncomposer)

Add an asset opt-in transaction.

* **Example:**
  ```python
  params = AssetOptInParams(
      sender="SENDER_ADDRESS",
      asset_id=123456
      ... (see AssetOptInParams for more options)
  )
  composer.add_asset_opt_in(params)
  ```
* **Parameters:**
  **params** – The asset opt-in parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_asset_opt_out(params: [AssetOptOutParams](#class-assetoptoutparams)) → [TransactionComposer](#class-transactioncomposer)

Add an asset opt-out transaction.

* **Example:**
  ```python
  params = AssetOptOutParams(
      sender="SENDER_ADDRESS",
      asset_id=123456,
      creator="CREATOR_ADDRESS"
      ... (see AssetOptOutParams for more options)
  composer.add_asset_opt_out(params)
  ```
* **Parameters:**
  **params** – The asset opt-out parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_app_create(params: [AppCreateParams](#class-appcreateparams)) → [TransactionComposer](#class-transactioncomposer)

Add an application creation transaction.

* **Example:**
  ```python
  params = AppCreateParams(
      sender="SENDER_ADDRESS",
      approval_program="TEAL_APPROVAL_CODE",
      clear_state_program="TEAL_CLEAR_CODE",
      schema={'global_ints': 1, 'global_byte_slices': 1, 'local_ints': 1, 'local_byte_slices': 1},
      on_complete=OnComplete.NoOpOC,
      args=[b'arg1'],
      account_references=["ACCOUNT1"],
      app_references=[789],
      asset_references=[123],
      box_references=[],
      extra_program_pages=0
      ... (see AppCreateParams for more options)
  )
  composer.add_app_create(params)
  ```
* **Parameters:**
  **params** – The application creation parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_app_update(params: [AppUpdateParams](#class-appupdateparams)) → [TransactionComposer](#class-transactioncomposer)

Add an application update transaction.

* **Example:**
  ```python
  params = AppUpdateParams(
      sender="SENDER_ADDRESS",
      app_id=789,
      approval_program="TEAL_NEW_APPROVAL_CODE",
      clear_state_program="TEAL_NEW_CLEAR_CODE",
      args=[b'new_arg1'],
      account_references=["ACCOUNT1"],
      app_references=[789],
      asset_references=[123],
      box_references=[],
      on_complete=OnComplete.UpdateApplicationOC
      ... (see AppUpdateParams for more options)
  composer.add_app_update(params)
  ```
* **Parameters:**
  **params** – The application update parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_app_delete(params: [AppDeleteParams](#class-appdeleteparams)) → [TransactionComposer](#class-transactioncomposer)

Add an application deletion transaction.

* **Example:**
  ```python
  params = AppDeleteParams(
      sender="SENDER_ADDRESS",
      app_id=789,
      args=[b'delete_arg'],
      account_references=["ACCOUNT1"],
      app_references=[789],
      asset_references=[123],
      box_references=[],
      on_complete=OnComplete.DeleteApplicationOC
      ... (see AppDeleteParams for more options)
  composer.add_app_delete(params)
  ```
* **Parameters:**
  **params** – The application deletion parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_app_call(params: [AppCallParams](#class-appcallparams)) → [TransactionComposer](#class-transactioncomposer)

Add an application call transaction.

* **Example:**
  ```python
  params = AppCallParams(
      sender="SENDER_ADDRESS",
      on_complete=OnComplete.NoOpOC,
      app_id=789,
      approval_program="TEAL_APPROVAL_CODE",
      clear_state_program="TEAL_CLEAR_CODE",
      schema={'global_ints': 1, 'global_byte_slices': 1, 'local_ints': 1, 'local_byte_slices': 1},
      ... (see AppCallParams for more options)
  )
  composer.add_app_call(params)
  ```
* **Parameters:**
  **params** – The application call parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_app_create_method_call(params: [AppCreateMethodCallParams](#class-appcreatemethodcallparams)) → [TransactionComposer](#class-transactioncomposer)

Add an application creation method call transaction.

* **Parameters:**
  **params** – The application creation method call parameters
* **Returns:**
  The transaction composer instance for chaining
* **Example:**
  ```python
  # Basic example
  method = algosdk.abi.Method(
      name="method",
      args=[...],
      returns="string"
  )
  composer.add_app_create_method_call(
      AppCreateMethodCallParams(
          sender="CREATORADDRESS",
          approval_program="TEALCODE",
          clear_state_program="TEALCODE",
          method=method,
          args=["arg1_value"]
      )
  )

  # Advanced example
  method = ABIMethod(
      name="method",
      args=[{"name": "arg1", "type": "string"}],
      returns={"type": "string"}
  )
  composer.add_app_create_method_call(
      AppCreateMethodCallParams(
          sender="CREATORADDRESS",
          method=method,
          args=["arg1_value"],
          approval_program="TEALCODE",
          clear_state_program="TEALCODE",
          schema={
              "global_ints": 1,
              "global_byte_slices": 2,
              "local_ints": 3,
              "local_byte_slices": 4
          },
          extra_pages=1,
          on_complete=OnComplete.OptInOC,
          args=[bytes([1, 2, 3, 4])],
          account_references=["ACCOUNT_1"],
          app_references=[123, 1234],
          asset_references=[12345],
          box_references=["box1", {"app_id": 1234, "name": "box2"}],
          lease="lease",
          note="note",
          first_valid_round=1000,
          validity_window=10,
          extra_fee=AlgoAmount.from_micro_algos(1000),
          static_fee=AlgoAmount.from_micro_algos(1000),
          max_fee=AlgoAmount.from_micro_algos(3000)
      )
  )
  ```

#### add_app_update_method_call(params: [AppUpdateMethodCallParams](#class-appupdatemethodcallparams)) → [TransactionComposer](#class-transactioncomposer)

Add an application update method call transaction.

* **Parameters:**
  **params** – The application update method call parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_app_delete_method_call(params: [AppDeleteMethodCallParams](#class-appdeletemethodcallparams)) → [TransactionComposer](#class-transactioncomposer)

Add an application deletion method call transaction.

* **Parameters:**
  **params** – The application deletion method call parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_app_call_method_call(params: [AppCallMethodCallParams](#class-appcallmethodcallparams)) → [TransactionComposer](#class-transactioncomposer)

Add an application call method call transaction.

* **Parameters:**
  **params** – The application call method call parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_online_key_registration(params: [OnlineKeyRegistrationParams](#class-onlinekeyregistrationparams)) → [TransactionComposer](#class-transactioncomposer)

Add an online key registration transaction.

* **Parameters:**
  **params** – The online key registration parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_offline_key_registration(params: [OfflineKeyRegistrationParams](#class-offlinekeyregistrationparams)) → [TransactionComposer](#class-transactioncomposer)

Add an offline key registration transaction.

* **Parameters:**
  **params** – The offline key registration parameters
* **Returns:**
  The transaction composer instance for chaining

#### add_atc(atc: algosdk.atomic_transaction_composer.AtomicTransactionComposer) → [TransactionComposer](#class-transactioncomposer)

Add an existing AtomicTransactionComposer’s transactions.

* **Parameters:**
  **atc** – The AtomicTransactionComposer to add
* **Returns:**
  The transaction composer instance for chaining
* **Example:**
  ```python
  atc = AtomicTransactionComposer()
  atc.add_transaction(TransactionWithSigner(transaction, signer))
  composer.add_atc(atc)
  ```

#### count() → int

Get the total number of transactions.

* **Returns:**
  The number of transactions

#### build() → [TransactionComposerBuildResult](#class-transactioncomposerbuildresult)

Build the transaction group.

* **Returns:**
  The built transaction group result

#### rebuild() → [TransactionComposerBuildResult](#class-transactioncomposerbuildresult)

Rebuild the transaction group from scratch.

* **Returns:**
  The rebuilt transaction group result

#### build_transactions() → [BuiltTransactions](#class-builttransactions)

Build and return the transactions without executing them.

* **Returns:**
  The built transactions result

#### execute(, max_rounds_to_wait: int | None = None) → [SendAtomicTransactionComposerResults](#class-sendatomictransactioncomposerresults)

#### send(params: [SendParams](/docs/algokit-utils/python/latest/api/algokit_utils/models/transaction/#class-sendparams) | None = None) → [SendAtomicTransactionComposerResults](#class-sendatomictransactioncomposerresults)

Send the transaction group to the network.

* **Parameters:**
  **params** – Parameters for the send operation
* **Returns:**
  The transaction send results
* **Raises:**
  **self._transform_error** – If the transaction fails (may be transformed by error transformers)

#### simulate(allow_more_logs: bool | None = None, allow_empty_signatures: bool | None = None, allow_unnamed_resources: bool | None = None, extra_opcode_budget: int | None = None, exec_trace_config: algosdk.v2client.models.SimulateTraceConfig | None = None, simulation_round: int | None = None, skip_signatures: bool | None = None) → [SendAtomicTransactionComposerResults](#class-sendatomictransactioncomposerresults)

Simulate transaction group execution with configurable validation rules.

* **Parameters:**
  * **allow_more_logs** – Whether to allow more logs than the standard limit
  * **allow_empty_signatures** – Whether to allow transactions with empty signatures
  * **allow_unnamed_resources** – Whether to allow unnamed resources.
  * **extra_opcode_budget** – Additional opcode budget to allocate
  * **exec_trace_config** – Configuration for execution tracing
  * **simulation_round** – Round number to simulate at
  * **skip_signatures** – Whether to skip signature validation
* **Returns:**
  The simulation results
* **Example:**
  ```python
  result = composer.simulate(extra_opcode_budget=1000, skip_signatures=True, ...)
  ```

#### *static* arc2_note(note: Arc2TransactionNote) → bytes

Create an encoded transaction note that follows the ARC-2 spec.

[https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md)

* **Parameters:**
  **note** – The ARC-2 note to encode
* **Returns:**
  The encoded note bytes
* **Raises:**
  **ValueError** – If the dapp_name is invalid


</div>
