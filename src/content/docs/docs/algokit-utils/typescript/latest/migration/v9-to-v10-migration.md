---
title: 'AlgoKit Utils TypeScript: v9 to v10 Migration Guide'
description: 'Version 10 of AlgoKit Utils is a major architectural evolution. It eliminates direct dependency on algosdk, introduces unified and type-safe API clients, and migrates all usage to a fluent, modern AlgorandClient. This release breaks compatibility with prior function-based and algosdk-centric patterns. Use this guide to systematically update entry points, imports, transaction, app, and indexer flows for a clean transition to the new modular, address-first interface.'
---

## Overview

Version 10 represents a **major architectural overhaul** of AlgoKit Utils. The library has been decoupled from `algosdk` and restructured into a modular monorepo with custom-generated API clients. This enables:

- **No algosdk dependency** - The library now uses generated clients instead of algosdk
- **Unified AlgorandClient** - A single entry point for all Algorand interactions
- **Fluent API** - Chainable, discoverable methods via `algorand.send.*`, `algorand.account.*`, etc.
- **Type safety** - Stronger typing throughout with proper Address class, enums, and interfaces

This guide serves both developers migrating their applications and AI agents performing automated migrations.

---

## Quick Reference Tables

### Entry Points

| v9                             | v10                                                   | Notes                                  |
| :----------------------------- | :---------------------------------------------------- | :------------------------------------- |
| `getAlgoClient()`              | `AlgorandClient.defaultLocalNet()`                    | LocalNet                               |
| `getAlgoClient(testnetConfig)` | `AlgorandClient.testNet()`                            | TestNet via AlgoNode                   |
| `getAlgoClient(mainnetConfig)` | `AlgorandClient.mainNet()`                            | MainNet via AlgoNode                   |
| `getAlgoClient(config)`        | `AlgorandClient.fromConfig(config)`                   | Custom config                          |
| Environment-based              | `AlgorandClient.fromEnvironment()`                    | Reads env vars, falls back to LocalNet |
| Manual clients                 | `AlgorandClient.fromClients({ algod, indexer, kmd })` | From existing clients                  |

### Common Operations

| Operation        | v9                      | v10                               |
| :--------------- | :---------------------- | :-------------------------------- |
| Payment          | `transferAlgos()`       | `algorand.send.payment()`         |
| Asset transfer   | `transferAsset()`       | `algorand.send.assetTransfer()`   |
| Asset opt-in     | `assetOptIn()`          | `algorand.send.assetOptIn()`      |
| Asset opt-out    | `assetOptOut()`         | `algorand.send.assetOptOut()`     |
| Ensure funded    | `ensureFunded()`        | `algorand.account.ensureFunded()` |
| App deployment   | `appClient.deploy()`    | `appFactory.deploy()`             |
| App call         | `appClient.call()`      | `appClient.send.call()`           |
| Wait for confirm | `waitForConfirmation()` | Automatic in `.send()`            |
| Raw algod        | `algod.status().do()`   | `algorand.client.algod.status()`  |

### Naming Standardizations

| v9                       | v10             | Type Change     |
| :----------------------- | :-------------- | :-------------- |
| `txID`                   | `txId`          | string          |
| `assetIndex` / `assetID` | `assetId`       | number → bigint |
| `appIndex` / `appID`     | `appId`         | number → bigint |
| `methodArgs`             | `args`          | -               |
| `boxes`                  | `boxReferences` | -               |
| `applicationCall`        | `appCall`       | -               |

---

## Part 1: Architecture Changes

### 1.1 New Package Structure

The library is now a modular monorepo. While most developers will just use the main package, understanding the structure helps with imports:

| Package                                      | Purpose                      | Replaces                                                   |
| :------------------------------------------- | :--------------------------- | :--------------------------------------------------------- |
| `@algorandfoundation/algokit-algod-client`   | Generated Algod client       | `algosdk.Algodv2`                                          |
| `@algorandfoundation/algokit-indexer-client` | Generated Indexer client     | `algosdk.Indexer`                                          |
| `@algorandfoundation/algokit-kmd-client`     | Generated KMD client         | `algosdk.Kmd`                                              |
| `@algorandfoundation/algokit-transact`       | Transaction building/signing | `algosdk.Transaction`, `algosdk.AtomicTransactionComposer` |
| `@algorandfoundation/algokit-abi`            | ABI types, ARC-56 support    | `algosdk.ABIMethod`, `algosdk.ABIType`                     |
| `@algorandfoundation/algokit-common`         | Address, utilities           | `algosdk` address functions                                |
| `@algorandfoundation/algokit-crypto`         | Cryptographic utilities      | `algosdk` crypto                                           |

