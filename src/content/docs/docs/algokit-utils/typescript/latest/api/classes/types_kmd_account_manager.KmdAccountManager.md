---
title: KmdAccountManager
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/kmd-account-manager](/docs/algokit-utils/typescript/latest/api/modules/types_kmd_account_manager/) / KmdAccountManager



[types/kmd-account-manager](/docs/algokit-utils/typescript/latest/api/modules/types_kmd_account_manager/).KmdAccountManager

Provides abstractions over a [KMD](https://github.com/algorand/go-algorand/blob/master/daemon/kmd/README.md) instance
that makes it easier to get and manage accounts using KMD.

## Table of contents

### Constructors

- [constructor](/docs/algokit-utils/typescript/latest/api/classes/types_kmd_account_managerkmdaccountmanager/#constructor)

### Properties

- [\_clientManager](/docs/algokit-utils/typescript/latest/api/classes/types_kmd_account_managerkmdaccountmanager/#_clientmanager)
- [\_kmd](/docs/algokit-utils/typescript/latest/api/classes/types_kmd_account_managerkmdaccountmanager/#_kmd)

### Methods

- [getLocalNetDispenserAccount](/docs/algokit-utils/typescript/latest/api/classes/types_kmd_account_managerkmdaccountmanager/#getlocalnetdispenseraccount)
- [getOrCreateWalletAccount](/docs/algokit-utils/typescript/latest/api/classes/types_kmd_account_managerkmdaccountmanager/#getorcreatewalletaccount)
- [getWalletAccount](/docs/algokit-utils/typescript/latest/api/classes/types_kmd_account_managerkmdaccountmanager/#getwalletaccount)
- [kmd](/docs/algokit-utils/typescript/latest/api/classes/types_kmd_account_managerkmdaccountmanager/#kmd)

## Constructors

### constructor

• **new KmdAccountManager**(`clientManager`): [`KmdAccountManager`](/docs/algokit-utils/typescript/latest/api/classes/types_kmd_account_managerkmdaccountmanager/)

Create a new KMD manager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientManager` | [`ClientManager`](/docs/algokit-utils/typescript/latest/api/classes/types_client_managerclientmanager/) | A ClientManager client to use for algod and kmd clients |

#### Returns

[`KmdAccountManager`](/docs/algokit-utils/typescript/latest/api/classes/types_kmd_account_managerkmdaccountmanager/)

#### Defined in

[src/types/kmd-account-manager.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/kmd-account-manager.ts#L18)

## Properties

### \_clientManager

• `Private` **\_clientManager**: `Omit`\<[`ClientManager`](/docs/algokit-utils/typescript/latest/api/classes/types_client_managerclientmanager/), ``"kmd"``\>

#### Defined in

[src/types/kmd-account-manager.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/kmd-account-manager.ts#L11)

___

### \_kmd

• `Private` `Optional` **\_kmd**: ``null`` \| `KmdClient`

#### Defined in

[src/types/kmd-account-manager.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/kmd-account-manager.ts#L12)

## Methods

### getLocalNetDispenserAccount

▸ **getLocalNetDispenserAccount**(): `Promise`\<[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/)  }\>

Returns an Algorand account with private key loaded for the default LocalNet dispenser account (that can be used to fund other accounts).

#### Returns

`Promise`\<[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/)  }\>

The default LocalNet dispenser account

**`Example`**

```typescript
const dispenser = await kmdAccountManager.getLocalNetDispenserAccount()
```

#### Defined in

[src/types/kmd-account-manager.ts:186](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/kmd-account-manager.ts#L186)

___

### getOrCreateWalletAccount

▸ **getOrCreateWalletAccount**(`name`, `fundWith?`): `Promise`\<[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/)  }\>

Gets an account with private key loaded from a KMD wallet of the given name, or alternatively creates one with funds in it via a KMD wallet of the given name.

This is useful to get idempotent accounts from LocalNet without having to specify the private key (which will change when resetting the LocalNet).

This significantly speeds up local dev time and improves experience since you can write code that *just works* first go without manual config in a fresh LocalNet.

If this is used via `mnemonicAccountFromEnvironment`, then you can even use the same code that runs on production without changes for local development!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the wallet to retrieve / create |
| `fundWith?` | [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amountalgoamount/) | The number of Algo to fund the account with when it gets created, if not specified then 1000 ALGO will be funded from the dispenser account |

#### Returns

`Promise`\<[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/)  }\>

An Algorand account with private key loaded - either one that already existed in the given KMD wallet, or a new one that is funded for you

**`Example`**

```typescript
// Idempotently get (if exists) or create (if it doesn't exist yet) an account by name using KMD
// if creating it then fund it with 2 ALGO from the default dispenser account
const newAccount = await kmdAccountManager.getOrCreateWalletAccount('account1', (2).algo())
// This will return the same account as above since the name matches
const existingAccount = await kmdAccountManager.getOrCreateWalletAccount('account1')
```

#### Defined in

[src/types/kmd-account-manager.ts:135](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/kmd-account-manager.ts#L135)

___

### getWalletAccount

▸ **getWalletAccount**(`walletName`, `predicate?`, `sender?`): `Promise`\<`undefined` \| [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/)  }\>

Returns an Algorand signing account with private key loaded from the given KMD wallet (identified by name).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `walletName` | `string` | The name of the wallet to retrieve an account from |
| `predicate?` | (`account`: `Record`\<`string`, `any`\>) => `boolean` | An optional filter to use to find the account (otherwise it will return a random account from the wallet) |
| `sender?` | `string` \| `Address` | The optional sender address to use this signer for (aka a rekeyed account) |

#### Returns

`Promise`\<`undefined` \| [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/)  }\>

The signing account (with private key loaded) or undefined if no matching wallet or account was found

**`Example`**

```typescript
const defaultDispenserAccount = await kmdAccountManager.getWalletAccount(
  'unencrypted-default-wallet',
  a => a.status !== 'Offline' && a.amount > 1_000_000_000
)
```

#### Defined in

[src/types/kmd-account-manager.ts:62](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/kmd-account-manager.ts#L62)

___

### kmd

▸ **kmd**(): `Promise`\<`KmdClient`\>

#### Returns

`Promise`\<`KmdClient`\>

#### Defined in

[src/types/kmd-account-manager.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/kmd-account-manager.ts#L27)