---
editUrl: false
next: false
prev: false
title: 'LocalNetManager'
---

Defined in: [src/network-manager.ts:19](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-manager.ts#L19)

Manager for LocalNet-specific network operations.
These methods only work on LocalNet and will throw an error if called on other networks.

## Constructors

### Constructor

> **new LocalNetManager**(`algod`, `networkManager`, `algorand`): `LocalNetManager`

Defined in: [src/network-manager.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-manager.ts#L25)

#### Parameters

##### algod

[`AlgodClient`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodclient/)

The algod client to use for LocalNet operations

##### networkManager

[`NetworkManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/networkmanager/)

##### algorand

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algorandclient/)

#### Returns

`LocalNetManager`

## Methods

### blockWarp()

> **blockWarp**(`targetRound`): `Promise`\<`void`\>

Defined in: [src/network-manager.ts:62](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-manager.ts#L62)

Advances the blockchain by generating blocks until the target round is reached.

#### Parameters

##### targetRound

`bigint`

The round number to advance to

#### Returns

`Promise`\<`void`\>

#### Throws

Error if not connected to LocalNet

#### Example

```typescript
// Advance LocalNet to round 100
await algorand.network.localNet.blockWarp(100n);
```

---

### timeWarp()

> **timeWarp**(`targetTimestamp`): `Promise`\<`void`\>

Defined in: [src/network-manager.ts:82](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-manager.ts#L82)

Advances the blockchain timestamp to a target Unix timestamp.

#### Parameters

##### targetTimestamp

`bigint`

The target Unix timestamp in seconds

#### Returns

`Promise`\<`void`\>

#### Throws

Error if not connected to LocalNet

#### Example

```typescript
// Advance LocalNet time by 1 hour
const oneHourFromNow = BigInt(Math.floor(Date.now() / 1000)) + 3600n;
await algorand.network.localNet.timeWarp(oneHourFromNow);
```
