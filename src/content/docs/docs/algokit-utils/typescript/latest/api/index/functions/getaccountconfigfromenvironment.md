---
editUrl: false
next: false
prev: false
title: "getAccountConfigFromEnvironment"
---

> **getAccountConfigFromEnvironment**(`accountName`): [`AccountConfig`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/accountconfig/)

Defined in: [src/account/get-account-config-from-environment.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/get-account-config-from-environment.ts#L13)

:::caution[Deprecated]
Use algokit.mnemonicAccountFromEnvironment, which doesn't need this function
Returns the Account configuration from environment variables
:::

## Parameters

### accountName

`string`

account name

## Returns

[`AccountConfig`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/accountconfig/)

## Example

```ts
environment variables
{accountName}_MNEMONIC
{accountName}_SENDER
```
