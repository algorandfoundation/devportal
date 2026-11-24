---
title: Storage
---

# Storage

Algorand smart contracts can utilise [three different types of on-chain storage](https://dev.algorand.co/concepts/smart-contracts/storage/overview/): [Global storage](#global-storage), [Local storage](#local-storage), and [Box Storage](#box-storage). They also have access to a transient form of storage in [Scratch space](#scratch-storage).

## Global storage

Global or Application storage is a key/value store of `bytes` or `uint64` values stored against a smart contract application. The number of values used must be declared when the application is first created and will affect the [minimum balance requirement](https://dev.algorand.co/concepts/smart-contracts/costs-constraints/#mbr) for the application. For ARC4 contracts, this information is captured in the ARC32 and ARC56 specification files and automatically included in deployments.

Global storage values are declared using the [GlobalState](https://algorandfoundation.github.io/puya-ts/api/) function to create a [GlobalState](https://algorandfoundation.github.io/puya-ts/api/) proxy object. For grouping multiple values under a common key and content type, see [GlobalMap](#globalmap).

```ts
import { GlobalState, Contract, uint64, bytes, Uint64, contract } from '@algorandfoundation/algorand-typescript'

class DemoContract extends Contract {
  // The property name 'globalInt' will be used as the key
  globalInt = GlobalState<uint64>({ initialValue: Uint64(1) })
  // Explicitly override the key
  globalBytes = GlobalState<bytes>({ key: 'alternativeKey' })
}

// If using dynamic keys, state must be explicitly reserved
@contract({ stateTotals: { globalBytes: 5 } })
class DynamicAccessContract extends Contract {
  test(key: string, value: string) {
    // Interact with state using a dynamic key
    const dynamicAccess = GlobalState<string>({ key })
    dynamicAccess.value = value
  }
}
```

### GlobalMap

`GlobalMap` is similar to `GlobalState`, but allows for grouping a set of global state values with a common key and content type. An optional `keyPrefix` can be specified when the `GlobalMap` is created; if not provided, the member variable name is used as the prefix. The item key can be any type that can be encoded to bytes. The final state key is the combination of `keyPrefix + key`. The `GlobalMap` proxy is a function which takes a `key` argument and returns a `GlobalState` proxy object for that item.

**Note**: _Contracts using `GlobalMap` must specify adequate [`stateTotals`](https://algorandfoundation.github.io/puya-ts/language-guide/program-structure/#contract-options) to allocate enough global storage slots for the application on creation._

```ts
import type { bytes, uint64 } from '@algorandfoundation/algorand-typescript'
import { assert, Bytes, contract, Contract, GlobalMap } from '@algorandfoundation/algorand-typescript'

@contract({ stateTotals: { globalUints: 10, globalBytes: 10 } })
class GlobalMapDemo extends Contract {
  // The property name 'uintMap' will be used as the key prefix
  uintMap = GlobalMap<string, uint64>()
  // Explicitly override the key prefix
  prefixedMap = GlobalMap<string, uint64>({ keyPrefix: 'p/' })

  test(key: string, value: uint64) {
    // Set a value
    this.uintMap(key).value = value
    // Read a value
    assert(this.uintMap(key).value === value)
    // Check if a value exists
    assert(this.uintMap(key).hasValue)
    // Delete a value
    this.uintMap(key).delete()
    // Access the key prefix
    assert(this.uintMap.keyPrefix === Bytes('uintMap'))
    assert(this.prefixedMap.keyPrefix === Bytes('p/'))
  }
}
```

## Local storage

Local or Account storage is a key/value store of `bytes` or `uint64` stored against a smart contract application _and_ a single account which has opted into that contract. The number of values used must be declared when the application is first created and will affect the minimum balance requirement of an account which opts into the contract. For ARC4 contracts, this information is captured in the ARC32 and ARC56 specification files and automatically included in deployments. For grouping multiple values under a common key and content type, see [LocalMap](#localmap).

```ts
import type { bytes, uint64 } from '@algorandfoundation/algorand-typescript'
import { abimethod, clone, Contract, LocalState, Txn } from '@algorandfoundation/algorand-typescript'
import type { StaticArray, Uint64 } from '@algorandfoundation/algorand-typescript/arc4'

type SampleArray = StaticArray<Uint64, 10>

class LocalStateDemo extends Contract {
  localUint = LocalState<uint64>({ key: 'l1' })
  localUint2 = LocalState<uint64>()
  localBytes = LocalState<bytes>({ key: 'b1' })
  localBytes2 = LocalState<bytes>()
  localEncoded = LocalState<SampleArray>()

  @abimethod({ allowActions: 'OptIn' })
  optIn() {}

  public setState({ a, b }: { a: uint64; b: bytes }, c: SampleArray) {
    this.localUint(Txn.sender).value = a
    this.localUint2(Txn.sender).value = a
    this.localBytes(Txn.sender).value = b
    this.localBytes2(Txn.sender).value = b
    this.localEncoded(Txn.sender).value = clone(c)
  }

  public getState() {
    return {
      localUint: this.localUint(Txn.sender).value,
      localUint2: this.localUint2(Txn.sender).value,
      localBytes: this.localBytes(Txn.sender).value,
      localBytes2: this.localBytes2(Txn.sender).value,
      localEncoded: clone(this.localEncoded(Txn.sender).value),
    }
  }

  public clearState() {
    this.localUint(Txn.sender).delete()
    this.localUint2(Txn.sender).delete()
    this.localBytes(Txn.sender).delete()
    this.localBytes2(Txn.sender).delete()
    this.localEncoded(Txn.sender).delete()
  }
}
```

### LocalMap

`LocalMap` is similar to `LocalState`, but allows for grouping a set of local state values with a common key and content type. An optional `keyPrefix` can be specified when the `LocalMap` is created; if not provided, the member variable name is used as the prefix. The item key can be any type that can be encoded to bytes. The final state key is the combination of `keyPrefix + key`.

The `LocalMap` proxy supports two call signatures:

- `map(key)` returns a `LocalState` proxy which can then be called with an account: `map(key)(account).value`
- `map(key, account)` returns a `LocalStateForAccount` proxy directly: `map(key, account).value`

**Note**: _Contracts using `LocalMap` must specify adequate [`stateTotals`](https://algorandfoundation.github.io/puya-ts/language-guide/program-structure/#contract-options) to allocate enough local storage slots for the application on creation._

```ts
import type { uint64 } from '@algorandfoundation/algorand-typescript'
import { abimethod, assert, Bytes, contract, Contract, LocalMap, Txn } from '@algorandfoundation/algorand-typescript'

@contract({ stateTotals: { localUints: 8, localBytes: 8 } })
class LocalMapDemo extends Contract {
  // The property name 'uintMap' will be used as the key prefix
  uintMap = LocalMap<string, uint64>()
  // Explicitly override the key prefix
  prefixedMap = LocalMap<string, uint64>({ keyPrefix: 'p/' })

  @abimethod({ allowActions: 'OptIn' })
  optIn() {}

  test(key: string, value: uint64) {
    // Set a value (two-arg shorthand)
    this.uintMap(key, Txn.sender).value = value
    // Read a value
    assert(this.uintMap(key, Txn.sender).value === value)
    // Equivalent using the one-arg overload
    assert(this.uintMap(key)(Txn.sender).value === value)
    // Check if a value exists
    assert(this.uintMap(key, Txn.sender).hasValue)
    // Delete a value
    this.uintMap(key, Txn.sender).delete()
    // Access the key prefix
    assert(this.uintMap.keyPrefix === Bytes('uintMap'))
    assert(this.prefixedMap.keyPrefix === Bytes('p/'))
  }
}
```

## Box storage

We provide two different types for accessing box storage: [Box](https://algorandfoundation.github.io/puya-ts/api/) and [BoxMap](https://algorandfoundation.github.io/puya-ts/api/). We also expose raw operations via the [AVM ops](/docs/algorand-typescript/typescript/latest/language-guide/ops/) module.

Before using box storage, be sure to familiarise yourself with the [requirements and restrictions](https://dev.algorand.co/concepts/smart-contracts/storage/box/) of the underlying API.

The `Box` type provides an abstraction over storing a single value in a single box. A box can be declared as a class field (in which case the key must be a compile-time constant), or as a local variable within any subroutine. `Box` proxy instances can be passed around like any other value.

`BoxMap` is similar to the `Box` type, but allows for grouping a set of boxes with a common key and content type.
A `keyPrefix` is specified when the `BoxMap` is created and the item key can be a `Bytes` value, or anything that can be converted to `Bytes`. The final box name is the combination of `keyPrefix + key`. The `BoxMap` proxy is a function which takes a `key` argument and returns you a `Box` proxy object for that item.

```ts
import type { Account, uint64 } from '@algorandfoundation/algorand-typescript'
import { Box, BoxMap, Contract, Txn, assert } from '@algorandfoundation/algorand-typescript'
import { bzero } from '@algorandfoundation/algorand-typescript/op'

export class BoxContract extends Contract {
  boxOne = Box<string>({ key: 'one' })
  boxMapTwo = BoxMap<Account, uint64>({ keyPrefix: 'two' })
  boxRefThree = Box<bytes>({ key: 'three' })

  test(): void {
    if (!this.boxOne.exists) {
      this.boxOne.value = 'Hello World'
    }
    this.boxMapTwo(Txn.sender).value = Txn.sender.balance
    const boxForSender = this.boxMapTwo(Txn.sender)
    assert(boxForSender.exists)
    if (this.boxRefThree.exists) {
      this.boxRefThree.resize(8000)
    } else {
      this.boxRefThree.create({ size: 8000 })
    }

    this.boxRefThree.replace(0, bzero(0).bitwiseInvert())
    this.boxRefThree.replace(4000, bzero(0))
  }
}
```

## Scratch storage

Scratch storage persists for the lifetime of a group transaction and can be used to pass values between multiple calls and/or applications in the same group. Scratch storage for logic signatures is separate from that of the application calls, and logic signatures do not have access to the scratch space of other transactions in the group.

Values can be written to scratch space using the `Scratch.store(...)` method and read from using `Scratch.loadUint64(...)` or `Scratch.loadBytes(...)` methods. These all take a scratch slot number between 0 and 255 inclusive, and that scratch slot must be explicitly reserved by the contract using the `contract` options decorator.

```ts
import { assert, BaseContract, Bytes, contract } from '@algorandfoundation/algorand-typescript'
import { Scratch } from '@algorandfoundation/algorand-typescript/op'

@contract({ scratchSlots: [0, 1, { from: 10, to: 20 }] })
export class ReserveScratchAlgo extends BaseContract {
  setThings() {
    Scratch.store(0, 1)
    Scratch.store(1, Bytes('hello'))
    Scratch.store(15, 45)
  }

  approvalProgram(): boolean {
    this.setThings()

    assert(Scratch.loadUint64(0) === 1)
    assert(Scratch.loadBytes(1) === Bytes('hello'))
    assert(Scratch.loadUint64(15) === 45)
    return true
  }
}
```

Scratch space can be read from group transactions using the `gloadUint64` and `gloadBytes` ops. These ops take the group index of the target transaction and a scratch slot number.

```ts
import { gloadBytes, gloadUint64 } from '@algorandfoundation/algorand-typescript/op'

function test() {
  const b = gloadBytes(0, 1)
  const u = gloadUint64(1, 2)
}
```
