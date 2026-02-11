---
title: Working with Accounts
description: Learn how to create and manage Algorand accounts with AlgoKit Utils
---

# Working with Accounts

This guide covers how to create, manage, and use Algorand accounts with AlgoKit Utils for TypeScript.

## Creating Accounts

```typescript
import { AlgorandClient } from '@algorandfoundation/algokit-utils';

const algorand = AlgorandClient.defaultLocalNet();

// Create a random account
const account = algorand.account.random();

// Create from mnemonic
const fromMnemonic = algorand.account.fromMnemonic('your 25 word mnemonic...');
```

## Account Types

AlgoKit Utils supports several account types:

- Random accounts
- Mnemonic-based accounts
- Rekeyed accounts
- Multisig accounts
