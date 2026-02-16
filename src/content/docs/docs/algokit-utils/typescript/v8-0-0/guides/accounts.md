---
title: Working with Accounts (v8.0.0)
description: Learn how to create and manage Algorand accounts with AlgoKit Utils v8.0.0
---

# Working with Accounts

This guide covers how to create, manage, and use Algorand accounts with AlgoKit Utils for TypeScript v8.0.0.

## Creating Accounts

```typescript
import { AlgorandClient } from '@algorandfoundation/algokit-utils';

const algorand = AlgorandClient.defaultLocalNet();

// Create a random account
const account = algorand.account.random();
```

> **Note:** This is the v8.0.0 documentation. Some APIs may differ from the latest version.
