---
editUrl: false
next: false
prev: false
title: "getAccountConfigFromEnvironment"
---

> **getAccountConfigFromEnvironment**(`accountName`): `AccountConfig`

Defined in: [src/account/get-account-config-from-environment.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/account/get-account-config-from-environment.ts#L13)

:::caution[Deprecated]
Use algokit.mnemonicAccountFromEnvironment, which doesn't need this function
Returns the Account configuration from environment variables
:::

## Parameters

### accountName

`string`

account name

## Returns

`AccountConfig`

## Example

```ts
environment variables
{accountName}_MNEMONIC
{accountName}_SENDER
```
