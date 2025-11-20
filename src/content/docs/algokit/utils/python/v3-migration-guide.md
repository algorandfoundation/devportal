---
title: Python Utils v3 Migration Guide
sidebar:
  label: v3 Migration Guide
  order: 0
---

Version 3 of `algokit-utils-ts` moved from a stateless function-based interface to a stateful class-based interfaces. This change allows for:

- Easier and simpler consumption experience guided by IDE autocompletion
- Less redundant parameter passing (e.g., `algod` client)
- Better performance through caching of commonly retrieved values like transaction parameters
- More consistent and intuitive API design
- Stronger type safety and better error messages
- Improved ARC-56 compatibility
- Feature parity with `algokit-utils-ts` >= `v7` interfaces

The entry point to most functionality in AlgoKit Utils is now available via a single entry-point, the `AlgorandClient` class.

The v2 interfaces and abstractions will be removed in future major version bumps, however in order to ensure gradual migration, _all v2 abstractions are available_ with respective deprecation warnings. The new way to use AlgoKit Utils is via the `AlgorandClient` class, which is easier, simpler, and more convenient to use and has powerful new features.

> BREAKING CHANGE: the `beta` module is now removed, any imports from `algokit_utils.beta` will now raise an error with a link to a new expected import path. This is due to the fact that the interfaces introduced in `beta` are now refined and available in the main module.

## Migration Steps

In general, your codebase might fall into one of the following migration scenarios:

- Using `algokit-utils-py` v2.x only without use of abstractions from `beta` module
- Using `algokit-utils-py` v2.x only and with use of abstractions from `beta` module
- Using `algokit-utils-py` v2.x with `algokit-client-generator-py` v1.x
- Using `algokit-client-generator-py` v1.x only (implies implicit dependency on `algokit-utils-py` v2.x)

Given that `algokit-utils-py` v3.x is backwards compatible with `algokit-client-generator-py` v1.x, the following general guidelines are applicable to all scenarios (note that the order of operations is important to ensure straight-forward migration):

1. Upgrade to `algokit-utils-py` v3.x
   - 1.1 (If used) Update imports from `algokit_utils.beta` to `algokit_utils`
   - 1.2 Follow hints in deprecation warnings to update your codebase to rely on latest v3 interfaces
