---
title: 'algokit_utils.algorand'
---

<div class="api-ref">

# algokit_utils.algorand

## Classes

| [`AlgorandClient`](#algokit_utils.algorand.AlgorandClient) | A client that brokers easy access to Algorand functionality. |
| ---------------------------------------------------------- | ------------------------------------------------------------ |

## Module Contents

### _class_ AlgorandClient(config: [AlgoClientConfigs](/docs/algokit-utils/python/latest/api/algokit_utils/models/network/#algokit_utils.models.network.AlgoClientConfigs) | [AlgoSdkClients](/docs/algokit-utils/python/latest/api/algokit_utils/clients/client_manager/#algokit_utils.clients.client_manager.AlgoSdkClients))

A client that brokers easy access to Algorand functionality.

#### set_default_validity_window(validity_window: int) → Self

Sets the default validity window for transactions.

- **Parameters:**
  **validity_window** – The number of rounds between the first and last valid rounds
- **Returns:**
  The AlgorandClient so method calls can be chained
- **Example:**
  ```python
  algorand = AlgorandClient.mainnet().set_default_validity_window(1000);
  ```

#### set_default_signer(signer: TransactionSigner | AddressWithTransactionSigner) → Self

Sets the default signer to use if no other signer is specified.

- **Parameters:**
  **signer** – The signer to use, either a TransactionSigner or an AddressWithTransactionSigner
- **Returns:**
  The AlgorandClient so method calls can be chained
- **Example:**
  ```python
  signer = account_manager.random()  # Returns AddressWithSigners
  algorand = AlgorandClient.mainnet().set_default_signer(signer)
  ```

#### set_signer(sender: str, signer: TransactionSigner) → Self

Tracks the given account for later signing.

- **Parameters:**
  - **sender** – The sender address to use this signer for
  - **signer** – The signer to sign transactions with for the given sender
- **Returns:**
  The AlgorandClient so method calls can be chained
- **Example:**
  ```python
  account = account_manager.random()  # Returns AddressWithSigners
  algorand = AlgorandClient.mainnet().set_signer(account.addr, account.signer)
  ```

#### set_signer_from_account(signer: AddressWithTransactionSigner) → Self

Sets the default signer to use if no other signer is specified.

- **Parameters:**
  **signer** – The signer to use, either a TransactionSigner or an AddressWithTransactionSigner
- **Returns:**
  The AlgorandClient so method calls can be chained
- **Example:**
  ```python
  accountManager = AlgorandClient.mainnet()
  accountManager.set_signer_from_account(AddressWithSigners(addr=..., signer=...))
  accountManager.set_signer_from_account(LogicSigAccount(logic=..., args=...))
  accountManager.set_signer_from_account(account_manager.random())  # AddressWithSigners
  accountManager.set_signer_from_account(MultisigAccount(metadata, sub_signers))
  accountManager.set_signer_from_account(account)
  ```

#### set_suggested_params_cache(suggested_params: SuggestedParams, until: float | None = None) → Self

Sets a cache value to use for suggested params.

- **Parameters:**
  - **suggested_params** – The suggested params to use
  - **until** – A timestamp until which to cache, or if not specified then the timeout is used
- **Returns:**
  The AlgorandClient so method calls can be chained
- **Example:**
  ```python
  algorand = AlgorandClient.mainnet().set_suggested_params_cache(suggested_params, time.time() + 3.6e6)
  ```

#### set_suggested_params_cache_timeout(timeout: int) → Self

Sets the timeout for caching suggested params.

- **Parameters:**
  **timeout** – The timeout in milliseconds
- **Returns:**
  The AlgorandClient so method calls can be chained
- **Example:**
  ```python
  algorand = AlgorandClient.mainnet().set_suggested_params_cache_timeout(10_000)
  ```

#### get_suggested_params() → SuggestedParams

Get suggested params for a transaction (either cached or from algod if the cache is stale or empty)

- **Example:**
  ```python
  algorand = AlgorandClient.mainnet().get_suggested_params()
  ```

#### register_error_transformer(transformer: ErrorTransformer) → Self

Register a function that will be used to transform an error caught when simulating or executing
composed transaction groups made from new_group

- **Parameters:**
  **transformer** – The error transformer function
- **Returns:**
  The AlgorandClient so you can chain method calls

#### unregister_error_transformer(transformer: ErrorTransformer) → Self

Unregister an error transformer function

- **Parameters:**
  **transformer** – The error transformer function to remove
- **Returns:**
  The AlgorandClient so you can chain method calls

#### new_group() → [TransactionComposer](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_composer/#algokit_utils.transactions.transaction_composer.TransactionComposer)

Start a new TransactionComposer transaction group

- **Example:**
  ```python
  composer = AlgorandClient.mainnet().new_group()
  result = composer.add_transaction(payment).send()
  ```

#### _property_ client _: [ClientManager](/docs/algokit-utils/python/latest/api/algokit_utils/clients/client_manager/#algokit_utils.clients.client_manager.ClientManager)_

Get clients, including algosdk clients and app clients.

- **Example:**
  ```python
  clientManager = AlgorandClient.mainnet().client
  ```

#### _property_ account _: [AccountManager](/docs/algokit-utils/python/latest/api/algokit_utils/accounts/account_manager/#algokit_utils.accounts.account_manager.AccountManager)_

Get or create accounts that can sign transactions.

- **Example:**
  ```python
  accountManager = AlgorandClient.mainnet().account
  ```

#### _property_ asset _: [AssetManager](/docs/algokit-utils/python/latest/api/algokit_utils/assets/asset_manager/#algokit_utils.assets.asset_manager.AssetManager)_

Get or create assets.

- **Example:**
  ```python
  assetManager = AlgorandClient.mainnet().asset
  ```

#### _property_ app _: [AppManager](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_manager/#algokit_utils.applications.app_manager.AppManager)_

Get or create applications.

- **Example:**
  ```python
  appManager = AlgorandClient.mainnet().app
  ```

#### _property_ app_deployer _: [AppDeployer](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_deployer/#algokit_utils.applications.app_deployer.AppDeployer)_

Get or create applications.

- **Example:**
  ```python
  appDeployer = AlgorandClient.mainnet().app_deployer
  ```

#### _property_ send _: [AlgorandClientTransactionSender](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.AlgorandClientTransactionSender)_

Methods for sending a transaction and waiting for confirmation

- **Example:**
  ```python
  result = AlgorandClient.mainnet().send.payment(
      PaymentParams(
          sender="SENDERADDRESS",
          receiver="RECEIVERADDRESS",
          amount=AlgoAmount(algo=1)
      )
  )
  ```

#### _property_ create_transaction _: [AlgorandClientTransactionCreator](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_creator/#algokit_utils.transactions.transaction_creator.AlgorandClientTransactionCreator)_

Methods for building transactions

- **Example:**
  ```python
  transaction = AlgorandClient.mainnet().create_transaction.payment(
  PaymentParams(
   sender="SENDERADDRESS",
   receiver="RECEIVERADDRESS",
   amount=AlgoAmount(algo=1)
  ))
  ```

#### _static_ default_localnet() → [AlgorandClient](#algokit_utils.algorand.AlgorandClient)

Returns an AlgorandClient pointing at default LocalNet ports and API token.

- **Returns:**
  The AlgorandClient
- **Example:**
  ```python
  algorand = AlgorandClient.default_localnet()
  ```

#### _static_ testnet() → [AlgorandClient](#algokit_utils.algorand.AlgorandClient)

Returns an AlgorandClient pointing at TestNet using AlgoNode.

- **Returns:**
  The AlgorandClient
- **Example:**
  ```python
  algorand = AlgorandClient.testnet()
  ```

#### _static_ mainnet() → [AlgorandClient](#algokit_utils.algorand.AlgorandClient)

Returns an AlgorandClient pointing at MainNet using AlgoNode.

- **Returns:**
  The AlgorandClient
- **Example:**
  ```python
  algorand = AlgorandClient.mainnet()
  ```

#### _static_ from_clients(algod: AlgodClient, indexer: IndexerClient | None = None, kmd: KmdClient | None = None) → [AlgorandClient](#algokit_utils.algorand.AlgorandClient)

Returns an AlgorandClient pointing to the given client(s).

- **Parameters:**
  - **algod** – The algod client to use
  - **indexer** – The indexer client to use
  - **kmd** – The kmd client to use
- **Returns:**
  The AlgorandClient
- **Example:**
  ```python
  algorand = AlgorandClient.from_clients(algod, indexer, kmd)
  ```

#### _static_ from_environment() → [AlgorandClient](#algokit_utils.algorand.AlgorandClient)

Returns an AlgorandClient loading the configuration from environment variables.

Retrieve configurations from environment variables when defined or get defaults.

Expects to be called from a Python environment.

- **Returns:**
  The AlgorandClient
- **Example:**
  ```python
  algorand = AlgorandClient.from_environment()
  ```

#### _static_ from_config(algod_config: [AlgoClientNetworkConfig](/docs/algokit-utils/python/latest/api/algokit_utils/models/network/#algokit_utils.models.network.AlgoClientNetworkConfig), indexer_config: [AlgoClientNetworkConfig](/docs/algokit-utils/python/latest/api/algokit_utils/models/network/#algokit_utils.models.network.AlgoClientNetworkConfig) | None = None, kmd_config: [AlgoClientNetworkConfig](/docs/algokit-utils/python/latest/api/algokit_utils/models/network/#algokit_utils.models.network.AlgoClientNetworkConfig) | None = None) → [AlgorandClient](#algokit_utils.algorand.AlgorandClient)

Returns an AlgorandClient from the given config.

- **Parameters:**
  - **algod_config** – The config to use for the algod client
  - **indexer_config** – The config to use for the indexer client
  - **kmd_config** – The config to use for the kmd client
- **Returns:**
  The AlgorandClient
- **Example:**
  ```python
  algorand = AlgorandClient.from_config(algod_config, indexer_config, kmd_config)
  ```

</div>
