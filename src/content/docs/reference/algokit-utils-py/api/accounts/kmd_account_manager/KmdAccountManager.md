---
title: algokit_utils.accounts.kmd_account_manager.KmdAccountManager
---
#### *class* algokit_utils.accounts.kmd_account_manager.KmdAccountManager(client_manager: [algokit_utils.clients.client_manager.ClientManager](/reference/algokit-utils-py/api/clients/client_manager/clientmanager/#algokit_utils.clients.client_manager.ClientManager))

Provides abstractions over KMD that makes it easier to get and manage accounts.

#### kmd() → algosdk.kmd.KMDClient

Returns the KMD client, initializing it if needed.

* **Raises:**
  **Exception** – If KMD client is not configured and not running against LocalNet
* **Returns:**
  The KMD client

#### get_wallet_account(wallet_name: str, predicate: collections.abc.Callable[[dict[str, Any]], bool] | None = None, sender: str | None = None) → [KmdAccount](#algokit_utils.accounts.kmd_account_manager.KmdAccount) | None

Returns an Algorand signing account with private key loaded from the given KMD wallet.

Retrieves an account from a KMD wallet that matches the given predicate, or a random account
if no predicate is provided.

* **Parameters:**
  * **wallet_name** – The name of the wallet to retrieve an account from
  * **predicate** – Optional filter to use to find the account (otherwise gets a random account from the wallet)
  * **sender** – Optional sender address to use this signer for (aka a rekeyed account)
* **Returns:**
  The signing account or None if no matching wallet or account was found

#### get_or_create_wallet_account(name: str, fund_with: [algokit_utils.models.amount.AlgoAmount](/reference/algokit-utils-py/api/models/amount/algoamount/#algokit_utils.models.amount.AlgoAmount) | None = None) → [KmdAccount](#algokit_utils.accounts.kmd_account_manager.KmdAccount)

Gets or creates a funded account in a KMD wallet of the given name.

Provides idempotent access to accounts from LocalNet without specifying the private key.

* **Parameters:**
  * **name** – The name of the wallet to retrieve / create
  * **fund_with** – The number of Algos to fund the account with when created
* **Returns:**
  An Algorand account with private key loaded

#### get_localnet_dispenser_account() → [KmdAccount](#algokit_utils.accounts.kmd_account_manager.KmdAccount)

Returns an Algorand account with private key loaded for the default LocalNet dispenser account.

Retrieves the default funded account from LocalNet that can be used to fund other accounts.

* **Raises:**
  **Exception** – If not running against LocalNet or dispenser account not found
* **Returns:**
  The default LocalNet dispenser account