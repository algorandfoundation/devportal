---
title: AlgorandClient
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/algorand-client](/docs/algokit-utils/typescript/latest/api/modules/types_algorand_client/) / AlgorandClient

[types/algorand-client](/docs/algokit-utils/typescript/latest/api/modules/types_algorand_client/).AlgorandClient

A client that brokers easy access to Algorand functionality.

## Table of contents

### Constructors

- [constructor](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#constructor)

### Properties

- [\_accountManager](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#_accountmanager)
- [\_appDeployer](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#_appdeployer)
- [\_appManager](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#_appmanager)
- [\_assetManager](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#_assetmanager)
- [\_cachedSuggestedParams](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#_cachedsuggestedparams)
- [\_cachedSuggestedParamsExpiry](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#_cachedsuggestedparamsexpiry)
- [\_cachedSuggestedParamsTimeout](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#_cachedsuggestedparamstimeout)
- [\_clientManager](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#_clientmanager)
- [\_defaultValidityWindow](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#_defaultvaliditywindow)
- [\_errorTransformers](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#_errortransformers)
- [\_transactionCreator](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#_transactioncreator)
- [\_transactionSender](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#_transactionsender)

### Accessors

- [account](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#account)
- [app](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#app)
- [appDeployer](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#appdeployer)
- [asset](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#asset)
- [client](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#client)
- [createTransaction](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#createtransaction)
- [send](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#send)

### Methods

- [getSuggestedParams](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#getsuggestedparams)
- [newGroup](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#newgroup)
- [registerErrorTransformer](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#registererrortransformer)
- [setDefaultSigner](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#setdefaultsigner)
- [setDefaultValidityWindow](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#setdefaultvaliditywindow)
- [setSigner](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#setsigner)
- [setSignerFromAccount](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#setsignerfromaccount)
- [setSuggestedParamsCache](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#setsuggestedparamscache)
- [setSuggestedParamsCacheTimeout](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#setsuggestedparamscachetimeout)
- [unregisterErrorTransformer](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#unregistererrortransformer)
- [defaultLocalNet](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#defaultlocalnet)
- [fromClients](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#fromclients)
- [fromConfig](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#fromconfig)
- [fromEnvironment](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#fromenvironment)
- [mainNet](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#mainnet)
- [testNet](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/#testnet)

## Constructors

### constructor

• **new AlgorandClient**(`config`): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

#### Parameters

| Name     | Type                                                                                                                                                                                                                   |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `config` | [`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/interfaces/types_network_client.AlgoConfig/) \| [`AlgoSdkClients`](/docs/algokit-utils/typescript/latest/api/interfaces/types_client_manager.AlgoSdkClients/) |

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

#### Defined in

[src/types/algorand-client.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L40)

## Properties

### \_accountManager

• `Private` **\_accountManager**: [`AccountManager`](/docs/algokit-utils/typescript/latest/api/classes/types_account_manager.AccountManager/)

#### Defined in

[src/types/algorand-client.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L20)

---

### \_appDeployer

• `Private` **\_appDeployer**: [`AppDeployer`](/docs/algokit-utils/typescript/latest/api/classes/types_app_deployer.AppDeployer/)

#### Defined in

[src/types/algorand-client.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L22)

---

### \_appManager

• `Private` **\_appManager**: [`AppManager`](/docs/algokit-utils/typescript/latest/api/classes/types_app_manager.AppManager/)

#### Defined in

[src/types/algorand-client.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L21)

---

### \_assetManager

• `Private` **\_assetManager**: [`AssetManager`](/docs/algokit-utils/typescript/latest/api/classes/types_asset_manager.AssetManager/)

#### Defined in

[src/types/algorand-client.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L23)

---

### \_cachedSuggestedParams

• `Private` `Optional` **\_cachedSuggestedParams**: `SuggestedParams`

#### Defined in

[src/types/algorand-client.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L27)

---

### \_cachedSuggestedParamsExpiry

• `Private` `Optional` **\_cachedSuggestedParamsExpiry**: `Date`

#### Defined in

[src/types/algorand-client.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L28)

---

### \_cachedSuggestedParamsTimeout

• `Private` **\_cachedSuggestedParamsTimeout**: `number` = `3_000`

#### Defined in

[src/types/algorand-client.ts:29](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L29)

---

### \_clientManager

• `Private` **\_clientManager**: [`ClientManager`](/docs/algokit-utils/typescript/latest/api/classes/types_client_manager.ClientManager/)

#### Defined in

[src/types/algorand-client.ts:19](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L19)

---

### \_defaultValidityWindow

• `Private` **\_defaultValidityWindow**: `undefined` \| `bigint` = `undefined`

#### Defined in

[src/types/algorand-client.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L31)

---

### \_errorTransformers

• `Private` **\_errorTransformers**: `Set`\<[`ErrorTransformer`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#errortransformer)\>

A set of error transformers to use when an error is caught in simulate or execute
`registerErrorTransformer` and `unregisterErrorTransformer` can be used to add and remove
error transformers from the set.

#### Defined in

[src/types/algorand-client.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L38)

---

### \_transactionCreator

• `Private` **\_transactionCreator**: [`AlgorandClientTransactionCreator`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client_transaction_creator.AlgorandClientTransactionCreator/)

#### Defined in

[src/types/algorand-client.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L25)

---

### \_transactionSender

• `Private` **\_transactionSender**: [`AlgorandClientTransactionSender`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client_transaction_sender.AlgorandClientTransactionSender/)

#### Defined in

[src/types/algorand-client.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L24)

## Accessors

### account

• `get` **account**(): [`AccountManager`](/docs/algokit-utils/typescript/latest/api/classes/types_account_manager.AccountManager/)

Get or create accounts that can sign transactions.

#### Returns

[`AccountManager`](/docs/algokit-utils/typescript/latest/api/classes/types_account_manager.AccountManager/)

The `AccountManager` instance.

**`Example`**

```ts
const accountManager = AlgorandClient.mainNet().account;
```

#### Defined in

[src/types/algorand-client.ts:182](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L182)

---

### app

• `get` **app**(): [`AppManager`](/docs/algokit-utils/typescript/latest/api/classes/types_app_manager.AppManager/)

Methods for interacting with apps.

#### Returns

[`AppManager`](/docs/algokit-utils/typescript/latest/api/classes/types_app_manager.AppManager/)

The `AppManager` instance.

**`Example`**

```ts
const appManager = AlgorandClient.mainNet().app;
```

#### Defined in

[src/types/algorand-client.ts:202](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L202)

---

### appDeployer

• `get` **appDeployer**(): [`AppDeployer`](/docs/algokit-utils/typescript/latest/api/classes/types_app_deployer.AppDeployer/)

Methods for deploying apps and managing app deployment metadata.

#### Returns

[`AppDeployer`](/docs/algokit-utils/typescript/latest/api/classes/types_app_deployer.AppDeployer/)

The `AppDeployer` instance.

**`Example`**

```ts
const deployer = AlgorandClient.mainNet().appDeployer;
```

#### Defined in

[src/types/algorand-client.ts:212](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L212)

---

### asset

• `get` **asset**(): [`AssetManager`](/docs/algokit-utils/typescript/latest/api/classes/types_asset_manager.AssetManager/)

Methods for interacting with assets.

#### Returns

[`AssetManager`](/docs/algokit-utils/typescript/latest/api/classes/types_asset_manager.AssetManager/)

The `AssetManager` instance.

**`Example`**

```ts
const assetManager = AlgorandClient.mainNet().asset;
```

#### Defined in

[src/types/algorand-client.ts:192](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L192)

---

### client

• `get` **client**(): [`ClientManager`](/docs/algokit-utils/typescript/latest/api/classes/types_client_manager.ClientManager/)

Get clients, including algosdk clients and app clients.

#### Returns

[`ClientManager`](/docs/algokit-utils/typescript/latest/api/classes/types_client_manager.ClientManager/)

The `ClientManager` instance.

**`Example`**

```ts
const clientManager = AlgorandClient.mainNet().client;
```

#### Defined in

[src/types/algorand-client.ts:172](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L172)

---

### createTransaction

• `get` **createTransaction**(): [`AlgorandClientTransactionCreator`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client_transaction_creator.AlgorandClientTransactionCreator/)

Methods for creating a transaction.

#### Returns

[`AlgorandClientTransactionCreator`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client_transaction_creator.AlgorandClientTransactionCreator/)

The `AlgorandClientTransactionCreator` instance.

**`Example`**

```ts
const payment = await AlgorandClient.mainNet().createTransaction.payment({
  sender: 'SENDERADDRESS',
  receiver: 'RECEIVERADDRESS',
  amount: algo(1),
});
```

#### Defined in

[src/types/algorand-client.ts:269](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L269)

---

### send

• `get` **send**(): [`AlgorandClientTransactionSender`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client_transaction_sender.AlgorandClientTransactionSender/)

Methods for sending a transaction.

#### Returns

[`AlgorandClientTransactionSender`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client_transaction_sender.AlgorandClientTransactionSender/)

The `AlgorandClientTransactionSender` instance.

**`Example`**

```ts
const result = await AlgorandClient.mainNet().send.payment({
  sender: 'SENDERADDRESS',
  receiver: 'RECEIVERADDRESS',
  amount: algo(1),
});
```

#### Defined in

[src/types/algorand-client.ts:255](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L255)

## Methods

### getSuggestedParams

▸ **getSuggestedParams**(): `Promise`\<`SuggestedParams`\>

Get suggested params for a transaction (either cached or from algod if the cache is stale or empty)

#### Returns

`Promise`\<`SuggestedParams`\>

The suggested transaction parameters.

**`Example`**

```ts
const params = await AlgorandClient.mainNet().getSuggestedParams();
```

#### Defined in

[src/types/algorand-client.ts:151](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L151)

---

### newGroup

▸ **newGroup**(): [`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/classes/types_composer.TransactionComposer/)

Start a new `TransactionComposer` transaction group

#### Returns

[`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/classes/types_composer.TransactionComposer/)

A new instance of `TransactionComposer`.

**`Example`**

```ts
const composer = AlgorandClient.mainNet().newGroup();
const result = await composer.addTransaction(payment).send();
```

#### Defined in

[src/types/algorand-client.ts:234](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L234)

---

### registerErrorTransformer

▸ **registerErrorTransformer**(`transformer`): `void`

Register a function that will be used to transform an error caught when simulating or executing
composed transaction groups made from `newGroup`

#### Parameters

| Name          | Type                                                                                                     |
| :------------ | :------------------------------------------------------------------------------------------------------- |
| `transformer` | [`ErrorTransformer`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#errortransformer) |

#### Returns

`void`

#### Defined in

[src/types/algorand-client.ts:220](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L220)

---

### setDefaultSigner

▸ **setDefaultSigner**(`signer`): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Sets the default signer to use if no other signer is specified.

#### Parameters

| Name     | Type                                                                                                                                              | Description                                                                     |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| `signer` | `TransactionSigner` \| [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_account.TransactionSignerAccount/) | The signer to use, either a `TransactionSigner` or a `TransactionSignerAccount` |

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

The `AlgorandClient` so method calls can be chained

**`Example`**

```typescript
const signer = new SigningAccount(account, account.addr);
const algorand = AlgorandClient.mainNet().setDefaultSigner(signer);
```

#### Defined in

[src/types/algorand-client.ts:74](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L74)

---

### setDefaultValidityWindow

▸ **setDefaultValidityWindow**(`validityWindow`): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Sets the default validity window for transactions.

#### Parameters

| Name             | Type                 | Description                                                  |
| :--------------- | :------------------- | :----------------------------------------------------------- |
| `validityWindow` | `number` \| `bigint` | The number of rounds between the first and last valid rounds |

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

The `AlgorandClient` so method calls can be chained

**`Example`**

```typescript
const algorand = AlgorandClient.mainNet().setDefaultValidityWindow(1000);
```

#### Defined in

[src/types/algorand-client.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L59)

---

### setSigner

▸ **setSigner**(`sender`, `signer`): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Tracks the given signer against the given sender for later signing.

#### Parameters

| Name     | Type                  | Description                                               |
| :------- | :-------------------- | :-------------------------------------------------------- |
| `sender` | `string` \| `Address` | The sender address to use this signer for                 |
| `signer` | `TransactionSigner`   | The signer to sign transactions with for the given sender |

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

The `AlgorandClient` so method calls can be chained

**`Example`**

```typescript
const signer = new SigningAccount(account, account.addr);
const algorand = AlgorandClient.mainNet().setSigner(signer.addr, signer.signer);
```

#### Defined in

[src/types/algorand-client.ts:110](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L110)

---

### setSignerFromAccount

▸ **setSignerFromAccount**(`account`): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Tracks the given account (object that encapsulates an address and a signer) for later signing.

#### Parameters

| Name      | Type                                                                                                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                 |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `account` | [`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_account.MultisigAccount/) \| `default` \| [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_account.SigningAccount/) \| [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_account.TransactionSignerAccount/) \| `LogicSigAccount` | The account to register, which can be a `TransactionSignerAccount` or a `algosdk.Account`, `algosdk.LogicSigAccount`, `SigningAccount` or `MultisigAccount` |

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

The `AlgorandClient` so method calls can be chained

**`Example`**

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

#### Defined in

[src/types/algorand-client.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L94)

---

### setSuggestedParamsCache

▸ **setSuggestedParamsCache**(`suggestedParams`, `until?`): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Sets a cache value to use for suggested transaction params.

#### Parameters

| Name              | Type              | Description                                                               |
| :---------------- | :---------------- | :------------------------------------------------------------------------ |
| `suggestedParams` | `SuggestedParams` | The suggested params to use                                               |
| `until?`          | `Date`            | A date until which to cache, or if not specified then the timeout is used |

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

The `AlgorandClient` so method calls can be chained

**`Example`**

```typescript
const algorand = AlgorandClient.mainNet().setSuggestedParamsCache(
  suggestedParams,
  new Date(+new Date() + 3_600_000),
);
```

#### Defined in

[src/types/algorand-client.ts:125](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L125)

---

### setSuggestedParamsCacheTimeout

▸ **setSuggestedParamsCacheTimeout**(`timeout`): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Sets the timeout for caching suggested params.

#### Parameters

| Name      | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `timeout` | `number` | The timeout in milliseconds |

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

The `AlgorandClient` so method calls can be chained

**`Example`**

```typescript
const algorand = AlgorandClient.mainNet().setSuggestedParamsCacheTimeout(10_000);
```

#### Defined in

[src/types/algorand-client.ts:140](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L140)

---

### unregisterErrorTransformer

▸ **unregisterErrorTransformer**(`transformer`): `void`

#### Parameters

| Name          | Type                                                                                                     |
| :------------ | :------------------------------------------------------------------------------------------------------- |
| `transformer` | [`ErrorTransformer`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#errortransformer) |

#### Returns

`void`

#### Defined in

[src/types/algorand-client.ts:224](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L224)

---

### defaultLocalNet

▸ **defaultLocalNet**(): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Creates an `AlgorandClient` pointing at default LocalNet ports and API token.

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

An instance of the `AlgorandClient`.

**`Example`**

```ts
const algorand = AlgorandClient.defaultLocalNet();
```

#### Defined in

[src/types/algorand-client.ts:281](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L281)

---

### fromClients

▸ **fromClients**(`clients`): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Creates an `AlgorandClient` pointing to the given client(s).

#### Parameters

| Name      | Type                                                                                                          | Description         |
| :-------- | :------------------------------------------------------------------------------------------------------------ | :------------------ |
| `clients` | [`AlgoSdkClients`](/docs/algokit-utils/typescript/latest/api/interfaces/types_client_manager.AlgoSdkClients/) | The clients to use. |

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

An instance of the `AlgorandClient`.

**`Example`**

```ts
const algorand = AlgorandClient.fromClients({ algod, indexer, kmd });
```

#### Defined in

[src/types/algorand-client.ts:324](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L324)

---

### fromConfig

▸ **fromConfig**(`config`): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Creates an `AlgorandClient` from the given config.

#### Parameters

| Name     | Type                                                                                                  | Description        |
| :------- | :---------------------------------------------------------------------------------------------------- | :----------------- |
| `config` | [`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/interfaces/types_network_client.AlgoConfig/) | The config to use. |

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

An instance of the `AlgorandClient`.

**`Example`**

```ts
const client = AlgorandClient.fromConfig({ algodConfig, indexerConfig, kmdConfig });
```

#### Defined in

[src/types/algorand-client.ts:358](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L358)

---

### fromEnvironment

▸ **fromEnvironment**(): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Creates an `AlgorandClient` loading the configuration from environment variables.

Retrieve configurations from environment variables when defined or get default LocalNet configuration if they aren't defined.

Expects to be called from a Node.js environment.

If `process.env.ALGOD_SERVER` is defined it will use that along with optional `process.env.ALGOD_PORT` and `process.env.ALGOD_TOKEN`.

If `process.env.INDEXER_SERVER` is defined it will use that along with optional `process.env.INDEXER_PORT` and `process.env.INDEXER_TOKEN`.

If either aren't defined it will use the default LocalNet config.

It will return a KMD configuration that uses `process.env.KMD_PORT` (or port 4002) if `process.env.ALGOD_SERVER` is defined,
otherwise it will use the default LocalNet config unless it detects testnet or mainnet.

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

An instance of the `AlgorandClient`.

**`Example`**

```ts
const client = AlgorandClient.fromEnvironment();
```

#### Defined in

[src/types/algorand-client.ts:347](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L347)

---

### mainNet

▸ **mainNet**(): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Creates an `AlgorandClient` pointing at MainNet using AlgoNode.

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

An instance of the `AlgorandClient`.

**`Example`**

```ts
const algorand = AlgorandClient.mainNet();
```

#### Defined in

[src/types/algorand-client.ts:309](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L309)

---

### testNet

▸ **testNet**(): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Creates an `AlgorandClient` pointing at TestNet using AlgoNode.

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

An instance of the `AlgorandClient`.

**`Example`**

```ts
const algorand = AlgorandClient.testNet();
```

#### Defined in

[src/types/algorand-client.ts:295](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client.ts#L295)
