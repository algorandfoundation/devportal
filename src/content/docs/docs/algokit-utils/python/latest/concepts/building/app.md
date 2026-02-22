---
title: "App management"
description: "App management is a higher-order use case capability provided by AlgoKit Utils that builds on top of the core capabilities. It allows you to create, update, delete, call (ABI and otherwise) smart contract apps and the metadata associated with them (including state and boxes)."
---

App management is a higher-order use case capability provided by AlgoKit Utils that builds on top of the core capabilities. It allows you to create, update, delete, call (ABI and otherwise) smart contract apps and the metadata associated with them (including state and boxes).

## AppManager

The `AppManager` is a class that is used to manage app information.

To get an instance of `AppManager` you can use either [`AlgorandClient`](../../core/algorand-client) via `algorand.app` or instantiate it directly (passing in an algod client instance):

```python
from algokit_utils import AppManager

app_manager = AppManager(algod_client)
```

## Calling apps

### App Clients

The recommended way of interacting with apps is via [Typed app clients](../typed-app-clients) or if you can't use a typed app client then an [untyped app client](../app-client). The methods shown on this page are the underlying mechanisms that app clients use and are for advanced use cases when you want more control.

### Calling an app

When calling an app there are two types of transactions:

- Raw app transactions - Constructing a raw Algorand transaction to call the method; you have full control and are dealing with binary values directly
- ABI method calls - Constructing a call to an [ABI method](https://dev.algorand.co/concepts/smart-contracts/abi)

Calling an app involves providing some [common parameters](#common-app-parameters) and some parameters that will depend on the type of app call (create vs update vs other) per below sections.

When [sending transactions directly via AlgorandClient](../../core/algorand-client#sending-a-single-transaction) the `SendSingleTransactionResult` return value is expanded with extra fields depending on the type of app call:

- All app calls extend `SendAppTransactionResult`, which has:
  - `abi_return: ABIReturn | None` - Which will contain an ABI return value if a non-void ABI method was called:
    - `raw_value: bytes` - The raw binary of the return value
    - `value: ABIValue | None` - The decoded value in the appropriate Python object
    - `decode_error: Exception | None` - If there was a decoding error the above 2 values will be `None`/empty and this will have the error
- Update and create calls extend `SendAppUpdateTransactionResult`, which has:
  - `compiled_approval: CompiledTeal | bytes | None` - The compilation result of approval, if approval program was supplied as a string and thus compiled by algod
  - `compiled_clear: CompiledTeal | bytes | None` - The compilation result of clear state, if clear state program was supplied as a string and thus compiled by algod
- Create calls extend `SendAppCreateTransactionResult`, which has:
  - `app_id: int` - The id of the created app
  - `app_address: str` - The Algorand address of the account associated with the app

There is a static method on [`AppManager`](#appmanager) that allows you to parse an ABI return value from an algod transaction confirmation:

```python
confirmation = algod_client.pending_transaction_information(transaction_id)

abi_return = AppManager.get_abi_return(confirmation, abi_method)
```

### Creation

To create an app via a raw app transaction you can use `algorand.send.app_create(params)` (immediately send a single app creation transaction), `algorand.create_transaction.app_create(params)` (construct an app creation transaction), or `algorand.new_group().add_app_create(params)` (add app creation to a group of transactions) per [`AlgorandClient`](../../core/algorand-client) [transaction semantics](../../core/algorand-client#creating-and-issuing-transactions).

To create an app via an ABI method call you can use `algorand.send.app_create_method_call(params)` (immediately send a single app creation transaction), `algorand.create_transaction.app_create_method_call(params)` (construct an app creation transaction), or `algorand.new_group().add_app_create_method_call(params)` (add app creation to a group of transactions).

The base type for specifying an app creation transaction is `AppCreateParams` (extended as `AppCreateMethodCallParams` for ABI method call version), which has the following parameters in addition to the [common parameters](#common-app-parameters):

- `on_complete: OnApplicationComplete | None` - The on-completion action to specify for the call; defaults to NoOp.
- `approval_program: str | bytes` - The program to execute for all OnCompletes other than ClearState as raw TEAL that will be compiled (str) or compiled TEAL (bytes).
- `clear_state_program: str | bytes` - The program to execute for ClearState OnComplete as raw TEAL that will be compiled (str) or compiled TEAL (bytes).
- `schema: AppCreateSchema | None` - The storage schema to request for the created app. This is immutable once the app is created. It is a `TypedDict` with:
  - `global_ints: int` - The number of integers saved in global state.
  - `global_byte_slices: int` - The number of byte slices saved in global state.
  - `local_ints: int` - The number of integers saved in local state.
  - `local_byte_slices: int` - The number of byte slices saved in local state.
- `extra_program_pages: int | None` - Number of extra pages required for the programs. This is immutable once the app is created.

If you pass in `approval_program` or `clear_state_program` as a string then it will automatically be compiled using Algod and the compilation result will be available via `algorand.app.get_compilation_result` (including the source map). To skip this behaviour you can pass in the compiled TEAL as `bytes`.

```python
from algokit_abi import abi, arc56
from algokit_utils import AppCreateParams, AppCreateMethodCallParams, OnApplicationComplete

# Basic raw example
result = algorand.send.app_create(AppCreateParams(
    sender="CREATORADDRESS",
    approval_program="TEALCODE",
    clear_state_program="TEALCODE",
))
created_app_id = result.app_id

# Advanced raw example
algorand.send.app_create(AppCreateParams(
    sender="CREATORADDRESS",
    approval_program="TEALCODE",
    clear_state_program="TEALCODE",
    schema={
        "global_ints": 1,
        "global_byte_slices": 2,
        "local_ints": 3,
        "local_byte_slices": 4,
    },
    extra_program_pages=1,
    on_complete=OnApplicationComplete.OptIn,
    args=[bytes([1, 2, 3, 4])],
    account_references=["ACCOUNT_1"],
    app_references=[123, 1234],
    asset_references=[12345],
    box_references=["box1", BoxReference(app_id=1234, name=b"box2")],
    lease=b"lease",
    note=b"note",
    # You wouldn't normally set this field
    first_valid_round=1000,
    validity_window=10,
    extra_fee=AlgoAmount(micro_algo=1000),
    static_fee=AlgoAmount(micro_algo=1000),
    # Max fee doesn't make sense with extra_fee AND static_fee
    #  already specified, but here for completeness
    max_fee=AlgoAmount(micro_algo=3000),
    # Signer only needed if you want to provide one,
    #  generally you'd register it with AlgorandClient
    #  against the sender and not need to pass it in
    signer=transaction_signer,
))

# Basic ABI call example
method = arc56.Method(
    name="method",
    args=[arc56.Argument(name="arg1", type=abi.ABIType.from_string("string"))],
    returns=arc56.Returns(type=abi.ABIType.from_string("string")),
)
result = algorand.send.app_create_method_call(AppCreateMethodCallParams(
    sender="CREATORADDRESS",
    approval_program="TEALCODE",
    clear_state_program="TEALCODE",
    method=method,
    args=["arg1_value"],
))
created_app_id = result.app_id
```

### Updating

To update an app via a raw app transaction you can use `algorand.send.app_update(params)` (immediately send a single app update transaction), `algorand.create_transaction.app_update(params)` (construct an app update transaction), or `algorand.new_group().add_app_update(params)` (add app update to a group of transactions) per [`AlgorandClient`](../../core/algorand-client) [transaction semantics](../../core/algorand-client#creating-and-issuing-transactions).

To update an app via an ABI method call you can use `algorand.send.app_update_method_call(params)` (immediately send a single app update transaction), `algorand.create_transaction.app_update_method_call(params)` (construct an app update transaction), or `algorand.new_group().add_app_update_method_call(params)` (add app update to a group of transactions).

The base type for specifying an app update transaction is `AppUpdateParams` (extended as `AppUpdateMethodCallParams` for ABI method call version), which has the following parameters in addition to the [common parameters](#common-app-parameters):

- `on_complete: OnApplicationComplete` - On Complete defaults to `UpdateApplication`
- `approval_program: str | bytes` - The program to execute for all OnCompletes other than ClearState as raw TEAL that will be compiled (str) or compiled TEAL (bytes).
- `clear_state_program: str | bytes` - The program to execute for ClearState OnComplete as raw TEAL that will be compiled (str) or compiled TEAL (bytes).

If you pass in `approval_program` or `clear_state_program` as a string then it will automatically be compiled using Algod and the compilation result will be available via `algorand.app.get_compilation_result` (including the source map). To skip this behaviour you can pass in the compiled TEAL as `bytes`.

```python
from algokit_utils import AppUpdateParams, AppUpdateMethodCallParams

# Basic raw example
algorand.send.app_update(AppUpdateParams(
    sender="SENDERADDRESS",
    app_id=app_id,
    approval_program="TEALCODE",
    clear_state_program="TEALCODE",
))

# Advanced raw example
algorand.send.app_update(AppUpdateParams(
    sender="SENDERADDRESS",
    app_id=app_id,
    approval_program="TEALCODE",
    clear_state_program="TEALCODE",
    on_complete=OnApplicationComplete.UpdateApplication,
    args=[bytes([1, 2, 3, 4])],
    account_references=["ACCOUNT_1"],
    app_references=[123, 1234],
    asset_references=[12345],
    box_references=["box1", BoxReference(app_id=1234, name=b"box2")],
    lease=b"lease",
    note=b"note",
    # You wouldn't normally set this field
    first_valid_round=1000,
    validity_window=10,
    extra_fee=AlgoAmount(micro_algo=1000),
    static_fee=AlgoAmount(micro_algo=1000),
    # Max fee doesn't make sense with extra_fee AND static_fee
    #  already specified, but here for completeness
    max_fee=AlgoAmount(micro_algo=3000),
    # Signer only needed if you want to provide one,
    #  generally you'd register it with AlgorandClient
    #  against the sender and not need to pass it in
    signer=transaction_signer,
))

# Basic ABI call example
method = arc56.Method(
    name="method",
    args=[arc56.Argument(name="arg1", type=abi.ABIType.from_string("string"))],
    returns=arc56.Returns(type=abi.ABIType.from_string("string")),
)
algorand.send.app_update_method_call(AppUpdateMethodCallParams(
    sender="SENDERADDRESS",
    app_id=app_id,
    approval_program="TEALCODE",
    clear_state_program="TEALCODE",
    method=method,
    args=["arg1_value"],
))
```

### Deleting

To delete an app via a raw app transaction you can use `algorand.send.app_delete(params)` (immediately send a single app deletion transaction), `algorand.create_transaction.app_delete(params)` (construct an app deletion transaction), or `algorand.new_group().add_app_delete(params)` (add app deletion to a group of transactions) per [`AlgorandClient`](../../core/algorand-client) [transaction semantics](../../core/algorand-client#creating-and-issuing-transactions).

To delete an app via an ABI method call you can use `algorand.send.app_delete_method_call(params)` (immediately send a single app deletion transaction), `algorand.create_transaction.app_delete_method_call(params)` (construct an app deletion transaction), or `algorand.new_group().add_app_delete_method_call(params)` (add app deletion to a group of transactions).

The base type for specifying an app deletion transaction is `AppDeleteParams` (extended as `AppDeleteMethodCallParams` for ABI method call version), which has the following parameters in addition to the [common parameters](#common-app-parameters):

- `on_complete: OnApplicationComplete | None` - On Complete can either be omitted or set to delete

```python
from algokit_utils import AppDeleteParams, AppDeleteMethodCallParams

# Basic raw example
algorand.send.app_delete(AppDeleteParams(
    sender="SENDERADDRESS",
    app_id=app_id,
))

# Advanced raw example
algorand.send.app_delete(AppDeleteParams(
    sender="SENDERADDRESS",
    app_id=app_id,
    on_complete=OnApplicationComplete.DeleteApplication,
    args=[bytes([1, 2, 3, 4])],
    account_references=["ACCOUNT_1"],
    app_references=[123, 1234],
    asset_references=[12345],
    box_references=["box1", BoxReference(app_id=1234, name=b"box2")],
    lease=b"lease",
    note=b"note",
    # You wouldn't normally set this field
    first_valid_round=1000,
    validity_window=10,
    extra_fee=AlgoAmount(micro_algo=1000),
    static_fee=AlgoAmount(micro_algo=1000),
    # Max fee doesn't make sense with extra_fee AND static_fee
    #  already specified, but here for completeness
    max_fee=AlgoAmount(micro_algo=3000),
    # Signer only needed if you want to provide one,
    #  generally you'd register it with AlgorandClient
    #  against the sender and not need to pass it in
    signer=transaction_signer,
))

# Basic ABI call example
method = arc56.Method(
    name="method",
    args=[arc56.Argument(name="arg1", type=abi.ABIType.from_string("string"))],
    returns=arc56.Returns(type=abi.ABIType.from_string("string")),
)
algorand.send.app_delete_method_call(AppDeleteMethodCallParams(
    sender="SENDERADDRESS",
    app_id=app_id,
    method=method,
    args=["arg1_value"],
))
```

## Calling

To call an app via a raw app transaction you can use `algorand.send.app_call(params)` (immediately send a single app call transaction), `algorand.create_transaction.app_call(params)` (construct an app call transaction), or `algorand.new_group().add_app_call(params)` (add app call to a group of transactions) per [`AlgorandClient`](../../core/algorand-client) [transaction semantics](../../core/algorand-client#creating-and-issuing-transactions).

To call an app via an ABI method call you can use `algorand.send.app_call_method_call(params)` (immediately send a single app call transaction), `algorand.create_transaction.app_call_method_call(params)` (construct an app call transaction), or `algorand.new_group().add_app_call_method_call(params)` (add app call to a group of transactions).

The base type for specifying an app call transaction is `AppCallParams` (extended as `AppCallMethodCallParams` for ABI method call version), which has the following parameters in addition to the [common parameters](#common-app-parameters):

- `on_complete: OnApplicationComplete | None` - On Complete can either be omitted (which will result in no-op) or set to any on-complete apart from update

```python
from algokit_utils import AppCallParams, AppCallMethodCallParams

# Basic raw example
algorand.send.app_call(AppCallParams(
    sender="SENDERADDRESS",
    app_id=app_id,
))

# Advanced raw example
algorand.send.app_call(AppCallParams(
    sender="SENDERADDRESS",
    app_id=app_id,
    on_complete=OnApplicationComplete.OptIn,
    args=[bytes([1, 2, 3, 4])],
    account_references=["ACCOUNT_1"],
    app_references=[123, 1234],
    asset_references=[12345],
    box_references=["box1", BoxReference(app_id=1234, name=b"box2")],
    lease=b"lease",
    note=b"note",
    # You wouldn't normally set this field
    first_valid_round=1000,
    validity_window=10,
    extra_fee=AlgoAmount(micro_algo=1000),
    static_fee=AlgoAmount(micro_algo=1000),
    # Max fee doesn't make sense with extra_fee AND static_fee
    #  already specified, but here for completeness
    max_fee=AlgoAmount(micro_algo=3000),
    # Signer only needed if you want to provide one,
    #  generally you'd register it with AlgorandClient
    #  against the sender and not need to pass it in
    signer=transaction_signer,
))

# Basic ABI call example
method = arc56.Method(
    name="method",
    args=[arc56.Argument(name="arg1", type=abi.ABIType.from_string("string"))],
    returns=arc56.Returns(type=abi.ABIType.from_string("string")),
)
algorand.send.app_call_method_call(AppCallMethodCallParams(
    sender="SENDERADDRESS",
    app_id=app_id,
    method=method,
    args=["arg1_value"],
))
```

## Accessing state

### Global state

To access global state you can use the following method from an [`AppManager`](#appmanager) instance:

- `algorand.app.get_global_state(app_id)` - Returns the current global state for the given app ID decoded into a dict keyed by the UTF-8 representation of the state key with various parsed versions of the value (base64, UTF-8 and raw binary)

```python
global_state = algorand.app.get_global_state(12345)
```

Global state is parsed from the underlying algod response via the following static method from [`AppManager`](#appmanager):

- `AppManager.decode_app_state(state)` - Takes the raw response from the algod API for global state and returns a friendly dict keyed by the UTF-8 value of the key

```python
global_app_state = ...  # value from algod
app_state = AppManager.decode_app_state(global_app_state)

key_as_binary = app_state["value1"].key_raw
key_as_base64 = app_state["value1"].key_base64
if isinstance(app_state["value1"].value, str):
    value_as_string = app_state["value1"].value
    value_as_binary = app_state["value1"].value_raw
    value_as_base64 = app_state["value1"].value_base64
else:
    value_as_int = app_state["value1"].value
```

### Local state

To access local state you can use the following method from an [`AppManager`](#appmanager) instance:

- `algorand.app.get_local_state(app_id, address)` - Returns the current local state for the given app ID and account address decoded into a dict keyed by the UTF-8 representation of the state key with various parsed versions of the value (base64, UTF-8 and raw binary)

```python
local_state = algorand.app.get_local_state(12345, "ACCOUNTADDRESS")
```

### Boxes

To access and parse box values and names for an app you can use the following methods from an [`AppManager`](#appmanager) instance:

- `algorand.app.get_box_names(app_id)` - Returns the current box names for the given app ID
- `algorand.app.get_box_value(app_id, box_name)` - Returns the binary value of the given box name for the given app ID
- `algorand.app.get_box_values(app_id, box_names)` - Returns the binary values of the given box names for the given app ID
- `algorand.app.get_box_value_from_abi_type(app_id, box_name, abi_type)` - Returns the parsed ABI value of the given box name for the given app ID for the provided ABI type
- `algorand.app.get_box_values_from_abi_type(app_id, box_names, abi_type)` - Returns the parsed ABI values of the given box names for the given app ID for the provided ABI type
- `AppManager.get_box_reference(box_id)` - Returns a `tuple[int, bytes]` of `(app_id, box_name_bytes)` for the given [box identifier / reference](#box-references), which is useful when constructing a transaction

```python
from algokit_abi.abi import ABIType

app_id = 12345
box_name = "my-box"
box_name2 = "my-box2"

box_names = algorand.app.get_box_names(app_id)
box_value = algorand.app.get_box_value(app_id, box_name)
box_values = algorand.app.get_box_values(app_id, [box_name, box_name2])
box_abi_value = algorand.app.get_box_value_from_abi_type(app_id, box_name, ABIType.from_string("string"))
box_abi_values = algorand.app.get_box_values_from_abi_type(app_id, [box_name, box_name2], ABIType.from_string("string"))
```

## Getting app information

To get reference information and metadata about an existing app you can use the following methods:

- `algorand.app.get_by_id(app_id)` - Returns current app information by app ID from an [`AppManager`](#appmanager) instance

## Common app parameters

When interacting with apps (creating, updating, deleting, calling), there are some common parameters that you will be able to pass in to all calls in addition to the [common transaction parameters](../../core/algorand-client#transaction-parameters):

- `app_id: int` - ID of the application; only specified if the application is not being created.
- `on_complete: OnApplicationComplete | None` - The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call (noting each call type will have restrictions that affect this value).
- `args: list[bytes] | None` - Any [arguments to pass to the smart contract call](https://dev.algorand.co/concepts/smart-contracts/languages/teal/#argument-passing).
- `account_references: list[str] | None` - Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).
- `app_references: list[int] | None` - The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).
- `asset_references: list[int] | None` - The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).
- `box_references: list[BoxReference | BoxIdentifier] | None` - Any [boxes](#box-references) to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays)

When making an ABI call, the `args` parameter is replaced with a different type and there is also a `method` parameter:

- `method: arc56.Method`
- `args: list | None` - The arguments to pass to the ABI call, which can be one of:
  - `ABIValue` - Which can be one of:
    - `bool`
    - `int`
    - `str`
    - `bytes`
    - A list of one of the above types
  - `TransactionWithSigner`
  - `Transaction`
  - An ABI method call params object - parameters that define another (nested) ABI method call, which will in turn get resolved to one or more transactions

## Box references

Referencing boxes can by done by either `BoxIdentifier` (which identifies the name of the box and app ID `0` will be used (i.e. the current app)) or `BoxReference`:

```python
# BoxIdentifier can be:
#  - str (that will be encoded to bytes)
#  - bytes (the actual binary of the box name)
#  - AddressWithTransactionSigner (that will be encoded into the
#    public key address of the corresponding account)

BoxIdentifier = str | bytes | AddressWithTransactionSigner

# BoxReference groups the app ID and name as raw bytes
@dataclass(slots=True, frozen=True)
class BoxReference:
    app_id: int = 0
    name: bytes = b""
```

## Compilation

The [`AppManager`](#appmanager) class allows you to compile TEAL code with caching semantics that allows you to avoid duplicate compilation and keep track of source maps from compiled code.

If you call `algorand.app.compile_teal(teal_code)` then the compilation result will be stored and retrievable from `algorand.app.get_compilation_result(teal_code)`.

```python
teal_code = "return 1"
compilation_result = algorand.app.compile_teal(teal_code)
# ...
previous_compilation_result = algorand.app.get_compilation_result(teal_code)
```
