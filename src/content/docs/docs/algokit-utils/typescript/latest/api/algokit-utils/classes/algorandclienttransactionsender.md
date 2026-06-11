---
editUrl: false
next: false
prev: false
title: 'AlgorandClientTransactionSender'
---

Defined in: [src/algorand-client-transaction-sender.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L38)

Orchestrates sending transactions for `AlgorandClient`.

## Constructors

### Constructor

> **new AlgorandClientTransactionSender**(`newGroup`, `assetManager`, `appManager`): `AlgorandClientTransactionSender`

Defined in: [src/algorand-client-transaction-sender.ts:53](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L53)

Creates a new `AlgorandClientSender`

#### Parameters

##### newGroup

(`config?`) => [`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/transactioncomposer/)

A lambda that starts a new `TransactionComposer` transaction group

##### assetManager

[`AssetManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/assetmanager/)

An `AssetManager` instance

##### appManager

[`AppManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appmanager/)

An `AppManager` instance

#### Returns

`AlgorandClientTransactionSender`

#### Example

```typescript
const transactionSender = new AlgorandClientTransactionSender(
  () => new TransactionComposer(),
  assetManager,
  appManager,
);
```

## Properties

### appCall()

> **appCall**: (`params`) => `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:735](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L735)

Call a smart contract.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

`CommonTransactionParams` & `object` & `object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the app call transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the app call transaction and the transaction that was sent

#### Examples

```typescript
await algorand.send.appCall({ sender: 'CREATORADDRESS' });
```

```typescript
await algorand.send.appCall({
 sender: 'CREATORADDRESS',
 onComplete: OnApplicationComplete.OptIn,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

---

### appCallMethodCall()

> **appCallMethodCall**: (`params`) => `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:983](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L983)

Call a smart contract via an ABI method.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

`object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the app call transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the application ABI method call transaction and the transaction that was sent

#### Examples

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
});
await algorand.send.appCallMethodCall({
  sender: 'CREATORADDRESS',
  method: method,
  args: ['arg1_value'],
});
```

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.send.appCallMethodCall({
 sender: 'CREATORADDRESS',
 method: method,
 args: ["arg1_value"],
 onComplete: OnApplicationComplete.OptIn,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

---

### appCreate()

> **appCreate**: (`params`) => `Promise`\<\{ `appAddress`: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/); `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:592](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L592)

Create a smart contract.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

`object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the app creation transaction

#### Returns

`Promise`\<\{ `appAddress`: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/); `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the app create transaction and the transaction that was sent

#### Examples

```typescript
const result = await algorand.send.appCreate({
  sender: 'CREATORADDRESS',
  approvalProgram: 'TEALCODE',
  clearStateProgram: 'TEALCODE',
});
const createdAppId = result.appId;
```

```typescript
await algorand.send.appCreate({
 sender: 'CREATORADDRESS',
 approvalProgram: "TEALCODE",
 clearStateProgram: "TEALCODE",
 schema: {
   globalInts: 1,
   globalByteSlices: 2,
   localInts: 3,
   localByteSlices: 4
 },
 extraProgramPages: 1,
 onComplete: OnApplicationComplete.OptIn,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

---

### appCreateMethodCall()

> **appCreateMethodCall**: (`params`) => `Promise`\<\{ `appAddress`: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/); `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:804](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L804)

Create a smart contract via an ABI method.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

`object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the app creation transaction

#### Returns

`Promise`\<\{ `appAddress`: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/); `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the application ABI method create transaction and the transaction that was sent

#### Examples

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
});
const result = await algorand.send.appCreateMethodCall({
  sender: 'CREATORADDRESS',
  approvalProgram: 'TEALCODE',
  clearStateProgram: 'TEALCODE',
  method: method,
  args: ['arg1_value'],
});
const createdAppId = result.appId;
```

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.send.appCreateMethodCall({
 sender: 'CREATORADDRESS',
 method: method,
 args: ["arg1_value"],
 approvalProgram: "TEALCODE",
 clearStateProgram: "TEALCODE",
 schema: {
   globalInts: 1,
   globalByteSlices: 2,
   localInts: 3,
   localByteSlices: 4
 },
 extraProgramPages: 1,
 onComplete: OnApplicationComplete.OptIn,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

---

### appDelete()

> **appDelete**: (`params`) => `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:688](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L688)

