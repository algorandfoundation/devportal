---
editUrl: false
next: false
prev: false
title: "getAccountInformation"
---

> **getAccountInformation**(`sender`, `algod`): `Promise`\<[`AccountInformation`](/docs/algokit-utils/typescript/latest/api/index/type-aliases/accountinformation/)\>

Defined in: [src/account/account.ts:156](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L156)

:::caution[Deprecated]
Use `algorand.account.getInformation(sender)` or `new AccountManager(clientManager).getInformation(sender)` instead.

Returns the given sender account's current status, balance and spendable amounts.
:::

## Parameters

### sender

`string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

The address of the sender/account to look up

### algod

`AlgodClient`

The algod instance

## Returns

`Promise`\<[`AccountInformation`](/docs/algokit-utils/typescript/latest/api/index/type-aliases/accountinformation/)\>

The account information

## Example

```typescript
const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
const accountInfo = await account.getInformation(address, algod);
```

[Response data schema details](https://dev.algorand.co/reference/rest-api/algod/operations/accountinformation/)
