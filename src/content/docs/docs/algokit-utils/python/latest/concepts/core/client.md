---
title: "Client management"
description: "Client management is one of the core capabilities provided by AlgoKit Utils. It allows you to create (auto-retry) [algod](https://dev.algorand.co/reference/rest-apis/algod), [indexer](https://dev.algorand.co/reference/rest-apis/indexer) and [kmd](https://dev.algorand.co/reference/rest-apis/kmd) clients against various networks resolved from environment or specified configuration."
---

Client management is one of the core capabilities provided by AlgoKit Utils. It allows you to create (auto-retry) [algod](https://dev.algorand.co/reference/rest-apis/algod), [indexer](https://dev.algorand.co/reference/rest-apis/indexer) and [kmd](https://dev.algorand.co/reference/rest-apis/kmd) clients against various networks resolved from environment or specified configuration.

To see some usage examples check out the [automated tests](https://github.com/algorandfoundation/algokit-utils-py/blob/main/tests/clients/).

## `ClientManager`

The `ClientManager` is a class that is used to manage client instances.

To get an instance of `ClientManager` you can get it from either [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/client/algorand-client/) via `algorand.client` or instantiate it directly:

```python
from algokit_utils import ClientManager, AlgoSdkClients, AlgoClientConfigs

# Algod client only
client_manager = ClientManager(AlgoSdkClients(algod=algod_client), algorand_client)
# All clients
client_manager = ClientManager(AlgoSdkClients(algod=algod_client, indexer=indexer_client, kmd=kmd_client), algorand_client)
# Algod config only
client_manager = ClientManager(AlgoClientConfigs(algod_config=algod_config, indexer_config=None, kmd_config=None), algorand_client)
# All client configs
client_manager = ClientManager(AlgoClientConfigs(algod_config=algod_config, indexer_config=indexer_config, kmd_config=kmd_config), algorand_client)
```

## Network configuration

The network configuration is specified using the `AlgoClientNetworkConfig` dataclass.

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
- `ClientManager.get_algonode_config(network, config)` - Loads an Algod or Indexer config against [AlgoNode free tier](https://nodely.io/docs/free/start) to either MainNet or TestNet, where `config` is `"algod"` or `"indexer"`
- `ClientManager.get_default_localnet_config(config_or_port)` - Loads an Algod, Indexer or Kmd config against [LocalNet](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/localnet.md) using the default configuration, where `config_or_port` is `"algod"`, `"indexer"`, `"kmd"`, or a port number

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

Once you have a `ClientManager` instance, you can access the SDK clients for the various Algorand APIs from it (expressed here as `algorand.client` to denote the syntax via an [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/client/algorand-client/)):

```python
algorand = AlgorandClient.default_localnet()

algod_client = algorand.client.algod
indexer_client = algorand.client.indexer
kmd_client = algorand.client.kmd
```

If the method to create the `ClientManager` doesn't configure indexer or kmd ([both of which are optional](#client-management)), then accessing those clients will trigger an error:

```python
algorand = AlgorandClient.from_clients(algod=algod_client)

algod_client = algorand.client.algod  # OK
algorand.client.indexer  # Raises error
algorand.client.kmd  # Raises error
```

### Creating an app client instance

See [how to create app clients via ClientManager via AlgorandClient](/docs/algokit-utils/python/latest/concepts/core/building/app-client/#dynamically-creating-clients-for-a-given-app-spec).

### Creating a TestNet dispenser API client instance

You can also create a [TestNet dispenser API client instance](/docs/algokit-utils/python/latest/concepts/core/advanced/dispenser-client/) from `ClientManager` too.

## Automatic retry

The Algod client returned by AlgoKit Utils (via `ClientManager.get_algod_client()` or `AlgorandClient`) has built-in retry logic that automatically retries transient HTTP failures with exponential backoff.

## Network information

To get information about the current network you are connected to, you can use the `network()` method on `ClientManager` or the `is_{network}()` methods (which in turn call `network()`) as shown below (expressed here as `algorand.client` to denote the syntax via an [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/client/algorand-client/)):

```python
algorand = AlgorandClient.default_localnet()

network = algorand.client.network()
is_mainnet = algorand.client.is_mainnet()
is_testnet = algorand.client.is_testnet()
is_localnet = algorand.client.is_localnet()
```

The first time `network()` is called it will make a HTTP call to algod to get the network parameters, but from then on it will be cached within that `ClientManager` instance for subsequent calls.
