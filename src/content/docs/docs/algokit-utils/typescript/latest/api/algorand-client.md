---
title: AlgorandClient
description: API reference for the AlgorandClient class
---

# AlgorandClient

The main entry point for interacting with the Algorand blockchain.

## Static Methods

### `defaultLocalNet()`

Creates a client configured for the default LocalNet.

```typescript
static defaultLocalNet(): AlgorandClient
```

### `testNet()`

Creates a client configured for TestNet.

```typescript
static testNet(): AlgorandClient
```

### `mainNet()`

Creates a client configured for MainNet.

```typescript
static mainNet(): AlgorandClient
```

## Instance Properties

### `account`

Account management utilities.

### `send`

Transaction sending utilities.

### `client`

Access to underlying algod and indexer clients.
