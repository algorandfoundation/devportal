---
title: AVM Types
---

These types are available directly under the `algorand-typescript` namespace. They represent the basic AVM primitive types and can be instantiated directly or via _value generators_:

```{note}
For 'primitive `algorand-typescript` types such as `Account`, `Application`, `Asset`, `uint64`, `biguint`, `bytes`, `string` with and without respective _value generator_, instantiation can be performed directly. If you have a suggestion for a new _value generator_ implementation, please open an issue in the [`algorand-typescript-testing`](https://github.com/algorandfoundation/algorand-typescript-testing) repository or contribute by following the [contribution guide](https://github.com/algorandfoundation/algorand-typescript-testing/blob/main/CONTRIBUTING).
```

```ts
import * as algots from '@algorandfoundation/algorand-typescript';
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing';

// Create the context manager for snippets below
const ctx = new TestExecutionContext();
```

## uint64

```ts
// Direct instantiation
const uint64Value = algots.Uint64(100);

// Generate a random UInt64 value
const randomUint64 = ctx.any.uint64();

// Specify a range
const randomUint64InRange = ctx.any.uint64(1000, 9999);
```

## bytes

```ts
// Direct instantiation
const bytesValue = algots.Bytes('Hello, Algorand!');

// Generate random byte sequences
const randomBytes = ctx.any.bytes();

// Specify the length
const randomBytesOfLength = ctx.any.bytes(32);
```

## string

```ts
// Direct instantiation
const stringValue = 'Hello, Algorand!';

// Generate random strings
const randomString = ctx.any.string();

// Specify the length
const randomStringOfLength = ctx.any.string(16);
```

## biguint

```ts
// Direct instantiation
const biguintValue = algots.BigUint(100);

// Generate a random BigUInt value
const randomBiguint = ctx.any.biguint();

// Specify the min value
const randomBiguintOver = ctx.any.biguint(100n);
```

## Asset

```ts
// Direct instantiation
const asset = algots.Asset(1001);

// Generate a random asset
const randomAsset = ctx.any.asset({
  clawback: ctx.any.account(), // Optional: Clawback address
  creator: ctx.any.account(), // Optional: Creator account
  decimals: 6, // Optional: Number of decimals
  defaultFrozen: false, // Optional: Default frozen state
  freeze: ctx.any.account(), // Optional: Freeze address
  manager: ctx.any.account(), // Optional: Manager address
  metadataHash: ctx.any.bytes(32), // Optional: Metadata hash
  name: algots.Bytes(ctx.any.string()), // Optional: Asset name
  reserve: ctx.any.account(), // Optional: Reserve address
  total: 1000000, // Optional: Total supply
  unitName: algots.Bytes(ctx.any.string()), // Optional: Unit name
  url: algots.Bytes(ctx.any.string()), // Optional: Asset URL
});

// Get an asset by ID
const asset = ctx.ledger.getAsset(randomAsset.id);

// Update an asset
ctx.ledger.patchAssetData(randomAsset, {
  clawback: ctx.any.account(), // Optional: New clawback address
  creator: ctx.any.account(), // Optional: Creator account
  decimals: 6, // Optional: New number of decimals
  defaultFrozen: false, // Optional: Default frozen state
  freeze: ctx.any.account(), // Optional: New freeze address
  manager: ctx.any.account(), // Optional: New manager address
  metadataHash: ctx.any.bytes(32), // Optional: New metadata hash
  name: algots.Bytes(ctx.any.string()), // Optional: New asset name
  reserve: ctx.any.account(), // Optional: New reserve address
  total: 1000000, // Optional: New total supply
  unitName: algots.Bytes(ctx.any.string()), // Optional: Unit name
  url: algots.Bytes(ctx.any.string()), // Optional: New asset URL
});
```

## Account

