---
title: Compile-time Features
description: Compile-time constants, conditional compilation, and compile directives
---

The PuyaPy compiler can compile Algorand Python smart contracts directly into AVM bytecode.
Once compiled, this bytecode can be utilized to construct AVM Application Call transactions both on and off chain.

## Outputting AVM bytecode from CLI

The `--output-bytecode` option can be used to generate `.bin` files for smart contracts and logic signatures, producing an approval and clear program for each smart contract.

## Obtaining bytecode within other contracts

The [`compile_contract`](https://algorandfoundation.github.io/puya/api/algopy/algopy/) function takes an Algorand Python smart contract class and returns a [`CompiledContract`](https://algorandfoundation.github.io/puya/api/algopy/algopy/),
The global state, local state and program pages allocation parameters are derived from the contract by default, but can be overridden.
This compiled contract can then be used to create an [`algopy.itxn.ApplicationCall`](https://algorandfoundation.github.io/puya/api/algopy/algopy/) transaction or used with the [ARC-4](/docs/algorand-python/python/latest/language-guide/calling-apps/) functions.

The [`compile_logicsig`](https://algorandfoundation.github.io/puya/api/algopy/algopy/) takes an Algorand Python logic signature and returns a [`CompiledLogicSig`](https://algorandfoundation.github.io/puya/api/algopy/algopy/), which can be used to
verify if a transaction has been signed by a particular logic signature.

## Template variables

Algorand Python supports defining [`algopy.TemplateVar`](https://algorandfoundation.github.io/puya/api/algopy/algopy/) variables that can be substituted during compilation.

For example, the following contract has `UInt64` and `Bytes` template variables.

```python
# templated_contract.py
from algopy import ARC4Contract, Bytes, TemplateVar, UInt64, arc4


class TemplatedContract(ARC4Contract):

    @arc4.abimethod
    def my_method(self) -> UInt64:
        return TemplateVar[UInt64](/docs/algorand-python/python/latest/language-guide/compile/"some_uint"/)

    @arc4.abimethod
    def my_other_method(self) -> Bytes:
        return TemplateVar[Bytes](/docs/algorand-python/python/latest/language-guide/compile/"some_bytes"/)
```

When compiling to bytecode, the values for these template variables must be provided. These values can be provided via the CLI,
or through the `template_vars` parameter of the [`compile_contract`](https://algorandfoundation.github.io/puya/api/algopy/algopy/) and [`compile_logicsig`](https://algorandfoundation.github.io/puya/api/algopy/algopy/) functions.

### CLI

The `--template-var` option can be used to [define](/docs/algorand-python/python/latest/compiler/#defining-template-values) each variable.

For example to provide the values for the above example contract the following command could be used
`puyapy --template-var SOME_UINT=123 --template-var SOME_BYTES=0xABCD templated_contract.py`

### Within other contracts

The functions [`compile_contract`](https://algorandfoundation.github.io/puya/api/algopy/algopy/) and [`compile_logicsig`](https://algorandfoundation.github.io/puya/api/algopy/algopy/) both have an optional `template_vars` parameter
which can be used to define template variables. Variables defined in this manner take priority over variables defined on the CLI.

```python
from algopy import Bytes, UInt64, arc4, compile_contract, subroutine

from templated_contract import TemplatedContract

@subroutine
def create_templated_contract() -> None:
    compiled = compile_contract(
        TemplatedContract,
        global_uints=2, # customize allocated global uints
        template_vars={ # provide template vars
            "SOME_UINT": UInt64(123),
            "SOME_BYTES": Bytes(b"\xAB\xCD")
        },
    )
    arc4.arc4_create(TemplatedContract, compiled=compiled)
```