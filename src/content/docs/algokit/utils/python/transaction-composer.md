---
title: Transaction composer
---

The `TransactionComposer` class allows you to easily compose one or more compliant Algorand transactions and execute and/or simulate them.

It’s the core of how the `AlgorandClient` class composes and sends transactions.

```python
from algokit_utils import TransactionComposer, AppManager
from algokit_utils.transactions import (
    PaymentParams,
    AppCallMethodCallParams,
    AssetCreateParams,
    AppCreateParams,
    # ... other transaction parameter types
)
```

To get an instance of `TransactionComposer` you can either get it from an app client, from an `AlgorandClient`, or by instantiating via the constructor.

```python
# From AlgorandClient
composer_from_algorand = algorand.new_group()

# From AppClient
composer_from_app_client = app_client.algorand.new_group()

# From constructor
composer_from_constructor = TransactionComposer(
    algod=algod,
    # Return the TransactionSigner for this address
    get_signer=lambda address: signer
)

# From constructor with optional params
composer_from_constructor = TransactionComposer(
    algod=algod,
    # Return the TransactionSigner for this address
    get_signer=lambda address: signer,
    # Custom function to get suggested params
    get_suggested_params=lambda: algod.suggested_params(),
    # Number of rounds the transaction should be valid for
    default_validity_window=1000,
    # Optional AppManager instance for TEAL compilation
    app_manager=AppManager(algod)
)
```

## Constructing a transaction

To construct a transaction you need to add it to the composer, passing in the relevant params object for that transaction. Params are Python dataclasses aavailable for import from `algokit_utils.transactions`.

Parameter types include:

- `PaymentParams` - For ALGO transfers
- `AssetCreateParams` - For creating ASAs
- `AssetConfigParams` - For reconfiguring ASAs
- `AssetTransferParams` - For ASA transfers
- `AssetOptInParams` - For opting in to ASAs
- `AssetOptOutParams` - For opting out of ASAs
- `AssetDestroyParams` - For destroying ASAs
- `AssetFreezeParams` - For freezing ASA balances
- `AppCreateParams` - For creating applications
- `AppCreateMethodCallParams` - For creating applications with ABI method calls
- `AppCallParams` - For calling applications
- `AppCallMethodCallParams` - For calling ABI methods on applications
- `AppUpdateParams` - For updating applications
- `AppUpdateMethodCallParams` - For updating applications with ABI method calls
- `AppDeleteParams` - For deleting applications
- `AppDeleteMethodCallParams` - For deleting applications with ABI method calls
- `OnlineKeyRegistrationParams` - For online key registration transactions
- `OfflineKeyRegistrationParams` - For offline key registration transactions

The methods to construct a transaction are all named `add_{transaction_type}` and return an instance of the composer so they can be chained together fluently to construct a transaction group.

For example:

```python
from algokit_utils import AlgoAmount
from algokit_utils.transactions import AppCallMethodCallParams, PaymentParams

result = (
    algorand.new_group()
    .add_payment(PaymentParams(
        sender="SENDER",
        receiver="RECEIVER",
        amount=AlgoAmount.from_micro_algos(100),
        note=b"Payment note"
    ))
    .add_app_call_method_call(AppCallMethodCallParams(
        sender="SENDER",
        app_id=123,
        method=abi_method,
        args=[1, 2, 3],
        boxes=[box_reference]  # Optional box references
    ))
)
```

## Simulating a transaction

