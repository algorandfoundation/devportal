---
title: "Transaction management"
description: "Transaction management is one of the core capabilities provided by AlgoKit Utils. It allows you to construct, simulate and send single, or grouped transactions with consistent and highly configurable semantics, including configurable control of transaction notes, logging, fees, multiple sender account types, and sending behaviour."
---

Transaction management is one of the core capabilities provided by AlgoKit Utils. It allows you to construct, simulate and send single, or grouped transactions with consistent and highly configurable semantics, including configurable control of transaction notes, logging, fees, multiple sender account types, and sending behaviour.

## `SendSingleTransactionResult`

All AlgoKit Utils functions that send a transaction will generally return a variant of the `SendSingleTransactionResult` dataclass or some superset of that. This provides a consistent mechanism to interpret the results of a transaction send.

```python
@dataclass(frozen=True, kw_only=True)
class SendSingleTransactionResult:
    transaction: Transaction                                  # Last transaction sent
    confirmation: PendingTransactionResponse                  # Confirmation of last transaction
    group_id: str                                             # Group ID
    tx_id: str | None = None                                  # Transaction ID of last transaction
    tx_ids: list[str]                                         # All transaction IDs in the group
    transactions: list[Transaction]                           # All transactions in the group
    confirmations: list[PendingTransactionResponse]           # All confirmations
    returns: list[ABIReturn] | None = None                    # ABI return values (if applicable)
```

### `SendSingleAssetCreateTransactionResult`

Extends `SendSingleTransactionResult` with the ID of the newly created ASA.

```python
@dataclass(frozen=True, kw_only=True)
class SendSingleAssetCreateTransactionResult(SendSingleTransactionResult):
    asset_id: int   # ID of the newly created asset
```

### `SendAppTransactionResult`

Result from an application call. Adds the parsed ABI return value.

```python
@dataclass(frozen=True)
class SendAppTransactionResult(SendSingleTransactionResult, Generic[ABIReturnT]):
    abi_return: ABIReturnT | None = None   # Parsed ABI method return value
```

### `SendAppUpdateTransactionResult`

Extends `SendAppTransactionResult` with the compiled TEAL programs used in the update.

```python
@dataclass(frozen=True)
class SendAppUpdateTransactionResult(SendAppTransactionResult[ABIReturnT]):
    compiled_approval: CompiledTeal | bytes | None = None   # Compiled approval program
    compiled_clear: CompiledTeal | bytes | None = None      # Compiled clear state program
```

### `SendAppCreateTransactionResult`

Extends `SendAppUpdateTransactionResult` with the app ID and address of the newly created application.

```python
@dataclass(frozen=True, kw_only=True)
class SendAppCreateTransactionResult(SendAppUpdateTransactionResult[ABIReturnT]):
    app_id: int        # ID of the newly created application
    app_address: str   # Address of the newly created application
```

#### ARC-56 return value parsing

The `abi_return` field is generic over `ABIReturnT`. When you call methods through `AlgorandClient.send`, the type parameter is `ABIReturn` — a wrapper that carries the raw bytes, decoded value, and any decode error:

```python
# Via AlgorandClient — abi_return is an ABIReturn object
result = algorand.send.app_call_method_call(AppCallMethodCallParams(...))
result.abi_return         # ABIReturn
result.abi_return.value   # The decoded ABI value (ABIValue | None)
result.abi_return.method  # The ARC-56 method descriptor
```

When you call methods through `AppClient` or `AppFactory`, the ARC-56 return value is automatically unwrapped. `AppClient` extracts `ABIReturn.value` and returns `SendAppTransactionResult[Arc56ReturnValueType]`, so `abi_return` is the decoded value directly:

```python
# Via AppClient — abi_return is already the decoded value
result = app_client.send.call(AppClientMethodCallParams(method="hello", args=["world"]))
result.abi_return  # Arc56ReturnValueType (ABIValue | ABIStruct | None)
```

### `SendTransactionComposerResults`

The result from sending all transactions within a `TransactionComposer`.

```python
@dataclass(frozen=True)
class SendTransactionComposerResults:
    tx_ids: list[str]                                         # All transaction IDs
    transactions: list[Transaction]                           # All transactions
    confirmations: list[PendingTransactionResponse]           # All confirmations
    returns: list[ABIReturn]                                  # ABI return values
    group_id: str | None = None                               # Group ID
    simulate_response: SimulateResponse | None = None         # Simulation response (if simulated)
```

