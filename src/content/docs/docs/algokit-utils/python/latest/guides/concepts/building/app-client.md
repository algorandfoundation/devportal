---
title: 'App client and App factory'
description: 'App client and App factory are higher-order use case capabilities provided by AlgoKit Utils that builds on top of the core capabilities, particularly [App deployment](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/) and [App management](/docs/algokit-utils/python/latest/guides/concepts/building/app/). They allow you to access high productivity application clients that work with [ARC-56](https://github.com/algorandfoundation/ARCs/pull/258) and [ARC-32](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0032.md) application spec defined smart contracts, which you can use to create, update, delete, deploy and call a smart contract and access state data for it.'
---

> [!NOTE]
> This page covers the untyped app client, but we recommend using [typed clients](/docs/algokit-utils/python/latest/guides/concepts/building/typed-app-clients/), which will give you a better developer experience with strong typing specific to the app itself.

App client and App factory are higher-order use case capabilities provided by AlgoKit Utils that builds on top of the core capabilities, particularly [App deployment](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/) and [App management](/docs/algokit-utils/python/latest/guides/concepts/building/app/). They allow you to access high productivity application clients that work with [ARC-56](https://github.com/algorandfoundation/ARCs/pull/258) and [ARC-32](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0032.md) application spec defined smart contracts, which you can use to create, update, delete, deploy and call a smart contract and access state data for it.

> [!NOTE]
>
> If you are confused about when to use the factory vs client the mental model is: use the client if you know the app ID, use the factory if you don't know the app ID (deferred knowledge or the instance doesn't exist yet on the blockchain) or you have multiple app IDs

## AppFactory

The `AppFactory` is a class that, for a given app spec, allows you to create and deploy one or more app instances and to create one or more app clients to interact with those (or other) app instances.

To get an instance of `AppFactory` you can use either [`AlgorandClient`](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/) via `algorand.client.get_app_factory` or instantiate it directly (passing in an app spec, an `AlgorandClient` instance and other optional parameters):

```python
# Minimal example
factory = algorand.client.get_app_factory(
    app_spec="{/* ARC-56 or ARC-32 compatible JSON */}",
)

# Advanced example
factory = algorand.client.get_app_factory(
    app_spec=parsed_arc32_or_arc56_app_spec,
    default_sender="SENDERADDRESS",
    app_name="OverriddenAppName",
    version="2.0.0",
    compilation_params={
        "updatable": True,
        "deletable": False,
        "deploy_time_params": {"ONE": 1, "TWO": "value"},
    },
)
```

## AppClient

The `AppClient` is a class that, for a given app spec, allows you to manage calls and state for a specific deployed instance of an app (with a known app ID).

To get an instance of `AppClient` you can use either [`AlgorandClient`](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/) via `algorand.client.get_app_client_*` or instantiate it directly (passing in an app ID, app spec, `AlgorandClient` instance and other optional parameters):

```python
# Minimal examples
app_client = algorand.client.get_app_client_by_creator_and_name(
    app_spec="{/* ARC-56 or ARC-32 compatible JSON */}",
    # app_id resolved by looking for app ID of named app by this creator
    creator_address="CREATORADDRESS",
    app_name="MyApp",
)
app_client = algorand.client.get_app_client_by_id(
    app_spec="{/* ARC-56 or ARC-32 compatible JSON */}",
    app_id=12345,
)
app_client = algorand.client.get_app_client_by_network(
    app_spec="{/* ARC-56 or ARC-32 compatible JSON */}",
    # app_id resolved by using ARC-56 spec to find app ID for current network
)

# Advanced example
app_client = algorand.client.get_app_client_by_id(
    app_spec=parsed_app_spec,
    app_id=12345,
    app_name="OverriddenAppName",
    default_sender="SENDERADDRESS",
    approval_source_map=approval_teal_source_map,
    clear_source_map=clear_teal_source_map,
)
```

You can get the `app_id` and `app_address` at any time as properties on the `AppClient` along with `app_name` and `app_spec`.

## Dynamically creating clients for a given app spec

As well as allowing you to control creation and deployment of apps, the `AppFactory` allows you to conveniently create multiple `AppClient` instances on-the-fly with information pre-populated.

This is possible via two methods on the app factory:

- `factory.get_app_client_by_id(params)` - Returns a new `AppClient` for an app instance of the given ID. Automatically populates app_name, default_sender and source maps from the factory if not specified in the params.
- `factory.get_app_client_by_creator_and_name(params)` - Returns a new `AppClient`, resolving the app by creator address and name using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note). Automatically populates app_name, default_sender and source maps from the factory if not specified in the params.