### 1.2 New Subpath Exports

```typescript
// Main entry point (most common)
import { AlgorandClient, AlgoAmount } from '@algorandfoundation/algokit-utils'

// Subpath exports for specific needs
import { ... } from '@algorandfoundation/algokit-utils/transact'
import { ... } from '@algorandfoundation/algokit-utils/algod-client'
import { ... } from '@algorandfoundation/algokit-utils/indexer-client'
import { ... } from '@algorandfoundation/algokit-utils/kmd-client'
import { ... } from '@algorandfoundation/algokit-utils/abi'
import { ... } from '@algorandfoundation/algokit-utils/common'
import { ... } from '@algorandfoundation/algokit-utils/testing'
```

### 1.3 Import Path Migration

**BREAKING**: All `/types/*` imports are deprecated. Types have moved to root-level modules.

```typescript
// v9 - OLD (deprecated, will show warnings)
import { TransactionSignerAccount } from '@algorandfoundation/algokit-utils/types/account';
import { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec';
import { AlgoAmount } from '@algorandfoundation/algokit-utils/types/amount';

// v10 - NEW
import { AddressWithTransactionSigner } from '@algorandfoundation/algokit-utils/transact';
import { Arc56Contract } from '@algorandfoundation/algokit-utils/abi';
import { AlgoAmount } from '@algorandfoundation/algokit-utils';
```

---

## Part 2: Client Changes

### 2.1 The New Entry Point: AlgorandClient

`AlgorandClient` is the unified facade for all Algorand interactions.

**v9:**

```typescript
import algosdk from 'algosdk';
import { getAlgoClient, getAlgoIndexerClient } from '@algorandfoundation/algokit-utils';

const algod = getAlgoClient(getAlgoNodeConfig('testnet', 'algod'));
const indexer = getAlgoIndexerClient(getAlgoNodeConfig('testnet', 'indexer'));

// Then pass algod/indexer to every function call
await transferAlgos({ from, to, amount }, algod);
```

**v10:**

```typescript
import { AlgorandClient } from '@algorandfoundation/algokit-utils';

// One-liner for common networks
const algorand = AlgorandClient.defaultLocalNet(); // LocalNet
const algorand = AlgorandClient.testNet(); // TestNet
const algorand = AlgorandClient.mainNet(); // MainNet

// Or from environment variables (falls back to LocalNet)
const algorand = AlgorandClient.fromEnvironment();

// Or custom config
const algorand = AlgorandClient.fromConfig({
  algodConfig: { server: 'https://...', token: '...' },
  indexerConfig: { server: 'https://...', token: '...' },
});

// All operations through the unified client
await algorand.send.payment({ sender, receiver, amount });
```

### 2.2 Raw Client Access

**v9:**

```typescript
const info = await algod.accountInformation(addr).do();
const params = await algod.getTransactionParams().do();
```

**v10:**

```typescript
// No more .do() - methods are direct async calls
const info = await algorand.client.algod.accountInformation(addr);
const params = await algorand.client.algod.transactionParams();

// Or use the shorthand
const params = await algorand.getSuggestedParams();
```

### 2.3 Client Type Changes

If you need direct client access:

```typescript
// v9
import algosdk from 'algosdk';
const algod = new algosdk.Algodv2(token, server, port);

// v10
import { AlgodClient } from '@algorandfoundation/algokit-utils/algod-client';
const algod = new AlgodClient({ baseUrl: server, port, token });

// Similarly for Indexer and KMD
import { IndexerClient } from '@algorandfoundation/algokit-utils/indexer-client';
import { KmdClient } from '@algorandfoundation/algokit-utils/kmd-client';
```

---