Transactions can be simulated using the simulate endpoint in algod, which enables evaluating the transaction on the network without it actually being committed to a block.
This is a powerful feature, which has a number of options which are detailed in the [simulate API docs](https://dev.algorand.co/reference/rest-apis/output/#simulatetransaction).

The `simulate()` method accepts several optional parameters that are passed through to the algod simulate endpoint:

- `allow_more_logs: bool | None` - Allow more logs than standard
- `allow_empty_signatures: bool | None` - Allow transactions without signatures
- `allow_unnamed_resources: bool | None` - Allow unnamed resources in app calls
- `extra_opcode_budget: int | None` - Additional opcode budget
- `exec_trace_config: SimulateTraceConfig | None` - Execution trace configuration
- `simulation_round: int | None` - Round to simulate at
- `skip_signatures: int | None` - Skip signature verification

For example:

```python
result = (
    algorand.new_group()
    .add_payment(PaymentParams(
        sender="SENDER",
        receiver="RECEIVER",
        amount=AlgoAmount.from_micro_algos(100)
    ))
    .add_app_call_method_call(AppCallMethodCallParams(
        sender="SENDER",
        app_id=123,
        method=abi_method,
        args=[1, 2, 3]
    ))
    .simulate()
)

# Access simulation results
simulate_response = result.simulate_response
confirmations = result.confirmations
transactions = result.transactions
returns = result.returns  # ABI returns if any
```

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
        amount=AlgoAmount.from_micro_algos(100)
    ))
    .add_app_call_method_call(AppCallMethodCallParams(
        sender="SENDER",
        app_id=123,
        method=abi_method,
        args=[1, 2, 3]
    ))
    .simulate(
        skip_signatures=True,
        allow_more_logs=True,  # Optional: allow more logs
        extra_opcode_budget=700  # Optional: increase opcode budget
    )
)
```

### Resource Population

The `TransactionComposer` includes automatic resource population capabilities for application calls. When sending or simulating transactions, it can automatically detect and populate required references for:

- Account references
- Application references
- Asset references
- Box references

This happens automatically when either:

1. The global `algokit_utils.config` instance is set to `populate_app_call_resources=True` (default is `False`)
2. The `populate_app_call_resources` parameter is explicitly passed as `True` when sending transactions

```python
# Automatic resource population
result = (
    algorand.new_group()
    .add_app_call_method_call(AppCallMethodCallParams(
        sender="SENDER",
        app_id=123,
        method=abi_method,
        args=[1, 2, 3]
        # Resources will be automatically populated!
    ))
    .send(params=SendParams(populate_app_call_resources=True))
)

# Or disable automatic population
result = (
    algorand.new_group()
    .add_app_call_method_call(AppCallMethodCallParams(
        sender="SENDER",
        app_id=123,
        method=abi_method,
        args=[1, 2, 3],
        # Explicitly specify required resources
        account_references=["ACCOUNT"],
        app_references=[456],
        asset_references=[789],
        box_references=[box_reference]
    ))
    .send(params=SendParams(populate_app_call_resources=False))
)
```

The resource population:

- Respects the maximum limits (4 for accounts, 8 for foreign references)
- Handles cross-reference resources efficiently (e.g., asset holdings and local state)
- Automatically distributes resources across multiple transactions in a group when needed
- Raises descriptive errors if resource limits are exceeded

This feature is particularly useful when:

- Working with complex smart contracts that access various resources
- Building transaction groups where resources need to be coordinated
- Developing applications where resource requirements may change dynamically

Note: Resource population uses simulation under the hood to detect required resources, so it may add a small overhead to transaction preparation time.

### Covering App Call Inner Transaction Fees

`cover_app_call_inner_transaction_fees` automatically calculate the required fee for a parent app call transaction that sends inner transactions. It leverages the simulate endpoint to discover the inner transactions sent and calculates a fee delta to resolve the optimal fee. This feature also takes care of accounting for any surplus transaction fee at the various levels, so as to effectively minimise the fees needed to successfully handle complex scenarios. This setting only applies when you have constucted at least one app call transaction.

For example:

```python
myMethod = algosdk.ABIMethod.fromSignature('my_method()void')
result = algorand
  .new_group()
  .add_app_call_method_call(AppCallMethodCallParams(
    sender: 'SENDER',
    app_id=123,
    method=myMethod,
    args=[1, 2, 3],
    max_fee=AlgoAmount.from_micro_algo(5000), # NOTE: a maxFee value is required when enabling coverAppCallInnerTransactionFees
  ))
  .send(send_params={"cover_app_call_inner_transaction_fees": True})
