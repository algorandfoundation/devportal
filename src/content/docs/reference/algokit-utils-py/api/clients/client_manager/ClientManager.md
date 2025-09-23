---
title: algokit_utils.clients.client_manager.ClientManager
---

#### _class_ algokit_utils.clients.client_manager.ClientManager(clients_or_configs: [algokit_utils.models.network.AlgoClientConfigs](/reference/algokit-utils-py/api/models/network/algoclientconfigs/#algokit_utils.models.network.AlgoClientConfigs) | [AlgoSdkClients](#algokit_utils.clients.client_manager.AlgoSdkClients), algorand_client: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/algorand/algorandclient/#algokit_utils.algorand.AlgorandClient))

Manager for Algorand SDK clients.

Provides access to Algod, Indexer and KMD clients and helper methods for working with them.

- **Parameters:**
  - **clients_or_configs** – Either client instances or client configurations
  - **algorand_client** – AlgorandClient instance
- **Example:**
  ```pycon
  >>> # Algod only
  >>> client_manager = ClientManager(algod_client)
  >>> # Algod and Indexer
  >>> client_manager = ClientManager(algod_client, indexer_client)
  >>> # Algod config only
  >>> client_manager = ClientManager(ClientManager.get_algod_config_from_environment())
  >>> # Algod and Indexer config
  >>> client_manager = ClientManager(ClientManager.get_algod_config_from_environment(),
  ...     ClientManager.get_indexer_config_from_environment())
  ```

#### _property_ algod _: algosdk.v2client.algod.AlgodClient_

Returns an algosdk Algod API client.

- **Returns:**
  Algod client instance

#### _property_ indexer _: algosdk.v2client.indexer.IndexerClient_

Returns an algosdk Indexer API client.

- **Raises:**
  **ValueError** – If no Indexer client is configured
- **Returns:**
  Indexer client instance

#### _property_ indexer_if_present _: algosdk.v2client.indexer.IndexerClient | None_

Returns the Indexer client if configured, otherwise None.

- **Returns:**
  Indexer client instance or None

#### _property_ kmd _: algosdk.kmd.KMDClient_

Returns an algosdk KMD API client.

- **Raises:**
  **ValueError** – If no KMD client is configured
- **Returns:**
  KMD client instance

#### network() → [NetworkDetail](#algokit_utils.clients.client_manager.NetworkDetail)

Get details about the connected Algorand network.

- **Returns:**
  Network details including type and genesis information
- **Example:**
  ```pycon
  >>> client_manager = ClientManager(algod_client)
  >>> network_detail = client_manager.network()
  ```

#### is_localnet() → bool

Check if connected to a local network.

- **Returns:**
  True if connected to a local network

#### is_testnet() → bool

Check if connected to TestNet.

- **Returns:**
  True if connected to TestNet

#### is_mainnet() → bool

Check if connected to MainNet.

- **Returns:**
  True if connected to MainNet

#### get_testnet_dispenser(auth_token: str | None = None, request_timeout: int | None = None) → [algokit_utils.clients.dispenser_api_client.TestNetDispenserApiClient](/reference/algokit-utils-py/api/clients/dispenser_api_client/testnetdispenserapiclient/#algokit_utils.clients.dispenser_api_client.TestNetDispenserApiClient)

Get a TestNet dispenser API client.

- **Parameters:**
  - **auth_token** – Optional authentication token
  - **request_timeout** – Optional request timeout in seconds
- **Returns:**
  TestNet dispenser client instance

#### get_app_factory(app_spec: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract) | algokit_utils.\_legacy_v2.application_specification.ApplicationSpecification | str, app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, version: str | None = None, compilation_params: [algokit_utils.applications.app_client.AppClientCompilationParams](/reference/algokit-utils-py/api/applications/app_client/appclientcompilationparams/#algokit_utils.applications.app_client.AppClientCompilationParams) | None = None) → [algokit_utils.applications.app_factory.AppFactory](/reference/algokit-utils-py/api/applications/app_factory/appfactory/#algokit_utils.applications.app_factory.AppFactory)

Get an application factory for deploying smart contracts.

- **Parameters:**
  - **app_spec** – Application specification
  - **app_name** – Optional application name
  - **default_sender** – Optional default sender address
  - **default_signer** – Optional default transaction signer
  - **version** – Optional version string
  - **compilation_params** – Optional compilation parameters
