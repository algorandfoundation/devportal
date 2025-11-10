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
and byte arrays respectively. These are represented by [`UInt64`](/reference/algorand-python/api/api-algopy/#algopy.UInt64) and
[`Bytes`](/reference/algorand-python/api/api-algopy/#algopy.Bytes) in Algorand Python. There are further “bounded” types supported by the AVM
which are backed by these two simple primitives. For example, `bigint` represents a variably sized
(up to 512-bits), unsigned integer, but is actually backed by a `bytes[]`. This is represented by
[`BigUInt`](/reference/algorand-python/api/api-algopy/#algopy.BigUInt) in Algorand Python.

Unfortunately, none of these types map to standard Python primitives. In Python, an `int` is
unsigned, and effectively unbounded. A `bytes` similarly is limited only by the memory available,
whereas an AVM `bytes[]` has a maximum length of 4096. In order to both maintain semantic
compatibility and allow for a framework implementation in plain Python that will fail under the
same conditions as when deployed to the AVM, support for Python primitives is
[limited](/algokit/languages/python/lg-types/#python-built-in-types).

For more information on the philosophy and design of Algorand Python, please see
[“Principles”](/algokit/languages/python/principles/#principles).

If you aren’t familiar with Python, a good place to start before continuing below is with the
[official tutorial](https://docs.python.org/3/tutorial/index.html). Just beware that as mentioned
above, [not all features are supported](/algokit/languages/python/lg-unsupported-python-features/).

## Table of Contents

- [Program structure](/algokit/languages/python/lg-structure/)
  - [Modules](/algokit/languages/python/lg-structure/#modules)
  - [Typing](/algokit/languages/python/lg-structure/#typing)
  - [Subroutines](/algokit/languages/python/lg-structure/#subroutines)
  - [Contract classes](/algokit/languages/python/lg-structure/#contract-classes)
    - [Contract class configuration](/algokit/languages/python/lg-structure/#contract-class-configuration)
    - [Example: Simplest possible `algopy.Contract` implementation](/algokit/languages/python/lg-structure/#example-simplest-possible-algopy-contract-implementation)
    - [Example: Simple call counter](/algokit/languages/python/lg-structure/#example-simple-call-counter)
    - [Example: Simplest possible `algopy.ARC4Contract` implementation](/algokit/languages/python/lg-structure/#example-simplest-possible-algopy-arc4contract-implementation)
    - [Example: An ARC-4 call counter](/algokit/languages/python/lg-structure/#example-an-arc-4-call-counter)
  - [Logic signatures](/algokit/languages/python/lg-structure/#logic-signatures)
- [Types](/algokit/languages/python/lg-types/)
  - [AVM types](/algokit/languages/python/lg-types/#avm-types)
    - [UInt64](/algokit/languages/python/lg-types/#uint64)
    - [Bytes](/algokit/languages/python/lg-types/#bytes)
    - [String](/algokit/languages/python/lg-types/#string)
    - [BigUInt](/algokit/languages/python/lg-types/#biguint)
    - [bool](/algokit/languages/python/lg-types/#bool)
    - [Account](/algokit/languages/python/lg-types/#account)
    - [Asset](/algokit/languages/python/lg-types/#asset)
    - [Application](/algokit/languages/python/lg-types/#application)
  - [Python built-in types](/algokit/languages/python/lg-types/#python-built-in-types)
    - [bool](/algokit/languages/python/lg-types/#id2)
    - [tuple](/algokit/languages/python/lg-types/#tuple)
    - [typing.NamedTuple](/algokit/languages/python/lg-types/#typing-namedtuple)
    - [None](/algokit/languages/python/lg-types/#none)
    - [int, str, bytes, float](/algokit/languages/python/lg-types/#int-str-bytes-float)
  - [Template variables](/algokit/languages/python/lg-types/#template-variables)
  - [ARC-4 types](/algokit/languages/python/lg-types/#arc-4-types)
  - [Type Validation](/algokit/languages/python/lg-types/#type-validation)
    - [Validated Sources of Values](/algokit/languages/python/lg-types/#validated-sources-of-values)
    - [Non-Validated Sources](/algokit/languages/python/lg-types/#non-validated-sources)
- [Control flow structures](/algokit/languages/python/lg-control/)
  - [If statements](/algokit/languages/python/lg-control/#if-statements)
  - [Ternary conditions](/algokit/languages/python/lg-control/#ternary-conditions)
  - [While loops](/algokit/languages/python/lg-control/#while-loops)
  - [For Loops](/algokit/languages/python/lg-control/#for-loops)
  - [Match Statements](/algokit/languages/python/lg-control/#match-statements)
- [Module level constructs](/algokit/languages/python/lg-modules/)
  - [Module constants](/algokit/languages/python/lg-modules/#module-constants)
  - [If statements](/algokit/languages/python/lg-modules/#if-statements)
  - [Integer math](/algokit/languages/python/lg-modules/#integer-math)
  - [Strings](/algokit/languages/python/lg-modules/#strings)
  - [Type aliases](/algokit/languages/python/lg-modules/#type-aliases)
- [Python builtins](/algokit/languages/python/lg-builtins/)
  - [len](/algokit/languages/python/lg-builtins/#len)
  - [range](/algokit/languages/python/lg-builtins/#range)
  - [enumerate](/algokit/languages/python/lg-builtins/#enumerate)
  - [reversed](/algokit/languages/python/lg-builtins/#reversed)
  - [types](/algokit/languages/python/lg-builtins/#types)
- [Error handling and assertions](/algokit/languages/python/lg-errors/)
  - [Assertions](/algokit/languages/python/lg-errors/#assertions)
    - [Assertion error handling](/algokit/languages/python/lg-errors/#assertion-error-handling)
  - [Explicit failure](/algokit/languages/python/lg-errors/#explicit-failure)
  - [Exception handling](/algokit/languages/python/lg-errors/#exception-handling)
- [Data structures](/algokit/languages/python/lg-data-structures/)
  - [Mutability vs Immutability](/algokit/languages/python/lg-data-structures/#mutability-vs-immutability)
  - [Static size vs Dynamic size](/algokit/languages/python/lg-data-structures/#static-size-vs-dynamic-size)
  - [Size constraints](/algokit/languages/python/lg-data-structures/#size-constraints)
  - [Algorand Python composite types](/algokit/languages/python/lg-data-structures/#algorand-python-composite-types)
    - [`tuple`](/algokit/languages/python/lg-data-structures/#tuple)
    - [`typing.NamedTuple`](/algokit/languages/python/lg-data-structures/#typing-namedtuple)
    - [`Struct`](/algokit/languages/python/lg-data-structures/#struct)
    - [`arc4.Tuple`](/algokit/languages/python/lg-data-structures/#arc4-tuple)
    - [`arc4.Struct`](/algokit/languages/python/lg-data-structures/#arc4-struct)
  - [Algorand Python array types](/algokit/languages/python/lg-data-structures/#algorand-python-array-types)
    - [`algopy.FixedArray`](/algokit/languages/python/lg-data-structures/#algopy-fixedarray)
    - [`algopy.Array`](/algokit/languages/python/lg-data-structures/#algopy-array)
    - [`algopy.ReferenceArray`](/algokit/languages/python/lg-data-structures/#algopy-referencearray)
    - [`algopy.ImmutableArray`](/algokit/languages/python/lg-data-structures/#algopy-immutablearray)
    - [`algopy.arc4.DynamicArray` / `algopy.arc4.StaticArray`](/algokit/languages/python/lg-data-structures/#algopy-arc4-dynamicarray-algopy-arc4-staticarray)
  - [Tips](/algokit/languages/python/lg-data-structures/#tips)
- [Storing data on-chain](/algokit/languages/python/lg-storage/)
  - [Global storage](/algokit/languages/python/lg-storage/#global-storage)
  - [Local storage](/algokit/languages/python/lg-storage/#local-storage)
  - [Box storage](/algokit/languages/python/lg-storage/#box-storage)
  - [Scratch storage](/algokit/languages/python/lg-storage/#scratch-storage)
- [Logging](/algokit/languages/python/lg-logs/)
- [Transactions](/algokit/languages/python/lg-transactions/)
  - [Group Transactions](/algokit/languages/python/lg-transactions/#group-transactions)
    - [ARC-4 parameter](/algokit/languages/python/lg-transactions/#arc-4-parameter)
    - [Group Index](/algokit/languages/python/lg-transactions/#group-index)
  - [Inner Transactions](/algokit/languages/python/lg-transactions/#inner-transactions)
    - [Examples](/algokit/languages/python/lg-transactions/#examples)
    - [Limitations](/algokit/languages/python/lg-transactions/#limitations)
- [AVM operations](/algokit/languages/python/lg-ops/)
  - [Txn](/algokit/languages/python/lg-ops/#txn)
  - [Global](/algokit/languages/python/lg-ops/#global)
- [Opcode budgets](/algokit/languages/python/lg-opcode-budget/)
- [ARC-4: Application Binary Interface](/algokit/languages/python/lg-arc4/)
  - [ARC-32 and ARC-56](/algokit/languages/python/lg-arc4/#arc-32-and-arc-56)
  - [Methods](/algokit/languages/python/lg-arc4/#methods)
  - [Router](/algokit/languages/python/lg-arc4/#router)
  - [Types](/algokit/languages/python/lg-arc4/#types)
    - [Booleans](/algokit/languages/python/lg-arc4/#booleans)
    - [Unsigned ints](/algokit/languages/python/lg-arc4/#unsigned-ints)
    - [Unsigned fixed point decimals](/algokit/languages/python/lg-arc4/#unsigned-fixed-point-decimals)
    - [Bytes and strings](/algokit/languages/python/lg-arc4/#bytes-and-strings)
    - [Static arrays](/algokit/languages/python/lg-arc4/#static-arrays)
    - [Address](/algokit/languages/python/lg-arc4/#address)
    - [Dynamic arrays](/algokit/languages/python/lg-arc4/#dynamic-arrays)
    - [Tuples](/algokit/languages/python/lg-arc4/#tuples)
    - [Structs](/algokit/languages/python/lg-arc4/#structs)
    - [ARC-4 Container Packing](/algokit/languages/python/lg-arc4/#arc-4-container-packing)
    - [Reference types](/algokit/languages/python/lg-arc4/#reference-types)
    - [Mutability](/algokit/languages/python/lg-arc4/#mutability)
- [ARC-28: Structured event logging](/algokit/languages/python/lg-arc28/)
  - [Emitting Events](/algokit/languages/python/lg-arc28/#emitting-events)
- [Calling other applications](/algokit/languages/python/lg-calling-apps/)
  - [`algopy.arc4.abi_call`](/algokit/languages/python/lg-calling-apps/#algopy-arc4-abi-call)
    - [Alternative ways to use `arc4.abi_call`](/algokit/languages/python/lg-calling-apps/#alternative-ways-to-use-arc4-abi-call)
  - [`algopy.arc4.arc4_create`](/algokit/languages/python/lg-calling-apps/#algopy-arc4-arc4-create)
  - [`algopy.arc4.arc4_update`](/algokit/languages/python/lg-calling-apps/#algopy-arc4-arc4-update)
  - [Using `itxn.ApplicationCall`](/algokit/languages/python/lg-calling-apps/#using-itxn-applicationcall)
- [Compiling to AVM bytecode](/algokit/languages/python/lg-compile/)
  - [Outputting AVM bytecode from CLI](/algokit/languages/python/lg-compile/#outputting-avm-bytecode-from-cli)
  - [Obtaining bytecode within other contracts](/algokit/languages/python/lg-compile/#obtaining-bytecode-within-other-contracts)
  - [Template variables](/algokit/languages/python/lg-compile/#template-variables)
    - [CLI](/algokit/languages/python/lg-compile/#cli)
    - [Within other contracts](/algokit/languages/python/lg-compile/#within-other-contracts)
- [Unsupported Python features](/algokit/languages/python/lg-unsupported-python-features/)
  - [raise, try/except/finally](/algokit/languages/python/lg-unsupported-python-features/#raise-try-except-finally)
  - [with](/algokit/languages/python/lg-unsupported-python-features/#with)
  - [async](/algokit/languages/python/lg-unsupported-python-features/#async)
  - [closures & lambdas](/algokit/languages/python/lg-unsupported-python-features/#closures-lambdas)
  - [global keyword](/algokit/languages/python/lg-unsupported-python-features/#global-keyword)
  - [Inheritance (outside of contract classes)](/algokit/languages/python/lg-unsupported-python-features/#inheritance-outside-of-contract-classes)
- [PuyaPy migration from 4.x to 5.0](/algokit/languages/python/lg-migration-4-5/)
  - [`algopy.Array` to `algopy.ReferenceArray`](/algokit/languages/python/lg-migration-4-5/#algopy-array-to-algopy-referencearray)
  - [`algopy.Account`, `algopy.Asset` and `algopy.Application` routing behaviour](/algokit/languages/python/lg-migration-4-5/#algopy-account-algopy-asset-and-algopy-application-routing-behaviour)
  - [Constructor signatures of `ImmutableArray` and `ReferenceArray`](/algokit/languages/python/lg-migration-4-5/#constructor-signatures-of-immutablearray-and-referencearray)
