---
title: 'Algorand client'
description: "`AlgorandClient` is a client class that brokers easy access to Algorand functionality. It's the `default entrypoint` into AlgoKit Utils functionality."
---

`AlgorandClient` is a client class that brokers easy access to Algorand functionality. It's the `default entrypoint` into AlgoKit Utils functionality.

The main entrypoint to the bulk of the functionality in AlgoKit Utils is the `AlgorandClient` class, most of the time you can get started by typing `AlgorandClient.` and choosing one of the static initialisation methods to create an [Algorand client](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/), e.g.:

```python
# Point to the network configured through environment variables or
#  if no environment variables it will point to the default LocalNet
#  configuration
algorand = AlgorandClient.from_environment()
# Point to default LocalNet configuration
algorand = AlgorandClient.default_localnet()
# Point to TestNet using AlgoNode free tier
algorand = AlgorandClient.testnet()
# Point to MainNet using AlgoNode free tier
algorand = AlgorandClient.mainnet()
# Point to a pre-created algod client
algorand = AlgorandClient.from_clients(algod=algod)
# Point to pre-created algod, indexer and kmd clients
algorand = AlgorandClient.from_clients(algod=algod, indexer=indexer, kmd=kmd)
# Point to custom configuration for algod
algorand = AlgorandClient.from_config(algod_config=algod_config)
# Point to custom configuration for algod, indexer and kmd
algorand = AlgorandClient.from_config(
    algod_config=algod_config,
    indexer_config=indexer_config,
    kmd_config=kmd_config
)
```

## Accessing API clients

Once you have an `AlgorandClient` instance, you can access the API clients for the various Algorand APIs via the `algorand.client` property.

```python
algorand = AlgorandClient.default_localnet()

algod_client = algorand.client.algod
indexer_client = algorand.client.indexer
kmd_client = algorand.client.kmd
```

## Accessing manager class instances

The `AlgorandClient` has a number of manager class instances that help you quickly use intellisense to get access to advanced functionality.

- [`AccountManager`](/docs/algokit-utils/python/latest/guides/concepts/core/account/) via `algorand.account`, there are also some chainable convenience methods which wrap specific methods in `AccountManager`:
  - `algorand.set_default_signer(signer)` - Sets the default signer to use if no other signer is specified
  - `algorand.set_signer_from_account(account)` - Registers the provided account as the default signer
  - `algorand.set_signer(sender, signer)` - Sets the signer for the given sender address
- [`AssetManager`](/docs/algokit-utils/python/latest/guides/concepts/building/asset/) via `algorand.asset`
- `AppManager` via `algorand.app`
- [`AppDeployer`](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/) via `algorand.app_deployer`
- [`ClientManager`](/docs/algokit-utils/python/latest/guides/concepts/core/client/) via `algorand.client`

## Creating and issuing transactions

`AlgorandClient` exposes a series of methods that allow you to create, execute, and compose groups of transactions (all via the [`TransactionComposer`](/docs/algokit-utils/python/latest/guides/concepts/advanced/transaction-composer/)).

### Creating transactions

You can compose a transaction via `algorand.create_transaction.`, which gives you an instance of the `AlgorandClientTransactionCreator` class. Intellisense will guide you on the different options.

The signature for the calls to send a single transaction usually look like:

```
algorand.create_transaction.{method}(params: {ComposerTransactionTypeParams} & CommonTxnParams) -> Transaction
```

