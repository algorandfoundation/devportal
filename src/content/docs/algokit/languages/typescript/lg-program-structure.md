---
title: Program Structure
---

An Algorand TypeScript program is declared in a TypeScript module with a file extension of `.algo.ts`. Declarations can be split across multiple files, and types can be imported between these files using standard TypeScript import statements. The CommonJS `require` function is not supported, and the asynchronous `import(...)` expression is also not supported, as imports must be compile-time constant.

Algorand TypeScript constructs and types can be imported from the `@algorandfoundation/algorand-typescript` module, or one of its submodules. Compilation artifacts do not need to be exported unless you require them in another module; any non-abstract contract or logic signature discovered in your entry files will be output. Contracts and logic signatures discovered in non-entry files will not be output.

## Constants

Constants declared at the module level must have a compile-time constant value or a template variable. Some basic expressions are supported so long as they result in a compile-time constant.

```ts
import { uint64 } from '@algorandfoundation/algorand-typescript';

const a: uint64 = 1000;
const b: uint64 = 2000;
const c: uint64 = a * b;
```

## Free Subroutines

Free subroutines can be declared at the module level and called from any contract, logic signature, or other subroutine. Subroutines do not have any compiler output on their own unless they are called by a contract or logic signature.

```ts
import { uint64 } from '@algorandfoundation/algorand-typescript';

function add(a: uint64, b: uint64): uint64 {
  return a + b;
}
```

## Contracts

A contract in Algorand TypeScript is defined by declaring a class that extends the `Contract` or `BaseContract` types exported by `@algorandfoundation/algorand-typescript`. See [ABI routing](docs/abi-routing) docs for more on the differences between these two options.

### ARC4 Contract

Contracts that extend the `Contract` type are ARC4-compatible contracts. Any `public` methods on the class will be exposed as ABI methods, callable from other contracts and off-chain clients. `private` and `protected` methods can only be called from within the contract itself or its subclasses. Note that TypeScript methods are `public` by default if no access modifier is present. A contract is considered valid even if it has no methods, though its utility is questionable.

```ts
import { Contract } from '@algorandfoundation/algorand-typescript';

class DoNothingContract extends Contract {}

class HelloWorldContract extends Contract {
  sayHello(name: string) {
    return `Hello ${name}`;
  }
}
```

### Contract Options

The `contract` decorator allows you to specify additional options and configuration for a contract, such as which AVM version it targets, which scratch slots it makes use of, or the total global and local state which should be reserved for it. It should be placed on your contract class declaration.

```ts
import { Contract, contract } from '@algorandfoundation/algorand-typescript';

@contract({
  name: 'My Contracts Name',
  avmVersion: 11,
  scratchSlots: [1, 2, 3],
  stateTotals: { globalUints: 4, localUints: 0 },
})
class MyContract extends Contract {}
```

### Application Lifecycle Methods and other method options

There are two approaches to handling application lifecycle events: by implementing a well-known method (convention-based), or by using decorators (decorator-based). It is also possible to use a combination of the two; however, decorators must not conflict with the implied behaviour of a well-known method.

#### Convention-based

Application lifecycle methods can be handled by a convention of well-known method names. The easiest way to discover these method names is to `implement` the interface `ConventionalRouting` from the `@algorandfoundation/algorand-typescript/arc4` module.

- Explicit implementation of this interface is not required, but it will assist in autocomplete suggestions for supported methods.
- Only implement the methods your application should support, i.e., don't implement `updateApplication` if your application should not be updatable.
- 'Well-known' methods can receive arguments and return values.

