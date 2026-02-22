---
title: "Modular imports"
description: "AlgoKit Utils is designed with a modular architecture that allows you to import only the functionality you need. This keeps your imports explicit and helps with code readability and IDE auto-completion."
---

AlgoKit Utils is designed with a modular architecture that allows you to import only the functionality you need. This keeps your imports explicit and helps with code readability and IDE auto-completion.

## Package architecture

The library is organized into several submodules, each containing related functionality:

| Submodule | Purpose | Key Exports |
|-----------|---------|-------------|
| `accounts` | Account management | `AccountManager`, `KmdAccountManager` |
| `algorand` | Algorand client entry point | `AlgorandClient` |
| `applications` | App clients, deployment, specs | `AppClient`, `AppFactory`, `AppDeployer`, `AppManager`, `Arc56Contract` |
| `assets` | Asset management | `AssetManager` |
| `clients` | API client management | `ClientManager`, `AlgodClient`, `IndexerClient`, `KmdClient`, `TestNetDispenserApiClient` |
| `models` | Data models | `AlgoAmount`, `AlgoClientConfigs`, `AppState`, `SimulateTransactionResult` |
| `transactions` | Transaction composition | `TransactionComposer`, `AlgorandClientTransactionCreator`, `AlgorandClientTransactionSender` |
| `protocols` | Protocol definitions | `AddressWithTransactionSigner`, `TypedAppClientProtocol`, `TypedAppFactoryProtocol` |
| `errors` | Error handling | `LogicError` |
| `transact` | Transaction primitives (re-exported from `algokit_transact`) | `Transaction`, `TransactionSigner`, `OnApplicationComplete`, `BoxReference` |

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
from algokit_utils.applications import AppClient, AppFactory, AppDeployer

# API client types
from algokit_utils.clients import ClientManager, AlgodClient, IndexerClient

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
    from algokit_utils.models import AppState
```

## Submodule details

### `accounts`

Contains account management and KMD integration:

```python
from algokit_utils.accounts import (
    AccountManager,
    KmdAccountManager,
)
```

### `applications`

Contains app client, factory, deployment, and ABI utilities:

```python
from algokit_utils.applications import (
    # App client and factory
    AppClient,
    AppFactory,

    # Deployment
    AppDeployer,

    # App management
    AppManager,

    # ABI utilities
    ABIReturn,

    # App spec
    Arc56Contract,

    # Enums
    OnSchemaBreak,
    OnUpdate,
)
```

### `transactions`

Contains transaction composition, creation, and sending:

```python
from algokit_utils.transactions import (
    TransactionComposer,
    AlgorandClientTransactionCreator,
    AlgorandClientTransactionSender,
)
```

Transaction parameter types are also exported from the `transactions` module (via `transaction_composer`):

```python
from algokit_utils.transactions import (
    # Payment transactions
    PaymentParams,

    # App transactions
    AppCreateParams,
    AppCallParams,
    AppCallMethodCallParams,

    # Asset transactions
    AssetCreateParams,
    AssetTransferParams,
    AssetOptInParams,
)
```

The `transactions.builders` sub-package provides lower-level transaction builder functions:

```python
from algokit_utils.transactions.builders import (
    build_payment_transaction,
    build_app_create_transaction,
    build_app_call_transaction,
    build_asset_create_transaction,
    build_asset_transfer_transaction,
)
```

### `clients`

Contains API client management and dispenser client:

```python
from algokit_utils.clients import (
    ClientManager,
    AlgodClient,
    IndexerClient,
    KmdClient,
    TestNetDispenserApiClient,
)
```

### `models`

Contains data models for amounts, network config, state, and transactions:

```python
from algokit_utils.models import (
    # Amounts
    AlgoAmount,

    # Network config
    AlgoClientConfigs,

    # Application state
    AppState,

    # Simulation
    SimulateTransactionResult,
)
```

### `transact`

Re-exports core transaction primitives from the `algokit_transact` library:

```python
from algokit_utils.transact import (
    Transaction,
    TransactionSigner,
    OnApplicationComplete,
    BoxReference,
    LogicSigAccount,
)
```

### `protocols`

Contains protocol (interface) definitions:

```python
from algokit_utils.protocols import (
    AddressWithTransactionSigner,
    TypedAppClientProtocol,
    TypedAppFactoryProtocol,
)
```

## How re-exports work

Each submodule's `__init__.py` re-exports from its internal modules using wildcard imports. The root `algokit_utils/__init__.py` then aggregates all submodules:

```python
# algokit_utils/__init__.py
from algokit_utils.applications import *
from algokit_utils.assets import *
from algokit_utils.protocols import *
from algokit_utils.models import *
from algokit_utils.accounts import *
from algokit_utils.clients import *
from algokit_utils.transactions import *
from algokit_utils.errors import *
from algokit_utils.algorand import *
from algokit_utils.transact import *
```

This means any public symbol from any submodule is available at the root level. However, using submodule imports makes your code more explicit about where each symbol comes from.

## When to use modular imports

**Use the root import when:**
- You're writing scripts or quick prototypes
- You need just a few commonly-used classes like `AlgorandClient` or `AlgoAmount`
- Brevity is more important than explicitness

**Use submodule imports when:**
- You want clear, self-documenting imports
- You're building a library or larger application
- You want to avoid namespace pollution
- You need types from a specific domain (e.g., only transaction types)
