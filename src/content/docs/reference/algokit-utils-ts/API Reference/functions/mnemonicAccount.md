---
editUrl: false
next: false
prev: false
title: "mnemonicAccount"
---

> **mnemonicAccount**(`mnemonicSecret`): `Account`

Defined in: [src/account/mnemonic-account.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/account/mnemonic-account.ts#L14)

:::caution[Deprecated]
Use `algorand.account.fromMnemonic(mnemonicSecret)` or `algosdk.mnemonicToSecretKey(mnemonicSecret)` instead.

Returns an Algorand account with secret key loaded (i.e. that can sign transactions) by taking the mnemonic secret.

This is a wrapper around algosdk.mnemonicToSecretKey to provide a more friendly/obvious name.
:::

## Parameters

### mnemonicSecret

`string`

The mnemonic secret representing the private key of an account; **Note: Be careful how the mnemonic is handled**,
 never commit it into source control and ideally load it from the environment (ideally via a secret storage service) rather than the file system.

## Returns

`Account`
