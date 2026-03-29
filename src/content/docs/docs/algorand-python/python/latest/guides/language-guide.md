---
title: Language Guide
---

Algorand Python is conceptually two things:

1. A partial implementation of the Python programming language that runs on the AVM.
2. A framework for development of Algorand smart contracts and logic signatures, with Pythonic
   interfaces to underlying AVM functionality.

You can install the Algorand Python types from PyPi:

> `pip install algorand-python`

or

> `poetry add algorand-python`

---

As a partial implementation of the Python programming language, it maintains the syntax and
semantics of Python. The subset of the language that is supported will grow over time, but it will
never be a complete implementation due to the restricted nature of the AVM as an execution
environment. As a trivial example, the `async` and `await` keywords, and all associated features,
do not make sense to implement.

Being a partial implementation of Python means that existing developer tooling like IDE syntax
highlighting, static type checkers, linters, and auto-formatters, will work out-of-the-box. This is
as opposed to an approach to smart contract development that adds or alters language elements or
semantics, which then requires custom developer tooling support, and more importantly, requires the
developer to learn and understand the potentially non-obvious differences from regular Python.

The greatest advantage to maintaining semantic and syntactic compatibility, however, is only
realised in combination with the framework approach. Supplying a set of interfaces representing
smart contract development and AVM functionality required allows for the possibility of
implementing those interfaces in pure Python! This will make it possible in the near future for you
to execute tests against your smart contracts without deploying them to Algorand, and even step
into and break-point debug your code from those tests.

The framework provides interfaces to the underlying AVM types and operations. By virtue of the AVM
being statically typed, these interfaces are also statically typed, and require your code to be as
well.