- To get intellisense on the params, use your IDE's intellisense keyboard shortcut (e.g. ctrl+space).
- `{ComposerTransactionTypeParams}` will be the parameters that are specific to that transaction type e.g. `PaymentParams`, `see the full list`
- `CommonTxnParams` are the [common transaction parameters](#transaction-parameters) that can be specified for every single transaction
- `Transaction` is an unsigned transaction object, ready to be signed and sent

The return type for the ABI method call methods are slightly different:

```
algorand.create_transaction.app_{call_type}_method_call(params: {ComposerTransactionTypeParams} & CommonTxnParams) -> BuiltTransactions
```

Where `BuiltTransactions` looks like this:

```python
@dataclass(slots=True, frozen=True)
class BuiltTransactions:
    transactions: list[Transaction]
    method_calls: dict[int, ABIMethod]
    signers: dict[int, TransactionSigner]
```

This signifies the fact that an ABI method call can actually result in multiple transactions (which in turn may have different signers), that you need ABI metadata to be able to extract the return value from the transaction result.

### Sending a single transaction

You can compose a single transaction via `algorand.send...`, which gives you an instance of the `AlgorandClientTransactionSender` class. Intellisense will guide you on the different options.

Further documentation is present in the related capabilities:

- [App management](/docs/algokit-utils/python/latest/guides/concepts/building/app/)
- [Asset management](/docs/algokit-utils/python/latest/guides/concepts/building/asset/)
- [Algo transfers](/docs/algokit-utils/python/latest/guides/concepts/building/transfer/)

The signature for the calls to send a single transaction usually look like:

`algorand.send.{method}(params: {ComposerTransactionTypeParams} & CommonTxnParams & SendParams) -> SendSingleTransactionResult`

- To get intellisense on the params, use your IDE's intellisense keyboard shortcut (e.g. ctrl+space).
- `{ComposerTransactionTypeParams}` will be the parameters that are specific to that transaction type e.g. `PaymentParams`, `see the full list`
- `CommonTxnParams` are the [common transaction parameters](#transaction-parameters) that can be specified for every single transaction
- `SendParams` are the [parameters](#transaction-parameters) that control execution semantics when sending transactions to the network
- `SendSingleTransactionResult` is all of the information that is relevant when [sending a single transaction to the network](/docs/algokit-utils/python/latest/guides/concepts/core/transaction/)

Generally, the functions to immediately send a single transaction will emit log messages before and/or after sending the transaction. You can opt-out of this by passing `suppress_log=True`.

### Composing a group of transactions

You can compose a group of transactions for execution by using the `new_group()` method on `AlgorandClient` and then use the various `.add_{type}()` methods on [`TransactionComposer`](/docs/algokit-utils/python/latest/guides/concepts/advanced/transaction-composer/) to add a series of transactions.

```python
result = (algorand
    .new_group()
    .add_payment(
        PaymentParams(
            sender="SENDERADDRESS",
            receiver="RECEIVERADDRESS",
            amount=AlgoAmount.from_micro_algo(1)
        )
    )
    .add_asset_opt_in(
        AssetOptInParams(
            sender="SENDERADDRESS",
            asset_id=12345
        )
    )
    .send())
```

`new_group()` returns a new [`TransactionComposer`](/docs/algokit-utils/python/latest/guides/concepts/advanced/transaction-composer/) instance, which can also return the group of transactions, simulate them and other things.

### Transaction parameters

To create a transaction you instantiate a relevant transaction parameters dataclass from `algokit_utils`.

There are two common base parameter groups that get reused:

- `CommonTxnParams`
  - `sender: str` - The address of the account sending the transaction.
  - `signer: TransactionSigner | AddressWithTransactionSigner | None` - The function used to sign transaction(s); if not specified then an attempt will be made to find a registered signer for the given `sender` or use a default signer (if configured).
  - `rekey_to: str | None` - Change the signing key of the sender to the given address. **Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).
  - `note: bytes | None` - Note to attach to the transaction. Max of 1000 bytes.
  - `lease: bytes | None` - Prevent multiple transactions with the same lease being included within the validity window. A [lease](https://dev.algorand.co/concepts/transactions/leases) enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios).
  - Fee management
    - `static_fee: AlgoAmount | None` - The static transaction fee. In most cases you want to use `extra_fee` unless setting the fee to 0 to be covered by another transaction.
    - `extra_fee: AlgoAmount | None` - The fee to pay IN ADDITION to the suggested fee. Useful for covering inner transaction fees.
    - `max_fee: AlgoAmount | None` - Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.
  - Round validity management
    - `validity_window: int | None` - How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.
    - `first_valid_round: int | None` - Set the first round this transaction is valid. If left undefined, the value from algod will be used. We recommend you only set this when you intentionally want this to be some time in the future.
    - `last_valid_round: int | None` - The last round this transaction is valid. It is recommended to use `validity_window` instead.
- `SendParams`
  - `max_rounds_to_wait: int | None` - The number of rounds to wait for confirmation. By default until the latest lastValid has past.
  - `suppress_log: bool | None` - Whether to suppress log messages from transaction send, default: do not suppress.
  - `populate_app_call_resources: bool | None` - Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to `config.populate_app_call_resources`.
  - `cover_app_call_inner_transaction_fees: bool | None` - Whether to use simulate to automatically calculate required app call inner transaction fees and cover them in the parent app call transaction fee

Then on top of that the base type gets extended for the specific type of transaction you are issuing. These are all defined as part of [`TransactionComposer`](/docs/algokit-utils/python/latest/guides/concepts/advanced/transaction-composer/) and we recommend reading these docs, especially when leveraging either `populate_app_call_resources` or `cover_app_call_inner_transaction_fees`.

### Error handling

`AlgorandClient` lets you register error transformers that intercept and transform errors raised when sending or simulating transactions. This is useful for mapping low-level Algorand errors into domain-specific exceptions.

The `ErrorTransformer` type alias is defined as:

```python
from collections.abc import Callable

ErrorTransformer = Callable[[Exception], Exception]
```

Register and unregister transformers via chainable methods:

```python
from algokit_utils import AlgorandClient

def my_transformer(err: Exception) -> Exception:
    if "TRANSACTION_REJECTED" in str(err):
        return MyDomainError("Transaction was rejected by the network")
    return err

algorand = AlgorandClient.default_localnet()
algorand.register_error_transformer(my_transformer)

# Remove it later
algorand.unregister_error_transformer(my_transformer)
```

`AlgorandClient` stores transformers in a `set` (de-duplicated). A snapshot is passed to each new composer created via `new_group()`. Transformers can also be registered directly on individual [`TransactionComposer`](/docs/algokit-utils/python/latest/guides/concepts/advanced/transaction-composer/) instances.

If a transformer itself raises, an `ErrorTransformerError` is raised. If a transformer returns a non-`Exception` value, an `InvalidErrorTransformerValueError` is raised. Both are defined in `algokit_utils.transactions.transaction_composer`.

For full details on the error flow and per-composer registration, see [Error Transformers](/docs/algokit-utils/python/latest/guides/concepts/advanced/transaction-composer/#error-transformers).

### Transaction configuration

AlgorandClient caches network provided transaction values for you automatically to reduce network traffic. It has a set of default configurations that control this behaviour, but you have the ability to override and change the configuration of this behaviour:

- `algorand.set_default_validity_window(validity_window)` - Set the default validity window (number of rounds from the current known round that the transaction will be valid to be accepted for), having a smallish value for this is usually ideal to avoid transactions that are valid for a long future period and may be submitted even after you think it failed to submit if waiting for a particular number of rounds for the transaction to be successfully submitted. The validity window defaults to 10, except in [automated testing](/docs/algokit-utils/python/latest/guides/concepts/building/testing/) where it's set to 1000 when targeting LocalNet.
- `algorand.set_suggested_params_cache(suggested_params, until=None)` - Set the suggested network parameters to use (optionally until the given time)
- `algorand.set_suggested_params_cache_timeout(timeout)` - Set the timeout that is used to cache the suggested network parameters (by default 3 seconds)
- `algorand.get_suggested_params()` - Get the current suggested network parameters object, either the cached value, or if the cache has expired a fresh value
