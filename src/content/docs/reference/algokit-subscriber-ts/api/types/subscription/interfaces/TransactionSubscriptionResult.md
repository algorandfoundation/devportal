---
title: 'Interface: TransactionSubscriptionResult'
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

[@algorandfoundation/algokit-subscriber](../../../modules.md) / [types/subscription](../README.md) / TransactionSubscriptionResult

Defined in: [src/types/subscription.ts:7](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L7)

The result of a single subscription pull/poll.

## Properties

### blockMetadata?

> `optional` **blockMetadata**: [`BlockMetadata`](BlockMetadata.md)[]

Defined in: [src/types/subscription.ts:29](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L29)

The metadata about any blocks that were retrieved from algod as part
of the subscription poll.

---

### currentRound

> **currentRound**: `bigint`

Defined in: [src/types/subscription.ts:11](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L11)

The current detected tip of the configured Algorand blockchain.

---

### newWatermark

> **newWatermark**: `bigint`

Defined in: [src/types/subscription.ts:19](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L19)

The new watermark value to persist for the next call to
`getSubscribedTransactions` to continue the sync.
Will be equal to `syncedRoundRange[1]`. Only persist this
after processing (or in the same atomic transaction as)
subscribed transactions to keep it reliable.

---

### startingWatermark

> **startingWatermark**: `bigint`

Defined in: [src/types/subscription.ts:13](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L13)

The watermark value that was retrieved at the start of the subscription poll.

---

### subscribedTransactions

> **subscribedTransactions**: [`SubscribedTransaction`](../classes/SubscribedTransaction.md)[]

Defined in: [src/types/subscription.ts:25](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L25)

Any transactions that matched the given filter within
the synced round range. This substantively uses the [indexer transaction
format](https://dev.algorand.co/reference/rest-apis/indexer#transaction)
to represent the data with some additional fields.

---

### syncedRoundRange

> **syncedRoundRange**: \[`bigint`, `bigint`\]

Defined in: [src/types/subscription.ts:9](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L9)

The round range that was synced from/to