- **Raises:**
  **ValueError** – If no Algorand client is configured
- **Returns:**
  Application factory instance

#### get_app_client_by_id(app_spec: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract) | algokit_utils.\_legacy_v2.application_specification.ApplicationSpecification | str, app_id: int, app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None) → [algokit_utils.applications.app_client.AppClient](/reference/algokit-utils-py/api/applications/app_client/appclient/#algokit_utils.applications.app_client.AppClient)

Get an application client for an existing application by ID.

- **Parameters:**
  - **app_spec** – Application specification
  - **app_id** – Application ID
  - **app_name** – Optional application name
  - **default_sender** – Optional default sender address
  - **default_signer** – Optional default transaction signer
  - **approval_source_map** – Optional approval program source map
  - **clear_source_map** – Optional clear program source map
- **Raises:**
  **ValueError** – If no Algorand client is configured
- **Returns:**
  Application client instance

#### get_app_client_by_network(app_spec: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract) | algokit_utils.\_legacy_v2.application_specification.ApplicationSpecification | str, app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None) → [algokit_utils.applications.app_client.AppClient](/reference/algokit-utils-py/api/applications/app_client/appclient/#algokit_utils.applications.app_client.AppClient)

Get an application client for an existing application by network.

- **Parameters:**
  - **app_spec** – Application specification
  - **app_name** – Optional application name
  - **default_sender** – Optional default sender address
  - **default_signer** – Optional default transaction signer
  - **approval_source_map** – Optional approval program source map
  - **clear_source_map** – Optional clear program source map
- **Raises:**
  **ValueError** – If no Algorand client is configured
- **Returns:**
  Application client instance

#### get_app_client_by_creator_and_name(creator_address: str, app_name: str, app_spec: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract) | algokit_utils.\_legacy_v2.application_specification.ApplicationSpecification | str, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, ignore_cache: bool | None = None, app_lookup_cache: [algokit_utils.applications.app_deployer.ApplicationLookup](/reference/algokit-utils-py/api/applications/app_deployer/applicationlookup/#algokit_utils.applications.app_deployer.ApplicationLookup) | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None) → [algokit_utils.applications.app_client.AppClient](/reference/algokit-utils-py/api/applications/app_client/appclient/#algokit_utils.applications.app_client.AppClient)

Get an application client by creator address and name.

- **Parameters:**
  - **creator_address** – Creator address
  - **app_name** – Application name
  - **app_spec** – Application specification
  - **default_sender** – Optional default sender address
  - **default_signer** – Optional default transaction signer
  - **ignore_cache** – Optional flag to ignore cache
  - **app_lookup_cache** – Optional app lookup cache
  - **approval_source_map** – Optional approval program source map
  - **clear_source_map** – Optional clear program source map
- **Returns:**
  Application client instance

#### _static_ get_algod_client(config: [algokit_utils.models.network.AlgoClientNetworkConfig](/reference/algokit-utils-py/api/models/network/algoclientnetworkconfig/#algokit_utils.models.network.AlgoClientNetworkConfig)) → algosdk.v2client.algod.AlgodClient

Get an Algod client from config or environment.

- **Parameters:**
  **config** – Optional client configuration
- **Returns:**
  Algod client instance

#### _static_ get_algod_client_from_environment() → algosdk.v2client.algod.AlgodClient

Get an Algod client from environment variables.

- **Returns:**
  Algod client instance

#### _static_ get_kmd_client(config: [algokit_utils.models.network.AlgoClientNetworkConfig](/reference/algokit-utils-py/api/models/network/algoclientnetworkconfig/#algokit_utils.models.network.AlgoClientNetworkConfig)) → algosdk.kmd.KMDClient

Get a KMD client from config or environment.

- **Parameters:**
  **config** – Optional client configuration
- **Returns:**
  KMD client instance

#### _static_ get_kmd_client_from_environment() → algosdk.kmd.KMDClient

Get a KMD client from environment variables.

- **Returns:**
  KMD client instance

#### _static_ get_indexer_client(config: [algokit_utils.models.network.AlgoClientNetworkConfig](/reference/algokit-utils-py/api/models/network/algoclientnetworkconfig/#algokit_utils.models.network.AlgoClientNetworkConfig)) → algosdk.v2client.indexer.IndexerClient

