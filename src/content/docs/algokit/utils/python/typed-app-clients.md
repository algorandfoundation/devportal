---
title: Typed application clients
---

Typed application clients are automatically generated, typed Python deployment and invocation clients for smart contracts that have a defined [ARC-56](https://github.com/algorandfoundation/ARCs/pull/258) or [ARC-32](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0032) application specification so that the development experience is easier with less upskill ramp-up and less deployment errors. These clients give you a type-safe, intellisense-driven experience for invoking the smart contract.

Typed application clients are the recommended way of interacting with smart contracts. If you don’t have/want a typed client, but have an ARC-56/ARC-32 app spec then you can use the [non-typed application clients](app-client) and if you want to call a smart contract you don’t have an app spec file for you can use the underlying [app management](app) and [app deployment](app-deploy) functionality to manually construct transactions.

## Generating an app spec

You can generate an app spec file:

- Using [Algorand Python](https://algorandfoundation.github.io/puya/#quick-start)
- Using [TEALScript](https://tealscript.netlify.app/tutorials/hello-world/0004-artifacts/)
- By hand by following the specification [ARC-56](https://github.com/algorandfoundation/ARCs/pull/258)/[ARC-32](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0032)
- Using [Beaker](https://algorand-devrel.github.io/beaker/html/usage.html) (PyTEAL) _(DEPRECATED)_

## Generating a typed client

To generate a typed client from an app spec file you can use [AlgoKit CLI](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/generate#1-typed-clients):

```default
> algokit generate client application.json --output /absolute/path/to/client.py
```

Note: AlgoKit Utils >= 3.0.0 is compatible with the older 1.x.x generated typed clients, however if you want to utilise the new features or leverage ARC-56 support, you will need to generate using >= 2.x.x. See [AlgoKit CLI generator version pinning](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/generate#version-pinning) for more information on how to lock to a specific version.

## Getting a typed client instance

To get an instance of a typed client you can use an [`AlgorandClient`](algorand-client) instance or a typed app [`Factory`]() instance.

The approach to obtaining a client instance depends on how many app clients you require for a given app spec and if the app has already been deployed:

### App is deployed

#### Resolve App by ID

**Single Typed App Client Instance:**

```python
# Typed: Using the AlgorandClient extension method
typed_client = algorand.client.get_typed_app_client_by_id(
    MyContractClient,  # Generated typed client class
    app_id=1234,
    # ...
)
# or Typed: Using the generated client class directly
typed_client = MyContractClient(
    algorand,
    app_id=1234,
    # ...
)
```

**Multiple Typed App Client Instances:**

```python
# Typed: Using a typed factory to get multiple client instances
typed_client1 = typed_factory.get_app_client_by_id(
    app_id=1234,
    # ...
)
typed_client2 = typed_factory.get_app_client_by_id(
    app_id=4321,
    # ...
)
```

#### Resolve App by Creator and Name

**Single Typed App Client Instance:**

```python
# Typed: Using the AlgorandClient extension method
typed_client = algorand.client.get_typed_app_client_by_creator_and_name(
    MyContractClient,  # Generated typed client class
    creator_address="CREATORADDRESS",
    app_name="contract-name",
    # ...
)
# or Typed: Using the static method on the generated client class
typed_client = MyContractClient.from_creator_and_name(
    algorand,
    creator_address="CREATORADDRESS",
    app_name="contract-name",
    # ...
)
```

**Multiple Typed App Client Instances:**

```python
# Typed: Using a typed factory to get multiple client instances by name
typed_client1 = typed_factory.get_app_client_by_creator_and_name(
    creator_address="CREATORADDRESS",
    app_name="contract-name",
    # ...
)
typed_client2 = typed_factory.get_app_client_by_creator_and_name(
    creator_address="CREATORADDRESS",
    app_name="contract-name-2",
    # ...
)
```

### App is not deployed

#### Deploy a New App

```python
# Typed: For typed clients, you call a specific creation method rather than generic 'create'
typed_client, response = typed_factory.send.create.{METHODNAME}(
    # ...
)
```

#### Deploy or Resolve App Idempotently by Creator and Name

```python
# Typed: Using the deploy method on a typed factory
typed_client, response = typed_factory.deploy(
    on_update=OnUpdate.UpdateApp,
    on_schema_break=OnSchemaBreak.ReplaceApp,
    # The parameters for create/update/delete would be specific to your generated client
    app_name="contract-name",
    # ...
)
```

### Creating a typed factory instance

If your scenario calls for an app factory, you can create one using the below:

```python
# Typed: Using the AlgorandClient extension method
typed_factory = algorand.client.get_typed_app_factory(MyContractFactory)  # Generated factory class
# or Typed: Using the factory class constructor directly
typed_factory = MyContractFactory(algorand)
```

## Client usage

See the [official usage docs](https://github.com/algorandfoundation/algokit-client-generator-py/blob/main/docs/usage) for full details about typed clients.

Below is a realistic example that deploys a contract, funds it if newly created, and calls a `"hello"` method:

```python
# Typed: Complete example using a typed application client
import algokit_utils
from artifacts.hello_world.hello_world_client import (
    HelloArgs,  # Generated args class
    HelloWorldFactory,  # Generated factory class
)

# Get Algorand client from environment variables
algorand = algokit_utils.AlgorandClient.from_environment()
deployer = algorand.account.from_environment("DEPLOYER")

# Create the typed app factory
typed_factory = algorand.client.get_typed_app_factory(
    HelloWorldFactory, default_sender=deployer.address
)

# Deploy idempotently - creates if it doesn't exist or updates if changed
typed_client, result = typed_factory.deploy(
    on_update=algokit_utils.OnUpdate.AppendApp,
    on_schema_break=algokit_utils.OnSchemaBreak.AppendApp,
)

# Fund the app with 1 ALGO if it's newly created
if result.operation_performed in [
    algokit_utils.OperationPerformed.Create,
    algokit_utils.OperationPerformed.Replace,
]:
    algorand.send.payment(
        algokit_utils.PaymentParams(
            amount=algokit_utils.AlgoAmount(algo=1),
            sender=deployer.address,
            receiver=typed_client.app_address,
        )
    )

# Call the hello method on the smart contract
name = "world"
response = typed_client.send.hello(args=HelloArgs(name=name))  # Using generated args class
```
