---
title: algokit_utils.transactions.transaction_composer.TransactionComposer
---

#### _class_ algokit_utils.transactions.transaction_composer.TransactionComposer(algod: algosdk.v2client.algod.AlgodClient, get_signer: collections.abc.Callable[[str], algosdk.atomic_transaction_composer.TransactionSigner], get_suggested_params: collections.abc.Callable[[], algosdk.transaction.SuggestedParams] | None = None, default_validity_window: int | None = None, app_manager: [algokit_utils.applications.app_manager.AppManager](/reference/algokit-utils-py/api/applications/app_manager/appmanager/#algokit_utils.applications.app_manager.AppManager) | None = None, error_transformers: list[ErrorTransformer] | None = None)

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
  ```pycon
  >>> composer.add_transaction(transaction)
  ```

#### add_payment(params: [PaymentParams](#algokit_utils.transactions.transaction_composer.PaymentParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add a payment transaction.

- **Example:**
  ```pycon
  >>> params = PaymentParams(
  ...     sender="SENDER_ADDRESS",
  ...     receiver="RECEIVER_ADDRESS",
  ...     amount=AlgoAmount.from_algo(1),
  ...     close_remainder_to="CLOSE_ADDRESS"
  ...     ... (see PaymentParams for more options)
  ... )
  >>> composer.add_payment(params)
  ```
