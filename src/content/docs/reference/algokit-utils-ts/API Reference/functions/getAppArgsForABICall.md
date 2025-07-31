---
editUrl: false
next: false
prev: false
title: "getAppArgsForABICall"
---

> **getAppArgsForABICall**(`args`, `from`): `Promise`\<\{ `appAccounts`: `undefined` \| `string`[]; `appForeignApps`: `undefined` \| `number`[]; `appForeignAssets`: `undefined` \| `number`[]; `boxes`: `undefined` \| `BoxReference`[]; `lease`: `undefined` \| `Uint8Array`; `method`: `ABIMethod`; `methodArgs`: (`string` \| `number` \| `bigint` \| `boolean` \| `Uint8Array` \| `ABIValue`[] \| `TransactionWithSigner`)[]; `rekeyTo`: `undefined` \| `string`; `sender`: `string`; `signer`: `TransactionSigner`; \}\>

Defined in: [src/app.ts:378](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L378)

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
