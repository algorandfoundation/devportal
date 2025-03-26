---
title: App client and App factory
---

> [!NOTE]
> This page covers the untyped app client, but we recommend using typed clients (coming soon), which will give you a better developer experience with strong typing specific to the app itself.

App client and App factory are higher-order use case capabilities provided by AlgoKit Utils that builds on top of the core capabilities, particularly [App deployment](app-deploy) and [App management](app). They allow you to access high productivity application clients that work with [ARC-56](https://github.com/algorandfoundation/ARCs/pull/258) and [ARC-32](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0032) application spec defined smart contracts, which you can use to create, update, delete, deploy and call a smart contract and access state data for it.

> [!NOTE]
> If you are confused about when to use the factory vs client the mental model is: use the client if you know the app ID, use the factory if you don’t know the app ID (deferred knowledge or the instance doesn’t exist yet on the blockchain) or you have multiple app IDs

## `AppFactory`

The `AppFactory` is a class that, for a given app spec, allows you to create and deploy one or more app instances and to create one or more app clients to interact with those (or other) app instances.

To get an instance of `AppFactory` you can use `AlgorandClient` via `algorand.get_app_factory`:

```python
# Minimal example
factory = algorand.get_app_factory(
    app_spec="{/* ARC-56 or ARC-32 compatible JSON */}",
)

# Advanced example
factory = algorand.get_app_factory(
    app_spec=parsed_arc32_or_arc56_app_spec,
    default_sender="SENDERADDRESS",
    app_name="OverriddenAppName",
    version="2.0.0",
    compilation_params={
        "updatable": True,
        "deletable": False,
        "deploy_time_params": { "ONE": 1, "TWO": "value" },
    }
)
```

## `AppClient`

The `AppClient` is a class that, for a given app spec, allows you to manage calls and state for a specific deployed instance of an app (with a known app ID).

To get an instance of `AppClient` you can use either `AlgorandClient` or instantiate it directly:

```python
# Minimal examples
app_client = AppClient.from_creator_and_name(
    app_spec="{/* ARC-56 or ARC-32 compatible JSON */}",
    creator_address="CREATORADDRESS",
    algorand=algorand,
)

app_client = AppClient(
    AppClientParams(
        app_spec="{/* ARC-56 or ARC-32 compatible JSON */}",
        app_id=12345,
        algorand=algorand,
    )
)

app_client = AppClient.from_network(
    app_spec="{/* ARC-56 or ARC-32 compatible JSON */}",
    algorand=algorand,
)

# Advanced example
app_client = AppClient(
    AppClientParams(
        app_spec=parsed_app_spec,
        app_id=12345,
        algorand=algorand,
        app_name="OverriddenAppName",
        default_sender="SENDERADDRESS",
        approval_source_map=approval_teal_source_map,
        clear_source_map=clear_teal_source_map,
    )
)
```

You can access `app_id`, `app_address`, `app_name` and `app_spec` as properties on the `AppClient`.

## Dynamically creating clients for a given app spec

The `AppFactory` allows you to conveniently create multiple `AppClient` instances on-the-fly with information pre-populated.

This is possible via two methods on the app factory:

- `factory.get_app_client_by_id(app_id, ...)` - Returns a new `AppClient` for an app instance of the given ID. Automatically populates app_name, default_sender and source maps from the factory if not specified.
- `factory.get_app_client_by_creator_and_name(creator_address, app_name, ...)` - Returns a new `AppClient`, resolving the app by creator address and name using AlgoKit app deployment semantics. Automatically populates app_name, default_sender and source maps from the factory if not specified.

```python
app_client1 = factory.get_app_client_by_id(app_id=12345)
app_client2 = factory.get_app_client_by_id(app_id=12346)
app_client3 = factory.get_app_client_by_id(
    app_id=12345,
    default_sender="SENDER2ADDRESS"
)

app_client4 = factory.get_app_client_by_creator_and_name(
    creator_address="CREATORADDRESS"
)
app_client5 = factory.get_app_client_by_creator_and_name(
    creator_address="CREATORADDRESS",
    app_name="NonDefaultAppName"
)
app_client6 = factory.get_app_client_by_creator_and_name(
    creator_address="CREATORADDRESS",
    app_name="NonDefaultAppName",
    ignore_cache=True,  # Perform fresh indexer lookups
    default_sender="SENDER2ADDRESS"
)
```

## Creating and deploying an app

Once you have an app factory you can perform the following actions:

- `factory.send.bare.create(...)` - Signs and sends a transaction to create an app and returns the result of that call and an `AppClient` instance for the created app
- `factory.deploy(...)` - Uses the creator address and app name pattern to find if the app has already been deployed or not and either creates, updates or replaces that app based on the deployment rules (i.e. it’s an idempotent deployment) and returns the result of the deployment and an `AppClient` instance for the created/updated/existing app.

> See `API docs` for details on parameter signatures.

### Create

The create method is a wrapper over the `app_create` (bare calls) and `app_create_method_call` (ABI method calls) methods, with the following differences:

- You don’t need to specify the `approval_program`, `clear_state_program`, or `schema` because these are all specified or calculated from the app spec
- `sender` is optional and if not specified then the `default_sender` from the `AppFactory` constructor is used
- `deploy_time_params`, `updatable` and `deletable` can be passed in to control deploy-time parameter replacements and deploy-time immutability and permanence control. Note these are consolidated under the `compilation_params` `TypedDict`, see `API docs` for details.

```python
# Use no-argument bare-call
result, app_client = factory.send.bare.create()

# Specify parameters for bare-call and override other parameters
result, app_client = factory.send.bare.create(
    params=AppClientBareCallParams(
        args=[bytes([1, 2, 3, 4])],
        static_fee=AlgoAmount.from_microalgos(3000),
        on_complete=OnComplete.OptIn,
    ),
    compilation_params={
        "deploy_time_params": {
            "ONE": 1,
            "TWO": "two",
        },
        "updatable": True,
        "deletable": False,
    }
)

# Specify parameters for ABI method call
result, app_client = factory.send.create(
    AppClientMethodCallParams(
        method="create_application",
        args=[1, "something"]
    )
)
```

## Updating and deleting an app

Deploy method aside, the ability to make update and delete calls happens after there is an instance of an app created via `AppClient`. The semantics of this are no different than other calls, with the caveat that the update call is a bit different since the code will be compiled when constructing the update params and the update calls thus optionally takes compilation parameters (`compilation_params`) for deploy-time parameter replacements and deploy-time immutability and permanence control.

## Calling the app

You can construct a params object, transaction(s) and sign and send a transaction to call the app that a given `AppClient` instance is pointing to.

This is done via the following properties:

- `app_client.params.{method}(params)` - Params for an ABI method call
- `app_client.params.bare.{method}(params)` - Params for a bare call
- `app_client.create_transaction.{method}(params)` - Transaction(s) for an ABI method call
- `app_client.create_transaction.bare.{method}(params)` - Transaction for a bare call
- `app_client.send.{method}(params)` - Sign and send an ABI method call
- `app_client.send.bare.{method}(params)` - Sign and send a bare call

Where `{method}` is one of:

- `update` - An update call
- `opt_in` - An opt-in call
- `delete` - A delete application call
- `clear_state` - A clear state call (note: calls the clear program and only applies to bare calls)
- `close_out` - A close-out call
- `call` - A no-op call (or other call if `on_complete` is specified to anything other than update)

```python
call1 = app_client.send.update(
    AppClientMethodCallParams(
        method="update_abi",
        args=["string_io"],
    ),
    compilation_params={"deploy_time_params": deploy_time_params}
)

call2 = app_client.send.delete(
    AppClientMethodCallParams(
        method="delete_abi",
        args=["string_io"]
    )
)

call3 = app_client.send.opt_in(
    AppClientMethodCallParams(method="opt_in")
)

call4 = app_client.send.bare.clear_state()

transaction = app_client.create_transaction.bare.close_out(
    AppClientBareCallParams(
        args=[bytes([1, 2, 3])]
    )
)

params = app_client.params.opt_in(
    AppClientMethodCallParams(method="optin")
)
```

## Funding the app account

Often there is a need to fund an app account to cover minimum balance requirements for boxes and other scenarios. There is an app client method that will do this for you via `fund_app_account(params)`.

The input parameters are:

- A `FundAppAccountParams` object, which has the same properties as a payment transaction except `receiver` is not required and `sender` is optional (if not specified then it will be set to the app client’s default sender if configured).

Note: If you are passing the funding payment in as an ABI argument so it can be validated by the ABI method then you’ll want to get the funding call as a transaction, e.g.:

```python
result = app_client.send.call(
    AppClientMethodCallParams(
        method="bootstrap",
        args=[
            app_client.create_transaction.fund_app_account(
                FundAppAccountParams(
                    amount=AlgoAmount.from_microalgos(200_000)
                )
            )
        ],
        box_references=["Box1"]
    )
)
```

You can also get the funding call as a params object via `app_client.params.fund_app_account(params)`.

## Reading state

`AppClient` has a number of mechanisms to read state (global, local and box storage) from the app instance.

### App spec methods

The ARC-56 app spec can specify detailed information about the encoding format of state values and as such allows for a more advanced ability to automatically read state values and decode them as their high-level language types rather than the limited `int` / `bytes` / `str` ability that the generic methods give you.

You can access this functionality via:

- `app_client.state.global_state.{method}()` - Global state
- `app_client.state.local_state(address).{method}()` - Local state
- `app_client.state.box.{method}()` - Box storage

Where `{method}` is one of:

- `get_all()` - Returns all single-key state values in a dict keyed by the key name and the value a decoded ABI value.
- `get_value(name)` - Returns a single state value for the current app with the value a decoded ABI value.
- `get_map_value(map_name, key)` - Returns a single value from the given map for the current app with the value a decoded ABI value. Key can either be bytes with the binary value of the key value on-chain (without the map prefix) or the high level (decoded) value that will be encoded to bytes for the app spec specified `key_type`
- `get_map(map_name)` - Returns all map values for the given map in a key=>value dict. It’s recommended that this is only done when you have a unique `prefix` for the map otherwise there’s a high risk that incorrect values will be included in the map.

```python
values = app_client.state.global_state.get_all()
value = app_client.state.local_state("ADDRESS").get_value("value1")
map_value = app_client.state.box.get_map_value("map1", "mapKey")
map_dict = app_client.state.global_state.get_map("myMap")
```

### Generic methods

There are various methods defined that let you read state from the smart contract app:

- `get_global_state()` - Gets the current global state using `algorand.app.get_global_state`.
- `get_local_state(address: str)` - Gets the current local state for the given account address using `algorand.app.get_local_state`.
- `get_box_names()` - Gets the current box names using `algorand.app.get_box_names`.
- `get_box_value(name)` - Gets the current value of the given box using `algorand.app.get_box_value`.
- `get_box_value_from_abi_type(name)` - Gets the current value of the given box from an ABI type using `algorand.app.get_box_value_from_abi_type`.
- `get_box_values(filter)` - Gets the current values of the boxes using `algorand.app.get_box_values`.
- `get_box_values_from_abi_type(type, filter)` - Gets the current values of the boxes from an ABI type using `algorand.app.get_box_values_from_abi_type`.

```python
global_state = app_client.get_global_state()
local_state = app_client.get_local_state("ACCOUNTADDRESS")

box_name: BoxReference = BoxReference(app_id=app_client.app_id, name="my-box")
box_name2: BoxReference = BoxReference(app_id=app_client.app_id, name="my-box2")

box_names = app_client.get_box_names()
box_value = app_client.get_box_value(box_name)
box_values = app_client.get_box_values([box_name, box_name2])
box_abi_value = app_client.get_box_value_from_abi_type(
  box_name,
  algosdk.ABIStringType
)
box_abi_values = app_client.get_box_values_from_abi_type(
  [box_name, box_name2],
  algosdk.ABIStringType
)
```

## Handling logic errors and diagnosing errors

Often when calling a smart contract during development you will get logic errors that cause an exception to throw. This may be because of a failing assertion, a lack of fees, exhaustion of opcode budget, or any number of other reasons.

When this occurs, you will generally get an error that looks something like: `TransactionPool.Remember: transaction {TRANSACTION_ID}: logic eval error: {ERROR_MESSAGE}. Details: pc={PROGRAM_COUNTER_VALUE}, opcodes={LIST_OF_OP_CODES}`.

The information in that error message can be parsed and when combined with the [source map from compilation](app-deploy#compilation-and-template-substitution) you can expose debugging information that makes it much easier to understand what’s happening. The ARC-56 app spec, if provided, can also specify human-readable error messages against certain program counter values and further augment the error message.

The app client and app factory automatically provide this functionality for all smart contract calls. They also expose a function that can be used for any custom calls you manually construct and need to add into your own try/catch `expose_logic_error(e: Error, is_clear: bool = False)`.

When an error is thrown then the resulting error that is re-thrown will be a [`LogicError`](../autoapi/algokit_utils/errors/logic_error/index#algokit_utils.errors.logic_error.LogicError), which has the following fields:

- `logic_error: Exception` - The original logic error exception
- `logic_error_str: str` - The string representation of the logic error
- `program: str` - The TEAL program source code
- `source_map: AlgoSourceMap | None` - The source map if available
- `transaction_id: str` - The transaction ID that triggered the error
- `message: str` - Combined error message with debugging information
- `pc: int` - The program counter value where error occurred
- `traces: list[SimulationTrace] | None` - Simulation traces if debug enabled
- `line_no: int | None` - The line number in the TEAL source code
- `lines: list[str]` - The TEAL program split into individual lines

Note: This information will only show if the app client / app factory has a source map. This will occur if:

- You have called `create`, `update` or `deploy`
- You have called `import_source_maps(source_maps)` and provided the source maps (which you can get by calling `export_source_maps()` after variously calling `create`, `update`, or `deploy` and it returns a serialisable value)
- You had source maps present in an app factory and then used it to [create an app client]() (they are automatically passed through)

If you want to go a step further and automatically issue a [simulated transaction](https://algorand.github.io/js-algorand-sdk/classes/modelsv2.SimulateTransactionResult.html) and get trace information when there is an error when an ABI method is called you can turn on debug mode:

```python
config.configure(debug=True)
```

If you do that then the exception will have the `traces` property within the underlying exception will have key information from the simulation within it and this will get populated into the `led.traces` property of the thrown error.

When this debug flag is set, it will also emit debugging symbols to allow break-point debugging of the calls if the [project root is also configured](debugging).

## Default arguments

If an ABI method call specifies default argument values for any of its arguments you can pass in `None` for the value of that argument for the default value to be automatically populated.
