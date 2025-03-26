---
title: Application Client Usage
---

After using the cli tool to generate an application client you will end up with a TypeScript file containing several type definitions, an application factory class and an application client class that is named after the target smart contract. For example, if the contract name is `HelloWorldApp` then you will end up with `HelloWorldAppFactory` and `HelloWorldAppClient` classes. The contract name will also be used to prefix a number of other types in the generated file which allows you to generate clients for multiple smart contracts in the one project without ambiguous type names.

> ![NOTE]
>
> If you are confused about when to use the factory vs client the mental model is: use the client if you know the app ID, use the factory if you don't know the app ID (deferred knowledge or the instance doesn't exist yet on the blockchain) or you have multiple app IDs

## Creating an application client instance

The first step to using the factory/client is to create an instance, which can be done via the constructor or more easily via an [`AlgorandClient`](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/capabilities/algorand-client) instance via `algorand.client.getTypedAppFactory()` and `algorand.client.getTypedAppClient*()` (see code examples below).

Once you have an instance, if you want an escape hatch to the [underlying untyped `AppClient` / `AppFactory`](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/capabilities/app-client) you can access them as a property:

```typescript
// Untyped `AppFactory`
const untypedFactory = factory.appFactory;
// Untyped `AppClient`
const untypedClient = client.appClient;
```

### Get a factory

The [app factory](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/capabilities/app-client) allows you to create and deploy one or more app instances and to create one or more app clients to interact with those (or other) app instances when you need to create clients for multiple apps.