The most basic types on the AVM are `uint64` and `bytes[]`, representing unsigned 64-bit integers
and byte arrays respectively. These are represented by [`UInt64`](/docs/algorand-python/python/latest/api/api-algopy/#algopy.UInt64) and
[`Bytes`](/docs/algorand-python/python/latest/api/api-algopy/#algopy.Bytes) in Algorand Python. There are further “bounded” types supported by the AVM
which are backed by these two simple primitives. For example, `bigint` represents a variably sized
(up to 512-bits), unsigned integer, but is actually backed by a `bytes[]`. This is represented by
[`BigUInt`](/docs/algorand-python/python/latest/api/api-algopy/#algopy.BigUInt) in Algorand Python.

Unfortunately, none of these types map to standard Python primitives. In Python, an `int` is
unsigned, and effectively unbounded. A `bytes` similarly is limited only by the memory available,
whereas an AVM `bytes[]` has a maximum length of 4096. In order to both maintain semantic
compatibility and allow for a framework implementation in plain Python that will fail under the
same conditions as when deployed to the AVM, support for Python primitives is
[limited](/docs/algorand-python/python/latest/guides/lg-types/#python-built-in-types).

For more information on the philosophy and design of Algorand Python, please see
[“Principles”](/docs/algorand-python/python/latest/guides/principles/#principles).

If you aren’t familiar with Python, a good place to start before continuing below is with the
[official tutorial](https://docs.python.org/3/tutorial/index.html). Just beware that as mentioned
above, [not all features are supported](/docs/algorand-python/python/latest/guides/lg-unsupported-python-features/).

## Table of Contents

- [Program structure](/docs/algorand-python/python/latest/guides/lg-structure/)
  - [Modules](/docs/algorand-python/python/latest/guides/lg-structure/#modules)
  - [Typing](/docs/algorand-python/python/latest/guides/lg-structure/#typing)
  - [Subroutines](/docs/algorand-python/python/latest/guides/lg-structure/#subroutines)
  - [Contract classes](/docs/algorand-python/python/latest/guides/lg-structure/#contract-classes)
    - [Contract class configuration](/docs/algorand-python/python/latest/guides/lg-structure/#contract-class-configuration)
    - [Example: Simplest possible `algopy.Contract` implementation](/docs/algorand-python/python/latest/guides/lg-structure/#example-simplest-possible-algopy-contract-implementation)
    - [Example: Simple call counter](/docs/algorand-python/python/latest/guides/lg-structure/#example-simple-call-counter)
    - [Example: Simplest possible `algopy.ARC4Contract` implementation](/docs/algorand-python/python/latest/guides/lg-structure/#example-simplest-possible-algopy-arc4contract-implementation)
    - [Example: An ARC-4 call counter](/docs/algorand-python/python/latest/guides/lg-structure/#example-an-arc-4-call-counter)
  - [Logic signatures](/docs/algorand-python/python/latest/guides/lg-structure/#logic-signatures)
- [Types](/docs/algorand-python/python/latest/guides/lg-types/)
  - [AVM types](/docs/algorand-python/python/latest/guides/lg-types/#avm-types)
    - [UInt64](/docs/algorand-python/python/latest/guides/lg-types/#uint64)
    - [Bytes](/docs/algorand-python/python/latest/guides/lg-types/#bytes)
    - [String](/docs/algorand-python/python/latest/guides/lg-types/#string)
    - [BigUInt](/docs/algorand-python/python/latest/guides/lg-types/#biguint)
    - [bool](/docs/algorand-python/python/latest/guides/lg-types/#bool)
    - [Account](/docs/algorand-python/python/latest/guides/lg-types/#account)
    - [Asset](/docs/algorand-python/python/latest/guides/lg-types/#asset)
    - [Application](/docs/algorand-python/python/latest/guides/lg-types/#application)
  - [Python built-in types](/docs/algorand-python/python/latest/guides/lg-types/#python-built-in-types)
    - [bool](/docs/algorand-python/python/latest/guides/lg-types/#id2)
    - [tuple](/docs/algorand-python/python/latest/guides/lg-types/#tuple)
    - [typing.NamedTuple](/docs/algorand-python/python/latest/guides/lg-types/#typing-namedtuple)
    - [None](/docs/algorand-python/python/latest/guides/lg-types/#none)
    - [int, str, bytes, float](/docs/algorand-python/python/latest/guides/lg-types/#int-str-bytes-float)
  - [Template variables](/docs/algorand-python/python/latest/guides/lg-types/#template-variables)
  - [ARC-4 types](/docs/algorand-python/python/latest/guides/lg-types/#arc-4-types)
  - [Type Validation](/docs/algorand-python/python/latest/guides/lg-types/#type-validation)
    - [Validated Sources of Values](/docs/algorand-python/python/latest/guides/lg-types/#validated-sources-of-values)
    - [Non-Validated Sources](/docs/algorand-python/python/latest/guides/lg-types/#non-validated-sources)
- [Control flow structures](/docs/algorand-python/python/latest/guides/lg-control/)
  - [If statements](/docs/algorand-python/python/latest/guides/lg-control/#if-statements)
  - [Ternary conditions](/docs/algorand-python/python/latest/guides/lg-control/#ternary-conditions)
  - [While loops](/docs/algorand-python/python/latest/guides/lg-control/#while-loops)
  - [For Loops](/docs/algorand-python/python/latest/guides/lg-control/#for-loops)
  - [Match Statements](/docs/algorand-python/python/latest/guides/lg-control/#match-statements)
- [Module level constructs](/docs/algorand-python/python/latest/guides/lg-modules/)
  - [Module constants](/docs/algorand-python/python/latest/guides/lg-modules/#module-constants)
  - [If statements](/docs/algorand-python/python/latest/guides/lg-modules/#if-statements)
  - [Integer math](/docs/algorand-python/python/latest/guides/lg-modules/#integer-math)
  - [Strings](/docs/algorand-python/python/latest/guides/lg-modules/#strings)
  - [Type aliases](/docs/algorand-python/python/latest/guides/lg-modules/#type-aliases)
- [Python builtins](/docs/algorand-python/python/latest/guides/lg-builtins/)
  - [len](/docs/algorand-python/python/latest/guides/lg-builtins/#len)
  - [range](/docs/algorand-python/python/latest/guides/lg-builtins/#range)
  - [enumerate](/docs/algorand-python/python/latest/guides/lg-builtins/#enumerate)
  - [reversed](/docs/algorand-python/python/latest/guides/lg-builtins/#reversed)
  - [types](/docs/algorand-python/python/latest/guides/lg-builtins/#types)
- [Error handling and assertions](/docs/algorand-python/python/latest/guides/lg-errors/)
  - [Assertions](/docs/algorand-python/python/latest/guides/lg-errors/#assertions)
    - [Assertion error handling](/docs/algorand-python/python/latest/guides/lg-errors/#assertion-error-handling)
  - [Explicit failure](/docs/algorand-python/python/latest/guides/lg-errors/#explicit-failure)
  - [Exception handling](/docs/algorand-python/python/latest/guides/lg-errors/#exception-handling)
- [Data structures](/docs/algorand-python/python/latest/guides/lg-data-structures/)
  - [Mutability vs Immutability](/docs/algorand-python/python/latest/guides/lg-data-structures/#mutability-vs-immutability)
  - [Static size vs Dynamic size](/docs/algorand-python/python/latest/guides/lg-data-structures/#static-size-vs-dynamic-size)
  - [Size constraints](/docs/algorand-python/python/latest/guides/lg-data-structures/#size-constraints)
  - [Algorand Python composite types](/docs/algorand-python/python/latest/guides/lg-data-structures/#algorand-python-composite-types)
    - [`tuple`](/docs/algorand-python/python/latest/guides/lg-data-structures/#tuple)
    - [`typing.NamedTuple`](/docs/algorand-python/python/latest/guides/lg-data-structures/#typing-namedtuple)
    - [`Struct`](/docs/algorand-python/python/latest/guides/lg-data-structures/#struct)
    - [`arc4.Tuple`](/docs/algorand-python/python/latest/guides/lg-data-structures/#arc4-tuple)
    - [`arc4.Struct`](/docs/algorand-python/python/latest/guides/lg-data-structures/#arc4-struct)
  - [Algorand Python array types](/docs/algorand-python/python/latest/guides/lg-data-structures/#algorand-python-array-types)
    - [`algopy.FixedArray`](/docs/algorand-python/python/latest/guides/lg-data-structures/#algopy-fixedarray)
    - [`algopy.Array`](/docs/algorand-python/python/latest/guides/lg-data-structures/#algopy-array)
    - [`algopy.ReferenceArray`](/docs/algorand-python/python/latest/guides/lg-data-structures/#algopy-referencearray)
    - [`algopy.ImmutableArray`](/docs/algorand-python/python/latest/guides/lg-data-structures/#algopy-immutablearray)
    - [`algopy.arc4.DynamicArray` / `algopy.arc4.StaticArray`](/docs/algorand-python/python/latest/guides/lg-data-structures/#algopy-arc4-dynamicarray-algopy-arc4-staticarray)
  - [Tips](/docs/algorand-python/python/latest/guides/lg-data-structures/#tips)
- [Storing data on-chain](/docs/algorand-python/python/latest/guides/lg-storage/)
  - [Global storage](/docs/algorand-python/python/latest/guides/lg-storage/#global-storage)
  - [Local storage](/docs/algorand-python/python/latest/guides/lg-storage/#local-storage)
  - [Box storage](/docs/algorand-python/python/latest/guides/lg-storage/#box-storage)
  - [Scratch storage](/docs/algorand-python/python/latest/guides/lg-storage/#scratch-storage)
- [Logging](/docs/algorand-python/python/latest/guides/lg-logs/)
- [Transactions](/docs/algorand-python/python/latest/guides/lg-transactions/)
  - [Group Transactions](/docs/algorand-python/python/latest/guides/lg-transactions/#group-transactions)
    - [ARC-4 parameter](/docs/algorand-python/python/latest/guides/lg-transactions/#arc-4-parameter)
    - [Group Index](/docs/algorand-python/python/latest/guides/lg-transactions/#group-index)
  - [Inner Transactions](/docs/algorand-python/python/latest/guides/lg-transactions/#inner-transactions)
    - [Examples](/docs/algorand-python/python/latest/guides/lg-transactions/#examples)
    - [Limitations](/docs/algorand-python/python/latest/guides/lg-transactions/#limitations)
- [AVM operations](/docs/algorand-python/python/latest/guides/lg-ops/)
  - [Txn](/docs/algorand-python/python/latest/guides/lg-ops/#txn)
  - [Global](/docs/algorand-python/python/latest/guides/lg-ops/#global)
- [Opcode budgets](/docs/algorand-python/python/latest/guides/lg-opcode-budget/)
- [ARC-4: Application Binary Interface](/docs/algorand-python/python/latest/guides/lg-arc4/)
  - [ARC-32 and ARC-56](/docs/algorand-python/python/latest/guides/lg-arc4/#arc-32-and-arc-56)
  - [Methods](/docs/algorand-python/python/latest/guides/lg-arc4/#methods)
  - [Router](/docs/algorand-python/python/latest/guides/lg-arc4/#router)
  - [Types](/docs/algorand-python/python/latest/guides/lg-arc4/#types)
    - [Booleans](/docs/algorand-python/python/latest/guides/lg-arc4/#booleans)
    - [Unsigned ints](/docs/algorand-python/python/latest/guides/lg-arc4/#unsigned-ints)
    - [Unsigned fixed point decimals](/docs/algorand-python/python/latest/guides/lg-arc4/#unsigned-fixed-point-decimals)
    - [Bytes and strings](/docs/algorand-python/python/latest/guides/lg-arc4/#bytes-and-strings)
    - [Static arrays](/docs/algorand-python/python/latest/guides/lg-arc4/#static-arrays)
    - [Address](/docs/algorand-python/python/latest/guides/lg-arc4/#address)
    - [Dynamic arrays](/docs/algorand-python/python/latest/guides/lg-arc4/#dynamic-arrays)
    - [Tuples](/docs/algorand-python/python/latest/guides/lg-arc4/#tuples)
    - [Structs](/docs/algorand-python/python/latest/guides/lg-arc4/#structs)
    - [ARC-4 Container Packing](/docs/algorand-python/python/latest/guides/lg-arc4/#arc-4-container-packing)
    - [Reference types](/docs/algorand-python/python/latest/guides/lg-arc4/#reference-types)
    - [Mutability](/docs/algorand-python/python/latest/guides/lg-arc4/#mutability)
- [ARC-28: Structured event logging](/docs/algorand-python/python/latest/guides/lg-arc28/)
  - [Emitting Events](/docs/algorand-python/python/latest/guides/lg-arc28/#emitting-events)
- [Calling other applications](/docs/algorand-python/python/latest/guides/lg-calling-apps/)
  - [`algopy.arc4.abi_call`](/docs/algorand-python/python/latest/guides/lg-calling-apps/#algopy-arc4-abi-call)
    - [Alternative ways to use `arc4.abi_call`](/docs/algorand-python/python/latest/guides/lg-calling-apps/#alternative-ways-to-use-arc4-abi-call)
  - [`algopy.arc4.arc4_create`](/docs/algorand-python/python/latest/guides/lg-calling-apps/#algopy-arc4-arc4-create)
  - [`algopy.arc4.arc4_update`](/docs/algorand-python/python/latest/guides/lg-calling-apps/#algopy-arc4-arc4-update)
  - [Using `itxn.ApplicationCall`](/docs/algorand-python/python/latest/guides/lg-calling-apps/#using-itxn-applicationcall)
- [Compiling to AVM bytecode](/docs/algorand-python/python/latest/guides/lg-compile/)
  - [Outputting AVM bytecode from CLI](/docs/algorand-python/python/latest/guides/lg-compile/#outputting-avm-bytecode-from-cli)
  - [Obtaining bytecode within other contracts](/docs/algorand-python/python/latest/guides/lg-compile/#obtaining-bytecode-within-other-contracts)
  - [Template variables](/docs/algorand-python/python/latest/guides/lg-compile/#template-variables)
    - [CLI](/docs/algorand-python/python/latest/guides/lg-compile/#cli)
    - [Within other contracts](/docs/algorand-python/python/latest/guides/lg-compile/#within-other-contracts)
- [Unsupported Python features](/docs/algorand-python/python/latest/guides/lg-unsupported-python-features/)
  - [raise, try/except/finally](/docs/algorand-python/python/latest/guides/lg-unsupported-python-features/#raise-try-except-finally)
  - [with](/docs/algorand-python/python/latest/guides/lg-unsupported-python-features/#with)
  - [async](/docs/algorand-python/python/latest/guides/lg-unsupported-python-features/#async)
  - [closures & lambdas](/docs/algorand-python/python/latest/guides/lg-unsupported-python-features/#closures-lambdas)
  - [global keyword](/docs/algorand-python/python/latest/guides/lg-unsupported-python-features/#global-keyword)
  - [Inheritance (outside of contract classes)](/docs/algorand-python/python/latest/guides/lg-unsupported-python-features/#inheritance-outside-of-contract-classes)
- [PuyaPy migration from 4.x to 5.0](/docs/algorand-python/python/latest/guides/lg-migration-4-5/)
  - [`algopy.Array` to `algopy.ReferenceArray`](/docs/algorand-python/python/latest/guides/lg-migration-4-5/#algopy-array-to-algopy-referencearray)
  - [`algopy.Account`, `algopy.Asset` and `algopy.Application` routing behaviour](/docs/algorand-python/python/latest/guides/lg-migration-4-5/#algopy-account-algopy-asset-and-algopy-application-routing-behaviour)
  - [Constructor signatures of `ImmutableArray` and `ReferenceArray`](/docs/algorand-python/python/latest/guides/lg-migration-4-5/#constructor-signatures-of-immutablearray-and-referencearray)