## Part 3: Account and Signer Changes

### 3.1 TransactionSignerAccount → AddressWithTransactionSigner

The `TransactionSignerAccount` type is replaced with `AddressWithTransactionSigner`.

**v9:**

```typescript
import { TransactionSignerAccount } from '@algorandfoundation/algokit-utils/types/account';

const account: TransactionSignerAccount = {
  addr: 'ADDRESS...',
  signer: transactionSigner,
};
```

**v10:**

```typescript
import { AddressWithTransactionSigner } from '@algorandfoundation/algokit-utils/transact';
import { Address } from '@algorandfoundation/algokit-utils/common';

const account: AddressWithTransactionSigner = {
  addr: Address.fromString('ADDRESS...'), // Now uses Address object
  signer: transactionSigner,
};
```

### 3.2 SigningAccount Removed

**v9:**

```typescript
import { SigningAccount } from '@algorandfoundation/algokit-utils';

const signingAccount = new SigningAccount(mnemonic, sender);
```

**v10:**

```typescript
// Use AccountManager instead
const account = algorand.account.fromMnemonic(mnemonic, sender);
```

### 3.3 Account Object with Private Key → Signer Pattern

v10 improves security by not exposing private keys directly.

**v9:**

```typescript
import algosdk from 'algosdk';
import { getAccount } from '@algorandfoundation/algokit-utils';

// Account object containing private key
const sender = await getAccount({ name: 'SENDER', algod });
console.log(sender.sk); // Private key exposed
```

**v10:**

```typescript
// Returns AddressWithTransactionSigner - no private key exposed
const sender = await algorand.account.fromEnvironment('SENDER');

// Access address
console.log(sender.addr.toString());

// The signer is used internally - no need to access sk
```

### 3.4 Random Account Generation

**v9:**

```typescript
import algosdk from 'algosdk';

const account = algosdk.generateAccount();
const address = account.addr;
```

**v10:**

```typescript
const account = algorand.account.random();
// account is Address & AddressWithTransactionSigner
const address = account.addr.toString();
```

### 3.5 Address Type System

v10 introduces a proper `Address` class and `ReadableAddress` union type.

```typescript
import { Address, ReadableAddress, getAddress } from '@algorandfoundation/algokit-utils/common';

// Address is now a class, not a string
const address: Address = Address.fromString('ABC123...');
const addressString: string = address.toString();

// ReadableAddress accepts multiple formats
type ReadableAddress = string | Address | Addressable; // Addressable = { addr: Address }

// Convert any ReadableAddress to Address
const addr: Address = getAddress(readableAddress);
```

---

## Part 4: Transaction Changes

### 4.1 Standalone Functions → Fluent API

**Payment:**

```typescript
// v9
import { transferAlgos, algos } from '@algorandfoundation/algokit-utils';

await transferAlgos(
  {
    from: sender,
    to: receiver,
    amount: algos(5),
  },
  algod,
);

// v10
import { AlgoAmount } from '@algorandfoundation/algokit-utils';

await algorand.send.payment({
  sender: sender.addr,
  receiver: receiver.addr,
  amount: AlgoAmount.Algos(5), // or (5).algos()
});
```

**Asset Transfer:**

```typescript
// v9
await transferAsset(
  {
    from: sender,
    to: receiver,
    assetID: 123,
    amount: 10,
  },
  algod,
);

// v10
await algorand.send.assetTransfer({
  sender: sender.addr,
  receiver: receiver.addr,
  assetId: 123n, // assetID → assetId, number → bigint
  amount: 10n,
});
```

### 4.2 AtomicTransactionComposer → TransactionComposer

**v9:**

```typescript
import algosdk from 'algosdk';

const atc = new algosdk.AtomicTransactionComposer();
atc.addTransaction({ txn, signer });
const result = await atc.execute(algod, 4);
```

**v10:**

```typescript
const result = await algorand.newGroup().addTransaction(txn).send(); // Automatically groups, signs, sends, and waits
```

### 4.3 Atomic Groups (Fluent Composer)

**v9:**

