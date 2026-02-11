---
title: AlgoKit Utils Python (Latest)
description: Utilities for building solutions on Algorand using Python
---

# AlgoKit Utils for Python

This is the **Python** version of AlgoKit Utils at version **latest**.

## Installation

```bash
pip install algokit-utils
```

## Quick Start

```python
from algokit_utils import AlgorandClient

algorand = AlgorandClient.default_local_net()
account = algorand.account.random()
```

## Features

- Pythonic API for Algorand interactions
- AlgorandClient for simplified blockchain access
- Transaction composition and signing
- App client for smart contract interactions
- Full type hints for IDE support