If you only need a single client for a single, known app then you can skip using the factory and just [use a client](#get-a-client-by-app-id).

```typescript
// Via AlgorandClient
const factory = algorand.client.getTypedAppFactory(HelloWorldAppFactory);
// Or, using the options:
const factoryWithOptionalParams = algorand.client.getTypedAppFactory(HelloWorldAppFactory, {
  defaultSender: 'DEFAULTSENDERADDRESS',
  appName: 'OverriddenName',
  deletable: true,
  updatable: false,
  deployTimeParams: {
    VALUE: '1',
  },
  version: '2.0',
});
// Or via the constructor
const factory = new HelloWorldAppFactory({
  algorand,
});
// with options:
const factory = new HelloWorldAppFactory({
  algorand,
  defaultSender: 'DEFAULTSENDERADDRESS',
  appName: 'OverriddenName',
  deletable: true,
  updatable: false,
  deployTimeParams: {
    VALUE: '1',
  },
  version: '2.0',
});
```

### Get a client by app ID

The typed [app client](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/capabilities/app-client) can be retrieved by ID.

You can get one by using a previously created app factory, from an `AlgorandClient` instance and using the constructor:

```typescript
// Via factory
const factory = algorand.client.getTypedAppFactory(HelloWorldAppFactory);
const client = factory.getAppClientById({ appId: 123n });
const clientWithOptionalParams = factory.getAppClientById({
  appId: 123n,
  defaultSender: 'DEFAULTSENDERADDRESS',
  appName: 'OverriddenAppName',
  // Can also pass in `approvalSourceMap`, and `clearSourceMap`
});

// Via AlgorandClient
const client = algorand.client.getTypedAppClientById(HelloWorldAppClient, {
  appId: 123n,
});
const clientWithOptionalParams = algorand.client.getTypedAppClientById(HelloWorldAppClient, {
  appId: 123n,
  defaultSender: 'DEFAULTSENDERADDRESS',
  appName: 'OverriddenAppName',
  // Can also pass in `approvalSourceMap`, and `clearSourceMap`
});

// Via constructor
const client = new HelloWorldAppClient({
  algorand,
  appId: 123n,
});
const clientWithOptionalParams = new HelloWorldAppClient({
  algorand,
  appId: 123n,
  defaultSender: 'DEFAULTSENDERADDRESS',
  appName: 'OverriddenAppName',
  // Can also pass in `approvalSourceMap`, and `clearSourceMap`
});
```

### Get a client by creator address and name

The typed [app client](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/capabilities/app-client) can be retrieved by looking up apps by name for the given creator address if they were deployed using [AlgoKit deployment conventions](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/capabilities/app-deploy).

You can get one by using a previously created app factory:

```typescript
const factory = algorand.client.getTypedAppFactory(HelloWorldAppFactory);
const client = factory.getAppClientByCreatorAndName({ creatorAddress: 'CREATORADDRESS' });
const clientWithOptionalParams = factory.getAppClientByCreatorAndName({
  creatorAddress: 'CREATORADDRESS',
  defaultSender: 'DEFAULTSENDERADDRESS',
  appName: 'OverriddenAppName',
  // Can also pass in `approvalSourceMap`, and `clearSourceMap`
});
```

Or you can get one using an `AlgorandClient` instance:

```typescript
const client = algorand.client.getTypedAppClientByCreatorAndName(HelloWorldAppClient, {
  creatorAddress: 'CREATORADDRESS',
});
const clientWithOptionalParams = algorand.client.getTypedAppClientByCreatorAndName(
  HelloWorldAppClient,
  {
    creatorAddress: 'CREATORADDRESS',
    defaultSender: 'DEFAULTSENDERADDRESS',
    appName: 'OverriddenAppName',
    ignoreCache: true,
    // Can also pass in `appLookupCache`, `approvalSourceMap`, and `clearSourceMap`
  },
);
```

### Get a client by network

The typed [app client](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/capabilities/app-client) can be retrieved by network using any included network IDs within the ARC-56 app spec for the current network.

You can get one by using a static method on the app client:

```typescript
const client = HelloWorldAppClient.fromNetwork({ algorand });
const clientWithOptionalParams = HelloWorldAppClient.fromNetwork({
  algorand,
  defaultSender: 'DEFAULTSENDERADDRESS',
  appName: 'OverriddenAppName',
  // Can also pass in `approvalSourceMap`, and `clearSourceMap`
});
```

Or you can get one using an `AlgorandClient` instance:

```typescript
const client = algorand.client.getTypedAppClientByNetwork(HelloWorldAppClient);
const clientWithOptionalParams = algorand.client.getTypedAppClientByNetwork(HelloWorldAppClient, {
  defaultSender: 'DEFAULTSENDERADDRESS',
  appName: 'OverriddenAppName',
  // Can also pass in `approvalSourceMap`, and `clearSourceMap`
});
```

## Deploying a smart contract (create, update, delete, deploy)

The app factory and client will variously include methods for creating (factory), updating (client), and deleting (client) the smart contract based on the presence of relevant on completion actions and call config values in the ARC-32 / ARC-56 application spec file. If a smart contract does not support being updated for instance, then no update methods will be generated in the client.

In addition, the app factory will also include a `deploy` method which will...

- create the application if it doesn't already exist
- update or recreate the application if it does exist, but differs from the version the client is built on
- recreate the application (and optionally delete the old version) if the deployed version is incompatible with being updated to the client version
- do nothing in the application is already deployed and up to date.

You can find more specifics of this behaviour in the [algokit-utils](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/capabilities/app-deploy) docs.

### Create

To create an app you need to use the factory. The return value will include a typed client instance for the created app.

```ts
const factory = algorand.client.getTypedAppFactory(HelloWorldAppFactory);

// Create the application using a bare call
const { result, appClient: client } = factory.send.create.bare();

// Pass in some compilation flags
factory.send.create.bare({
  updatable: true,
  deletable: true,
});

// Create the application using a specific on completion action (ie. not a no_op)
factory.send.create.bare({
  onComplete: OnApplicationComplete.OptIn,
});

// Create the application using an ABI method (ie. not a bare call)
factory.send.create.namedCreate({
  args: {
    arg1: 123,
    arg2: 'foo',
  },
});

// Pass compilation flags and on completion actions to an ABI create call
factory.send.create.namedCreate({
  args: {
    arg1: 123,
    arg2: 'foo',
  },
  updatable: true,
  deletable: true,
  onComplete: OnApplicationComplete.OptIn,
});
```

If you want to get a built transaction without sending it you can use `factory.createTransaction.create...` rather than `factory.send.create...`. If you want to receive transaction parameters ready to pass in as an ABI argument or to an `TransactionComposer` call then you can use `factory.params.create...`.

### Update and Delete calls

To create an app you need to use the client.

```ts
const client = algorand.client.getTypedAppClientById(HelloWorldAppClient, {
  appId: 123n,
});

// Update the application using a bare call
client.send.update.bare();

// Pass in compilation flags
client.send.update.bare({
  updatable: true,
  deletable: false,
});

// Update the application using an ABI method
client.send.update.namedUpdate({
  args: {
    arg1: 123,
    arg2: 'foo',
  },
});

// Pass compilation flags
client.send.update.namedUpdate({
  args: {
    arg1: 123,
    arg2: 'foo',
  },
  updatable: true,
  deletable: true,
});

// Delete the application using a bare call
client.send.delete.bare();

// Delete the application using an ABI method
client.send.delete.namedDelete();
```

If you want to get a built transaction without sending it you can use `client.createTransaction.update...` / `client.createTransaction.delete...` rather than `client.send.update...` / `client.send.delete...`. If you want to receive transaction parameters ready to pass in as an ABI argument or to an `TransactionComposer` call then you can use `client.params.update...` / `client.params.delete...`.

### Deploy call

The deploy call will make a create, update, or delete and create, or no call depending on what is required to have the deployed application match the client's contract version and the configured `onUpdate` and `onSchemaBreak` parameters. As such the deploy method allows you to configure arguments for each potential call it may make (via `createParams`, `updateParams` and `deleteParams`). If the smart contract is not updatable or deletable, those parameters will be omitted.

These params values (`createParams`, `updateParams` and `deleteParams`) will only allow you to specify valid calls that are defined in the ARC-32 / ARC-56 app spec. You can control what call is made via the `method` parameter in these objects. If it's left out (or set to `undefined`) then it will be a bare call, if set to the ABI signature of a call it will perform that ABI call. If there are arguments required for that ABI call then the type of the arguments will automatically populate in intellisense.

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

```ts
// Opt in with bare call
client.send.optIn.bare();

// Opt in with ABI method
client.createTransaction.optIn.namedOptIn({ args: { arg1: 123 } });

// Close out with bare call
client.params.closeOut.bare();

// Close out with ABI method
client.send.closeOut.namedCloseOut({ args: { arg1: 'foo' } });
```

## Clear state

All clients will have a clear state method which will call the clear state program of the smart contract.

```ts
client.send.clearState();
client.createTransaction.clearState();
client.params.clearState();
```

## No-op calls

The remaining ABI methods which should all have an `onCompletionAction` of `OnApplicationComplete.NoOp` will be available on the `send`, `createTransaction` and `params` properties of the client. If a bare no-op call is allowed it will be available via `bare`.

These methods will allow you to optionally pass in `onComplete` and if the method happens to allow other on-completes than no-op these can also be provided (and those methods will also be available via the on-complete sub-property too per above).

```ts
// Call an ABI method which takes no args
client.send.someMethod();

// Call a no-op bare call
client.createTransaction.bare();

// Call an ABI method, passing args in as a dictionary
client.params.someOtherMethod({ args: { arg1: 123, arg2: 'foo' } });
```

## Method and argument naming

By default, names of names, types and arguments will be transformed to `camelCase` to match TypeScript idiomatic semantics. If you want to keep the names the same as what is in the ARC-32 / ARC-56 app spec file (e.g. `snake_case` etc.) then you can pass the `-p` or `--preserve-names` property to the type generator.

### Method name clashes

The ARC-32 / ARC-56 specification allows two methods to have the same name, as long as they have different ABI signatures. On the client these methods will be emitted with a unique name made up of the method's full signature. Eg. createStringUint32Void.

Whilst TypeScript supports method overloading, in practice it would be impossible to reliably resolve the desired overload at run time once you factor in methods with default parameters.

## ABI arguments

Each generated method will accept ABI method call arguments in both a tuple and a dictionary format, so you can use whichever feels more comfortable. The types that are accepted will automatically translate from the specified ABI types in the app spec to an equivalent TypeScript type.

```ts
// ABI method which takes no args
client.send.noArgsMethod({ args: {} });
client.send.noArgsMethod({ args: [] });

// ABI method with args
client.send.otherMethod({ args: { arg1: 123, arg2: 'foo', arg3: new Uint8Array([1, 2, 3, 4]) } });
// Call an ABI method, passing args in as a tuple
client.send.yetAnotherMethod({ args: [1, 2, 'foo'] });
```

## Structs

If the method takes a struct as a parameter, or returns a struct as an output then it will automatically be allowed to be passed in and will be returned as the parsed struct object.

## Additional parameters

Each ABI method and bare call on the client allows the consumer to provide additional parameters as well as the core method / args / etc. parameters. This models the parameters that are available in the underlying [app factory / client](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/capabilities/app-client).

```ts
client.send.someMethod({
  args: {
    arg1: 123,
  },
  /* Additional parameters go here */
});

client.send.optIn.bare({
  /* Additional parameters go here */
});
```

## Composing transactions

Algorand allows multiple transactions to be composed into a single atomic transaction group to be committed (or rejected) as one.

### Using the fluent composer

The client exposes a fluent transaction composer which allows you to build up a group before sending it. The return values will be strongly typed based on the methods you add to the composer.

```ts
const result = await client
  .newGroup()
  .methodOne({ args: { arg1: 123 }, boxReferences: ['V'] })
  // Non-ABI transactions can still be added to the group
  .addTransaction(client.appClient.createTransaction.fundAppAccount({ amount: (5000).microAlgo() }))
  .methodTwo({ args: { arg1: 'foo' } })
  .execute();

// Strongly typed as the return type of methodOne
const resultOfMethodOne = result.returns[0];
// Strongly typed as the return type of methodTwo
const resultOfMethodTwo = result.returns[1];
```

### Manually with the TransactionComposer

Multiple transactions can also be composed using the `TransactionComposer` class.

```ts
const result = algorand
  .newGroup()
  .addAppCallMethodCall(client.params.methodOne({ args: { arg1: 123 }, boxReferences: ['V'] }))
  .addPayment(client.appClient.params.fundAppAccount({ amount: (5000).microAlgo() }))
  .addAppCallMethodCall(client.params.methodTwo({ args: { arg1: 'foo' } }))
  .execute();

// returns will contain a result object for each ABI method call in the transaction group
for (const { returnValue } of result.returns) {
  console.log(returnValue);
}
```

## State

You can access local, global and box storage state with any state values that are defined in the ARC-32 / ARC-56 app spec.

You can do this via the `state` property which has 3 sub-properties for the three different kinds of state: `state.global`, `state.local(address)`, `state.box`. Each one then has a series of methods defined for each registered key or map from the app spec.

Maps have a `value(key)` method to get a single value from the map by key and a `getMap()` method to return all box values as a map. Keys have a `{keyName}()` method to get the value for the key and there will also be a `getAll()` method to get an object will all key values.

The properties will return values of the corresponding TypeScript type for the type in the app spec and any structs will be parsed as the struct object.

```typescript
const factory = algorand.client.getTypedAppFactory(Arc56TestFactory, { defaultSender: 'SENDER' });

const { appClient: client } = await factory.send.create.createApplication({
  args: [],
  deployTimeParams: { someNumber: 1337n },
});

expect(await client.state.global.globalKey()).toBe(1337n);
expect(await anotherAppClient.state.global.globalKey()).toBe(1338n);
expect(await client.state.global.globalMap.value('foo')).toEqual({ foo: 13n, bar: 37n });

await client.appClient.fundAppAccount({ amount: microAlgos(1_000_000) });
await client.send.optIn.optInToApplication({ args: [], populateAppCallResources: true });

expect(await client.state.local(defaultSender).localKey()).toBe(1337n);
expect(await client.state.local(defaultSender).localMap.value('foo')).toBe('bar');
expect(await client.state.box.boxKey()).toBe('baz');
expect(
  await client.state.box.boxMap.value({
    add: { a: 1n, b: 2n },
    subtract: { a: 4n, b: 3n },
  }),
).toEqual({
  sum: 3n,
  difference: 1n,
});
```