- **Parameters:**
  **params** – The payment transaction parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_create(params: [AssetCreateParams](#algokit_utils.transactions.transaction_composer.AssetCreateParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset creation transaction.

- **Example:**
  ```pycon
  >>> params = AssetCreateParams(
  ...     sender="SENDER_ADDRESS",
  ...     total=1000,
  ...     asset_name="MyAsset",
  ...     unit_name="MA",
  ...     url="https://example.com",
  ...     decimals=0,
  ...     default_frozen=False,
  ...     manager="MANAGER_ADDRESS",
  ...     reserve="RESERVE_ADDRESS",
  ...     freeze="FREEZE_ADDRESS",
  ...     clawback="CLAWBACK_ADDRESS"
  ...     ... (see AssetCreateParams for more options)
  >>> composer.add_asset_create(params)
  ```
- **Parameters:**
  **params** – The asset creation parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_config(params: [AssetConfigParams](#algokit_utils.transactions.transaction_composer.AssetConfigParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset configuration transaction.

- **Example:**
  ```pycon
  >>> params = AssetConfigParams(
  ...     sender="SENDER_ADDRESS",
  ...     asset_id=123456,
  ...     manager="NEW_MANAGER_ADDRESS",
  ...     reserve="NEW_RESERVE_ADDRESS",
  ...     freeze="NEW_FREEZE_ADDRESS",
  ...     clawback="NEW_CLAWBACK_ADDRESS"
  ...     ... (see AssetConfigParams for more options)
  ... )
  >>> composer.add_asset_config(params)
  ```
- **Parameters:**
  **params** – The asset configuration parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_freeze(params: [AssetFreezeParams](#algokit_utils.transactions.transaction_composer.AssetFreezeParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset freeze transaction.

- **Example:**
  ```pycon
  >>> params = AssetFreezeParams(
  ...     sender="SENDER_ADDRESS",
  ...     asset_id=123456,
  ...     account="ACCOUNT_TO_FREEZE",
  ...     frozen=True
  ...     ... (see AssetFreezeParams for more options)
  ... )
  >>> composer.add_asset_freeze(params)
  ```
- **Parameters:**
  **params** – The asset freeze parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_destroy(params: [AssetDestroyParams](#algokit_utils.transactions.transaction_composer.AssetDestroyParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset destruction transaction.

- **Example:**
  ```pycon
  >>> params = AssetDestroyParams(
  ...     sender="SENDER_ADDRESS",
  ...     asset_id=123456
  ...     ... (see AssetDestroyParams for more options)
  >>> composer.add_asset_destroy(params)
  ```
- **Parameters:**
  **params** – The asset destruction parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_transfer(params: [AssetTransferParams](#algokit_utils.transactions.transaction_composer.AssetTransferParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset transfer transaction.

- **Example:**
  ```pycon
  >>> params = AssetTransferParams(
  ...     sender="SENDER_ADDRESS",
  ...     asset_id=123456,
  ...     amount=10,
  ...     receiver="RECEIVER_ADDRESS",
  ...     clawback_target="CLAWBACK_TARGET_ADDRESS",
  ...     close_asset_to="CLOSE_ADDRESS"
  ...     ... (see AssetTransferParams for more options)
  >>> composer.add_asset_transfer(params)
  ```
- **Parameters:**
  **params** – The asset transfer parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_opt_in(params: [AssetOptInParams](#algokit_utils.transactions.transaction_composer.AssetOptInParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset opt-in transaction.

- **Example:**
  ```pycon
  >>> params = AssetOptInParams(
  ...     sender="SENDER_ADDRESS",
  ...     asset_id=123456
  ...     ... (see AssetOptInParams for more options)
  ... )
  >>> composer.add_asset_opt_in(params)
  ```
- **Parameters:**
  **params** – The asset opt-in parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_asset_opt_out(params: [AssetOptOutParams](#algokit_utils.transactions.transaction_composer.AssetOptOutParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an asset opt-out transaction.

- **Example:**
  ```pycon
  >>> params = AssetOptOutParams(
  ...     sender="SENDER_ADDRESS",
  ...     asset_id=123456,
  ...     creator="CREATOR_ADDRESS"
  ...     ... (see AssetOptOutParams for more options)
  >>> composer.add_asset_opt_out(params)
  ```
- **Parameters:**
  **params** – The asset opt-out parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_app_create(params: [AppCreateParams](#algokit_utils.transactions.transaction_composer.AppCreateParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an application creation transaction.

- **Example:**
  ```pycon
  >>> params = AppCreateParams(
  ...     sender="SENDER_ADDRESS",
  ...     approval_program="TEAL_APPROVAL_CODE",
  ...     clear_state_program="TEAL_CLEAR_CODE",
  ...     schema={'global_ints': 1, 'global_byte_slices': 1, 'local_ints': 1, 'local_byte_slices': 1},
  ...     on_complete=OnComplete.NoOpOC,
  ...     args=[b'arg1'],
  ...     account_references=["ACCOUNT1"],
  ...     app_references=[789],
  ...     asset_references=[123],
  ...     box_references=[],
  ...     extra_program_pages=0
  ...     ... (see AppCreateParams for more options)
  ... )
  >>> composer.add_app_create(params)
  ```
- **Parameters:**
  **params** – The application creation parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_app_update(params: [AppUpdateParams](#algokit_utils.transactions.transaction_composer.AppUpdateParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an application update transaction.

- **Example:**
  ```pycon
  >>> params = AppUpdateParams(
  ...     sender="SENDER_ADDRESS",
  ...     app_id=789,
  ...     approval_program="TEAL_NEW_APPROVAL_CODE",
  ...     clear_state_program="TEAL_NEW_CLEAR_CODE",
  ...     args=[b'new_arg1'],
  ...     account_references=["ACCOUNT1"],
  ...     app_references=[789],
  ...     asset_references=[123],
  ...     box_references=[],
  ...     on_complete=OnComplete.UpdateApplicationOC
  ...     ... (see AppUpdateParams for more options)
  >>> composer.add_app_update(params)
  ```
- **Parameters:**
  **params** – The application update parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_app_delete(params: [AppDeleteParams](#algokit_utils.transactions.transaction_composer.AppDeleteParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an application deletion transaction.

- **Example:**
  ```pycon
  >>> params = AppDeleteParams(
  ...     sender="SENDER_ADDRESS",
  ...     app_id=789,
  ...     args=[b'delete_arg'],
  ...     account_references=["ACCOUNT1"],
  ...     app_references=[789],
  ...     asset_references=[123],
  ...     box_references=[],
  ...     on_complete=OnComplete.DeleteApplicationOC
  ...     ... (see AppDeleteParams for more options)
  >>> composer.add_app_delete(params)
  ```
- **Parameters:**
  **params** – The application deletion parameters
- **Returns:**
  The transaction composer instance for chaining

#### add_app_call(params: [AppCallParams](#algokit_utils.transactions.transaction_composer.AppCallParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Add an application call transaction.

- **Example:**
  ```pycon
  >>> params = AppCallParams(
  ...     sender="SENDER_ADDRESS",
  ...     on_complete=OnComplete.NoOpOC,
  ...     app_id=789,
  ...     approval_program="TEAL_APPROVAL_CODE",
  ...     clear_state_program="TEAL_CLEAR_CODE",
  ...     schema={'global_ints': 1, 'global_byte_slices': 1, 'local_ints': 1, 'local_byte_slices': 1},
  ...     ... (see AppCallParams for more options)
  ... )
  >>> composer.add_app_call(params)
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
  ```pycon
  >>> # Basic example
  >>> method = algosdk.abi.Method(
  ...     name="method",
  ...     args=[...],
  ...     returns="string"
  ... )
  >>> composer.add_app_create_method_call(
  ...     AppCreateMethodCallParams(
  ...         sender="CREATORADDRESS",
  ...         approval_program="TEALCODE",
  ...         clear_state_program="TEALCODE",
  ...         method=method,
  ...         args=["arg1_value"]
  ...     )
  ... )
  >>>
  >>> # Advanced example
  >>> method = ABIMethod(
  ...     name="method",
  ...     args=[{"name": "arg1", "type": "string"}],
  ...     returns={"type": "string"}
  ... )
  >>> composer.add_app_create_method_call(
  ...     AppCreateMethodCallParams(
  ...         sender="CREATORADDRESS",
  ...         method=method,
  ...         args=["arg1_value"],
  ...         approval_program="TEALCODE",
  ...         clear_state_program="TEALCODE",
  ...         schema={
  ...             "global_ints": 1,
  ...             "global_byte_slices": 2,
  ...             "local_ints": 3,
  ...             "local_byte_slices": 4
  ...         },
  ...         extra_pages=1,
  ...         on_complete=OnComplete.OptInOC,
  ...         args=[bytes([1, 2, 3, 4])],
  ...         account_references=["ACCOUNT_1"],
  ...         app_references=[123, 1234],
  ...         asset_references=[12345],
  ...         box_references=["box1", {"app_id": 1234, "name": "box2"}],
  ...         lease="lease",
  ...         note="note",
  ...         first_valid_round=1000,
  ...         validity_window=10,
  ...         extra_fee=AlgoAmount.from_micro_algos(1000),
  ...         static_fee=AlgoAmount.from_micro_algos(1000),
  ...         max_fee=AlgoAmount.from_micro_algos(3000)
  ...     )
  ... )
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
  ```pycon
  >>> atc = AtomicTransactionComposer()
  >>> atc.add_transaction(TransactionWithSigner(transaction, signer))
  >>> composer.add_atc(atc)
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

#### send(params: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/models/transaction/sendparams/#algokit_utils.models.transaction.SendParams) | None = None) → [SendAtomicTransactionComposerResults](#algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults)

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
  ```pycon
  >>> result = composer.simulate(extra_opcode_budget=1000, skip_signatures=True, ...)
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
