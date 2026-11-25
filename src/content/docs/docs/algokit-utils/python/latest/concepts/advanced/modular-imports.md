---
title: "Modular imports"
description: "AlgoKit Utils is designed with a modular architecture that allows you to import only the functionality you need. This keeps your imports explicit and helps with code readability and IDE auto-completion."
---

AlgoKit Utils is designed with a modular architecture that allows you to import only the functionality you need. This keeps your imports explicit and helps with code readability and IDE auto-completion.

## Package architecture

The library is organized into several submodules, each containing related functionality:

| Submodule      | Purpose                            | Key Exports                                                                          |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------ |
| `accounts`     | Account management                 | `AccountManager`, `KmdAccountManager`                                                 |
| `algorand`     | Algorand client entry point        | `AlgorandClient`                                                                      |
| `applications` | App clients, deployment, specs     | `AppClient`, `AppFactory`, `AppDeployer`, `AppManager`, `Arc56Contract`                |
| `assets`       | Asset management                   | `AssetManager`                                                                        |
| `clients`      | API client management              | `ClientManager`, `TestNetDispenserApiClient`                                          |
| `config`       | Configuration and logging          | `config`, `AlgoKitLogger`                                                             |
| `errors`       | Error handling                     | `LogicError`                                                                          |
| `models`       | Data models                        | `AlgoAmount`, `AlgoClientConfigs`, `AppState`, `BoxReference`                          |
| `protocols`    | Protocol definitions               | `TransactionSignerAccountProtocol`, `TypedAppClientProtocol`, `TypedAppFactoryProtocol` |
| `transactions` | Transaction composition            | `TransactionComposer`, `AlgorandClientTransactionCreator`, `AlgorandClientTransactionSender` |

Since AlgoKit Utils wraps the official [Algorand Python SDK](https://github.com/algorand/py-algorand-sdk), the underlying `algosdk` primitives (e.g. `algosdk.transaction.Transaction`, `algosdk.atomic_transaction_composer.TransactionSigner`) are exposed and used wherever possible, so you can mix and match with raw `algosdk` code as needed.

## Using modular imports

### Root import vs submodule imports

The root `algokit_utils` package re-exports everything from all submodules via `__init__.py`, so for most use cases you can import directly from the root:

```python
from algokit_utils import AlgorandClient, AlgoAmount, AppClient
```

For more explicit and readable imports, use submodule imports:

```python
# Account management
from algokit_utils.accounts import AccountManager

# Application clients and deployment
from algokit_utils.applications import AppClient, AppDeployer, AppFactory

# API client management
from algokit_utils.clients import ClientManager, TestNetDispenserApiClient

# Transaction composition
from algokit_utils.transactions import TransactionComposer
```

### Type-only imports

When you only need types for annotations (not runtime values), Python's `TYPE_CHECKING` guard avoids circular imports and keeps runtime overhead minimal:

```python
from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from algokit_utils.applications import AppClient
    from algokit_utils.models import AlgoAmount


def fund_app(app_client: AppClient, amount: AlgoAmount) -> None: ...
```

### Mixing with algosdk

Per the [modularity principle](/docs/algokit-utils/python/latest/#core-principles), AlgoKit Utils functions accept and return `algosdk` primitives wherever possible:

```python
from algosdk.v2client.algod import AlgodClient

from algokit_utils import AlgorandClient

algorand = AlgorandClient.default_localnet()

# The underlying algosdk clients are directly accessible
algod_client: AlgodClient = algorand.client.algod
```

See the [API Reference](/docs/algokit-utils/python/latest/api/algokit_utils/) for the full list of exports in each submodule.