```typescript
const composer = new algosdk.AtomicTransactionComposer()

composer.addTransaction({
  txn: algosdk.makePaymentTxnWithSuggestedParamsFromObject({ ... }),
  signer: sender.signer,
})

composer.addMethodCall({
  appID: 123,
  method: myMethod,
  methodArgs: ['arg1'],
  sender: sender.addr,
  signer: sender.signer,
  suggestedParams,
})

await composer.execute(algod, 4)
```

**v10:**

```typescript
const result = await algorand
  .newGroup()
  .addPayment({
    sender: sender.addr,
    receiver: receiver.addr,
    amount: (1).algos(),
  })
  .addAppCallMethodCall({
    appId: 123n,
    method: 'my_method',
    args: ['arg1'],
    sender: sender.addr,
  })
  .send(); // One call handles everything
```

### 4.4 Deferred Building

Transactions are now built lazily. Fee calculation happens at `.build()` time.

```typescript
const composer = algorand.newGroup();
composer.addPayment({ sender, receiver, amount });

// Explicit build step (usually not needed - .send() calls this)
const { transactions, methodCalls, signers } = await composer.build();

// Or just send directly
const result = await composer.send();
```

### 4.5 Simulation

**v9:** Debugging was separate from execution.

**v10:** Switch any group from `.send()` to `.simulate()`:

```typescript
const result = await algorand
  .newGroup()
  .addPayment({ ... })
  .addAppCallMethodCall({ ... })
  .simulate({ allowUnnamedResources: true })

console.log(result.simulateResponse)
```

### 4.6 New Composer Methods

```typescript
// Gather signatures without sending
const signatures = await composer.gatherSignatures();

// Simulate with options
const simResult = await composer.simulate({ skipSignatures: true });

// Clone the composer
const cloned = composer.clone();

// Add another composer's transactions
composer.addTransactionComposer(anotherComposer);
```

---

## Part 5: App Client and Smart Contract Changes

### 5.1 OnApplicationComplete Enum

String-based OnComplete values are replaced with a proper enum.

**v9:**

```typescript
const onComplete = 'optin'; // or 'noop', 'closeout', etc.
```

**v10:**

```typescript
import { OnApplicationComplete } from '@algorandfoundation/algokit-utils/transact';

const onComplete = OnApplicationComplete.OptIn;
// Values: NoOp, OptIn, CloseOut, ClearState, UpdateApplication, DeleteApplication
```

### 5.2 AppClient vs AppFactory Split

v10 separates concerns:

- **AppFactory**: Handles creating and deploying applications
- **AppClient**: Handles interacting with deployed applications

**Deployment (v9):**

```typescript
const appClient = algokit.getAppClient(
  {
    resolveBy: 'creatorAndName',
    app: appSpec, // ARC-4 JSON
    sender: deployer,
    creatorAddress: deployer,
  },
  algod,
);

const app = await appClient.deploy({
  allowUpdate: true,
  deployTimeParams: { VALUE: 1 },
});
```

**Deployment (v10):**

```typescript
// 1. Create the factory
const factory = algorand.client.getAppFactory({
  appSpec: arc56Spec, // ARC-56 JSON (or ARC-32 - auto-converted)
  defaultSender: deployer.addr,
});

// 2. Deploy
const { appClient, result } = await factory.deploy({
  updatable: true, // allowUpdate → updatable
  deployTimeParams: { VALUE: 1 },
  createParams: {
    method: 'create',
    args: ['arg1'],
  },
});
```

### 5.3 ARC-56 Native Support

v10 natively supports ARC-56 with automatic ARC-32 conversion.

```typescript
import { arc32ToArc56 } from '@algorandfoundation/algokit-utils'

// Explicit conversion
const arc56Spec = arc32ToArc56(arc32AppSpec)

// Or just pass ARC-32 directly - it's auto-converted
const appClient = new AppClient({ appSpec: arc32OrArc56Spec, ... })
```

### 5.4 Method Calls

**v9:**

```typescript
await appClient.call({
  method: 'hello',
  methodArgs: ['world'],
  boxes: [{ appIndex: 0, name: 'box1' }],
});
```

**v10:**

```typescript
await appClient.send.call({
  method: 'hello',
  args: ['world'], // methodArgs → args
  boxReferences: ['box1'], // boxes → boxReferences (supports simple strings)
});
```

