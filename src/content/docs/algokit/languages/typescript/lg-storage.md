---
title: Storage
---

Algorand smart contracts have [three different types of on-chain storage](https://dev.algorand.co/concepts/smart-contracts/storage/overview/)
they can utilise: [Global storage](#global-storage), [Local storage](#local-storage), and [Box Storage](#box-storage). They also have access to a transient form of storage in [Scratch space](#scratch-storage).

## Global storage

Global or Application storage is a key/value store of `bytes` or `uint64` values stored against a smart contract application. The number of values used must be declared when the application is first created and will affect the [minimum balance requirement](https://dev.algorand.co/concepts/smart-contracts/costs-constraints/#mbr) for the application. For ARC4 contracts this information is captured in the ARC32 and ARC56 specification files and automatically included in deployments.

Global storage values are declared using the [GlobalState](api/index/functions/GlobalState) function to create a [GlobalState](api/index/type-aliases/GlobalState) proxy object.

```ts
import {
  GlobalState,
  Contract,
  uint64,
  bytes,
  Uint64,
  contract,
} from '@algorandfoundation/algorand-typescript';

class DemoContract extends Contract {
  // The property name 'globalInt' will be used as the key
  globalInt = GlobalState<uint64>({ initialValue: Uint64(1) });
  // Explicitly override the key
  globalBytes = GlobalState<bytes>({ key: 'alternativeKey' });
}

// If using dynamic keys, state must be explicitly reserved
@contract({ stateTotals: { globalBytes: 5 } })
class DynamicAccessContract extends Contract {
  test(key: string, value: string) {
    // Interact with state using a dynamic key
    const dynamicAccess = GlobalState<string>({ key });
    dynamicAccess.value = value;
  }
}
```

## Local storage

Local or Account storage is a key/value store of `bytes` or `uint64` stored against a smart contract application _and_ a single account which has opted into that contract. The number of values used must be declared when the application is first created and will affect the minimum balance requirement of an account which opts in to the contract. For ARC4 contracts this information is captured in the ARC32 and ARC56 specification files and automatically included in deployments.

```ts
import type { bytes, uint64 } from '@algorandfoundation/algorand-typescript';
import { abimethod, Contract, LocalState, Txn } from '@algorandfoundation/algorand-typescript';
import type { StaticArray, UintN } from '@algorandfoundation/algorand-typescript/arc4';

type SampleArray = StaticArray<UintN<64>, 10>;

export class LocalStateDemo extends Contract {
  localUint = LocalState<uint64>({ key: 'l1' });
  localUint2 = LocalState<uint64>();
  localBytes = LocalState<bytes>({ key: 'b1' });
  localBytes2 = LocalState<bytes>();
  localEncoded = LocalState<SampleArray>();

  @abimethod({ allowActions: 'OptIn' })
  optIn() {}

  public setState({ a, b }: { a: uint64; b: bytes }, c: SampleArray) {
    this.localUint(Txn.sender).value = a;
    this.localUint2(Txn.sender).value = a;
    this.localBytes(Txn.sender).value = b;
    this.localBytes2(Txn.sender).value = b;
    this.localEncoded(Txn.sender).value = c.copy();
  }

  public getState() {
    return {
      localUint: this.localUint(Txn.sender).value,
      localUint2: this.localUint2(Txn.sender).value,
      localBytes: this.localBytes(Txn.sender).value,
      localBytes2: this.localBytes2(Txn.sender).value,
      localEncoded: this.localEncoded(Txn.sender).value.copy(),
    };
  }

  public clearState() {
    this.localUint(Txn.sender).delete();
    this.localUint2(Txn.sender).delete();
    this.localBytes(Txn.sender).delete();
    this.localBytes2(Txn.sender).delete();
    this.localEncoded(Txn.sender).delete();
  }
}
```

## Box storage

We provide 3 different types for accessing box storage: [Box](./api/index/functions/Box), [BoxMap](./api/index/functions/BoxMap), and [BoxRef](./api/index/functions/BoxRef). We also expose raw operations via the [AVM ops](./lg-ops) module.

Before using box storage, be sure to familiarise yourself with the [requirements and restrictions](https://dev.algorand.co/concepts/smart-contracts/storage/box/) of the underlying API.

The `Box` type provides an abstraction over storing a single value in a single box. A box can be declared as a class field (in which case the key must be a compile time constant); or as a local variable within any
subroutine. `Box` proxy instances can be passed around like any other value.

`BoxMap` is similar to the `Box` type, but allows for grouping a set of boxes with a common key and content type.
A `keyPrefix` is specified when the `BoxMap` is created and the item key can be a `Bytes` value, or anything that can be converted to `Bytes`. The final box name is the combination of `keyPrefix + key`.

`BoxRef` is a specialised type for interacting with boxes which contain binary data. In addition to being able to set and read the box value, there are operations for extracting and replacing just a portion of the box data which
is useful for minimizing the amount of reads and writes required, but also allows you to interact with byte arrays which are longer than the AVM can support (currently 4096).

```ts
import type { Account, uint64 } from '@algorandfoundation/algorand-typescript';
import {
  Box,
  BoxMap,
  BoxRef,
  Contract,
  Txn,
  assert,
} from '@algorandfoundation/algorand-typescript';
import { bzero } from '@algorandfoundation/algorand-typescript/op';

export class BoxContract extends Contract {
  boxOne = Box<string>({ key: 'one' });
  boxMapTwo = BoxMap<Account, uint64>({ keyPrefix: 'two' });
  boxRefThree = BoxRef({ key: 'three' });

  test(): void {
    if (!this.boxOne.exists) {
      this.boxOne.value = 'Hello World';
    }
    this.boxMapTwo(Txn.sender).value = Txn.sender.balance;
    const boxForSender = this.boxMapTwo(Txn.sender);
    assert(boxForSender.exists);
    if (this.boxRefThree.exists) {
      this.boxRefThree.resize(8000);
    } else {
      this.boxRefThree.create({ size: 8000 });
    }

    this.boxRefThree.replace(0, bzero(0).bitwiseInvert());
    this.boxRefThree.replace(4000, bzero(0));
  }
}
```

## Scratch storage

Scratch storage persists for the lifetime of a group transaction and can be used to pass values between multiple calls and/or applications in the same group. Scratch storage for logic signatures is separate from that of the application calls and logic signatures do not have access to the scratch space of other transactions in the group.

Values can be written to scratch space using the `Scratch.store(...)` method and read from using `Scratch.loadUint64(...)` or `Scratch.loadBytes(...)` methods. These all take a scratch slot number between 0 and 255 inclusive and that scratch slot must be explicitly reserved by the contract using the `contract` options decorator.

```ts
import { assert, BaseContract, Bytes, contract } from '@algorandfoundation/algorand-typescript';
import { Scratch } from '@algorandfoundation/algorand-typescript/op';

@contract({ scratchSlots: [0, 1, { from: 10, to: 20 }] })
export class ReserveScratchAlgo extends BaseContract {
  setThings() {
    Scratch.store(0, 1);
    Scratch.store(1, Bytes('hello'));
    Scratch.store(15, 45);
  }

  approvalProgram(): boolean {
    this.setThings();

    assert(Scratch.loadUint64(0) === 1);
    assert(Scratch.loadBytes(1) === Bytes('hello'));
    assert(Scratch.loadUint64(15) === 45);
    return true;
  }
}
```

Scratch space can be read from group transactions using the `gloadUint64` and `gloadBytes` ops. These ops take the group index of the target transaction, and a scratch slot number.

```ts
import { gloadBytes, gloadUint64 } from '@algorandfoundation/algorand-typescript/op';

function test() {
  const b = gloadBytes(0, 1);
  const u = gloadUint64(1, 2);
}
```
