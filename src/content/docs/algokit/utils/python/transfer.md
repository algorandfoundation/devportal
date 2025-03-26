---
title: Algo transfers (payments)
---

Algo transfers, or [payments](https://dev.algorand.co/concepts/transactions/types#payment-transaction), is a higher-order use case capability provided by AlgoKit Utils that builds on top of the core capabilities, particularly [Algo amount handling](amount) and [Transaction management](transaction). It allows you to easily initiate Algo transfers between accounts, including dispenser management and idempotent account funding.

To see some usage examples check out the automated tests in the repository.

## `payment`

The key function to facilitate Algo transfers is `algorand.send.payment(params)` (immediately send a single payment transaction), `algorand.create_transaction.payment(params)` (construct a payment transaction), or `algorand.new_group().add_payment(params)` (add payment to a group of transactions) per [`AlgorandClient`](algorand-client) [transaction semantics](algorand-client#creating-and-issuing-transactions).

The base type for specifying a payment transaction is `PaymentParams`, which has the following parameters in addition to the [common transaction parameters](algorand-client#transaction-parameters):

- `receiver: str` - The address of the account that will receive the Algo
- `amount: AlgoAmount` - The amount of Algo to send
- `close_remainder_to: Optional[str]` - If given, close the sender account and send the remaining balance to this address (**warning:** use this carefully as it can result in loss of funds if used incorrectly)

```python
# Minimal example
result = algorand_client.send.payment(
    PaymentParams(
        sender="SENDERADDRESS",
        receiver="RECEIVERADDRESS",
        amount=AlgoAmount(4, "algo")
    )
)

# Advanced example
result2 = algorand_client.send.payment(
    PaymentParams(
        sender="SENDERADDRESS",
        receiver="RECEIVERADDRESS",
        amount=AlgoAmount(4, "algo"),
        close_remainder_to="CLOSEREMAINDERTOADDRESS",
        lease="lease",
        note=b"note",
        # Use this with caution, it's generally better to use algorand_client.account.rekey_account
        rekey_to="REKEYTOADDRESS",
        # You wouldn't normally set this field
        first_valid_round=1000,
        validity_window=10,
        extra_fee=AlgoAmount(1000, "microalgo"),
        static_fee=AlgoAmount(1000, "microalgo"),
        # Max fee doesn't make sense with extra_fee AND static_fee
        # already specified, but here for completeness
        max_fee=AlgoAmount(3000, "microalgo"),
        # Signer only needed if you want to provide one,
        # generally you'd register it with AlgorandClient
        # against the sender and not need to pass it in
        signer=transaction_signer,
    ),
    send_params=SendParams(
        max_rounds_to_wait=5,
        suppress_log=True,
    )
)
```

## `ensure_funded`

The `ensure_funded` function automatically funds an account to maintain a minimum amount of [disposable Algo](https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr). This is particularly useful for automation and deployment scripts that get run multiple times and consume Algo when run.

There are 3 variants of this function:

- `algorand_client.account.ensure_funded(account_to_fund, dispenser_account, min_spending_balance, options)` - Funds a given account using a dispenser account as a funding source such that the given account has a certain amount of Algo free to spend (accounting for Algo locked in minimum balance requirement).
- `algorand_client.account.ensure_funded_from_environment(account_to_fund, min_spending_balance, options)` - Funds a given account using a dispenser account retrieved from the environment, per the `dispenser_from_environment` method, as a funding source such that the given account has a certain amount of Algo free to spend (accounting for Algo locked in minimum balance requirement).
  - **Note:** requires environment variables to be set.
  - The dispenser account is retrieved from the account mnemonic stored in `DISPENSER_MNEMONIC` and optionally `DISPENSER_SENDER`
    if it’s a rekeyed account, or against default LocalNet if no environment variables present.
- `algorand_client.account.ensure_funded_from_testnet_dispenser_api(account_to_fund, dispenser_client, min_spending_balance, options)` - Funds a given account using the [TestNet Dispenser API](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api) as a funding source such that the account has a certain amount of Algo free to spend (accounting for Algo locked in minimum balance requirement).

The general structure of these calls is similar, they all take:

- `account_to_fund: str | Account` - Address or signing account of the account to fund
- The source (dispenser):
  - In `ensure_funded`: `dispenser_account: str | Account` - the address or signing account of the account to use as a dispenser
  - In `ensure_funded_from_environment`: Not specified, loaded automatically from the ephemeral environment
  - In `ensure_funded_from_testnet_dispenser_api`: `dispenser_client: TestNetDispenserApiClient` - a client instance of the TestNet dispenser API
- `min_spending_balance: AlgoAmount` - The minimum balance of Algo that the account should have available to spend (i.e., on top of the minimum balance requirement)
- An `options` object, which has:
  - [Common transaction parameters](algorand-client#transaction-parameters) (not for TestNet Dispenser API)
  - [Execution parameters](algorand-client#sending-a-single-transaction) (not for TestNet Dispenser API)
  - `min_funding_increment: Optional[AlgoAmount]` - When issuing a funding amount, the minimum amount to transfer; this avoids many small transfers if this function gets called often on an active account

### Examples

```python
# From account

# Basic example
algorand_client.account.ensure_funded("ACCOUNTADDRESS", "DISPENSERADDRESS", AlgoAmount(1, "algo"))
# With configuration
algorand_client.account.ensure_funded(
    "ACCOUNTADDRESS",
    "DISPENSERADDRESS",
    AlgoAmount(1, "algo"),
    min_funding_increment=AlgoAmount(2, "algo"),
    fee=AlgoAmount(1000, "microalgo"),
    send_params=SendParams(
        suppress_log=True,
    ),
)

# From environment

# Basic example
algorand_client.account.ensure_funded_from_environment("ACCOUNTADDRESS", AlgoAmount(1, "algo"))
# With configuration
algorand_client.account.ensure_funded_from_environment(
    "ACCOUNTADDRESS",
    AlgoAmount(1, "algo"),
    min_funding_increment=AlgoAmount(2, "algo"),
    fee=AlgoAmount(1000, "microalgo"),
    send_params=SendParams(
        suppress_log=True,
    ),
)

# TestNet Dispenser API

# Basic example
algorand_client.account.ensure_funded_from_testnet_dispenser_api(
    "ACCOUNTADDRESS",
    algorand_client.client.get_testnet_dispenser_from_environment(),
    AlgoAmount(1, "algo")
)
# With configuration
algorand_client.account.ensure_funded_from_testnet_dispenser_api(
    "ACCOUNTADDRESS",
    algorand_client.client.get_testnet_dispenser_from_environment(),
    AlgoAmount(1, "algo"),
    min_funding_increment=AlgoAmount(2, "algo"),
)
```

All 3 variants return an `EnsureFundedResponse` (and the first two also return a [single transaction result](algorand-client#sending-a-single-transaction)) if a funding transaction was needed, or `None` if no transaction was required:

- `amount_funded: AlgoAmount` - The number of Algo that was paid
- `transaction_id: str` - The ID of the transaction that funded the account

If you are using the TestNet Dispenser API then the `transaction_id` is useful if you want to use the [refund functionality](dispenser-client#registering-a-refund).

## Dispenser

If you want to programmatically send funds to an account so it can transact then you will often need a “dispenser” account that has a store of Algo that can be sent and a private key available for that dispenser account.

There’s a number of ways to get a dispensing account in AlgoKit Utils:

- Get a dispenser via [account manager](account#dispenser) - either automatically from [LocalNet](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/localnet) or from the environment
- By programmatically creating one of the many account types via [account manager](account#accounts)
- By programmatically interacting with [KMD](account#kmd-account-management) if running against LocalNet
- By using the [AlgoKit TestNet Dispenser API client](dispenser-client) which can be used to fund accounts on TestNet via a dedicated API service