### Factory result types

`SendAppFactoryTransactionResult`, `SendAppCreateFactoryTransactionResult`, and `SendAppUpdateFactoryTransactionResult` mirror their non-factory counterparts, but `abi_return` is the already-parsed ARC-56 return value (typed as `Arc56ReturnValueType`) rather than the raw `ABIReturn` object.

## Comparison of result types

| Type | `abi_return` | `app_id` / `app_address` | `compiled_approval` / `compiled_clear` | `asset_id` | `simulate_response` |
| --- | --- | --- | --- | --- | --- |
| `SendSingleTransactionResult` | — | — | — | — | — |
| `SendSingleAssetCreateTransactionResult` | — | — | — | yes | — |
| `SendAppTransactionResult` | `ABIReturn` | — | — | — | — |
| `SendAppUpdateTransactionResult` | `ABIReturn` | — | yes | — | — |
| `SendAppCreateTransactionResult` | `ABIReturn` | yes | yes | — | — |
| `SendAppFactoryTransactionResult` | `Arc56ReturnValueType` | — | — | — | — |
| `SendAppCreateFactoryTransactionResult` | `Arc56ReturnValueType` | yes | yes | — | — |
| `SendTransactionComposerResults` | — (list in `returns`) | — | — | — | yes |

## Where you'll encounter each result type

| Method | Return type |
| --- | --- |
| `TransactionComposer.send()` | `SendTransactionComposerResults` |
| `.send.payment()` | `SendSingleTransactionResult` |
| `.send.asset_create()` | `SendSingleAssetCreateTransactionResult` |
| `.send.asset_config()` | `SendSingleTransactionResult` |
| `.send.asset_freeze()` | `SendSingleTransactionResult` |
| `.send.asset_destroy()` | `SendSingleTransactionResult` |
| `.send.asset_transfer()` | `SendSingleTransactionResult` |
| `.send.asset_opt_in()` | `SendSingleTransactionResult` |
| `.send.asset_opt_out()` | `SendSingleTransactionResult` |
| `.send.app_call()` | `SendAppTransactionResult` |
| `.send.app_create()` | `SendAppCreateTransactionResult` |
| `.send.app_update()` | `SendAppUpdateTransactionResult` |
| `.send.app_delete()` | `SendAppTransactionResult` |
| `.send.app_call_method_call()` | `SendAppTransactionResult` |
| `.send.app_create_method_call()` | `SendAppCreateTransactionResult` |
| `.send.app_update_method_call()` | `SendAppUpdateTransactionResult` |
| `.send.app_delete_method_call()` | `SendAppTransactionResult` |
| `.send.online_key_registration()` | `SendSingleTransactionResult` |
| `.send.offline_key_registration()` | `SendSingleTransactionResult` |

## Usage example

```python
# Send a payment and inspect the result
result = algorand.send.payment(PaymentParams(
    sender="SENDERADDRESS",
    receiver="RECEIVERADDRESS",
    amount=AlgoAmount(algo=1),
))

print(result.tx_id)           # Transaction ID
print(result.confirmation)    # Confirmation details from algod
print(result.group_id)        # Group ID

# Create an app and access the new app ID
app_result = algorand.send.app_create(AppCreateParams(
    sender="CREATORADDRESS",
    approval_program="TEALCODE",
    clear_state_program="TEALCODE",
))

print(app_result.app_id)       # ID of the newly created application
print(app_result.app_address)  # Address of the newly created application

# Call an ABI method and read the return value
call_result = algorand.send.app_call_method_call(AppCallMethodCallParams(
    sender="CALLERADDRESS",
    app_id=app_result.app_id,
    method=arc56.Method.from_signature("hello(string)string"),
    args=["world"],
))

print(call_result.abi_return)  # Parsed ABI return value
```

## Further reading

To understand how to create, simulate and send transactions consult the [`AlgorandClient`](../algorand-client) and [`TransactionComposer`](../../advanced/transaction-composer) documentation.

**Source:** [`src/algokit_utils/transactions/transaction_sender.py`](https://github.com/algorandfoundation/algokit-utils-py/blob/main/src/algokit_utils/transactions/transaction_sender.py)
