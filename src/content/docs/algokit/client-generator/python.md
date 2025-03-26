---
title: Application Client Usage
---

After using the cli tool to generate an application client you will end up with a TypeScript file containing several type definitions, an application factory class and an application client class that is named after the target smart contract. For example, if the contract name is `HelloWorldApp` then you will end up with `HelloWorldAppFactory` and `HelloWorldAppClient` classes. The contract name will also be used to prefix a number of other types in the generated file which allows you to generate clients for multiple smart contracts in the one project without ambiguous type names.

> ![NOTE]
>
> If you are confused about when to use the factory vs client the mental model is: use the client if you know the app ID, use the factory if you don't know the app ID (deferred knowledge or the instance doesn't exist yet on the blockchain) or you have multiple app IDs

## Creating an application client instance

The first step to using the factory/client is to create an instance, which can be done via the constructor or more easily via an [`AlgorandClient`](https://github.com/algorandfoundation/algokit-utils-py/blob/main/docs/markdown/capabilities/algorand-client) instance via `algorand.client.get_typed_app_factory()` and `algorand.client.get_typed_app_client()` (see code examples below).

Once you have an instance, if you want an escape hatch to the [underlying untyped `AppClient` / `AppFactory`](https://github.com/algorandfoundation/algokit-utils-py/blob/main/docs/markdown/capabilities/app-client) you can access them as a property:

```python
# Untyped `AppFactory`
untypedFactory = factory.app_factory
# Untyped `AppClient`
untypedClient = client.app_client
```

### Get a factory

The [app factory](https://github.com/algorandfoundation/algokit-utils-py/blob/main/docs/markdown/capabilities/app-client) allows you to create and deploy one or more app instances and to create one or more app clients to interact with those (or other) app instances when you need to create clients for multiple apps.

If you only need a single client for a single, known app then you can skip using the factory and just [use a client](#get-a-client-by-app-id).

```python
# Via AlgorandClient
factory = algorand.client.get_typed_app_factory(HelloWorldAppFactory)
# Or, using the options:
factory_with_optional_params = algorand.client.get_typed_app_factory(
    HelloWorldAppFactory,
    default_sender="DEFAULTSENDERADDRESS",
    app_name="OverriddenName",
    compilation_params={
        "deletable": True,
        "updatable": False,
        "deploy_time_params": {
            "VALUE": "1",
        },
    },
    version="2.0",
)
# Or via the constructor
factory = new HelloWorldAppFactory({
    algorand,
})
# with options:
factory = new HelloWorldAppFactory({
    algorand,
    default_sender: "DEFAULTSENDERADDRESS",
    app_name: "OverriddenName",
    compilation_params={
        "deletable": True,
        "updatable": False,
        "deploy_time_params": {
            "VALUE": "1",
        },
    },
    version: "2.0",
})
```

### Get a client by app ID

The typed [app client](https://github.com/algorandfoundation/algokit-utils-py/blob/main/docs/markdown/capabilities/app-client) can be retrieved by ID.

You can get one by using a previously created app factory, from an `AlgorandClient` instance and using the constructor:

```python
# Via factory
factory = algorand.client.get_typed_app_factory(HelloWorldAppFactory)
client = factory.get_app_client_by_id({ app_id: 123 })
client_with_optional_params = factory.get_app_client_by_id(
    app_id=123,
    default_sender="DEFAULTSENDERADDRESS",
    app_name="OverriddenAppName",
    # Can also pass in `approval_source_map`, and `clear_source_map`
)

# Via AlgorandClient
client = algorand.client.get_typed_app_client_by_id(HelloWorldAppClient, app_id=123)
client_with_optional_params = algorand.client.get_typed_app_client_by_id(
    HelloWorldAppClient,
    app_id=123,
    default_sender="DEFAULTSENDERADDRESS",
    app_name="OverriddenAppName",
    # Can also pass in `approval_source_map`, and `clear_source_map`
)

# Via constructor
client = new HelloWorldAppClient(
    algorand=algorand,
    app_id=123,
)
client_with_optional_params = new HelloWorldAppClient(
    algorand=algorand,
    app_id=123,
    default_sender="DEFAULTSENDERADDRESS",
    app_name="OverriddenAppName",
    # Can also pass in `approval_source_map`, and `clear_source_map`
)
```

### Get a client by creator address and name

The typed [app client](https://github.com/algorandfoundation/algokit-utils-py/blob/main/docs/markdown/capabilities/app-client) can be retrieved by looking up apps by name for the given creator address if they were deployed using [AlgoKit deployment conventions](https://github.com/algorandfoundation/algokit-utils-py/blob/main/docs/markdown/capabilities/app-deploy).

You can get one by using a previously created app factory:

```python
factory = algorand.client.get_typed_app_factory(HelloWorldAppFactory)
client = factory.get_app_client_by_creator_and_name(creator_address="CREATORADDRESS")
client_with_optional_params = factory.get_app_client_by_creator_and_name(
    creator_address="CREATORADDRESS",
    default_sender="DEFAULTSENDERADDRESS",
    app_name="OverriddenAppName",
    # Can also pass in `approval_source_map`, and `clear_source_map`
)
```

Or you can get one using an `AlgorandClient` instance:

```python
client = algorand.client.get_typed_app_client_by_creator_and_name(
    HelloWorldAppClient,
    creator_address="CREATORADDRESS",
)
client_with_optional_params = algorand.client.get_typed_app_client_by_creator_and_name(
    HelloWorldAppClient,
    creator_address="CREATORADDRESS",
    default_sender="DEFAULTSENDERADDRESS",
    app_name="OverriddenAppName",
    ignore_cache=True,
    # Can also pass in `app_lookup_cache`, `approval_source_map`, and `clear_source_map`
)
```

### Get a client by network

The typed [app client](https://github.com/algorandfoundation/algokit-utils-py/blob/main/docs/markdown/capabilities/app-client) can be retrieved by network using any included network IDs within the ARC-56 app spec for the current network.

You can get one by using a static method on the app client:

```python
client = HelloWorldAppClient.from_network(algorand)
client_with_optional_params = HelloWorldAppClient.from_network(
    algorand,
    default_sender="DEFAULTSENDERADDRESS",
    app_name="OverriddenAppName",
    # Can also pass in `approval_source_map`, and `clear_source_map`
)
```

Or you can get one using an `AlgorandClient` instance:

```python
client = algorand.client.get_typed_app_client_by_network(HelloWorldAppClient)
client_with_optional_params = algorand.client.get_typed_app_client_by_network(
    HelloWorldAppClient,
    default_sender="DEFAULTSENDERADDRESS",
    app_name="OverriddenAppName",
    # Can also pass in `approval_source_map`, and `clear_source_map`
)
```

## Deploying a smart contract (create, update, delete, deploy)

The app factory and client will variously include methods for creating (factory), updating (client), and deleting (client) the smart contract based on the presence of relevant on completion actions and call config values in the ARC-32 / ARC-56 application spec file. If a smart contract does not support being updated for instance, then no update methods will be generated in the client.

In addition, the app factory will also include a `deploy` method which will...

- create the application if it doesn't already exist
- update or recreate the application if it does exist, but differs from the version the client is built on
- recreate the application (and optionally delete the old version) if the deployed version is incompatible with being updated to the client version
- do nothing in the application is already deployed and up to date.

You can find more specifics of this behaviour in the [algokit-utils](https://github.com/algorandfoundation/algokit-utils-py/blob/main/docs/markdown/capabilities/app-deploy) docs.

### Create

To create an app you need to use the factory. The return value will include a typed client instance for the created app.

```python
factory = algorand.client.get_typed_app_factory(HelloWorldAppFactory)

# Create the application using a bare call
result, client = factory.send.create.bare()

# Pass in some compilation flags
factory.send.create.bare(compilation_params={
    "updatable": True,
    "deletable": True,
})

# Create the application using a specific on completion action (ie. not a no_op)
factory.send.create.bare(params=CommonAppFactoryCallParams(on_complete=OnApplicationComplete.OptIn))

# Create the application using an ABI method (ie. not a bare call)
factory.send.create.namedCreate(
    args=NamedCreateArgs(
        arg1=123,
        arg2="foo",
    ),
)

# Pass compilation flags and on completion actions to an ABI create call
factory.send.create.namedCreate({
    args=NamedCreateArgs(
        arg1=123,
        arg2="foo",
    ), # Note also available as a typed tuple argument
    compilation_params={
        "updatable": True,
        "deletable": True,
    },
    params=CommonAppFactoryCallParams(on_complete=OnApplicationComplete.OptIn),
})
```

If you want to get a built transaction without sending it you can use `factory.createTransaction.create...` rather than `factory.send.create...`. If you want to receive transaction parameters ready to pass in as an ABI argument or to an `TransactionComposer` call then you can use `factory.params.create...`.

### Update and Delete calls

To create an app you need to use the client.

```python
client = algorand.client.get_typed_app_client_by_id(HelloWorldAppClient, app_id=123)

# Update the application using a bare call
client.send.update.bare()

# Pass in compilation flags
client.send.update.bare(compilation_params={
    "updatable": True,
    "deletable": False,
})

# Update the application using an ABI method
client.send.update.namedUpdate(
    args=NamedUpdateArgs(
        arg1=123,
        arg2="foo",
    ),
)

# Pass compilation flags
client.send.update.namedUpdate({
    args=NamedUpdateArgs(
        arg1=123,
        arg2="foo",
    ),
    compilation_params={
        "updatable": True,
        "deletable": True,
    },
    params=CommonAppCallParams(on_complete=OnApplicationComplete.OptIn),
)

# Delete the application using a bare call
client.send.delete.bare()

# Delete the application using an ABI method
client.send.delete.namedDelete()
```

If you want to get a built transaction without sending it you can use `client.create_transaction.update...` / `client.create_transaction.delete...` rather than `client.send.update...` / `client.send.delete...`. If you want to receive transaction parameters ready to pass in as an ABI argument or to an `TransactionComposer` call then you can use `client.params.update...` / `client.params.delete...`.

### Deploy call

The deploy call will make a create, update, or delete and create, or no call depending on what is required to have the deployed application match the client's contract version and the configured `on_update` and `on_schema_break` parameters. As such the deploy method allows you to configure arguments for each potential call it may make (via `create_params`, `update_params` and `delete_params`). If the smart contract is not updatable or deletable, those parameters will be omitted.

These params values (`create_params`, `update_params` and `delete_params`) will only allow you to specify valid calls that are defined in the ARC-32 / ARC-56 app spec. You can control what call is made via the `method` parameter in these objects. If it's left out (or set to `None`) then it will be a bare call, if set to the ABI signature of a call it will perform that ABI call. If there are arguments required for that ABI call then the type of the arguments will automatically populate in intellisense.

```ts
client.deploy({
  createParams: {
    onComplete: OnApplicationComplete.OptIn,
  },
  updateParams: {
    method: 'named_update(uint64,string)string',
    args: {
      arg1: 123,
      arg2: 'foo',
    },
  },
  // Can leave this out and it will do an argumentless bare call (if that call is allowed)
  //deleteParams: {}
  allowUpdate: true,
  allowDelete: true,
  onUpdate: 'update',
  onSchemaBreak: 'replace',
});
```

## Opt in and close out

Methods with an `opt_in` or `close_out` `onCompletionAction` are grouped under properties of the same name within the `send`, `createTransaction` and `params` properties of the client. If the smart contract does not handle one of these on completion actions, it will be omitted.

```python
# Opt in with bare call
client.send.opt_in.bare()

# Opt in with ABI method
client.create_transaction.opt_in.named_opt_in(args=NamedOptInArgs(arg1=123))

# Close out with bare call
client.params.close_out.bare()

# Close out with ABI method
client.send.close_out.named_close_out(args=NamedCloseOutArgs(arg1="foo"))
```

## Clear state

All clients will have a clear state method which will call the clear state program of the smart contract.

```python
client.send.clear_state()
client.create_transaction.clear_state()
client.params.clear_state()
```

## No-op calls

The remaining ABI methods which should all have an `on_completion_action` of `OnApplicationComplete.NoOp` will be available on the `send`, `create_transaction` and `params` properties of the client. If a bare no-op call is allowed it will be available via `bare`.

These methods will allow you to optionally pass in `on_complete` and if the method happens to allow other on-completes than no-op these can also be provided (and those methods will also be available via the on-complete sub-property too per above).

```python
# Call an ABI method which takes no args
client.send.some_method()

# Call a no-op bare call
client.create_transaction.bare()

# Call an ABI method, passing args in as a dictionary
client.params.some_other_method({ args: { arg1: 123, arg2: "foo" } })
```

## Method and argument naming

By default, names of names, types and arguments will be transformed to `snake_case` to match Python idiomatic semantics (names of classes would be converted to idiomatic `PascalCase` as per Python conventions). If you want to keep the names the same as what is in the ARC-32 / ARC-56 app spec file then you can pass the `-p` or `--preserve-names` property to the type generator.

### Method name clashes

The ARC-32 / ARC-56 specification allows two methods to have the same name, as long as they have different ABI signatures. On the client these methods will be emitted with a unique name made up of the method's full signature. Eg. `create_string_uint32_void`.

## ABI arguments

Each generated method will accept ABI method call arguments in both a `tuple` and a `dataclass`, so you can use whichever feels more comfortable. The types that are accepted will automatically translate from the specified ABI types in the app spec to an equivalent python type.

```python
# ABI method which takes no args
client.send.no_args_method()

# ABI method with args
client.send.other_method(args=OtherMethodArgs(arg1=123, arg2="foo", arg3=bytes([1, 2, 3, 4])))

# Call an ABI method, passing args in as a tuple
client.send.yet_another_method(args=(1, 2, "foo"))
```

## Structs

If the method takes a struct as a parameter, or returns a struct as an output then it will automatically be allowed to be passed in and will be returned as the parsed struct object.

## Additional parameters

Each ABI method and bare call on the client allows the consumer to provide additional parameters as well as the core method / args / etc. parameters. This models the parameters that are available in the underlying [app factory / client](https://github.com/algorandfoundation/algokit-utils-py/blob/main/docs/markdown/capabilities/app-client).

```python
client.send.some_method(
    args=SomeMethodArgs(arg1=123),
    # Additional parameters go here
)

client.send.opt_in.bare({
    # Additional parameters go here
})
```

## Composing transactions

Algorand allows multiple transactions to be composed into a single atomic transaction group to be committed (or rejected) as one.

### Using the fluent composer

The client exposes a fluent transaction composer which allows you to build up a group before sending it. The return values will be strongly typed based on the methods you add to the composer.

```python
result = client
    .new_group()
    .method_one(args=SomeMethodArgs(arg1=123), box_references=["V"])
    # Non-ABI transactions can still be added to the group
    .add_transaction(
        client.app_client.create_transaction.fund_app_account(
            FundAppAccountParams(
                amount=AlgoAmount.from_micro_algos(5000)
            )
        )
    )
    .method_two(args=SomeOtherMethodArgs(arg1="foo"))
    .send()

# Strongly typed as the return type of methodOne
result_of_method_one = result.returns[0]
# Strongly typed as the return type of methodTwo
result_of_method_two = result.returns[1]
```

### Manually with the TransactionComposer

Multiple transactions can also be composed using the `TransactionComposer` class.

```python
result = algorand
    .new_group()
    .add_app_call_method_call(
        client.params.method_one(args=SomeMethodArgs(arg1=123), box_references=["V"])
    )
    .add_payment(
        client.app_client.params.fund_app_account(
            FundAppAccountParams(amount=AlgoAmount.from_micro_algos(5000))
        )
    )
    .add_app_call_method_call(client.params.method_two(args=SomeOtherMethodArgs(arg1="foo")))
    .send()

# returns will contain a result object for each ABI method call in the transaction group
for (return_value in result.returns) {
    print(return_value)
}
```

## State

You can access local, global and box storage state with any state values that are defined in the ARC-32 / ARC-56 app spec.

You can do this via the `state` property which has 3 sub-properties for the three different kinds of state: `state.global`, `state.local(address)`, `state.box`. Each one then has a series of methods defined for each registered key or map from the app spec.

Maps have a `value(key)` method to get a single value from the map by key and a `getMap()` method to return all box values as a map. Keys have a `{keyName}()` method to get the value for the key and there will also be a `get_all()` method to get an object will all key values.

The properties will return values of the corresponding TypeScript type for the type in the app spec and any structs will be parsed as the struct object.

```python
factory = algorand.client.get_typed_app_factory(Arc56TestFactory, default_sender="SENDER")

result, client = factory.send.create.create_application(
    args=[],
    compilation_params={"deploy_time_params": {"some_number": 1337}},
)

assert client.state.global_state.global_key() == 1337
assert another_app_client.state.global_state.global_key() == 1338
assert client.state.global_state.global_map.value("foo") == {
    foo: 13,
    bar: 37,
}

client.appClient.fund_app_account(
    FundAppAccountParams(amount=AlgoAmount.from_micro_algos(1_000_000))
)
client.send.opt_in.opt_in_to_application(
    args=[],
)

assert client.state.local(defaultSender).local_key() == 1337
assert client.state.local(defaultSender).local_map.value("foo") == "bar"
assert client.state.box.box_key() == "baz"
assert client.state.box.box_map.value({
    add: { a: 1, b: 2 },
    subtract: { a: 4, b: 3 },
}) == {
    sum: 3,
    difference: 1,
}
```