Delete a smart contract.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

`CommonTransactionParams` & `object` & `object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the app deletion transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the app delete transaction and the transaction that was sent

#### Examples

```typescript
await algorand.send.appDelete({ sender: 'CREATORADDRESS' });
```

```typescript
await algorand.send.appDelete({
 sender: 'CREATORADDRESS',
 onComplete: OnApplicationComplete.DeleteApplication,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

---

### appDeleteMethodCall()

> **appDeleteMethodCall**: (`params`) => `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:924](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L924)

Delete a smart contract via an ABI method.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

`object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the app deletion transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the application ABI method delete transaction and the transaction that was sent

#### Examples

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
});
await algorand.send.appDeleteMethodCall({
  sender: 'CREATORADDRESS',
  method: method,
  args: ['arg1_value'],
});
```

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.send.appDeleteMethodCall({
 sender: 'CREATORADDRESS',
 method: method,
 args: ["arg1_value"],
 onComplete: OnApplicationComplete.DeleteApplication,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

---

### appUpdate()

> **appUpdate**: (`params`) => `Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:641](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L641)

Update a smart contract.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

`object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the app update transaction

#### Returns

`Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the app update transaction and the transaction that was sent

#### Examples

```typescript
await algorand.send.appUpdate({
  sender: 'CREATORADDRESS',
  approvalProgram: 'TEALCODE',
  clearStateProgram: 'TEALCODE',
});
```

```typescript
await algorand.send.appUpdate({
 sender: 'CREATORADDRESS',
 approvalProgram: "TEALCODE",
 clearStateProgram: "TEALCODE",
 onComplete: OnApplicationComplete.UpdateApplication,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

---

### appUpdateMethodCall()

> **appUpdateMethodCall**: (`params`) => `Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:865](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L865)

Update a smart contract via an ABI method.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

