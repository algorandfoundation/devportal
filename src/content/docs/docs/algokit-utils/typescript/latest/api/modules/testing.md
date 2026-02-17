---
title: testing
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / testing

## Table of contents

### Classes

- [TestLogger](/docs/algokit-utils/typescript/latest/api/classes/testing.TestLogger/)
- [TransactionLogger](/docs/algokit-utils/typescript/latest/api/classes/testing.TransactionLogger/)

### Functions

- [algoKitLogCaptureFixture](/docs/algokit-utils/typescript/latest/api/modules/testing/#algokitlogcapturefixture)
- [algorandFixture](/docs/algokit-utils/typescript/latest/api/modules/testing/#algorandfixture)
- [getTestAccount](/docs/algokit-utils/typescript/latest/api/modules/testing/#gettestaccount)
- [runWhenIndexerCaughtUp](/docs/algokit-utils/typescript/latest/api/modules/testing/#runwhenindexercaughtup)

## Functions

### algoKitLogCaptureFixture

▸ **algoKitLogCaptureFixture**(): [`AlgoKitLogCaptureFixture`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgoKitLogCaptureFixture/)

Creates a test fixture for capturing AlgoKit logs.

#### Returns

[`AlgoKitLogCaptureFixture`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgoKitLogCaptureFixture/)

The fixture

**`Example`**

```typescript
const logs = algoKitLogCaptureFixture();

beforeEach(logs.beforeEach);
afterEach(logs.afterEach);

test('My test', () => {
  const capturedLogs = logs.testLogger.capturedLogs;
});
```

#### Defined in

[src/testing/fixtures/algokit-log-capture-fixture.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/fixtures/algokit-log-capture-fixture.ts#L22)

---

### algorandFixture

▸ **algorandFixture**(`fixtureConfig?`): [`AlgorandFixture`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixture/)

Creates a test fixture for automated testing against Algorand.
By default it tests against an environment variable specified client
if the standard environment variables are specified, otherwise against
a default LocalNet instance, but you can pass in an algod, indexer
and/or kmd (or their respective config) if you want to test against
an explicitly defined network.

#### Parameters

| Name             | Type                                                                                                                 | Description               |
| :--------------- | :------------------------------------------------------------------------------------------------------------------- | :------------------------ |
| `fixtureConfig?` | [`AlgorandFixtureConfig`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixtureConfig/) | The fixture configuration |

#### Returns

[`AlgorandFixture`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixture/)

The fixture

**`Example`**

```typescript
const fixture = algorandFixture()

beforeEach(fixture.newScope, 10_000)

test('My test', async () => {
    const {algod, indexer, testAccount, ...} = fixture.context
    // test things...
})
```

**`Example`**

```typescript
const fixture = algorandFixture()

beforeAll(fixture.newScope, 10_000)

test('My test', async () => {
    const {algod, indexer, testAccount, ...} = fixture.context
    // test things...
})
```

**`Example`**

```typescript
const fixture = algorandFixture({
 algod: new Algodv2('localhost', 12345, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
 // ...
})

beforeEach(fixture.newScope, 10_000)

test('My test', async () => {
    const {algod, indexer, testAccount, ...} = fixture.context
    // test things...
})
```

#### Defined in

[src/testing/fixtures/algorand-fixture.ts:60](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/fixtures/algorand-fixture.ts#L60)

▸ **algorandFixture**(`fixtureConfig`, `config`): [`AlgorandFixture`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixture/)

#### Parameters

| Name            | Type                                                                                                                                | Description               |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :------------------------ |
| `fixtureConfig` | `undefined` \| [`AlgorandFixtureConfig`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixtureConfig/) | The fixture configuration |
| `config`        | [`AlgoConfig`](/docs/algokit-utils/typescript/latest/api/interfaces/types_network_client.AlgoConfig/)                               | The fixture configuration |

#### Returns

[`AlgorandFixture`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixture/)

The fixture

**`Deprecated`**

Config can be passed in directly to fixture config now.

Creates a test fixture for automated testing against Algorand.
By default it tests against an environment variable specified client
if the standard environment variables are specified, otherwise against
a default LocalNet instance, but you can pass in an algod, indexer
and/or kmd if you want to test against an explicitly defined network.

#### Defined in

[src/testing/fixtures/algorand-fixture.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/fixtures/algorand-fixture.ts#L75)

---

### getTestAccount

▸ **getTestAccount**(`params`, `algod`, `kmd?`): `Promise`\<`Address` & `Account` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_account.TransactionSignerAccount/)\>

#### Parameters

| Name     | Type                                                                                                               | Description                                                                                                                                                     |
| :------- | :----------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `params` | [`GetTestAccountParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.GetTestAccountParams/) | The config for the test account to generate                                                                                                                     |
| `algod`  | `AlgodClient`                                                                                                      | An algod client                                                                                                                                                 |
| `kmd?`   | `KmdClient`                                                                                                        | A KMD client, if not specified then a default KMD client will be loaded from environment variables and if not found fallback to the default LocalNet KMD client |

#### Returns

`Promise`\<`Address` & `Account` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_account.TransactionSignerAccount/)\>

The account, with private key loaded

**`Deprecated`**

Use `getTestAccount(params, algorandClient)` instead. The `algorandClient` object can be created using `AlgorandClient.fromClients({ algod, kmd })`.

Creates an ephemeral Algorand account for the purposes of testing.
Returns a newly created random test account that is funded from the dispenser
DO NOT USE THIS TO CREATE A MAINNET ACCOUNT!
Note: By default this will log the mnemonic of the account.

#### Defined in

[src/testing/account.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/account.ts#L21)

▸ **getTestAccount**(`params`, `algorand`): `Promise`\<`Address` & `Account` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_account.TransactionSignerAccount/)\>

Creates an ephemeral Algorand account for the purposes of testing.
Returns a newly created random test account that is funded from the dispenser
DO NOT USE THIS TO CREATE A MAINNET ACCOUNT!
Note: By default this will log the mnemonic of the account.

#### Parameters

| Name       | Type                                                                                                               | Description                                 |
| :--------- | :----------------------------------------------------------------------------------------------------------------- | :------------------------------------------ |
| `params`   | [`GetTestAccountParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.GetTestAccountParams/) | The config for the test account to generate |
| `algorand` | [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)        | An AlgorandClient client                    |

#### Returns

`Promise`\<`Address` & `Account` & [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_account.TransactionSignerAccount/)\>

The account, with private key loaded

#### Defined in

[src/testing/account.ts:35](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/account.ts#L35)

---

### runWhenIndexerCaughtUp

▸ **runWhenIndexerCaughtUp**\<`T`\>(`run`): `Promise`\<`T`\>

Runs the given indexer call until a 404 error is no longer returned.
Tried every 200ms up to 100 times.
Very rudimentary implementation designed for automated testing.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name  | Type                   | Description     |
| :---- | :--------------------- | :-------------- |
| `run` | () => `Promise`\<`T`\> | The code to run |

#### Returns

`Promise`\<`T`\>

The result (as a promise), or throws if the indexer didn't catch up in time

**`Example`**

```typescript
const transaction = await runWhenIndexerCaughtUp(() => indexer.lookupTransactionByID(txnId).do());
```

#### Defined in

[src/testing/indexer.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/indexer.ts#L12)
