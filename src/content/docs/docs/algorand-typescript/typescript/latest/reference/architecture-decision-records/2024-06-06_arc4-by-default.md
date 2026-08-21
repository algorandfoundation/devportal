---
title: 'ARC4 by default'
---

# Architecture Decision Record - ARC4 by default

- **Status**: Draft
- **Owner:** Tristan Menzel
- **Deciders**: Alessandro Cappellato (Algorand Foundation), Bruno Martins (Algorand Foundation), Rob Moore (MakerX)
- **Date created**: 2024-06-06
- **Date decided**: N/A
- **Date updated**: 2024-06-06

## Context

A smart contract on the Algorand Blockchain consists of an approval program and a clear state program. Smart signatures (also known as logic signatures) consist of only an approval program. For signatures the approval program is run to determine if a transaction signed by the program should be considered valid. For contracts the clear state program is invoked for Application Call (`appl`) transactions which have an on-completion action (`apan`) set to clear state (`3`). The transaction is committed to the chain regardless of the outcome of a clear state program. For all other on completion actions the approval program is invoked. It is up to the approval program to inspect the current transaction's properties to determine the outcome of this transaction.

[ARC4](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004.md) introduces conventions for encoding data passed to a smart contract, and for routing execution to specific subroutines within the approval program based on key properties of the Application Call transaction (eg. The on completion action and application args). It is the current standard for developing smart contracts on Algorand, but may not always be. There are several other ARCs such as [ARC32](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0032.md), [ARC56](https://github.com/algorandfoundation/ARCs/blob/e540d921502f19c720b64d8df1f09563158ca348/ARCs/arc-0056.md), and [ARC28](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0028.md) which build on, expand, or complement ARC4.

The term ARC4 and ABI are sometimes used interchangeably however ABI refers to the generic concept of an Application Binary Interface (what ARC4 provides) and ARC4 being the specific implementation we have of an ABI on Algorand at this moment.

## Requirements

- It must be possible to define a contract with ARC4 routed methods
- It must be possible to define a contract which doesn't use ARC4 routing

## Principles

- **[AlgoKit Guiding Principles](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/algokit.md#guiding-principles)** - specifically Seamless onramp, Leverage existing ecosystem, Meet devs where they are
- **[Algorand Python Principles](https://algorandfoundation.github.io/puya/principles.html#principles)**
- **[Algorand TypeScript Guiding Principles](/docs/algorand-typescript/typescript/latest/reference/readme/#guiding-principals)**

## Options

### Option 1 - ARC4 by default

The approach taken by TealScript is that contracts are ARC4 by default. All public methods are exposed as ABI methods (callable from outside the contract) and one must explicitly decorate a method that should not be ABI routed. Only one non abi routed method can be defined per on completion action and this method is invoked only if no other ABI routed methods handle the call first. It is not necessary to decorate an ABI method unless an on completion action that is not `NoOp` is required.

```ts
class NonABIExample extends Contract {
  private add(x: uint64, y: uint64): uint64 {
    return x + y;
  }

  abiAdd(x: uint64, y: uint64): uint64 {
    return this.add(x, y);
  }

  @nonABIRouterFallback.call('NoOp')
  nonAbiAdd(): void {
    const x = btoi(this.txn.applicationArgs![0]);
    const y = btoi(this.txn.applicationArgs![1]);
    log(itob(this.add(x, y)));
  }
}
```

Handling of 'other' on completion actions can be done via decorators however the prescribed way in the documentation is to implement a [well-known](https://tealscript.netlify.app/guides/lifecycle/) method on your contract.

Pros:

- A developer new to Algorand does not need to learn much about ARC4 in order to implement an ARC4 compliant contract.
- Flexibility exists for advanced devs to 'break out' of the ARC4 default when desired (kind of)

Cons:

- The current implementation in TealScript outputs a lot of redundant teal in scenarios where an advanced user wants to do their own routing
- Doesn't give us a low friction path forward if ARC4 were to be replaced, or significantly updated
- In TypeScript, class members are public by default which could lead to accidentally exposing a method which shouldn't be.

### Option 2 - Minimum Viable Smart Contract by default, ARC4 is opt in

The approach taken by Algorand Python is that a smart contract which extends the base `algopy.Contract` class will inherit no behaviour beyond that described in the context above (ie. `onComplete == clearState ? clearStateProgram() : approvalProgram()`). This means the minimum viable smart contract would look something like this:

```python
# Contract which always approves
class MVContract(Contract):
    def approval_program(self) -> bool:
        return True

    def clear_state_program(self) -> bool:
        return True
```

a TypeScript version might look like this:

```ts
export default class MVContract extends Contract {
  approvalProgram(): boolean {
    return true;
  }

  clearStateProgram(): boolean {
    return true;
  }
}
```

An ARC4 compliant contract would instead extend the `algopy.arc4.ARC4Contract` base class. In Algorand Python, each method must be decorated with either `@abimethod` or `@subroutine` to indicate a public or private method respectively.

```python
class HelloWorldContract(ARC4Contract):
    @arc4.abimethod
    def hello(self, name: String) -> String:
        return "Hello, " + name
```

a TypeScript version might look like this:

```ts
export default class HelloWorldContract extends arc4.Arc4Contract {
  @arc4.abimethod()
  sayHello(name: str): arc4.Str {
    return new arc4.Str(`Hello ${name}`);
  }
}
```

Pros:

- ARC4 support is built on top of a framework that can function in its own right giving us greater confidence we can support new ARC standards if/when they come, without breaking existing ARC4 support
- Minimum viable smart contract gives power users absolute control of the AVM without ARC4 getting in the way
- Explicit decorators reduce the likelihood of accidentally exposing a method publicly.

Cons:

- A developer needs to consciously choose ARC4 which means they need to be aware of it beforehand, and require a basic understanding of its workings
- Requiring decorators on all methods adds noise to what might otherwise be a very terse contract.

### Option 3 - Option 2, but using public/private keywords

The specific characteristics of Python that lead to mandatory decorators on all Algorand Python methods do not apply to TypeScript. Whilst still keeping the separation of ARC4 from option 2, we could use TypeScript's `public` and `private` keywords to flag an ABI method versus a private subroutine. This behaviour aligns nicely to the concept of a deployed app being equivalent to an [instance of the class](https://algorandfoundation.github.io/puya/lg-structure.html#contract-classes). The decorator would still be used in cases where a non-default on completion action was required but otherwise optional. We can require (via the compiler) explicit access keywords (`public`/`private`/`protected`) on all methods to work around the potential security issues of public by default. This behaviour would only apply when extending `arc4.Arc4Contract`. Access modifiers on a contract which extends the base `Contract` would have no implicit effect outside of controlling code reuse with inheritance.

- Access modifiers are required on all methods (prevents accidental exposure of methods)
- public methods are ABI methods
- private and protected methods are subroutines
- optional attribute to configure allowable actions and create/not on create behaviour

```ts
export class NonAbiContract extends Contract {
  public override approvalProgram(): boolean {
    // Freedom to implement whatever routing makes sense in this method. The only requirement is to return boolean | uint64
    return true;
  }
  public override clearStateProgram(): boolean {
    return true;
  }
}

export default class DemoContract extends arc4.Arc4Contract {
  constructor() {
    super();
    // Constructor is called implicitly on application created before any other method
  }

  @arc4.abimethod({ create: 'require' })
  public createApplication(): void {}

  @arc4.baremethod({ create: 'require', allowActions: ['NoOp'] })
  public createBare(): void {
    // Called when Transaction.nummAppArgs is 0
  }

  // @arc4.abimethod({ allowActions: ['NoOp'] }) is implied
  public generalNoOpMethod(): void {}

  @arc4.abimethod({ allowActions: ['NoOp', 'OptIn'] })
  public specificOnCompletion(): void {}

  private privateSubroutine(): void {}
}
```

Pros:

- Access modifier keywords are idiomatic TypeScript

Cons:

- A developer needs to consciously choose ARC4 which means they need to be aware of it beforehand, and require a basic understanding of its workings

### Option 4 - Hybrid of Options 1 and 3

- ARC-4 is default (like option 1)
  - If in the future there is a logical different ARC standard that makes sense to be the default it would be possible to add either a new CLI parameter or different base class that could be used to trigger that different behaviour
  - `BaseContract` available as escape hatch to control raw AVM behaviour (matching the functionality exposed by the Puya compiler architecture)
- There is an escape hatch to do fallback routing (like option 1, although the suggested approach differs; see below)
  - `onUnmatchedRoute` called if no routing matches, default implementation is to error
- Constructor allows for common initialisation logic and provides the "app is equivalent to a class instance" behaviour
- Access modifiers are required on all methods and determine subroutine vs ARC-4 method (Like options 1 and 3)
- Optional attribute to configure allowable actions and create/not on create behaviour

```ts
export class NonAbiContract extends BaseContract {
  public override approvalProgram(): boolean {
    // Freedom to implement whatever routing makes sense in this method. The only requirement is to return boolean | uint64
    return true;
  }
  public override clearStateProgram(): boolean {
    return true;
  }
}

export default class DemoContract extends Contract {
  constructor() {
    super();
    // Constructor is called implicitly on application created before any other method
  }

  @arc4.abimethod({ create: 'require' })
  public createApplication(): void {}

  @arc4.baremethod({ create: 'require', allowActions: ['NoOp'] })
  public createBare(): void {
    // Called when Transaction.nummAppArgs is 0
  }

  // @arc4.abimethod({ allowActions: ['NoOp'] }) is implied
  public generalNoOpMethod(): void {}

  @arc4.abimethod({ allowActions: ['NoOp', 'OptIn'] })
  public specificOnCompletion(): void {}

  // Force override keyword because it gives us an error if the method does not exist on the base type (eg. because there's a typo)
  //   'protected' because this method should not be directly callable (ie. not an abi method)
  // Having this as a single method rather than an attribute like in Option 1 let's the semantics of the language
  //   guide us on how to use this functionality
  protected override onUnmatchedRoute(): void {
    // Called for any non-clearstate on completion action where Transaction.applicationArgs(0) did not match any abi method selector
    // base implementation raises an error
  }

  private privateSubroutine(): void {}
}
```

Pros:

- Guides newcomers into the pit of success (using arc4 by default, obvious unmatched extension behaviour, constructor )
- Allows power users to breakout of ARC-4 by default with minimal fuss (and full control) (extending `BaseContract`)

Cons:

- Slight breaking change to TEALScript, but minimal and only for advanced use case that is rarely used (fallback router)

## Preferred options

Option 4 is the preferred option as it best balances all requirements, pros, and cons

## Selected option

Option 4 has been selected with some further additions

- `Contract.prototype.approvalProgram` is responsible for routing logic. User contracts can override this method to provide custom behaviour and call `super.approvalProgram()` in order to trigger routing.
- Added support for tealscript's conventional routing (ie. `optInToApplication` implicitly decorated with `@abimethod({ allowActions: 'OptIn' })`). This works alongside the decorator based routing.
- `public` keyword is not required as this proved too verbose
