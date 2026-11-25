---
editUrl: false
next: false
prev: false
title: "getAppArgsForABICall"
---

> **getAppArgsForABICall**(`args`, `from`): `Promise`\<\{ `appAccounts`: `string`[] \| `undefined`; `appForeignApps`: `number`[] \| `undefined`; `appForeignAssets`: `number`[] \| `undefined`; `boxes`: `BoxReference`[] \| `undefined`; `lease`: `Uint8Array`\<`ArrayBufferLike`\> \| `undefined`; `method`: `ABIMethod`; `methodArgs`: (`string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| `TransactionWithSigner`)[]; `rekeyTo`: `string` \| `undefined`; `sender`: `string`; `signer`: `TransactionSigner`; \}\>

Defined in: [src/app.ts:378](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L378)

:::caution[Deprecated]
Use `TransactionComposer` methods to construct transactions instead.

Returns the app args ready to load onto an ABI method call in `AtomicTransactionComposer`
:::

## Parameters

### args

[`ABIAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abiappcallargs/)

The ABI app call args

### from

[`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

The transaction signer

## Returns

`Promise`\<\{ `appAccounts`: `string`[] \| `undefined`; `appForeignApps`: `number`[] \| `undefined`; `appForeignAssets`: `number`[] \| `undefined`; `boxes`: `BoxReference`[] \| `undefined`; `lease`: `Uint8Array`\<`ArrayBufferLike`\> \| `undefined`; `method`: `ABIMethod`; `methodArgs`: (`string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| `TransactionWithSigner`)[]; `rekeyTo`: `string` \| `undefined`; `sender`: `string`; `signer`: `TransactionSigner`; \}\>

The parameters ready to pass into `addMethodCall` within AtomicTransactionComposer
