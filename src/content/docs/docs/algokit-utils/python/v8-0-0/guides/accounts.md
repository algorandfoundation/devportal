---
title: Working with Accounts (v8.0.0)
description: Learn how to create and manage Algorand accounts with AlgoKit Utils v8.0.0
---

# Working with Accounts

This guide covers how to create, manage, and use Algorand accounts with AlgoKit Utils for Python v8.0.0.

## Creating Accounts

```python
from algokit_utils import AlgorandClient

algorand = AlgorandClient.default_local_net()

# Create a random account
account = algorand.account.random()
```

> **Note:** This is the v8.0.0 documentation. Some APIs may differ from the latest version.
