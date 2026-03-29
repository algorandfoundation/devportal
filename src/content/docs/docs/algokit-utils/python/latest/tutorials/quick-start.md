---
title: 'Quick Start'
description: 'Get up and running with AlgoKit Utils in 5 minutes.'
---

Get up and running with AlgoKit Utils in 5 minutes.

## Prerequisites

- Python 3.10+
- [AlgoKit CLI](https://github.com/algorandfoundation/algokit-cli) installed
- LocalNet running (`algokit localnet start`)

## Installation

```bash
pip install algokit-utils
# or
poetry add algokit-utils
# or
uv add algokit-utils
```

## Your First Transaction

Create a file called `hello_algorand.py`:

```python
from algokit_utils import AlgorandClient, AlgoAmount, PaymentParams

# 1. Connect to LocalNet
algorand = AlgorandClient.default_localnet()

# 2. Create a new random account
sender = algorand.account.random()
print(f"Created account: {sender.addr}")

# 3. Fund the account from the LocalNet dispenser
algorand.account.ensure_funded(sender, algorand.account.localnet_dispenser(), min_spending_balance=AlgoAmount.from_algo(10))
print("Funded account with 10 ALGO")

# 4. Check the balance
info = algorand.account.get_information(sender)
print(f"Balance: {info.amount.algo} ALGO")

# 5. Create a second account and send a payment
receiver = algorand.account.random()

result = algorand.send.payment(
    PaymentParams(
        sender=sender.addr,
        receiver=receiver.addr,
        amount=AlgoAmount.from_algo(1),
    )
)

print(f"Payment sent! Transaction ID: {result.tx_id}")

# 6. Check receiver balance
receiver_info = algorand.account.get_information(receiver)
print(f"Receiver balance: {receiver_info.amount.algo} ALGO")
```

Run it:

```bash
python hello_algorand.py
```

## What's Next?

- [AlgorandClient](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) — Learn about the main entry point
- [Account Management](/docs/algokit-utils/python/latest/concepts/core/account/) — Different ways to create and manage accounts
- [Transaction Management](/docs/algokit-utils/python/latest/concepts/core/transaction/) — Build and send transactions
- [App Client](/docs/algokit-utils/python/latest/concepts/building/app-client/) — Deploy and interact with smart contracts
- [Examples](/docs/algokit-utils/python/latest/examples/) — Browse 100+ runnable examples
