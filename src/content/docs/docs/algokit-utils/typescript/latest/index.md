---
title: AlgoKit Utils TypeScript (Latest)
description: Utilities for building solutions on Algorand using TypeScript
---

# AlgoKit Utils for TypeScript

This is the **TypeScript** version of AlgoKit Utils at version **latest**.

## Installation

```bash
npm install @algorandfoundation/algokit-utils
```

## Quick Start

```typescript
import { AlgorandClient } from '@algorandfoundation/algokit-utils';

const algorand = AlgorandClient.defaultLocalNet();
const account = algorand.account.random();
```

## Features

- Full TypeScript support with type definitions
- AlgorandClient for simplified blockchain interactions
- Transaction composition and signing
- App client for smart contract interactions
