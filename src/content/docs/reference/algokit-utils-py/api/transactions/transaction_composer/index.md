---
title: transactions.transaction_composer
sidebar:
  label: Index
  order: 0
---

## Attributes

| [`ErrorTransformer`](#algokit_utils.transactions.transaction_composer.ErrorTransformer)                                 |     |
| ----------------------------------------------------------------------------------------------------------------------- | --- |
| [`MethodCallParams`](#algokit_utils.transactions.transaction_composer.MethodCallParams)                                 |     |
| [`AppMethodCallTransactionArgument`](#algokit_utils.transactions.transaction_composer.AppMethodCallTransactionArgument) |     |
| [`TxnParams`](#algokit_utils.transactions.transaction_composer.TxnParams)                                               |     |

## Classes

| [`PaymentParams`](#algokit_utils.transactions.transaction_composer.PaymentParams)                                               | Parameters for a payment transaction.                                |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`AssetCreateParams`](#algokit_utils.transactions.transaction_composer.AssetCreateParams)                                       | Parameters for creating a new asset.                                 |
| [`AssetConfigParams`](#algokit_utils.transactions.transaction_composer.AssetConfigParams)                                       | Parameters for configuring an existing asset.                        |
| [`AssetFreezeParams`](#algokit_utils.transactions.transaction_composer.AssetFreezeParams)                                       | Parameters for freezing an asset.                                    |
| [`AssetDestroyParams`](#algokit_utils.transactions.transaction_composer.AssetDestroyParams)                                     | Parameters for destroying an asset.                                  |
| [`OnlineKeyRegistrationParams`](#algokit_utils.transactions.transaction_composer.OnlineKeyRegistrationParams)                   | Parameters for online key registration.                              |
| [`OfflineKeyRegistrationParams`](#algokit_utils.transactions.transaction_composer.OfflineKeyRegistrationParams)                 | Parameters for offline key registration.                             |
| [`AssetTransferParams`](#algokit_utils.transactions.transaction_composer.AssetTransferParams)                                   | Parameters for transferring an asset.                                |
| [`AssetOptInParams`](#algokit_utils.transactions.transaction_composer.AssetOptInParams)                                         | Parameters for opting into an asset.                                 |
| [`AssetOptOutParams`](#algokit_utils.transactions.transaction_composer.AssetOptOutParams)                                       | Parameters for opting out of an asset.                               |
| [`AppCallParams`](#algokit_utils.transactions.transaction_composer.AppCallParams)                                               | Parameters for calling an application.                               |
| [`AppCreateSchema`](#algokit_utils.transactions.transaction_composer.AppCreateSchema)                                           | dict() -> new empty dictionary                                       |
| [`AppCreateParams`](#algokit_utils.transactions.transaction_composer.AppCreateParams)                                           | Parameters for creating an application.                              |
| [`AppUpdateParams`](#algokit_utils.transactions.transaction_composer.AppUpdateParams)                                           | Parameters for updating an application.                              |
| [`AppDeleteParams`](#algokit_utils.transactions.transaction_composer.AppDeleteParams)                                           | Parameters for deleting an application.                              |
| [`AppCallMethodCallParams`](#algokit_utils.transactions.transaction_composer.AppCallMethodCallParams)                           | Parameters for a regular ABI method call.                            |
| [`AppCreateMethodCallParams`](#algokit_utils.transactions.transaction_composer.AppCreateMethodCallParams)                       | Parameters for an ABI method call that creates an application.       |
| [`AppUpdateMethodCallParams`](#algokit_utils.transactions.transaction_composer.AppUpdateMethodCallParams)                       | Parameters for an ABI method call that updates an application.       |
| [`AppDeleteMethodCallParams`](#algokit_utils.transactions.transaction_composer.AppDeleteMethodCallParams)                       | Parameters for an ABI method call that deletes an application.       |
| [`BuiltTransactions`](#algokit_utils.transactions.transaction_composer.BuiltTransactions)                                       | Set of transactions built by TransactionComposer.                    |
| [`TransactionComposerBuildResult`](#algokit_utils.transactions.transaction_composer.TransactionComposerBuildResult)             | Result of building transactions with TransactionComposer.            |
| [`SendAtomicTransactionComposerResults`](#algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults) | Results from sending an AtomicTransactionComposer transaction group. |
| [`TransactionComposer`](#algokit_utils.transactions.transaction_composer.TransactionComposer)                                   | A class for composing and managing Algorand transactions.            |

## Functions

| [`calculate_extra_program_pages`](#algokit_utils.transactions.transaction_composer.calculate_extra_program_pages)(→ int)     | Calculate minimum number of extra_pages required for provided approval and clear programs                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [`populate_app_call_resources`](#algokit_utils.transactions.transaction_composer.populate_app_call_resources)(...)           | Populate application call resources based on simulation results.                                           |
| [`prepare_group_for_sending`](#algokit_utils.transactions.transaction_composer.prepare_group_for_sending)(...)               | Take an existing Atomic Transaction Composer and return a new one with changes applied to the transactions |
| [`send_atomic_transaction_composer`](#algokit_utils.transactions.transaction_composer.send_atomic_transaction_composer)(...) | Send an AtomicTransactionComposer transaction group.                                                       |

## Module Contents

### algokit_utils.transactions.transaction_composer.ErrorTransformer

### _class_ algokit_utils.transactions.transaction_composer.PaymentParams

Bases: `_CommonTxnParams`

Parameters for a payment transaction.

#### receiver _: str_

The account that will receive the ALGO

#### amount _: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/#algokit_utils.models.amount.AlgoAmount)_

Amount to send

#### close_remainder_to _: str | None_ _= None_

If given, close the sender account and send the remaining balance to this address, defaults to None

### _class_ algokit_utils.transactions.transaction_composer.AssetCreateParams

Bases: `_CommonTxnParams`

Parameters for creating a new asset.

#### total _: int_

The total amount of the smallest divisible unit to create

#### asset_name _: str | None_ _= None_

The full name of the asset

#### unit_name _: str | None_ _= None_

The short ticker name for the asset

#### url _: str | None_ _= None_

The metadata URL for the asset

#### decimals _: int | None_ _= None_

The amount of decimal places the asset should have

#### default_frozen _: bool | None_ _= None_

Whether the asset is frozen by default in the creator address

#### manager _: str | None_ _= None_

The address that can change the manager, reserve, clawback, and freeze addresses

#### reserve _: str | None_ _= None_

The address that holds the uncirculated supply

#### freeze _: str | None_ _= None_

The address that can freeze the asset in any account

#### clawback _: str | None_ _= None_

The address that can clawback the asset from any account

#### metadata_hash _: bytes | None_ _= None_

Hash of the metadata contained in the metadata URL

### _class_ algokit_utils.transactions.transaction_composer.AssetConfigParams

Bases: `_CommonTxnParams`

Parameters for configuring an existing asset.

#### asset_id _: int_

The ID of the asset

#### manager _: str | None_ _= None_

The address that can change the manager, reserve, clawback, and freeze addresses, defaults to None

#### reserve _: str | None_ _= None_

The address that holds the uncirculated supply, defaults to None

#### freeze _: str | None_ _= None_

The address that can freeze the asset in any account, defaults to None

#### clawback _: str | None_ _= None_

The address that can clawback the asset from any account, defaults to None

### _class_ algokit_utils.transactions.transaction_composer.AssetFreezeParams

Bases: `_CommonTxnParams`

Parameters for freezing an asset.

#### asset_id _: int_

The ID of the asset

#### account _: str_

The account to freeze or unfreeze

#### frozen _: bool_

Whether the assets in the account should be frozen

### _class_ algokit_utils.transactions.transaction_composer.AssetDestroyParams

Bases: `_CommonTxnParams`

Parameters for destroying an asset.

#### asset_id _: int_

The ID of the asset

### _class_ algokit_utils.transactions.transaction_composer.OnlineKeyRegistrationParams

Bases: `_CommonTxnParams`

Parameters for online key registration.

#### vote_key _: str_

The root participation public key

#### selection_key _: str_

The VRF public key

#### vote_first _: int_

The first round that the participation key is valid

#### vote_last _: int_

The last round that the participation key is valid

#### vote_key_dilution _: int_

The dilution for the 2-level participation key

#### state_proof_key _: bytes | None_ _= None_

The 64 byte state proof public key commitment, defaults to None

### _class_ algokit_utils.transactions.transaction_composer.OfflineKeyRegistrationParams

Bases: `_CommonTxnParams`

Parameters for offline key registration.

#### prevent_account_from_ever_participating_again _: bool_

Whether to prevent the account from ever participating again

### _class_ algokit_utils.transactions.transaction_composer.AssetTransferParams

Bases: `_CommonTxnParams`

Parameters for transferring an asset.

#### asset_id _: int_

The ID of the asset

#### amount _: int_

The amount of the asset to transfer (smallest divisible unit)

#### receiver _: str_

The account to send the asset to

#### clawback_target _: str | None_ _= None_

The account to take the asset from, defaults to None

#### close_asset_to _: str | None_ _= None_

The account to close the asset to, defaults to None

### _class_ algokit_utils.transactions.transaction_composer.AssetOptInParams

Bases: `_CommonTxnParams`

Parameters for opting into an asset.

#### asset_id _: int_

The ID of the asset

### _class_ algokit_utils.transactions.transaction_composer.AssetOptOutParams

Bases: `_CommonTxnParams`

Parameters for opting out of an asset.

#### asset_id _: int_

The ID of the asset

#### creator _: str_

The creator address of the asset

### _class_ algokit_utils.transactions.transaction_composer.AppCallParams

Bases: `_CommonTxnParams`

Parameters for calling an application.

#### on_complete _: algosdk.transaction.OnComplete_

The OnComplete action, defaults to None

#### app_id _: int | None_ _= None_

The ID of the application, defaults to None

#### approval_program _: str | bytes | None_ _= None_

The program to execute for all OnCompletes other than ClearState, defaults to None

#### clear_state_program _: str | bytes | None_ _= None_

The program to execute for ClearState OnComplete, defaults to None

#### schema _: dict[str, int] | None_ _= None_

The state schema for the app, defaults to None

#### args _: list[bytes] | None_ _= None_

Application arguments, defaults to None

#### account_references _: list[str] | None_ _= None_

Account references, defaults to None

#### app_references _: list[int] | None_ _= None_

App references, defaults to None

#### asset_references _: list[int] | None_ _= None_

Asset references, defaults to None

#### extra_pages _: int | None_ _= None_

Number of extra pages required for the programs, defaults to None

#### box_references _: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/models/state/#algokit_utils.models.state.BoxReference) | algokit_utils.models.state.BoxIdentifier] | None_ _= None_

Box references, defaults to None

### _class_ algokit_utils.transactions.transaction_composer.AppCreateSchema

Bases: `TypedDict`

dict() -> new empty dictionary
dict(mapping) -> new dictionary initialized from a mapping object’s

> (key, value) pairs

dict(iterable) -> new dictionary initialized as if via:
: d = {}
for k, v in iterable:

{' '}
<br />> d[k] = v

dict(

```
**
```

kwargs) -> new dictionary initialized with the name=value pairs
: in the keyword argument list. For example: dict(one=1, two=2)

#### global_ints _: int_

The number of global ints in the schema

#### global_byte_slices _: int_

The number of global byte slices in the schema

#### local_ints _: int_

The number of local ints in the schema

#### local_byte_slices _: int_

The number of local byte slices in the schema

### _class_ algokit_utils.transactions.transaction_composer.AppCreateParams

Bases: `_CommonTxnParams`

Parameters for creating an application.

#### approval_program _: str | bytes_

The program to execute for all OnCompletes other than ClearState

#### clear_state_program _: str | bytes_

The program to execute for ClearState OnComplete

#### schema _: [AppCreateSchema](#algokit_utils.transactions.transaction_composer.AppCreateSchema) | None_ _= None_

The state schema for the app, defaults to None

#### on_complete _: algosdk.transaction.OnComplete | None_ _= None_

The OnComplete action, defaults to None

#### args _: list[bytes] | None_ _= None_

Application arguments, defaults to None

#### account_references _: list[str] | None_ _= None_

Account references, defaults to None

#### app_references _: list[int] | None_ _= None_

App references, defaults to None

#### asset_references _: list[int] | None_ _= None_

Asset references, defaults to None

#### box_references _: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/models/state/#algokit_utils.models.state.BoxReference) | algokit_utils.models.state.BoxIdentifier] | None_ _= None_

Box references, defaults to None

#### extra_program_pages _: int | None_ _= None_

Number of extra pages required for the programs, defaults to None

### _class_ algokit_utils.transactions.transaction_composer.AppUpdateParams

Bases: `_CommonTxnParams`

Parameters for updating an application.

#### app_id _: int_

The ID of the application

#### approval_program _: str | bytes_

The program to execute for all OnCompletes other than ClearState

#### clear_state_program _: str | bytes_

The program to execute for ClearState OnComplete

#### args _: list[bytes] | None_ _= None_

Application arguments, defaults to None

#### account_references _: list[str] | None_ _= None_

Account references, defaults to None

#### app_references _: list[int] | None_ _= None_

App references, defaults to None

#### asset_references _: list[int] | None_ _= None_

Asset references, defaults to None

#### box_references _: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/models/state/#algokit_utils.models.state.BoxReference) | algokit_utils.models.state.BoxIdentifier] | None_ _= None_

Box references, defaults to None

#### on_complete _: algosdk.transaction.OnComplete | None_ _= None_

The OnComplete action, defaults to None

### _class_ algokit_utils.transactions.transaction_composer.AppDeleteParams

Bases: `_CommonTxnParams`

Parameters for deleting an application.

#### app_id _: int_

The ID of the application

#### args _: list[bytes] | None_ _= None_

Application arguments, defaults to None

#### account_references _: list[str] | None_ _= None_

Account references, defaults to None

#### app_references _: list[int] | None_ _= None_

App references, defaults to None

#### asset_references _: list[int] | None_ _= None_

Asset references, defaults to None

#### box_references _: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/models/state/#algokit_utils.models.state.BoxReference) | algokit_utils.models.state.BoxIdentifier] | None_ _= None_

Box references, defaults to None

#### on_complete _: algosdk.transaction.OnComplete_

The OnComplete action, defaults to DeleteApplicationOC

### _class_ algokit_utils.transactions.transaction_composer.AppCallMethodCallParams

Bases: `_BaseAppMethodCall`

Parameters for a regular ABI method call.

#### app_id _: int_

The ID of the application

#### on_complete _: algosdk.transaction.OnComplete | None_ _= None_

The OnComplete action, defaults to None

### _class_ algokit_utils.transactions.transaction_composer.AppCreateMethodCallParams

Bases: `_BaseAppMethodCall`

Parameters for an ABI method call that creates an application.

#### approval_program _: str | bytes_

The program to execute for all OnCompletes other than ClearState

#### clear_state_program _: str | bytes_

The program to execute for ClearState OnComplete

#### schema _: [AppCreateSchema](#algokit_utils.transactions.transaction_composer.AppCreateSchema) | None_ _= None_

The state schema for the app, defaults to None

#### on_complete _: algosdk.transaction.OnComplete | None_ _= None_

The OnComplete action (cannot be ClearState), defaults to None

#### extra_program_pages _: int | None_ _= None_

Number of extra pages required for the programs, defaults to None

### _class_ algokit_utils.transactions.transaction_composer.AppUpdateMethodCallParams

Bases: `_BaseAppMethodCall`

Parameters for an ABI method call that updates an application.

#### app_id _: int_

The ID of the application

#### approval_program _: str | bytes_

The program to execute for all OnCompletes other than ClearState

#### clear_state_program _: str | bytes_

The program to execute for ClearState OnComplete

#### on_complete _: algosdk.transaction.OnComplete_

The OnComplete action

### _class_ algokit_utils.transactions.transaction_composer.AppDeleteMethodCallParams

Bases: `_BaseAppMethodCall`

Parameters for an ABI method call that deletes an application.

#### app_id _: int_

The ID of the application

#### on_complete _: algosdk.transaction.OnComplete_

The OnComplete action

### algokit_utils.transactions.transaction_composer.MethodCallParams

### algokit_utils.transactions.transaction_composer.AppMethodCallTransactionArgument

### algokit_utils.transactions.transaction_composer.TxnParams

### _class_ algokit_utils.transactions.transaction_composer.BuiltTransactions

Set of transactions built by TransactionComposer.

#### transactions _: list[algosdk.transaction.Transaction]_

The built transactions

#### method_calls _: dict[int, algosdk.abi.Method]_

Map of transaction index to ABI method

#### signers _: dict[int, algosdk.atomic_transaction_composer.TransactionSigner]_

Map of transaction index to TransactionSigner

### _class_ algokit_utils.transactions.transaction_composer.TransactionComposerBuildResult

Result of building transactions with TransactionComposer.

#### atc _: algosdk.atomic_transaction_composer.AtomicTransactionComposer_

The AtomicTransactionComposer instance

#### transactions _: list[algosdk.atomic_transaction_composer.TransactionWithSigner]_

The list of transactions with signers

#### method_calls _: dict[int, algosdk.abi.Method]_

Map of transaction index to ABI method

### _class_ algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults

Results from sending an AtomicTransactionComposer transaction group.

#### group_id _: str_

The group ID if this was a transaction group

#### confirmations _: list[algosdk.v2client.algod.AlgodResponseType]_

The confirmation info for each transaction

#### tx_ids _: list[str]_

The transaction IDs that were sent

#### transactions _: list[[algokit_utils.models.transaction.TransactionWrapper](/reference/algokit-utils-py/api/models/transaction/#algokit_utils.models.transaction.TransactionWrapper)]_

The transactions that were sent

#### returns _: list[[algokit_utils.applications.abi.ABIReturn](/reference/algokit-utils-py/api/applications/abi/#algokit_utils.applications.abi.ABIReturn)]_

The ABI return values from any ABI method calls

#### simulate_response _: dict[str, Any] | None_ _= None_

The simulation response if simulation was performed, defaults to None

### algokit_utils.transactions.transaction_composer.calculate_extra_program_pages(approval: bytes | None, clear: bytes | None) → int

Calculate minimum number of extra_pages required for provided approval and clear programs

### algokit_utils.transactions.transaction_composer.populate_app_call_resources(atc: algosdk.atomic_transaction_composer.AtomicTransactionComposer, algod: algosdk.v2client.algod.AlgodClient) → algosdk.atomic_transaction_composer.AtomicTransactionComposer

Populate application call resources based on simulation results.

- **Parameters:**
  - **atc** – The AtomicTransactionComposer containing transactions
  - **algod** – Algod client for simulation
- **Returns:**
  Modified AtomicTransactionComposer with populated resources

### algokit_utils.transactions.transaction_composer.prepare_group_for_sending(atc: algosdk.atomic_transaction_composer.AtomicTransactionComposer, algod: algosdk.v2client.algod.AlgodClient, populate_app_call_resources: bool | None = None, cover_app_call_inner_transaction_fees: bool | None = None, additional_atc_context: AdditionalAtcContext | None = None) → algosdk.atomic_transaction_composer.AtomicTransactionComposer

Take an existing Atomic Transaction Composer and return a new one with changes applied to the transactions
based on the supplied parameters to prepare it for sending.
Please note, that before calling .execute() on the returned ATC, you must call .build_group().

- **Parameters:**
  - **atc** – The AtomicTransactionComposer containing transactions
  - **algod** – Algod client for simulation
  - **populate_app_call_resources** – Whether to populate app call resources
  - **cover_app_call_inner_transaction_fees** – Whether to cover inner txn fees
  - **additional_atc_context** – Additional context for the AtomicTransactionComposer
- **Returns:**
  Modified AtomicTransactionComposer ready for sending

### algokit_utils.transactions.transaction_composer.send_atomic_transaction_composer(atc: algosdk.atomic_transaction_composer.AtomicTransactionComposer, algod: algosdk.v2client.algod.AlgodClient, \*, max_rounds_to_wait: int | None = 5, skip_waiting: bool = False, suppress_log: bool | None = None, populate_app_call_resources: bool | None = None, cover_app_call_inner_transaction_fees: bool | None = None, additional_atc_context: AdditionalAtcContext | None = None) → [SendAtomicTransactionComposerResults](#algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults)

Send an AtomicTransactionComposer transaction group.

Executes a group of transactions atomically using the AtomicTransactionComposer.

- **Parameters:**
  - **atc** – The AtomicTransactionComposer instance containing the transaction group to send
  - **algod** – The Algod client to use for sending the transactions
  - **max_rounds_to_wait** – Maximum number of rounds to wait for confirmation, defaults to 5
  - **skip_waiting** – If True, don’t wait for transaction confirmation, defaults to False
  - **suppress_log** – If True, suppress logging, defaults to None
  - **populate_app_call_resources** – If True, populate app call resources, defaults to None
  - **cover_app_call_inner_transaction_fees** – If True, cover app call inner transaction fees, defaults to None
  - **additional_atc_context** – Additional context for the AtomicTransactionComposer
- **Returns:**
  Results from sending the transaction group
- **Raises:**
  - **Exception** – If there is an error sending the transactions
  - **error** – If there is an error from the Algorand node

### _class_ algokit_utils.transactions.transaction_composer.TransactionComposer(algod: algosdk.v2client.algod.AlgodClient, get_signer: collections.abc.Callable[[str], algosdk.atomic_transaction_composer.TransactionSigner], get_suggested_params: collections.abc.Callable[[], algosdk.transaction.SuggestedParams] | None = None, default_validity_window: int | None = None, app_manager: [algokit_utils.applications.app_manager.AppManager](/reference/algokit-utils-py/api/applications/app_manager/#algokit_utils.applications.app_manager.AppManager) | None = None, error_transformers: list[ErrorTransformer] | None = None)

A class for composing and managing Algorand transactions.

Provides a high-level interface for building and executing transaction groups using the Algosdk library.
Supports various transaction types including payments, asset operations, application calls, and key registrations.

- **Parameters:**
  - **algod** – An instance of AlgodClient used to get suggested params and send transactions
  - **get_signer** – A function that takes an address and returns a TransactionSigner for that address
  - **get_suggested_params** – Optional function to get suggested transaction parameters,
    defaults to using algod.suggested_params()
  - **default_validity_window** – Optional default validity window for transactions in rounds, defaults to 10
  - **app_manager** – Optional AppManager instance for compiling TEAL programs, defaults to None
  - **error_transformers** – Optional list of error transformers to use when an error is caught in simulate or send

#### register_error_transformer(transformer: ErrorTransformer) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Register a function that will be used to transform an error caught when simulating or sending.

- **Parameters:**
  **transformer** – The error transformer function
- **Returns:**
  The composer so you can chain method calls

#### add_transaction(transaction: algosdk.transaction.Transaction, signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add a raw transaction to the composer.

- **Parameters:**
  - **transaction** – The transaction to add
  - **signer** – Optional transaction signer, defaults to getting signer from transaction sender
- **Returns:**
  The transaction composer instance for chaining
- **Example:**
  ```python
  composer.add_transaction(transaction)
  ```

#### add_payment(params: [PaymentParams](#algokit_utils.transactions.transaction_composer.PaymentParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add a payment transaction.

- **Example:**
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
- **Parameters:**
  **params** – The payment transaction parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_create(params: [AssetCreateParams](#algokit_utils.transactions.transaction_composer.AssetCreateParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset creation transaction.

- **Example:**
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
- **Parameters:**
  **params** – The asset creation parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_config(params: [AssetConfigParams](#algokit_utils.transactions.transaction_composer.AssetConfigParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset configuration transaction.

- **Example:**
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
- **Parameters:**
  **params** – The asset configuration parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_freeze(params: [AssetFreezeParams](#algokit_utils.transactions.transaction_composer.AssetFreezeParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset freeze transaction.

- **Example:**
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
- **Parameters:**
  **params** – The asset freeze parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_destroy(params: [AssetDestroyParams](#algokit_utils.transactions.transaction_composer.AssetDestroyParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset destruction transaction.

- **Example:**
  ```python
  params = AssetDestroyParams(
      sender="SENDER_ADDRESS",
      asset_id=123456
      ... (see AssetDestroyParams for more options)
  composer.add_asset_destroy(params)
  ```
- **Parameters:**
  **params** – The asset destruction parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_transfer(params: [AssetTransferParams](#algokit_utils.transactions.transaction_composer.AssetTransferParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset transfer transaction.

- **Example:**
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
- **Parameters:**
  **params** – The asset transfer parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_opt_in(params: [AssetOptInParams](#algokit_utils.transactions.transaction_composer.AssetOptInParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset opt-in transaction.

- **Example:**
  ```python
  params = AssetOptInParams(
      sender="SENDER_ADDRESS",
      asset_id=123456
      ... (see AssetOptInParams for more options)
  )
  composer.add_asset_opt_in(params)
  ```
- **Parameters:**
  **params** – The asset opt-in parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_opt_out(params: [AssetOptOutParams](#algokit_utils.transactions.transaction_composer.AssetOptOutParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset opt-out transaction.

- **Example:**
  ```python
  params = AssetOptOutParams(
      sender="SENDER_ADDRESS",
      asset_id=123456,
      creator="CREATOR_ADDRESS"
      ... (see AssetOptOutParams for more options)
  composer.add_asset_opt_out(params)
  ```
- **Parameters:**
  **params** – The asset opt-out parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_app_create(params: [AppCreateParams](#algokit_utils.transactions.transaction_composer.AppCreateParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an application creation transaction.

- **Example:**
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
- **Parameters:**
  **params** – The application creation parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_app_update(params: [AppUpdateParams](#algokit_utils.transactions.transaction_composer.AppUpdateParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an application update transaction.

- **Example:**
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
- **Parameters:**
  **params** – The application update parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_app_delete(params: [AppDeleteParams](#algokit_utils.transactions.transaction_composer.AppDeleteParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an application deletion transaction.

- **Example:**
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
- **Parameters:**
  **params** – The application deletion parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_app_call(params: [AppCallParams](#algokit_utils.transactions.transaction_composer.AppCallParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an application call transaction.

- **Example:**
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
- **Parameters:**
  **params** – The application call parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_app_create_method_call(params: [AppCreateMethodCallParams](#algokit_utils.transactions.transaction_composer.AppCreateMethodCallParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an application creation method call transaction.

- **Parameters:**
  **params** – The application creation method call parameters
- **Returns:**
  The transaction composer instance for chaining
- **Example:**

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

#### add_app_update_method_call(params: [AppUpdateMethodCallParams](#algokit_utils.transactions.transaction_composer.AppUpdateMethodCallParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an application update method call transaction.

- **Parameters:**
  **params** – The application update method call parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_app_delete_method_call(params: [AppDeleteMethodCallParams](#algokit_utils.transactions.transaction_composer.AppDeleteMethodCallParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an application deletion method call transaction.

- **Parameters:**
  **params** – The application deletion method call parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_app_call_method_call(params: [AppCallMethodCallParams](#algokit_utils.transactions.transaction_composer.AppCallMethodCallParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an application call method call transaction.

- **Parameters:**
  **params** – The application call method call parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_online_key_registration(params: [OnlineKeyRegistrationParams](#algokit_utils.transactions.transaction_composer.OnlineKeyRegistrationParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an online key registration transaction.

- **Parameters:**
  **params** – The online key registration parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_offline_key_registration(params: [OfflineKeyRegistrationParams](#algokit_utils.transactions.transaction_composer.OfflineKeyRegistrationParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an offline key registration transaction.

- **Parameters:**
  **params** – The offline key registration parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_atc(atc: algosdk.atomic_transaction_composer.AtomicTransactionComposer) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an existing AtomicTransactionComposer’s transactions.

- **Parameters:**
  **atc** – The AtomicTransactionComposer to add
- **Returns:**
  The transaction composer instance for chaining
- **Example:**
  ```python
  atc = AtomicTransactionComposer()
  atc.add_transaction(TransactionWithSigner(transaction, signer))
  composer.add_atc(atc)
  ```

#### count() → int

Get the total number of transactions.

- **Returns:**
  The number of transactions

#### build() → [TransactionComposerBuildResult](#algokit_utils.transactions.transaction_composer.TransactionComposerBuildResult)

Build the transaction group.

- **Returns:**
  The built transaction group result

#### rebuild() → [TransactionComposerBuildResult](#algokit_utils.transactions.transaction_composer.TransactionComposerBuildResult)

Rebuild the transaction group from scratch.

- **Returns:**
  The rebuilt transaction group result

#### build_transactions() → [BuiltTransactions](#algokit_utils.transactions.transaction_composer.BuiltTransactions)

Build and return the transactions without executing them.

- **Returns:**
  The built transactions result

#### execute(\*, max_rounds_to_wait: int | None = None) → [SendAtomicTransactionComposerResults](#algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults)

#### send(params: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/models/transaction/#algokit_utils.models.transaction.SendParams) | None = None) → [SendAtomicTransactionComposerResults](#algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults)

Send the transaction group to the network.

- **Parameters:**
  **params** – Parameters for the send operation
- **Returns:**
  The transaction send results
- **Raises:**
  **self.\_transform_error** – If the transaction fails (may be transformed by error transformers)

#### simulate(allow_more_logs: bool | None = None, allow_empty_signatures: bool | None = None, allow_unnamed_resources: bool | None = None, extra_opcode_budget: int | None = None, exec_trace_config: algosdk.v2client.models.SimulateTraceConfig | None = None, simulation_round: int | None = None, skip_signatures: bool | None = None) → [SendAtomicTransactionComposerResults](#algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults)

Simulate transaction group execution with configurable validation rules.

- **Parameters:**
  - **allow_more_logs** – Whether to allow more logs than the standard limit
  - **allow_empty_signatures** – Whether to allow transactions with empty signatures
  - **allow_unnamed_resources** – Whether to allow unnamed resources.
  - **extra_opcode_budget** – Additional opcode budget to allocate
  - **exec_trace_config** – Configuration for execution tracing
  - **simulation_round** – Round number to simulate at
  - **skip_signatures** – Whether to skip signature validation
- **Returns:**
  The simulation results
- **Example:**
  ```python
  result = composer.simulate(extra_opcode_budget=1000, skip_signatures=True, ...)
  ```

#### _static_ arc2_note(note: algokit_utils.models.transaction.Arc2TransactionNote) → bytes

Create an encoded transaction note that follows the ARC-2 spec.

[https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md)

- **Parameters:**
  **note** – The ARC-2 note to encode
- **Returns:**
  The encoded note bytes
- **Raises:**
  **ValueError** – If the dapp_name is invalid
