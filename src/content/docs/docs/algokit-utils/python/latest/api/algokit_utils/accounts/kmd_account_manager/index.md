---
title: "algokit_utils.accounts.kmd_account_manager"
---

<div class="api-ref">

# algokit_utils.accounts.kmd_account_manager

## Classes

| [`KmdAccountManager`](#algokit_utils.accounts.kmd_account_manager.KmdAccountManager)   | Provides abstractions over KMD that makes it easier to get and manage accounts.   |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|

## Module Contents

### *class* KmdAccountManager(client_manager: [ClientManager](/docs/algokit-utils/python/latest/api/algokit_utils/clients/client_manager/#algokit_utils.clients.client_manager.ClientManager))

Provides abstractions over KMD that makes it easier to get and manage accounts.

#### kmd() → KmdClient

Returns the KMD client, initializing it if needed.

* **Raises:**
  **Exception** – If KMD client is not configured and not running against LocalNet
* **Returns:**
  The KMD client

#### get_wallet_account(wallet_name: str, predicate: Callable[[dict[str, Any]], bool] | None = None, sender: str | None = None) → AddressWithSigners | None

Returns an Algorand signing account with private key loaded from the given KMD wallet.

Retrieves an account from a KMD wallet that matches the given predicate, or a random account
if no predicate is provided.

* **Parameters:**
  * **wallet_name** – The name of the wallet to retrieve an account from
  * **predicate** – Optional filter to use to find the account (otherwise gets a random account from the wallet)
  * **sender** – Optional sender address to use this signer for (aka a rekeyed account)
* **Returns:**
  The signing account or None if no matching wallet or account was found

#### get_or_create_wallet_account(name: str, fund_with: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#algokit_utils.models.amount.AlgoAmount) | None = None) → AddressWithSigners

Gets or creates a funded account in a KMD wallet of the given name.

Provides idempotent access to accounts from LocalNet without specifying the private key.

* **Parameters:**
  * **name** – The name of the wallet to retrieve / create
  * **fund_with** – The number of Algos to fund the account with when created
* **Returns:**
  An Algorand account with private key loaded
* **Raises:**
  **Exception** – If error received while creating the wallet or funding the account

#### get_localnet_dispenser_account() → AddressWithSigners

Returns an Algorand account with private key loaded for the default LocalNet dispenser account.

Retrieves the default funded account from LocalNet that can be used to fund other accounts.

* **Raises:**
  **Exception** – If not running against LocalNet or dispenser account not found
* **Returns:**
  The default LocalNet dispenser account

</div>
