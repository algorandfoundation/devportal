---
title: AlgorandClient
description: API reference for the AlgorandClient class
---

# AlgorandClient

The main entry point for interacting with the Algorand blockchain.

## Class Methods

### `default_local_net()`

Creates a client configured for the default LocalNet.

```python
@classmethod
def default_local_net(cls) -> AlgorandClient
```

### `test_net()`

Creates a client configured for TestNet.

```python
@classmethod
def test_net(cls) -> AlgorandClient
```

### `main_net()`

Creates a client configured for MainNet.

```python
@classmethod
def main_net(cls) -> AlgorandClient
```

## Instance Properties

### `account`

Account management utilities.

### `send`

Transaction sending utilities.

### `client`

Access to underlying algod and indexer clients.
