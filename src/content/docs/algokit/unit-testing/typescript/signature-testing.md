---
title: Smart Signature Testing
---

Test Algorand smart signatures (LogicSigs) with ease using the Algorand TypeScript Testing framework.

```ts
import * as algots from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

// Create the context manager for snippets below
const ctx = new TestExecutionContext()
```

## Define a LogicSig

Extend `algots.LogicSig` class to create a LogicSig:

```ts
import * as algots from '@algorandfoundation/algorand-typescript'

class HashedTimeLockedLogicSig extends LogicSig {
  program(): boolean {
    // LogicSig code here
    return true // Approve transaction
  }
}
```

## Execute and Test

Use `ctx.executeLogicSig()` to run and verify LogicSigs:

```ts
ctx.txn.createScope([ctx.any.txn.payment()]).execute(() => {
  const result = ctx.executeLogicSig(new HashedTimeLockedLogicSig(), Bytes('secret'))
  expect(result).toBe(true)
})
```

`executeLogicSig()` returns a boolean:

- `true`: Transaction approved
- `false`: Transaction rejected

## Pass Arguments

Provide arguments to LogicSigs using `executeLogicSig()`:

```ts
const result = ctx.executeLogicSig(new HashedTimeLockedLogicSig(), Bytes('secret'))
```

Access arguments in the LogicSig with `algots.op.arg()` opcode:

```ts
import * as algots from '@algorandfoundation/algorand-typescript'

class HashedTimeLockedLogicSig extends LogicSig {
  program(): boolean {
    // LogicSig code here
    const secret = algots.op.arg(0)
    const expectedHash = algots.op.sha256(algots.Bytes('secret'))
    return algots.op.sha256(secret) === expectedHash
  }
}

// Example usage
const secret = algots.Bytes('secret')
expect(ctx.executeLogicSig(new HashedTimeLockedLogicSig(), secret))
```

For more details on available operations, see the [coverage](../coverage).

```ts
// test cleanup
ctx.reset()
```