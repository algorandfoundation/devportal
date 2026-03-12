---
title: "Account management"
description: "Account management is one of the core capabilities provided by AlgoKit Utils. It allows you to create mnemonic, rekeyed, multisig, transaction signer, idempotent KMD and environment variable injected accounts that can be used to sign transactions as well as representing a sender address at the same time. This significantly simplifies management of transaction signing."
---

Account management is one of the core capabilities provided by AlgoKit Utils. It allows you to create mnemonic, rekeyed, multisig, transaction signer, idempotent KMD and environment variable injected accounts that can be used to sign transactions as well as representing a sender address at the same time. This significantly simplifies management of transaction signing.

## `AccountManager`

The `AccountManager` is a class that is used to get, create, and fund accounts and perform account-related actions such as funding. The `AccountManager` also keeps track of signers for each address so when using the [`TransactionComposer`](/docs/algokit-utils/python/latest/concepts/core/advanced/transaction-composer/) to send transactions, a signer function does not need to manually be specified for each transaction - instead it can be inferred from the sender address automatically!

To get an instance of `AccountManager`, you can use either [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) via `algorand.account` or instantiate it directly:

```python
from algokit_utils import AccountManager

account_manager = AccountManager(client_manager)
```

## `AddressWithTransactionSigner`

The core internal type that holds information about a signer/sender pair for a transaction is `AddressWithTransactionSigner`, which represents a `TransactionSigner` (`signer`) along with a sender address (`addr`).

Many methods in `AccountManager` expose an `AddressWithTransactionSigner`. `AddressWithTransactionSigner` can be used with [`TransactionComposer`](/docs/algokit-utils/python/latest/concepts/core/advanced/transaction-composer/).

`AddressWithTransactionSigner` is a `Protocol` — any object that provides an `addr: str` property (via the `Addressable` protocol) and a `signer: TransactionSigner` property structurally conforms to it. The following built-in types satisfy this protocol:

