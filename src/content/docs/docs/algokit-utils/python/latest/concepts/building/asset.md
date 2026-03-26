---
title: 'Assets'
description: 'The Algorand Standard Asset (asset) management functions include creating, opting in and transferring assets, which are fundamental to asset interaction in a blockchain environment.'
---

The Algorand Standard Asset (asset) management functions include creating, opting in and transferring assets, which are fundamental to asset interaction in a blockchain environment.

## `AssetManager`

The `AssetManager` is a class that is used to manage asset information.

To get an instance of `AssetManager`, you can use either [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) via `algorand.asset` or instantiate it directly:

```python
from algokit_utils import AssetManager, TransactionComposer, TransactionComposerParams

asset_manager = AssetManager(
    algod_client=algod_client,
    new_group=lambda: TransactionComposer(
        TransactionComposerParams(
            algod=algod_client,
            get_signer=lambda addr: get_signer(addr),
        )
    ),
)
```

## Creation

To create an asset you can use `algorand.send.asset_create(params)` (immediately send a single asset creation transaction), `algorand.create_transaction.asset_create(params)` (construct an asset creation transaction), or `algorand.new_group().add_asset_create(params)` (add asset creation to a group of transactions) per [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) [transaction semantics](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#creating-and-issuing-transactions).

The base type for specifying an asset creation transaction is `AssetCreateParams`, which has the following parameters in addition to the [common transaction parameters](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#transaction-parameters):

- `total: int` - The total amount of the smallest divisible (decimal) unit to create. For example, if `decimals` is, say, 2, then for every 100 `total` there would be 1 whole unit. This field can only be specified upon asset creation.
- `decimals: int | None` - The amount of decimal places the asset should have. If unspecified then the asset will be in whole units (i.e. `0`). If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths, and so on up to 19 decimal places. This field can only be specified upon asset creation.
- `asset_name: str | None` - The optional name of the asset. Max size is 32 bytes. This field can only be specified upon asset creation.
- `unit_name: str | None` - The optional name of the unit of this asset (e.g. ticker name). Max size is 8 bytes. This field can only be specified upon asset creation.
- `url: str | None` - Specifies an optional URL where more information about the asset can be retrieved. Max size is 96 bytes. This field can only be specified upon asset creation.
- `metadata_hash: bytes | None` - 32-byte hash of some metadata that is relevant to your asset and/or asset holders. The format of this metadata is up to the application. This field can only be specified upon asset creation.
- `default_frozen: bool | None` - Whether to freeze holdings for this asset by default. Defaults to `False`. If `True` then for anyone apart from the creator to hold the asset it needs to be unfrozen using an asset freeze transaction from the `freeze` account, which must be set on creation. This field can only be specified upon asset creation.
- `manager: str | None` - The address of the optional account that can manage the configuration of the asset and destroy it. The configuration fields it can change are `manager`, `reserve`, `clawback`, and `freeze`. If not set (`None` or `""`) at asset creation or subsequently set to empty by the `manager` the asset becomes permanently immutable.
- `reserve: str | None` - The address of the optional account that holds the reserve (uncirculated supply) units of the asset. This address has no specific authority in the protocol itself and is informational only. Some standards like [ARC-19](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0019.md) rely on this field to hold meaningful data. It can be used in the case where you want to signal to holders of your asset that the uncirculated units of the asset reside in an account that is different from the default creator account. If not set (`None` or `""`) at asset creation or subsequently set to empty by the manager the field is permanently empty.
- `freeze: str | None` - The address of the optional account that can be used to freeze or unfreeze holdings of this asset for any account. If empty, freezing is not permitted. If not set (`None` or `""`) at asset creation or subsequently set to empty by the manager the field is permanently empty.
- `clawback: str | None` - The address of the optional account that can clawback holdings of this asset from any account. **This field should be used with caution** as the clawback account has the ability to **unconditionally take assets from any account**. If empty, clawback is not permitted. If not set (`None` or `""`) at asset creation or subsequently set to empty by the manager the field is permanently empty.

### Examples

```python
# Basic example
result = algorand.send.asset_create(AssetCreateParams(sender="CREATORADDRESS", total=100))
created_asset_id = result.asset_id

# Advanced example
algorand.send.asset_create(
    AssetCreateParams(
        sender="CREATORADDRESS",
        total=100,
        decimals=2,
        asset_name="asset",
        unit_name="unit",
        url="url",
        metadata_hash=b"metadataHash",
        default_frozen=False,
        manager="MANAGERADDRESS",
        reserve="RESERVEADDRESS",
        freeze="FREEZEADDRESS",
        clawback="CLAWBACKADDRESS",
        lease=b"lease",
        note=b"note",
        # You wouldn't normally set this field
        first_valid_round=1000,
        validity_window=10,
        extra_fee=AlgoAmount(micro_algo=1000),
        static_fee=AlgoAmount(micro_algo=1000),
        # Max fee doesn't make sense with extra_fee AND static_fee
        #  already specified, but here for completeness
        max_fee=AlgoAmount(micro_algo=3000),
        # Signer only needed if you want to provide one,
        #  generally you'd register it with AlgorandClient
        #  against the sender and not need to pass it in
        signer=transaction_signer,
    ),
    send_params=SendParams(
        max_rounds_to_wait=5,
        suppress_log=True,
    ),
)
```

## Reconfigure

If you have a `manager` address set on an asset, that address can send a reconfiguration transaction to change the `manager`, `reserve`, `freeze` and `clawback` fields of the asset if they haven't been set to empty.

> [!WARNING]
> If you issue a reconfigure transaction and don't set the _existing_ values for any of the below fields then that field will be permanently set to empty.

To reconfigure an asset you can use `algorand.send.asset_config(params)` (immediately send a single asset config transaction), `algorand.create_transaction.asset_config(params)` (construct an asset config transaction), or `algorand.new_group().add_asset_config(params)` (add asset config to a group of transactions) per [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) [transaction semantics](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#creating-and-issuing-transactions).

The base type for specifying an asset configuration transaction is `AssetConfigParams`, which has the following parameters in addition to the [common transaction parameters](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#transaction-parameters):

- `asset_id: int` - ID of the asset to reconfigure
- `manager: str | None` - The address of the optional account that can manage the configuration of the asset and destroy it. The configuration fields it can change are `manager`, `reserve`, `clawback`, and `freeze`. If not set (`None` or `""`) the asset will become permanently immutable.
- `reserve: str | None` - The address of the optional account that holds the reserve (uncirculated supply) units of the asset. This address has no specific authority in the protocol itself and is informational only. Some standards like [ARC-19](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0019.md) rely on this field to hold meaningful data. It can be used in the case where you want to signal to holders of your asset that the uncirculated units of the asset reside in an account that is different from the default creator account. If not set (`None` or `""`) the field will become permanently empty.
- `freeze: str | None` - The address of the optional account that can be used to freeze or unfreeze holdings of this asset for any account. If empty, freezing is not permitted. If not set (`None` or `""`) the field will become permanently empty.
- `clawback: str | None` - The address of the optional account that can clawback holdings of this asset from any account. **This field should be used with caution** as the clawback account has the ability to **unconditionally take assets from any account**. If empty, clawback is not permitted. If not set (`None` or `""`) the field will become permanently empty.

### Examples

```python
# Basic example
algorand.send.asset_config(
    AssetConfigParams(sender="MANAGERADDRESS", asset_id=123456, manager="MANAGERADDRESS")
)

# Advanced example
algorand.send.asset_config(
    AssetConfigParams(
        sender="MANAGERADDRESS",
        asset_id=123456,
        manager="MANAGERADDRESS",
        reserve="RESERVEADDRESS",
        freeze="FREEZEADDRESS",
        clawback="CLAWBACKADDRESS",
        lease=b"lease",
        note=b"note",
        # You wouldn't normally set this field
        first_valid_round=1000,
        validity_window=10,
        extra_fee=AlgoAmount(micro_algo=1000),
        static_fee=AlgoAmount(micro_algo=1000),
        # Max fee doesn't make sense with extra_fee AND static_fee
        #  already specified, but here for completeness
        max_fee=AlgoAmount(micro_algo=3000),
        # Signer only needed if you want to provide one,
        #  generally you'd register it with AlgorandClient
        #  against the sender and not need to pass it in
        signer=transaction_signer,
    ),
    send_params=SendParams(
        max_rounds_to_wait=5,
        suppress_log=True,
    ),
)
```

## Freeze

To freeze or unfreeze an asset holding for a specific account you can use `algorand.send.asset_freeze(params)` (immediately send a single asset freeze transaction), `algorand.create_transaction.asset_freeze(params)` (construct an asset freeze transaction), or `algorand.new_group().add_asset_freeze(params)` (add asset freeze to a group of transactions) per [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) [transaction semantics](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#creating-and-issuing-transactions).

**Note:** The `sender` of the freeze transaction must be the `freeze` account of the asset.

The base type for specifying an asset freeze transaction is `AssetFreezeParams`, which has the following parameters in addition to the [common transaction parameters](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#transaction-parameters):

- `asset_id: int` - The ID of the asset to freeze/unfreeze
- `account: str` - The address of the account to freeze or unfreeze the asset for
- `frozen: bool` - Whether the assets of this account should be frozen for this asset

### Examples

```python
# Basic example (freeze)
algorand.send.asset_freeze(
    AssetFreezeParams(sender="FREEZEADDRESS", asset_id=123456, account="TARGETADDRESS", frozen=True)
)

# Basic example (unfreeze)
algorand.send.asset_freeze(
    AssetFreezeParams(sender="FREEZEADDRESS", asset_id=123456, account="TARGETADDRESS", frozen=False)
)

# Advanced example
algorand.send.asset_freeze(
    AssetFreezeParams(
        sender="FREEZEADDRESS",
        asset_id=123456,
        account="TARGETADDRESS",
        frozen=True,
        lease=b"lease",
        note=b"note",
        # You wouldn't normally set this field
        first_valid_round=1000,
        validity_window=10,
        extra_fee=AlgoAmount(micro_algo=1000),
        static_fee=AlgoAmount(micro_algo=1000),
        # Max fee doesn't make sense with extra_fee AND static_fee
        #  already specified, but here for completeness
        max_fee=AlgoAmount(micro_algo=3000),
        # Signer only needed if you want to provide one,
        #  generally you'd register it with AlgorandClient
        #  against the sender and not need to pass it in
        signer=transaction_signer,
    ),
    send_params=SendParams(
        max_rounds_to_wait=5,
        suppress_log=True,
    ),
)
```

## Destroy

To destroy an asset you can use `algorand.send.asset_destroy(params)` (immediately send a single asset destroy transaction), `algorand.create_transaction.asset_destroy(params)` (construct an asset destroy transaction), or `algorand.new_group().add_asset_destroy(params)` (add asset destroy to a group of transactions) per [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) [transaction semantics](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#creating-and-issuing-transactions).

**Note:** The `sender` of the destroy transaction must be the `manager` account of the asset, and the asset must have zero total supply (all units must be held by the creator).

The base type for specifying an asset destroy transaction is `AssetDestroyParams`, which has the following parameters in addition to the [common transaction parameters](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#transaction-parameters):

- `asset_id: int` - The ID of the asset to destroy

### Examples

```python
# Basic example
algorand.send.asset_destroy(
    AssetDestroyParams(sender="MANAGERADDRESS", asset_id=123456)
)

# Advanced example
algorand.send.asset_destroy(
    AssetDestroyParams(
        sender="MANAGERADDRESS",
        asset_id=123456,
        lease=b"lease",
        note=b"note",
        # You wouldn't normally set this field
        first_valid_round=1000,
        validity_window=10,
        extra_fee=AlgoAmount(micro_algo=1000),
        static_fee=AlgoAmount(micro_algo=1000),
        # Max fee doesn't make sense with extra_fee AND static_fee
        #  already specified, but here for completeness
        max_fee=AlgoAmount(micro_algo=3000),
        # Signer only needed if you want to provide one,
        #  generally you'd register it with AlgorandClient
        #  against the sender and not need to pass it in
        signer=transaction_signer,
    ),
    send_params=SendParams(
        max_rounds_to_wait=5,
        suppress_log=True,
    ),
)
```

## Transfer

To transfer unit(s) of an asset between accounts you can use `algorand.send.asset_transfer(params)` (immediately send a single asset transfer transaction), `algorand.create_transaction.asset_transfer(params)` (construct an asset transfer transaction), or `algorand.new_group().add_asset_transfer(params)` (add asset transfer to a group of transactions) per [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) [transaction semantics](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#creating-and-issuing-transactions).

**Note:** For an account to receive an asset it needs to have [opted-in](#opt-inout).

The base type for specifying an asset transfer transaction is `AssetTransferParams`, which has the following parameters in addition to the [common transaction parameters](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#transaction-parameters):

- `asset_id: int` - ID of the asset to transfer.
- `amount: int` - Amount of the asset to transfer (in smallest divisible (decimal) units).
- `receiver: str` - The address of the account that will receive the asset unit(s).
- `clawback_target: str | None` - Optional address of an account to clawback the asset from. Requires the sender to be the clawback account. **Warning:** Be careful with this parameter as it can lead to unexpected loss of funds if not used correctly.
- `close_asset_to: str | None` - Optional address of an account to close the asset position to. **Warning:** Be careful with this parameter as it can lead to loss of funds if not used correctly.

### Examples

```python
# Basic example
algorand.send.asset_transfer(
    AssetTransferParams(sender="HOLDERADDRESS", asset_id=123456, amount=1, receiver="RECEIVERADDRESS")
)

# Advanced example (with clawback and close asset to)
algorand.send.asset_transfer(
    AssetTransferParams(
        sender="CLAWBACKADDRESS",
        asset_id=123456,
        amount=1,
        receiver="RECEIVERADDRESS",
        clawback_target="HOLDERADDRESS",
        # This field needs to be used with caution
        close_asset_to="ADDRESSTOCLOSETO",
        lease=b"lease",
        note=b"note",
        # You wouldn't normally set this field
        first_valid_round=1000,
        validity_window=10,
        extra_fee=AlgoAmount(micro_algo=1000),
        static_fee=AlgoAmount(micro_algo=1000),
        # Max fee doesn't make sense with extra_fee AND static_fee
        #  already specified, but here for completeness
        max_fee=AlgoAmount(micro_algo=3000),
        # Signer only needed if you want to provide one,
        #  generally you'd register it with AlgorandClient
        #  against the sender and not need to pass it in
        signer=transaction_signer,
    ),
    send_params=SendParams(
        max_rounds_to_wait=5,
        suppress_log=True,
    ),
)
```

## Opt-in/out

Before an account can receive a specific asset, it must [`opt-in`](https://dev.algorand.co/concepts/assets/opt-in-out#receiving-an-asset) to receive it. An opt-in transaction places an asset holding of 0 into the account and increases the [minimum balance](https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr) of that account by [100,000 microAlgos](https://dev.algorand.co/concepts/assets/overview/).

An account can opt out of an asset at any time by closing out it's asset position to another account (usually to the asset creator). This means that the account will no longer hold the asset, and the account will no longer be able to receive the asset. The account also recovers the Minimum Balance Requirement for the asset (100,000 microAlgos).

When opting-out you generally want to be careful to ensure you have a zero-balance otherwise you will forfeit the balance you do have. AlgoKit Utils can protect you from making this mistake by checking you have a zero-balance before issuing the opt-out transaction. You can turn this check off if you want to avoid the extra calls to Algorand and are confident in what you are doing.

AlgoKit Utils gives you functions that allow you to do opt-ins and opt-outs in bulk or as a single operation. The bulk operations give you less control over the sending semantics as they automatically send the transactions to Algorand in the most optimal way using transaction groups of 16 at a time.

### `asset_opt_in`

To opt-in to an asset you can use `algorand.send.asset_opt_in(params)` (immediately send a single asset opt-in transaction), `algorand.create_transaction.asset_opt_in(params)` (construct an asset opt-in transaction), or `algorand.new_group().add_asset_opt_in(params)` (add asset opt-in to a group of transactions) per [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) [transaction semantics](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#creating-and-issuing-transactions).

The base type for specifying an asset opt-in transaction is `AssetOptInParams`, which has the following parameters in addition to the [common transaction parameters](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#transaction-parameters):

- `asset_id: int` - The ID of the asset that will be opted-in to

```python
# Basic example
algorand.send.asset_opt_in(AssetOptInParams(sender="SENDERADDRESS", asset_id=123456))

# Advanced example
algorand.send.asset_opt_in(
    AssetOptInParams(
        sender="SENDERADDRESS",
        asset_id=123456,
        lease=b"lease",
        note=b"note",
        # You wouldn't normally set this field
        first_valid_round=1000,
        validity_window=10,
        extra_fee=AlgoAmount(micro_algo=1000),
        static_fee=AlgoAmount(micro_algo=1000),
        # Max fee doesn't make sense with extra_fee AND static_fee
        #  already specified, but here for completeness
        max_fee=AlgoAmount(micro_algo=3000),
        # Signer only needed if you want to provide one,
        #  generally you'd register it with AlgorandClient
        #  against the sender and not need to pass it in
        signer=transaction_signer,
    ),
    send_params=SendParams(
        max_rounds_to_wait=5,
        suppress_log=True,
    ),
)
```

### `asset_opt_out`

To opt-out of an asset you can use `algorand.send.asset_opt_out(params)` (immediately send a single asset opt-out transaction), `algorand.create_transaction.asset_opt_out(params)` (construct an asset opt-out transaction), or `algorand.new_group().add_asset_opt_out(params)` (add asset opt-out to a group of transactions) per [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) [transaction semantics](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#creating-and-issuing-transactions).

The base type for specifying an asset opt-out transaction is `AssetOptOutParams`, which has the following parameters in addition to the [common transaction parameters](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#transaction-parameters):

- `asset_id: int` - The ID of the asset that will be opted-out of
- `creator: str` - The address of the asset creator account to close the asset position to (any remaining asset units will be sent to this account).

If you are using the `send` variant then there is an additional parameter:

- `ensure_zero_balance: bool` - Whether or not to check if the account has a zero balance first or not. Defaults to `True`. If this is set to `True` and the account has an asset balance it will throw an error. If this is set to `False` and the account has an asset balance it will lose those assets to the asset creator.

> [!WARNING]
> If you are using the `create_transaction` or `add_asset_opt_out` variants then you need to take responsibility to ensure the asset holding balance is `0` to avoid losing assets.

```python
# Basic example (with creator)
algorand.send.asset_opt_out(
    AssetOptOutParams(sender="SENDERADDRESS", asset_id=123456, creator="CREATORADDRESS"),
    ensure_zero_balance=True,
)

# Advanced example
algorand.send.asset_opt_out(
    AssetOptOutParams(
        sender="SENDERADDRESS",
        asset_id=123456,
        creator="CREATORADDRESS",
        lease=b"lease",
        note=b"note",
        # You wouldn't normally set this field
        first_valid_round=1000,
        validity_window=10,
        extra_fee=AlgoAmount(micro_algo=1000),
        static_fee=AlgoAmount(micro_algo=1000),
        # Max fee doesn't make sense with extra_fee AND static_fee
        #  already specified, but here for completeness
        max_fee=AlgoAmount(micro_algo=3000),
        # Signer only needed if you want to provide one,
        #  generally you'd register it with AlgorandClient
        #  against the sender and not need to pass it in
        signer=transaction_signer,
    ),
    send_params=SendParams(
        max_rounds_to_wait=5,
        suppress_log=True,
    ),
    ensure_zero_balance=True,
)
```

### `asset.bulk_opt_in`

The `asset.bulk_opt_in` function facilitates the opt-in process for an account to multiple assets, allowing the account to receive and hold those assets.

```python
# Basic example
algorand.asset.bulk_opt_in(account="ACCOUNTADDRESS", asset_ids=[12345, 67890])

# Advanced example
algorand.asset.bulk_opt_in(
    account="ACCOUNTADDRESS",
    asset_ids=[12345, 67890],
    max_fee=AlgoAmount(micro_algo=1000),
    send_params=SendParams(suppress_log=True),
)
```

### `asset.bulk_opt_out`

The `asset.bulk_opt_out` function facilitates the opt-out process for an account from multiple assets, permitting the account to discontinue holding a group of assets.

```python
# Basic example
algorand.asset.bulk_opt_out(account="ACCOUNTADDRESS", asset_ids=[12345, 67890])

# Advanced example
algorand.asset.bulk_opt_out(
    account="ACCOUNTADDRESS",
    asset_ids=[12345, 67890],
    ensure_zero_balance=True,
    max_fee=AlgoAmount(micro_algo=1000),
    send_params=SendParams(suppress_log=True),
)
```

## Get information

### Getting current parameters for an asset

You can get the current parameters of an asset from algod by using `algorand.asset.get_by_id(asset_id)`, which returns an [`AssetInformation`](#assetinformation) instance.

```python
asset_info = algorand.asset.get_by_id(12353)
```

### Getting current holdings of an asset for an account

You can get the current holdings of an asset for a given account from algod by using `algorand.asset.get_account_information(address, asset_id)`, which returns an [`AccountAssetInformation`](#accountassetinformation) instance.

```python
address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA"
asset_id = 12345
account_info = algorand.asset.get_account_information(address, asset_id)
```

## Return types

These dataclasses are defined in `algokit_utils.assets.asset_manager`.

### `AssetInformation`

Returned by `algorand.asset.get_by_id()`. Contains the current on-chain parameters for an Algorand Standard Asset.

| Field            | Type            | Description                                                                                                             |
| ---------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `asset_id`       | `int`           | The ID of the asset                                                                                                     |
| `creator`        | `str`           | The address of the account that created the asset                                                                       |
| `total`          | `int`           | The total amount of the smallest divisible units that were created of the asset                                         |
| `decimals`       | `int`           | The amount of decimal places the asset was created with                                                                 |
| `default_frozen` | `bool \| None`  | Whether the asset was frozen by default for all accounts, defaults to `None`                                            |
| `manager`        | `str \| None`   | The address of the optional account that can manage the configuration of the asset and destroy it, defaults to `None`   |
| `reserve`        | `str \| None`   | The address of the optional account that holds the reserve (uncirculated supply) units of the asset, defaults to `None` |
| `freeze`         | `str \| None`   | The address of the optional account that can be used to freeze or unfreeze holdings of this asset, defaults to `None`   |
| `clawback`       | `str \| None`   | The address of the optional account that can clawback holdings of this asset from any account, defaults to `None`       |
| `unit_name`      | `str \| None`   | The optional name of the unit of this asset (e.g. ticker name), defaults to `None`                                      |
| `unit_name_b64`  | `bytes \| None` | The optional name of the unit of this asset as bytes, defaults to `None`                                                |
| `asset_name`     | `str \| None`   | The optional name of the asset, defaults to `None`                                                                      |
| `asset_name_b64` | `bytes \| None` | The optional name of the asset as bytes, defaults to `None`                                                             |
| `url`            | `str \| None`   | The optional URL where more information about the asset can be retrieved, defaults to `None`                            |
| `url_b64`        | `bytes \| None` | The optional URL where more information about the asset can be retrieved as bytes, defaults to `None`                   |
| `metadata_hash`  | `bytes \| None` | The 32-byte hash of some metadata that is relevant to the asset and/or asset holders, defaults to `None`                |

### `AccountAssetInformation`

Returned by `algorand.asset.get_account_information()`. Contains an account's holding of a particular asset.

| Field      | Type   | Description                                  |
| ---------- | ------ | -------------------------------------------- |
| `asset_id` | `int`  | The ID of the asset                          |
| `balance`  | `int`  | The amount of the asset held by the account  |
| `frozen`   | `bool` | Whether the asset is frozen for this account |
| `round`    | `int`  | The round this information was retrieved at  |

### `BulkAssetOptInOutResult`

Returned by `algorand.asset.bulk_opt_in()` and `algorand.asset.bulk_opt_out()`. Contains the result for each asset in a bulk operation.

| Field            | Type  | Description                                      |
| ---------------- | ----- | ------------------------------------------------ |
| `asset_id`       | `int` | The ID of the asset opted into / out of          |
| `transaction_id` | `str` | The transaction ID of the resulting opt in / out |
