---
editUrl: false
next: false
prev: false
title: 'AccountManager'
---

Defined in: [src/account-manager.ts:48](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L48)

Creates and keeps track of signing accounts that can sign transactions for a sending address.

## See

- [KmdAccountManager](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/kmdaccountmanager/) for KMD-specific account management
- [AlgorandClient](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algorandclient/) for the main entry point that provides access to this manager

## Constructors

### Constructor

> **new AccountManager**(`clientManager`, `config`): `AccountManager`

Defined in: [src/account-manager.ts:63](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L63)

Create a new account manager.

#### Parameters

##### clientManager

[`ClientManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/clientmanager/)

The ClientManager client to use for algod and kmd clients

##### config

`AccountManagerConfig`

#### Returns

`AccountManager`

#### Example

```typescript
const accountManager = new AccountManager(clientManager);
```

## Accessors

### kmd

#### Get Signature

> **get** **kmd**(): [`KmdAccountManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/kmdaccountmanager/)

Defined in: [src/account-manager.ts:85](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L85)

KMD account manager that allows you to easily get and create accounts using KMD.

##### Example

```typescript
const kmdManager = accountManager.kmd;
```

##### Returns

[`KmdAccountManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/kmdaccountmanager/)

The `KmdAccountManager` instance.

## Methods

### dispenserFromEnvironment()

> **dispenserFromEnvironment**(): `Promise`\<[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)\>

Defined in: [src/account-manager.ts:474](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L474)

Returns an account (with private key loaded) that can act as a dispenser from
environment variables, or against default LocalNet if no environment variables present.

Note: requires a Node.js environment to execute.

If present, it will load the account mnemonic stored in process.env.DISPENSER_MNEMONIC and optionally
process.env.DISPENSER_SENDER if it's a rekeyed account.

#### Returns

`Promise`\<[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)\>

The account

#### Example

```typescript
const account = await accountManager.dispenserFromEnvironment();
```

---

### ensureFunded()

> **ensureFunded**(`accountToFund`, `dispenserAccount`, `minSpendingBalance`, `options?`): `Promise`\<`object` & [`EnsureFundedResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/ensurefundedresult/) \| `undefined`\>

Defined in: [src/account-manager.ts:594](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L594)

Funds a given account using a dispenser account as a funding source such that
the given account has a certain amount of Algo free to spend (accounting for
Algo locked in minimum balance requirement).

https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr

#### Parameters

##### accountToFund

The account to fund

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

##### dispenserAccount

The account to use as a dispenser funding source

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

##### minSpendingBalance

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

The minimum balance of Algo that the account should have available to spend (i.e. on top of minimum balance requirement)

##### options?

`object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/) & `Omit`\<`CommonTransactionParams`, `"sender"`\>

Optional parameters to control the funding increment, transaction or execution of the transaction

#### Returns

`Promise`\<`object` & [`EnsureFundedResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/ensurefundedresult/) \| `undefined`\>

- The result of executing the dispensing transaction and the `amountFunded` if funds were needed.
- `undefined` if no funds were needed.

#### Example

```typescript
// Basic example
await accountManager.ensureFunded('ACCOUNTADDRESS', 'DISPENSERADDRESS', algokit.algo(1));
// With configuration
await accountManager.ensureFunded('ACCOUNTADDRESS', 'DISPENSERADDRESS', algokit.algo(1), {
  minFundingIncrement: algokit.algo(2),
  fee: (1000).microAlgo(),
  suppressLog: true,
});
```

---

### ensureFundedFromEnvironment()