| Type | Description | Created via |
| --- | --- | --- |
| [`AddressWithSigners`](#underlying-account-classes) | Standard account with private key | `algorand.account.random()`, `algorand.account.from_mnemonic()` |
| [`LogicSigAccount`](#logicsigaccount) | Logic signature account | `algorand.account.logicsig()` |
| [`MultisigAccount`](#multisigaccount) | Multisig account | `algorand.account.multisig()` |

You can also create your own conforming type by implementing a class with `addr` and `signer` properties. Since `AddressWithTransactionSigner` is decorated with `@runtime_checkable`, you can verify conformance at runtime with `isinstance()`.

Source: [`src/algokit_transact/signer.py`](https://github.com/algorandfoundation/algokit-utils-py/blob/main/src/algokit_transact/signer.py)

## Registering a signer

The `AccountManager` keeps track of which signer is associated with a given sender address. This is used by [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) to automatically sign transactions by that sender. Any of the [methods](#accounts) within `AccountManager` that return an account will automatically register the signer with the sender. If however, you are creating a signer external to the `AccountManager`, then you need to register the signer with the `AccountManager` if you want it to be able to automatically sign transactions from that sender.

There are two methods that can be used for this, `set_signer_from_account`, which takes any `AddressWithTransactionSigner` conforming object (such as `AddressWithSigners`, `LogicSigAccount`, or `MultisigAccount`), or `set_signer` which takes the sender address and the `TransactionSigner`:

```python
algorand.account \
  .set_signer_from_account(algorand.account.random()) \
  .set_signer_from_account(algorand.account.logicsig(program, args)) \
  .set_signer_from_account(
    algorand.account.multisig(
      MultisigMetadata(version=1, threshold=1, addrs=["ADDRESS1...", "ADDRESS2..."]),
      [account1, account2],
    )
  ) \
  .set_signer("SENDERADDRESS", transaction_signer)
```

You can also merge all signers from another `AccountManager` into the current one using `set_signers`:

```python
algorand.account.set_signers(another_account_manager=other_manager, overwrite_existing=True)
```

## Default signer

If you want to have a default signer that is used to sign transactions without a registered signer (rather than throwing an exception) then you can register a default signer. The parameter accepts either a `TransactionSigner` or an `AddressWithTransactionSigner`:

```python
algorand.account.set_default_signer(my_default_signer)
```

## Get a signer

[`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) will automatically retrieve a signer when signing a transaction, but if you need to get a `TransactionSigner` externally to do something more custom then you can retrieve the signer for a given sender address (or an `AddressWithTransactionSigner`):

```python
signer = algorand.account.get_signer("SENDER_ADDRESS")
```

If there is no signer registered for that sender address it will either return the default signer ([if registered](#default-signer)) or throw an exception.

## Get an account

If you need to retrieve the full account object (e.g. `AddressWithSigners`, `LogicSigAccount`, or `MultisigAccount`) that was previously registered for a given sender address:

```python
account = algorand.account.get_account("SENDER_ADDRESS")
```

## Get account information

You can retrieve the current on-chain information for a given account (balance, minimum balance, status, etc.):

```python
info = algorand.account.get_information("SENDER_ADDRESS")
# Returns an AccountInformation dataclass with properties like:
# info.amount (AlgoAmount), info.min_balance (AlgoAmount), info.status (str), etc.
```

The `sender` parameter accepts either a `str` address or an `AddressWithTransactionSigner`.

## Accounts

In order to get/register accounts for signing operations you can use the following methods on [`AccountManager`](#accountmanager) (expressed here as `algorand.account` to denote the syntax via an [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/)):

- `algorand.account.from_environment(name, fund_with)` - Registers and returns an account with private key loaded by convention based on the given name identifier - either by idempotently creating the account in KMD or from environment variable via `os.environ['{NAME}_MNEMONIC']` and (optionally) `os.environ['{NAME}_SENDER']` (if account is rekeyed)
  - This allows you to have powerful code that will automatically create and fund an account by name locally and when deployed against TestNet/MainNet will automatically resolve from environment variables, without having to have different code
  - Note: `fund_with` allows you to control how many Algo are seeded into an account created in KMD
- `algorand.account.from_mnemonic(mnemonic, sender)` - Registers and returns an account with secret key loaded by taking the mnemonic secret
- `algorand.account.multisig(metadata, sub_signers)` - Registers and returns a multisig account with one or more signing keys loaded
- `algorand.account.rekeyed(sender, account)` - Registers and returns an account representing the given rekeyed sender/signer combination. `account` accepts `AddressWithTransactionSigner | AddressWithSigners`
- `algorand.account.random()` - Returns a new, cryptographically randomly generated account with private key loaded
- `algorand.account.from_kmd(name, predicate, sender)` - Returns an account with private key loaded from the given KMD wallet (identified by name)
- `algorand.account.logicsig(program, args)` - Returns an account that represents a logic signature

### Underlying account classes

While `AddressWithTransactionSigner` is the main interface used to represent an account that can sign, there are underlying account classes that can underpin the signer.

- `AddressWithSigners` - An account that holds a private key and conforms to `AddressWithTransactionSigner`, created via `algorand.account.random()` or `algorand.account.from_mnemonic()`
- `LogicSigAccount` - A logic signature account for signing with a TEAL program
- `MultisigAccount` - A multisig account that supports multisig transactions with one or more signers present

> [!NOTE]
> In v4, `SigningAccount` was replaced by `AddressWithSigners`. If you are migrating from an earlier version, update any references to `SigningAccount` accordingly.

> [!NOTE]
> All account types support rekeyed accounts. You can use `algorand.account.rekeyed(sender, account)` to register a rekeyed sender/signer combination. See [Rekey account](#rekey-account) for details.

#### `LogicSigAccount`

A logic signature account for signing with a TEAL program. Extends `LogicSig` with delegation support.

| Property | Type | Description |
| --- | --- | --- |
| `sig` | `bytes \| None` | Single signature for delegation (if delegated to a single account) |
| `msig` | `MultisigSignature \| None` | Multisig signature (if part of a multisig) |
| `lmsig` | `MultisigSignature \| None` | Multisig-delegated logic sig signature |
| `is_delegated` | `bool` | Whether this LogicSig is delegated to an account |
| `signer` | `TransactionSigner` | Transaction signer callable for use with `TransactionComposer` |
| `addr` | `str` | The logic signature account address (conforms to `AddressWithTransactionSigner` protocol) |

Source: [`src/algokit_transact/logicsig.py`](https://github.com/algorandfoundation/algokit-utils-py/blob/main/src/algokit_transact/logicsig.py)

#### `MultisigAccount`

A multisig account that supports multisig transactions with one or more signers present.

| Property | Type | Description |
| --- | --- | --- |
| `params` | `MultisigMetadata` | The multisig account parameters (`version`, `threshold`, `addrs`) |
| `sub_signers` | `Sequence[AddressWithSigners]` | The list of signing accounts |
| `signer` | `TransactionSigner` | Transaction signer callable for use with `TransactionComposer` |
| `address` | `str` | The multisig account address |
| `addr` | `str` | Alias for `address` (conforms to `AddressWithTransactionSigner` protocol) |

Source: [`src/algokit_transact/multisig.py`](https://github.com/algorandfoundation/algokit-utils-py/blob/main/src/algokit_transact/multisig.py)

### Dispenser

- `algorand.account.dispenser_from_environment()` - Returns an account (with private key loaded) that can act as a dispenser from environment variables, or against default LocalNet if no environment variables present
- `algorand.account.localnet_dispenser()` - Returns an account with private key loaded that can act as a dispenser for the default LocalNet dispenser account

## Rekey account

One of the unique features of Algorand is the ability to change the private key that can authorise transactions for an account. This is called [rekeying](https://dev.algorand.co/concepts/accounts/rekeying).

> [!WARNING]
> Rekeying should be done with caution as a rekey transaction can result in permanent loss of control of an account.

You can issue a transaction to rekey an account by using the `algorand.account.rekey_account(account, rekey_to, **options)` function:

- `account: str` - The account address of the account that will be rekeyed
- `rekey_to: str | AddressWithTransactionSigner` - The account address or signing account of the account that will be used to authorise transactions for the rekeyed account going forward. If a signing account is provided that will now be tracked as the signer for `account` in the `AccountManager` instance.
- Additional keyword-only options:
  - [Common transaction parameters](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#transaction-parameters)
  - `suppress_log: bool | None` - Optionally suppress log output

You can also pass in `rekey_to` as a [common transaction parameter](/docs/algokit-utils/python/latest/concepts/core/algorand-client/#transaction-parameters) to any transaction.

### Examples

```python
# Basic example (with string addresses)
algorand.account.rekey_account(
    account="ACCOUNTADDRESS",
    rekey_to="NEWADDRESS",
)

# Basic example (with signer account for rekey_to)
algorand.account.rekey_account(
    account="ACCOUNTADDRESS",
    rekey_to=new_signer_account,
)

# Advanced example
algorand.account.rekey_account(
    account="ACCOUNTADDRESS",
    rekey_to="NEWADDRESS",
    lease=b"lease",
    note=b"note",
    first_valid_round=1000,
    validity_window=10,
    extra_fee=AlgoAmount.from_micro_algo(1000),
    static_fee=AlgoAmount.from_micro_algo(1000),
    # Max fee doesn't make sense with extra_fee AND static_fee
    #  already specified, but here for completeness
    max_fee=AlgoAmount.from_micro_algo(3000),
    suppress_log=True,
)

# Using a rekeyed account
# Note: if a signing account is passed into `algorand.account.rekey_account`
# then you don't need to call `rekeyed` to register the new signer
rekeyed_account = algorand.account.rekeyed(sender=account, account=new_account)
# rekeyed_account can be used to sign transactions on behalf of account...
```

# KMD account management

When running LocalNet, you have an instance of the [Key Management Daemon](https://github.com/algorand/go-algorand/blob/master/daemon/kmd/README.md), which is useful for:

- Accessing the private key of the default accounts that are pre-seeded with Algo so that other accounts can be funded and it's possible to use LocalNet
- Idempotently creating new accounts against a name that will stay intact while the LocalNet instance is running without you needing to store private keys anywhere (i.e. completely automated)

The KMD SDK is fairly low level so to make use of it there is a fair bit of boilerplate code that's needed. This code has been abstracted away into the `KmdAccountManager` class.

To get an instance of the `KmdAccountManager` class you can access it from [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) via `algorand.account.kmd` or instantiate it directly (passing in a [`ClientManager`](/docs/algokit-utils/python/latest/concepts/core/client/)):

```python
from algokit_utils import KmdAccountManager

kmd_account_manager = KmdAccountManager(client_manager)
```

The methods that are available are:

- `get_wallet_account(wallet_name, predicate, sender)` - Returns an Algorand signing account with private key loaded from the given KMD wallet (identified by name).
- `get_or_create_wallet_account(name, fund_with)` - Gets an account with private key loaded from a KMD wallet of the given name, or alternatively creates one with funds in it via a KMD wallet of the given name.
- `get_localnet_dispenser_account()` - Returns an Algorand account with private key loaded for the default LocalNet dispenser account (that can be used to fund other accounts).

```python
# Get a wallet account that seeded the LocalNet network
default_dispenser_account = kmd_account_manager.get_wallet_account(
    "unencrypted-default-wallet",
    lambda a: a["status"] != "Offline" and a["amount"] > 1_000_000_000,
)
# Same as above, but dedicated method call for convenience
localnet_dispenser_account = kmd_account_manager.get_localnet_dispenser_account()
# Idempotently get (if exists) or create (if it doesn't exist yet) an account by name using KMD
# if creating it then fund it with 2 ALGO from the default dispenser account
new_account = kmd_account_manager.get_or_create_wallet_account(
    "account1",
    AlgoAmount.from_algo(2),
)
# This will return the same account as above since the name matches
existing_account = kmd_account_manager.get_or_create_wallet_account("account1")
```

Some of this functionality is directly exposed from [`AccountManager`](#accountmanager), which has the added benefit of registering the account as a signer so they can be automatically used to sign transactions when using via [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/):

```python
# Get and register LocalNet dispenser
localnet_dispenser = algorand.account.localnet_dispenser()
# Get and register a dispenser by environment variable, or if not set then LocalNet dispenser via KMD
dispenser = algorand.account.dispenser_from_environment()
# Get an account from KMD idempotently by name. In this case we'll get the default dispenser account
dispenser_via_kmd = algorand.account.from_kmd(
    "unencrypted-default-wallet",
    lambda a: a["status"] != "Offline" and a["amount"] > 1_000_000_000,
)
# Get / create and register account from KMD idempotently by name
fresh_account_via_kmd = algorand.account.kmd.get_or_create_wallet_account(
    "account1", AlgoAmount.from_algo(2)
)
```
