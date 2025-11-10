---
title: algopy
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

## Package Contents

### Classes

| [`ARC4Contract`](/reference/algorand-python/api/api-algopyarc4/#algopy.arc4.ARC4Contract) | A contract that conforms to the ARC-4 ABI specification, functions decorated with<br/>`@abimethod` or `@baremethod` will form the public interface of the contract                                                                         |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`Account`](#algopy.Account)                                                              | An Account on the Algorand network.                                                                                                                                                                                                        |
| [`Application`](#algopy.Application)                                                      | An Application on the Algorand network.                                                                                                                                                                                                    |
| [`Array`](#algopy.Array)                                                                  | A dynamically sized Array of the specified type                                                                                                                                                                                            |
| [`Asset`](#algopy.Asset)                                                                  | An Asset on the Algorand network.                                                                                                                                                                                                          |
| [`BigUInt`](#algopy.BigUInt)                                                              | A variable length (max 512-bit) unsigned integer                                                                                                                                                                                           |
| [`Box`](#algopy.Box)                                                                      | Box abstracts the reading and writing of a single value to a single box.<br/>The box size will be reconfigured dynamically to fit the size of the value being assigned to<br/>it.                                                          |
| [`BoxMap`](#algopy.BoxMap)                                                                | BoxMap abstracts the reading and writing of a set of boxes using a common key and content type.<br/>Each composite key (prefix + key) still needs to be made available to the application via the<br/>`boxes` property of the Transaction. |
| [`BoxRef`](#algopy.BoxRef)                                                                | BoxRef abstracts the reading and writing of boxes containing raw binary data. The size is<br/>configured manually, and can be set to values larger than what the AVM can handle in a single<br/>value.                                     |
| [`Bytes`](#algopy.Bytes)                                                                  | A byte sequence, with a maximum length of 4096 bytes, one of the primary data types on the AVM                                                                                                                                             |
| [`BytesBacked`](#algopy.BytesBacked)                                                      | Represents a type that is a single bytes value                                                                                                                                                                                             |
| [`CompiledContract`](#algopy.CompiledContract)                                            | Provides compiled programs and state allocation values for a Contract.<br/>Create by calling [`compile_contract`](#algopy.compile_contract).                                                                                               |
| [`CompiledLogicSig`](#algopy.CompiledLogicSig)                                            | Provides account for a Logic Signature.<br/>Create by calling [`compile_logicsig`](#algopy.compile_logicsig).                                                                                                                              |
| [`Contract`](#algopy.Contract)                                                            | Base class for an Algorand Smart Contract                                                                                                                                                                                                  |
| [`FixedArray`](#algopy.FixedArray)                                                        | A fixed length Array of the specified type and length                                                                                                                                                                                      |
| [`Global`](/reference/algorand-python/api/api-algopyop/#algopy.op.Global)                 | Get Global values<br/>Native TEAL op: [`global`](https://dev.algorand.co/reference/algorand-teal/opcodes/#global)                                                                                                                          |
| [`GlobalState`](#algopy.GlobalState)                                                      | Global state associated with the application, the key will be the name of the member, this<br/>is assigned to                                                                                                                              |
| [`ImmutableArray`](#algopy.ImmutableArray)                                                | An immutable array that supports fixed and dynamically sized immutable elements.<br/>Modifications are done by returning a new copy of the array with the modifications applied.                                                           |
| [`ImmutableFixedArray`](#algopy.ImmutableFixedArray)                                      | An immutable fixed length Array of the specified type and length                                                                                                                                                                           |
| [`LocalState`](#algopy.LocalState)                                                        | Local state associated with the application and an account                                                                                                                                                                                 |
| [`LogicSig`](#algopy.LogicSig)                                                            | A logic signature                                                                                                                                                                                                                          |
| [`OnCompleteAction`](#algopy.OnCompleteAction)                                            | On Completion actions available in an application call transaction                                                                                                                                                                         |
| [`OpUpFeeSource`](#algopy.OpUpFeeSource)                                                  | Defines the source of fees for the OpUp utility.                                                                                                                                                                                           |
| [`ReferenceArray`](#algopy.ReferenceArray)                                                | A mutable array that supports fixed sized immutable elements. All references to this array<br/>will see any updates made to it.                                                                                                            |
| [`StateTotals`](#algopy.StateTotals)                                                      | Options class to manually define the total amount of global and local state contract will use,<br/>used by [`Contract.__init_subclass__`](#algopy.Contract.__init_subclass__).                                                             |
| [`String`](#algopy.String)                                                                | A UTF-8 encoded string.                                                                                                                                                                                                                    |
| [`Struct`](#algopy.Struct)                                                                | Base class for Struct types                                                                                                                                                                                                                |
| [`TransactionType`](#algopy.TransactionType)                                              | The different transaction types available in a transaction                                                                                                                                                                                 |
| [`Txn`](/reference/algorand-python/api/api-algopyop/#algopy.op.Txn)                       | Get values for the current executing transaction<br/>Native TEAL ops: [`txn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txn), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)                     |
| [`UInt64`](#algopy.UInt64)                                                                | A 64-bit unsigned integer, one of the primary data types on the AVM                                                                                                                                                                        |
| [`uenumerate`](#algopy.uenumerate)                                                        | Yields pairs containing a count (from zero) and a value yielded by the iterable argument.                                                                                                                                                  |
| [`urange`](#algopy.urange)                                                                | Produces a sequence of UInt64 from start (inclusive) to stop (exclusive) by step.                                                                                                                                                          |

### Functions

| [`compile_contract`](#algopy.compile_contract) | Returns the compiled data for the specified contract                                                          |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [`compile_logicsig`](#algopy.compile_logicsig) | Returns the Account for the specified logic signature                                                         |
| [`ensure_budget`](#algopy.ensure_budget)       | Ensure the available op code budget is greater than or equal to required_budget                               |
| [`log`](#algopy.log)                           | Concatenates and logs supplied args as a single bytes value.                                                  |
| [`logicsig`](#algopy.logicsig)                 | Decorator to indicate a function is a logic signature                                                         |
| [`size_of`](#algopy.size_of)                   | Returns the number of bytes required to store the provided type object<br/>or the type of provided expression |
| [`subroutine`](#algopy.subroutine)             | Decorator to indicate functions or methods that can be called by a Smart Contract                             |
| [`zero_bytes`](#algopy.zero_bytes)             | Initializes a new value of the specified type, based on it’s zero bytes representation.                       |

### Data

| [`TemplateVar`](#algopy.TemplateVar) | Template variables can be used to represent a placeholder for a deploy-time provided value. |
| ------------------------------------ | ------------------------------------------------------------------------------------------- |

### API

#### _class_ algopy.ARC4Contract

A contract that conforms to the ARC-4 ABI specification, functions decorated with
`@abimethod` or `@baremethod` will form the public interface of the contract

The approval_program will be implemented by the compiler, and route application args
according to the ARC-4 ABI specification

The clear_state_program will by default return True, but can be overridden

##### _classmethod_ \_\_init*subclass*\_

\*_classmethod_ \_\_init*subclass*\_(\*, name: [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., scratch_slots: [algopy.urange](#algopy.urange) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[int](https://docs.python.org/3/library/functions.html#int) | [algopy.urange](#algopy.urange), ...] | [list](https://docs.python.org/3/library/stdtypes.html#list)[[int](https://docs.python.org/3/library/functions.html#int) | [algopy.urange](#algopy.urange)] = ..., state_totals: [algopy.StateTotals](#algopy.StateTotals) = ..., avm_version: [int](https://docs.python.org/3/library/functions.html#int) = ...)\*

When declaring a Contract subclass, options and configuration are passed in
the base class list:

```python
class MyContract(algopy.Contract, name="CustomName"):
    ...
```

- **Parameters:**

  - **name** –

    Will affect the output TEAL file name if there are multiple non-abstract contracts
    in the same file.

    If the contract is a subclass of algopy.ARC4Contract, `name` will also be used as the
    contract name in the ARC-32 application.json, instead of the class name.

  - **scratch_slots** –

    Allows you to mark a slot ID or range of slot IDs as “off limits” to Puya.
    These slot ID(s) will never be written to or otherwise manipulating by the compiler itself.
    This is particularly useful in combination with `algopy.op.gload_bytes` / `algopy.op.gload_uint64`
    which lets a contract in a group transaction read from the scratch slots of another contract
    that occurs earlier in the transaction group.

    In the case of inheritance, scratch slots reserved become cumulative. It is not an error
    to have overlapping ranges or values either, so if a base class contract reserves slots
    0-5 inclusive and the derived contract reserves 5-10 inclusive, then within the derived
    contract all slots 0-10 will be marked as reserved.

  - **state_totals** –

    Allows defining what values should be used for global and local uint and bytes storage
    values when creating a contract. Used when outputting ARC-32 application.json schemas.

    If let unspecified, the totals will be determined by the compiler based on state
    variables assigned to `self`.

    This setting is not inherited, and only applies to the exact `Contract` it is specified
    on. If a base class does specify this setting, and a derived class does not, a warning
    will be emitted for the derived class. To resolve this warning, `state_totals` must be
    specified. Note that it is valid to not provide any arguments to the `StateTotals`
    constructor, like so `state_totals=StateTotals()`, in which case all values will be
    automatically calculated.

  - **avm_version** – Determines which AVM version to use, this affects what operations are supported.
    Defaults to value provided supplied on command line (which defaults to current mainnet version)

##### approval_program

_approval_program() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Represents the program called for all transactions
where `OnCompletion` != `ClearState`

##### clear_state_program

_clear_state_program() → [algopy.UInt64](#algopy.UInt64) | [bool](https://docs.python.org/3/library/functions.html#bool)_

Represents the program called when `OnCompletion` == `ClearState`

#### _class_ algopy.Account

\*_class_ algopy.Account(value: [str](https://docs.python.org/3/library/stdtypes.html#str) | [algopy.Bytes](#algopy.Bytes) = ..., /)\*

An Account on the Algorand network.

Note: must be an available resource to access properties other than `bytes`

##### Initialization

If `value` is a string, it should be a 58 character base32 string,
ie a base32 string-encoded 32 bytes public key + 4 bytes checksum.
If `value` is a Bytes, it’s length checked to be 32 bytes - to avoid this
check, use `Address.from_bytes(...)` instead.
Defaults to the zero-address.

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns `True` if not equal to the zero-address

##### \_\_eq\_\_

_\_\_eq\_\_(other: [algopy.Account](#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Account equality is determined by the address of another `Account` or `str`

##### \_\_ne\_\_

_\_\_ne\_\_(other: [algopy.Account](#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Account equality is determined by the address of another `Account` or `str`

##### _property_ auth_address \*: [algopy.Account]

**property* auth_address *: [algopy.Account](#algopy.Account)**

Address the account is rekeyed to

##### NOTE

Account must be an available resource

##### _property_ balance \*: [algopy.UInt64]

**property* balance *: [algopy.UInt64](#algopy.UInt64)**

Account balance in microalgos

##### NOTE

Account must be an available resource

##### _property_ bytes \*: [algopy.Bytes]

**property* bytes *: [algopy.Bytes](#algopy.Bytes)**

Get the underlying Bytes

##### _classmethod_ from_bytes

\*_classmethod_ from_bytes(value: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [Self](https://docs.python.org/3/library/typing.html#typing.Self)\*

Construct an instance from the underlying bytes (no validation)

##### is_opted_in

_is_opted_in(asset_or_app: [algopy.Asset](#algopy.Asset) | [algopy.Application](#algopy.Application), /) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns true if this account is opted in to the specified Asset or Application.

##### NOTE

Account and Asset/Application must be an available resource

##### _property_ min_balance \*: [algopy.UInt64]

**property* min_balance *: [algopy.UInt64](#algopy.UInt64)**

Minimum required balance for account, in microalgos

##### NOTE

Account must be an available resource

##### _property_ total_apps_created \*: [algopy.UInt64]

**property* total_apps_created *: [algopy.UInt64](#algopy.UInt64)**

The number of existing apps created by this account.

##### NOTE

Account must be an available resource

##### _property_ total_apps_opted_in \*: [algopy.UInt64]

**property* total_apps_opted_in *: [algopy.UInt64](#algopy.UInt64)**

The number of apps this account is opted into.

##### NOTE

Account must be an available resource

##### _property_ total_assets \*: [algopy.UInt64]

**property* total_assets *: [algopy.UInt64](#algopy.UInt64)**

The numbers of ASAs held by this account (including ASAs this account created).

##### NOTE

Account must be an available resource

##### _property_ total_assets_created \*: [algopy.UInt64]

**property* total_assets_created *: [algopy.UInt64](#algopy.UInt64)**

The number of existing ASAs created by this account.

##### NOTE

Account must be an available resource

##### _property_ total_box_bytes \*: [algopy.UInt64]

**property* total_box_bytes *: [algopy.UInt64](#algopy.UInt64)**

The total number of bytes used by this account’s app’s box keys and values.

##### NOTE

Account must be an available resource

##### _property_ total_boxes \*: [algopy.UInt64]

**property* total_boxes *: [algopy.UInt64](#algopy.UInt64)**

The number of existing boxes created by this account’s app.

##### NOTE

Account must be an available resource

##### _property_ total_extra_app_pages \*: [algopy.UInt64]

**property* total_extra_app_pages *: [algopy.UInt64](#algopy.UInt64)**

The number of extra app code pages used by this account.

##### NOTE

Account must be an available resource

##### _property_ total_num_byte_slice \*: [algopy.UInt64]

**property* total_num_byte_slice *: [algopy.UInt64](#algopy.UInt64)**

The total number of byte array values allocated by this account in Global and Local States.

##### NOTE

Account must be an available resource

##### _property_ total_num_uint \*: [algopy.UInt64]

**property* total_num_uint *: [algopy.UInt64](#algopy.UInt64)**

The total number of uint64 values allocated by this account in Global and Local States.

##### NOTE

Account must be an available resource

##### validate

_validate() → [None](https://docs.python.org/3/library/constants.html#None)_

Performs validation to ensure the value is well-formed, errors if it is not

#### _class_ algopy.Application

\*_class_ algopy.Application(application_id: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, /)\*

An Application on the Algorand network.

##### Initialization

Initialized with the id of an application. Defaults to zero (an invalid ID).

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns `True` if `application_id` is not `0`

##### \_\_eq\_\_

_\_\_eq\_\_(other: [algopy.Application](#algopy.Application)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Application equality is determined by the equality of an Application’s id

##### \_\_ne\_\_

_\_\_ne\_\_(other: [algopy.Application](#algopy.Application)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Application equality is determined by the equality of an Application’s id

##### _property_ address \*: [algopy.Account]

**property* address *: [algopy.Account](#algopy.Account)**

Address for which this application has authority

##### NOTE

Application must be an available resource

##### _property_ approval_program \*: [algopy.Bytes]

**property* approval_program *: [algopy.Bytes](#algopy.Bytes)**

Bytecode of Approval Program

##### NOTE

Application must be an available resource

##### _property_ clear_state_program \*: [algopy.Bytes]

**property* clear_state_program *: [algopy.Bytes](#algopy.Bytes)**

Bytecode of Clear State Program

##### NOTE

Application must be an available resource

##### _property_ creator \*: [algopy.Account]

**property* creator *: [algopy.Account](#algopy.Account)**

Creator address

##### NOTE

Application must be an available resource

##### _property_ extra_program_pages \*: [algopy.UInt64]

**property* extra_program_pages *: [algopy.UInt64](#algopy.UInt64)**

Number of Extra Program Pages of code space

##### NOTE

Application must be an available resource

##### _property_ global_num_bytes \*: [algopy.UInt64]

**property* global_num_bytes *: [algopy.UInt64](#algopy.UInt64)**

Number of byte array values allowed in Global State

##### NOTE

Application must be an available resource

##### _property_ global_num_uint \*: [algopy.UInt64]

**property* global_num_uint *: [algopy.UInt64](#algopy.UInt64)**

Number of uint64 values allowed in Global State

##### NOTE

Application must be an available resource

##### _property_ id \*: [algopy.UInt64]

**property* id *: [algopy.UInt64](#algopy.UInt64)**

Returns the id of the application

##### _property_ local_num_bytes \*: [algopy.UInt64]

**property* local_num_bytes *: [algopy.UInt64](#algopy.UInt64)**

Number of byte array values allowed in Local State

##### NOTE

Application must be an available resource

##### _property_ local_num_uint \*: [algopy.UInt64]

**property* local_num_uint *: [algopy.UInt64](#algopy.UInt64)**

Number of uint64 values allowed in Local State

##### NOTE

Application must be an available resource

##### _property_ version \*: [algopy.UInt64]

**property* version *: [algopy.UInt64](#algopy.UInt64)**

Version of the app, incremented each time the approval or clear program changes

##### NOTE

Application must be an available resource

#### _class_ algopy.Array

A dynamically sized Array of the specified type

##### \_\_add\_\_

_\_\_add\_\_(other: [collections.abc.Iterable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable)[algopy._TArrayItem]) → [algopy.Array](#algopy.Array)[algopy._TArrayItem]_

Concat two arrays together, returning a new array

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns `True` if not an empty array

##### \_\_getitem\_\_

_\_\_getitem\_\_(index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → algopy.\_TArrayItem_

Gets the item of the array at provided index

##### \_\_reversed\_\_

_\_\_reversed\_\_() → [Iterator](https://docs.python.org/3/library/typing.html#typing.Iterator)[algopy._TArrayItem]_

Returns an iterator for the items in the array, in reverse order

##### \_\_setitem\_\_

_\_\_setitem\_\_(index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), value: algopy.\_TArrayItem) → algopy.\_TArrayItem_

Sets the item of the array at specified index to provided value

##### append

_append(item: algopy.\_TArrayItem, /) → [None](https://docs.python.org/3/library/constants.html#None)_

Append an item to this array

##### copy

_copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Create a copy of this array

##### extend

_extend(other: [collections.abc.Iterable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable)[algopy._TArrayItem], /) → [None](https://docs.python.org/3/library/constants.html#None)_

Extend this array with the contents of another array

##### freeze

_freeze() → [algopy.ImmutableArray](#algopy.ImmutableArray)[algopy._TArrayItem]_

Returns an immutable copy of this array

##### _property_ length \*: [algopy.UInt64]

**property* length *: [algopy.UInt64](#algopy.UInt64)**

Returns the current length of the array

##### pop

_pop() → algopy.\_TArrayItem_

Remove and return the last item of this array

##### validate

_validate() → [None](https://docs.python.org/3/library/constants.html#None)_

Performs validation to ensure the value is well-formed, errors if it is not

#### _class_ algopy.Asset

\*_class_ algopy.Asset(asset_id: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, /)\*

An Asset on the Algorand network.

##### Initialization

Initialized with the id of an asset. Defaults to zero (an invalid ID).

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns `True` if `asset_id` is not `0`

##### \_\_eq\_\_

_\_\_eq\_\_(other: [algopy.Asset](#algopy.Asset)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Asset equality is determined by the equality of an Asset’s id

##### \_\_ne\_\_

_\_\_ne\_\_(other: [algopy.Asset](#algopy.Asset)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Asset equality is determined by the equality of an Asset’s id

##### balance

_balance(account: [algopy.Account](#algopy.Account), /) → [algopy.UInt64](#algopy.UInt64)_

Amount of the asset unit held by this account. Fails if the account has not
opted in to the asset.

##### NOTE

Asset and supplied Account must be an available resource

##### _property_ clawback \*: [algopy.Account]

**property* clawback *: [algopy.Account](#algopy.Account)**

Clawback address

##### NOTE

Asset must be an available resource

##### _property_ creator \*: [algopy.Account]

**property* creator *: [algopy.Account](#algopy.Account)**

Creator address

##### NOTE

Asset must be an available resource

##### _property_ decimals \*: [algopy.UInt64]

**property* decimals *: [algopy.UInt64](#algopy.UInt64)**

See AssetParams.Decimals

##### NOTE

Asset must be an available resource

##### _property_ default_frozen \*: [bool]

**property* default_frozen *: [bool](https://docs.python.org/3/library/functions.html#bool)**

Frozen by default or not

##### NOTE

Asset must be an available resource

##### _property_ freeze \*: [algopy.Account]

**property* freeze *: [algopy.Account](#algopy.Account)**

Freeze address

##### NOTE

Asset must be an available resource

##### frozen

_frozen(account: [algopy.Account](#algopy.Account), /) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Is the asset frozen or not. Fails if the account has not
opted in to the asset.

##### NOTE

Asset and supplied Account must be an available resource

##### _property_ id \*: [algopy.UInt64]

**property* id *: [algopy.UInt64](#algopy.UInt64)**

Returns the id of the Asset

##### _property_ manager \*: [algopy.Account]

**property* manager *: [algopy.Account](#algopy.Account)**

Manager address

##### NOTE

Asset must be an available resource

##### _property_ metadata_hash \*: [algopy.Bytes]

**property* metadata_hash *: [algopy.Bytes](#algopy.Bytes)**

Arbitrary commitment

##### NOTE

Asset must be an available resource

##### _property_ name \*: [algopy.Bytes]

**property* name *: [algopy.Bytes](#algopy.Bytes)**

Asset name

##### NOTE

Asset must be an available resource

##### _property_ reserve \*: [algopy.Account]

**property* reserve *: [algopy.Account](#algopy.Account)**

Reserve address

##### NOTE

Asset must be an available resource

##### _property_ total \*: [algopy.UInt64]

**property* total *: [algopy.UInt64](#algopy.UInt64)**

Total number of units of this asset

##### NOTE

Asset must be an available resource

##### _property_ unit_name \*: [algopy.Bytes]

**property* unit_name *: [algopy.Bytes](#algopy.Bytes)**

Asset unit name

##### NOTE

Asset must be an available resource

##### _property_ url \*: [algopy.Bytes]

**property* url *: [algopy.Bytes](#algopy.Bytes)**

URL with additional info about the asset

##### NOTE

Asset must be an available resource

#### _class_ algopy.BigUInt

\*_class_ algopy.BigUInt(value: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, /)\*

A variable length (max 512-bit) unsigned integer

##### Initialization

A BigUInt can be initialized with a UInt64, a Python int literal, or an int variable
declared at the module level

##### \_\_add\_\_

_\_\_add\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be added with another BigUInt, UInt64 or int e.g. `BigUInt(4) + 2`.

##### \_\_and\_\_

_\_\_and\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can bitwise and with another BigUInt, UInt64 or int e.g. `BigUInt(4) & 2`

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

A BigUInt will evaluate to `False` if zero, and `True` otherwise

##### \_\_eq\_\_

_\_\_eq\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A BigUInt can use the `==` operator with another BigUInt, UInt64 or int

##### \_\_floordiv\_\_

_\_\_floordiv\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be floor divided with another BigUInt, UInt64 or int e.g. `BigUInt(4) // 2`.

This will error on divide by zero

##### \_\_ge\_\_

_\_\_ge\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A BigUInt can use the `>=` operator with another BigUInt, UInt64 or int

##### \_\_gt\_\_

_\_\_gt\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A BigUInt can use the `>` operator with another BigUInt, UInt64 or int

##### \_\_iadd\_\_

_\_\_iadd\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be incremented with another BigUInt, UInt64 or int e.g. `a += BigUInt(2)`.

##### \_\_iand\_\_

_\_\_iand\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can bitwise and with another BigUInt, UInt64 or int e.g. `a &= BigUInt(2)`

##### \_\_ifloordiv\_\_

_\_\_ifloordiv\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be floor divided with another BigUInt, UInt64 or int e.g. `a //= BigUInt(2)`.

This will error on divide by zero

##### \_\_imod\_\_

_\_\_imod\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be modded with another BigUInt, UInt64 or int e.g. `a %= BigUInt(2)`.

This will error on mod by zero

##### \_\_imul\_\_

_\_\_imul\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be multiplied with another BigUInt, UInt64 or int e.g. `a*= BigUInt(2)`.

##### \_\_ior\_\_

_\_\_ior\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can bitwise or with another BigUInt, UInt64 or int e.g. `a |= BigUInt(2)`

##### \_\_isub\_\_

_\_\_isub\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be subtracted with another BigUInt, UInt64 or int e.g. `a -= BigUInt(2)`.

This will error on underflow

##### \_\_ixor\_\_

_\_\_ixor\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can bitwise xor with another BigUInt, UInt64 or int e.g. `a ^= BigUInt(2)`

##### \_\_le\_\_

_\_\_le\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A BigUInt can use the `<=` operator with another BigUInt, UInt64 or int

##### \_\_lt\_\_

_\_\_lt\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A BigUInt can use the `<` operator with another BigUInt, UInt64 or int

##### \_\_mod\_\_

_\_\_mod\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be modded with another BigUInt, UInt64 or int e.g. `BigUInt(4) % 2`.

This will error on mod by zero

##### \_\_mul\_\_

_\_\_mul\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be multiplied with another BigUInt, UInt64 or int e.g. `4 + BigUInt(2)`.

##### \_\_ne\_\_

_\_\_ne\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A BigUInt can use the `!=` operator with another BigUInt, UInt64 or int

##### \_\_or\_\_

_\_\_or\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can bitwise or with another BigUInt, UInt64 or int e.g. `BigUInt(4) | 2`

##### \_\_pos\_\_

_\_\_pos\_\_() → [algopy.BigUInt](#algopy.BigUInt)_

Supports unary + operator. Redundant given the type is unsigned

##### \_\_radd\_\_

_\_\_radd\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be added with another BigUInt, UInt64 or int e.g. `4 + BigUInt(2)`.

##### \_\_rand\_\_

_\_\_rand\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can bitwise and with another BigUInt, UInt64 or int e.g. `4 & BigUInt(2)`

##### \_\_rfloordiv\_\_

_\_\_rfloordiv\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be floor divided with another BigUInt, UInt64 or int e.g. `4 // BigUInt(2)`.

This will error on divide by zero

##### \_\_rmod\_\_

_\_\_rmod\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be modded with another BigUInt, UInt64 or int e.g. `4 % BigUInt(2)`.

This will error on mod by zero

##### \_\_rmul\_\_

_\_\_rmul\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be multiplied with another BigUInt, UInt64 or int e.g. `BigUInt(4) + 2`.

##### \_\_ror\_\_

_\_\_ror\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can bitwise or with another BigUInt, UInt64 or int e.g. `4 | BigUInt(2)`

##### \_\_rsub\_\_

_\_\_rsub\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be subtracted with another BigUInt, UInt64 or int e.g. `4 - BigUInt(2)`.

This will error on underflow

##### \_\_rxor\_\_

_\_\_rxor\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can bitwise xor with another BigUInt, UInt64 or int e.g. `4 ^ BigUInt(2)`

##### \_\_sub\_\_

_\_\_sub\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can be subtracted with another BigUInt, UInt64 or int e.g. `BigUInt(4) - 2`.

This will error on underflow

##### \_\_xor\_\_

_\_\_xor\_\_(other: [algopy.BigUInt](#algopy.BigUInt) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.BigUInt](#algopy.BigUInt)_

A BigUInt can bitwise xor with another BigUInt, UInt64 or int e.g. `BigUInt(4) ^ 2`

##### _property_ bytes \*: [algopy.Bytes]

**property* bytes *: [algopy.Bytes](#algopy.Bytes)**

Get the underlying Bytes

##### _classmethod_ from_bytes

\*_classmethod_ from_bytes(value: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [Self](https://docs.python.org/3/library/typing.html#typing.Self)\*

Construct an instance from the underlying bytes (no validation)

#### _class_ algopy.Box

\*_class_ algopy.Box(type\_: [type](https://docs.python.org/3/library/functions.html#type)[algopy._TValue], /, \*, key: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [algopy.Bytes](#algopy.Bytes) | [algopy.String](#algopy.String) = ...)\*

Box abstracts the reading and writing of a single value to a single box.
The box size will be reconfigured dynamically to fit the size of the value being assigned to
it.

##### Initialization

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns True if the box exists, regardless of the truthiness of the contents
of the box

##### create

_create(\*, size: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ...) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Creates the box with the specified size setting all bits to zero.
If size is not specified and the type is a fixed size, then the storage size of the type
will be used.
Fails if the box already exists with a different size.
Fails if the specified size is greater than the max box size (32,768)
Fails if size is omitted and the type is not fixed size.

Returns True if the box was created, False if the box already existed

##### extract

_extract(start_index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), length: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.Bytes](#algopy.Bytes)_

Extract a slice of bytes from the box.

Fails if the box does not exist, or if `start_index + length > len(box)`

- **Parameters:**
  - **start_index** – The offset to start extracting bytes from
  - **length** – The number of bytes to extract

##### get

_get(\*, default: algopy.\_TValue) → algopy.\_TValue_

Retrieve the contents of the box, or return the default value if the box has not been
created.

- **Parameters:**
  **default** – The default value to return if the box has not been created

##### _property_ key \*: [algopy.Bytes]

**property* key *: [algopy.Bytes](#algopy.Bytes)**

Provides access to the raw storage key

##### _property_ length \*: [algopy.UInt64]

**property* length *: [algopy.UInt64](#algopy.UInt64)**

Get the length of this Box. Fails if the box does not exist

##### maybe

_maybe() → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[algopy.\_TValue, [bool](https://docs.python.org/3/library/functions.html#bool)]_

Retrieve the contents of the box if it exists, and return a boolean indicating if the box
exists.

##### _property_ ref \*: [algopy.BoxRef]

**property* ref *: [algopy.BoxRef](#algopy.BoxRef)**

Provides a BoxRef for this box

##### replace

_replace(start_index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), value: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [None](https://docs.python.org/3/library/constants.html#None)_

Write `value` to the box starting at `start_index`. Fails if the box does not exist,
or if `start_index + len(value) > len(box)`

- **Parameters:**
  - **start_index** – The offset to start writing bytes from
  - **value** – The bytes to be written

##### resize

_resize(new_size: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)_

Resizes the box the specified `new_size`. Truncating existing data if the new value is
shorter or padding with zero bytes if it is longer.

- **Parameters:**
  **new_size** – The new size of the box

##### splice

_splice(start_index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), length: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), value: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [None](https://docs.python.org/3/library/constants.html#None)_

set box to contain its previous bytes up to index `start_index`, followed by `bytes`,
followed by the original bytes of the box that began at index `start_index + length`

**Important: This op does not resize the box**
If the new value is longer than the box size, it will be truncated.
If the new value is shorter than the box size, it will be padded with zero bytes

- **Parameters:**
  - **start_index** – The index to start inserting `value`
  - **length** – The number of bytes after `start_index` to omit from the new value
  - **value** – The `value` to be inserted.

##### _property_ value _: algopy.\_TValue_

Retrieve the contents of the box. Fails if the box has not been created.

#### _class_ algopy.BoxMap

\*_class_ algopy.BoxMap(key_type: [type](https://docs.python.org/3/library/functions.html#type)[algopy._TKey], value_type: [type](https://docs.python.org/3/library/functions.html#type)[algopy._TValue], /, \*, key_prefix: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [algopy.Bytes](#algopy.Bytes) | [algopy.String](#algopy.String) = ...)\*

BoxMap abstracts the reading and writing of a set of boxes using a common key and content type.
Each composite key (prefix + key) still needs to be made available to the application via the
`boxes` property of the Transaction.

##### Initialization

Declare a box map.

- **Parameters:**
  - **key_type** – The type of the keys
  - **value_type** – The type of the values
  - **key_prefix** – The value used as a prefix to key data, can be empty.
    When the BoxMap is being assigned to a member variable,
    this argument is optional and defaults to the member variable name,
    and if a custom value is supplied it must be static.

##### \_\_contains\_\_

_\_\_contains\_\_(key: algopy.\_TKey) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns True if a box with the specified key exists in the map, regardless of the
truthiness of the contents of the box

##### \_\_delitem\_\_

_\_\_delitem\_\_(key: algopy.\_TKey) → [None](https://docs.python.org/3/library/constants.html#None)_

Deletes a keyed box

##### \_\_getitem\_\_

_\_\_getitem\_\_(key: algopy.\_TKey) → algopy.\_TValue_

Retrieve the contents of a keyed box. Fails if the box for the key has not been created.

##### \_\_setitem\_\_

_\_\_setitem\_\_(key: algopy.\_TKey, value: algopy.\_TValue) → [None](https://docs.python.org/3/library/constants.html#None)_

Write _value_ to a keyed box. Creates the box if it does not exist

##### box

_box(key: algopy.\_TKey) → [algopy.Box](#algopy.Box)[algopy._TValue]_

Returns a Box holding the box value at key

##### get

_get(key: algopy.\_TKey, \*, default: algopy.\_TValue) → algopy.\_TValue_

Retrieve the contents of a keyed box, or return the default value if the box has not been
created.

- **Parameters:**
  - **key** – The key of the box to get
  - **default** – The default value to return if the box has not been created.

##### _property_ key_prefix \*: [algopy.Bytes]

**property* key_prefix *: [algopy.Bytes](#algopy.Bytes)**

Provides access to the raw storage key-prefix

##### length

_length(key: algopy.\_TKey) → [algopy.UInt64](#algopy.UInt64)_

Get the length of an item in this BoxMap. Fails if the box does not exist

- **Parameters:**
  **key** – The key of the box to get

##### maybe

_maybe(key: algopy.\_TKey) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[algopy.\_TValue, [bool](https://docs.python.org/3/library/functions.html#bool)]_

Retrieve the contents of a keyed box if it exists, and return a boolean indicating if the
box exists.

- **Parameters:**
  **key** – The key of the box to get

#### _class_ algopy.BoxRef

\*_class_ algopy.BoxRef(/, \*, key: bytes | str | algopy.Bytes | algopy.String = ...)\*

BoxRef abstracts the reading and writing of boxes containing raw binary data. The size is
configured manually, and can be set to values larger than what the AVM can handle in a single
value.

##### Initialization

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns True if the box has a value set, regardless of the truthiness of that value

##### create

_create(\*, size: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Creates a box with the specified size, setting all bits to zero. Fails if the box already
exists with a different size. Fails if the specified size is greater than the max box size
(32,768)

Returns True if the box was created, False if the box already existed

##### delete

_delete() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Deletes the box if it exists and returns a value indicating if the box existed

##### extract

_extract(start_index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), length: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.Bytes](#algopy.Bytes)_

Extract a slice of bytes from the box.

Fails if the box does not exist, or if `start_index + length > len(box)`

- **Parameters:**
  - **start_index** – The offset to start extracting bytes from
  - **length** – The number of bytes to extract

##### get

_get(\*, default: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [algopy.Bytes](#algopy.Bytes)_

Retrieve the contents of the box, or return the default value if the box has not been
created.

- **Parameters:**
  **default** – The default value to return if the box has not been created

##### _property_ key \*: [algopy.Bytes]

**property* key *: [algopy.Bytes](#algopy.Bytes)**

Provides access to the raw storage key

##### _property_ length \*: [algopy.UInt64]

**property* length *: [algopy.UInt64](#algopy.UInt64)**

Get the length of this Box. Fails if the box does not exist

##### maybe

_maybe() → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]_

Retrieve the contents of the box if it exists, and return a boolean indicating if the box
exists.

##### put

_put(value: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [None](https://docs.python.org/3/library/constants.html#None)_

Replaces the contents of box with value. Fails if box exists and len(box) != len(value).
Creates box if it does not exist

- **Parameters:**
  **value** – The value to write to the box

##### replace

_replace(start_index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), value: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [None](https://docs.python.org/3/library/constants.html#None)_

Write `value` to the box starting at `start_index`. Fails if the box does not exist,
or if `start_index + len(value) > len(box)`

- **Parameters:**
  - **start_index** – The offset to start writing bytes from
  - **value** – The bytes to be written

##### resize

_resize(new_size: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)_

Resizes the box the specified `new_size`. Truncating existing data if the new value is
shorter or padding with zero bytes if it is longer.

- **Parameters:**
  **new_size** – The new size of the box

##### splice

_splice(start_index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), length: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), value: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [None](https://docs.python.org/3/library/constants.html#None)_

set box to contain its previous bytes up to index `start_index`, followed by `bytes`,
followed by the original bytes of the box that began at index `start_index + length`

**Important: This op does not resize the box**
If the new value is longer than the box size, it will be truncated.
If the new value is shorter than the box size, it will be padded with zero bytes

- **Parameters:**
  - **start_index** – The index to start inserting `value`
  - **length** – The number of bytes after `start_index` to omit from the new value
  - **value** – The `value` to be inserted.

#### _class_ algopy.Bytes

\*_class_ algopy.Bytes(value: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = b'', /)\*

A byte sequence, with a maximum length of 4096 bytes, one of the primary data types on the AVM

##### Initialization

Bytes can be initialized with a Python bytes literal, or bytes variable
declared at the module level

##### \_\_add\_\_

_\_\_add\_\_(other: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [algopy.Bytes](#algopy.Bytes)_

Concatenate Bytes with another Bytes or bytes literal
e.g. `Bytes(b"Hello ") + b"World"`.

##### \_\_and\_\_

_\_\_and\_\_(other: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [algopy.Bytes](#algopy.Bytes)_

Bytes can bitwise and with another Bytes or bytes e.g. `Bytes(b"FF") & b"0F")`

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns `True` if length of bytes is >0

##### \_\_contains\_\_

_\_\_contains\_\_(other: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Test whether another Bytes is a substring of this one.
Note this is expensive due to a lack of AVM support.

##### \_\_eq\_\_

_\_\_eq\_\_(other: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Bytes can be compared using the `==` operator with another Bytes or bytes

##### \_\_getitem\_\_

_\_\_getitem\_\_(index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) | [slice](https://docs.python.org/3/library/functions.html#slice)[[int](https://docs.python.org/3/library/functions.html#int) | [algopy.UInt64](#algopy.UInt64) | [None](https://docs.python.org/3/library/constants.html#None), [int](https://docs.python.org/3/library/functions.html#int) | [algopy.UInt64](#algopy.UInt64) | [None](https://docs.python.org/3/library/constants.html#None), [None](https://docs.python.org/3/library/constants.html#None)]) → [algopy.Bytes](#algopy.Bytes)_

Returns a Bytes containing a single byte if indexed with UInt64 or int
otherwise the substring o bytes described by the slice

##### \_\_iadd\_\_

_\_\_iadd\_\_(other: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [algopy.Bytes](#algopy.Bytes)_

Concatenate Bytes with another Bytes or bytes literal
e.g. `a += Bytes(b"World")`.

##### \_\_iand\_\_

_\_\_iand\_\_(other: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [algopy.Bytes](#algopy.Bytes)_

Bytes can bitwise and with another Bytes or bytes e.g. `a &= Bytes(b"0F")`

##### \_\_invert\_\_

_\_\_invert\_\_() → [algopy.Bytes](#algopy.Bytes)_

Bytes can be bitwise inverted e.g. `~Bytes(b"FF)`

##### \_\_ior\_\_

_\_\_ior\_\_(other: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [algopy.Bytes](#algopy.Bytes)_

Bytes can bitwise or with another Bytes or bytes e.g. `a |= Bytes(b"0F")`

##### \_\_iter\_\_

_\_\_iter\_\_() → [collections.abc.Iterator](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator)[[algopy.Bytes](#algopy.Bytes)]_

Bytes can be iterated, yielding each consecutive byte

##### \_\_ixor\_\_

_\_\_ixor\_\_(other: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [algopy.Bytes](#algopy.Bytes)_

Bytes can bitwise xor with another Bytes or bytes e.g. `a ^= Bytes(b"0F")`

##### \_\_ne\_\_

_\_\_ne\_\_(other: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Bytes can be compared using the `!=` operator with another Bytes or bytes

##### \_\_or\_\_

_\_\_or\_\_(other: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [algopy.Bytes](#algopy.Bytes)_

Bytes can bitwise or with another Bytes or bytes e.g. `Bytes(b"FF") | b"0F")`

##### \_\_radd\_\_

_\_\_radd\_\_(other: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [algopy.Bytes](#algopy.Bytes)_

Concatenate Bytes with another Bytes or bytes literal
e.g. `b"Hello " + Bytes(b"World")`.

##### \_\_reversed\_\_

_\_\_reversed\_\_() → [collections.abc.Iterator](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator)[[algopy.Bytes](#algopy.Bytes)]_

Bytes can be iterated in reverse, yield each preceding byte starting at the end

##### \_\_xor\_\_

_\_\_xor\_\_(other: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)) → [algopy.Bytes](#algopy.Bytes)_

Bytes can bitwise xor with another Bytes or bytes e.g. `Bytes(b"FF") ^ b"0F")`

##### _static_ from_base32

\*_static_ from_base32(value: [str](https://docs.python.org/3/library/stdtypes.html#str), /) → [algopy.Bytes](#algopy.Bytes)\*

Creates Bytes from a base32 encoded string e.g. `Bytes.from_base32("74======")`

##### _static_ from_base64

\*_static_ from_base64(value: [str](https://docs.python.org/3/library/stdtypes.html#str), /) → [algopy.Bytes](#algopy.Bytes)\*

Creates Bytes from a base64 encoded string e.g. `Bytes.from_base64("RkY=")`

##### _static_ from_hex

\*_static_ from_hex(value: [str](https://docs.python.org/3/library/stdtypes.html#str), /) → [algopy.Bytes](#algopy.Bytes)\*

Creates Bytes from a hex/octal encoded string e.g. `Bytes.from_hex("FF")`

##### _property_ length \*: [algopy.UInt64]

**property* length *: [algopy.UInt64](#algopy.UInt64)**

Returns the length of the Bytes

#### _class_ algopy.BytesBacked

Represents a type that is a single bytes value

##### _property_ bytes \*: [algopy.Bytes]

**property* bytes *: [algopy.Bytes](#algopy.Bytes)**

Get the underlying Bytes

##### _classmethod_ from_bytes

\*_classmethod_ from_bytes(value: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [Self](https://docs.python.org/3/library/typing.html#typing.Self)\*

Construct an instance from the underlying bytes (no validation)

#### _class_ algopy.CompiledContract

Provides compiled programs and state allocation values for a Contract.
Create by calling [`compile_contract`](#algopy.compile_contract).

##### approval_program \*: [tuple]

_approval_program _: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](#algopy.Bytes), [algopy.Bytes](#algopy.Bytes)]\*\*

None

Approval program pages for a contract, after template variables have been replaced
and compiled to AVM bytecode

##### clear_state_program \*: [tuple]

_clear_state_program _: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](#algopy.Bytes), [algopy.Bytes](#algopy.Bytes)]\*\*

None

Clear state program pages for a contract, after template variables have been replaced
and compiled to AVM bytecode

##### extra_program_pages \*: [algopy.UInt64]

_extra_program_pages _: [algopy.UInt64](#algopy.UInt64)\*\*

None

By default, provides extra program pages required based on approval and clear state program
size, can be overridden when calling compile_contract

##### global_bytes \*: [algopy.UInt64]

_global_bytes _: [algopy.UInt64](#algopy.UInt64)\*\*

None

By default, provides global num bytes based on contract state totals, can be overridden
when calling compile_contract

##### global_uints \*: [algopy.UInt64]

_global_uints _: [algopy.UInt64](#algopy.UInt64)\*\*

None

By default, provides global num uints based on contract state totals, can be overridden
when calling compile_contract

##### local_bytes \*: [algopy.UInt64]

_local_bytes _: [algopy.UInt64](#algopy.UInt64)\*\*

None

By default, provides local num bytes based on contract state totals, can be overridden
when calling compile_contract

##### local_uints \*: [algopy.UInt64]

_local_uints _: [algopy.UInt64](#algopy.UInt64)\*\*

None

By default, provides local num uints based on contract state totals, can be overridden
when calling compile_contract

#### _class_ algopy.CompiledLogicSig

Provides account for a Logic Signature.
Create by calling [`compile_logicsig`](#algopy.compile_logicsig).

##### account \*: [algopy.Account]

_account _: [algopy.Account](#algopy.Account)\*\*

None

Address of a logic sig program, after template variables have been replaced and compiled
to AVM bytecode

#### _class_ algopy.Contract

Base class for an Algorand Smart Contract

##### _classmethod_ \_\_init*subclass*\_

\*_classmethod_ \_\_init*subclass*\_(\*, name: [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., scratch_slots: [algopy.urange](#algopy.urange) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[int](https://docs.python.org/3/library/functions.html#int) | [algopy.urange](#algopy.urange), ...] | [list](https://docs.python.org/3/library/stdtypes.html#list)[[int](https://docs.python.org/3/library/functions.html#int) | [algopy.urange](#algopy.urange)] = ..., state_totals: [algopy.StateTotals](#algopy.StateTotals) = ..., avm_version: [int](https://docs.python.org/3/library/functions.html#int) = ...)\*

When declaring a Contract subclass, options and configuration are passed in
the base class list:

```python
class MyContract(algopy.Contract, name="CustomName"):
    ...
```

- **Parameters:**

  - **name** –

    Will affect the output TEAL file name if there are multiple non-abstract contracts
    in the same file.

    If the contract is a subclass of algopy.ARC4Contract, `name` will also be used as the
    contract name in the ARC-32 application.json, instead of the class name.

  - **scratch_slots** –

    Allows you to mark a slot ID or range of slot IDs as “off limits” to Puya.
    These slot ID(s) will never be written to or otherwise manipulating by the compiler itself.
    This is particularly useful in combination with `algopy.op.gload_bytes` / `algopy.op.gload_uint64`
    which lets a contract in a group transaction read from the scratch slots of another contract
    that occurs earlier in the transaction group.

    In the case of inheritance, scratch slots reserved become cumulative. It is not an error
    to have overlapping ranges or values either, so if a base class contract reserves slots
    0-5 inclusive and the derived contract reserves 5-10 inclusive, then within the derived
    contract all slots 0-10 will be marked as reserved.

  - **state_totals** –

    Allows defining what values should be used for global and local uint and bytes storage
    values when creating a contract. Used when outputting ARC-32 application.json schemas.

    If let unspecified, the totals will be determined by the compiler based on state
    variables assigned to `self`.

    This setting is not inherited, and only applies to the exact `Contract` it is specified
    on. If a base class does specify this setting, and a derived class does not, a warning
    will be emitted for the derived class. To resolve this warning, `state_totals` must be
    specified. Note that it is valid to not provide any arguments to the `StateTotals`
    constructor, like so `state_totals=StateTotals()`, in which case all values will be
    automatically calculated.

  - **avm_version** – Determines which AVM version to use, this affects what operations are supported.
    Defaults to value provided supplied on command line (which defaults to current mainnet version)

##### _abstract_ approval_program

\*_abstract_ approval_program() → [algopy.UInt64](#algopy.UInt64) | [bool](https://docs.python.org/3/library/functions.html#bool)\*

Represents the program called for all transactions
where `OnCompletion` != `ClearState`

##### _abstract_ clear_state_program

\*_abstract_ clear_state_program() → [algopy.UInt64](#algopy.UInt64) | [bool](https://docs.python.org/3/library/functions.html#bool)\*

Represents the program called when `OnCompletion` == `ClearState`

#### _class_ algopy.FixedArray

\*_class_ algopy.FixedArray(values: [collections.abc.Iterable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable)[algopy._TArrayItem])\*

A fixed length Array of the specified type and length

##### Initialization

##### \_\_getitem\_\_

_\_\_getitem\_\_(index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → algopy.\_TArrayItem_

Gets the item of the array at the provided index

##### \_\_iter\_\_

_\_\_iter\_\_() → [Iterator](https://docs.python.org/3/library/typing.html#typing.Iterator)[algopy._TArrayItem]_

Returns an iterator for the items in the array

##### \_\_reversed\_\_

_\_\_reversed\_\_() → [Iterator](https://docs.python.org/3/library/typing.html#typing.Iterator)[algopy._TArrayItem]_

Returns an iterator for the items in the array, in reverse order

##### \_\_setitem\_\_

_\_\_setitem\_\_(index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), value: algopy.\_TArrayItem) → algopy.\_TArrayItem_

Sets the item of the array at the specified index to provided value

##### copy

_copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Create a copy of this array

##### freeze

_freeze() → [algopy.ImmutableFixedArray](#algopy.ImmutableFixedArray)[algopy._TArrayItem, algopy._TArrayLength]_

Returns an immutable copy of this array

##### _classmethod_ full

\*_classmethod_ full(item: algopy.\_TArrayItem) → [Self](https://docs.python.org/3/library/typing.html#typing.Self)\*

Initializes a new array, filled with copies of the specified value

##### _property_ length \*: [algopy.UInt64]

**property* length *: [algopy.UInt64](#algopy.UInt64)**

Returns the (compile-time) length of the array

##### replace

_replace(index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), value: algopy.\_TArrayItem) → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Returns a copy of the array with the item at the specified index replaced with the specified value

##### validate

_validate() → [None](https://docs.python.org/3/library/constants.html#None)_

Performs validation to ensure the value is well-formed, errors if it is not

#### _class_ algopy.Global

Get Global values
Native TEAL op: [`global`](https://dev.algorand.co/reference/algorand-teal/opcodes/#global)

##### asset_create_min_balance \*: [Final]

_asset_create_min_balance _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

The additional minimum balance required to create (and opt-in to) an asset.

##### asset_opt_in_min_balance \*: [Final]

_asset_opt_in_min_balance _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

The additional minimum balance required to opt-in to an asset.

##### caller_application_address \*: [Final]

_caller_application_address _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

The application address of the application that called this application. ZeroAddress if this application is at the top-level. Application mode only.

##### caller_application_id \*: [Final]

_caller_application_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

The application ID of the application that called this application. 0 if this application is at the top-level. Application mode only.

##### creator_address \*: [Final]

_creator_address _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

Address of the creator of the current application. Application mode only.

##### current_application_address \*: [Final]

_current_application_address _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

Address that the current application controls. Application mode only.

##### current_application_id \*: [Final]

_current_application_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Application](#algopy.Application)]\*\*

Ellipsis

ID of current application executing. Application mode only.

##### genesis_hash \*: [Final]

_genesis_hash _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

The Genesis Hash for the network.

##### group_id \*: [Final]

_group_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

ID of the transaction group. 32 zero bytes if the transaction is not part of a group.

##### group_size \*: [Final]

_group_size _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of transactions in this atomic transaction group. At least 1

##### latest_timestamp \*: [Final]

_latest_timestamp _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Last confirmed block UNIX timestamp. Fails if negative. Application mode only.

##### logic_sig_version \*: [Final]

_logic_sig_version _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Maximum supported version

##### max_txn_life \*: [Final]

_max_txn_life _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

rounds

##### min_balance \*: [Final]

_min_balance _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

microalgos

##### min_txn_fee \*: [Final]

_min_txn_fee _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

microalgos

##### _static_ opcode_budget

\*_static_ opcode_budget() → [algopy.UInt64](#algopy.UInt64)\*

The remaining cost that can be spent by opcodes in this program.

Native TEAL opcode: [`global`](https://dev.algorand.co/reference/algorand-teal/opcodes/#global)

##### payouts_enabled \*: [Final]

_payouts_enabled _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[bool](https://docs.python.org/3/library/functions.html#bool)]\*\*

Ellipsis

Whether block proposal payouts are enabled.
Min AVM version: 11

##### payouts_go_online_fee \*: [Final]

_payouts_go_online_fee _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

The fee required in a keyreg transaction to make an account incentive eligible.
Min AVM version: 11

##### payouts_max_balance \*: [Final]

_payouts_max_balance _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

The maximum balance an account can have in the agreement round to receive block payouts in the proposal round.
Min AVM version: 11

##### payouts_min_balance \*: [Final]

_payouts_min_balance _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

The minimum balance an account must have in the agreement round to receive block payouts in the proposal round.
Min AVM version: 11

##### payouts_percent \*: [Final]

_payouts_percent _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

The percentage of transaction fees in a block that can be paid to the block proposer.
Min AVM version: 11

##### round \*: [Final]

_round _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Current round number. Application mode only.

##### zero_address \*: [Final]

_zero_address _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte address of all zero bytes

#### _class_ algopy.GlobalState

Global state associated with the application, the key will be the name of the member, this
is assigned to

##### NOTE

The `GlobalState` class provides a richer API that in addition to storing and retrieving
values, can test if a value is set or unset it. However if this extra functionality is not
needed then it is simpler to just store the data without the GlobalState proxy
e.g. `self.some_variable = UInt64(0)`

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns `True` if the key has a value set, regardless of the truthiness of that value

##### get

_get(default: algopy.\_TState) → algopy.\_TState_

Returns the value or `default` if no value is set

```python
name = self.name.get(Bytes(b"no name")
```

##### _property_ key \*: [algopy.Bytes]

**property* key *: [algopy.Bytes](#algopy.Bytes)**

Provides access to the raw storage key

##### maybe

_maybe() → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[algopy.\_TState, [bool](https://docs.python.org/3/library/functions.html#bool)]_

Returns the value, and a bool

```python
name, name_exists = self.name.maybe()
if not name_exists:
    name = Bytes(b"no name")
```

##### _property_ value _: algopy.\_TState_

Returns the value or and error if the value is not set

```python
name = self.name.value
```

#### _class_ algopy.ImmutableArray

An immutable array that supports fixed and dynamically sized immutable elements.
Modifications are done by returning a new copy of the array with the modifications applied.

Example:

```python
arr = ImmutableArray[UInt64]()

arr = arr.append(UInt64(42))
element = arr[0]
assert element == 42
arr = arr.pop()
```

##### \_\_add\_\_

_\_\_add\_\_(other: [collections.abc.Iterable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable)[algopy._TArrayItem], /) → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Return a copy of this array extended with the contents of another array

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns `True` if not an empty array

##### \_\_getitem\_\_

_\_\_getitem\_\_(index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → algopy.\_TArrayItem_

Gets the item of the array at provided index

##### \_\_reversed\_\_

_\_\_reversed\_\_() → [collections.abc.Iterator](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator)[algopy._TArrayItem]_

Returns an iterator for the items in the array, in reverse order

##### append

_append(item: algopy.\_TArrayItem, /) → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Return a copy of the array with a another value appended to the end

##### _property_ length \*: [algopy.UInt64]

**property* length *: [algopy.UInt64](#algopy.UInt64)**

Returns the current length of the array

##### pop

_pop() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Return a copy of this array with the last item removed

##### replace

_replace(index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), value: algopy.\_TArrayItem) → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Returns a copy of the array with the item at specified index replaced with the specified value

##### validate

_validate() → [None](https://docs.python.org/3/library/constants.html#None)_

Performs validation to ensure the value is well-formed, errors if it is not

#### _class_ algopy.ImmutableFixedArray

\*_class_ algopy.ImmutableFixedArray(values: [collections.abc.Iterable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable)[algopy._TArrayItem])\*

An immutable fixed length Array of the specified type and length

##### Initialization

##### \_\_getitem\_\_

_\_\_getitem\_\_(index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → algopy.\_TArrayItem_

Gets the item of the array at the provided index

##### \_\_iter\_\_

_\_\_iter\_\_() → [Iterator](https://docs.python.org/3/library/typing.html#typing.Iterator)[algopy._TArrayItem]_

Returns an iterator for the items in the array

##### \_\_reversed\_\_

_\_\_reversed\_\_() → [Iterator](https://docs.python.org/3/library/typing.html#typing.Iterator)[algopy._TArrayItem]_

Returns an iterator for the items in the array, in reverse order

##### copy

_copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Create a copy of this array

##### _classmethod_ full

\*_classmethod_ full(item: algopy.\_TArrayItem) → [Self](https://docs.python.org/3/library/typing.html#typing.Self)\*

Initializes a new array, filled with copies of the specified value

##### _property_ length \*: [algopy.UInt64]

**property* length *: [algopy.UInt64](#algopy.UInt64)**

Returns the (compile-time) length of the array

##### replace

_replace(index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), value: algopy.\_TArrayItem) → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Returns a copy of the array with the item at the specified index replaced with the specified value

##### validate

_validate() → [None](https://docs.python.org/3/library/constants.html#None)_

Performs validation to ensure the value is well-formed, errors if it is not

#### _class_ algopy.LocalState

\*_class_ algopy.LocalState(type\_: [type](https://docs.python.org/3/library/functions.html#type)[algopy._TState], /, \*, key: [algopy.String](#algopy.String) | [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., description: [str](https://docs.python.org/3/library/stdtypes.html#str) = '')\*

Local state associated with the application and an account

##### Initialization

Declare the local state key and it’s associated type

```python
self.names = LocalState(algopy.Bytes)
```

##### \_\_contains\_\_

_\_\_contains\_\_(account: [algopy.Account](#algopy.Account) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Can test if data exists by using an `Account` reference or foreign account index

```python
assert account in self.names
```

##### \_\_delitem\_\_

_\_\_delitem\_\_(account: [algopy.Account](#algopy.Account) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)_

Data can be removed by using an `Account` reference or foreign account index

```python
del self.names[account]
```

##### \_\_getitem\_\_

_\_\_getitem\_\_(account: [algopy.Account](#algopy.Account) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → algopy.\_TState_

Data can be accessed by an `Account` reference or foreign account index

```python
account_name = self.names[account]
```

##### \_\_setitem\_\_

_\_\_setitem\_\_(account: [algopy.Account](#algopy.Account) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), value: algopy.\_TState) → [None](https://docs.python.org/3/library/constants.html#None)_

Data can be stored by using an `Account` reference or foreign account index

```python
self.names[account] = account_name
```

##### get

_get(account: [algopy.Account](#algopy.Account) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), default: algopy.\_TState) → algopy.\_TState_

Can retrieve value using an `Account` reference or foreign account index,
and a fallback default value.

```python
name = self.names.get(account, Bytes(b"no name")
```

##### _property_ key \*: [algopy.Bytes]

**property* key *: [algopy.Bytes](#algopy.Bytes)**

Provides access to the raw storage key

##### maybe

_maybe(account: [algopy.Account](#algopy.Account) | [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[algopy.\_TState, [bool](https://docs.python.org/3/library/functions.html#bool)]_

Can retrieve value, and a bool indicating if the value was present
using an `Account` reference or foreign account index.

```python
name, name_exists = self.names.maybe(account)
if not name_exists:
    name = Bytes(b"no name")
```

#### _class_ algopy.LogicSig

A logic signature

#### _class_ algopy.OnCompleteAction

\*_class_ algopy.OnCompleteAction(value: [int](https://docs.python.org/3/library/functions.html#int) = 0, /)\*

On Completion actions available in an application call transaction

##### Initialization

A UInt64 can be initialized with a Python int literal, or an int variable
declared at the module level

##### ClearState \*: [algopy.OnCompleteAction]

_ClearState _: [algopy.OnCompleteAction](#algopy.OnCompleteAction)\*\*

Ellipsis

ClearState is similar to CloseOut, but may never fail. This
allows users to reclaim their minimum balance from an application
they no longer wish to opt in to.

##### CloseOut \*: [algopy.OnCompleteAction]

_CloseOut _: [algopy.OnCompleteAction](#algopy.OnCompleteAction)\*\*

Ellipsis

CloseOut indicates that an application transaction will deallocate
some LocalState for the application from the user’s account

##### DeleteApplication \*: [algopy.OnCompleteAction]

_DeleteApplication _: [algopy.OnCompleteAction](#algopy.OnCompleteAction)\*\*

Ellipsis

DeleteApplication indicates that an application transaction will
delete the AppParams for the application from the creator’s balance
record

##### NoOp \*: [algopy.OnCompleteAction]

_NoOp _: [algopy.OnCompleteAction](#algopy.OnCompleteAction)\*\*

Ellipsis

NoOP indicates that no additional action is performed when the transaction completes

##### OptIn \*: [algopy.OnCompleteAction]

_OptIn _: [algopy.OnCompleteAction](#algopy.OnCompleteAction)\*\*

Ellipsis

OptIn indicates that an application transaction will allocate some
LocalState for the application in the sender’s account

##### UpdateApplication \*: [algopy.OnCompleteAction]

_UpdateApplication _: [algopy.OnCompleteAction](#algopy.OnCompleteAction)\*\*

Ellipsis

UpdateApplication indicates that an application transaction will
update the ApprovalProgram and ClearStateProgram for the application

##### \_\_add\_\_

_\_\_add\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be added with another UInt64 or int e.g. `UInt(4) + 2`.

This will error on overflow

##### \_\_and\_\_

_\_\_and\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise and with another UInt64 or int e.g. `UInt64(4) & 2`

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 will evaluate to `False` if zero, and `True` otherwise

##### \_\_eq\_\_

_\_\_eq\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `==` operator with another UInt64 or int

##### \_\_floordiv\_\_

_\_\_floordiv\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be floor divided with another UInt64 or int e.g. `UInt64(4) // 2`.

This will error on divide by zero

##### \_\_ge\_\_

_\_\_ge\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `>=` operator with another UInt64 or int

##### \_\_gt\_\_

_\_\_gt\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `>` operator with another UInt64 or int

##### \_\_iadd\_\_

_\_\_iadd\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be incremented with another UInt64 or int e.g. `a += UInt(2)`.

This will error on overflow

##### \_\_iand\_\_

_\_\_iand\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise and with another UInt64 or int e.g. `a &= UInt64(2)`

##### \_\_ifloordiv\_\_

_\_\_ifloordiv\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be floor divided with another UInt64 or int e.g. `a //= UInt64(2)`.

This will error on divide by zero

##### \_\_ilshift\_\_

_\_\_ilshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be left shifted by another UInt64 or int e.g. `a <<= UInt64(2)`

##### \_\_imod\_\_

_\_\_imod\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be modded with another UInt64 or int e.g. `a %= UInt64(2)`.

This will error on mod by zero

##### \_\_imul\_\_

_\_\_imul\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be multiplied with another UInt64 or int e.g. `a*= UInt64(2)`.

This will error on overflow

##### \_\_index\_\_

_\_\_index\_\_() → [int](https://docs.python.org/3/library/functions.html#int)_

A UInt64 can be used in indexing/slice expressions

##### \_\_invert\_\_

_\_\_invert\_\_() → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be bitwise inverted e.g. `~UInt64(4)`

##### \_\_ior\_\_

_\_\_ior\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise or with another UInt64 or int e.g. `a |= UInt64(2)`

##### \_\_ipow\_\_

_\_\_ipow\_\_(power: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be raised to the power of another UInt64 or int e.g. `a **= UInt64(2)`.

This will error on overflow

##### \_\_irshift\_\_

_\_\_irshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be right shifted by another UInt64 or int e.g. `a >>= UInt64(2)`

##### \_\_isub\_\_

_\_\_isub\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be subtracted with another UInt64 or int e.g. `a -= UInt64(2)`.

This will error on underflow

##### \_\_ixor\_\_

_\_\_ixor\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise xor with another UInt64 or int e.g. `a ^= UInt64(2)`

##### \_\_le\_\_

_\_\_le\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `<=` operator with another UInt64 or int

##### \_\_lshift\_\_

_\_\_lshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be left shifted by another UInt64 or int e.g. `UInt64(4) << 2`

##### \_\_lt\_\_

_\_\_lt\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `<` operator with another UInt64 or int

##### \_\_mod\_\_

_\_\_mod\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be modded with another UInt64 or int e.g. `UInt64(4) % 2`.

This will error on mod by zero

##### \_\_mul\_\_

_\_\_mul\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be multiplied with another UInt64 or int e.g. `4 + UInt64(2)`.

This will error on overflow

##### \_\_ne\_\_

_\_\_ne\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `!=` operator with another UInt64 or int

##### \_\_or\_\_

_\_\_or\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise or with another UInt64 or int e.g. `UInt64(4) | 2`

##### \_\_pos\_\_

_\_\_pos\_\_() → [algopy.UInt64](#algopy.UInt64)_

Supports unary + operator. Redundant given the type is unsigned

##### \_\_pow\_\_

_\_\_pow\_\_(power: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be raised to the power of another UInt64 or int e.g. `UInt64(4) ** 2`.

This will error on overflow

##### \_\_radd\_\_

_\_\_radd\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be added with another UInt64 or int e.g. `4 + UInt64(2)`.

This will error on overflow

##### \_\_rand\_\_

_\_\_rand\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise and with another UInt64 or int e.g. `4 & UInt64(2)`

##### \_\_rfloordiv\_\_

_\_\_rfloordiv\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be floor divided with another UInt64 or int e.g. `4 // UInt64(2)`.

This will error on divide by zero

##### \_\_rlshift\_\_

_\_\_rlshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be left shifted by another UInt64 or int e.g. `4 << UInt64(2)`

##### \_\_rmod\_\_

_\_\_rmod\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be modded with another UInt64 or int e.g. `4 % UInt64(2)`.

This will error on mod by zero

##### \_\_rmul\_\_

_\_\_rmul\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be multiplied with another UInt64 or int e.g. `UInt64(4) + 2`.

This will error on overflow

##### \_\_ror\_\_

_\_\_ror\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise or with another UInt64 or int e.g. `4 | UInt64(2)`

##### \_\_rpow\_\_

_\_\_rpow\_\_(power: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be raised to the power of another UInt64 or int e.g. `4 ** UInt64(2)`.

This will error on overflow

##### \_\_rrshift\_\_

_\_\_rrshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be right shifted by another UInt64 or int e.g. `4 >> UInt64(2)`

##### \_\_rshift\_\_

_\_\_rshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be right shifted by another UInt64 or int e.g. `UInt64(4) >> 2`

##### \_\_rsub\_\_

_\_\_rsub\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be subtracted with another UInt64 or int e.g. `4 - UInt64(2)`.

This will error on underflow

##### \_\_rxor\_\_

_\_\_rxor\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise xor with another UInt64 or int e.g. `4 ^ UInt64(2)`

##### \_\_sub\_\_

_\_\_sub\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be subtracted with another UInt64 or int e.g. `UInt(4) - 2`.

This will error on underflow

##### \_\_xor\_\_

_\_\_xor\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise xor with another UInt64 or int e.g. `UInt64(4) ^ 2`

#### _class_ algopy.OpUpFeeSource

\*_class_ algopy.OpUpFeeSource(value: [int](https://docs.python.org/3/library/functions.html#int) = 0, /)\*

Defines the source of fees for the OpUp utility.

##### Initialization

A UInt64 can be initialized with a Python int literal, or an int variable
declared at the module level

##### Any \*: [algopy.OpUpFeeSource]

_Any _: [algopy.OpUpFeeSource](#algopy.OpUpFeeSource)\*\*

Ellipsis

First the excess will be used, remaining fees will be taken from the app account

##### AppAccount \*: [algopy.OpUpFeeSource]

_AppAccount _: [algopy.OpUpFeeSource](#algopy.OpUpFeeSource)\*\*

Ellipsis

The app’s account will cover all fees (set inner_tx.fee=Global.min_tx_fee())

##### GroupCredit \*: [algopy.OpUpFeeSource]

_GroupCredit _: [algopy.OpUpFeeSource](#algopy.OpUpFeeSource)\*\*

Ellipsis

Only the excess fee (credit) on the outer group should be used (set inner_tx.fee=0)

##### \_\_add\_\_

_\_\_add\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be added with another UInt64 or int e.g. `UInt(4) + 2`.

This will error on overflow

##### \_\_and\_\_

_\_\_and\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise and with another UInt64 or int e.g. `UInt64(4) & 2`

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 will evaluate to `False` if zero, and `True` otherwise

##### \_\_eq\_\_

_\_\_eq\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `==` operator with another UInt64 or int

##### \_\_floordiv\_\_

_\_\_floordiv\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be floor divided with another UInt64 or int e.g. `UInt64(4) // 2`.

This will error on divide by zero

##### \_\_ge\_\_

_\_\_ge\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `>=` operator with another UInt64 or int

##### \_\_gt\_\_

_\_\_gt\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `>` operator with another UInt64 or int

##### \_\_iadd\_\_

_\_\_iadd\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be incremented with another UInt64 or int e.g. `a += UInt(2)`.

This will error on overflow

##### \_\_iand\_\_

_\_\_iand\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise and with another UInt64 or int e.g. `a &= UInt64(2)`

##### \_\_ifloordiv\_\_

_\_\_ifloordiv\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be floor divided with another UInt64 or int e.g. `a //= UInt64(2)`.

This will error on divide by zero

##### \_\_ilshift\_\_

_\_\_ilshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be left shifted by another UInt64 or int e.g. `a <<= UInt64(2)`

##### \_\_imod\_\_

_\_\_imod\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be modded with another UInt64 or int e.g. `a %= UInt64(2)`.

This will error on mod by zero

##### \_\_imul\_\_

_\_\_imul\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be multiplied with another UInt64 or int e.g. `a*= UInt64(2)`.

This will error on overflow

##### \_\_index\_\_

_\_\_index\_\_() → [int](https://docs.python.org/3/library/functions.html#int)_

A UInt64 can be used in indexing/slice expressions

##### \_\_invert\_\_

_\_\_invert\_\_() → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be bitwise inverted e.g. `~UInt64(4)`

##### \_\_ior\_\_

_\_\_ior\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise or with another UInt64 or int e.g. `a |= UInt64(2)`

##### \_\_ipow\_\_

_\_\_ipow\_\_(power: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be raised to the power of another UInt64 or int e.g. `a **= UInt64(2)`.

This will error on overflow

##### \_\_irshift\_\_

_\_\_irshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be right shifted by another UInt64 or int e.g. `a >>= UInt64(2)`

##### \_\_isub\_\_

_\_\_isub\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be subtracted with another UInt64 or int e.g. `a -= UInt64(2)`.

This will error on underflow

##### \_\_ixor\_\_

_\_\_ixor\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise xor with another UInt64 or int e.g. `a ^= UInt64(2)`

##### \_\_le\_\_

_\_\_le\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `<=` operator with another UInt64 or int

##### \_\_lshift\_\_

_\_\_lshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be left shifted by another UInt64 or int e.g. `UInt64(4) << 2`

##### \_\_lt\_\_

_\_\_lt\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `<` operator with another UInt64 or int

##### \_\_mod\_\_

_\_\_mod\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be modded with another UInt64 or int e.g. `UInt64(4) % 2`.

This will error on mod by zero

##### \_\_mul\_\_

_\_\_mul\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be multiplied with another UInt64 or int e.g. `4 + UInt64(2)`.

This will error on overflow

##### \_\_ne\_\_

_\_\_ne\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `!=` operator with another UInt64 or int

##### \_\_or\_\_

_\_\_or\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise or with another UInt64 or int e.g. `UInt64(4) | 2`

##### \_\_pos\_\_

_\_\_pos\_\_() → [algopy.UInt64](#algopy.UInt64)_

Supports unary + operator. Redundant given the type is unsigned

##### \_\_pow\_\_

_\_\_pow\_\_(power: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be raised to the power of another UInt64 or int e.g. `UInt64(4) ** 2`.

This will error on overflow

##### \_\_radd\_\_

_\_\_radd\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be added with another UInt64 or int e.g. `4 + UInt64(2)`.

This will error on overflow

##### \_\_rand\_\_

_\_\_rand\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise and with another UInt64 or int e.g. `4 & UInt64(2)`

##### \_\_rfloordiv\_\_

_\_\_rfloordiv\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be floor divided with another UInt64 or int e.g. `4 // UInt64(2)`.

This will error on divide by zero

##### \_\_rlshift\_\_

_\_\_rlshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be left shifted by another UInt64 or int e.g. `4 << UInt64(2)`

##### \_\_rmod\_\_

_\_\_rmod\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be modded with another UInt64 or int e.g. `4 % UInt64(2)`.

This will error on mod by zero

##### \_\_rmul\_\_

_\_\_rmul\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be multiplied with another UInt64 or int e.g. `UInt64(4) + 2`.

This will error on overflow

##### \_\_ror\_\_

_\_\_ror\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise or with another UInt64 or int e.g. `4 | UInt64(2)`

##### \_\_rpow\_\_

_\_\_rpow\_\_(power: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be raised to the power of another UInt64 or int e.g. `4 ** UInt64(2)`.

This will error on overflow

##### \_\_rrshift\_\_

_\_\_rrshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be right shifted by another UInt64 or int e.g. `4 >> UInt64(2)`

##### \_\_rshift\_\_

_\_\_rshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be right shifted by another UInt64 or int e.g. `UInt64(4) >> 2`

##### \_\_rsub\_\_

_\_\_rsub\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be subtracted with another UInt64 or int e.g. `4 - UInt64(2)`.

This will error on underflow

##### \_\_rxor\_\_

_\_\_rxor\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise xor with another UInt64 or int e.g. `4 ^ UInt64(2)`

##### \_\_sub\_\_

_\_\_sub\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be subtracted with another UInt64 or int e.g. `UInt(4) - 2`.

This will error on underflow

##### \_\_xor\_\_

_\_\_xor\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise xor with another UInt64 or int e.g. `UInt64(4) ^ 2`

#### _class_ algopy.ReferenceArray

A mutable array that supports fixed sized immutable elements. All references to this array
will see any updates made to it.

These arrays may use scratch slots if required. If a contract also needs to use scratch slots
for other purposes then they should be reserved using the `scratch_slots` parameter
in [`algopy.Contract`](#algopy.Contract),
[`algopy.arc4.ARC4Contract`](/reference/algorand-python/api/api-algopyarc4/#algopy.arc4.ARC4Contract) or [`algopy.logicsig`](#algopy.logicsig)

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns `True` if not an empty array

##### \_\_getitem\_\_

_\_\_getitem\_\_(index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → algopy.\_TArrayItem_

Gets the item of the array at provided index

##### \_\_iter\_\_

_\_\_iter\_\_() → [collections.abc.Iterator](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator)[algopy._TArrayItem]_

Returns an iterator for the items in the array

##### \_\_reversed\_\_

_\_\_reversed\_\_() → [collections.abc.Iterator](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator)[algopy._TArrayItem]_

Returns an iterator for the items in the array, in reverse order

##### \_\_setitem\_\_

_\_\_setitem\_\_(index: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), value: algopy.\_TArrayItem) → algopy.\_TArrayItem_

Sets the item of the array at specified index to provided value

##### append

_append(item: algopy.\_TArrayItem, /) → [None](https://docs.python.org/3/library/constants.html#None)_

Append an item to this array

##### copy

_copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Create a copy of this array

##### extend

_extend(other: [collections.abc.Iterable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable)[algopy._TArrayItem], /) → [None](https://docs.python.org/3/library/constants.html#None)_

Extend this array with the contents of another array

##### freeze

_freeze() → [algopy.ImmutableArray](#algopy.ImmutableArray)[algopy._TArrayItem]_

Returns an immutable copy of this array

##### _property_ length \*: [algopy.UInt64]

**property* length *: [algopy.UInt64](#algopy.UInt64)**

Returns the current length of the array

##### pop

_pop() → algopy.\_TArrayItem_

Remove and return the last item of this array

#### _class_ algopy.StateTotals

\*_class_ algopy.StateTotals(\*, global_uints: [int](https://docs.python.org/3/library/functions.html#int) = ..., global_bytes: [int](https://docs.python.org/3/library/functions.html#int) = ..., local_uints: [int](https://docs.python.org/3/library/functions.html#int) = ..., local_bytes: [int](https://docs.python.org/3/library/functions.html#int) = ...)\*

Options class to manually define the total amount of global and local state contract will use,
used by [`Contract.__init_subclass__`](#algopy.Contract.__init_subclass__).

This is not required when all state is assigned to `self.`, but is required if a
contract dynamically interacts with state via `AppGlobal.get_bytes` etc, or if you want
to reserve additional state storage for future contract updates, since the Algorand protocol
doesn’t allow increasing them after creation.

##### Initialization

Specify the totals for both global and local, and for each type. Any arguments not
specified default to their automatically calculated values.

Values are validated against the known totals assigned through `self.`, a warning is
produced if the total specified is insufficient to accommodate all `self.` state values
at once.

#### _class_ algopy.String

\*_class_ algopy.String(value: [str](https://docs.python.org/3/library/stdtypes.html#str) = '', /)\*

A UTF-8 encoded string.

In comparison to `arc4.String`, this type does not store the array length prefix, since that
information is always available through the `len` AVM op. This makes it more efficient to
operate on when doing operations such as concatenation.

Note that due to the lack of UTF-8 support in the AVM, indexing and length operations are not
currently supported.

##### Initialization

A String can be initialized with a Python `str` literal, or a `str` variable
declared at the module level

##### \_\_add\_\_

_\_\_add\_\_(other: [algopy.String](#algopy.String) | [str](https://docs.python.org/3/library/stdtypes.html#str)) → [algopy.String](#algopy.String)_

Concatenate `String` with another `String` or `str` literal
e.g. `String("Hello ") + "World"`.

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

Returns `True` if the string is not empty

##### \_\_contains\_\_

_\_\_contains\_\_(other: [algopy.String](#algopy.String) | [str](https://docs.python.org/3/library/stdtypes.html#str)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Test whether another string is a substring of this one.
Note this is expensive due to a lack of AVM support.

##### \_\_eq\_\_

_\_\_eq\_\_(other: [algopy.String](#algopy.String) | [str](https://docs.python.org/3/library/stdtypes.html#str)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Supports using the `==` operator with another `String` or literal `str`

##### \_\_iadd\_\_

_\_\_iadd\_\_(other: [algopy.String](#algopy.String) | [str](https://docs.python.org/3/library/stdtypes.html#str)) → [algopy.String](#algopy.String)_

Concatenate `String` with another `String` or `str` literal
e.g. `a = String("Hello"); a += "World"`.

##### \_\_ne\_\_

_\_\_ne\_\_(other: [algopy.String](#algopy.String) | [str](https://docs.python.org/3/library/stdtypes.html#str)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Supports using the `!=` operator with another `String` or literal `str`

##### \_\_radd\_\_

_\_\_radd\_\_(other: [algopy.String](#algopy.String) | [str](https://docs.python.org/3/library/stdtypes.html#str)) → [algopy.String](#algopy.String)_

Concatenate String with another `String` or `str` literal
e.g. `"Hello " + String("World")`.

##### _property_ bytes \*: [algopy.Bytes]

**property* bytes *: [algopy.Bytes](#algopy.Bytes)**

Get the underlying Bytes

##### endswith

_endswith(suffix: [algopy.String](#algopy.String) | [str](https://docs.python.org/3/library/stdtypes.html#str)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Check if this string ends with another string.

The behaviour should mirror `str.endswith`, for example, if `suffix` is the empty string,
the result will always be `True`.

Only a single argument is currently supported.

##### _classmethod_ from_bytes

\*_classmethod_ from_bytes(value: [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [Self](https://docs.python.org/3/library/typing.html#typing.Self)\*

Construct an instance from the underlying bytes (no validation)

##### join

_join(others: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.String](#algopy.String) | [str](https://docs.python.org/3/library/stdtypes.html#str), ...], /) → [algopy.String](#algopy.String)_

Join a sequence of Strings with a common separator.

The behaviour should mirror `str.join`.

##### startswith

_startswith(prefix: [algopy.String](#algopy.String) | [str](https://docs.python.org/3/library/stdtypes.html#str)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Check if this string starts with another string.

The behaviour should mirror `str.startswith`, for example, if `prefix` is the empty string,
the result will always be `True`.

Only a single argument is currently supported.

#### _class_ algopy.Struct

Base class for Struct types

##### \_replace

_\_replace(\*\*kwargs: [Any](https://docs.python.org/3/library/typing.html#typing.Any)) → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Return a new instance of the struct replacing specified fields with new values.

Note that any mutable fields must be explicitly copied to avoid aliasing.

##### copy

_copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)_

Create a copy of this struct

##### validate

_validate() → [None](https://docs.python.org/3/library/constants.html#None)_

Performs validation to ensure the value is well-formed, errors if it is not

##### algopy.TemplateVar _: algopy.\_TemplateVarGeneric_

Ellipsis

Template variables can be used to represent a placeholder for a deploy-time provided value.

#### _class_ algopy.TransactionType

\*_class_ algopy.TransactionType(value: [int](https://docs.python.org/3/library/functions.html#int) = 0, /)\*

The different transaction types available in a transaction

##### Initialization

A UInt64 can be initialized with a Python int literal, or an int variable
declared at the module level

##### ApplicationCall \*: [algopy.TransactionType]

_ApplicationCall _: [algopy.TransactionType](#algopy.TransactionType)\*\*

Ellipsis

An Application Call transaction

##### AssetConfig \*: [algopy.TransactionType]

_AssetConfig _: [algopy.TransactionType](#algopy.TransactionType)\*\*

Ellipsis

An Asset Config transaction

##### AssetFreeze \*: [algopy.TransactionType]

_AssetFreeze _: [algopy.TransactionType](#algopy.TransactionType)\*\*

Ellipsis

An Asset Freeze transaction

##### AssetTransfer \*: [algopy.TransactionType]

_AssetTransfer _: [algopy.TransactionType](#algopy.TransactionType)\*\*

Ellipsis

An Asset Transfer transaction

##### KeyRegistration \*: [algopy.TransactionType]

_KeyRegistration _: [algopy.TransactionType](#algopy.TransactionType)\*\*

Ellipsis

A Key Registration transaction

##### Payment \*: [algopy.TransactionType]

_Payment _: [algopy.TransactionType](#algopy.TransactionType)\*\*

Ellipsis

A Payment transaction

##### \_\_add\_\_

_\_\_add\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be added with another UInt64 or int e.g. `UInt(4) + 2`.

This will error on overflow

##### \_\_and\_\_

_\_\_and\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise and with another UInt64 or int e.g. `UInt64(4) & 2`

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 will evaluate to `False` if zero, and `True` otherwise

##### \_\_eq\_\_

_\_\_eq\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `==` operator with another UInt64 or int

##### \_\_floordiv\_\_

_\_\_floordiv\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be floor divided with another UInt64 or int e.g. `UInt64(4) // 2`.

This will error on divide by zero

##### \_\_ge\_\_

_\_\_ge\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `>=` operator with another UInt64 or int

##### \_\_gt\_\_

_\_\_gt\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `>` operator with another UInt64 or int

##### \_\_iadd\_\_

_\_\_iadd\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be incremented with another UInt64 or int e.g. `a += UInt(2)`.

This will error on overflow

##### \_\_iand\_\_

_\_\_iand\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise and with another UInt64 or int e.g. `a &= UInt64(2)`

##### \_\_ifloordiv\_\_

_\_\_ifloordiv\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be floor divided with another UInt64 or int e.g. `a //= UInt64(2)`.

This will error on divide by zero

##### \_\_ilshift\_\_

_\_\_ilshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be left shifted by another UInt64 or int e.g. `a <<= UInt64(2)`

##### \_\_imod\_\_

_\_\_imod\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be modded with another UInt64 or int e.g. `a %= UInt64(2)`.

This will error on mod by zero

##### \_\_imul\_\_

_\_\_imul\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be multiplied with another UInt64 or int e.g. `a*= UInt64(2)`.

This will error on overflow

##### \_\_index\_\_

_\_\_index\_\_() → [int](https://docs.python.org/3/library/functions.html#int)_

A UInt64 can be used in indexing/slice expressions

##### \_\_invert\_\_

_\_\_invert\_\_() → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be bitwise inverted e.g. `~UInt64(4)`

##### \_\_ior\_\_

_\_\_ior\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise or with another UInt64 or int e.g. `a |= UInt64(2)`

##### \_\_ipow\_\_

_\_\_ipow\_\_(power: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be raised to the power of another UInt64 or int e.g. `a **= UInt64(2)`.

This will error on overflow

##### \_\_irshift\_\_

_\_\_irshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be right shifted by another UInt64 or int e.g. `a >>= UInt64(2)`

##### \_\_isub\_\_

_\_\_isub\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be subtracted with another UInt64 or int e.g. `a -= UInt64(2)`.

This will error on underflow

##### \_\_ixor\_\_

_\_\_ixor\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise xor with another UInt64 or int e.g. `a ^= UInt64(2)`

##### \_\_le\_\_

_\_\_le\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `<=` operator with another UInt64 or int

##### \_\_lshift\_\_

_\_\_lshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be left shifted by another UInt64 or int e.g. `UInt64(4) << 2`

##### \_\_lt\_\_

_\_\_lt\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `<` operator with another UInt64 or int

##### \_\_mod\_\_

_\_\_mod\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be modded with another UInt64 or int e.g. `UInt64(4) % 2`.

This will error on mod by zero

##### \_\_mul\_\_

_\_\_mul\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be multiplied with another UInt64 or int e.g. `4 + UInt64(2)`.

This will error on overflow

##### \_\_ne\_\_

_\_\_ne\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `!=` operator with another UInt64 or int

##### \_\_or\_\_

_\_\_or\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise or with another UInt64 or int e.g. `UInt64(4) | 2`

##### \_\_pos\_\_

_\_\_pos\_\_() → [algopy.UInt64](#algopy.UInt64)_

Supports unary + operator. Redundant given the type is unsigned

##### \_\_pow\_\_

_\_\_pow\_\_(power: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be raised to the power of another UInt64 or int e.g. `UInt64(4) ** 2`.

This will error on overflow

##### \_\_radd\_\_

_\_\_radd\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be added with another UInt64 or int e.g. `4 + UInt64(2)`.

This will error on overflow

##### \_\_rand\_\_

_\_\_rand\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise and with another UInt64 or int e.g. `4 & UInt64(2)`

##### \_\_rfloordiv\_\_

_\_\_rfloordiv\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be floor divided with another UInt64 or int e.g. `4 // UInt64(2)`.

This will error on divide by zero

##### \_\_rlshift\_\_

_\_\_rlshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be left shifted by another UInt64 or int e.g. `4 << UInt64(2)`

##### \_\_rmod\_\_

_\_\_rmod\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be modded with another UInt64 or int e.g. `4 % UInt64(2)`.

This will error on mod by zero

##### \_\_rmul\_\_

_\_\_rmul\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be multiplied with another UInt64 or int e.g. `UInt64(4) + 2`.

This will error on overflow

##### \_\_ror\_\_

_\_\_ror\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise or with another UInt64 or int e.g. `4 | UInt64(2)`

##### \_\_rpow\_\_

_\_\_rpow\_\_(power: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be raised to the power of another UInt64 or int e.g. `4 ** UInt64(2)`.

This will error on overflow

##### \_\_rrshift\_\_

_\_\_rrshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be right shifted by another UInt64 or int e.g. `4 >> UInt64(2)`

##### \_\_rshift\_\_

_\_\_rshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be right shifted by another UInt64 or int e.g. `UInt64(4) >> 2`

##### \_\_rsub\_\_

_\_\_rsub\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be subtracted with another UInt64 or int e.g. `4 - UInt64(2)`.

This will error on underflow

##### \_\_rxor\_\_

_\_\_rxor\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise xor with another UInt64 or int e.g. `4 ^ UInt64(2)`

##### \_\_sub\_\_

_\_\_sub\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be subtracted with another UInt64 or int e.g. `UInt(4) - 2`.

This will error on underflow

##### \_\_xor\_\_

_\_\_xor\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise xor with another UInt64 or int e.g. `UInt64(4) ^ 2`

#### _class_ algopy.Txn

Get values for the current executing transaction
Native TEAL ops: [`txn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txn), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### _static_ accounts

\*_static_ accounts(a: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](#algopy.Account)\*

Accounts listed in the ApplicationCall transaction

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### amount \*: [Final]

_amount _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

microalgos

##### _static_ application_args

\*_static_ application_args(a: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](#algopy.Bytes)\*

Arguments passed to the application in the ApplicationCall transaction

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### application_id \*: [Final]

_application_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Application](#algopy.Application)]\*\*

Ellipsis

ApplicationID from ApplicationCall transaction

##### _static_ applications

\*_static_ applications(a: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](#algopy.Application)\*

Foreign Apps listed in the ApplicationCall transaction

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### approval_program \*: [Final]

_approval_program _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

Approval program

##### _static_ approval_program_pages

\*_static_ approval_program_pages(a: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](#algopy.Bytes)\*

Approval Program as an array of pages

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### asset_amount \*: [Final]

_asset_amount _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

value in Asset’s units

##### asset_close_to \*: [Final]

_asset_close_to _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte address

##### asset_receiver \*: [Final]

_asset_receiver _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte address

##### asset_sender \*: [Final]

_asset_sender _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte address. Source of assets if Sender is the Asset’s Clawback address.

##### _static_ assets

\*_static_ assets(a: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](#algopy.Asset)\*

Foreign Assets listed in the ApplicationCall transaction

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### clear_state_program \*: [Final]

_clear_state_program _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

Clear state program

##### _static_ clear_state_program_pages

\*_static_ clear_state_program_pages(a: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](#algopy.Bytes)\*

ClearState Program as an array of pages

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### close_remainder_to \*: [Final]

_close_remainder_to _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte address

##### config_asset \*: [Final]

_config_asset _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Asset](#algopy.Asset)]\*\*

Ellipsis

Asset ID in asset config transaction

##### config_asset_clawback \*: [Final]

_config_asset_clawback _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte address

##### config_asset_decimals \*: [Final]

_config_asset_decimals _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of digits to display after the decimal place when displaying the asset

##### config_asset_default_frozen \*: [Final]

_config_asset_default_frozen _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[bool](https://docs.python.org/3/library/functions.html#bool)]\*\*

Ellipsis

Whether the asset’s slots are frozen by default or not, 0 or 1

##### config_asset_freeze \*: [Final]

_config_asset_freeze _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte address

##### config_asset_manager \*: [Final]

_config_asset_manager _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte address

##### config_asset_metadata_hash \*: [Final]

_config_asset_metadata_hash _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

32 byte commitment to unspecified asset metadata

##### config_asset_name \*: [Final]

_config_asset_name _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

The asset name

##### config_asset_reserve \*: [Final]

_config_asset_reserve _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte address

##### config_asset_total \*: [Final]

_config_asset_total _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Total number of units of this asset created

##### config_asset_unit_name \*: [Final]

_config_asset_unit_name _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

Unit name of the asset

##### config_asset_url \*: [Final]

_config_asset_url _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

URL

##### created_application_id \*: [Final]

_created_application_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Application](#algopy.Application)]\*\*

Ellipsis

ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only

##### created_asset_id \*: [Final]

_created_asset_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Asset](#algopy.Asset)]\*\*

Ellipsis

Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only

##### extra_program_pages \*: [Final]

_extra_program_pages _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

##### fee \*: [Final]

_fee _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

microalgos

##### first_valid \*: [Final]

_first_valid _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

round number

##### first_valid_time \*: [Final]

_first_valid_time _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

UNIX timestamp of block before txn.FirstValid. Fails if negative

##### freeze_asset \*: [Final]

_freeze_asset _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Asset](#algopy.Asset)]\*\*

Ellipsis

Asset ID being frozen or un-frozen

##### freeze_asset_account \*: [Final]

_freeze_asset_account _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte address of the account whose asset slot is being frozen or un-frozen

##### freeze_asset_frozen \*: [Final]

_freeze_asset_frozen _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[bool](https://docs.python.org/3/library/functions.html#bool)]\*\*

Ellipsis

The new frozen value, 0 or 1

##### global_num_byte_slice \*: [Final]

_global_num_byte_slice _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of global state byteslices in ApplicationCall

##### global_num_uint \*: [Final]

_global_num_uint _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of global state integers in ApplicationCall

##### group_index \*: [Final]

_group_index _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1

##### last_log \*: [Final]

_last_log _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

The last message emitted. Empty bytes if none were emitted. Application mode only

##### last_valid \*: [Final]

_last_valid _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

round number

##### lease \*: [Final]

_lease _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

32 byte lease value

##### local_num_byte_slice \*: [Final]

_local_num_byte_slice _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of local state byteslices in ApplicationCall

##### local_num_uint \*: [Final]

_local_num_uint _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of local state integers in ApplicationCall

##### _static_ logs

\*_static_ logs(a: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](#algopy.Bytes)\*

Log messages emitted by an application call (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### nonparticipation \*: [Final]

_nonparticipation _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[bool](https://docs.python.org/3/library/functions.html#bool)]\*\*

Ellipsis

Marks an account nonparticipating for rewards

##### note \*: [Final]

_note _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

Any data up to 1024 bytes

##### num_accounts \*: [Final]

_num_accounts _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of Accounts

##### num_app_args \*: [Final]

_num_app_args _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of ApplicationArgs

##### num_applications \*: [Final]

_num_applications _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of Applications

##### num_approval_program_pages \*: [Final]

_num_approval_program_pages _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of Approval Program pages

##### num_assets \*: [Final]

_num_assets _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of Assets

##### num_clear_state_program_pages \*: [Final]

_num_clear_state_program_pages _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of ClearState Program pages

##### num_logs \*: [Final]

_num_logs _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Number of Logs (only with `itxn` in v5). Application mode only

##### on_completion \*: [Final]

_on_completion _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.OnCompleteAction](#algopy.OnCompleteAction)]\*\*

Ellipsis

ApplicationCall transaction on completion action

##### receiver \*: [Final]

_receiver _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte address

##### reject_version \*: [Final]

_reject_version _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Application version for which the txn must reject
Min AVM version: 12

##### rekey_to \*: [Final]

_rekey_to _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte Sender’s new AuthAddr

##### selection_pk \*: [Final]

_selection_pk _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

32 byte address

##### sender \*: [Final]

_sender _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](#algopy.Account)]\*\*

Ellipsis

32 byte address

##### state_proof_pk \*: [Final]

_state_proof_pk _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

State proof public key

##### tx_id \*: [Final]

_tx_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

The computed ID for this transaction. 32 bytes.

##### type \*: [Final]

_type _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

Transaction type as bytes

##### type_enum \*: [Final]

_type_enum _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.TransactionType](#algopy.TransactionType)]\*\*

Ellipsis

Transaction type as integer

##### vote_first \*: [Final]

_vote_first _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

The first round that the participation key is valid.

##### vote_key_dilution \*: [Final]

_vote_key_dilution _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

Dilution for the 2-level participation key

##### vote_last \*: [Final]

_vote_last _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](#algopy.UInt64)]\*\*

Ellipsis

The last round that the participation key is valid.

##### vote_pk \*: [Final]

_vote_pk _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](#algopy.Bytes)]\*\*

Ellipsis

32 byte address

##### xfer_asset \*: [Final]

_xfer_asset _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Asset](#algopy.Asset)]\*\*

Ellipsis

Asset ID

#### _class_ algopy.UInt64

\*_class_ algopy.UInt64(value: [int](https://docs.python.org/3/library/functions.html#int) = 0, /)\*

A 64-bit unsigned integer, one of the primary data types on the AVM

##### Initialization

A UInt64 can be initialized with a Python int literal, or an int variable
declared at the module level

##### \_\_add\_\_

_\_\_add\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be added with another UInt64 or int e.g. `UInt(4) + 2`.

This will error on overflow

##### \_\_and\_\_

_\_\_and\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise and with another UInt64 or int e.g. `UInt64(4) & 2`

##### \_\_bool\_\_

_\_\_bool\_\_() → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 will evaluate to `False` if zero, and `True` otherwise

##### \_\_eq\_\_

_\_\_eq\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `==` operator with another UInt64 or int

##### \_\_floordiv\_\_

_\_\_floordiv\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be floor divided with another UInt64 or int e.g. `UInt64(4) // 2`.

This will error on divide by zero

##### \_\_ge\_\_

_\_\_ge\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `>=` operator with another UInt64 or int

##### \_\_gt\_\_

_\_\_gt\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `>` operator with another UInt64 or int

##### \_\_iadd\_\_

_\_\_iadd\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be incremented with another UInt64 or int e.g. `a += UInt(2)`.

This will error on overflow

##### \_\_iand\_\_

_\_\_iand\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise and with another UInt64 or int e.g. `a &= UInt64(2)`

##### \_\_ifloordiv\_\_

_\_\_ifloordiv\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be floor divided with another UInt64 or int e.g. `a //= UInt64(2)`.

This will error on divide by zero

##### \_\_ilshift\_\_

_\_\_ilshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be left shifted by another UInt64 or int e.g. `a <<= UInt64(2)`

##### \_\_imod\_\_

_\_\_imod\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be modded with another UInt64 or int e.g. `a %= UInt64(2)`.

This will error on mod by zero

##### \_\_imul\_\_

_\_\_imul\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be multiplied with another UInt64 or int e.g. `a*= UInt64(2)`.

This will error on overflow

##### \_\_index\_\_

_\_\_index\_\_() → [int](https://docs.python.org/3/library/functions.html#int)_

A UInt64 can be used in indexing/slice expressions

##### \_\_invert\_\_

_\_\_invert\_\_() → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be bitwise inverted e.g. `~UInt64(4)`

##### \_\_ior\_\_

_\_\_ior\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise or with another UInt64 or int e.g. `a |= UInt64(2)`

##### \_\_ipow\_\_

_\_\_ipow\_\_(power: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be raised to the power of another UInt64 or int e.g. `a **= UInt64(2)`.

This will error on overflow

##### \_\_irshift\_\_

_\_\_irshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be right shifted by another UInt64 or int e.g. `a >>= UInt64(2)`

##### \_\_isub\_\_

_\_\_isub\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be subtracted with another UInt64 or int e.g. `a -= UInt64(2)`.

This will error on underflow

##### \_\_ixor\_\_

_\_\_ixor\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise xor with another UInt64 or int e.g. `a ^= UInt64(2)`

##### \_\_le\_\_

_\_\_le\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `<=` operator with another UInt64 or int

##### \_\_lshift\_\_

_\_\_lshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be left shifted by another UInt64 or int e.g. `UInt64(4) << 2`

##### \_\_lt\_\_

_\_\_lt\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `<` operator with another UInt64 or int

##### \_\_mod\_\_

_\_\_mod\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be modded with another UInt64 or int e.g. `UInt64(4) % 2`.

This will error on mod by zero

##### \_\_mul\_\_

_\_\_mul\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be multiplied with another UInt64 or int e.g. `4 + UInt64(2)`.

This will error on overflow

##### \_\_ne\_\_

_\_\_ne\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)_

A UInt64 can use the `!=` operator with another UInt64 or int

##### \_\_or\_\_

_\_\_or\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise or with another UInt64 or int e.g. `UInt64(4) | 2`

##### \_\_pos\_\_

_\_\_pos\_\_() → [algopy.UInt64](#algopy.UInt64)_

Supports unary + operator. Redundant given the type is unsigned

##### \_\_pow\_\_

_\_\_pow\_\_(power: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be raised to the power of another UInt64 or int e.g. `UInt64(4) ** 2`.

This will error on overflow

##### \_\_radd\_\_

_\_\_radd\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be added with another UInt64 or int e.g. `4 + UInt64(2)`.

This will error on overflow

##### \_\_rand\_\_

_\_\_rand\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise and with another UInt64 or int e.g. `4 & UInt64(2)`

##### \_\_rfloordiv\_\_

_\_\_rfloordiv\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be floor divided with another UInt64 or int e.g. `4 // UInt64(2)`.

This will error on divide by zero

##### \_\_rlshift\_\_

_\_\_rlshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be left shifted by another UInt64 or int e.g. `4 << UInt64(2)`

##### \_\_rmod\_\_

_\_\_rmod\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be modded with another UInt64 or int e.g. `4 % UInt64(2)`.

This will error on mod by zero

##### \_\_rmul\_\_

_\_\_rmul\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be multiplied with another UInt64 or int e.g. `UInt64(4) + 2`.

This will error on overflow

##### \_\_ror\_\_

_\_\_ror\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise or with another UInt64 or int e.g. `4 | UInt64(2)`

##### \_\_rpow\_\_

_\_\_rpow\_\_(power: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be raised to the power of another UInt64 or int e.g. `4 ** UInt64(2)`.

This will error on overflow

##### \_\_rrshift\_\_

_\_\_rrshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be right shifted by another UInt64 or int e.g. `4 >> UInt64(2)`

##### \_\_rshift\_\_

_\_\_rshift\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be right shifted by another UInt64 or int e.g. `UInt64(4) >> 2`

##### \_\_rsub\_\_

_\_\_rsub\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be subtracted with another UInt64 or int e.g. `4 - UInt64(2)`.

This will error on underflow

##### \_\_rxor\_\_

_\_\_rxor\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise xor with another UInt64 or int e.g. `4 ^ UInt64(2)`

##### \_\_sub\_\_

_\_\_sub\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can be subtracted with another UInt64 or int e.g. `UInt(4) - 2`.

This will error on underflow

##### \_\_xor\_\_

_\_\_xor\_\_(other: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.UInt64](#algopy.UInt64)_

A UInt64 can bitwise xor with another UInt64 or int e.g. `UInt64(4) ^ 2`

##### algopy.compile_contract

_algopy.compile_contract(contract: [type](https://docs.python.org/3/library/functions.html#type)[[Contract](#algopy.Contract)], /, \*, extra_program_pages: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global_uints: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global_bytes: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local_uints: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local_bytes: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., template_vars: [collections.abc.Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping)[[str](https://docs.python.org/3/library/stdtypes.html#str), [object](https://docs.python.org/3/library/functions.html#object)] = ..., template_vars_prefix: [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [algopy.CompiledContract](#algopy.CompiledContract)_

Returns the compiled data for the specified contract

- **Parameters:**
  - **contract** – Algorand Python Contract to compile
  - **extra_program_pages** – Number of extra program pages, defaults to minimum required for contract
  - **global_uints** – Number of global uint64s, defaults to value defined for contract
  - **global_bytes** – Number of global bytes, defaults to value defined for contract
  - **local_uints** – Number of local uint64s, defaults to value defined for contract
  - **local_bytes** – Number of local bytes, defaults to value defined for contract
  - **template_vars** – Template variables to substitute into the contract,
    key should be without the prefix, must evaluate to a compile time constant
    and match the type of the template var declaration
  - **template_vars_prefix** – Prefix to add to provided template vars,
    defaults to the prefix supplied on command line (which defaults to TMPL\_)

##### algopy.compile_logicsig

_algopy.compile_logicsig(logicsig: [LogicSig](#algopy.LogicSig), /, \*, template_vars: [collections.abc.Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping)[[str](https://docs.python.org/3/library/stdtypes.html#str), [object](https://docs.python.org/3/library/functions.html#object)] = ..., template_vars_prefix: [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [algopy.CompiledLogicSig](#algopy.CompiledLogicSig)_

Returns the Account for the specified logic signature

- **Parameters:**
  - **logicsig** – Algorand Python Logic Signature to compile
  - **template_vars** – Template variables to substitute into the logic signature,
    key should be without the prefix, must evaluate to a compile time constant
    and match the type of the template var declaration
  - **template_vars_prefix** – Prefix to add to provided template vars,
    defaults to the prefix supplied on command line (which defaults to TMPL\_)

##### algopy.ensure_budget

_algopy.ensure_budget(required_budget: [algopy.UInt64](#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), fee_source: [algopy.OpUpFeeSource](#algopy.OpUpFeeSource) = ...) → [None](https://docs.python.org/3/library/constants.html#None)_

Ensure the available op code budget is greater than or equal to required_budget

##### algopy.log

_algopy.log(\*args: [object](https://docs.python.org/3/library/functions.html#object), sep: [algopy.String](#algopy.String) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [algopy.Bytes](#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = '') → [None](https://docs.python.org/3/library/constants.html#None)_

Concatenates and logs supplied args as a single bytes value.

UInt64 args are converted to bytes and each argument is separated by `sep`.
Literal `str` values will be encoded as UTF8.

##### algopy.logicsig

_algopy.logicsig(\*, name: [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., avm_version: [int](https://docs.python.org/3/library/functions.html#int) = ..., scratch_slots: [algopy.urange](#algopy.urange) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[int](https://docs.python.org/3/library/functions.html#int) | [algopy.urange](#algopy.urange), ...] | [list](https://docs.python.org/3/library/stdtypes.html#list)[[int](https://docs.python.org/3/library/functions.html#int) | [algopy.urange](#algopy.urange)] = ()) → [collections.abc.Callable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable)[[[collections.abc.Callable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable)[[], [bool](https://docs.python.org/3/library/functions.html#bool) | [algopy.UInt64](#algopy.UInt64)]], [algopy.LogicSig](#algopy.LogicSig)]_

Decorator to indicate a function is a logic signature

##### algopy.size_of

_algopy.size_of(type_or_expression: [type](https://docs.python.org/3/library/functions.html#type) | [object](https://docs.python.org/3/library/functions.html#object), /) → [algopy.UInt64](#algopy.UInt64)_

Returns the number of bytes required to store the provided type object
or the type of provided expression

##### algopy.subroutine

_algopy.subroutine(\*, inline: [bool](https://docs.python.org/3/library/functions.html#bool) | [Literal](https://docs.python.org/3/library/typing.html#typing.Literal)[auto] = 'auto') → [collections.abc.Callable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable)[[[collections.abc.Callable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable)[algopy._P, algopy._R]], [collections.abc.Callable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable)[algopy._P, algopy._R]]_

Decorator to indicate functions or methods that can be called by a Smart Contract

Inlining can be controlled with the decorator argument `inline`.
When unspecified it defaults to auto, which allows the optimizer to decide whether to inline
or not. Setting `inline=True` forces inlining, and `inline=False` ensures the function will
never be inlined.

#### _class_ algopy.uenumerate

\*_class_ algopy.uenumerate(iterable: [collections.abc.Iterable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable)[algopy._T])\*

Yields pairs containing a count (from zero) and a value yielded by the iterable argument.

enumerate is useful for obtaining an indexed list:
(0, seq[0]), (1, seq[1]), (2, seq[2]), …

enumerate((a, b, c)) produces (0, a), (1, b), (2, c)

##### Initialization

#### _class_ algopy.urange

Produces a sequence of UInt64 from start (inclusive) to stop (exclusive) by step.

urange(4) produces 0, 1, 2, 3
urange(i, j) produces i, i+1, i+2, …, j-1.
urange(i, j, 2) produces i, i+2, i+4, …, i+2n where n is the largest value where i+2n < j

##### algopy.zero_bytes

_algopy.zero_bytes(typ: [type](https://docs.python.org/3/library/functions.html#type)[algopy.zero_bytes.T]) → algopy.zero_bytes.T_

Initializes a new value of the specified type, based on it’s zero bytes representation.

Only works for fixed size types that are bytes encoded.
