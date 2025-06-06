---
editUrl: false
next: false
prev: false
title: "AlgorandClient"
---

Defined in: [src/types/algorand-client.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L18)

A client that brokers easy access to Algorand functionality.

## Accessors

### account

#### Get Signature

> **get** **account**(): `AccountManager`

Defined in: [src/types/algorand-client.ts:175](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L175)

Get or create accounts that can sign transactions.

##### Example

```ts
const accountManager = AlgorandClient.mainNet().account;
```

##### Returns

`AccountManager`

The `AccountManager` instance.

***

### app

#### Get Signature

> **get** **app**(): `AppManager`

Defined in: [src/types/algorand-client.ts:195](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L195)

Methods for interacting with apps.

##### Example

```ts
const appManager = AlgorandClient.mainNet().app;
```

##### Returns

`AppManager`

The `AppManager` instance.

***

### appDeployer

#### Get Signature

> **get** **appDeployer**(): `AppDeployer`

Defined in: [src/types/algorand-client.ts:205](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L205)

Methods for deploying apps and managing app deployment metadata.

##### Example

```ts
const deployer = AlgorandClient.mainNet().appDeployer;
```

##### Returns

`AppDeployer`

The `AppDeployer` instance.

***

### asset

#### Get Signature

> **get** **asset**(): `AssetManager`

Defined in: [src/types/algorand-client.ts:185](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L185)

Methods for interacting with assets.

##### Example

```ts
const assetManager = AlgorandClient.mainNet().asset;
```

##### Returns

`AssetManager`

The `AssetManager` instance.

***

### client

#### Get Signature

> **get** **client**(): `ClientManager`

Defined in: [src/types/algorand-client.ts:165](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L165)

Get clients, including algosdk clients and app clients.

##### Example

```ts
const clientManager = AlgorandClient.mainNet().client;
```

##### Returns

`ClientManager`

The `ClientManager` instance.

***

### createTransaction

#### Get Signature

> **get** **createTransaction**(): `AlgorandClientTransactionCreator`

Defined in: [src/types/algorand-client.ts:250](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L250)

Methods for creating a transaction.

##### Example

```ts
const payment = await AlgorandClient.mainNet().createTransaction.payment({
 sender: "SENDERADDRESS",
 receiver: "RECEIVERADDRESS",
 amount: algo(1)
})
```

##### Returns

`AlgorandClientTransactionCreator`

The `AlgorandClientTransactionCreator` instance.

***

### send

#### Get Signature

> **get** **send**(): `AlgorandClientTransactionSender`

Defined in: [src/types/algorand-client.ts:236](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L236)

Methods for sending a transaction.

##### Example

```ts
const result = await AlgorandClient.mainNet().send.payment({
 sender: "SENDERADDRESS",
 receiver: "RECEIVERADDRESS",
 amount: algo(1)
})
```

##### Returns

`AlgorandClientTransactionSender`

The `AlgorandClientTransactionSender` instance.

## Methods

### getSuggestedParams()

> **getSuggestedParams**(): `Promise`\<`SuggestedParams`\>

Defined in: [src/types/algorand-client.ts:144](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L144)

Get suggested params for a transaction (either cached or from algod if the cache is stale or empty)

#### Returns

`Promise`\<`SuggestedParams`\>

The suggested transaction parameters.

#### Example

```ts
const params = await AlgorandClient.mainNet().getSuggestedParams();
```

***

### newGroup()

> **newGroup**(): `TransactionComposer`

Defined in: [src/types/algorand-client.ts:216](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L216)

Start a new `TransactionComposer` transaction group

#### Returns

`TransactionComposer`

A new instance of `TransactionComposer`.

#### Example

```ts
const composer = AlgorandClient.mainNet().newGroup();
const result = await composer.addTransaction(payment).send()
```

***

### setDefaultSigner()

