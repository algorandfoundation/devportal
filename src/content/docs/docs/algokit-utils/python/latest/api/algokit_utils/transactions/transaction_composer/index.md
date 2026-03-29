---
title: 'algokit_utils.transactions.transaction_composer'
---

<div class="api-ref">

# algokit_utils.transactions.transaction_composer

## Attributes

| [`AppMethodCallTransactionArgument`](#algokit_utils.transactions.transaction_composer.AppMethodCallTransactionArgument) |     |
| ----------------------------------------------------------------------------------------------------------------------- | --- |
| [`ErrorTransformer`](#algokit_utils.transactions.transaction_composer.ErrorTransformer)                                 |     |

## Exceptions

| [`ErrorTransformerError`](#algokit_utils.transactions.transaction_composer.ErrorTransformerError)                         | Raised when an error transformer throws.                           |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`InvalidErrorTransformerValueError`](#algokit_utils.transactions.transaction_composer.InvalidErrorTransformerValueError) | Raised when an error transformer returns a non-error value.        |
| [`TransactionComposerError`](#algokit_utils.transactions.transaction_composer.TransactionComposerError)                   | Error raised when transaction composer fails to send transactions. |

## Classes

| [`TransactionComposerConfig`](#algokit_utils.transactions.transaction_composer.TransactionComposerConfig)           |                                                                     |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`TransactionComposerParams`](#algokit_utils.transactions.transaction_composer.TransactionComposerParams)           |                                                                     |
| [`TransactionWithSigner`](#algokit_utils.transactions.transaction_composer.TransactionWithSigner)                   |                                                                     |
| [`BuiltTransactions`](#algokit_utils.transactions.transaction_composer.BuiltTransactions)                           |                                                                     |
| [`SendTransactionComposerResults`](#algokit_utils.transactions.transaction_composer.SendTransactionComposerResults) |                                                                     |
| [`TransactionComposer`](#algokit_utils.transactions.transaction_composer.TransactionComposer)                       | Light-weight transaction composer built on top of algokit_transact. |

## Module Contents

### AppMethodCallTransactionArgument

### _exception_ ErrorTransformerError

Bases: `RuntimeError`

Raised when an error transformer throws.

### ErrorTransformer

### _exception_ InvalidErrorTransformerValueError(original_error: Exception, value: object)

Bases: `RuntimeError`

Raised when an error transformer returns a non-error value.

### _exception_ TransactionComposerError(message: str, \*, cause: Exception | None = None, traces: list[SimulateTransactionResult] | None = None, sent_transactions: list[Transaction] | None = None, simulate_response: SimulateResponse | None = None)

Bases: `RuntimeError`

Error raised when transaction composer fails to send transactions.

Contains detailed debugging information including simulation traces and sent transactions.

#### traces _= None_

#### sent_transactions _= None_

#### simulate_response _= None_

### _class_ TransactionComposerConfig

#### cover_app_call_inner_transaction_fees _: bool_ _= False_

#### populate_app_call_resources _: bool_ _= True_

### _class_ TransactionComposerParams

#### algod _: AlgodClient_

#### get_signer _: Callable[[str], TransactionSigner]_

#### get_suggested_params _: Callable[[], SuggestedParams] | None_ _= None_

#### default_validity_window _: int | None_ _= None_

#### app_manager _: [AppManager](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_manager/#algokit_utils.applications.app_manager.AppManager) | None_ _= None_

#### error_transformers _: list[ErrorTransformer] | None_ _= None_

#### composer_config _: [TransactionComposerConfig](#algokit_utils.transactions.transaction_composer.TransactionComposerConfig) | None_ _= None_

### _class_ TransactionWithSigner

#### txn _: Transaction_

#### signer _: TransactionSigner_

#### method _: ABIMethod | None_ _= None_

### _class_ BuiltTransactions

#### transactions _: list[Transaction]_

#### method_calls _: dict[int, ABIMethod]_

#### signers _: dict[int, TransactionSigner]_

### _class_ SendTransactionComposerResults

#### tx_ids _: list[str]_

#### transactions _: list[Transaction]_

#### confirmations _: list[PendingTransactionResponse]_

#### returns _: list[[ABIReturn](/docs/algokit-utils/python/latest/api/algokit_utils/applications/abi/#algokit_utils.applications.abi.ABIReturn)]_

#### group_id _: str | None_ _= None_

#### simulate_response _: SimulateResponse | None_ _= None_

### _class_ TransactionComposer(params: [TransactionComposerParams](#algokit_utils.transactions.transaction_composer.TransactionComposerParams))

Light-weight transaction composer built on top of algokit_transact.

#### clone(composer_config: [TransactionComposerConfig](#algokit_utils.transactions.transaction_composer.TransactionComposerConfig) | None = None) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Create a shallow copy of this composer, optionally overriding config flags.

#### register_error_transformer(transformer: ErrorTransformer) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_transaction(txn: Transaction, signer: TransactionSigner | None = None) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_payment(params: [PaymentParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.PaymentParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_asset_create(params: [AssetCreateParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AssetCreateParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_asset_config(params: [AssetConfigParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AssetConfigParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_asset_freeze(params: [AssetFreezeParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AssetFreezeParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_asset_destroy(params: [AssetDestroyParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AssetDestroyParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_asset_transfer(params: [AssetTransferParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AssetTransferParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_asset_opt_in(params: [AssetOptInParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AssetOptInParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_asset_opt_out(params: [AssetOptOutParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AssetOptOutParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_app_create(params: [AppCreateParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AppCreateParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_app_update(params: [AppUpdateParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AppUpdateParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_app_delete(params: [AppDeleteParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AppDeleteParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_app_call(params: [AppCallParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AppCallParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_app_create_method_call(params: [AppCreateMethodCallParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AppCreateMethodCallParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_app_update_method_call(params: [AppUpdateMethodCallParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AppUpdateMethodCallParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_app_delete_method_call(params: [AppDeleteMethodCallParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AppDeleteMethodCallParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_app_call_method_call(params: [AppCallMethodCallParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.AppCallMethodCallParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_online_key_registration(params: [OnlineKeyRegistrationParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.OnlineKeyRegistrationParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### add_offline_key_registration(params: [OfflineKeyRegistrationParams](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/types/#algokit_utils.transactions.types.OfflineKeyRegistrationParams)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### count() → int

#### rebuild() → [BuiltTransactions](#algokit_utils.transactions.transaction_composer.BuiltTransactions)

#### _static_ arc2_note(note: Arc2TransactionNote) → bytes

#### add_transaction_composer(composer: [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

#### build() → [BuiltTransactions](#algokit_utils.transactions.transaction_composer.BuiltTransactions)

Build transactions with grouping, resource population, and fee adjustments applied.

#### build_transactions() → [BuiltTransactions](#algokit_utils.transactions.transaction_composer.BuiltTransactions)

Build queued transactions without resource population or grouping.

Returns raw transactions, method call metadata, and any explicit signers. This does not
populate unnamed resources or adjust fees, and it leaves grouping unchanged.

#### gather_signatures() → list[bytes]

#### send(params: [SendParams](/docs/algokit-utils/python/latest/api/algokit_utils/models/transaction/#algokit_utils.models.transaction.SendParams) | None = None) → [SendTransactionComposerResults](#algokit_utils.transactions.transaction_composer.SendTransactionComposerResults)

Compose the transaction group and send it to the network.

#### simulate(\*, skip_signatures: bool = False, result_on_failure: bool = False, \*\*raw_options: Any) → [SendTransactionComposerResults](#algokit_utils.transactions.transaction_composer.SendTransactionComposerResults)

Compose the transaction group and simulate execution without submitting to the network.

Args:
: skip_signatures: Whether to skip signatures for all built transactions and use an empty signer instead.
: This will set allow_empty_signatures and fix_signers when sending the request to algod.

<br />
result_on_failure: Whether to return the result on simulation failure instead of throwing an error.
: Defaults to False (throws on failure).
<br />
``` ** ```
<br />
raw_options: Additional options to pass to the simulate request.

Returns:
: SendTransactionComposerResults containing simulation results.

#### set_max_fees(max_fees: dict[int, [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#algokit_utils.models.amount.AlgoAmount)]) → [TransactionComposer](#algokit_utils.transactions.transaction_composer.TransactionComposer)

Override max_fee for queued transactions by index before building.

</div>
