---
title: TransactionInBlock
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

# Interface: TransactionInBlock

Defined in: [src/types/block.ts:6](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L6)

The representation of all important data for a single transaction or inner transaction
and its side effects within a committed block.

## Properties

### assetCloseAmount?

> `optional` **assetCloseAmount**: `bigint`

Defined in: [src/types/block.ts:61](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L61)

The asset close amount if the sender asset position was closed from this transaction.

---

### closeAmount?

> `optional` **closeAmount**: `bigint`

Defined in: [src/types/block.ts:63](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L63)

The ALGO close amount if the sender account was closed from this transaction.

---

### closeRewards?

> `optional` **closeRewards**: `bigint`

Defined in: [src/types/block.ts:67](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L67)

Rewards in microalgos applied to the close remainder to account.

---

### createdAppId?

> `optional` **createdAppId**: `bigint`

Defined in: [src/types/block.ts:59](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L59)

The app ID if an app was created from this transaction.

---

### createdAssetId?

> `optional` **createdAssetId**: `bigint`

Defined in: [src/types/block.ts:57](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L57)

The asset ID if an asset was created from this transaction.

---

### genesisHash?

> `optional` **genesisHash**: `Buffer`

Defined in: [src/types/block.ts:47](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L47)

The binary genesis hash of the network the transaction is within.

---

### genesisId?

> `optional` **genesisId**: `string`

Defined in: [src/types/block.ts:49](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L49)

The string genesis ID of the network the transaction is within.

---

### intraRoundOffset

> **intraRoundOffset**: `number`

Defined in: [src/types/block.ts:30](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L30)

The offset of the transaction within the round including inner transactions.

#### Example

```ts
-0 - 1 - 2 - 3 - 4 - 5;
```

---

### logs?

> `optional` **logs**: `Uint8Array`[]

Defined in: [src/types/block.ts:65](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L65)

Any logs that were issued as a result of this transaction.

---

### parentIntraRoundOffset?

> `optional` **parentIntraRoundOffset**: `number`

Defined in: [src/types/block.ts:41](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L41)

The intra-round offset of the parent transaction if this is an inner transaction.

#### Example

```ts
-0 - 1 - 1 - 1 - 1 - 2;
```

---

### parentTransactionId?

> `optional` **parentTransactionId**: `string`

Defined in: [src/types/block.ts:45](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L45)

The ID of the parent transaction if this is an inner transaction.

---

### receiverRewards?

> `optional` **receiverRewards**: `bigint`

Defined in: [src/types/block.ts:71](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L71)

Rewards in microalgos applied to the receiver account.

---

### roundNumber

> **roundNumber**: `bigint`

Defined in: [src/types/block.ts:51](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L51)

The round number of the block the transaction is within.

---

### roundTimestamp

> **roundTimestamp**: `number`

Defined in: [src/types/block.ts:53](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L53)

The round unix timestamp of the block the transaction is within.

---

### senderRewards?

> `optional` **senderRewards**: `bigint`

Defined in: [src/types/block.ts:69](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L69)

Rewards in microalgos applied to the sender account.

---

### signedTxnWithAD

> **signedTxnWithAD**: `SignedTxnWithAD`

Defined in: [src/types/block.ts:10](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L10)

The signed transaction with apply data from the block

---

### transaction

> **transaction**: `Transaction`

Defined in: [src/types/block.ts:55](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L55)

The transaction as an algosdk `Transaction` object.

---

### transactionId

> **transactionId**: `string`

Defined in: [src/types/block.ts:19](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/block.ts#L19)

The transaction ID

#### Example

```ts
- W6IG6SETWKISJV4JQSS6GNZGWKYXOOLH7FT3NQM4BIFRLCOXOQHA if it's a parent transaction
 - W6IG6SETWKISJV4JQSS6GNZGWKYXOOLH7FT3NQM4BIFRLCOXOQHA/inner/1 if it's an inner transaction
```