```ts
import type { bytes, uint64 } from '@algorandfoundation/algorand-typescript';
import { Contract, log } from '@algorandfoundation/algorand-typescript';
import type { ConventionalRouting } from '@algorandfoundation/algorand-typescript/arc4';

export class TealScriptConventionsAlgo extends Contract implements ConventionalRouting {
  /**
   * The function to invoke when closing out of this application
   */
  closeOutOfApplication(arg: uint64) {
    return arg;
  }

  /**
   * The function to invoke when creating this application
   */
  createApplication(value: bytes) {
    log(value);
  }

  /**
   * The function to invoke when deleting this application
   */
  deleteApplication() {}

  /**
   * The function to invoke when opting in to this application
   */
  optInToApplication() {}

  /**
   * The function to invoke when updating this application
   */
  updateApplication() {}

  /**
   * Any public method that is not one of the 'well-known' names exhibit the default behaviour detailed in
   * the next section.
   */
  customMethod() {}
}
```

#### Decorator-based

The default `OnCompletionAction` (OCA) for public methods is `NoOp`. To change this, a method should be decorated with the `abimethod` or `baremethod` decorators. These decorators can also be used to change the exported name of the method, determine if a method should be available on application create or not, and specify default values for arguments. See the [ABI Routing guide](docs/abi-routing) for more details on how these various options work together.

```ts
import type { uint64 } from '@algorandfoundation/algorand-typescript';
import { abimethod, baremethod, Contract, Uint64 } from '@algorandfoundation/algorand-typescript';

class AbiDecorators extends Contract {
  @abimethod({ allowActions: 'NoOp' })
  public justNoop(): void {}

  @abimethod({ onCreate: 'require' })
  public createMethod(): void {}

  @abimethod({
    allowActions: ['NoOp', 'OptIn', 'CloseOut', 'DeleteApplication', 'UpdateApplication'],
  })
  public allActions(): void {}

  @abimethod({ readonly: true, name: 'overrideReadonlyName' })
  public readonly(): uint64 {
    return 5;
  }

  @baremethod()
  public noopBare() {}
}
```

### Constructor logic and implicit create method

If a contract does not define an explicit create method (i.e., `onCreate: 'allow'` or `onCreate: 'require'`), then the compiler will attempt to add a `bare` create method with no implementation. Without this, you would not be able to deploy the contract.

Contracts that define custom constructor logic will have this logic executed once on application create, immediately before any other logic is executed.

```ts
export class MyContract extends Contract {
  constructor() {
    super();
    log('This is executed on create only');
  }
}
```

### Custom approval and clear state programs

The default implementation of a clear state program on a contract is to just return `true`; custom logic can be added by overriding the base implementation.

The default implementation of an approval program on a contract is to perform ABI routing. Custom logic can be added by overriding the base implementation. If your implementation does not call `super.approvalProgram()` at some point, ABI routing will not function.

```ts
class Arc4HybridAlgo extends Contract {
  override approvalProgram(): boolean {
    log('before');
    const result = super.approvalProgram();
    log('after');
    return result;
  }

  override clearStateProgram(): boolean {
    log('clearing state');
    return true;
  }

  someMethod() {
    log('some method');
  }
}
```

### Application State

Application state for a contract can be defined by declaring instance properties on a contract class using the relevant state proxy type. In the case of `GlobalState`, it is possible to define an `initialValue` for the field. The logic to set this initial value will be injected into the contract's constructor. Global and local state keys default to the property name, but can be overridden with the `key` option. Box proxies always require an explicit key.

```ts
import {
  Contract,
  uint64,
  bytes,
  GlobalState,
  LocalState,
  Box,
} from '@algorandfoundation/algorand-typescript';

export class ContractWithState extends Contract {
  globalState = GlobalState<uint64>({ initialValue: 123, key: 'customKey' });
  localState = LocalState<string>();
  boxState = Box<bytes>({ key: 'boxKey' });
}
```

### Custom approval and clear state programs

Contracts can optionally override the default implementation of the approval and clear state programs. This covers some more advanced scenarios where you might need to perform logic before or after an ABI method, or perform custom method routing entirely. In the case of the approval program, calling `super.approvalProgram()` will perform the default behaviour of ARC4 routing. Note that the 'Clear State' action will be taken regardless of the outcome of the `clearStateProgram`, so care should be taken to ensure any cleanup actions required are done in a way which cannot fail.