> **ensureFundedFromEnvironment**(`accountToFund`, `minSpendingBalance`, `options?`): `Promise`\<`object` & [`EnsureFundedResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/ensurefundedresult/) \| `undefined`\>

Defined in: [src/account-manager.ts:656](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L656)

Funds a given account using a dispenser account retrieved from the environment,
per the `dispenserFromEnvironment` method, as a funding source such that
the given account has a certain amount of Algo free to spend (accounting for
Algo locked in minimum balance requirement).

**Note:** requires a Node.js environment to execute.

The dispenser account is retrieved from the account mnemonic stored in
process.env.DISPENSER_MNEMONIC and optionally process.env.DISPENSER_SENDER
if it's a rekeyed account, or against default LocalNet if no environment variables present.

https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr

#### Parameters

##### accountToFund

The account to fund

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

##### minSpendingBalance

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

The minimum balance of Algo that the account should have available to spend (i.e. on top of minimum balance requirement)

##### options?

`object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/) & `Omit`\<`CommonTransactionParams`, `"sender"`\>

Optional parameters to control the funding increment, transaction or execution of the transaction

#### Returns

`Promise`\<`object` & [`EnsureFundedResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/ensurefundedresult/) \| `undefined`\>

- The result of executing the dispensing transaction and the `amountFunded` if funds were needed.
- `undefined` if no funds were needed.

#### Example

```typescript
// Basic example
await accountManager.ensureFundedFromEnvironment('ACCOUNTADDRESS', algokit.algo(1));
// With configuration
await accountManager.ensureFundedFromEnvironment('ACCOUNTADDRESS', algokit.algo(1), {
  minFundingIncrement: algokit.algo(2),
  fee: (1000).microAlgo(),
  suppressLog: true,
});
```

---

### ensureFundedFromTestNetDispenserApi()

> **ensureFundedFromTestNetDispenserApi**(`accountToFund`, `dispenserClient`, `minSpendingBalance`, `options?`): `Promise`\<[`EnsureFundedResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/ensurefundedresult/) \| `undefined`\>

Defined in: [src/account-manager.ts:712](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L712)

Funds a given account using the TestNet Dispenser API as a funding source such that
the account has a certain amount of Algo free to spend (accounting for Algo locked
in minimum balance requirement).

https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr

#### Parameters

##### accountToFund

The account to fund

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

##### dispenserClient

[`TestNetDispenserApiClient`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/testnetdispenserapiclient/)

The TestNet dispenser funding client

##### minSpendingBalance

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

The minimum balance of Algo that the account should have available to spend (i.e. on top of minimum balance requirement)

##### options?

Optional parameters to control the funding increment, transaction or execution of the transaction

###### minFundingIncrement?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

#### Returns

