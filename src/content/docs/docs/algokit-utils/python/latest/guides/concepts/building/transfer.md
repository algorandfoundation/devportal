---
title: "Algo transfers (payments)"
description: "Algo transfers, or [payments](https://dev.algorand.co/concepts/transactions/types/#payment-transaction), is a higher-order use case capability provided by AlgoKit Utils that builds on top of the core capabilities, particularly [Algo amount handling](/docs/algokit-utils/python/latest/guides/concepts/core/amount/) and [Transaction management](/docs/algokit-utils/python/latest/guides/concepts/core/transaction/). It allows you to easily initiate Algo transfers between accounts, including dispenser management and idempotent account funding."
---

Algo transfers, or [payments](https://dev.algorand.co/concepts/transactions/types/#payment-transaction), is a higher-order use case capability provided by AlgoKit Utils that builds on top of the core capabilities, particularly [Algo amount handling](/docs/algokit-utils/python/latest/guides/concepts/core/amount/) and [Transaction management](/docs/algokit-utils/python/latest/guides/concepts/core/transaction/). It allows you to easily initiate Algo transfers between accounts, including dispenser management and idempotent account funding.

To see some usage examples check out the `automated tests`.

## payment

The key function to facilitate Algo transfers is `algorand.send.payment(params)` (immediately send a single payment transaction), `algorand.create_transaction.payment(params)` (construct a payment transaction), or `algorand.new_group().add_payment(params)` (add payment to a group of transactions) per [`AlgorandClient`](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/) [transaction semantics](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/#creating-and-issuing-transactions).

The base type for specifying a payment transaction is `PaymentParams`, which has the following parameters in addition to the [common transaction parameters](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/#transaction-parameters):

- `receiver: str` - The address of the account that will receive the Algo
- `amount: AlgoAmount` - The amount of Algo to send
- `close_remainder_to: str | None` - If given, close the sender account and send the remaining balance to this address (**warning:** use this carefully as it can result in loss of funds if used incorrectly)

```python
# Minimal example
result = algorand.send.payment(
    PaymentParams(
        sender="SENDERADDRESS",
        receiver="RECEIVERADDRESS",
        amount=AlgoAmount(algo=4),
    )
)

# Advanced example
result2 = algorand.send.payment(
    PaymentParams(
        sender="SENDERADDRESS",
        receiver="RECEIVERADDRESS",
        amount=AlgoAmount(algo=4),
        close_remainder_to="CLOSEREMAINDERTOADDRESS",
        lease=b"lease",
        note=b"note",
        # Use this with caution, it's generally better to use algorand.account.rekey_account
        rekey_to="REKEYTOADDRESS",
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

## ensure_funded

The `ensure_funded` function automatically funds an account to maintain a minimum amount of [disposable Algo](https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr). This is particularly useful for automation and deployment scripts that get run multiple times and consume Algo when run.

There are 3 variants of this function:

- `algorand.account.ensure_funded(account_to_fund, dispenser_account, min_spending_balance, options)` - Funds a given account using a dispenser account as a funding source such that the given account has a certain amount of Algo free to spend (accounting for Algo locked in minimum balance requirement).
- `algorand.account.ensure_funded_from_environment(account_to_fund, min_spending_balance, options)` - Funds a given account using a dispenser account retrieved from the environment, per the [`dispenser_from_environment`](#dispenser) method, as a funding source such that the given account has a certain amount of Algo free to spend (accounting for Algo locked in minimum balance requirement).
  - **Note:** requires environment variables to be set.
  - The dispenser account is retrieved from the account mnemonic stored in `DISPENSER_MNEMONIC` and optionally `DISPENSER_SENDER`
    if it's a rekeyed account, or against default LocalNet if no environment variables present.
- `algorand.account.ensure_funded_from_testnet_dispenser_api(account_to_fund, dispenser_client, min_spending_balance, options)` - Funds a given account using the [TestNet Dispenser API](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md) as a funding source such that the account has a certain amount of Algo free to spend (accounting for Algo locked in minimum balance requirement).

The general structure of these calls is similar, they all take:

- `account_to_fund: str | AddressWithTransactionSigner | AddressWithSigners` - Address or signing account of the account to fund
- The source (dispenser):
  - In `ensure_funded`: `dispenser_account: str | AddressWithTransactionSigner | AddressWithSigners` - the address or signing account of the account to use as a dispenser
  - In `ensure_funded_from_environment`: Not specified, loaded automatically from the ephemeral environment
  - In `ensure_funded_from_testnet_dispenser_api`: `dispenser_client: TestNetDispenserApiClient` - a client instance of the [TestNet dispenser API](/docs/algokit-utils/python/latest/guides/concepts/advanced/dispenser-client/)
- `min_spending_balance: AlgoAmount` - The minimum balance of Algo that the account should have available to spend (i.e., on top of the minimum balance requirement)
- An `options` object, which has:
  - [Common transaction parameters](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/#transaction-parameters) (not for TestNet Dispenser API)
  - [Execution parameters](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/#sending-a-single-transaction) (not for TestNet Dispenser API)
  - `min_funding_increment: AlgoAmount | None` - When issuing a funding amount, the minimum amount to transfer; this avoids many small transfers if this function gets called often on an active account

### Examples

```python
# From account

# Basic example
algorand.account.ensure_funded("ACCOUNTADDRESS", "DISPENSERADDRESS", AlgoAmount(algo=1))
# With configuration
algorand.account.ensure_funded(
    "ACCOUNTADDRESS",
    "DISPENSERADDRESS",
    AlgoAmount(algo=1),
    min_funding_increment=AlgoAmount(algo=2),
    static_fee=AlgoAmount(micro_algo=1000),
    send_params=SendParams(
        suppress_log=True,
    ),
)

# From environment

# Basic example
algorand.account.ensure_funded_from_environment("ACCOUNTADDRESS", AlgoAmount(algo=1))
# With configuration
algorand.account.ensure_funded_from_environment(
    "ACCOUNTADDRESS",
    AlgoAmount(algo=1),
    min_funding_increment=AlgoAmount(algo=2),
    static_fee=AlgoAmount(micro_algo=1000),
    send_params=SendParams(
        suppress_log=True,
    ),
)

# TestNet Dispenser API

# Basic example
algorand.account.ensure_funded_from_testnet_dispenser_api(
    "ACCOUNTADDRESS",
    algorand.client.get_testnet_dispenser(),
    AlgoAmount(algo=1),
)
# With configuration
algorand.account.ensure_funded_from_testnet_dispenser_api(
    "ACCOUNTADDRESS",
    algorand.client.get_testnet_dispenser(),
    AlgoAmount(algo=1),
    min_funding_increment=AlgoAmount(algo=2),
)
```

The first two variants return an `EnsureFundedResult` (which also extends the [single transaction result](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/#sending-a-single-transaction)) if a funding transaction was needed, or `None` if no transaction was required. The TestNet Dispenser API variant returns an `EnsureFundedFromTestnetDispenserApiResult` or `None`. All result types share these common fields:

- `amount_funded: AlgoAmount` - The number of Algo that was paid
- `transaction_id: str` - The ID of the transaction that funded the account

If you are using the TestNet Dispenser API then the `transaction_id` is useful if you want to use the [refund functionality](/docs/algokit-utils/python/latest/guides/concepts/advanced/dispenser-client/#registering-a-refund).

## Dispenser

If you want to programmatically send funds to an account so it can transact then you will often need a "dispenser" account that has a store of Algo that can be sent and a private key available for that dispenser account.

There's a number of ways to get a dispensing account in AlgoKit Utils:

- Get a dispenser via [account manager](/docs/algokit-utils/python/latest/guides/concepts/core/account/#dispenser) - either automatically from [LocalNet](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/localnet.md) or from the environment
- By programmatically creating one of the many account types via [account manager](/docs/algokit-utils/python/latest/guides/concepts/core/account/#accounts)
- By programmatically interacting with [KMD](/docs/algokit-utils/python/latest/guides/concepts/core/account/#kmd-account-management) if running against LocalNet
- By using the [AlgoKit TestNet Dispenser API client](/docs/algokit-utils/python/latest/guides/concepts/advanced/dispenser-client/) which can be used to fund accounts on TestNet via a dedicated API service
