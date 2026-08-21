---
title: 'Transaction composer'
description: 'The `TransactionComposer` class allows you to easily compose one or more compliant Algorand transactions and execute and/or simulate them.'
---

The `TransactionComposer` class allows you to easily compose one or more compliant Algorand transactions and execute and/or simulate them.

It's the core of how the [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) class composes and sends transactions.

To get an instance of `TransactionComposer` you can either get it from an [app client](/docs/algokit-utils/python/latest/concepts/building/app-client/), from an [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/), or by instantiating via the constructor.

```python
composer_from_algorand = algorand.new_group()
composer_from_app_client = app_client.algorand.new_group()
composer_from_constructor = TransactionComposer(
    TransactionComposerParams(
        algod=algod,
        # Return the TransactionSigner for this address
        get_signer=lambda address: signer,
    )
)
composer_from_constructor_with_optional_params = TransactionComposer(
    TransactionComposerParams(
        algod=algod,
        # Return the TransactionSigner for this address
        get_signer=lambda address: signer,
        get_suggested_params=lambda: algod.suggested_params(),
        default_validity_window=1000,
        app_manager=AppManager(algod),
    )
)
```

## Constructing a transaction

To construct a transaction you need to add it to the composer, passing in the relevant `params object` for that transaction. Params are Python dataclasses and all of them extend the [common call parameters](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#transaction-parameters).

The `methods to construct a transaction` are all named `add_{transaction_type}` and return an instance of the composer so they can be chained together fluently to construct a transaction group.

For example:

```python
from algokit_abi import arc56

my_method = arc56.Method.from_signature('my_method()void')
result = (
    algorand.new_group()
    .add_payment(PaymentParams(
        sender="SENDER",
        receiver="RECEIVER",
        amount=AlgoAmount.from_micro_algo(100),
    ))
    .add_app_call_method_call(AppCallMethodCallParams(
        sender="SENDER",
        app_id=123,
        method=my_method,
        args=[1, 2, 3],
    ))
)
```

### Transaction parameter types

Each `add_*` method accepts a corresponding params dataclass. All param types are defined in `algokit_utils.transactions.types` and extend `CommonTxnParams`.

| Composer method                | Params type                    | Key fields (beyond common)                                                                                                           |
| ------------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `add_payment`                  | `PaymentParams`                | `receiver`, `amount`, `close_remainder_to`                                                                                           |
| `add_asset_create`             | `AssetCreateParams`            | `total`, `asset_name`, `unit_name`, `url`, `decimals`, `default_frozen`, `manager`, `reserve`, `freeze`, `clawback`, `metadata_hash` |
| `add_asset_config`             | `AssetConfigParams`            | `asset_id`, `manager`, `reserve`, `freeze`, `clawback`                                                                               |
| `add_asset_freeze`             | `AssetFreezeParams`            | `asset_id`, `account`, `frozen`                                                                                                      |
| `add_asset_destroy`            | `AssetDestroyParams`           | `asset_id`                                                                                                                           |
| `add_asset_transfer`           | `AssetTransferParams`          | `asset_id`, `amount`, `receiver`, `close_asset_to`, `clawback_target`                                                                |
| `add_asset_opt_in`             | `AssetOptInParams`             | `asset_id`                                                                                                                           |
| `add_asset_opt_out`            | `AssetOptOutParams`            | `asset_id`, `creator`                                                                                                                |
| `add_app_call`                 | `AppCallParams`                | `app_id`, `args`, `on_complete`, reference arrays                                                                                    |
| `add_app_create`               | `AppCreateParams`              | `approval_program`, `clear_state_program`, `schema`, `on_complete`, `args`, `extra_program_pages`, reference arrays                  |
| `add_app_update`               | `AppUpdateParams`              | `app_id`, `approval_program`, `clear_state_program`, `on_complete`, `args`, reference arrays                                         |
| `add_app_delete`               | `AppDeleteParams`              | `app_id`, `on_complete`, `args`, reference arrays                                                                                    |
| `add_app_call_method_call`     | `AppCallMethodCallParams`      | `app_id`, `method`, `args`, `on_complete`, reference arrays                                                                          |
| `add_app_create_method_call`   | `AppCreateMethodCallParams`    | `method`, `approval_program`, `clear_state_program`, `schema`, `extra_program_pages`, reference arrays                               |
| `add_app_update_method_call`   | `AppUpdateMethodCallParams`    | `app_id`, `method`, `approval_program`, `clear_state_program`, reference arrays                                                      |
| `add_app_delete_method_call`   | `AppDeleteMethodCallParams`    | `app_id`, `method`, reference arrays                                                                                                 |
| `add_online_key_registration`  | `OnlineKeyRegistrationParams`  | `vote_key`, `selection_key`, `state_proof_key`, `vote_first`, `vote_last`, `vote_key_dilution`, `nonparticipation`                   |
| `add_offline_key_registration` | `OfflineKeyRegistrationParams` | `prevent_account_from_ever_participating_again`                                                                                      |

> [!NOTE]
> "Reference arrays" refers to the optional fields `account_references`, `app_references`, `asset_references`, and `box_references` available on all app call param types.

#### Common transaction parameters

All param types inherit these fields from `CommonTxnParams`:

| Field               | Type                                                        | Description                                                       |
| ------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------- |
| `sender`            | `str`                                                       | The address of the account sending the transaction (required)     |
| `signer`            | `TransactionSigner \| AddressWithTransactionSigner \| None` | The signer to use; defaults to the registered signer for `sender` |
| `rekey_to`          | `str \| None`                                               | Rekey the sender account to this address                          |
| `note`              | `bytes \| None`                                             | Arbitrary note to attach                                          |
| `lease`             | `bytes \| None`                                             | Lease to prevent duplicate transactions                           |
| `static_fee`        | `AlgoAmount \| None`                                        | Exact fee (overrides calculated fee)                              |
| `extra_fee`         | `AlgoAmount \| None`                                        | Additional fee on top of the calculated fee                       |
| `max_fee`           | `AlgoAmount \| None`                                        | Maximum fee cap; errors if exceeded                               |
| `validity_window`   | `int \| None`                                               | Number of rounds the transaction is valid                         |
| `first_valid_round` | `int \| None`                                               | Explicit first valid round                                        |
| `last_valid_round`  | `int \| None`                                               | Explicit last valid round                                         |

#### Example: `PaymentParams` structure

```python
from algokit_utils.transactions.types import PaymentParams
from algokit_utils.models.amount import AlgoAmount

params = PaymentParams(
    sender="SENDER_ADDRESS",
    receiver="RECEIVER_ADDRESS",
    amount=AlgoAmount.from_algo(1),
    # Optional common fields
    note=b"payment note",
    max_fee=AlgoAmount.from_micro_algo(2000),
)
```

## Sending a transaction

Once you have constructed all the required transactions, they can be sent by calling `send()` on the `TransactionComposer`.
Additionally `send()` takes a number of parameters which allow you to opt-in to some additional behaviours as part of sending the transaction or transaction group, most significantly `populate_app_call_resources` and `cover_app_call_inner_transaction_fees`.

### Populating App Call Resources

`populate_app_call_resources` automatically updates the relevant app call transactions in the group to include the account, app, asset and box resources required for the transactions to execute successfully. It leverages the simulate endpoint to discover the accessed resources, which have not been explicitly specified. This setting only applies when you have constructed at least one app call transaction. You can read more about [resources and the reference arrays](https://dev.algorand.co/concepts/smart-contracts/resource-usage/#what-are-reference-arrays) in the docs.

For example:

```python
from algokit_abi import arc56

my_method = arc56.Method.from_signature('my_method()void')
result = (
    algorand.new_group()
    .add_app_call_method_call(AppCallMethodCallParams(
        sender="SENDER",
        app_id=123,
        method=my_method,
        args=[1, 2, 3],
    ))
    .send(SendParams(
        populate_app_call_resources=True,
    ))
)
```

If `my_method` in the above example accesses any resources, they will be automatically discovered and added before sending the transaction to the network.

#### How resource population works

Resource population is enabled by default via `TransactionComposerConfig(populate_app_call_resources=True)`. You can override it per-send via `SendParams` or disable it globally when constructing the composer.

When at least one `AppCall` transaction is present in the group, the composer runs the following flow before signing and sending:

1. **Simulate** — The composer builds a copy of all transactions and submits them to the algod simulate endpoint with `allow_unnamed_resources=True` and empty signers. This tells algod to report which resources each transaction accessed without requiring real signatures.
2. **Collect results** — The simulate response provides `unnamed_resources_accessed` at both per-transaction and group level, listing accounts, apps, assets, boxes, app-local state, and asset-holding cross-references that were accessed but not explicitly included in the transaction's reference arrays.
3. **Per-transaction population** — For each app call transaction, simple resources (accounts, apps, assets) are added directly to that transaction's reference arrays, up to the maximum reference limit.
4. **Group-level population** — Cross-reference resources (app-local state lookups, asset-holding lookups, boxes) require slots in multiple reference arrays simultaneously. The composer distributes these across the group's app call transactions using a best-fit strategy: it first tries transactions that already hold one side of the cross-reference, then falls back to the first transaction with available capacity.

The population order for group-level resources is: app-local cross-references, asset-holding cross-references, remaining accounts, boxes, remaining assets, remaining apps, and finally extra box references.

> [!NOTE]
> If a transaction already has explicitly provided reference arrays, resource population will skip that transaction and log a warning. This prevents the composer from overwriting resources you have set manually.

> [!NOTE]
> If the group runs out of reference slots across all app call transactions, a `ValueError` is raised suggesting you add another app call transaction to the group to provide more reference capacity.

### Covering App Call Inner Transaction Fees

`cover_app_call_inner_transaction_fees` automatically calculate the required fee for a parent app call transaction that sends inner transactions. It leverages the simulate endpoint to discover the inner transactions sent and calculates a fee delta to resolve the optimal fee. This feature also takes care of accounting for any surplus transaction fee at the various levels, so as to effectively minimise the fees needed to successfully handle complex scenarios. This setting only applies when you have constructed at least one app call transaction.

For example:

```python
from algokit_abi import arc56

my_method = arc56.Method.from_signature('my_method()void')
result = (
    algorand
    .new_group()
    .add_app_call_method_call(AppCallMethodCallParams(
        sender="SENDER",
        app_id=123,
        method=my_method,
        args=[1, 2, 3],
        max_fee=AlgoAmount.from_micro_algo(5000),  # NOTE: a max_fee value is required when enabling cover_app_call_inner_transaction_fees
    ))
    .send(SendParams(cover_app_call_inner_transaction_fees=True))
)
```

Assuming the app account is not covering any of the inner transaction fees, if `my_method` in the above example sends 2 inner transactions, then the fee calculated for the parent transaction will be 3000 µALGO when the transaction is sent to the network.

The above example also has a `max_fee` of 5000 µALGO specified. An exception will be thrown if the transaction fee exceeds that value, which allows you to set fee limits. The `max_fee` field is required when enabling `cover_app_call_inner_transaction_fees`.

Because `max_fee` is required and a `Transaction` does not hold any max fee information, you cannot use the generic `add_transaction()` method on the composer with `cover_app_call_inner_transaction_fees` enabled. Instead use the below, which provides a better overall experience:

```python
my_method = arc56.Method.from_signature('my_method()void')

# Does not work
result = (
    algorand
    .new_group()
    .add_transaction(algorand.create_transaction.app_call_method_call(
        AppCallMethodCallParams(
            sender="SENDER",
            app_id=123,
            method=my_method,
            args=[1, 2, 3],
            max_fee=AlgoAmount.from_micro_algo(5000),  # This is only used to create the Transaction object and isn't made available to the composer.
        )
    ).transactions[0])
    .send(SendParams(cover_app_call_inner_transaction_fees=True))
)

# Works as expected
result = (
    algorand
    .new_group()
    .add_app_call_method_call(AppCallMethodCallParams(
        sender="SENDER",
        app_id=123,
        method=my_method,
        args=[1, 2, 3],
        max_fee=AlgoAmount.from_micro_algo(5000),
    ))
    .send(SendParams(cover_app_call_inner_transaction_fees=True))
)
```

A more complex valid scenario which leverages an app client to send an ABI method call with ABI method call transactions argument is below:

```python
app_factory = algorand.client.get_app_factory(
    app_spec="APP_SPEC",
    default_sender=sender.addr,
)

app_client_1, _ = app_factory.send.bare.create()
app_client_2, _ = app_factory.send.bare.create()

payment_arg = algorand.create_transaction.payment(
    PaymentParams(
        sender=sender.addr,
        receiver=receiver.addr,
        amount=AlgoAmount.from_micro_algo(1),
    )
)

# Note the use of .params. here, this ensure that max_fee is still available to the composer
app_call_arg = app_client_2.params.call(
    AppClientMethodCallParams(
        method="my_other_method",
        args=[],
        max_fee=AlgoAmount.from_micro_algo(2000),
    )
)

result = (
    app_client_1.algorand
    .new_group()
    .add_app_call_method_call(
        app_client_1.params.call(
            AppClientMethodCallParams(
                method="my_method",
                args=[payment_arg, app_call_arg],
                max_fee=AlgoAmount.from_micro_algo(5000),
            )
        ),
    )
    .send(SendParams(cover_app_call_inner_transaction_fees=True))
)
```

This feature should efficiently calculate the minimum fee needed to execute an app call transaction with inners, however we always recommend testing your specific scenario behaves as expected before releasing.

#### Read-only calls

When invoking a readonly method, the transaction is simulated rather than being fully processed by the network. This allows users to call these methods without paying a fee.

Even though no actual fee is paid, the simulation still evaluates the transaction as if a fee was being paid, therefore op budget and fee coverage checks are still performed.

Because no fee is actually paid, calculating the minimum fee required to successfully execute the transaction is not required, and therefore we don't need to send an additional simulate call to calculate the minimum fee, like we do with a non readonly method call.

The behaviour of enabling `cover_app_call_inner_transaction_fees` for readonly method calls is very similar to non readonly method calls, however is subtly different as we use `max_fee` as the transaction fee when executing the readonly method call.

### Covering App Call Op Budget

The high level Algorand contract authoring languages all have support for ensuring appropriate app op budget is available via `ensure_budget` in Algorand Python, `ensureBudget` in Algorand TypeScript and `increaseOpcodeBudget` in TEALScript. This is great, as it allows contract authors to ensure appropriate budget is available by automatically sending op-up inner transactions to increase the budget available. These op-up inner transactions require the fees to be covered by an account, which is generally the responsibility of the application consumer.

Application consumers may not be immediately aware of the number of op-up inner transactions sent, so it can be difficult for them to determine the exact fees required to successfully execute an application call. Fortunately the `cover_app_call_inner_transaction_fees` setting above can be leveraged to automatically cover the fees for any op-up inner transaction that an application sends. Additionally if a contract author decides to cover the fee for an op-up inner transaction, then the application consumer will not be charged a fee for that transaction.

## Simulating a transaction

Transactions can be simulated using the simulate endpoint in algod, which enables evaluating the transaction on the network without it actually being committed to a block.
This is a powerful feature, which has a number of options which are detailed in the [simulate API docs](https://dev.algorand.co/reference/rest-apis/output/#simulatetransaction).

For example you can simulate a transaction group like below:

```python
result = (
    algorand.new_group()
    .add_payment(PaymentParams(
        sender="SENDER",
        receiver="RECEIVER",
        amount=AlgoAmount.from_micro_algo(100),
    ))
    .add_app_call_method_call(AppCallMethodCallParams(
        sender="SENDER",
        app_id=123,
        method=abi_method,
        args=[1, 2, 3],
    ))
    .simulate()
)
```

The above will execute a simulate request asserting that all transactions in the group are correctly signed.

### Simulate without signing

There are situations where you may not be able to (or want to) sign the transactions when executing simulate.
In these instances you should set `skip_signatures=True` which automatically builds empty transaction signers and sets both `fix-signers` and `allow-empty-signatures` to `True` when sending the algod API call.

For example:

```python
result = (
    algorand.new_group()
    .add_payment(PaymentParams(
        sender="SENDER",
        receiver="RECEIVER",
        amount=AlgoAmount.from_micro_algo(100),
    ))
    .add_app_call_method_call(AppCallMethodCallParams(
        sender="SENDER",
        app_id=123,
        method=abi_method,
        args=[1, 2, 3],
    ))
    .simulate(skip_signatures=True)
)
```

## Error Transformers

Error transformers let you intercept and transform errors raised when sending or simulating transactions. This is useful for mapping low-level Algorand errors into domain-specific exceptions.

### Type definitions

```python
from collections.abc import Callable

# A transformer receives an Exception and must return an Exception
ErrorTransformer = Callable[[Exception], Exception]
```

Two guard-rail exceptions are defined in `algokit_utils.transactions.transaction_composer`:

| Exception                           | Raised when                                   |
| ----------------------------------- | --------------------------------------------- |
| `ErrorTransformerError`             | A transformer itself raises an exception      |
| `InvalidErrorTransformerValueError` | A transformer returns a non-`Exception` value |

When a transaction fails, the composer wraps the underlying error into a `TransactionComposerError` (which carries `traces`, `sent_transactions`, and `simulate_response` for debugging) before passing it through the transformer chain.

### Registration API

Transformers can be registered at two levels:

**On `AlgorandClient`** — applies to all composers created via `new_group()`:

```python
def my_transformer(err: Exception) -> Exception:
    if "TRANSACTION_REJECTED" in str(err):
        return MyDomainError("Transaction was rejected by the network")
    return err

algorand.register_error_transformer(my_transformer)

# Remove it later
algorand.unregister_error_transformer(my_transformer)
```

`AlgorandClient` stores transformers in a set (de-duplicated). A snapshot is passed to each new composer at `new_group()` time.

**On `TransactionComposer`** — applies only to that composer instance:

```python
composer = algorand.new_group()
composer.register_error_transformer(my_transformer)
```

Transformers registered directly on the composer are appended after those inherited from the client.

### Error flow

When `send()` catches an exception, the following steps occur:

1. **Interpret** — The raw error is unwrapped (e.g. extracting the algod message from HTTP status errors).
2. **Wrap** — The interpreted error is wrapped into a `TransactionComposerError` with debug context (simulation traces, sent transactions).
3. **Transform** — The composer error is passed through each registered transformer in order. Each transformer receives the output of the previous one (chained), not the original error.
4. **Raise** — The final transformed error is raised with the original exception set as the cause (`raise transformed from original`).

```python
# Simplified flow inside send()
try:
    # ... build, sign, send
except Exception as err:
    interpreted = self._interpret_error(err)
    composer_error = self._create_composer_error(interpreted, ...)
    raise self._transform_error(composer_error) from err
```

If a transformer raises, the chain stops and an `ErrorTransformerError` is raised instead. If a transformer returns a non-`Exception` value, an `InvalidErrorTransformerValueError` is raised.
