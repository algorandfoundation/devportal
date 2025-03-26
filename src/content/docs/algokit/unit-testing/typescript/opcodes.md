---
title: AVM Opcodes
---

The [coverage](coverage) file provides a comprehensive list of all opcodes and their respective types, categorized as _Mockable_, _Emulated_, or _Native_ within the `algorand-typescript-testing` package. This section highlights a **subset** of opcodes and types that typically require interaction with the test execution context.

`Native` opcodes are assumed to function as they do in the Algorand Virtual Machine, given their stateless nature. If you encounter issues with any `Native` opcodes, please raise an issue in the [`algorand-typescript-testing` repo](https://github.com/algorandfoundation/algorand-typescript-testing/issues/new/choose) or contribute a PR following the [Contributing](https://github.com/algorandfoundation/algorand-typescript-testing/blob/main/CONTRIBUTING) guide.

```ts
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

// Create the context manager for snippets below
const ctx = new TestExecutionContext()
```

## Implemented Types

These types are fully implemented in TypeScript and behave identically to their AVM counterparts:

### 1. Cryptographic Operations

The following opcodes are demonstrated:

- `op.sha256`
- `op.keccak256`
- `op.ecdsaVerify`

```ts
import { op } from '@algorandfoundation/algorand-typescript'

// SHA256 hash
const data = Bytes('Hello, World!')
const hashed = op.sha256(data)

// Keccak256 hash
const keccakHashed = op.keccak256(data)

// ECDSA verification
const messageHash = Bytes.fromHex('f809fd0aa0bb0f20b354c6b2f86ea751957a4e262a546bd716f34f69b9516ae1')
const sigR = Bytes.fromHex('18d96c7cda4bc14d06277534681ded8a94828eb731d8b842e0da8105408c83cf')
const sigS = Bytes.fromHex('7d33c61acf39cbb7a1d51c7126f1718116179adebd31618c4604a1f03b5c274a')
const pubkeyX = Bytes.fromHex('f8140e3b2b92f7cbdc8196bc6baa9ce86cf15c18e8ad0145d50824e6fa890264')
const pubkeyY = Bytes.fromHex('bd437b75d6f1db67155a95a0da4b41f2b6b3dc5d42f7db56238449e404a6c0a3')

const result = op.ecdsaVerify(op.Ecdsa.Secp256r1, messageHash, sigR, sigS, pubkeyX, pubkeyY)
expect(result).toBe(true)
```

### 2. Arithmetic and Bitwise Operations

The following opcodes are demonstrated:

- `op.addw`
- `op.bitLength`
- `op.getBit`
- `op.setBit`

```ts
import { op, Uint64 } from '@algorandfoundation/algorand-typescript'

// Addition with carry
const [result, carry] = op.addw(Uint64(2n ** 63n), Uint64(2n ** 63n))

// Bitwise operations
const value = Uint64(42)
const bitLength = op.bitLength(value)
const isBitSet = op.getBit(value, 3)
const newValue = op.setBit(value, 2, 1)
```

For a comprehensive list of all opcodes and types, refer to the [coverage](../coverage) page.

## Emulated Types Requiring Transaction Context

These types necessitate interaction with the transaction context:

### algopy.op.Global

```ts
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'
import { op, arc4, uint64, Uint64 } from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

class MyContract extends arc4.Contract {
  @arc4.abimethod()
  checkGlobals(): uint64 {
    return op.Global.minTxnFee + op.Global.minBalance
  }
}

// Create the context manager for snippets below
const ctx = new TestExecutionContext()
ctx.ledger.patchGlobalData({
  minTxnFee: 1000,
  minBalance: 100000,
})

const contract = ctx.contract.create(MyContract)
const result = contract.checkGlobals()
expect(result).toEqual(101000)
```

### algopy.op.Txn

```ts
import { op, arc4 } from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

class MyContract extends arc4.Contract {
  @arc4.abimethod()
  checkTxnFields(): arc4.Address {
    return new arc4.Address(op.Txn.sender)
  }
}

// Create the context manager for snippets below
const ctx = new TestExecutionContext()

const contract = ctx.contract.create(MyContract)
const customSender = ctx.any.account()
ctx.txn.createScope([ctx.any.txn.applicationCall({ sender: customSender })]).execute(() => {
  const result = contract.checkTxnFields()
  expect(result).toEqual(customSender)
})
```

### algopy.op.AssetHoldingGet

```ts
import { Account, arc4, Asset, op, uint64, Uint64 } from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

class AssetContract extends arc4.Contract {
  @arc4.abimethod()
  checkAssetHolding(account: Account, asset: Asset): uint64 {
    const [balance, _] = op.AssetHolding.assetBalance(account, asset)
    return balance
  }
}

// Create the context manager for snippets below
const ctx = new TestExecutionContext()

const contract = ctx.contract.create(AssetContract)
const asset = ctx.any.asset({ total: 1000000 })
const account = ctx.any.account({ optedAssetBalances: new Map([[asset.id, Uint64(5000)]]) })

const result = contract.checkAssetHolding(account, asset)
expect(result).toEqual(5000)
```

### algopy.op.AppGlobal

```ts
import { arc4, bytes, Bytes, op, uint64, Uint64 } from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

class StateContract extends arc4.Contract {
  @arc4.abimethod()
  setAndGetState(key: bytes, value: uint64): uint64 {
    op.AppGlobal.put(key, value)
    return op.AppGlobal.getUint64(key)
  }
}

// Create the context manager for snippets below
const ctx = new TestExecutionContext()

const contract = ctx.contract.create(StateContract)
const key = Bytes('test_key')
const value = Uint64(42)
const result = contract.setAndGetState(key, value)
expect(result).toEqual(value)

const [storedValue, _] = ctx.ledger.getGlobalState(contract, key)
expect(storedValue?.value).toEqual(42)
```

### algopy.op.Block

```ts
import { arc4, bytes, op } from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

class BlockInfoContract extends arc4.Contract {
  @arc4.abimethod()
  getBlockSeed(): bytes {
    return op.Block.blkSeed(1000)
  }
}
// Create the context manager for snippets below
const ctx = new TestExecutionContext()

const contract = ctx.contract.create(BlockInfoContract)
ctx.ledger.patchBlockData(1000, { seed: op.itob(123456), timestamp: 1625097600 })

const seed = contract.getBlockSeed()
expect(seed).toEqual(op.itob(123456))
```

### algopy.op.AcctParamsGet

```ts
import type { Account, uint64 } from '@algorandfoundation/algorand-typescript'
import { arc4, assert, op, Uint64 } from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

class AccountParamsContract extends arc4.Contract {
  @arc4.abimethod()
  getAccountBalance(account: Account): uint64 {
    const [balance, exists] = op.AcctParams.acctBalance(account)
    assert(exists)
    return balance
  }
}
// Create the context manager for snippets below
const ctx = new TestExecutionContext()

const contract = ctx.contract.create(AccountParamsContract)
const account = ctx.any.account({ balance: 1000000 })

const balance = contract.getAccountBalance(account)
expect(balance).toEqual(Uint64(1000000))
```

### algopy.op.AppParamsGet

```ts
import type { Application } from '@algorandfoundation/algorand-typescript'
import { arc4, assert, op } from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

class AppParamsContract extends arc4.Contract {
  @arc4.abimethod()
  getAppCreator(appId: Application): arc4.Address {
    const [creator, exists] = op.AppParams.appCreator(appId)
    assert(exists)
    return new arc4.Address(creator)
  }
}
// Create the context manager for snippets below
const ctx = new TestExecutionContext()

const contract = ctx.contract.create(AppParamsContract)
const app = ctx.any.application()
const creator = contract.getAppCreator(app)
expect(creator).toEqual(ctx.defaultSender)
```

### algopy.op.AssetParamsGet

```ts
import type { uint64 } from '@algorandfoundation/algorand-typescript'
import { arc4, assert, op } from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

class AssetParamsContract extends arc4.Contract {
  @arc4.abimethod()
  getAssetTotal(assetId: uint64): uint64 {
    const [total, exists] = op.AssetParams.assetTotal(assetId)
    assert(exists)
    return total
  }
}
// Create the context manager for snippets below
const ctx = new TestExecutionContext()

const contract = ctx.contract.create(AssetParamsContract)
const asset = ctx.any.asset({ total: 1000000, decimals: 6 })
const total = contract.getAssetTotal(asset.id)
expect(total).toEqual(1000000)
```

### algopy.op.Box

```ts
import type { bytes } from '@algorandfoundation/algorand-typescript'
import { arc4, assert, Bytes, op } from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

class BoxStorageContract extends arc4.Contract {
  @arc4.abimethod()
  storeAndRetrieve(key: bytes, value: bytes): bytes {
    op.Box.put(key, value)
    const [retrievedValue, exists] = op.Box.get(key)
    assert(exists)
    return retrievedValue
  }
}
// Create the context manager for snippets below
const ctx = new TestExecutionContext()
const contract = ctx.contract.create(BoxStorageContract)

const key = Bytes('test_key')
const value = Bytes('test_value')

const result = contract.storeAndRetrieve(key, value)
expect(result).toEqual(value)

const storedValue = ctx.ledger.getBox(contract, key)
expect(storedValue).toEqual(value)
```

### algopy.compile_contract

```ts
import { arc4, compile, uint64 } from '@algorandfoundation/algorand-typescript'
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'

class MockContract extends arc4.Contract {}

class ContractFactory extends arc4.Contract {
  @arc4.abimethod()
  compileAndGetBytes(): uint64 {
    const contractResponse = compile(MockContract)
    return compiled.localBytes
  }
}
// Create the context manager for snippets below
const ctx = new TestExecutionContext()

const contract = ctx.contract.create(ContractFactory)
const mockApp = ctx.any.application({ localNumBytes: 4 })
ctx.setCompiledApp(MockContract, mockApp.id)

const result = contract.compileAndGetBytes()
expect(result).toBe(4)
```

## Mockable Opcodes

These opcodes are mockable in `algorand-typescript-testing`, allowing for controlled testing of complex operations. Note that the module being mocked is `@algorandfoundation/algorand-typescript-testing/internal` which holds the stub implementations of `algorand-typescript` functions to be executed in Node.js environment.

### algopy.op.vrf_verify

```ts
import { expect, Mock, test, vi } from 'vitest'
import { bytes, Bytes, op, VrfVerify } from '@algorandfoundation/algorand-typescript'

vi.mock(import('@algorandfoundation/algorand-typescript-testing/internal'), async (importOriginal) => {
  const mod = await importOriginal()
  return {
    ...mod,
    op: {
      ...mod.op,
      vrfVerify: vi.fn(),
    },
  }
})

test('mock vrfVerify', () => {
  const mockedVrfVerify = op.vrfVerify as Mock<typeof op.vrfVerify>
  const mockResult = [Bytes('mock_output'), true] as readonly [bytes, boolean]
  mockedVrfVerify.mockReturnValue(mockResult)
  const result = op.vrfVerify(VrfVerify.VrfAlgorand, Bytes('proof'), Bytes('message'), Bytes('public_key'))

  expect(result).toEqual(mockResult)
})
```

### algopy.op.EllipticCurve

```ts
import { expect, Mock, test, vi } from 'vitest'
import { Bytes, op } from '@algorandfoundation/algorand-typescript'

vi.mock(import('@algorandfoundation/algorand-typescript-testing/internal'), async (importOriginal) => {
  const mod = await importOriginal()
  return {
    ...mod,
    op: {
      ...mod.op,
      EllipticCurve: {
        ...mod.op.EllipticCurve,
        add: vi.fn(),
      },
    },
  }
})
test('mock EllipticCurve', () => {
  const mockedEllipticCurveAdd = op.EllipticCurve.add as Mock<typeof op.EllipticCurve.add>
  const mockResult = Bytes('mock_output')
  mockedEllipticCurveAdd.mockReturnValue(mockResult)

  const result = op.EllipticCurve.add(op.Ec.BN254g1, Bytes('A'), Bytes('B'))
  expect(result).toEqual(mockResult)
})
```

These examples demonstrate how to mock key mockable opcodes in `algorand-typescript-testing`. Use similar techniques (in your preferred testing framework) for other mockable opcodes like `mimc`, and `JsonRef`.

Mocking these opcodes allows you to:

1. Control complex operations' behavior not covered by _implemented_ and _emulated_ types.
2. Test edge cases and error conditions.
3. Isolate contract logic from external dependencies.

```ts
// test cleanup
ctx.reset()
```