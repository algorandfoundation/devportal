# v3 migration

This release updates the subscriber library to support `algosdk@3`. As a result the majority of the changes are to support this.

For further information about `algosdk@3`, see [migration guide for algosdk@3](https://github.com/algorand/js-algorand-sdk/blob/develop/v2_TO_v3_MIGRATION_GUIDE.md).

[Details of this release are available here](https://github.com/algorandfoundation/algokit-subscriber-ts/releases/tag/v3.0.0)

## Type Changes

In both `@algorandfoundation/algokit-utils` and subscriber we follow a general pattern of leveraging `algosdk` functionality and types where possible. The `algosdk@3` changes introduce a number of new types, which allow both `@algorandfoundation/algokit-utils` and the subscriber library to leverage them. Below are the main type related changes which need to be considered when following the migration steps.

### Changes to `SubscribedTransaction`

Previously `SubscribedTransaction` extended `TransactionResult` from `@algorandfoundation/algokit-utils`, however now `@algorandfoundation/algokit-utils` leverages the `algosdk@3` types directly. As a result `SubscribedTransaction` now extends `algosdk.indexerModels.Transaction` from `algosdk@3`. The changes needed to support this are described below.

- Convert all kebab cased fields to camel case
- Where applicable, account for the `txType` being optional and a string
- Where applicable, convert relevant `number` fields to `bigint`

```typescript
// The example below attemps to access data from an asset transfer transaction

/**** Before ****/
if (subscribedTransaction['tx-type'] === TransactionType.axfer) {
  console.log('assetId', subscribedTransaction['asset-transfer-transaction']['asset-id'])
}
// Result:
//  assetId: 31566704

/**** After ****/
if (subscribedTransaction.txType === TransactionType.axfer) {
  console.log('assetId', subscribedTransaction.assetTransferTransaction.assetId)
}
// Result:
//  assetId: 31566704n <- this is now a bigint
```

- A fix was applied to the `intraRoundOffset` field. Previously, the calculation was only performed on the first level of inner transactions, nested inner transactions had the same `intraRoundOffset` as their parent transaction. Now, it's calculated for all levels of inner transactions.
- The `parentIntraRoundOffset` field was added. This is the offset of the parent transaction within the block.

### Changes to `TransactionInBlock`

This type has had several changes, mainly to make this type more aligned with `SubscribedTransaction`:

- The field `transactionId` was added. This is the ID of the transaction. For example:
  - W6IG6SETWKISJV4JQSS6GNZGWKYXOOLH7FT3NQM4BIFRLCOXOQHA if it's a parent transaction
  - W6IG6SETWKISJV4JQSS6GNZGWKYXOOLH7FT3NQM4BIFRLCOXOQHA/inner/1 if it's an inner transaction
- The field `roundOffset` was renamed to `intraRoundOffset`. This is the offset of the transaction within the block including inner transactions.
  - There is a fix applied to this field. Previously, the calculation was only performed to the first level of inner transactions, nested inner transactions had the same `roundOffset` as their parent transaction. Now, it's calculated for all levels of inner transactions.
- The field `roundIndex` was renamed to `parentIntraRoundOffset`. This is the offset of the parent transaction within the block.
- The field `parentOffset` was removed. It is not needed as the value can be calculated from the `parentIntraRoundOffset` and `intraRoundOffset`.
- The `blockTransaction` field is replaced with `signedTxnWithAD`. This is a part of the effort to align with `algosdk@3`. See [Removal of `BlockTransaction` and `BlockInnerTransaction`](#removal-of-blocktransaction-and-blockinnertransaction) for more details.

### Removal of `BlockData`

Previously a custom `BlockData` type was used to represent a raw algosdk block, as `algosdk@2` didn't export a suitable one. Now that `algosdk@3` does, `algosdk.modelsv2.BlockResponse` replaces `BlockData`. In `algosdk@3`, you can get the `algosdk.modelsv2.BlockResponse` from algod client as below.

```typescript
const block = await algodClient.block(round).do()
```

### Removal of `BlockTransaction` and `BlockInnerTransaction`

The `BlockTransaction` and `BlockInnerTransaction` types were removed and all usages of this type, have been replaced with `algosdk.SignedTxnWithAD` from `algosdk@3`.

Previously `BlockTransaction` and `BlockInnerTransaction` represented the raw `algod` block transaction returned when calling `await algodClient.block(round).do()`. In `algosdk@3` calling `await algodClient.block(round).do()` returns a processed version of the response with `SignedTxnWithAD` nested inside, hence why we have replaced `BlockTransaction` and `BlockInnerTransaction`. The below code shows some usages examples.

```typescript
// To get the created asset ID from a block transaction

/**** Before ****/
console.log('created asset ID', blockTransaction.caid)
// Result:
//   created asset ID: 31566704

/**** After ****/
console.log('created asset ID', signedTxnWithAD.applyData.configAsset)
// Result:
// created asset ID: 31566704n <- this is a bigint
```

```typescript
// To access the transaction sender

/**** Before ****/
console.log('transaction sender', blockTransaction.txn.snd)
// Result:
// transaction sender: 25M5BT2DMMED3V6CWDEYKSNEFGPXX4QBIINCOICLXXRU3UGTSGRMF3MTOE

/**** After ****/
// The sender now has `Address` type
console.log('transaction sender', signedTxnWithAD.signedTxn.txn.sender.toString())
// Result:
// transaction sender: 25M5BT2DMMED3V6CWDEYKSNEFGPXX4QBIINCOICLXXRU3UGTSGRMF3MTOE
```

### Changes to `BlockMetadata`

This type has not changed much, except for some fields have been converted from `number` to `bigint` to align with `algosdk@3`.

### Changes to `BalanceChange`

This type has not changed much, except for some fields have been converted from `number` to `bigint` to align with `algosdk@3`.

## Migration Steps

### Step 1 - Update usages of `AlgorandSubscriber` and `getSubscribedTransactions`

Since the types exported are now mostly aligned with `algosdk@3`, relevant `number` fields are now `bigint`. To maintain consistency, relevant filters that passed a `number` should now use a `bigint`.

```typescript
/**** Before ****/
const subscriber = new AlgorandSubscriber(
  {
    filters: [
      {
        name: 'usdc',
        filter: {
          type: TransactionType.axfer,
          assetId: 31566704,
          minAmount: 1_000_000,
        },
      },
    ],
    // ...
  },
  algorand.client.algod,
)

/**** After ****/
const subscriber = new AlgorandSubscriber(
  {
    filters: [
      {
        name: 'usdc',
        filter: {
          type: TransactionType.axfer,
          assetId: 31566704n, // this is now a bigint
          minAmount: 1_000_000n, // this is now a bigint
        },
      },
    ],
    // ...
  },
  algorand.client.algod,
)

subscriber.on('usdc', (subscribedTransaction) => {
  // Handling logic goes here
})
```

```typescript
/**** Before ****/
const result = await getSubscribedTransactions(
  {
    filters: [
      {
        name: 'usdc',
        filter: {
          type: TransactionType.axfer,
          assetId: 31566704n,
          minAmount: 1_000_000n,
        },
      },
    ],
    syncBehaviour: 'skip-sync-newest',
    watermark: 100n,
  },
  algorand.client.algod,
)

/**** After ****/
const result = await getSubscribedTransactions(
  {
    filters: [
      {
        name: 'usdc',
        filter: {
          type: TransactionType.axfer,
          assetId: 31566704n, // this is now a bigint
          minAmount: 1_000_000n, // this is now a bigint
        },
      },
    ],
    syncBehaviour: 'skip-sync-newest',
    watermark: 100n,
  },
  algorand.client.algod,
)

result.subscribedTransactions.forEach((subscribedTransaction) => {
  // Handling logic goes here
})
```

The `SubscribedTransaction` returned from your subscriber now leverage the `algosdk@3` types, so your handling code will require updates to account for these changes. See [Changes to `SubscribedTransaction`](#changes-to-subscribedtransaction) for details on how to update.

### Step 2 - Update usages of `getBlockTransactions`

The previous input type `Block` has been changed to `algosdk.modelsv2.BlockResponse`, see [Removal of `BlockData`](#removal-of-blockdata) for more information.
The output type `TransactionInBlock` has been updated to support the `algosdk@3` types, see [Changes to `TransactionInBlock`](#changes-to-transactioninblock) for more information.

```typescript
/**** Before ****/
// The algod client returns a `Record<string, any>` value
const blockData = (await algorand.client.algod.block(round).do()) as BlockData
const blockTransactions = getBlockTransactions(blockData.block)

/**** After ****/
const block = await algorand.client.algod.block(round).do()
const blockTransactions = getBlockTransactions(block)
```

### Step 3 - Update usages of `getIndexerTransactionFromAlgodTransaction`

The input type `TransactionInBlock` has been updated to support the `algosdk@3` types, see [Changes to `TransactionInBlock`](#changes-to-transactioninblock) for more information.
The output type `SubscribedTransaction` has been updated to support the `algosdk@3` types, see [Changes to `SubscribedTransaction`](#changes-to-subscribedtransaction) for more information.

### Step 4 - Update usages of `blockDataToBlockMetadata`

This method has been renamed to `blockResponseToBlockMetadata`. Additionally the previous input type `BlockData` has been changed to `algosdk.modelsv2.BlockResponse`, see [Removal of `BlockData`](#removal-of-blockdata) for more information.
The output type `BlockMetadata` has been changed in a few small ways, see [Changes to `BlockMetadata`](#changes-to-blockmetadata) for more information.

```typescript
/**** Before ****/
// The algod client returns a `Record<string, any>` value
const blockData = (await algorand.client.algod.block(round).do()) as BlockData
const blockMetadata = blockDataToBlockMetadata(blockData)

/**** After ****/
const block = await algorand.client.algod.block(round).do()
const blockMetadata = blockResponseToBlockMetadata(block)
```

### Step 5 - Update usages of `extractBalanceChangesFromBlockTransaction`

The previous input type `BlockTransaction | BlockInnerTransaction` has been changed to `algosdk.SignedTxnWithAD`, see [Removal of `BlockTransaction` and `BlockInnerTransaction`](#removal-of-blocktransaction-and-blockinnertransaction) for more information.
The output type `BalanceChange` has been changed in a few small ways, see [Changes to `BalanceChange`](#changes-to-balancechange) for more information.

### Step 6 - Update usages of `extractBalanceChangesFromIndexerTransaction`

The previous input type `TransactionResult` has been changed to `algosdk.indexerModels.Transaction`, see [Changes to `SubscribedTransaction`](#changes-to-subscribedtransaction) for more information.
The output type `BalanceChange[]` has been changed in a few small ways, see [Changes to `BalanceChange`](#changes-to-balancechange) for more information.

### Step 7 - Update usages of `getBlocksBulk`

The previous return type `BlockData` has been changed to `algosdk.modelsv2.BlockResponse`, see [Removal of `BlockData`](#removal-of-blockdata) for more information.

### Step 8 - Handle bigint serialization

Since the majority of number fields are now `bigint`, the default `JSON.stringify` will no longer work in scenarios where it previously did. We recommend you use a custom JSON replacer to handle the bigint values. Below is an example of how you might do this.

```typescript
export const asJson = (value: unknown) => JSON.stringify(value, (_, v) => (typeof v === 'bigint' ? v.toString() : v), 2)
```
