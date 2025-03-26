---
title: Client management
---

Client management is one of the core capabilities provided by AlgoKit Utils. It allows you to create (auto-retry) [algod](https://dev.algorand.co/reference/rest-apis/algod), [indexer](https://dev.algorand.co/reference/rest-apis/indexer) and [kmd](https://dev.algorand.co/reference/rest-apis/kmd) clients against various networks resolved from environment or specified configuration.

Any AlgoKit Utils function that needs one of these clients will take the underlying algosdk classes (`algosdk.v2client.algod.AlgodClient`, `algosdk.v2client.indexer.IndexerClient`, `algosdk.kmd.KMDClient`) so inline with the [Modularity](../index#id1) principle you can use existing logic to get instances of these clients without needing to use the Client management capability if you prefer.

To see some usage examples check out the [automated tests](https://github.com/algorandfoundation/algokit-utils-py/blob/main/tests/test_network_clients.py).

## `ClientManager`

The `ClientManager` is a class that is used to manage client instances.

To get an instance of `ClientManager` you can instantiate it directly:

```python
from algokit_utils import ClientManager, AlgoSdkClients, AlgoClientConfigs
from algosdk.v2client.algod import AlgodClient

# Using AlgoSdkClients
algod_client = AlgodClient(...)
algorand_client = ...  # Get AlgorandClient instance from somewhere
clients = AlgoSdkClients(algod=algod_client, indexer=indexer_client, kmd=kmd_client)
client_manager = ClientManager(clients, algorand_client)

# Using AlgoClientConfigs
algod_config = AlgoClientNetworkConfig(server="https://...", token="")
configs = AlgoClientConfigs(algod_config=algod_config)
client_manager = ClientManager(configs, algorand_client)
```

## Network configuration

The network configuration is specified using the `AlgoClientConfig` type. This same type is used to specify the config for `algod`, `indexer`, and `kmd` [SDK clients](https://github.com/algorand/py-algorand-sdk).

There are a number of ways to produce one of these configuration objects:

- Manually specifying a dataclass, e.g.

  ```python
  from algokit_utils import AlgoClientNetworkConfig

  config = AlgoClientNetworkConfig(
      server="https://myalgodnode.com",
      token="SECRET_TOKEN"  # optional
  )
  ```

- `ClientManager.get_config_from_environment_or_localnet()` - Loads the Algod client config, the Indexer client config and the Kmd config from well-known environment variables or if not found then default LocalNet; this is useful to have code that can work across multiple blockchain environments (including LocalNet), without having to change
- `ClientManager.get_algod_config_from_environment()` - Loads an Algod client config from well-known environment variables
- `ClientManager.get_indexer_config_from_environment()` - Loads an Indexer client config from well-known environment variables; useful to have code that can work across multiple blockchain environments (including LocalNet), without having to change
- `ClientManager.get_algonode_config(network)` - Loads an Algod or indexer config against [AlgoNode free tier](https://nodely.io/docs/free/start) to either MainNet or TestNet
- `ClientManager.get_default_localnet_config()` - Loads an Algod, Indexer or Kmd config against [LocalNet](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/localnet) using the default configuration

## Clients

### Creating an SDK client instance

Once you have the configuration for a client, to get a new client you can use the following functions:

- `ClientManager.get_algod_client(config)` - Returns an Algod client for the given configuration; the client automatically retries on transient HTTP errors
- `ClientManager.get_indexer_client(config)` - Returns an Indexer client for given configuration
- `ClientManager.get_kmd_client(config)` - Returns a Kmd client for the given configuration

You can also shortcut needing to write the likes of `ClientManager.get_algod_client(ClientManager.get_algod_config_from_environment())` with environment shortcut methods:

- `ClientManager.get_algod_client_from_environment()` - Returns an Algod client by loading the config from environment variables
- `ClientManager.get_indexer_client_from_environment()` - Returns an indexer client by loading the config from environment variables
- `ClientManager.get_kmd_client_from_environment()` - Returns a kmd client by loading the config from environment variables

### Accessing SDK clients via ClientManager instance

Once you have a `ClientManager` instance, you can access the SDK clients:

```python
client_manager = ClientManager(algod=algod_client, indexer=indexer_client, kmd=kmd_client)

algod_client = client_manager.algod
indexer_client = client_manager.indexer
kmd_client = client_manager.kmd
```

If the method to create the `ClientManager` doesn’t configure indexer or kmd (both of which are optional), then accessing those clients will trigger an error.

### Creating a TestNet dispenser API client instance

You can also create a [TestNet dispenser API client instance](dispenser-client) from `ClientManager` too.

## Automatic retry

When receiving an Algod or Indexer client from AlgoKit Utils, it will be a special wrapper client that handles retrying transient failures.

## Network information

You can get information about the current network you are connected to:

```python
# Get network information
network = client_manager.network()
print(f"Is mainnet: {network.is_mainnet}")
print(f"Is testnet: {network.is_testnet}")
print(f"Is localnet: {network.is_localnet}")
print(f"Genesis ID: {network.genesis_id}")
print(f"Genesis hash: {network.genesis_hash}")

# Convenience methods
is_mainnet = client_manager.is_mainnet()
is_testnet = client_manager.is_testnet()
is_localnet = client_manager.is_localnet()
```

The first time `network()` is called it will make a HTTP call to algod to get the network parameters, but from then on it will be cached within that `ClientManager` instance for subsequent calls.