`Promise`\<[`EnsureFundedResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/ensurefundedresult/) \| `undefined`\>

- The result of executing the dispensing transaction and the `amountFunded` if funds were needed.
- `undefined` if no funds were needed.

#### Example

```typescript
// Basic example
await accountManager.ensureFundedFromTestNetDispenserApi(
  'ACCOUNTADDRESS',
  algorand.client.getTestNetDispenserFromEnvironment(),
  algokit.algo(1),
);
// With configuration
await accountManager.ensureFundedFromTestNetDispenserApi(
  'ACCOUNTADDRESS',
  algorand.client.getTestNetDispenserFromEnvironment(),
  algokit.algo(1),
  { minFundingIncrement: algokit.algo(2) },
);
```

---

### fromEnvironment()

> **fromEnvironment**(`name`, `fundWith?`): `Promise`\<[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)\>

Defined in: [src/account-manager.ts:347](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L347)

Tracks and returns an Algorand account with private key loaded by convention from environment variables based on the given name identifier.

Note: This function expects to run in a Node.js environment.

## Convention:

- **Non-LocalNet:** will load process.env['{NAME}_MNEMONIC'] as a mnemonic secret; **Note: Be careful how the mnemonic is handled**,
  never commit it into source control and ideally load it via a secret storage service rather than the file system.
  If process.env['{NAME}_SENDER'] is defined then it will use that for the sender address (i.e. to support rekeyed accounts)
- **LocalNet:** will load the account from a KMD wallet called {NAME} and if that wallet doesn't exist it will create it and fund the account for you

This allows you to write code that will work seamlessly in production and local development (LocalNet) without manual config locally (including when you reset the LocalNet).

#### Parameters

##### name

`string`

The name identifier of the account

##### fundWith?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

The optional amount to fund the account with when it gets created (when targeting LocalNet), if not specified then 1000 ALGO will be funded from the dispenser account

#### Returns

`Promise`\<[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)\>

The account

#### Example

If you have a mnemonic secret loaded into `process.env.MY_ACCOUNT_MNEMONIC` then you can call the following to get that private key loaded into an account object:

```typescript
const account = await accountManager.fromEnvironment('MY_ACCOUNT');
```

If that code runs against LocalNet then a wallet called `MY_ACCOUNT` will automatically be created with an account that is automatically funded with 1000 (default) ALGO from the default LocalNet dispenser.
If not running against LocalNet then it will use proces.env.MY_ACCOUNT_MNEMONIC as the private key and (if present) process.env.MY_ACCOUNT_SENDER as the sender address.

---

### fromKmd()

> **fromKmd**(`name`, `predicate?`, `sender?`): `Promise`\<[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & `object`\>

Defined in: [src/account-manager.ts:382](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L382)

Tracks and returns an Algorand account with private key loaded from the given KMD wallet (identified by name).

#### Parameters

##### name

`string`

The name of the wallet to retrieve an account from

##### predicate?

(`account`) => `boolean`

An optional filter to use to find the account (otherwise it will return a random account from the wallet)

##### sender?

The optional sender address to use this signer for (aka a rekeyed account)

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

#### Returns

`Promise`\<[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & `object`\>

The account

#### Example

```typescript
const defaultDispenserAccount = await accountManager.fromKmd(
  'unencrypted-default-wallet',
  a => a.status !== 'Offline' && a.amount > 1_000_000_000,
);
```

---

### fromMnemonic()

> **fromMnemonic**(`mnemonicSecret`, `sender?`): [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)

Defined in: [src/account-manager.ts:290](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L290)

Tracks and returns an Algorand account with secret key loaded (i.e. that can sign transactions) by taking the mnemonic secret.

#### Parameters

##### mnemonicSecret

`string`

The mnemonic secret representing the private key of an account; **Note: Be careful how the mnemonic is handled**,
never commit it into source control and ideally load it from the environment (ideally via a secret storage service) rather than the file system.

##### sender?

The optional sender address to use this signer for (aka a rekeyed account)

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

#### Returns

[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)

The account

#### Example

```typescript
const account = accountManager.fromMnemonic('mnemonic secret ...');
const rekeyedAccount = accountManager.fromMnemonic('mnemonic secret ...', 'SENDERADDRESS...');
```

---

### getAccount()

> **getAccount**(`sender`): [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)

Defined in: [src/account-manager.ts:225](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L225)

Returns the `AddressWithSigner` for the given sender address.

If no signer has been registered for that address then an error is thrown.

#### Parameters

##### sender

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

The sender address

#### Returns

[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)

The `AddressWithSigner` or throws an error if not found

#### Example

```typescript
const sender = accountManager.random();
// ...
// Returns the `AddressWithSigner` for `sender` that has previously been registered
const account = accountManager.getAccount(sender);
```

---

### getInformation()

> **getInformation**(`sender`): `Promise`\<[`AccountInformation`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/accountinformation/)\>

Defined in: [src/account-manager.ts:244](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L244)

Returns the given sender account's current status, balance and spendable amounts.

[Response data schema details](https://dev.algorand.co/reference/rest-apis/algod/#accountinformation)

#### Parameters

##### sender

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

The account / address to look up

#### Returns

`Promise`\<[`AccountInformation`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/accountinformation/)\>

The account information

#### Example

```typescript
const address = 'XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA';
const accountInfo = await accountManager.getInformation(address);
```

---

### getSigner()

> **getSigner**(`sender`): [`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Defined in: [src/account-manager.ts:205](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L205)

Returns the `TransactionSigner` for the given sender address, ready to sign a transaction for that sender.

If no signer has been registered for that address then the default signer is used if registered and
if not then an error is thrown.

#### Parameters

##### sender

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

The sender address

#### Returns

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

The `TransactionSigner` or throws an error if not found and no default signer is set

#### Example

```typescript
const signer = accountManager.getSigner('SENDERADDRESS');
```

---

### localNetDispenser()

> **localNetDispenser**(): `Promise`\<[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & `object`\>

Defined in: [src/account-manager.ts:493](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L493)

Returns an Algorand account with private key loaded for the default LocalNet dispenser account (that can be used to fund other accounts).

#### Returns

`Promise`\<[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & `object`\>

The account

#### Example

```typescript
const account = await accountManager.localNetDispenser();
```

---

### logicsig()

> **logicsig**(`program`, `args?`): [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & `object`

Defined in: [src/account-manager.ts:420](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L420)

Tracks and returns an account that represents a logic signature.

#### Parameters

##### program

`Uint8Array`

The bytes that make up the compiled logic signature

##### args?

`Uint8Array`\<`ArrayBufferLike`\>[]

The (binary) arguments to pass into the logic signature

#### Returns

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & `object`

A logic signature account wrapper

#### Example

```typescript
const account = accountManager.logicsig(program, [new Uint8Array(3, ...)])
```

---

### multisig()

> **multisig**(`multisigParams`, `subSigners`): [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & `object`

Defined in: [src/account-manager.ts:405](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L405)

Tracks and returns an account that supports partial or full multisig signing.

#### Parameters

##### multisigParams

[`MultisigMetadata`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/multisigmetadata/)

The parameters that define the multisig account

##### subSigners

`object`[]

The signers that are currently present

#### Returns

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & `object`

A multisig account wrapper

#### Example

```typescript
const account = accountManager.multisig(
  { version: 1, threshold: 1, addrs: ['ADDRESS1...', 'ADDRESS2...'] },
  [(await accountManager.fromEnvironment('ACCOUNT1')).account],
);
```

---

### random()

> **random**(): [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & `object`

Defined in: [src/account-manager.ts:433](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L433)

Tracks and returns a new, random Algorand account with secret key loaded.

#### Returns

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & `object`

The account

#### Example

```typescript
const account = accountManager.random();
```

---

### rekeyAccount()

> **rekeyAccount**(`account`, `rekeyTo`, `options?`): `Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

Defined in: [src/account-manager.ts:536](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L536)

Rekey an account to a new address.

**Note:** Please be careful with this function and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

#### Parameters

##### account

The account to rekey

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

##### rekeyTo

The account address or signing account of the account that will be used to authorise transactions for the rekeyed account going forward.
If a signing account is provided that will now be tracked as the signer for `account` in this `AccountManager`

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) | [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)

##### options?

`Omit`\<`CommonTransactionParams`, `"sender"`\> & [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

Any parameters to control the transaction or execution of the transaction

#### Returns

`Promise`\<\{ `confirmation`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/); `confirmations`: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]; `groupId`: `string` \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]; `transaction`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/); `transactions`: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]; `txIds`: `string`[]; \}\>

The result of the transaction and the transaction that was sent

#### Examples

```typescript
await accountManager.rekeyAccount({ account: 'ACCOUNTADDRESS', rekeyTo: 'NEWADDRESS' });
```

```typescript
await accountManager.rekeyAccount({ account: account1, rekeyTo: newSignerAccount });
```

```typescript
await accountManager.rekeyAccount({
  account: 'ACCOUNTADDRESS',
  rekeyTo: 'NEWADDRESS',
  lease: 'lease',
  note: 'note',
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

---

### rekeyed()

> **rekeyed**(`sender`, `account`): [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & `object`

Defined in: [src/account-manager.ts:316](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L316)

Tracks and returns an Algorand account that is a rekeyed version of the given account to a new sender.

#### Parameters

##### sender

The sender address to use as the new sender

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

##### account

[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/)

The account to use as the signer for this new rekeyed account

#### Returns

[`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/) & [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) & `object`

The account

#### Example

```typescript
const account = accountManager.fromMnemonic('mnemonic secret ...');
const rekeyedAccount = accountManager.rekeyed(account, 'SENDERADDRESS...');
```

---

### setDefaultSigner()

> **setDefaultSigner**(`signer`): `AccountManager`

Defined in: [src/account-manager.ts:105](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L105)

Sets the default signer to use if no other signer is specified.

If this isn't set an a transaction needs signing for a given sender
then an error will be thrown from `getSigner` / `getAccount`.

#### Parameters

##### signer

The signer to use, either a `TransactionSigner` or a `AddressWithSigner`

[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) | [`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

#### Returns

`AccountManager`

The `AccountManager` so method calls can be chained

#### Example

```typescript
const signer = accountManager.random(); // Can be anything that returns a `TransactionSigner` or `AddressWithSigner`
accountManager.setDefaultSigner(signer);

// When signing a transaction, if there is no signer registered for the sender then the default signer will be used
const signer = accountManager.getSigner('SENDERADDRESS');
```

---

### setSigner()

> **setSigner**(`sender`, `signer`): `AccountManager`

Defined in: [src/account-manager.ts:168](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L168)

Tracks the given `TransactionSigner` against the given sender address for later signing.

#### Parameters

##### sender

The sender address to use this signer for

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

##### signer

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

The `TransactionSigner` to sign transactions with for the given sender

#### Returns

`AccountManager`

The `AccountManager` instance for method chaining

#### Example

```typescript
const accountManager = new AccountManager(clientManager).setSigner(
  'SENDERADDRESS',
  transactionSigner,
);
```

---

### setSignerFromAccount()

> **setSignerFromAccount**(`account`): `AccountManager`

Defined in: [src/account-manager.ts:152](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L152)

Tracks the given account for later signing.

Note: If you are generating accounts via the various methods on `AccountManager`
(like `random`, `fromMnemonic`, `logicsig`, etc.) then they automatically get tracked.

#### Parameters

##### account

The account to register, which can be a `AddressWithSigner` or
a `algosdk.Account`, `algosdk.LogicSigAccount`, `SigningAccount` or `MultisigAccount`

[`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/multisigaccount/) | [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) | [`LogicSigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsigaccount/)

#### Returns

`AccountManager`

The `AccountManager` instance for method chaining

#### Example

```typescript
const accountManager = new AccountManager(clientManager)
  .setSignerFromAccount(algosdk.generateAccount())
  .setSignerFromAccount(new algosdk.LogicSigAccount(program, args))
  .setSignerFromAccount(new SigningAccount(mnemonic, sender))
  .setSignerFromAccount(
    new MultisigAccount({ version: 1, threshold: 1, addrs: ['ADDRESS1...', 'ADDRESS2...'] }, [
      account1,
      account2,
    ]),
  )
  .setSignerFromAccount({ addr: 'SENDERADDRESS', signer: transactionSigner });
```

---

### setSigners()

> **setSigners**(`anotherAccountManager`, `overwriteExisting`): `AccountManager`

Defined in: [src/account-manager.ts:185](https://github.com/larkiny/algokit-utils-ts/blob/main/src/account-manager.ts#L185)

Takes all registered signers from the given `AccountManager` and adds them to this `AccountManager`.

This is useful for situations where you have multiple contexts you are building accounts in such as unit tests.

#### Parameters

##### anotherAccountManager

`AccountManager`

Another account manager with signers registered

##### overwriteExisting

`boolean` = `true`

Whether or not to overwrite any signers that have the same sender address with the ones in the other account manager or not (default: true)

#### Returns

`AccountManager`

The `AccountManager` instance for method chaining

#### Example

```typescript
accountManager2.setSigners(accountManager1);
```