`object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the app update transaction

#### Returns

`Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/compiledteal/); `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the application ABI method update transaction and the transaction that was sent

#### Examples

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
});
await algorand.send.appUpdateMethodCall({
  sender: 'CREATORADDRESS',
  approvalProgram: 'TEALCODE',
  clearStateProgram: 'TEALCODE',
  method: method,
  args: ['arg1_value'],
});
```

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.send.appUpdateMethodCall({
 sender: 'CREATORADDRESS',
 method: method,
 args: ["arg1_value"],
 approvalProgram: "TEALCODE",
 clearStateProgram: "TEALCODE",
 onComplete: OnApplicationComplete.UpdateApplication,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

---

### assetConfig()

> **assetConfig**: (`params`) => `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:300](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L300)

Configure an existing Algorand Standard Asset.

**Note:** The manager, reserve, freeze, and clawback addresses
are immutably empty if they are not set. If manager is not set then
all fields are immutable from that point forward.

#### Parameters

##### params

`CommonTransactionParams` & `object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the asset config transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the asset config transaction and the transaction that was sent

#### Examples

```typescript
await algorand.send.assetConfig({
  sender: 'MANAGERADDRESS',
  assetId: 123456n,
  manager: 'MANAGERADDRESS',
});
```

```typescript
await algorand.send.assetConfig({
  sender: 'MANAGERADDRESS',
  assetId: 123456n,
  manager: 'MANAGERADDRESS',
  reserve: 'RESERVEADDRESS',
  freeze: 'FREEZEADDRESS',
  clawback: 'CLAWBACKADDRESS',
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

---

### assetDestroy()

> **assetDestroy**: (`params`) => `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:380](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L380)

Destroys an Algorand Standard Asset.

Created assets can be destroyed only by the asset manager account.
All of the assets must be owned by the creator of the asset before
the asset can be deleted.

#### Parameters

##### params

`CommonTransactionParams` & `object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the asset destroy transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the asset destroy transaction and the transaction that was sent

#### Examples

```typescript
await algorand.send.assetDestroy({ sender: 'MANAGERADDRESS', assetId: 123456n });
```

```typescript
await algorand.send.assetDestroy({
  sender: 'MANAGERADDRESS',
  assetId: 123456n,
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

---

### assetFreeze()

> **assetFreeze**: (`params`) => `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:339](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L339)

Freeze or unfreeze an Algorand Standard Asset for an account.

#### Parameters

##### params

`CommonTransactionParams` & `object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the asset freeze transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the asset freeze transaction and the transaction that was sent

#### Examples

```typescript
await algorand.send.assetFreeze({
  sender: 'MANAGERADDRESS',
  assetId: 123456n,
  account: 'ACCOUNTADDRESS',
  frozen: true,
});
```

```typescript
await algorand.send.assetFreeze({
  sender: 'MANAGERADDRESS',
  assetId: 123456n,
  account: 'ACCOUNTADDRESS',
  frozen: true,
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

---

### assetOptIn()

> **assetOptIn**: (`params`) => `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:460](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L460)

Opt an account into an Algorand Standard Asset.

#### Parameters

##### params

`CommonTransactionParams` & `object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the asset opt-in transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the asset opt-in transaction and the transaction that was sent

#### Examples

```typescript
await algorand.send.assetOptIn({ sender: 'SENDERADDRESS', assetId: 123456n });
```

```typescript
await algorand.send.assetOptIn({
  sender: 'SENDERADDRESS',
  assetId: 123456n,
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

---

### assetTransfer()

> **assetTransfer**: (`params`) => `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:422](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L422)

Transfer an Algorand Standard Asset.

#### Parameters

##### params

`CommonTransactionParams` & `object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the asset transfer transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the asset transfer transaction and the transaction that was sent

#### Examples

```typescript
await algorand.send.assetTransfer({
  sender: 'HOLDERADDRESS',
  assetId: 123456n,
  amount: 1n,
  receiver: 'RECEIVERADDRESS',
});
```

```typescript
await algorand.send.assetTransfer({
  sender: 'CLAWBACKADDRESS',
  assetId: 123456n,
  amount: 1n,
  receiver: 'RECEIVERADDRESS',
  clawbackTarget: 'HOLDERADDRESS',
  // This field needs to be used with caution
  closeAssetTo: 'ADDRESSTOCLOSETO'
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
})
```

---

### offlineKeyRegistration()

> **offlineKeyRegistration**: (`params`) => `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:1062](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L1062)

Register an offline key.

#### Parameters

##### params

`CommonTransactionParams` & `object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the key registration transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the offline key registration transaction and the transaction that was sent

#### Examples

```typescript
const result = await algorand.send.offlineKeyRegistration({
  sender: 'SENDERADDRESS',
});
```

```typescript
const result = await algorand.send.offlineKeyRegistration({
  sender: 'SENDERADDRESS',
  lease: 'lease',
  note: 'note',
  // Use this with caution, it's generally better to use algorand.account.rekeyAccount
  rekeyTo: 'REKEYTOADDRESS',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
});
```

---

### onlineKeyRegistration()

> **onlineKeyRegistration**: (`params`) => `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:1029](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L1029)

Register an online key.

#### Parameters

##### params

`CommonTransactionParams` & `object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the key registration transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the online key registration transaction and the transaction that was sent

#### Examples

```typescript
const result = await algorand.send.onlineKeyRegistration({
  sender: 'SENDERADDRESS',
  voteKey: Uint8Array.from(Buffer.from('voteKeyBase64', 'base64')),
  selectionKey: Uint8Array.from(Buffer.from('selectionKeyBase64', 'base64')),
  stateProofKey: Uint8Array.from(Buffer.from('stateProofKeyBase64', 'base64')),
  voteFirst: 1n,
  voteLast: 1000n,
  voteKeyDilution: 1n,
});
```

```typescript
const result = await algorand.send.onlineKeyRegistration({
  sender: 'SENDERADDRESS',
  voteKey: Uint8Array.from(Buffer.from('voteKeyBase64', 'base64')),
  selectionKey: Uint8Array.from(Buffer.from('selectionKeyBase64', 'base64')),
  stateProofKey: Uint8Array.from(Buffer.from('stateProofKeyBase64', 'base64')),
  voteFirst: 1n,
  voteLast: 1000n,
  voteKeyDilution: 1n,
  lease: 'lease',
  note: 'note',
  // Use this with caution, it's generally better to use algorand.account.rekeyAccount
  rekeyTo: 'REKEYTOADDRESS',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
});
```

---

### payment()

> **payment**: (`params`) => `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:201](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L201)

Send a payment transaction to transfer Algo between accounts.

#### Parameters

##### params

`CommonTransactionParams` & `object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the payment transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the payment transaction and the transaction that was sent

#### Examples

```ts
Basic example
{@includeCode ./algorand-client.spec.ts#example-send-payment}
```

```typescript
const result = await algorand.send.payment({
  amount: (4).algo(),
  receiver: 'RECEIVERADDRESS',
  sender: 'SENDERADDRESS',
  closeRemainderTo: 'CLOSEREMAINDERTOADDRESS',
  lease: 'lease',
  note: 'note',
  // Use this with caution, it's generally better to use algorand.account.rekeyAccount
  rekeyTo: 'REKEYTOADDRESS',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

#### See

[Full working example](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client.spec.ts)

## Methods

### assetCreate()

> **assetCreate**(`params`): `Promise`\<\{ `assetId`: `bigint`; `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:251](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L251)

Create a new Algorand Standard Asset.

The account that sends this transaction will automatically be
opted in to the asset and will hold all units after creation.

#### Parameters

##### params

`CommonTransactionParams` & `object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the asset creation transaction

#### Returns

`Promise`\<\{ `assetId`: `bigint`; `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the asset create transaction and the transaction that was sent

#### Examples

```ts
Basic example
{@includeCode ./algorand-client.spec.ts#example-send-asset-create}
```

```typescript
await algorand.send.assetCreate({
  sender: 'CREATORADDRESS',
  total: 100n,
  decimals: 2,
  assetName: 'asset',
  unitName: 'unit',
  url: 'url',
  metadataHash: 'metadataHash',
  defaultFrozen: false,
  manager: 'MANAGERADDRESS',
  reserve: 'RESERVEADDRESS',
  freeze: 'FREEZEADDRESS',
  clawback: 'CLAWBACKADDRESS',
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

#### See

[Full working example](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client.spec.ts)

---

### assetOptOut()

> **assetOptOut**(`params`): `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/algorand-client-transaction-sender.ts:507](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L507)

Opt an account out of an Algorand Standard Asset.

_Note:_ If the account has a balance of the asset,
it will not be able to opt-out unless `ensureZeroBalance`
is set to `false` (but then the account will lose the assets).

#### Parameters

##### params

`Omit`\<`AssetOptOutParams`, `"creator"`\> & `object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The parameters for the asset opt-out transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the asset opt-out transaction and the transaction that was sent

#### Examples

```typescript
await algorand.send.assetOptOut({
  sender: 'SENDERADDRESS',
  assetId: 123456n,
  ensureZeroBalance: true,
});
```

```typescript
await algorand.send.assetOptOut({
  sender: 'SENDERADDRESS',
  creator: 'CREATORADDRESS',
  assetId: 123456n,
  ensureZeroBalance: true,
});
```

```typescript
await algorand.send.assetOptOut({
  sender: 'SENDERADDRESS',
  assetId: 123456n,
  creator: 'CREATORADDRESS',
  ensureZeroBalance: true,
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

---

### newGroup()

> **newGroup**(): [`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/transactioncomposer/)

Defined in: [src/algorand-client-transaction-sender.ts:66](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-sender.ts#L66)

Start a new `TransactionComposer` transaction group

#### Returns

[`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/transactioncomposer/)

A new instance of `TransactionComposer`.

#### Example

```ts
const composer = AlgorandClient.mainNet().send.newGroup();
const result = await composer.addTransaction(payment).send();
```
