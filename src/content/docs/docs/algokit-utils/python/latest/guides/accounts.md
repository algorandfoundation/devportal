---
title: Working with Accounts
description: Learn how to create and manage Algorand accounts with AlgoKit Utils
---

# Working with Accounts

This guide covers how to create, manage, and use Algorand accounts with AlgoKit Utils for Python.

## Creating Accounts

```python
from algokit_utils import AlgorandClient

algorand = AlgorandClient.default_local_net()

# Create a random account
account = algorand.account.random()

# Create from mnemonic
from_mnemonic = algorand.account.from_mnemonic("your 25 word mnemonic...")
```

## Account Types

AlgoKit Utils supports several account types:

- Random accounts
- Mnemonic-based accounts
- Rekeyed accounts
- Multisig accounts
