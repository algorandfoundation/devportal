---
editUrl: false
next: false
prev: false
title: 'AssetTransferTransactionFields'
---

> **AssetTransferTransactionFields** = `object`

Defined in: [packages/transact/src/transactions/asset-transfer.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-transfer.ts#L10)

Represents an asset transfer transaction that moves ASAs between accounts.

Asset transfer transactions are used to transfer Algorand Standard Assets (ASAs)
from one account to another.

## Properties

### amount

> **amount**: `bigint`

Defined in: [packages/transact/src/transactions/asset-transfer.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-transfer.ts#L25)

The amount of the asset to transfer.

An integer value representing the number of units (to their smallest denomination) of
the asset that are being transferred.
In other words, the asset decimals don't play a role in this value.
It should be up to the caller (or a higher abstraction) to handle the conversion based on
the asset decimals.

---

### assetId

> **assetId**: `bigint`

Defined in: [packages/transact/src/transactions/asset-transfer.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-transfer.ts#L14)

The ID of the asset being transferred.

---

### assetSender?

> `optional` **assetSender**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/asset-transfer.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-transfer.ts#L41)

Optional address of the account that actually holds the asset being transferred.

If provided, this indicates that the transaction is a clawback operation,
where the sender is the asset clawback address and is forcibly moving assets
from this account to the receiver.

---

### closeRemainderTo?

> `optional` **closeRemainderTo**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/asset-transfer.ts:50](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-transfer.ts#L50)

Optional address to send all remaining asset units to after the transfer.

If specified, this indicates that the sender is closing out their position in the asset,
and all remaining units of this asset owned by the sender will be transferred to this address.
This effectively removes the asset from the sender's account.

---

### receiver

> **receiver**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/asset-transfer.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-transfer.ts#L32)

The address of the account that will receive the asset.

The receiver must have opted-in to the asset before they can receive it.
