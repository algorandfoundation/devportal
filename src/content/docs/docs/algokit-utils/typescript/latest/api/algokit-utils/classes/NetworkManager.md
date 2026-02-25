---
editUrl: false
next: false
prev: false
title: 'NetworkManager'
---

Defined in: [src/network-manager.ts:101](https://github.com/larkiny/algokit-utils-ts/blob/main/src/network-manager.ts#L101)

Manager for network-related operations.
Provides utilities for querying blockchain state and waiting for specific conditions.

## Constructors

### Constructor

> **new NetworkManager**(`algod`, `algorand`): `NetworkManager`

Defined in: [src/network-manager.ts:111](https://github.com/larkiny/algokit-utils-ts/blob/main/src/network-manager.ts#L111)

Create a new NetworkManager instance.

#### Parameters

##### algod

[`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

The algod client to use for network operations

##### algorand

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algorandclient/)

The AlgorandClient instance (for LocalNet operations)

#### Returns

`NetworkManager`

## Accessors

### localNet

#### Get Signature

> **get** **localNet**(): [`LocalNetManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/localnetmanager/)

Defined in: [src/network-manager.ts:244](https://github.com/larkiny/algokit-utils-ts/blob/main/src/network-manager.ts#L244)

Get LocalNet-specific network utilities.
These methods only work when connected to a LocalNet network and will throw
an error if called on other networks.

##### Example

```typescript
// Block warp on LocalNet
await algorand.network.localNet.blockWarp(100n);

// Time warp on LocalNet
await algorand.network.localNet.timeWarp(BigInt(Date.now() / 1000) + 3600n);
```

##### Returns

[`LocalNetManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/localnetmanager/)

The LocalNetManager instance

## Methods

### getLastRound()

> **getLastRound**(): `Promise`\<`bigint`\>

Defined in: [src/network-manager.ts:125](https://github.com/larkiny/algokit-utils-ts/blob/main/src/network-manager.ts#L125)

Get the last committed round number.

#### Returns

`Promise`\<`bigint`\>

The last round number

#### Example

```typescript
const lastRound = await algorand.network.getLastRound();
console.log(`Current round: ${lastRound}`);
```

---

### getLatestTimestamp()

> **getLatestTimestamp**(): `Promise`\<`bigint`\>

Defined in: [src/network-manager.ts:144](https://github.com/larkiny/algokit-utils-ts/blob/main/src/network-manager.ts#L144)

Get the Unix timestamp of the latest block.

Note: This method makes two sequential API calls (status then block fetch).
The round may advance between these calls, so the returned timestamp may not
be from the actual latest timestamp.

#### Returns

`Promise`\<`bigint`\>

The UNIX timestamp of the last round

#### Example

```typescript
const timestamp = await algorand.network.getLatestTimestamp();
console.log(`Latest block time: ${new Date(Number(timestamp) * 1000)}`);
```

---

### waitUntilRound()

> **waitUntilRound**(`targetRound`): `Promise`\<`void`\>

Defined in: [src/network-manager.ts:164](https://github.com/larkiny/algokit-utils-ts/blob/main/src/network-manager.ts#L164)

Wait until a specific round is reached.

#### Parameters

##### targetRound

`bigint`

The round number to wait for

#### Returns

`Promise`\<`void`\>

#### Throws

Error if timeout is reached before the target round

#### Example

```typescript
// Wait for round 1000
await algorand.network.waitUntilRound(1000n);

// Wait with a 30 second timeout
await algorand.network.waitUntilRound(1000n, 30000);
```

---

### waitUntilTimestamp()

> **waitUntilTimestamp**(`targetTimestamp`, `options?`): `Promise`\<`void`\>

Defined in: [src/network-manager.ts:188](https://github.com/larkiny/algokit-utils-ts/blob/main/src/network-manager.ts#L188)

Wait until a specific Unix timestamp is reached on the blockchain.

#### Parameters

##### targetTimestamp

`bigint`

The target Unix timestamp in seconds

##### options?

[`WaitUntilTimestampOptions`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/waituntiltimestampoptions/)

Optional parameters for waiting

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
// Wait until a specific time
const futureTime = BigInt(Math.floor(Date.now() / 1000)) + 60n; // 1 minute from now
await algorand.network.waitUntilTimestamp(futureTime);

// Wait with custom timing parameters
await algorand.network.waitUntilTimestamp(futureTime, {
  blockTimeSeconds: 3.0,
  pollingIntervalMs: 500,
});
```