### 5.5 Access References (Unified)

v10 introduces unified `accessReferences`:

**v9 (legacy arrays - still supported):**

```typescript
await composer.addAppCall({
  appId,
  sender,
  accountReferences: ['ACCOUNT1'],
  appReferences: [123n],
  assetReferences: [456n],
  boxReferences: [{ appId: 0n, name: 'box1' }],
});
```

**v10 (unified - optional):**

```typescript
await composer.addAppCall({
  appId,
  sender,
  accessReferences: [{ appId: 123n }, { assetId: 456n }, { appId: 0n, boxName: 'box1' }],
});
```

### 5.6 ABI Return Parsing

**v9:**

```typescript
const returnValue = algosdk.AtomicTransactionComposer.parseMethodResponse(method, response);
```

**v10:**

```typescript
import { AppManager } from '@algorandfoundation/algokit-utils';

const abiReturn = AppManager.getABIReturn(confirmation, method);
```

---

## Part 6: Indexer Changes

### 6.1 Import Path Moved

**v9:**

```typescript
import { indexer } from '@algorandfoundation/algokit-utils';

await indexer.lookupAssetHoldings(indexerClient, assetId);
```

**v10:**

```typescript
import { lookupAssetHoldings } from '@algorandfoundation/algokit-utils/indexer-client';

await lookupAssetHoldings(indexerClient, assetId);
```

### 6.2 searchTransactions - Breaking API Change

The `searchCriteria` parameter changed from a function to an object.

**v9:**

```typescript
import { indexer } from '@algorandfoundation/algokit-utils';

const results = await indexer.searchTransactions(
  indexerClient,
  s => s.address('ADDRESS').txType('pay'), // Function-based
);
```

**v10:**

```typescript
import { searchTransactions } from '@algorandfoundation/algokit-utils/indexer-client';

const results = await searchTransactions(indexerClient, {
  address: 'ADDRESS',
  txType: 'pay',
}); // Object-based
```

---

## Part 7: Testing Changes

### 7.1 algorandFixture Changes

**v9:**

```typescript
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';

const localnet = algorandFixture();

beforeEach(localnet.beforeEach); // Deprecated

test('my test', async () => {
  const { algod, indexer, testAccount } = localnet.context;
  // logic using algod directly...
});
```

**v10:**

```typescript
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';

const localnet = algorandFixture();

beforeEach(localnet.newScope); // beforeEach → newScope (semantic rename)

test('my test', async () => {
  const { algorand, testAccount } = localnet.context;

  // Use the fluent client in tests
  await algorand.send.payment({
    sender: testAccount.addr,
    receiver: testAccount.addr,
    amount: (1).algos(),
  });
});
```

**Note:** If you still need raw algod in tests, access via `algorand.client.algod`.

### 7.2 getTestAccount Changes

**v9:**

```typescript
const account = await getTestAccount(params, algodClient, kmdClient);
```

**v10:**

```typescript
// Preferred - use AlgorandClient
const account = await getTestAccount(params, algorandClient);

// Old signature deprecated but still works
const account = await getTestAccount(params, algodClient, kmdClient);
```

### 7.3 Return Type Change

Test accounts now return `AddressWithSigners` instead of `AddressWithTransactionSigner`:

```typescript
// v9 return type
Promise<Address & AddressWithTransactionSigner>;

// v10 return type
Promise<Address & AddressWithSigners>;
```

---

## Part 8: Configuration Changes

### 8.1 Default Behavior Change

`populateAppCallResources` now defaults to `true` (was `false`).

**Impact:** App calls will automatically populate resources. To preserve v9 behavior:

```typescript
await algorand.send.appCall({
  ...,
  populateAppCallResources: false,  // Explicit opt-out
})
```

### 8.2 Configuration Module Rename

```typescript
// v9
import { ... } from '@algorandfoundation/algokit-utils/types/config'

// v10
import { UpdatableConfig } from '@algorandfoundation/algokit-utils'
```

---

## Part 9: Removed/Deprecated APIs

### 9.1 Removed Functions

