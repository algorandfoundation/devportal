---
editUrl: false
next: false
prev: false
title: 'AlgorandClient'
---

Defined in: [src/algorand-client.ts:19](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L19)

A client that brokers easy access to Algorand functionality.

## Accessors

### account

#### Get Signature

> **get** **account**(): [`AccountManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/accountmanager/)

Defined in: [src/algorand-client.ts:185](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L185)

Get or create accounts that can sign transactions.

##### Example

```ts
const accountManager = AlgorandClient.mainNet().account;
```

##### Returns

[`AccountManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/accountmanager/)

The `AccountManager` instance.

---

### app

#### Get Signature

> **get** **app**(): [`AppManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appmanager/)

Defined in: [src/algorand-client.ts:205](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L205)

Methods for interacting with apps.

##### Example

```ts
const appManager = AlgorandClient.mainNet().app;
```

##### Returns

[`AppManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appmanager/)

The `AppManager` instance.

---

### appDeployer

#### Get Signature

> **get** **appDeployer**(): [`AppDeployer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appdeployer/)

Defined in: [src/algorand-client.ts:215](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L215)

Methods for deploying apps and managing app deployment metadata.

##### Example

```ts
const deployer = AlgorandClient.mainNet().appDeployer;
```

##### Returns

[`AppDeployer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/appdeployer/)

The `AppDeployer` instance.

---

### asset

#### Get Signature

> **get** **asset**(): [`AssetManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/assetmanager/)

Defined in: [src/algorand-client.ts:195](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L195)

Methods for interacting with assets.

##### Example

```ts
const assetManager = AlgorandClient.mainNet().asset;
```

##### Returns

[`AssetManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/assetmanager/)

The `AssetManager` instance.

---

### client

#### Get Signature

> **get** **client**(): [`ClientManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/clientmanager/)

Defined in: [src/algorand-client.ts:175](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L175)

Get clients, including algosdk clients and app clients.

##### Example

```ts
const clientManager = AlgorandClient.mainNet().client;
```

##### Returns

[`ClientManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/clientmanager/)

The `ClientManager` instance.

---

### createTransaction

#### Get Signature

> **get** **createTransaction**(): [`AlgorandClientTransactionCreator`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algorandclienttransactioncreator/)

Defined in: [src/algorand-client.ts:293](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L293)

Methods for creating a transaction.

##### Example

```ts
const payment = await AlgorandClient.mainNet().createTransaction.payment({
  sender: 'SENDERADDRESS',
  receiver: 'RECEIVERADDRESS',
  amount: algo(1),
});
```

##### Returns

[`AlgorandClientTransactionCreator`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algorandclienttransactioncreator/)

The `AlgorandClientTransactionCreator` instance.

---

### network

#### Get Signature

> **get** **network**(): [`NetworkManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/networkmanager/)

Defined in: [src/algorand-client.ts:235](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L235)

Methods for interacting with the network.
Provides utilities for querying blockchain state and waiting for specific conditions.

##### Example

```typescript
// Get last round
const lastRound = await algorand.network.getLastRound();

// Wait for a specific round
await algorand.network.waitUntilRound(1000n);

// LocalNet-specific: block warp
await algorand.network.localNet.blockWarp(100n);
```

##### Returns

[`NetworkManager`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/networkmanager/)

The `NetworkManager` instance.

---

### send

#### Get Signature

> **get** **send**(): [`AlgorandClientTransactionSender`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algorandclienttransactionsender/)

Defined in: [src/algorand-client.ts:279](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L279)

Methods for sending a transaction.

##### Example

```ts
const result = await AlgorandClient.mainNet().send.payment({
  sender: 'SENDERADDRESS',
  receiver: 'RECEIVERADDRESS',
  amount: algo(1),
});
```

##### Returns

[`AlgorandClientTransactionSender`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algorandclienttransactionsender/)

The `AlgorandClientTransactionSender` instance.

## Methods

### getSuggestedParams()

> **getSuggestedParams**(): `Promise`\<\{ `consensusVersion`: `string`; `fee`: `bigint`; `firstValid`: `bigint`; `flatFee`: `boolean`; `genesisHash`: `Uint8Array`; `genesisId`: `string`; `lastValid`: `bigint`; `minFee`: `bigint`; \}\>

Defined in: [src/algorand-client.ts:154](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L154)

Get suggested params for a transaction (either cached or from algod if the cache is stale or empty)

#### Returns

`Promise`\<\{ `consensusVersion`: `string`; `fee`: `bigint`; `firstValid`: `bigint`; `flatFee`: `boolean`; `genesisHash`: `Uint8Array`; `genesisId`: `string`; `lastValid`: `bigint`; `minFee`: `bigint`; \}\>

The suggested transaction parameters.

#### Example

```ts
const params = await AlgorandClient.mainNet().getSuggestedParams();
```

---

### newGroup()

> **newGroup**(`composerConfig?`): [`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/transactioncomposer/)