```

Assuming the app account is not covering any of the inner transaction fees, if `my_method` in the above example sends 2 inner transactions, then the fee calculated for the parent transaction will be 3000 µALGO when the transaction is sent to the network.

The above example also has a `max_fee` of 5000 µALGO specified. An exception will be thrown if the transaction fee execeeds that value, which allows you to set fee limits. The `max_fee` field is required when enabling `cover_app_call_inner_transaction_fees`.

Because `max_fee` is required and an `algosdk.Transaction` does not hold any max fee information, you cannot use the generic `add_transaction()` method on the composer with `cover_app_call_inner_transaction_fees` enabled. Instead use the below, which provides a better overall experience:

```python
my_method = algosdk.abi.Method.from_signature('my_method()void')

# Does not work
result = algorand
  .new_group()
  .add_transaction(localnet.algorand.create_transaction.app_call_method_call(
    AppCallMethodCallParams(
        sender='SENDER',
        app_id=123,
        method=my_method,
        args=[1, 2, 3],
        max_fee=AlgoAmount.from_micro_algos(5000), # This is only used to create the algosdk.Transaction object and isn't made available to the composer.
      )
    ).transactions[0]
  )
  .send(send_params={"cover_app_call_inner_transaction_fees": True})

# Works as expected
result = algorand
  .new_group()
  .add_app_call_method_call(AppCallMethodCallParams(
    sender='SENDER',
    app_id=123,
    method=my_method,
    args=[1, 2, 3],
    max_fee=AlgoAmount.from_micro_algos(5000),
  ))
  .send(send_params={"cover_app_call_inner_transaction_fees": True})
```

A more complex valid scenario which leverages an app client to send an ABI method call with ABI method call transactions argument is below:

```python
app_factory = algorand.client.get_app_factory(
  app_spec='APP_SPEC',
  default_sender=sender.addr,
)

app_client_1, _ = app_factory.send.bare.create()
app_client_2, _ = app_factory.send.bare.create()

payment_arg = algorand.create_transaction.payment(
  PaymentParams(
    sender=sender.addr,
    receiver=receiver.addr,
    amount=AlgoAmount.from_micro_algos(1),
  )
)

# Note the use of .params. here, this ensure that maxFee is still available to the composer
app_call_arg = app_client_2.params.call(
  AppCallMethodCallParams(
    method='my_other_method',
    args=[],
    max_fee=AlgoAmount.from_micro_algos(2000),
  )
)

result = app_client_1.algorand
  .new_group()
  .add_app_call_method_call(
    app_client_1.params.call(
      AppClientMethodCallParams(
        method='my_method',
        args=[payment_arg, app_call_arg],
        max_fee=AlgoAmount.from_micro_algos(5000),
      )
    ),
  )
  .send({"cover_app_call_inner_transaction_fees": True})
```

This feature should efficiently calculate the minimum fee needed to execute an app call transaction with inners, however we always recommend testing your specific scenario behaves as expected before releasing.

#### Read-only calls

When invoking a readonly method, the transaction is simulated rather than being fully processed by the network. This allows users to call these methods without paying a fee.

Even though no actual fee is paid, the simulation still evaluates the transaction as if a fee was being paid, therefore op budget and fee coverage checks are still performed.

Because no fee is actually paid, calculating the minimum fee required to successfully execute the transaction is not required, and therefore we don’t need to send an additional simulate call to calculate the minimum fee, like we do with a non readonly method call.

The behaviour of enabling `cover_app_call_inner_transaction_fees` for readonly method calls is very similar to non readonly method calls, however is subtly different as we use `max_fee` as the transaction fee when executing the readonly method call.

### Covering App Call Op Budget

The high level Algorand contract authoring languages all have support for ensuring appropriate app op budget is available via `ensure_budget` in Algorand Python, `ensureBudget` in Algorand TypeScript and `increaseOpcodeBudget` in TEALScript. This is great, as it allows contract authors to ensure appropriate budget is available by automatically sending op-up inner transactions to increase the budget available. These op-up inner transactions require the fees to be covered by an account, which is generally the responsibility of the application consumer.

Application consumers may not be immediately aware of the number of op-up inner transactions sent, so it can be difficult for them to determine the exact fees required to successfully execute an application call. Fortunately the `cover_app_call_inner_transaction_fees` setting above can be leveraged to automatically cover the fees for any op-up inner transaction that an application sends. Additionally if a contract author decides to cover the fee for an op-up inner transaction, then the application consumer will not be charged a fee for that transaction.
