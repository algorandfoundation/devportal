---
title: "Getting Started"
description: "Tutorials and guides to help you get started with AlgoKit Utils for Python."
---

Welcome to the AlgoKit Utils for Python tutorials! These guides will help you get up and running quickly.

## Prerequisites

- **Python 3.10+**
- **AlgoKit CLI** installed ([installation guide](https://github.com/algorandfoundation/algokit-cli#install))
- **Docker** (for running LocalNet)

## Installation

Install via your preferred package manager:

```bash
pip install algokit-utils
# or
poetry add algokit-utils
# or
uv add algokit-utils
```

## Your First Transaction

Here's a complete example that connects to LocalNet, creates a funded account, and sends a payment:

```python
from algokit_utils import AlgorandClient, AlgoAmount, PaymentParams

# Connect to LocalNet
algorand = AlgorandClient.default_localnet()

# Create and fund a new account
account = algorand.account.random()
dispenser = algorand.account.localnet_dispenser()
algorand.account.ensure_funded(
    account,
    dispenser,
    min_spending_balance=AlgoAmount.from_algo(10),
)

# Send a payment
result = algorand.send.payment(
    PaymentParams(
        sender=account.addr,
        receiver=dispenser.addr,
        amount=AlgoAmount.from_algo(1),
    )
)

print(f"Transaction ID: {result.tx_id}")
```

## What's Next?

Once you're comfortable with the basics, explore these concept guides:

- [**Algorand client**](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/) - The main entry point for all functionality
- [**Account management**](/docs/algokit-utils/python/latest/guides/concepts/core/account/) - Create and manage accounts
- [**App client and App factory**](/docs/algokit-utils/python/latest/guides/concepts/building/app-client/) - Deploy and interact with smart contracts
- [**Transaction composer**](/docs/algokit-utils/python/latest/guides/concepts/advanced/transaction-composer/) - Build complex transaction groups
- [**Automated testing**](/docs/algokit-utils/python/latest/guides/concepts/building/testing/) - Patterns for testing with pytest