Get an Indexer client from config or environment.

- **Parameters:**
  **config** – Optional client configuration
- **Returns:**
  Indexer client instance

#### _static_ get_indexer_client_from_environment() → algosdk.v2client.indexer.IndexerClient

Get an Indexer client from environment variables.

- **Returns:**
  Indexer client instance

#### _static_ genesis_id_is_localnet(genesis_id: str | None) → bool

Check if a genesis ID indicates a local network.

- **Parameters:**
  **genesis_id** – Genesis ID to check
- **Returns:**
  True if genesis ID indicates a local network
- **Example:**
  ```pycon
  >>> ClientManager.genesis_id_is_localnet("devnet-v1")
  ```

#### get_typed_app_client_by_creator_and_name(typed_client: type[TypedAppClientT], \*, creator_address: str, app_name: str, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, ignore_cache: bool | None = None, app_lookup_cache: [algokit_utils.applications.app_deployer.ApplicationLookup](/reference/algokit-utils-py/api/applications/app_deployer/applicationlookup/#algokit_utils.applications.app_deployer.ApplicationLookup) | None = None) → TypedAppClientT

Get a typed application client by creator address and name.

- **Parameters:**
  - **typed_client** – Typed client class
  - **creator_address** – Creator address
  - **app_name** – Application name
  - **default_sender** – Optional default sender address
  - **default_signer** – Optional default transaction signer
  - **ignore_cache** – Optional flag to ignore cache
  - **app_lookup_cache** – Optional app lookup cache
- **Raises:**
  **ValueError** – If no Algorand client is configured
- **Returns:**
  Typed application client instance
- **Example:**
  ```pycon
  >>> client_manager = ClientManager(algod_client)
  >>> typed_app_client = client_manager.get_typed_app_client_by_creator_and_name(
  ...     typed_client=MyAppClient,
  ...     creator_address="creator_address",
  ...     app_name="app_name",
  ... )
  ```

#### get_typed_app_client_by_id(typed_client: type[TypedAppClientT], \*, app_id: int, app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None) → TypedAppClientT

Get a typed application client by ID.

- **Parameters:**
  - **typed_client** – Typed client class
  - **app_id** – Application ID
  - **app_name** – Optional application name
  - **default_sender** – Optional default sender address
  - **default_signer** – Optional default transaction signer
  - **approval_source_map** – Optional approval program source map
  - **clear_source_map** – Optional clear program source map
- **Raises:**
  **ValueError** – If no Algorand client is configured
- **Returns:**
  Typed application client instance
- **Example:**
  ```pycon
  >>> client_manager = ClientManager(algod_client)
  >>> typed_app_client = client_manager.get_typed_app_client_by_id(
  ...     typed_client=MyAppClient,
  ...     app_id=1234567890,
  ... )
  ```

#### get_typed_app_client_by_network(typed_client: type[TypedAppClientT], \*, app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None) → TypedAppClientT

Returns a new typed client, resolves the app ID for the current network.

Uses pre-determined network-specific app IDs specified in the ARC-56 app spec.
If no IDs are in the app spec or the network isn’t recognised, an error is thrown.

- **Parameters:**
  - **typed_client** – The typed client class to instantiate
  - **app_name** – Optional application name
  - **default_sender** – Optional default sender address
  - **default_signer** – Optional default transaction signer
  - **approval_source_map** – Optional approval program source map
  - **clear_source_map** – Optional clear program source map
- **Raises:**
  **ValueError** – If no Algorand client is configured
- **Returns:**
  The typed client instance
- **Example:**
  ```pycon
  >>> client_manager = ClientManager(algod_client)
  >>> typed_app_client = client_manager.get_typed_app_client_by_network(
  ...     typed_client=MyAppClient,
  ...     app_name="app_name",
  ... )
  ```

#### get_typed_app_factory(typed_factory: type[TypedFactoryT], \*, app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, version: str | None = None, compilation_params: [algokit_utils.applications.app_client.AppClientCompilationParams](/reference/algokit-utils-py/api/applications/app_client/appclientcompilationparams/#algokit_utils.applications.app_client.AppClientCompilationParams) | None = None) → TypedFactoryT

Get a typed application factory.

