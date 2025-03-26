---
title: Algorand client
---

`AlgorandClient` is a client class that brokers easy access to Algorand functionality. It’s the [default entrypoint](../index#id3) into AlgoKit Utils functionality.

The main entrypoint to the bulk of the functionality in AlgoKit Utils is the `AlgorandClient` class, most of the time you can get started by typing `AlgorandClient.` and choosing one of the static initialisation methods to create an [`algokit_utils.algorand.AlgorandClient`](../autoapi/algokit_utils/algorand/index#algokit_utils.algorand.AlgorandClient), e.g.:

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

## Accessing SDK clients

Once you have an `AlgorandClient` instance, you can access the SDK clients for the various Algorand APIs via the `algorand.client` property.

```py
algorand = AlgorandClient.default_localnet()

algod_client = algorand.client.algod
indexer_client = algorand.client.indexer
kmd_client = algorand.client.kmd
```

## Accessing manager class instances

The `AlgorandClient` has a number of manager class instances that help you quickly use intellisense to get access to advanced functionality.

- [`AccountManager`](account) via `algorand.account`, there are also some chainable convenience methods which wrap specific methods in `AccountManager`:
  - `algorand.setDefaultSigner(signer)` -
  - `algorand.setSignerFromAccount(account)` -
  - `algorand.setSigner(sender, signer)`
- [`AssetManager`](asset) via `algorand.asset`
- [`ClientManager`](client) via `algorand.client`

## Creating and issuing transactions

`AlgorandClient` exposes a series of methods that allow you to create, execute, and compose groups of transactions (all via the [`TransactionComposer`](transaction-composer)).

### Creating transactions

You can compose a transaction via `algorand.create_transaction.`, which gives you an instance of the `algokit_utils.transactions.AlgorandClientTransactionCreator` class. Intellisense will guide you on the different options.

The signature for the calls to send a single transaction usually look like:

```python
algorand.create_transaction.{method}(params=TxnParams(...), send_params=SendParams(...)) -> Transaction:
```

- `TxnParams` is a union type that can be any of the Algorand transaction types, exact dataclasses can be imported from `algokit_utils` and consist of:
  - `AppCallParams`,
  - `AppCreateParams`,
  - `AppDeleteParams`,
  - `AppUpdateParams`,
  - `AssetConfigParams`,
  - `AssetCreateParams`,
  - `AssetDestroyParams`,
  - `AssetFreezeParams`,
  - `AssetOptInParams`,
  - `AssetOptOutParams`,
  - `AssetTransferParams`,
  - `OfflineKeyRegistrationParams`,
  - `OnlineKeyRegistrationParams`,
  - `PaymentParams`,
- `SendParams` is a typed dictionary exposing setting to apply during send operation:
  - `max_rounds_to_wait_for_confirmation: int | None` - The number of rounds to wait for confirmation. By default until the latest lastValid has past.
  - `suppress_log: bool | None` - Whether to suppress log messages from transaction send, default: do not suppress.
  - `populate_app_call_resources: bool | None` - Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to `Config.populateAppCallResources`.
  - `cover_app_call_inner_transaction_fees: bool | None` - Whether to use simulate to automatically calculate required app call inner transaction fees and cover them in the parent app call transaction fee

The return type for the ABI method call methods are slightly different:

```python
algorand.createTransaction.app{call_type}_method_call(params=MethodCallParams(...), send_params=SendParams(...)) -> BuiltTransactions
```

MethodCallParams is a union type that can be any of the Algorand method call types, exact dataclasses can be imported from `algokit_utils` and consist of:

- `AppCreateMethodCallParams`,
- `AppCallMethodCallParams`,
- `AppDeleteMethodCallParams`,
- `AppUpdateMethodCallParams`,

Where `BuiltTransactions` looks like this:

```python
@dataclass(frozen=True)
class BuiltTransactions:
    transactions: list[algosdk.transaction.Transaction]
    method_calls: dict[int, Method]
    signers: dict[int, TransactionSigner]
```

This signifies the fact that an ABI method call can actually result in multiple transactions (which in turn may have different signers), that you need ABI metadata to be able to extract the return value from the transaction result.

### Sending a single transaction

You can compose a single transaction via `algorand.send...`, which gives you an instance of the `algokit_utils.transactions.AlgorandClientTransactionSender` class. Intellisense will guide you on the different options.

Further documentation is present in the related capabilities:

- [App management](app)
- [Asset management](asset)
- [Algo transfers](transfer)

The signature for the calls to send a single transaction usually look like:

`algorand.send.{method}(params=TxnParams, send_params=SendParams) -> SingleSendTransactionResult`

- To get intellisense on the params, use your IDE’s intellisense keyboard shortcut (e.g. ctrl+space).
- `TxnParams` is a union type that can be any of the Algorand transaction types, exact dataclasses can be imported from `algokit_utils`.
- `algokit_utils.transactions.SendParams` a typed dictionary exposing setting to apply during send operation.
- `algokit_utils.transactions.SendSingleTransactionResult` is all of the information that is relevant when [sending a single transaction to the network](transaction#transaction-results)

Generally, the functions to immediately send a single transaction will emit log messages before and/or after sending the transaction. You can opt-out of this by sending `suppressLog: true`.

### Composing a group of transactions

You can compose a group of transactions for execution by using the `new_group()` method on `AlgorandClient` and then use the various `.add_{Type}()` methods on [`TransactionComposer`](transaction-composer) to add a series of transactions.

```python
result = (algorand
    .new_group()
    .add_payment(
        PaymentParams(
            sender="SENDERADDRESS",
            receiver="RECEIVERADDRESS",
            amount=1_000_000 # 1 Algo in microAlgos
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

`new_group()` returns a new [`TransactionComposer`](transaction-composer) instance, which can also return the group of transactions, simulate them and other things.

### Transaction parameters

To create a transaction you instantiate a relevant Transaction parameters dataclass from `algokit_utils.transactions import *` or `from algokit_utils import PaymentParams, AssetOptInParams, etc`.

All transaction parameters share the following common base parameters:

- `sender: str` - The address of the account sending the transaction.
- `signer: algosdk.TransactionSigner | TransactionSignerAccount | None` - The function used to sign transaction(s); if not specified then an attempt will be made to find a registered signer for the given `sender` or use a default signer (if configured).
- `rekey_to: string | None` - Change the signing key of the sender to the given address. **Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).
- `note: bytes | str | None` - Note to attach to the transaction. Max of 1000 bytes.
- `lease: bytes | str | None` - Prevent multiple transactions with the same lease being included within the validity window. A [lease](https://dev.algorand.co/concepts/transactions/leases) enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios).
- Fee management
  - `static_fee: AlgoAmount | None` - The static transaction fee. In most cases you want to use `extra_fee` unless setting the fee to 0 to be covered by another transaction.
  - `extra_fee: AlgoAmount | None` - The fee to pay IN ADDITION to the suggested fee. Useful for covering inner transaction fees.
  - `max_fee: AlgoAmount | None` - Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.
- Round validity management
  - `validity_window: int | None` - How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.
  - `first_valid_round: int | None` - Set the first round this transaction is valid. If left undefined, the value from algod will be used. We recommend you only set this when you intentionally want this to be some time in the future.
  - `last_valid_round: int | None` - The last round this transaction is valid. It is recommended to use `validity_window` instead.

Then on top of that the base type gets extended for the specific type of transaction you are issuing. These are all defined as part of [`TransactionComposer`](transaction-composer) and we recommend reading these docs, especially when leveraging either `populate_app_call_resources` or `cover_app_call_inner_transaction_fees`.

### Transaction configuration

AlgorandClient caches network provided transaction values for you automatically to reduce network traffic. It has a set of default configurations that control this behaviour, but you have the ability to override and change the configuration of this behaviour:

- `algorand.set_default_validity_window(validity_window)` - Set the default validity window (number of rounds from the current known round that the transaction will be valid to be accepted for), having a smallish value for this is usually ideal to avoid transactions that are valid for a long future period and may be submitted even after you think it failed to submit if waiting for a particular number of rounds for the transaction to be successfully submitted. The validity window defaults to `10`, except localnet environments where it’s set to `1000`.
- `algorand.set_suggested_params(suggested_params, until?)` - Set the suggested network parameters to use (optionally until the given time)
- `algorand.set_suggested_params_timeout(timeout)` - Set the timeout that is used to cache the suggested network parameters (by default 3 seconds)
- `algorand.get_suggested_params()` - Get the current suggested network parameters object, either the cached value, or if the cache has expired a fresh value
