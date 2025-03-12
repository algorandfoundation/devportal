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

The approach to obtaining a client instance depends on how many app clients you require for a given app spec and if the app has already been deployed, which is summarised below:

### App is deployed

<table>
<thead>
<tr>
<th colspan="2">Resolve App by ID</th>
<th colspan="2">Resolve App by Creator and Name</th>
</tr>
<tr>
<th>Single App Client Instance</th>
<th>Multiple App Client Instances</th>
<th>Single App Client Instance</th>
<th>Multiple App Client Instances</th>
</tr>
</thead>
<tbody>
<tr>
<td>
```python
app_client = algorand.client.get_typed_app_client_by_id(MyContractClient, {
  app_id=1234,
  # ...
})
# or
app_client = MyContractClient({
  algorand,
  app_id=1234,
  # ...
})
```

</td>
<td>
```python
app_client1 = factory.get_app_client_by_id(
  app_id=1234,
  # ...
)
app_client2 = factory.get_app_client_by_id(
  app_id=4321,
  # ...
)
```

</td>
<td>
```python
app_client = algorand.client.get_typed_app_client_by_creator_and_name(
  MyContractClient,
  creator_address="CREATORADDRESS",
  app_name="contract-name",
  # ...
)
# or
app_client = MyContractClient.from_creator_and_name(
  algorand,
  creator_address="CREATORADDRESS",
  app_name="contract-name",
  # ...
)
```

</td>
<td>
```python
app_client1 = factory.get_app_client_by_creator_and_name(
  creator_address="CREATORADDRESS",
  app_name="contract-name",
  # ...
)
app_client2 = factory.get_app_client_by_creator_and_name(
  creator_address="CREATORADDRESS",
  app_name="contract-name-2",
  # ...
)
```

</td>
</tr>
</tbody>
</table>

To understand the difference between resolving by ID vs by creator and name see the underlying [app client documentation](app-client#appclient).

### App is not deployed

<table>
<thead>
<tr>
<th>Deploy a New App</th>
<th>Deploy or Resolve App Idempotently by Creator and Name</th>
</tr>
</thead>
<tbody>
<tr>
<td>
```python
app_client, response = factory.deploy(
  args=[],
  # ...
)
# or
app_client, response = factory.send.create.METHODNAME(
  args=[],
  # ...
)
```

</td>
<td>
```python
app_client, response = factory.deploy(
  app_name="contract-name",
  # ...
)
```

</td>
</tr>
</tbody>
</table>

### Creating a typed factory instance

If your scenario calls for an app factory, you can create one using the below:

```python
factory = algorand.client.get_typed_app_factory(MyContractFactory)
# or
factory = MyContractFactory(algorand)
```

## Client usage

See the [official usage docs](https://github.com/algorandfoundation/algokit-client-generator-py/blob/main/docs/usage) for full details.

For a simple example that deploys a contract and calls a `"hello"` method, see below:

```python
# A similar working example can be seen in the AlgoKit init production smart contract templates, when using Python deployment
# In this case the generated factory is called `HelloWorldAppFactory` and is in `./artifacts/HelloWorldApp/client.py`
from artifacts.hello_world_app.client import HelloWorldAppClient, HelloArgs
from algokit_utils import AlgorandClient

# These require environment variables to be present, or it will retrieve from default LocalNet
algorand = AlgorandClient.from_environment()
deployer = algorand.account.from_environment("DEPLOYER", AlgoAmount.from_algo(1))

# Create the typed app factory
factory = algorand.client.get_typed_app_factory(HelloWorldAppFactory,
  creator_address=deployer,
  default_sender=deployer,
)

# Create the app and get a typed app client for the created app (note: this creates a new instance of the app every time,
#  you can use .deploy() to deploy idempotently if the app wasn't previously
#  deployed or needs to be updated if that's allowed)
app_client, response = factory.send.create()

# Make a call to an ABI method and print the result
response = app_client.send.hello(args=HelloArgs(name="world"))
print(response)
```
