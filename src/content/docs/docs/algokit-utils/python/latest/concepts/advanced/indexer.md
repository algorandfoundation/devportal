---
title: "Indexer lookups / searching"
description: "Indexer lookups / searching is a higher-order use case capability provided by AlgoKit Utils that builds on top of the core capabilities. It provides type-safe indexer API wrappers (no more dict[str, Any] pain), with typed dataclass response models and built-in retry logic."
---

Indexer lookups / searching is a higher-order use case capability provided by AlgoKit Utils that builds on top of the core capabilities. It provides type-safe indexer API wrappers (no more `dict[str, Any]` pain), with typed dataclass response models and built-in retry logic.

To see some usage examples check out the [automated tests](https://github.com/algorandfoundation/algokit-utils-py/tree/main/tests/modules/indexer_client).

To access the indexer client you can get it from [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) via `algorand.client.indexer`:

```python
indexer = algorand.client.indexer
```

All of the indexer methods are called directly on the `IndexerClient` instance, which you can get from [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) via `algorand.client.indexer`. These calls are not made more easy to call by exposing via `AlgorandClient` and thus not requiring the indexer SDK client to be passed in. This is because we want to add a tiny bit of friction to using indexer, given it's an expensive API to run for node providers, the data from it can sometimes be slow and stale, and there are alternatives [that](https://github.com/algorandfoundation/algokit-subscriber-ts) [allow](https://github.com/algorand/conduit) individual projects to index subsets of chain data specific to them as a preferred option. In saying that, it's a very useful API for doing ad hoc data retrieval, writing automated tests, and many other uses.

## Indexer wrapper functions

The `IndexerClient` (from `algokit_indexer_client`) exposes the full [indexer API](https://dev.algorand.co/reference/rest-apis/indexer) as type-safe methods with typed dataclass responses and automatic retry with exponential backoff.

**Lookup methods:**

- `indexer.lookup_transaction_by_id(txid)` - Finds a transaction by ID
- `indexer.lookup_account_by_id(account_id)` - Finds an account by address
- `indexer.lookup_account_transactions(account_id)` - Finds all transactions for an account
- `indexer.lookup_account_assets(account_id)` - Finds all asset holdings for an account
- `indexer.lookup_account_app_local_states(account_id)` - Finds all application local states for an account
- `indexer.lookup_account_created_applications(account_id)` - Finds all applications created by an account
- `indexer.lookup_account_created_assets(account_id)` - Finds all assets created by an account
- `indexer.lookup_application_by_id(application_id)` - Finds an application by ID
- `indexer.lookup_application_logs_by_id(application_id)` - Finds log messages for an application
- `indexer.lookup_application_box_by_id_and_name(application_id, name)` - Finds a specific application box by name
- `indexer.lookup_asset_by_id(asset_id)` - Finds an asset by ID
- `indexer.lookup_asset_balances(asset_id)` - Finds all asset holdings for the given asset
- `indexer.lookup_asset_transactions(asset_id)` - Finds all transactions for an asset
- `indexer.lookup_block(round_number)` - Finds a block by round number

**Search methods:**

- `indexer.search_for_transactions(...)` - Search for transactions with a given set of criteria
- `indexer.search_for_accounts(...)` - Search for accounts with a given set of criteria
- `indexer.search_for_applications(...)` - Search for applications with a given set of criteria
- `indexer.search_for_assets(...)` - Search for assets with a given set of criteria
- `indexer.search_for_application_boxes(application_id)` - Search for application boxes
- `indexer.search_for_block_headers(...)` - Search for block headers with a given set of criteria

### Search transactions example

To use the `indexer.search_for_transactions` method, you can follow this example as a starting point:

```python
transactions = indexer.search_for_transactions(
    tx_type="pay",
    address_role="sender",
    address=my_address,
)
```

### Automatic pagination example

All paginated responses include a `next_token` field. You can use it to iterate through pages:

```python
all_transactions = []
next_token = None

while True:
    response = indexer.search_for_transactions(
        tx_type="pay",
        address=my_address,
        limit=1000,
        next_=next_token,
    )
    all_transactions.extend(response.transactions or [])

    if not response.next_token:
        break
    next_token = response.next_token
```

The `next_` parameter accepts the pagination token from the previous response's `next_token` field, allowing you to iterate through all results.

## Indexer API response types

The response model type definitions for the [indexer API](https://dev.algorand.co/reference/rest-apis/indexer) are auto-generated typed dataclasses available from the `algokit_indexer_client` package.

To access these types you can import them:

```python
from algokit_indexer_client.models import (
    TransactionResponse,
    TransactionsResponse,
    AccountResponse,
    AccountsResponse,
    ApplicationResponse,
    ApplicationsResponse,
    AssetResponse,
    AssetsResponse,
    Block,
    # ...
)
```

The types follow the naming conventions from the official Algorand indexer API specification. Singular response types (e.g., `TransactionResponse`, `AccountResponse`) are returned by lookup methods, while plural response types (e.g., `TransactionsResponse`, `AccountsResponse`) are returned by search methods and include pagination support via `next_token`.