```ts
// Direct instantiation
const rawAddress = algots.Bytes.fromBase32(
  'PUYAGEGVCOEBP57LUKPNOCSMRWHZJSU4S62RGC2AONDUEIHC6P7FOPJQ4I',
);
const account = algots.Account(rawAddress); // zero address by default

// Generate a random account
const randomAccount = ctx.any.account({
  address: rawAddress, // Optional: Specify a custom address, defaults to a random address
  optedAssetBalances: new Map([]), // Optional: Specify opted asset balances as dict of assets to balance
  optedApplications: [], // Optional: Specify opted apps as sequence of algopy.Application objects
  totalAppsCreated: 0, // Optional: Specify the total number of created applications
  totalAppsOptedIn: 0, // Optional: Specify the total number of applications opted into
  totalAssets: 0, // Optional: Specify the total number of assets
  totalAssetsCreated: 0, // Optional: Specify the total number of created assets
  totalBoxBytes: 0, // Optional: Specify the total number of box bytes
  totalBoxes: 0, // Optional: Specify the total number of boxes
  totalExtraAppPages: 0, // Optional: Specify the total number of extra
  totalNumByteSlice: 0, // Optional: Specify the total number of byte slices
  totalNumUint: 0, // Optional: Specify the total number of uints
  minBalance: 0, // Optional: Specify a minimum balance
  balance: 0, // Optional: Specify an initial balance
  authAddress: algots.Account(), // Optional: Specify an auth address,
});

// Generate a random account that is opted into a specific asset
const mockAsset = ctx.any.asset();
const mockAccount = ctx.any.account({
  optedAssetBalances: new Map([[mockAsset.id, 123]]),
});

// Get an account by address
const account = ctx.ledger.getAccount(mockAccount);

// Update an account
ctx.ledger.patchAccountData(mockAccount, {
  account: {
    balance: 0, // Optional: New balance
    minBalance: 0, // Optional: New minimum balance
    authAddress: ctx.any.account(), // Optional: New auth address
    totalAssets: 0, // Optional: New total number of assets
    totalAssetsCreated: 0, // Optional: New total number of created assets
    totalAppsCreated: 0, // Optional: New total number of created applications
    totalAppsOptedIn: 0, // Optional: New total number of applications opted into
    totalExtraAppPages: 0, // Optional: New total number of extra application pages
  },
});

// Check if an account is opted into a specific asset
const optedIn = account.isOptedIn(mockAsset);
```

## Application

```ts
// Direct instantiation
const application = algots.Application();

// Generate a random application
const randomApp = ctx.any.application({
  approvalProgram: algots.Bytes(''), // Optional: Specify a custom approval program
  clearStateProgram: algots.Bytes(''), // Optional: Specify a custom clear state program
  globalNumUint: 1, // Optional: Number of global uint values
  globalNumBytes: 1, // Optional: Number of global byte values
  localNumUint: 1, // Optional: Number of local uint values
  localNumBytes: 1, // Optional: Number of local byte values
  extraProgramPages: 1, // Optional: Number of extra program pages
  creator: ctx.defaultSender, // Optional: Specify the creator account
});

// Get an application by ID
const app = ctx.ledger.getApplication(randomApp.id);

// Update an application
ctx.ledger.patchApplicationData(randomApp, {
  application: {
    approvalProgram: algots.Bytes(''), //  Optional: New approval program
    clearStateProgram: algots.Bytes(''), // Optional: New clear state program
    globalNumUint: 1, // Optional: New number of global uint values
    globalNumBytes: 1, // Optional: New number of global byte values
    localNumUint: 1, // Optional: New number of local uint values
    localNumBytes: 1, // Optional: New number of local byte values
    extraProgramPages: 1, // Optional: New number of extra program pages
    creator: ctx.defaultSender, // Optional: New creator account
  },
});

// Patch logs for an application. When accessing via transactions or inner transaction related opcodes, will return the patched logs unless new logs where added into the transaction during execution.
const testApp = ctx.any.application({
  appLogs: [algots.Bytes('log entry 1'), algots.Bytes('log entry 2')],
});

// Get app associated with the active contract
class MyContract extends algots.arc4.Contract {}
const contract = ctx.contract.create(MyContract);

const activeApp = ctx.ledger.getApplicationForContract(contract);
```

```ts
// test context clean up
ctx.reset();
```
