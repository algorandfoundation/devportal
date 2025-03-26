---
title: Concepts
---

The following sections provide an overview of key concepts and features in the Algorand TypeScript Testing framework.

## Test Context

The main abstraction for interacting with the testing framework is the [`TestExecutionContext`](../api#contexts). It creates an emulated Algorand environment that closely mimics AVM behavior relevant to unit testing the contracts and provides a TypeScript interface for interacting with the emulated environment.

```typescript
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing';
import { afterEach, describe, it } from 'vitest';

describe('MyContract', () => {
  // Recommended way to instantiate the test context
  const ctx = new TestExecutionContext();
  afterEach(() => {
    // ctx should be reset after each test is executed
    ctx.reset();
  });

  it('test my contract', () => {
    // Your test code here
  });
});
```

The context manager interface exposes four main properties:

1. `contract`: An instance of `ContractContext` for creating instances of Contract under test and register them with the test execution context.
1. `ledger`: An instance of `LedgerContext` for interacting with and querying the emulated Algorand ledger state.
1. `txn`: An instance of `TransactionContext` for creating and managing transaction groups, submitting transactions, and accessing transaction results.
1. `any`: An instance of `AlgopyValueGenerator` for generating randomized test data.

The `any` property provides access to different value generators:

- `AvmValueGenerator`: Base abstractions for AVM types. All methods are available directly on the instance returned from `any`.
- `TxnValueGenerator`: Accessible via `any.txn`, for transaction-related data.
- `Arc4ValueGenerator`: Accessible via `any.arc4`, for ARC4 type data.

These generators allow creation of constrained random values for various AVM entities (accounts, assets, applications, etc.) when specific values are not required.

```{hint}
Value generators are powerful tools for generating test data for specified AVM types. They allow further constraints on random value generation via arguments, making it easier to generate test data when exact values are not necessary.

When used with the 'Arrange, Act, Assert' pattern, value generators can be especially useful in setting up clear and concise test data in arrange steps.

```

## Types of `algorand-typescript` stub implementations

As explained in the [introduction](index), `algorand-typescript-testing` _injects_ test implementations for stubs available in the `algorand-typescript` package. However, not all of the stubs are implemented in the same manner:

1. **Native**: Fully matches AVM computation in Python. For example, `op.sha256` and other cryptographic operations behave identically in AVM and unit tests. This implies that the majority of opcodes that are 'pure' functions in AVM also have a native TypeScript implementation provided by this package. These abstractions and opcodes can be used within and outside of the testing context.

2. **Emulated**: Uses `TestExecutionContext` to mimic AVM behavior. For example, `Box.put` on an `Box` within a test context stores data in the test manager, not the real Algorand network, but provides the same interface.

3. **Mockable**: Not implemented, but can be mocked or patched. For example, `op.onlineStake` can be mocked to return specific values or behaviors; otherwise, it raises a `NotImplementedError`. This category covers cases where native or emulated implementation in a unit test context is impractical or overly complex.
