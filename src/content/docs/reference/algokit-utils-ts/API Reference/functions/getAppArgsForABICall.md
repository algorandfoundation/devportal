---
editUrl: false
next: false
prev: false
title: "getAppArgsForABICall"
---

> **getAppArgsForABICall**(`args`, `from`): `Promise`\<\{ `appAccounts`: `undefined` \| `string`[]; `appForeignApps`: `undefined` \| `number`[]; `appForeignAssets`: `undefined` \| `number`[]; `boxes`: `undefined` \| `BoxReference`[]; `lease`: `undefined` \| `Uint8Array`; `method`: `ABIMethod`; `methodArgs`: (`string` \| `number` \| `bigint` \| `boolean` \| `Uint8Array` \| `ABIValue`[] \| `TransactionWithSigner`)[]; `rekeyTo`: `undefined` \| `string`; `sender`: `string`; `signer`: `TransactionSigner`; \}\>

Defined in: [src/app.ts:378](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app.ts#L378)

:::caution[Deprecated]
Use `TransactionComposer` methods to construct transactions instead.

Returns the app args ready to load onto an ABI method call in `AtomicTransactionComposer`
:::

## Parameters

### args

`ABIAppCallArgs`

The ABI app call args

### from

`SendTransactionFrom`

The transaction signer

## Returns

`Promise`\<\{ `appAccounts`: `undefined` \| `string`[]; `appForeignApps`: `undefined` \| `number`[]; `appForeignAssets`: `undefined` \| `number`[]; `boxes`: `undefined` \| `BoxReference`[]; `lease`: `undefined` \| `Uint8Array`; `method`: `ABIMethod`; `methodArgs`: (`string` \| `number` \| `bigint` \| `boolean` \| `Uint8Array` \| `ABIValue`[] \| `TransactionWithSigner`)[]; `rekeyTo`: `undefined` \| `string`; `sender`: `string`; `signer`: `TransactionSigner`; \}\>

The parameters ready to pass into `addMethodCall` within AtomicTransactionComposer