```python
app_client1 = factory.get_app_client_by_id(app_id=12345)
app_client2 = factory.get_app_client_by_id(app_id=12346)
app_client3 = factory.get_app_client_by_id(
    app_id=12345,
    default_sender="SENDER2ADDRESS",
)

app_client4 = factory.get_app_client_by_creator_and_name(
    creator_address="CREATORADDRESS",
    app_name="MyApp",
)
app_client5 = factory.get_app_client_by_creator_and_name(
    creator_address="CREATORADDRESS",
    app_name="NonDefaultAppName",
)
app_client6 = factory.get_app_client_by_creator_and_name(
    creator_address="CREATORADDRESS",
    app_name="NonDefaultAppName",
    ignore_cache=True,  # Perform fresh indexer lookups
    default_sender="SENDER2ADDRESS",
)
```

## Creating and deploying an app

Once you have an [app factory](#appfactory) you can perform the following actions:

- `factory.send.bare.create(...)` - Signs and sends a transaction to create an app and returns a tuple of an [`AppClient`](#appclient) instance for the created app and the [result of that call](/docs/algokit-utils/python/latest/guides/concepts/building/app/#creation)
- `factory.deploy(...)` - Uses the [creator address and app name pattern](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/#lookup-deployed-apps-by-name) to find if the app has already been deployed or not and either creates, updates or replaces that app based on the [deployment rules](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/#performing-a-deployment) (i.e. it's an idempotent deployment) and returns a tuple of an [`AppClient`](#appclient) instance for the created/updated/existing app and the [result of the deployment](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/#return-value)

### Create

The create method is a wrapper over the `app_create` (bare calls) and `app_create_method_call` (ABI method calls) [methods](/docs/algokit-utils/python/latest/guides/concepts/building/app/#creation), with the following differences:

- You don't need to specify the `approval_program`, `clear_state_program`, or `schema` because these are all specified or calculated from the app spec (noting you can override the `schema`)
- `sender` is optional and if not specified then the `default_sender` from the `AppFactory` constructor is used (if it was specified, otherwise an error is thrown)
- `deploy_time_params`, `updatable` and `deletable` can be passed in to control [deploy-time parameter replacements and deploy-time immutability and permanence control](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/#compilation-and-template-substitution); these values can also be passed into the `AppFactory` constructor instead and if so will be used if not defined in the params to the create call

```python
# Use no-argument bare-call
app_client, result = factory.send.bare.create()

# Specify parameters for bare-call and override other parameters
app_client, result = factory.send.bare.create(
    params=AppFactoryCreateParams(
        args=[bytes([1, 2, 3, 4])],
        static_fee=AlgoAmount.from_micro_algo(3000),
        on_complete=OnApplicationComplete.OptIn,
    ),
    compilation_params={
        "deploy_time_params": {
            "ONE": 1,
            "TWO": "two",
        },
        "updatable": True,
        "deletable": False,
    },
)

# Specify parameters for ABI method call
app_client, result = factory.send.create(
    AppFactoryCreateMethodCallParams(
        method="create_application",
        args=[1, "something"],
    )
)
```

If you want to construct a custom create call, use the underlying [`algorand.send.app_create` / `algorand.create_transaction.app_create` / `algorand.send.app_create_method_call` / `algorand.create_transaction.app_create_method_call` methods](/docs/algokit-utils/python/latest/guides/concepts/building/app/#creation) then you can get params objects:

- `factory.params.create(params)` - ABI method create call for deploy method or an underlying [`app_create_method_call` call](/docs/algokit-utils/python/latest/guides/concepts/building/app/#creation)
- `factory.params.bare.create(params)` - Bare create call for deploy method or an underlying [`app_create` call](/docs/algokit-utils/python/latest/guides/concepts/building/app/#creation)

### Deploy

The deploy method is a wrapper over the [`AppDeployer`'s `deploy` method](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/#performing-a-deployment), with the following differences:

- You don't need to specify the `approval_program`, `clear_state_program`, or `schema` in the `create_params` because these are all specified or calculated from the app spec (noting you can override the `schema`)
- `sender` is optional for `create_params`, `update_params` and `delete_params` and if not specified then the `default_sender` from the `AppFactory` constructor is used (if it was specified, otherwise an error is thrown)
- You don't need to pass in `metadata` to the deploy params - it's calculated from:
  - `updatable` and `deletable`, which you can optionally pass in directly via `compilation_params`
  - `version` and `name`, which are optionally passed into the `AppFactory` constructor
- `compilation_params` (`deploy_time_params`, `updatable` and `deletable`) can all be passed into the `AppFactory` and if so will be used if not defined in the params to the deploy call for the [deploy-time parameter replacements and deploy-time immutability and permanence control](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/#compilation-and-template-substitution)
- `create_params`, `update_params` and `delete_params` are optional, if they aren't specified then default values are used for everything and a no-argument bare call will be made for any create/update/delete calls
- If you want to call an ABI method for create/update/delete calls then you can pass in a string for `method` (as opposed to an `ABIMethod` object), which can either be the method name, or if you need to disambiguate between multiple methods of the same name it can be the ABI signature (see example below)

```python
# Use no-argument bare-calls to deploy with default behaviour
#  for when update or schema break detected (fail the deployment)
app_client, result = factory.deploy()

# Specify parameters for bare-calls and override the schema break behaviour
app_client, result = factory.deploy(
    create_params=AppClientBareCallCreateParams(
        args=[bytes([1, 2, 3, 4])],
        static_fee=AlgoAmount.from_micro_algo(3000),
        on_complete=OnApplicationComplete.OptIn,
    ),
    update_params=AppClientBareCallParams(
        args=[bytes([1, 2, 3])],
    ),
    delete_params=AppClientBareCallParams(
        args=[bytes([1, 2])],
    ),
    compilation_params={
        "deploy_time_params": {
            "ONE": 1,
            "TWO": "two",
        },
        "updatable": True,
        "deletable": True,
    },
    on_update=OnUpdate.UpdateApp,
    on_schema_break=OnSchemaBreak.ReplaceApp,
)

# Specify parameters for ABI method calls
app_client, result = factory.deploy(
    create_params=AppClientMethodCallCreateParams(
        method="create_application",
        args=[1, "something"],
    ),
    update_params=AppClientMethodCallParams(
        method="update",
    ),
    delete_params=AppClientMethodCallParams(
        method="delete_app(uint64,uint64,uint64)uint64",
        args=[1, 2, 3],
    ),
)
```

If you want to construct a custom deploy call, use the underlying [`algorand.app_deployer.deploy` method](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/#performing-a-deployment) then you can get params objects for the `create_params`, `update_params` and `delete_params`:

- `factory.params.create(params)` - ABI method create call for deploy method or an underlying [`app_create_method_call` call](/docs/algokit-utils/python/latest/guides/concepts/building/app/#creation)
- `factory.params.deploy_update(params)` - ABI method update call for deploy method
- `factory.params.deploy_delete(params)` - ABI method delete call for deploy method
- `factory.params.bare.create(params)` - Bare create call for deploy method or an underlying [`app_create` call](/docs/algokit-utils/python/latest/guides/concepts/building/app/#creation)
- `factory.params.bare.deploy_update(params)` - Bare update call for deploy method
- `factory.params.bare.deploy_delete(params)` - Bare delete call for deploy method

## Updating and deleting an app

Deploy method aside, the ability to make update and delete calls happens after there is an instance of an app so are done via `AppClient`. The semantics of this are no different than [other calls](#calling-the-app), with the caveat that the update call is a bit different to the others since the code will be compiled when constructing the update params and the update calls thus optionally takes compilation parameters (`deploy_time_params`, `updatable` and `deletable` via `compilation_params`) for [deploy-time parameter replacements and deploy-time immutability and permanence control](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/#compilation-and-template-substitution).

## Calling the app

You can construct a params object, transaction(s) and sign and send a transaction to call the app that a given `AppClient` instance is pointing to.

This is done via the following properties:

- `app_client.params.{on_complete}(params)` - Params for an ABI method call
- `app_client.params.bare.{on_complete}(params)` - Params for a bare call
- `app_client.create_transaction.{on_complete}(params)` - Transaction(s) for an ABI method call
- `app_client.create_transaction.bare.{on_complete}(params)` - Transaction for a bare call
- `app_client.send.{on_complete}(params)` - Sign and send an ABI method call
- `app_client.send.bare.{on_complete}(params)` - Sign and send a bare call

To make one of these calls `{on_complete}` needs to be swapped with the [on complete action](https://dev.algorand.co/concepts/smart-contracts/overview#smart-contract-lifecycle) that should be made:

- `update` - An update call
- `opt_in` - An opt-in call
- `delete` - A delete application call
- `clear_state` - A clear state call (note: calls the clear program and only applies to bare calls)
- `close_out` - A close-out call
- `call` - A no-op call (or other call if `on_complete` is specified to anything other than update)

The input payload for all of these calls is the same as the [underlying app methods](/docs/algokit-utils/python/latest/guides/concepts/building/app/#calling-apps) with the caveat that the `app_id` is not passed in (since the `AppClient` already knows the app ID), `sender` is optional (it uses `default_sender` from the `AppClient` constructor if it was specified) and `method` (for ABI method calls) is a string rather than an `ABIMethod` object (which can either be the method name, or if you need to disambiguate between multiple methods of the same name it can be the ABI signature).

The return payload for all of these is the same as the [underlying methods](/docs/algokit-utils/python/latest/guides/concepts/building/app/#calling-apps).

```python
call1 = app_client.send.update(
    AppClientMethodCallParams(
        method="update_abi",
        args=["string_io"],
    ),
    compilation_params={"deploy_time_params": deploy_time_params},
)

call2 = app_client.send.delete(
    AppClientMethodCallParams(
        method="delete_abi",
        args=["string_io"],
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

### Nested ABI Method Call Transactions

The ARC4 ABI specification supports ABI method calls as arguments to other ABI method calls, enabling some interesting use cases. While this conceptually resembles a function call hierarchy, in practice, the transactions are organized as a flat, ordered transaction group. Unfortunately, this logically hierarchical structure cannot always be correctly represented as a flat transaction group, making some scenarios impossible.

To illustrate this, let's consider an example of two ABI methods with the following signatures:

- `myMethod(pay,appl)void`
- `myOtherMethod(pay)void`

These signatures are compatible, so `myOtherMethod` can be passed as an ABI method call argument to `myMethod`, which would look like:

Hierarchical method call

```
myMethod(pay, myOtherMethod(pay))
```

Flat transaction group

```
pay (pay)
appl (myOtherMethod)
appl (myMethod)
```

An important limitation to note is that the flat transaction group representation does not allow having two different pay transactions. This invariant is represented in the hierarchical call interface of the app client by passing a `None` value. This acts as a placeholder and tells the app client that another ABI method call argument will supply the value for this argument. For example:

```python
payment = algorand.create_transaction.payment(
    PaymentParams(
        sender=alice.address,
        receiver=alice.address,
        amount=AlgoAmount.from_micro_algo(1),
    )
)

my_other_method_call = app_client.params.call(
    AppClientMethodCallParams(
        method="myOtherMethod",
        args=[payment],
    )
)

my_method_call = app_client.send.call(
    AppClientMethodCallParams(
        method="myMethod",
        args=[None, my_other_method_call],
    )
)
```

`my_other_method_call` supplies the pay transaction to the transaction group and, by association, `my_other_method_call` has access to it as defined in its signature.
To ensure the app client builds the correct transaction group, you must supply a value for every argument in a method call signature.

## Funding the app account

Often there is a need to fund an app account to cover minimum balance requirements for boxes and other scenarios. There is an app client method that will do this for you `fund_app_account(params)`.

The input parameters are:

- A `FundAppAccountParams`, which has the same properties as a [payment transaction](/docs/algokit-utils/python/latest/guides/concepts/building/transfer/#payment) except `receiver` is not required and `sender` is optional (if not specified then it will be set to the app client's default sender if configured).

Note: If you are passing the funding payment in as an ABI argument so it can be validated by the ABI method then you'll want to get the funding call as a transaction, e.g.:

```python
result = app_client.send.call(
    AppClientMethodCallParams(
        method="bootstrap",
        args=[
            app_client.create_transaction.fund_app_account(
                FundAppAccountParams(
                    amount=AlgoAmount.from_micro_algo(200_000)
                )
            )
        ],
        box_references=["Box1"],
    )
)
```

You can also get the funding call as a params object via `app_client.params.fund_app_account(params)`.

## Reading state

`AppClient` has a number of mechanisms to read state (global, local and box storage) from the app instance.

### App spec methods

The ARC-56 app spec can specify detailed information about the encoding format of state values and as such allows for a more advanced ability to automatically read state values and decode them as their high-level language types rather than the limited `int` / `bytes` / `str` ability that the [generic methods](#generic-methods) give you.

You can access this functionality via:

- `app_client.state.global_state.{method}()` - Global state
- `app_client.state.local_state(address).{method}()` - Local state
- `app_client.state.box.{method}()` - Box storage

Where `{method}` is one of:

- `get_all()` - Returns all single-key state values in a dict keyed by the key name and the value a decoded ABI value.
- `get_value(name)` - Returns a single state value for the current app with the value a decoded ABI value.
- `get_map_value(map_name, key)` - Returns a single value from the given map for the current app with the value a decoded ABI value. Key can either be `bytes` with the binary value of the key value on-chain (without the map prefix) or the high level (decoded) value that will be encoded to bytes for the app spec specified `key_type`
- `get_map(map_name)` - Returns all map values for the given map in a key=>value dict. It's recommended that this is only done when you have a unique `prefix` for the map otherwise there's a high risk that incorrect values will be included in the map.

```python
values = app_client.state.global_state.get_all()
value = app_client.state.local_state("ADDRESS").get_value("value1")
map_value = app_client.state.box.get_map_value("map1", "mapKey")
map_dict = app_client.state.global_state.get_map("myMap")
```

### Generic methods

There are various methods defined that let you read state from the smart contract app:

- `get_global_state()` - Gets the current global state using `algorand.app.get_global_state`
- `get_local_state(address)` - Gets the current local state for the given account address using `algorand.app.get_local_state`
- `get_box_names()` - Gets the current box names using `algorand.app.get_box_names`
- `get_box_value(name)` - Gets the current value of the given box using `algorand.app.get_box_value`
- `get_box_value_from_abi_type(name, abi_type)` - Gets the current value of the given box decoded according to an ABI type using `algorand.app.get_box_value_from_abi_type`
- `get_box_values(filter_func)` - Gets the current values of the boxes, optionally filtered by a function, using `algorand.app.get_box_values`
- `get_box_values_from_abi_type(abi_type, filter_func)` - Gets the current values of the boxes decoded according to an ABI type, optionally filtered by a function, using `algorand.app.get_box_values_from_abi_type`

```python
global_state = app_client.get_global_state()
local_state = app_client.get_local_state("ACCOUNTADDRESS")

box_name = "my-box"
box_name2 = "my-box2"

box_names = app_client.get_box_names()
box_value = app_client.get_box_value(box_name)
box_values = app_client.get_box_values()  # Returns all box values
box_abi_value = app_client.get_box_value_from_abi_type(
    box_name,
    abi.ABIType.from_string("string"),
)
box_abi_values = app_client.get_box_values_from_abi_type(
    abi.ABIType.from_string("string"),
)
```

## Handling logic errors and diagnosing errors

Often when calling a smart contract during development you will get logic errors that cause an exception to throw. This may be because of a failing assertion, a lack of fees, exhaustion of opcode budget, or any number of other reasons.

When this occurs, you will generally get an error that looks something like: `TransactionPool.Remember: transaction {TRANSACTION_ID}: logic eval error: {ERROR_MESSAGE}. Details: pc={PROGRAM_COUNTER_VALUE}, opcodes={LIST_OF_OP_CODES}`.

The information in that error message can be parsed and when combined with the [source map from compilation](/docs/algokit-utils/python/latest/guides/concepts/building/app-deploy/#compilation-and-template-substitution) you can expose debugging information that makes it much easier to understand what's happening. The ARC-56 app spec, if provided, can also specify human-readable error messages against certain program counter values and further augment the error message.

The app client and app factory automatically provide this functionality for all smart contract calls through an automatically registered error transformer (via `algorand.register_error_transformer`).

Custom error transformers can be registered via `algorand.register_error_transformer` to provide additional error handling logic.

When an error is thrown then the resulting error that is re-thrown will be a `LogicError` object, which has the following fields:

- `message: str` - The formatted error message
- `logic_error: Exception | None` - The original logic error exception
- `logic_error_str: str` - The string representation of the logic error
- `program: str` - The TEAL program source code
- `source_map: ProgramSourceMap | None` - The source map if available
- `transaction_id: str` - The transaction ID that triggered the error
- `pc: int` - The program counter value where error occurred
- `traces: list[SimulateTransactionResult] | None` - Simulation traces if debug enabled
- `line_no: int | None` - The line number in the TEAL source code
- `lines: list[str]` - The TEAL program split into individual lines

Note: This information will only show if the app client / app factory has a source map. This will occur if:

- You have called `create`, `update` or `deploy`
- You have called `import_source_maps(source_maps)` and provided the source maps (which you can get by calling `export_source_maps()` after variously calling `create`, `update`, or `deploy` and it returns a serialisable value)
- You had source maps present in an app factory and then used it to [create an app client](#dynamically-creating-clients-for-a-given-app-spec) (they are automatically passed through)

If you want to go a step further and automatically issue a simulated transaction and get trace information when there is an error when an ABI method is called you can turn on debug mode:

```python
config.configure(debug=True)
```

If you do that then the exception will have the `traces` property within the underlying exception will have key information from the simulation within it and this will get populated into the `traces` property of the thrown error.

When this debug flag is set, it will also emit debugging symbols to allow break-point debugging of the calls if the [project root is also configured](/docs/algokit-utils/python/latest/guides/concepts/advanced/debugging/).

## Default arguments

If an ABI method call specifies default argument values for any of its arguments you can pass in `None` for the value of that argument for the default value to be automatically populated.