| Function                            | Replacement                      |
| :---------------------------------- | :------------------------------- |
| `getApplicationClient()`            | `algorand.client.getAppClient()` |
| `getAppByIndex()`                   | Use AppClient directly           |
| `appClient.getBoxValuesAsABIType()` | Removed                          |
| `getABISignature()`                 | Removed                          |

### 9.2 Deprecated Functions

| Function                               | Replacement                                  |
| :------------------------------------- | :------------------------------------------- |
| `populateAppCallResources()`           | `composer.build()` (auto-populates)          |
| `prepareGroupForSending()`             | `composer.setMaxFees()` + `composer.build()` |
| `sendTransactionComposer()`            | `composer.send()`                            |
| `performTransactionComposerSimulate()` | `composer.simulate()`                        |
| `transferAlgos()`                      | `algorand.send.payment()`                    |
| `transferAsset()`                      | `algorand.send.assetTransfer()`              |
| `ensureFunded()`                       | `algorand.account.ensureFunded()`            |

### 9.3 Deprecated Types

| Type                       | Replacement                         |
| :------------------------- | :---------------------------------- |
| `TransactionSignerAccount` | `AddressWithTransactionSigner`      |
| `SendTransactionFrom`      | `SendingAddress`                    |
| `SigningAccount`           | Use `accountManager.fromMnemonic()` |

---

## Part 10: Error Handling Changes

### 10.1 LogicError Trace Structure

**BREAKING:** The `trace` field structure changed.

```typescript
// v9 - trace was a map
err.traces[0].trace; // Map structure

// v10 - trace is a typed value
err.traces[0].trace; // Typed object structure
```

---

## Migration Checklist

### Step 1: Update Dependencies

```bash
npm install @algorandfoundation/algokit-utils@latest
npm uninstall algosdk  # No longer needed as direct dependency
```

### Step 2: Update Entry Point

- [ ] Replace `getAlgoClient()` with `AlgorandClient.*`
- [ ] Remove manual algod/indexer/kmd client creation
- [ ] Use `AlgorandClient.fromEnvironment()` for env-based config

### Step 3: Update Imports

- [ ] Replace `algosdk` imports with algokit-utils subpath imports
- [ ] Move `/types/*` imports to root or subpath imports
- [ ] Move `indexer` imports to `/indexer-client`
- [ ] Import `OnApplicationComplete` from `/transact`
- [ ] Import `Address`, `ReadableAddress` from `/common`
- [ ] Import `ABIMethod`, `ABIType` from `/abi`

### Step 4: Update Account Types

- [ ] `TransactionSignerAccount` → `AddressWithTransactionSigner`
- [ ] Remove `SigningAccount`, use `algorand.account.fromMnemonic()`
- [ ] Use `address.toString()` for string representation
- [ ] Update signer patterns (no more `account.sk`)

### Step 5: Update Transactions

- [ ] `transferAlgos()` → `algorand.send.payment()`
- [ ] `transferAsset()` → `algorand.send.assetTransfer()`
- [ ] Replace `AtomicTransactionComposer` with `algorand.newGroup()`
- [ ] Remove `.do()` from all client calls

### Step 6: Update Naming

- [ ] `assetID` → `assetId` (bigint)
- [ ] `appID` → `appId` (bigint)
- [ ] `txID` → `txId`
- [ ] `methodArgs` → `args`
- [ ] `boxes` → `boxReferences`

### Step 7: Update App Calls

- [ ] String OnComplete → `OnApplicationComplete` enum
- [ ] `appClient.call()` → `appClient.send.call()`
- [ ] Use `AppFactory` for deployments
- [ ] `atc.parseMethodResponse()` → `AppManager.getABIReturn()`

### Step 8: Update Indexer

- [ ] Move imports to `/indexer-client`
- [ ] `searchTransactions` function → object criteria

### Step 9: Update Tests

- [ ] `fixture.beforeEach` → `fixture.newScope`
- [ ] `getTestAccount(params, algod)` → `getTestAccount(params, algorand)`
- [ ] Update return type expectations (`AddressWithSigners`)

### Step 10: Verify

- [ ] Run all tests
- [ ] Check for deprecation warnings
- [ ] Test transaction signing/sending
- [ ] Test app client interactions
- [ ] Test indexer queries
