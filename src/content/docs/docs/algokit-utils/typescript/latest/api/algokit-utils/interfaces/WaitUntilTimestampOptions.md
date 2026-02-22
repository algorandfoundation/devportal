---
editUrl: false
next: false
prev: false
title: "WaitUntilTimestampOptions"
---

Defined in: [src/network-manager.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-manager.ts#L6)

Options for waiting until a specific timestamp is reached on the blockchain.

## Properties

### blockTimeSeconds?

> `optional` **blockTimeSeconds**: `number`

Defined in: [src/network-manager.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-manager.ts#L8)

Estimated block time in seconds, used to calculate rounds to wait. Should be slightly lower than average to undershoot. Defaults to 2.7.

***

### pollingIntervalMs?

> `optional` **pollingIntervalMs**: `number`

Defined in: [src/network-manager.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-manager.ts#L10)

Polling interval in milliseconds when close to target. Defaults to 1000.

***

### pollingTimeoutMs?

> `optional` **pollingTimeoutMs**: `number`

Defined in: [src/network-manager.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-manager.ts#L12)

Timeout in milliseconds for the polling loop. Defaults to 5000.