> **setDefaultSigner**(`signer`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Defined in: [src/types/algorand-client.ts:67](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L67)

Sets the default signer to use if no other signer is specified.

#### Parameters

##### signer

The signer to use, either a `TransactionSigner` or a `TransactionSignerAccount`

`TransactionSigner` | `TransactionSignerAccount`

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const signer = new SigningAccount(account, account.addr)
const algorand = AlgorandClient.mainNet().setDefaultSigner(signer)
```

***

### setDefaultValidityWindow()

> **setDefaultValidityWindow**(`validityWindow`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Defined in: [src/types/algorand-client.ts:52](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L52)

Sets the default validity window for transactions.

#### Parameters

##### validityWindow

The number of rounds between the first and last valid rounds

`number` | `bigint`

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const algorand = AlgorandClient.mainNet().setDefaultValidityWindow(1000);
```

***

### setSigner()

> **setSigner**(`sender`, `signer`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Defined in: [src/types/algorand-client.ts:103](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L103)

Tracks the given signer against the given sender for later signing.

#### Parameters

##### sender

The sender address to use this signer for

`string` | `Address`

##### signer

`TransactionSigner`

The signer to sign transactions with for the given sender

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const signer = new SigningAccount(account, account.addr)
const algorand = AlgorandClient.mainNet().setSigner(signer.addr, signer.signer)
```

***

### setSignerFromAccount()

> **setSignerFromAccount**(`account`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Defined in: [src/types/algorand-client.ts:87](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L87)

Tracks the given account (object that encapsulates an address and a signer) for later signing.

#### Parameters

##### account

The account to register, which can be a `TransactionSignerAccount` or
 a `algosdk.Account`, `algosdk.LogicSigAccount`, `SigningAccount` or `MultisigAccount`

`MultisigAccount` | `Account` | `SigningAccount` | `TransactionSignerAccount` | `LogicSigAccount`

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const accountManager = AlgorandClient.mainNet()
 .setSignerFromAccount(algosdk.generateAccount())
 .setSignerFromAccount(new algosdk.LogicSigAccount(program, args))
 .setSignerFromAccount(new SigningAccount(account, sender))
 .setSignerFromAccount(new MultisigAccount({version: 1, threshold: 1, addrs: ["ADDRESS1...", "ADDRESS2..."]}, [account1, account2]))
 .setSignerFromAccount({addr: "SENDERADDRESS", signer: transactionSigner})
```

***

### setSuggestedParamsCache()

> **setSuggestedParamsCache**(`suggestedParams`, `until`?): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Defined in: [src/types/algorand-client.ts:118](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L118)

Sets a cache value to use for suggested transaction params.

#### Parameters

##### suggestedParams

`SuggestedParams`

The suggested params to use

##### until?

`Date`

A date until which to cache, or if not specified then the timeout is used

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const algorand = AlgorandClient.mainNet().setSuggestedParamsCache(suggestedParams, new Date(+new Date() + 3_600_000))
```

***

### setSuggestedParamsCacheTimeout()

> **setSuggestedParamsCacheTimeout**(`timeout`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Defined in: [src/types/algorand-client.ts:133](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L133)

Sets the timeout for caching suggested params.

#### Parameters

##### timeout

`number`

The timeout in milliseconds

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const algorand = AlgorandClient.mainNet().setSuggestedParamsCacheTimeout(10_000)
```

***

### defaultLocalNet()

> `static` **defaultLocalNet**(): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Defined in: [src/types/algorand-client.ts:262](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L262)

Creates an `AlgorandClient` pointing at default LocalNet ports and API token.

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

An instance of the `AlgorandClient`.

#### Example

```ts
const algorand = AlgorandClient.defaultLocalNet();
```

***

### fromClients()

> `static` **fromClients**(`clients`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Defined in: [src/types/algorand-client.ts:305](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L305)

Creates an `AlgorandClient` pointing to the given client(s).

#### Parameters

##### clients

`AlgoSdkClients`

The clients to use.

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

An instance of the `AlgorandClient`.

#### Example

```ts
const algorand = AlgorandClient.fromClients({ algod, indexer, kmd });
```

***

### fromConfig()

> `static` **fromConfig**(`config`): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Defined in: [src/types/algorand-client.ts:339](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L339)

Creates  an `AlgorandClient` from the given config.

#### Parameters

##### config

`AlgoConfig`

The config to use.

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

An instance of the `AlgorandClient`.

#### Example

```ts
const client = AlgorandClient.fromConfig({ algodConfig, indexerConfig, kmdConfig });
```

***

### fromEnvironment()

> `static` **fromEnvironment**(): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Defined in: [src/types/algorand-client.ts:328](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L328)

Creates an `AlgorandClient` loading the configuration from environment variables.

Retrieve configurations from environment variables when defined or get default LocalNet configuration if they aren't defined.

Expects to be called from a Node.js environment.

If `process.env.ALGOD_SERVER` is defined it will use that along with optional `process.env.ALGOD_PORT` and `process.env.ALGOD_TOKEN`.

If `process.env.INDEXER_SERVER` is defined it will use that along with optional `process.env.INDEXER_PORT` and `process.env.INDEXER_TOKEN`.

If either aren't defined it will use the default LocalNet config.

It will return a KMD configuration that uses `process.env.KMD_PORT` (or port 4002) if `process.env.ALGOD_SERVER` is defined,
otherwise it will use the default LocalNet config unless it detects testnet or mainnet.

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

An instance of the `AlgorandClient`.

#### Example

```ts
const client = AlgorandClient.fromEnvironment();
```

***

### mainNet()

> `static` **mainNet**(): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Defined in: [src/types/algorand-client.ts:290](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L290)

Creates an `AlgorandClient` pointing at MainNet using AlgoNode.

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

An instance of the `AlgorandClient`.

#### Example

```ts
const algorand = AlgorandClient.mainNet();
```

***

### testNet()

> `static` **testNet**(): [`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

Defined in: [src/types/algorand-client.ts:276](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/types/algorand-client.ts#L276)

Creates an `AlgorandClient` pointing at TestNet using AlgoNode.

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/API Reference/classes/algorandclient/)

An instance of the `AlgorandClient`.

#### Example

```ts
const algorand = AlgorandClient.testNet();
```
