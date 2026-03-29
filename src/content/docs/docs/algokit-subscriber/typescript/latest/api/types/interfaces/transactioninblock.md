---
editUrl: false
next: false
prev: false
title: 'TransactionInBlock'
---

Defined in: [src/types/block.ts:7](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L7)

The representation of all important data for a single transaction or inner transaction
and its side effects within a committed block.

## Properties

### assetCloseAmount?

> `optional` **assetCloseAmount**: `bigint`

Defined in: [src/types/block.ts:62](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L62)

The asset close amount if the sender asset position was closed from this transaction.

---

### closeAmount?

> `optional` **closeAmount**: `bigint`

Defined in: [src/types/block.ts:64](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L64)

The ALGO close amount if the sender account was closed from this transaction.

---

### closeRewards?

> `optional` **closeRewards**: `bigint`

Defined in: [src/types/block.ts:68](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L68)

Rewards in microalgos applied to the close remainder to account.

---

### createdAppId?

> `optional` **createdAppId**: `bigint`

Defined in: [src/types/block.ts:60](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L60)

The app ID if an app was created from this transaction.

---

### createdAssetId?

> `optional` **createdAssetId**: `bigint`

Defined in: [src/types/block.ts:58](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L58)

The asset ID if an asset was created from this transaction.

---

### genesisHash?

> `optional` **genesisHash**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/block.ts:48](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L48)

The binary genesis hash of the network the transaction is within.

---

### genesisId?

> `optional` **genesisId**: `string`

Defined in: [src/types/block.ts:50](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L50)

The string genesis ID of the network the transaction is within.

---

### intraRoundOffset

> **intraRoundOffset**: `number`

Defined in: [src/types/block.ts:31](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L31)

The offset of the transaction within the round including inner transactions.

#### Example

```ts
-0 - 1 - 2 - 3 - 4 - 5;
```

---

### logs?

> `optional` **logs**: `Uint8Array`\<`ArrayBufferLike`\>[]

Defined in: [src/types/block.ts:66](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L66)

Any logs that were issued as a result of this transaction.

---

### parentIntraRoundOffset?

> `optional` **parentIntraRoundOffset**: `number`

Defined in: [src/types/block.ts:42](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L42)

The intra-round offset of the parent transaction if this is an inner transaction.

#### Example

```ts
-0 - 1 - 1 - 1 - 1 - 2;
```

---

### parentTransactionId?

> `optional` **parentTransactionId**: `string`

Defined in: [src/types/block.ts:46](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L46)

The ID of the parent transaction if this is an inner transaction.

---

### receiverRewards?

> `optional` **receiverRewards**: `bigint`

Defined in: [src/types/block.ts:72](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L72)

Rewards in microalgos applied to the receiver account.

---

### roundNumber

> **roundNumber**: `bigint`

Defined in: [src/types/block.ts:52](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L52)

The round number of the block the transaction is within.

---

### roundTimestamp

> **roundTimestamp**: `number`

Defined in: [src/types/block.ts:54](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L54)

The round unix timestamp of the block the transaction is within.

---

### senderRewards?

> `optional` **senderRewards**: `bigint`

Defined in: [src/types/block.ts:70](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L70)

Rewards in microalgos applied to the sender account.

---

### signedTxnWithAD

> **signedTxnWithAD**: `SignedTxnWithAD`

Defined in: [src/types/block.ts:11](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L11)

The signed transaction with apply data from the block

---

### transaction

> **transaction**: `Transaction`

Defined in: [src/types/block.ts:56](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L56)

The transaction as a `Transaction` object.

---

### transactionId

> **transactionId**: `string`

Defined in: [src/types/block.ts:20](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/block.ts#L20)

The transaction ID

#### Example

```ts
- W6IG6SETWKISJV4JQSS6GNZGWKYXOOLH7FT3NQM4BIFRLCOXOQHA if it's a parent transaction
 - W6IG6SETWKISJV4JQSS6GNZGWKYXOOLH7FT3NQM4BIFRLCOXOQHA/inner/1 if it's an inner transaction
```