Defined in: [src/algorand-client.ts:257](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L257)

Start a new `TransactionComposer` transaction group

#### Parameters

##### composerConfig?

[`TransactionComposerConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/transactioncomposerconfig/)

#### Returns

[`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/transactioncomposer/)

A new instance of `TransactionComposer`.

#### Example

```ts
{@includeCode ./algorand-client.spec.ts#example-newGroup}
```

#### See

[Full working example](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client.spec.ts)

---

### registerErrorTransformer()

> **registerErrorTransformer**(`transformer`): `void`

Defined in: [src/algorand-client.ts:243](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L243)

Register a function that will be used to transform an error caught when simulating or executing
composed transaction groups made from `newGroup`

#### Parameters

##### transformer

[`ErrorTransformer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/errortransformer/)

#### Returns

`void`

---

### setDefaultSigner()

> **setDefaultSigner**(`signer`): `AlgorandClient`

Defined in: [src/algorand-client.ts:77](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L77)

Sets the default signer to use if no other signer is specified.

#### Parameters

##### signer

The signer to use, either a `TransactionSigner` or a `AddressWithSigner`

[`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) | [`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

#### Returns

`AlgorandClient`

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const signer = new SigningAccount(account, account.addr);
const algorand = AlgorandClient.mainNet().setDefaultSigner(signer);
```

---

### setDefaultValidityWindow()

> **setDefaultValidityWindow**(`validityWindow`): `AlgorandClient`

Defined in: [src/algorand-client.ts:62](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L62)

Sets the default validity window for transactions.

#### Parameters

##### validityWindow

The number of rounds between the first and last valid rounds

`number` | `bigint`

#### Returns

`AlgorandClient`

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const algorand = AlgorandClient.mainNet().setDefaultValidityWindow(1000);
```

---

### setSigner()

> **setSigner**(`sender`, `signer`): `AlgorandClient`

Defined in: [src/algorand-client.ts:113](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L113)

Tracks the given signer against the given sender for later signing.

#### Parameters

##### sender

The sender address to use this signer for

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

##### signer

[`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

The signer to sign transactions with for the given sender

#### Returns

`AlgorandClient`

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const signer = new SigningAccount(account, account.addr);
const algorand = AlgorandClient.mainNet().setSigner(signer.addr, signer.signer);
```

---

### setSignerFromAccount()

> **setSignerFromAccount**(`account`): `AlgorandClient`

Defined in: [src/algorand-client.ts:97](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L97)

Tracks the given account (object that encapsulates an address and a signer) for later signing.

#### Parameters

##### account

The account to register, which can be a `AddressWithSigner` or
a `algosdk.Account`, `algosdk.LogicSigAccount`, `SigningAccount` or `MultisigAccount`

[`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/multisigaccount/) | [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) | [`LogicSigAccount`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/logicsigaccount/)

#### Returns

`AlgorandClient`

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const accountManager = AlgorandClient.mainNet()
  .setSignerFromAccount(algosdk.generateAccount())
  .setSignerFromAccount(new algosdk.LogicSigAccount(program, args))
  .setSignerFromAccount(new SigningAccount(account, sender))
  .setSignerFromAccount(
    new MultisigAccount({ version: 1, threshold: 1, addrs: ['ADDRESS1...', 'ADDRESS2...'] }, [
      account1,
      account2,
    ]),
  )
  .setSignerFromAccount({ addr: 'SENDERADDRESS', signer: transactionSigner });
```

---

### setSuggestedParamsCache()

> **setSuggestedParamsCache**(`suggestedParams`, `until?`): `AlgorandClient`

Defined in: [src/algorand-client.ts:128](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L128)

Sets a cache value to use for suggested transaction params.

#### Parameters

##### suggestedParams

The suggested params to use

###### consensusVersion

`string`

ConsensusVersion indicates the consensus protocol version
as of LastRound.

###### fee

`bigint`

Fee is the suggested transaction fee
Fee is in units of micro-Algos per byte.
Fee may fall to zero but transactions must still have a fee of
at least MinTxnFee for the current network protocol.

###### firstValid

`bigint`

###### flatFee

`boolean`

###### genesisHash

`Uint8Array`

GenesisHash is the hash of the genesis block.

###### genesisId

`string`

GenesisID is an ID listed in the genesis block.

###### lastValid

`bigint`

###### minFee

`bigint`

The minimum transaction fee (not per byte) required for the
txn to validate for the current network protocol.

##### until?

`Date`

A date until which to cache, or if not specified then the timeout is used

#### Returns

`AlgorandClient`

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const algorand = AlgorandClient.mainNet().setSuggestedParamsCache(
  suggestedParams,
  new Date(+new Date() + 3_600_000),
);
```