2. Upgrade to `algokit-client-generator-py` v2.x and regenerate typed clients
   - 2.1 Follow `algokit-client-generator-py` [v2.x migration guide](https://github.com/algorandfoundation/algokit-client-generator-py/blob/main/docs/v2-migration-guide.md)

The remaining set of guidelines are outlining migrations for specific abstractions that had direct equivalents in `algokit-utils-py` v2.x.

### Prerequisites

It is important to reiterate that if you have previously relied on `beta` versions of `algokit-utils-py` v2.x, you will need to update your imports to rely on the new interfaces. Errors thrown during import from `beta` will provide a description of the new expected import path.

> As with `v2.x` all public abstractions in `algokit_utils` are available for direct imports `from algokit_utils import ...`, however underlying modules have been refined to be structured loosely around common AVM domains such as `applications`, `transactions`, `accounts`, `assets`, etc. See [API reference](https://algokit-utils-py.readthedocs.io/en/latest/api_reference/index.html) for latest and detailed overview.

### Step 1 - Replace SDK Clients with AlgorandClient

First, replace your SDK client initialization with `AlgorandClient`. Look for `get_algod_client` calls and replace with an appropriate `AlgorandClient` initialization:

```python
"""Before"""
import algokit_utils
algod = algokit_utils.get_algod_client()
indexer = algokit_utils.get_indexer_client()

"""After"""
from algokit_utils import AlgorandClient
algorand = AlgorandClient.from_environment()  # or .testnet(), .mainnet(), etc.
```

During migration, you can still access SDK clients if needed:

```python
algod = algorand.client.algod
indexer = algorand.client.indexer
kmd = algorand.client.kmd
```

### Step 2 - Update Account Management

Account management has moved to `algorand.account`:

#### Before:

```python
account = algokit_utils.get_account_from_mnemonic(
    mnemonic=os.getenv("MY_ACCOUNT_MNEMONIC"),
)
dispenser = algokit_utils.get_dispenser_account(algod)
```

#### After:

```python
account = algorand.account.from_mnemonic(os.getenv("MY_ACCOUNT_MNEMONIC"))
dispenser = algorand.account.dispenser_from_environment()
```

Key changes:

- `get_account` → `account.from_environment`
- `get_account_from_mnemonic` → `account.from_mnemonic`
- `get_dispenser_account` → `account.dispenser_from_environment`
- `get_localnet_default_account` → `account.localnet_dispenser`

### Step 3 - Update Transaction Management

Transaction creation and sending is now more structured:

#### Before:

```python

result = algokit_utils.transfer_algos(
    from_account=account,
    to_addr="RECEIVER",
    amount=algokit_utils.algos(1),
    algod_client=algod,
)

# Transaction groups
atc = AtomicTransactionComposer()
# ... add transactions ...
result = algokit_utils.execute_atc_with_logic_error(atc, algod)
```

#### After:

```python
# Single transaction
result = algorand.send.payment(
    sender=account.address,
    receiver="RECEIVER",
    amount=AlgoAmount.from_algo(1),
)

# Transaction groups
composer = algorand.new_group()
# ... add transactions ...
result = composer.send()
```

Key changes:

- `transfer_algos` → `algorand.send.payment`
- `transfer_asset` → `algorand.send.asset_transfer`
- `execute_atc_with_logic_error` → `composer.send()`
- Transaction parameters are now more consistently named (e.g., `sender` instead of `from_account`)
- Improved amount handling with dedicated `AlgoAmount` class (e.g., `AlgoAmount.from_algo(1)`)

### Step 4 - Update `ApplicationSpecification` usage

`ApplicationSpecification` abstraction is largely identical to v2, however it’s been renamed to `Arc32Contract` to better reflect the fact that it’s a contract specification for a specific ARC and addition of `Arc56Contract` supporting the latest recommended conventions. Hence the main actionable change is to update your import to `from algokit_utils import Arc32Contract` and rename `ApplicationSpecification` to `Arc32Contract`.

You can instantiate an `Arc56Contract` instance from an `Arc32Contract` instance using the `Arc56Contract.from_arc32` method. For instance:

```python
testing_app_arc32_app_spec = Arc32Contract.from_json(app_spec_json)
arc56_app_spec = Arc56Contract.from_arc32(testing_app_arc32_app_spec)
```

> Despite auto conversion of ARC-32 to ARC-56, we recommend recompiling your contract to a fully compliant ARC-56 specification given that auto conversion would skip populating information that can’t be parsed from raw ARC-32.

### Step 5 - Replace `ApplicationClient` usage

The existing `ApplicationClient` (untyped app client) class is still present until at least v4, but it’s worthwhile migrating to the new [`AppClient` and `AppFactory` classes](/algokit/utils/python/app-client/). These new clients are [ARC-56](https://github.com/algorandfoundation/ARCs/pull/258) compatible, but also support [ARC-32](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0032.md) app specs and will continue to support this indefinitely until such time the community deems they are deprecated.

All of the functionality in `ApplicationClient` is available within the new classes, but their interface is slightly different to make it easier to use and more consistent with the new `AlgorandClient` functionality. The key existing methods that have changed all have `@deprecation` notices to help guide you on this, but broadly the changes are:

- The app resolution semantics, now have static methods that determine different ways of constructing a client and the constructor itself is very simple (requiring `app_id`)
- If you want to call `create` or `deploy` then you need an `AppFactory` to do that, and then it will in turn give you an `AppClient` instance that is connected to the app you just created / deployed. This significantly simplifies the app client because now the app client has a clear operating purpose: allow for calls and state management for an _instance_ of an app, whereas the app factory handles all of the calls when you don’t have an instance yet (or may or may not have an instance in the case of `deploy`).
- This means that you can simply access `client.app_id` and `client.app_address` on `AppClient` since these values are known statically and won’t change (previously associated calls to `app_address`, `app_id` properties potentially required extra API calls as the values weren’t always available).
- Adding `fund_app_account` which serves as a convenience method to top up the balance of address associated with application.
- All of the methods that return or execute a transaction (`update`, `call`, `opt_in`, etc.) are now exposed in an interface similar to the one in [`AlgorandClient`](/algokit/utils/python/algorand-client/#creating-and-issuing-transactions), namely (where `{call_type}` is one of: `update` / `delete` / `opt_in` / `close_out` / `clear_state` / `call`):
  - `appClient.create_transaction.{callType}` to get a transaction for an ABI method call
  - `appClient.send.{call_type}` to sign and send a transaction for an ABI method call
  - `appClient.params.{call_type}` to get a [params object](/algokit/utils/python/algorand-client/#transaction-parameters) for an ABI method call
  - `appClient.create_transaction.bare.{call_type}` to get a transaction for a bare app call
  - `appClient.send.bare.{call_type}` to sign and send a transaction for a bare app call
  - `appClient.params.bare.{call_type}` to get a [params object](/algokit/utils/python/algorand-client/#transaction-parameters) for a bare app call
- The semantics to resolve the application is now available via [simpler entrypoints within `algorand.client`](/algokit/utils/python/app-client/#appclient)
- When making an ABI method call, the method arguments property is are now passed via explicit `args` field in a parameters dataclass applicable to the method call.
- The foreign reference arrays have been renamed to align with typed parameters on `ts` and related core `algosdk`:
  - `boxes` -> `box_references`
  - `apps` -> `app_references`
  - `assets` -> `asset_references`
  - `accounts` -> `account_references`
- The return value for methods that send a transaction will have any ABI return value directly in the `abi_return` property rather than the low level algosdk `ABIResult` type while also automatically decoding values based on provided ARC56 spec.

### Step 6 - Replace typed app client usage

Version 2 of the Python typed app client generator introduces breaking changes to the generated client that support the new `AppFactory` and `AppClient` functionality along with adding ARC-56 support. The generated client has better typing support for things like state commensurate with the new capabilities within ARC-56.

It’s worth noting that because we have maintained backwards compatibility with the pre v2 `algokit-utils-py` stateless functions, older typed clients generated using version 1 of the Python typed client generator will work against v3 of utils, however you won’t have access to the new features or ARC-56 support.

If you want to convert from an older typed client to a new one you will need to make certain changes. Refer to [client generator v2 migration guide](https://github.com/algorandfoundation/algokit-client-generator-py/blob/main/docs/v2-migration.md).

### Step 7 - Update `AppClient` State Management

State management is now more structured and type-safe:

```python
"""Before"""
global_state = app_client.get_global_state()
local_state = app_client.get_local_state(account_address)
box_value = app_client.get_box_value("box_name")

"""After"""
# Global state
global_state = app_client.state.global_state.get_all()
value = app_client.state.global_state.get_value("key_name")
map_value = app_client.state.global_state.get_map_value("map_name", "key")

# Local state
local_state = app_client.state.local_state(account_address).get_all()
value = app_client.state.local_state(account_address).get_value("key_name")
map_value = app_client.state.local_state(account_address).get_map_value("map_name", "key")

# Box storage
box_value = app_client.state.box.get_value("box_name")
boxes = app_client.state.box.get_all()
map_value = app_client.state.box.get_map_value("map_name", "key")
```

### Step 8 - Update Asset Management

Asset management is now more consistent:

```python
"""Before"""
result = algokit_utils.opt_in(algod, account, [asset_id])

"""After"""
result = algorand.send.asset_opt_in(
    params=AssetOptInParams(
        sender=account.address,
        asset_id=asset_id,
    )
)
```

## Breaking Changes

1. **Client Management**
   - Removal of standalone client creation functions
   - All clients now accessed through `AlgorandClient`
2. **Account Management**
   - Account creation functions moved to `AccountManager` accessible via `algorand.account` property
   - Unified `TransactionSignerAccountProtocol` with compliant and typed `SigningAccount`, `TransactionSignerAccount`, `LogicSigAccount`, `MultiSigAccount` classes encapsulating low level `algosdk` abstractions.
   - Improved typing for account operations, such as obtaining account information from `algod`, returning a typed information object.
3. **Transaction Management**
   - Consistent and intuitive transaction creation and sending interface accessible via `algorand.{send|params|create_transaction}` properties
   - New transaction composition interface accessible via `algorand.new_group`
   - Removing necessity to interact with low level and untyped `algosdk` abstractions for assembling, signing and sending transaction(s).
4. **Application Client**
   - Split into `AppClient`, `AppDeployer` and `AppFactory`
   - `deploy` method in `AppFactory`/`AppDeployer` no longer auto increments the contract version by default. It is the user’s responsibility to explicitly manage versioning of their smart contracts (if desired).
   - New intuitive structured interface for creating or sending `AppCall`|`AppMethodCall` transactions
   - ARC-56 support along with automatic conversion of specs from ARC-32 to ARC-56
5. **State Management**
   - New hierarchical state access available via `app_client.state.{global_state|local_state|box}` properties
   - Improved typing for state values
   - Support for ARC-56 state schemas
6. **Asset Management**
   - Dedicated `AssetManager` class for asset management accessible via `algorand.asset` property
   - Improved typing for asset operations, such as obtaining asset information from `algod`, returning a typed information object.
   - Consistent interface for asset opt-in, transfer, freeze, etc.

## Best Practices

1. Use the new `AlgorandClient` as the main entry point
2. Leverage IDE autocompletion to discover available functionality, consult with [API reference](https://algokit-utils-py.readthedocs.io/en/latest/api_reference/index.html) when unsure
3. Use the transaction parameter builders for type-safe transaction creation (`algorand.params.{}`)
4. Use the state accessor patterns for cleaner state management {`algorand.state.{}`}
5. Use high level `TransactionComposer` interface over low level `algosdk` abstractions (where possible)
6. Use source maps and debug mode to quickly troubleshoot on-chain errors
7. Use idempotent deployment patterns with versioning

## Troubleshooting

### A v2 interface/method/class does not display a deprecation warning correctly or at all

Submit an issue to [algokit-utils-py](https://github.com/algorandfoundation/algokit-utils-py/issues) with a description of the problem and the code that is causing it.

### Useful scenario of converting v2 to v3 not covered in generic migration guide

If you have a scenario that you think is useful and not covered in the generic migration guide, please submit an issue to [algokit-utils-py](https://github.com/algorandfoundation/algokit-utils-py/issues) with a scenario.
