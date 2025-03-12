---
title: Transaction management
---

Transaction management is one of the core capabilities provided by AlgoKit Utils. It allows you to construct, simulate and send single or grouped transactions with consistent and highly configurable semantics, including configurable control of transaction notes, logging, fees, multiple sender account types, and sending behavior.

## Transaction Results

All AlgoKit Utils functions that send transactions return either a `SendSingleTransactionResult` or `SendAtomicTransactionComposerResults`, providing consistent mechanisms to interpret transaction outcomes.

### SendSingleTransactionResult

The base `SendSingleTransactionResult` class is used for single transactions:

```python
@dataclass(frozen=True, kw_only=True)
class SendSingleTransactionResult:
    transaction: TransactionWrapper  # Last transaction
    confirmation: AlgodResponseType  # Last confirmation
    group_id: str
    tx_id: str | None = None  # Transaction ID of the last transaction
    tx_ids: list[str]  # All transaction IDs in the group
    transactions: list[TransactionWrapper]
    confirmations: list[AlgodResponseType]
    returns: list[ABIReturn] | None = None  # ABI returns if applicable
```

Common variations include:

- `SendSingleAssetCreateTransactionResult` - Adds `asset_id`
- `SendAppTransactionResult` - Adds `abi_return`
- `SendAppUpdateTransactionResult` - Adds compilation results
- `SendAppCreateTransactionResult` - Adds `app_id` and `app_address`

### SendAtomicTransactionComposerResults

When using the atomic transaction composer directly via `TransactionComposer.send()` or `TransactionComposer.simulate()`, you’ll receive a `SendAtomicTransactionComposerResults`:

```python
@dataclass
class SendAtomicTransactionComposerResults:
    group_id: str  # The group ID if this was a transaction group
    confirmations: list[AlgodResponseType]  # The confirmation info for each transaction
    tx_ids: list[str]  # The transaction IDs that were sent
    transactions: list[TransactionWrapper]  # The transactions that were sent
    returns: list[ABIReturn]  # The ABI return values from any ABI method calls
    simulate_response: dict[str, Any] | None = None  # Simulation response if simulated
```

### Application-specific Result Types

When working with applications via `AppClient` or `AppFactory`, you’ll get enhanced result types that provide direct access to parsed ABI values:

- `SendAppFactoryTransactionResult`
- `SendAppUpdateFactoryTransactionResult`
- `SendAppCreateFactoryTransactionResult`

These types extend the base transaction results to add an `abi_value` field that contains the parsed ABI return value according to the ARC-56 specification. The `Arc56ReturnValueType` can be:

- A primitive ABI value (bool, int, str, bytes)
- An ABI struct (as a Python dict)
- None (for void returns)

### Where You’ll Encounter Each Result Type

Different interfaces return different result types:

1. **Direct Transaction Composer**
   - `TransactionComposer.send()` → `SendAtomicTransactionComposerResults`
   - `TransactionComposer.simulate()` → `SendAtomicTransactionComposerResults`
2. **AlgorandClient Methods**
   - `.send.payment()` → `SendSingleTransactionResult`
   - `.send.asset_create()` → `SendSingleAssetCreateTransactionResult`
   - `.send.app_call()` → `SendAppTransactionResult` (contains raw ABI return)
   - `.send.app_create()` → `SendAppCreateTransactionResult` (with app ID/address)
   - `.send.app_update()` → `SendAppUpdateTransactionResult` (with compilation info)
3. **AppClient Methods**
   - `.call()` → `SendAppTransactionResult`
   - `.create()` → `SendAppCreateTransactionResult`
   - `.update()` → `SendAppUpdateTransactionResult`
4. **AppFactory Methods**
   - `.create()` → `SendAppCreateFactoryTransactionResult`
   - `.call()` → `SendAppFactoryTransactionResult`
   - `.update()` → `SendAppUpdateFactoryTransactionResult`

Example usage with AppFactory for easy access to ABI returns:

```python
# Using AppFactory
result = app_factory.send.call(AppCallMethodCallParams(
    method="my_method",
    args=[1, 2, 3],
    sender=sender
))
# Access the parsed ABI return value directly
parsed_value = result.abi_value  # Already decoded per ARC-56 spec

# Compared to base AppClient where you need to parse manually
base_result = app_client.send.call(AppCallMethodCallParams(
    method="my_method",
    args=[1, 2, 3],
    sender=sender
))
# Need to manually handle ABI return parsing
if base_result.abi_return:
    parsed_value = base_result.abi_return.value
```

Key differences between result types:

1. **Base Transaction Results** (`SendSingleTransactionResult`)
   - Focus on transaction confirmation details
   - Include group support but optimized for single transactions
   - No direct ABI value parsing
2. **Atomic Transaction Results** (`SendAtomicTransactionComposerResults`)
   - Built for transaction groups
   - Include simulation support
   - Raw ABI returns via `.returns`
   - No single transaction convenience fields
3. **Application Results** (`SendAppTransactionResult` family)
   - Add application-specific fields (`app_id`, compilation results)
   - Include raw ABI returns via `.abi_return`
   - Base application transaction support
4. **Factory Results** (`SendAppFactoryTransactionResult` family)
   - Highest level of abstraction
   - Direct access to parsed ABI values via `.abi_value`
   - Automatic ARC-56 compliant value parsing
   - Combines app-specific fields with parsed ABI returns

## Further reading

To understand how to create, simulate and send transactions consult:

- The [`TransactionComposer`](transaction-composer) documentation for composing transaction groups
- The [`AlgorandClient`](algorand-client) documentation for a high-level interface to send transactions

The transaction composer documentation covers the details of constructing transactions and transaction groups, while the Algorand client documentation covers the high-level interface for sending transactions.