---

### setSuggestedParamsCacheTimeout()

> **setSuggestedParamsCacheTimeout**(`timeout`): `AlgorandClient`

Defined in: [src/algorand-client.ts:143](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L143)

Sets the timeout for caching suggested params.

#### Parameters

##### timeout

`number`

The timeout in milliseconds

#### Returns

`AlgorandClient`

The `AlgorandClient` so method calls can be chained

#### Example

```typescript
const algorand = AlgorandClient.mainNet().setSuggestedParamsCacheTimeout(10_000);
```

---

### unregisterErrorTransformer()

> **unregisterErrorTransformer**(`transformer`): `void`

Defined in: [src/algorand-client.ts:247](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L247)

#### Parameters

##### transformer

[`ErrorTransformer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/errortransformer/)

#### Returns

`void`

---

### defaultLocalNet()

> `static` **defaultLocalNet**(): `AlgorandClient`

Defined in: [src/algorand-client.ts:306](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L306)

Creates an `AlgorandClient` pointing at default LocalNet ports and API token.

#### Returns

`AlgorandClient`

An instance of the `AlgorandClient`.

#### Example

```ts
{@includeCode ./algorand-client.spec.ts#example-defaultLocalNet}
```

#### See

[Full working example](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client.spec.ts)

---

### fromClients()

> `static` **fromClients**(`clients`): `AlgorandClient`

Defined in: [src/algorand-client.ts:349](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L349)

Creates an `AlgorandClient` pointing to the given client(s).

#### Parameters

##### clients

[`AlgoSdkClients`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algosdkclients/)

The clients to use.

#### Returns

`AlgorandClient`

An instance of the `AlgorandClient`.

#### Example

```ts
const algorand = AlgorandClient.fromClients({ algod, indexer, kmd });
```

---

### fromConfig()

> `static` **fromConfig**(`config`): `AlgorandClient`

Defined in: [src/algorand-client.ts:383](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L383)

Creates an `AlgorandClient` from the given config.

#### Parameters

##### config

[`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/algoconfig/)

The config to use.

#### Returns

`AlgorandClient`

An instance of the `AlgorandClient`.

#### Example

```ts
const client = AlgorandClient.fromConfig({ algodConfig, indexerConfig, kmdConfig });
```

---

### fromEnvironment()

> `static` **fromEnvironment**(): `AlgorandClient`

Defined in: [src/algorand-client.ts:372](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L372)

Creates an `AlgorandClient` loading the configuration from environment variables.

Retrieve configurations from environment variables when defined or get default LocalNet configuration if they aren't defined.

Expects to be called from a Node.js environment.

If `process.env.ALGOD_SERVER` is defined it will use that along with optional `process.env.ALGOD_PORT` and `process.env.ALGOD_TOKEN`.

If `process.env.INDEXER_SERVER` is defined it will use that along with optional `process.env.INDEXER_PORT` and `process.env.INDEXER_TOKEN`.

If either aren't defined it will use the default LocalNet config.

It will return a KMD configuration that uses `process.env.KMD_PORT` (or port 4002) if `process.env.ALGOD_SERVER` is defined,
otherwise it will use the default LocalNet config unless it detects testnet or mainnet.

#### Returns

`AlgorandClient`

An instance of the `AlgorandClient`.

#### Example

```ts
const client = AlgorandClient.fromEnvironment();
```

---

### mainNet()

> `static` **mainNet**(): `AlgorandClient`

Defined in: [src/algorand-client.ts:334](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L334)

Creates an `AlgorandClient` pointing at MainNet using AlgoNode.

#### Returns

`AlgorandClient`

An instance of the `AlgorandClient`.

#### Example

```ts
const algorand = AlgorandClient.mainNet();
```

---

### testNet()

> `static` **testNet**(): `AlgorandClient`

Defined in: [src/algorand-client.ts:320](https://github.com/larkiny/algokit-utils-ts/blob/main/src/algorand-client.ts#L320)

Creates an `AlgorandClient` pointing at TestNet using AlgoNode.

#### Returns

`AlgorandClient`

An instance of the `AlgorandClient`.

#### Example

```ts
const algorand = AlgorandClient.testNet();
```
