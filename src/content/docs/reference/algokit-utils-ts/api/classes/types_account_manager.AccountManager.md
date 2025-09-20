---
title: AccountManager
slug: reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/account-manager](/reference/algokit-utils-ts/api/modules/types_account_manager/) / AccountManager



[types/account-manager](/reference/algokit-utils-ts/api/modules/types_account_manager/).AccountManager

Creates and keeps track of signing accounts that can sign transactions for a sending address.

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [\_accounts](#_accounts)
- [\_clientManager](#_clientmanager)
- [\_defaultSigner](#_defaultsigner)
- [\_kmdAccountManager](#_kmdaccountmanager)

### Accessors

- [kmd](#kmd)

### Methods

- [\_getComposer](#_getcomposer)
- [\_getEnsureFundedAmount](#_getensurefundedamount)
- [dispenserFromEnvironment](#dispenserfromenvironment)
- [ensureFunded](#ensurefunded)
- [ensureFundedFromEnvironment](#ensurefundedfromenvironment)
- [ensureFundedFromTestNetDispenserApi](#ensurefundedfromtestnetdispenserapi)
- [fromEnvironment](#fromenvironment)
- [fromKmd](#fromkmd)
- [fromMnemonic](#frommnemonic)
- [getAccount](#getaccount)
- [getInformation](#getinformation)
- [getSigner](#getsigner)
- [localNetDispenser](#localnetdispenser)
- [logicsig](#logicsig)
- [multisig](#multisig)
- [random](#random)
- [rekeyAccount](#rekeyaccount)
- [rekeyed](#rekeyed)
- [setDefaultSigner](#setdefaultsigner)
- [setSigner](#setsigner)
- [setSignerFromAccount](#setsignerfromaccount)
- [setSigners](#setsigners)
- [signerAccount](#signeraccount)

## Constructors

### constructor

• **new AccountManager**(`clientManager`): [`AccountManager`](/reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager/)

Create a new account manager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientManager` | [`ClientManager`](/reference/algokit-utils-ts/api/classes/types_client_managerclientmanager/) | The ClientManager client to use for algod and kmd clients |

#### Returns

[`AccountManager`](/reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager/)

**`Example`**

```typescript
const accountManager = new AccountManager(clientManager)
```

#### Defined in

[src/types/account-manager.ts:60](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L60)

## Properties

### \_accounts

• `Private` **\_accounts**: `Object` = `{}`

#### Index signature

▪ [address: `string`]: [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/)

#### Defined in

[src/types/account-manager.ts:49](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L49)

___

### \_clientManager

• `Private` **\_clientManager**: [`ClientManager`](/reference/algokit-utils-ts/api/classes/types_client_managerclientmanager/)

#### Defined in

[src/types/account-manager.ts:47](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L47)

___

### \_defaultSigner

• `Private` `Optional` **\_defaultSigner**: `TransactionSigner`

#### Defined in

[src/types/account-manager.ts:50](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L50)

___

### \_kmdAccountManager

• `Private` **\_kmdAccountManager**: [`KmdAccountManager`](/reference/algokit-utils-ts/api/classes/types_kmd_account_managerkmdaccountmanager/)

#### Defined in

[src/types/account-manager.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L48)

## Accessors

### kmd

• `get` **kmd**(): [`KmdAccountManager`](/reference/algokit-utils-ts/api/classes/types_kmd_account_managerkmdaccountmanager/)

KMD account manager that allows you to easily get and create accounts using KMD.

#### Returns

[`KmdAccountManager`](/reference/algokit-utils-ts/api/classes/types_kmd_account_managerkmdaccountmanager/)

The `KmdAccountManager` instance.

**`Example`**

```typescript
const kmdManager = accountManager.kmd;
```

#### Defined in

[src/types/account-manager.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L81)

## Methods

### \_getComposer

▸ **_getComposer**(`getSuggestedParams?`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

#### Parameters

| Name | Type |
| :------ | :------ |
| `getSuggestedParams?` | () => `Promise`\<`SuggestedParams`\> |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

#### Defined in

[src/types/account-manager.ts:65](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L65)

___

### \_getEnsureFundedAmount

▸ **_getEnsureFundedAmount**(`sender`, `minSpendingBalance`, `minFundingIncrement?`): `Promise`\<`undefined` \| [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `Address` |
| `minSpendingBalance` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) |
| `minFundingIncrement?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) |

#### Returns

`Promise`\<`undefined` \| [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)\>

#### Defined in

[src/types/account-manager.ts:528](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L528)

___

### dispenserFromEnvironment

▸ **dispenserFromEnvironment**(): `Promise`\<`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)  }\>

Returns an account (with private key loaded) that can act as a dispenser from
environment variables, or against default LocalNet if no environment variables present.

Note: requires a Node.js environment to execute.

If present, it will load the account mnemonic stored in process.env.DISPENSER_MNEMONIC and optionally
process.env.DISPENSER_SENDER if it's a rekeyed account.

#### Returns

`Promise`\<`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)  }\>

The account

**`Example`**

```typescript
const account = await accountManager.dispenserFromEnvironment()
```

#### Defined in

[src/types/account-manager.ts:441](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L441)

___

### ensureFunded

▸ **ensureFunded**(`accountToFund`, `dispenserAccount`, `minSpendingBalance`, `options?`): `Promise`\<`undefined` \| \{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[]  } & [`EnsureFundedResult`](/reference/algokit-utils-ts/api/interfaces/types_account_managerensurefundedresult/)\>

Funds a given account using a dispenser account as a funding source such that
the given account has a certain amount of Algo free to spend (accounting for
Algo locked in minimum balance requirement).

https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountToFund` | `string` \| `Address` | The account to fund |
| `dispenserAccount` | `string` \| `Address` | The account to use as a dispenser funding source |
| `minSpendingBalance` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The minimum balance of Algo that the account should have available to spend (i.e. on top of minimum balance requirement) |
| `options?` | \{ `minFundingIncrement?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)  } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) & `Omit`\<[`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams), ``"sender"``\> | Optional parameters to control the funding increment, transaction or execution of the transaction |

#### Returns

`Promise`\<`undefined` \| \{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[]  } & [`EnsureFundedResult`](/reference/algokit-utils-ts/api/interfaces/types_account_managerensurefundedresult/)\>

- The result of executing the dispensing transaction and the `amountFunded` if funds were needed.
- `undefined` if no funds were needed.

**`Example`**

```typescript
// Basic example
await accountManager.ensureFunded("ACCOUNTADDRESS", "DISPENSERADDRESS", algokit.algo(1))
// With configuration
await accountManager.ensureFunded("ACCOUNTADDRESS", "DISPENSERADDRESS", algokit.algo(1),
 { minFundingIncrement: algokit.algo(2), fee: (1000).microAlgo(), suppressLog: true }
)
```

#### Defined in

[src/types/account-manager.ts:561](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L561)

___

### ensureFundedFromEnvironment

▸ **ensureFundedFromEnvironment**(`accountToFund`, `minSpendingBalance`, `options?`): `Promise`\<`undefined` \| \{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[]  } & [`EnsureFundedResult`](/reference/algokit-utils-ts/api/interfaces/types_account_managerensurefundedresult/)\>

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountToFund` | `string` \| `Address` | The account to fund |
| `minSpendingBalance` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The minimum balance of Algo that the account should have available to spend (i.e. on top of minimum balance requirement) |
| `options?` | \{ `minFundingIncrement?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)  } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) & `Omit`\<[`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams), ``"sender"``\> | Optional parameters to control the funding increment, transaction or execution of the transaction |

#### Returns

`Promise`\<`undefined` \| \{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[]  } & [`EnsureFundedResult`](/reference/algokit-utils-ts/api/interfaces/types_account_managerensurefundedresult/)\>

- The result of executing the dispensing transaction and the `amountFunded` if funds were needed.
- `undefined` if no funds were needed.

**`Example`**

```typescript
// Basic example
await accountManager.ensureFundedFromEnvironment("ACCOUNTADDRESS", algokit.algo(1))
// With configuration
await accountManager.ensureFundedFromEnvironment("ACCOUNTADDRESS", algokit.algo(1),
 { minFundingIncrement: algokit.algo(2), fee: (1000).microAlgo(), suppressLog: true }
)
```

#### Defined in

[src/types/account-manager.ts:623](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L623)

___

### ensureFundedFromTestNetDispenserApi

▸ **ensureFundedFromTestNetDispenserApi**(`accountToFund`, `dispenserClient`, `minSpendingBalance`, `options?`): `Promise`\<`undefined` \| [`EnsureFundedResult`](/reference/algokit-utils-ts/api/interfaces/types_account_managerensurefundedresult/)\>

Funds a given account using the TestNet Dispenser API as a funding source such that
the account has a certain amount of Algo free to spend (accounting for Algo locked
in minimum balance requirement).

https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountToFund` | `string` \| `Address` | The account to fund |
| `dispenserClient` | [`TestNetDispenserApiClient`](/reference/algokit-utils-ts/api/classes/types_dispenser_clienttestnetdispenserapiclient/) | The TestNet dispenser funding client |
| `minSpendingBalance` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The minimum balance of Algo that the account should have available to spend (i.e. on top of minimum balance requirement) |
| `options?` | `Object` | Optional parameters to control the funding increment, transaction or execution of the transaction |
| `options.minFundingIncrement?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | - |

#### Returns

`Promise`\<`undefined` \| [`EnsureFundedResult`](/reference/algokit-utils-ts/api/interfaces/types_account_managerensurefundedresult/)\>

- The result of executing the dispensing transaction and the `amountFunded` if funds were needed.
- `undefined` if no funds were needed.

**`Example`**

```typescript
// Basic example
await accountManager.ensureFundedFromTestNetDispenserApi("ACCOUNTADDRESS", algorand.client.getTestNetDispenserFromEnvironment(), algokit.algo(1))
// With configuration
await accountManager.ensureFundedFromTestNetDispenserApi("ACCOUNTADDRESS", algorand.client.getTestNetDispenserFromEnvironment(), algokit.algo(1),
 { minFundingIncrement: algokit.algo(2) }
)
```

#### Defined in

[src/types/account-manager.ts:679](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L679)

___

### fromEnvironment

▸ **fromEnvironment**(`name`, `fundWith?`): `Promise`\<`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)  }\>

Tracks and returns an Algorand account with private key loaded by convention from environment variables based on the given name identifier.

Note: This function expects to run in a Node.js environment.

## Convention:
* **Non-LocalNet:** will load process.env['{NAME}_MNEMONIC'] as a mnemonic secret; **Note: Be careful how the mnemonic is handled**,
 never commit it into source control and ideally load it via a secret storage service rather than the file system.
  If process.env['{NAME}_SENDER'] is defined then it will use that for the sender address (i.e. to support rekeyed accounts)
* **LocalNet:** will load the account from a KMD wallet called {NAME} and if that wallet doesn't exist it will create it and fund the account for you

This allows you to write code that will work seamlessly in production and local development (LocalNet) without manual config locally (including when you reset the LocalNet).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name identifier of the account |
| `fundWith?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The optional amount to fund the account with when it gets created (when targeting LocalNet), if not specified then 1000 ALGO will be funded from the dispenser account |

#### Returns

`Promise`\<`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)  }\>

The account

**`Example`**

If you have a mnemonic secret loaded into `process.env.MY_ACCOUNT_MNEMONIC` then you can call the following to get that private key loaded into an account object:
```typescript
const account = await accountManager.fromEnvironment('MY_ACCOUNT')
```

If that code runs against LocalNet then a wallet called `MY_ACCOUNT` will automatically be created with an account that is automatically funded with 1000 (default) ALGO from the default LocalNet dispenser.
If not running against LocalNet then it will use proces.env.MY_ACCOUNT_MNEMONIC as the private key and (if present) process.env.MY_ACCOUNT_SENDER as the sender address.

#### Defined in

[src/types/account-manager.ts:334](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L334)

___

### fromKmd

▸ **fromKmd**(`name`, `predicate?`, `sender?`): `Promise`\<`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)  }\>

Tracks and returns an Algorand account with private key loaded from the given KMD wallet (identified by name).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the wallet to retrieve an account from |
| `predicate?` | (`account`: `Record`\<`string`, `any`\>) => `boolean` | An optional filter to use to find the account (otherwise it will return a random account from the wallet) |
| `sender?` | `string` \| `Address` | The optional sender address to use this signer for (aka a rekeyed account) |

#### Returns

`Promise`\<`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)  }\>

The account

**`Example`**

```typescript
const defaultDispenserAccount = await accountManager.fromKmd('unencrypted-default-wallet',
  a => a.status !== 'Offline' && a.amount > 1_000_000_000
)
```

#### Defined in

[src/types/account-manager.ts:370](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L370)

___

### fromMnemonic

▸ **fromMnemonic**(`mnemonicSecret`, `sender?`): `Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)  }

Tracks and returns an Algorand account with secret key loaded (i.e. that can sign transactions) by taking the mnemonic secret.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mnemonicSecret` | `string` | The mnemonic secret representing the private key of an account; **Note: Be careful how the mnemonic is handled**, never commit it into source control and ideally load it from the environment (ideally via a secret storage service) rather than the file system. |
| `sender?` | `string` \| `Address` | The optional sender address to use this signer for (aka a rekeyed account) |

#### Returns

`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)  }

The account

**`Example`**

```typescript
const account = accountManager.fromMnemonic("mnemonic secret ...")
const rekeyedAccount = accountManager.fromMnemonic("mnemonic secret ...", "SENDERADDRESS...")
```

#### Defined in

[src/types/account-manager.ts:286](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L286)

___

### getAccount

▸ **getAccount**(`sender`): [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/)

Returns the `TransactionSignerAccount` for the given sender address.

If no signer has been registered for that address then an error is thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sender` | `string` \| `Address` | The sender address |

#### Returns

[`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/)

The `TransactionSignerAccount` or throws an error if not found

**`Example`**

```typescript
const sender = accountManager.random()
// ...
// Returns the `TransactionSignerAccount` for `sender` that has previously been registered
const account = accountManager.getAccount(sender)
```

#### Defined in

[src/types/account-manager.ts:222](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L222)

___

### getInformation

▸ **getInformation**(`sender`): `Promise`\<[`AccountInformation`](/reference/algokit-utils-ts/api/modules/types_account/#accountinformation)\>

Returns the given sender account's current status, balance and spendable amounts.

[Response data schema details](https://dev.algorand.co/reference/rest-apis/algod/#accountinformation)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sender` | `string` \| `Address` | The account / address to look up |

#### Returns

`Promise`\<[`AccountInformation`](/reference/algokit-utils-ts/api/modules/types_account/#accountinformation)\>

The account information

**`Example`**

```typescript
const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
const accountInfo = await accountManager.getInformation(address);
```

#### Defined in

[src/types/account-manager.ts:241](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L241)

___

### getSigner

▸ **getSigner**(`sender`): `TransactionSigner`

Returns the `TransactionSigner` for the given sender address, ready to sign a transaction for that sender.

If no signer has been registered for that address then the default signer is used if registered and
if not then an error is thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sender` | `string` \| `Address` | The sender address |

#### Returns

`TransactionSigner`

The `TransactionSigner` or throws an error if not found and no default signer is set

**`Example`**

```typescript
const signer = accountManager.getSigner("SENDERADDRESS")
```

#### Defined in

[src/types/account-manager.ts:202](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L202)

___

### localNetDispenser

▸ **localNetDispenser**(): `Promise`\<`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)  }\>

Returns an Algorand account with private key loaded for the default LocalNet dispenser account (that can be used to fund other accounts).

#### Returns

`Promise`\<`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)  }\>

The account

**`Example`**

```typescript
const account = await accountManager.localNetDispenser()
```

#### Defined in

[src/types/account-manager.ts:460](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L460)

___

### logicsig

▸ **logicsig**(`program`, `args?`): `Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: `LogicSigAccount`  }

Tracks and returns an account that represents a logic signature.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | `Uint8Array` | The bytes that make up the compiled logic signature |
| `args?` | `Uint8Array`[] | The (binary) arguments to pass into the logic signature |

#### Returns

`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: `LogicSigAccount`  }

A logic signature account wrapper

**`Example`**

```typescript
const account = accountManager.logicsig(program, [new Uint8Array(3, ...)])
```

#### Defined in

[src/types/account-manager.ts:408](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L408)

___

### multisig

▸ **multisig**(`multisigParams`, `signingAccounts`): `Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`MultisigAccount`](/reference/algokit-utils-ts/api/classes/types_accountmultisigaccount/)  }

Tracks and returns an account that supports partial or full multisig signing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `multisigParams` | `MultisigMetadata` | The parameters that define the multisig account |
| `signingAccounts` | (`default` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/))[] | The signers that are currently present |

#### Returns

`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`MultisigAccount`](/reference/algokit-utils-ts/api/classes/types_accountmultisigaccount/)  }

A multisig account wrapper

**`Example`**

```typescript
const account = accountManager.multisig({version: 1, threshold: 1, addrs: ["ADDRESS1...", "ADDRESS2..."]},
 [(await accountManager.fromEnvironment('ACCOUNT1')).account])
```

#### Defined in

[src/types/account-manager.ts:393](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L393)

___

### random

▸ **random**(): `Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: `default`  }

Tracks and returns a new, random Algorand account with secret key loaded.

#### Returns

`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: `default`  }

The account

**`Example`**

```typescript
const account = accountManager.random()
```

#### Defined in

[src/types/account-manager.ts:421](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L421)

___

### rekeyAccount

▸ **rekeyAccount**(`account`, `rekeyTo`, `options?`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[]  }\>

Rekey an account to a new address.

**Note:** Please be careful with this function and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `string` \| `Address` | The account to rekey |
| `rekeyTo` | `string` \| `Address` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) | The account address or signing account of the account that will be used to authorise transactions for the rekeyed account going forward. If a signing account is provided that will now be tracked as the signer for `account` in this `AccountManager` |
| `options?` | `Omit`\<[`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams), ``"sender"``\> & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | Any parameters to control the transaction or execution of the transaction |

#### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[]  }\>

The result of the transaction and the transaction that was sent

**`Example`**

```typescript
await accountManager.rekeyAccount({account: "ACCOUNTADDRESS", rekeyTo: "NEWADDRESS"})
```

**`Example`**

```typescript
await accountManager.rekeyAccount({account: account1, rekeyTo: newSignerAccount})
```

**`Example`**

```typescript
await accountManager.rekeyAccount({
  account: "ACCOUNTADDRESS",
  rekeyTo: "NEWADDRESS",
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
})
```

#### Defined in

[src/types/account-manager.ts:503](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L503)

___

### rekeyed

▸ **rekeyed**(`sender`, `account`): `Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: \{ `addr`: `Address` ; `signer`: `TransactionSigner` = account.signer }  }

Tracks and returns an Algorand account that is a rekeyed version of the given account to a new sender.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sender` | `string` \| `Address` | The sender address to use as the new sender |
| `account` | [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) | The account to use as the signer for this new rekeyed account |

#### Returns

`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: \{ `addr`: `Address` ; `signer`: `TransactionSigner` = account.signer }  }

The account

**`Example`**

```typescript
const account = accountManager.fromMnemonic("mnemonic secret ...")
const rekeyedAccount = accountManager.rekeyed(account, "SENDERADDRESS...")
```

#### Defined in

[src/types/account-manager.ts:303](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L303)

___

### setDefaultSigner

▸ **setDefaultSigner**(`signer`): [`AccountManager`](/reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager/)

Sets the default signer to use if no other signer is specified.

If this isn't set an a transaction needs signing for a given sender
then an error will be thrown from `getSigner` / `getAccount`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signer` | `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) | The signer to use, either a `TransactionSigner` or a `TransactionSignerAccount` |

#### Returns

[`AccountManager`](/reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager/)

The `AccountManager` so method calls can be chained

**`Example`**

```typescript
const signer = accountManager.random() // Can be anything that returns a `algosdk.TransactionSigner` or `TransactionSignerAccount`
accountManager.setDefaultSigner(signer)

// When signing a transaction, if there is no signer registered for the sender then the default signer will be used
const signer = accountManager.getSigner("SENDERADDRESS")
```

#### Defined in

[src/types/account-manager.ts:101](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L101)

___

### setSigner

▸ **setSigner**(`sender`, `signer`): [`AccountManager`](/reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager/)

Tracks the given `algosdk.TransactionSigner` against the given sender address for later signing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sender` | `string` \| `Address` | The sender address to use this signer for |
| `signer` | `TransactionSigner` | The `algosdk.TransactionSigner` to sign transactions with for the given sender |

#### Returns

[`AccountManager`](/reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager/)

The `AccountManager` instance for method chaining

**`Example`**

```typescript
const accountManager = new AccountManager(clientManager)
 .setSigner("SENDERADDRESS", transactionSigner)
```

#### Defined in

[src/types/account-manager.ts:165](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L165)

___

### setSignerFromAccount

▸ **setSignerFromAccount**(`account`): [`AccountManager`](/reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager/)

Tracks the given account for later signing.

Note: If you are generating accounts via the various methods on `AccountManager`
(like `random`, `fromMnemonic`, `logicsig`, etc.) then they automatically get tracked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`MultisigAccount`](/reference/algokit-utils-ts/api/classes/types_accountmultisigaccount/) \| `default` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/) \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) \| `LogicSigAccount` | The account to register, which can be a `TransactionSignerAccount` or a `algosdk.Account`, `algosdk.LogicSigAccount`, `SigningAccount` or `MultisigAccount` |

#### Returns

[`AccountManager`](/reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager/)

The `AccountManager` instance for method chaining

**`Example`**

```typescript
const accountManager = new AccountManager(clientManager)
 .setSignerFromAccount(algosdk.generateAccount())
 .setSignerFromAccount(new algosdk.LogicSigAccount(program, args))
 .setSignerFromAccount(new SigningAccount(mnemonic, sender))
 .setSignerFromAccount(new MultisigAccount({version: 1, threshold: 1, addrs: ["ADDRESS1...", "ADDRESS2..."]}, [account1, account2]))
 .setSignerFromAccount({addr: "SENDERADDRESS", signer: transactionSigner})
```

#### Defined in

[src/types/account-manager.ts:149](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L149)

___

### setSigners

▸ **setSigners**(`anotherAccountManager`, `overwriteExisting?`): [`AccountManager`](/reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager/)

Takes all registered signers from the given `AccountManager` and adds them to this `AccountManager`.

This is useful for situations where you have multiple contexts you are building accounts in such as unit tests.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `anotherAccountManager` | [`AccountManager`](/reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager/) | `undefined` | Another account manager with signers registered |
| `overwriteExisting` | `boolean` | `true` | Whether or not to overwrite any signers that have the same sender address with the ones in the other account manager or not (default: true) |

#### Returns

[`AccountManager`](/reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager/)

The `AccountManager` instance for method chaining

**`Example`**

```typescript
accountManager2.setSigners(accountManager1);
```

#### Defined in

[src/types/account-manager.ts:182](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L182)

___

### signerAccount

▸ **signerAccount**\<`T`\>(`account`): `Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: `T`  }

Records the given account (that can sign) against the address of the provided account for later
retrieval and returns a `TransactionSignerAccount` along with the original account in an `account` property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MultisigAccount`](/reference/algokit-utils-ts/api/classes/types_accountmultisigaccount/) \| `default` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/) \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) \| `LogicSigAccount` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `T` |

#### Returns

`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: `T`  }

#### Defined in

[src/types/account-manager.ts:111](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L111)