```ts
import { Contract, log } from '@algorandfoundation/algorand-typescript';

class Arc4HybridAlgo extends Contract {
  override approvalProgram(): boolean {
    log('before');
    const result = super.approvalProgram();
    log('after');
    return result;
  }

  override clearStateProgram(): boolean {
    log('clearing state');
    return true;
  }

  someMethod() {
    log('some method');
  }
}
```

### Multi-inheritance

JavaScript does not support multi-inheritance natively, but it is a useful feature for composing a larger contract out of several smaller ones. Algorand TypeScript supports multi-inheritance via the [Polytype](https://github.com/fasttime/Polytype) package, and the compiled code matches the semantics of Polytype at runtime. Method resolution order is _depth first_, meaning the entire prototype hierarchy of the _first_ base type will be walked before moving onto the _second_ base type and so on.

```ts
import type { uint64 } from '@algorandfoundation/algorand-typescript';
import { Contract, GlobalState } from '@algorandfoundation/algorand-typescript';
import { classes } from 'polytype';

class StoreString extends Contract {
  stringStore = GlobalState<string>();

  setStore(value: string) {
    this.stringStore.value = value;
  }
}

class StoreUint64 extends Contract {
  uint64Store = GlobalState<uint64>();

  setStore(value: uint64) {
    this.uint64Store.value = value;
  }
}

class StoreBoth extends classes(StoreString, StoreUint64) {
  test(theString: string, theUint: uint64) {
    // setStore resolved from first base type
    this.setStore(theString);

    // Can explicitly resolve from other base type with .class
    super.class(StoreUint64).setStore(theUint);
  }
}
```

While method names can overlap between base types (and be resolved as above), properties (Local and Global State + Boxes) must be unique and will result in a compile error if they are redefined.

## BaseContract

If ARC4 routing and/or interoperability is not required, a contract can extend the `BaseContract` type, which gives full control to the developer to implement the approval and clear state programs. If this type is extended directly, it will not be possible to output ARC-32 or ARC-56 app spec files and related artifacts. Transaction arguments will also need to be decoded manually.

```ts
import { BaseContract, log, op } from '@algorandfoundation/algorand-typescript';

class DoNothingContract extends BaseContract {
  public approvalProgram(): boolean {
    return true;
  }
  public clearStateProgram(): boolean {
    return true;
  }
}
class HelloWorldContract extends BaseContract {
  public approvalProgram(): boolean {
    const name = String(op.Txn.applicationArgs(0));
    log(`Hello, ${name}`);
    this.notRouted();
    return true;
  }

  public notRouted() {
    log('This method is not public accessible');
  }
}
```

# Logic Signatures

Logic signatures, or smart signatures as they are sometimes referred to, are single program constructs that can be used to sign transactions. If the logic defined in the program runs without error, the signature is considered valid - if the program crashes, or returns `0` or `false`, the signature is not valid and the transaction will be rejected. It is possible to delegate signature privileges for any standard account to a logic signature program such that any transaction signed with the logic signature program will pass on behalf of the delegating account, provided the program logic succeeds. This is obviously a dangerous proposition and such a logic signature program should be meticulously designed to avoid abuse. You can read more about logic signatures on Algorand [here](https://dev.algorand.co/concepts/smart-contracts/logic-sigs/).

Logic signature programs are stateless, and support a different subset of [op codes](https://dev.algorand.co/reference/algorand-teal/opcodes/) than smart contracts. The LogicSig class should only ever have a `program` method. Complex signatures can make use of [free subroutines](#free-subroutines) to break up logic into smaller chunks.

```ts
import { assert, LogicSig, Txn, Uint64 } from '@algorandfoundation/algorand-typescript';

export class AlwaysAllow extends LogicSig {
  program() {
    return true;
  }
}

function feeIsZero() {
  assert(Txn.fee === 0, 'Fee must be zero');
}

export class AllowNoFee extends LogicSig {
  program() {
    feeIsZero();
    return Uint64(1);
  }
}
```
