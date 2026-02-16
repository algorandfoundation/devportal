---
title: Assets
---

The Algorand Standard Asset (ASA) management functions include creating, opting in and transferring assets, which are fundamental to asset interaction in a blockchain environment.

## `AssetManager`

The `AssetManager` class provides functionality for managing Algorand Standard Assets (ASAs). It can be accessed through the `AlgorandClient` via `algorand.asset` or instantiated directly:

```python
from algokit_utils import AssetManager, TransactionComposer
from algosdk.v2client import algod

asset_manager = AssetManager(
    algod_client=algod_client,
    new_group=lambda: TransactionComposer()
)
```

## Asset Information

The `AssetManager` provides two key data classes for asset information:

### `AssetInformation`

Contains details about an Algorand Standard Asset (ASA):

```python
@dataclass
class AssetInformation:
    asset_id: int  # The ID of the asset
    creator: str   # Address of the creator account
    total: int     # Total units created
    decimals: int  # Number of decimal places
    default_frozen: bool | None = None  # Whether asset is frozen by default
    manager: str | None = None    # Optional manager address
    reserve: str | None = None    # Optional reserve address
    freeze: str | None = None     # Optional freeze address
    clawback: str | None = None   # Optional clawback address
    unit_name: str | None = None  # Optional unit name (e.g. ticker)
    asset_name: str | None = None # Optional asset name
    url: str | None = None        # Optional URL for more info
    metadata_hash: bytes | None = None # Optional 32-byte metadata hash
```

### `AccountAssetInformation`

Contains information about an account’s holding of a particular asset:

```python
@dataclass
class AccountAssetInformation:
    asset_id: int   # The ID of the asset
    balance: int    # Amount held by the account
    frozen: bool    # Whether frozen for this account
    round: int      # Round this info was retrieved at
```

## Bulk Operations

The `AssetManager` provides methods for bulk opt-in/opt-out operations:

### Bulk Opt-In

```python
# Basic example
result = asset_manager.bulk_opt_in(
    account="ACCOUNT_ADDRESS",
    asset_ids=[12345, 67890]
)

# Advanced example with optional parameters
result = asset_manager.bulk_opt_in(
    account="ACCOUNT_ADDRESS",
    asset_ids=[12345, 67890],
    signer=transaction_signer,
    note=b"opt-in note",
    lease=b"lease",
    static_fee=AlgoAmount(1000),
    extra_fee=AlgoAmount(500),
    max_fee=AlgoAmount(2000),
    validity_window=10,
    send_params=SendParams(...)
)
```

### Bulk Opt-Out

```python
# Basic example
result = asset_manager.bulk_opt_out(
    account="ACCOUNT_ADDRESS",
    asset_ids=[12345, 67890]
)

# Advanced example with optional parameters
result = asset_manager.bulk_opt_out(
    account="ACCOUNT_ADDRESS",
    asset_ids=[12345, 67890],
    ensure_zero_balance=True,
    signer=transaction_signer,
    note=b"opt-out note",
    lease=b"lease",
    static_fee=AlgoAmount(1000),
    extra_fee=AlgoAmount(500),
    max_fee=AlgoAmount(2000),
    validity_window=10,
    send_params=SendParams(...)
)
```

The bulk operations return a list of `BulkAssetOptInOutResult` objects containing:

- `asset_id`: The ID of the asset opted into/out of
- `transaction_id`: The transaction ID of the opt-in/out

## Get Asset Information

### Getting Asset Parameters

You can get the current parameters of an asset from algod using `get_by_id()`:

```python
asset_info = asset_manager.get_by_id(12345)
```

### Getting Account Holdings

You can get an account’s current holdings of an asset using `get_account_information()`:

```python
address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA"
asset_id = 12345
account_info = asset_manager.get_account_information(address, asset_id)
```