- **Parameters:**
  - **typed_factory** – Typed factory class
  - **app_name** – Optional application name
  - **default_sender** – Optional default sender address
  - **default_signer** – Optional default transaction signer
  - **version** – Optional version string
  - **compilation_params** – Optional compilation parameters
- **Raises:**
  **ValueError** – If no Algorand client is configured
- **Returns:**
  Typed application factory instance
- **Example:**
  ```pycon
  >>> client_manager = ClientManager(algod_client)
  >>> typed_app_factory = client_manager.get_typed_app_factory(
  ...     typed_factory=MyAppFactory,
  ...     app_name="app_name",
  ... )
  ```

#### _static_ get_config_from_environment_or_localnet() → [algokit_utils.models.network.AlgoClientConfigs](/reference/algokit-utils-py/api/models/network/algoclientconfigs/#algokit_utils.models.network.AlgoClientConfigs)

Retrieve client configuration from environment variables or fallback to localnet defaults.

If ALGOD_SERVER is set in environment variables, it will use environment configuration,
otherwise it will use default localnet configuration.

- **Returns:**
  Configuration for algod, indexer, and optionally kmd
- **Example:**
  ```pycon
  >>> client_manager = ClientManager(algod_client)
  >>> config = client_manager.get_config_from_environment_or_localnet()
  ```

#### _static_ get_default_localnet_config(config_or_port: Literal['algod', 'indexer', 'kmd'] | int) → [algokit_utils.models.network.AlgoClientNetworkConfig](/reference/algokit-utils-py/api/models/network/algoclientnetworkconfig/#algokit_utils.models.network.AlgoClientNetworkConfig)

Get default configuration for local network services.

- **Parameters:**
  **config_or_port** – Service name or port number
- **Returns:**
  Client configuration for local network
- **Example:**
  ```pycon
  >>> client_manager = ClientManager(algod_client)
  >>> config = client_manager.get_default_localnet_config("algod")
  ```

#### _static_ get_algod_config_from_environment() → [algokit_utils.models.network.AlgoClientNetworkConfig](/reference/algokit-utils-py/api/models/network/algoclientnetworkconfig/#algokit_utils.models.network.AlgoClientNetworkConfig)

Retrieve the algod configuration from environment variables.
Will raise an error if ALGOD_SERVER environment variable is not set

- **Returns:**
  Algod client configuration
- **Example:**
  ```pycon
  >>> client_manager = ClientManager(algod_client)
  >>> config = client_manager.get_algod_config_from_environment()
  ```

#### _static_ get_indexer_config_from_environment() → [algokit_utils.models.network.AlgoClientNetworkConfig](/reference/algokit-utils-py/api/models/network/algoclientnetworkconfig/#algokit_utils.models.network.AlgoClientNetworkConfig)

Retrieve the indexer configuration from environment variables.
Will raise an error if INDEXER_SERVER environment variable is not set

- **Returns:**
  Indexer client configuration
- **Example:**
  ```pycon
  >>> client_manager = ClientManager(algod_client)
  >>> config = client_manager.get_indexer_config_from_environment()
  ```

#### _static_ get_kmd_config_from_environment() → [algokit_utils.models.network.AlgoClientNetworkConfig](/reference/algokit-utils-py/api/models/network/algoclientnetworkconfig/#algokit_utils.models.network.AlgoClientNetworkConfig)

Retrieve the kmd configuration from environment variables.

- **Returns:**
  KMD client configuration
- **Example:**
  ```pycon
  >>> client_manager = ClientManager(algod_client)
  >>> config = client_manager.get_kmd_config_from_environment()
  ```

#### _static_ get_algonode_config(network: Literal['testnet', 'mainnet'], config: Literal['algod', 'indexer']) → [algokit_utils.models.network.AlgoClientNetworkConfig](/reference/algokit-utils-py/api/models/network/algoclientnetworkconfig/#algokit_utils.models.network.AlgoClientNetworkConfig)

Returns the Algorand configuration to point to the free tier of the AlgoNode service.

- **Parameters:**
  - **network** – Which network to connect to - TestNet or MainNet
  - **config** – Which algod config to return - Algod or Indexer
- **Returns:**
  Configuration for the specified network and service
- **Example:**
  ```pycon
  >>> client_manager = ClientManager(algod_client)
  >>> config = client_manager.get_algonode_config("testnet", "algod")
  ```
