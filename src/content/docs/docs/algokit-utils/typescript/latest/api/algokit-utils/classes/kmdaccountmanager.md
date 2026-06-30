---
editUrl: false
next: false
prev: false
title: 'KmdAccountManager'
---

Defined in: [src/kmd-account-manager.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/kmd-account-manager.ts#L13)

Provides abstractions over a [KMD](https://github.com/algorand/go-algorand/blob/master/daemon/kmd/README.md) instance
that makes it easier to get and manage accounts using KMD.

## Constructors

### Constructor

> **new KmdAccountManager**(`clientManager`): `KmdAccountManager`

Defined in: [src/kmd-account-manager.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/kmd-account-manager.ts#L21)

Create a new KMD manager.

#### Parameters

##### clientManager

[`ClientManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/clientmanager/)

A ClientManager client to use for algod and kmd clients

#### Returns

`KmdAccountManager`

## Methods

### getLocalNetDispenserAccount()

> **getLocalNetDispenserAccount**(): `Promise`\<[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)\>

Defined in: [src/kmd-account-manager.ts:191](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/kmd-account-manager.ts#L191)

Returns an Algorand account with private key loaded for the default LocalNet dispenser account (that can be used to fund other accounts).

#### Returns

`Promise`\<[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)\>

The default LocalNet dispenser account

#### Example

```typescript
const dispenser = await kmdAccountManager.getLocalNetDispenserAccount();
```

---

### getOrCreateWalletAccount()

> **getOrCreateWalletAccount**(`name`, `fundWith?`): `Promise`\<[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)\>

Defined in: [src/kmd-account-manager.ts:147](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/kmd-account-manager.ts#L147)

Gets an account with private key loaded from a KMD wallet of the given name, or alternatively creates one with funds in it via a KMD wallet of the given name.

This is useful to get idempotent accounts from LocalNet without having to specify the private key (which will change when resetting the LocalNet).

This significantly speeds up local dev time and improves experience since you can write code that _just works_ first go without manual config in a fresh LocalNet.

If this is used via `mnemonicAccountFromEnvironment`, then you can even use the same code that runs on production without changes for local development!

#### Parameters

##### name

`string`

The name of the wallet to retrieve / create

##### fundWith?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

The number of Algo to fund the account with when it gets created, if not specified then 1000 ALGO will be funded from the dispenser account

#### Returns

`Promise`\<[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)\>

An Algorand account with private key loaded - either one that already existed in the given KMD wallet, or a new one that is funded for you

#### Example

```typescript
// Idempotently get (if exists) or create (if it doesn't exist yet) an account by name using KMD
// if creating it then fund it with 2 ALGO from the default dispenser account
const newAccount = await kmdAccountManager.getOrCreateWalletAccount('account1', (2).algo());
// This will return the same account as above since the name matches
const existingAccount = await kmdAccountManager.getOrCreateWalletAccount('account1');
```

---

### getWalletAccount()

> **getWalletAccount**(`walletName`, `predicate?`, `sender?`): `Promise`\<[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| `undefined`\>

Defined in: [src/kmd-account-manager.ts:65](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/kmd-account-manager.ts#L65)

Returns an Algorand signing account with private key loaded from the given KMD wallet (identified by name).

#### Parameters

##### walletName

`string`

The name of the wallet to retrieve an account from

##### predicate?

(`account`) => `boolean`

An optional filter to use to find the account (otherwise it will return a random account from the wallet)

##### sender?

The optional sender address to use this signer for (aka a rekeyed account)

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

#### Returns

`Promise`\<[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| `undefined`\>

The signing account (with private key loaded) or undefined if no matching wallet or account was found

#### Example

```typescript
const defaultDispenserAccount = await kmdAccountManager.getWalletAccount(
  'unencrypted-default-wallet',
  a => a.status !== 'Offline' && a.amount > 1_000_000_000,
);
```

---

### kmd()

> **kmd**(): `Promise`\<[`KmdClient`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/classes/kmdclient/)\>

Defined in: [src/kmd-account-manager.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/kmd-account-manager.ts#L30)

#### Returns

`Promise`\<[`KmdClient`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/classes/kmdclient/)\>
