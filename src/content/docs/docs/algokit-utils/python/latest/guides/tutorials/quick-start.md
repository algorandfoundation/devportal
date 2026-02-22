---
title: "Quick Start"
description: "Get up and running with AlgoKit Utils in 5 minutes."
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

## Deploy a Smart Contract

Use `AppFactory` to deploy an [ARC-32](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0032.md) or [ARC-56](https://github.com/algorandfoundation/ARCs/pull/258) compatible smart contract.

```python
from pathlib import Path
from algokit_utils import (
    AlgorandClient,
    AlgoAmount,
    AppClientMethodCallParams,
    OnUpdate,
    OnSchemaBreak,
)

# 1. Connect to LocalNet and set up a deployer account
algorand = AlgorandClient.default_localnet()
deployer = algorand.account.random()
algorand.account.ensure_funded(
    account_to_fund=deployer,
    dispenser_account=algorand.account.localnet_dispenser(),
    min_spending_balance=AlgoAmount.from_algo(10),
)

# 2. Load the app spec (ARC-32 or ARC-56 JSON)
app_spec = Path("artifacts/HelloWorld/app_spec.arc32.json").read_text()

# 3. Create a factory
factory = algorand.client.get_app_factory(
    app_spec=app_spec,
    default_sender=deployer.addr,
)

# 4. Deploy (idempotent — creates on first run, updates on subsequent runs)
app_client, deploy_result = factory.deploy(
    on_update=OnUpdate.UpdateApp,
    on_schema_break=OnSchemaBreak.ReplaceApp,
)

print(f"App ID: {deploy_result.app.app_id}")
print(f"Operation: {deploy_result.operation_performed.name}")  # Create, Update, etc.

# 5. Call the app
response = app_client.send.call(
    AppClientMethodCallParams(method="hello", args=["world"]),
)
print(f"Response: {response.abi_return}")  # "Hello, world"
```

> [!NOTE]
> `deploy()` is idempotent — it looks up existing deployments by app name and creator, creating a new app only if one doesn't exist yet. On subsequent runs it detects changes and applies the `on_update` / `on_schema_break` strategy you specify.

## What's Next?

- [AlgorandClient](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/) — Learn about the main entry point
- [Account Management](/docs/algokit-utils/python/latest/guides/concepts/core/account/) — Different ways to create and manage accounts
- [Transaction Management](/docs/algokit-utils/python/latest/guides/concepts/core/transaction/) — Build and send transactions
- [App Client](/docs/algokit-utils/python/latest/guides/concepts/building/app-client/) — Deploy and interact with smart contracts
