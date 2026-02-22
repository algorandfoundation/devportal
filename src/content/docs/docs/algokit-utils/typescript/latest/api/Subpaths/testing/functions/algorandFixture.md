---
editUrl: false
next: false
prev: false
title: "algorandFixture"
---

## Call Signature

> **algorandFixture**(`fixtureConfig?`): [`AlgorandFixture`](/algokit-utils-ts/api/subpaths/testing/interfaces/algorandfixture/)

Defined in: [src/testing/fixtures/algorand-fixture.ts:60](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/fixtures/algorand-fixture.ts#L60)

Creates a test fixture for automated testing against Algorand.
By default it tests against an environment variable specified client
 if the standard environment variables are specified, otherwise against
 a default LocalNet instance, but you can pass in an algod, indexer
 and/or kmd (or their respective config) if you want to test against
an explicitly defined network.

### Parameters

#### fixtureConfig?

[`AlgorandFixtureConfig`](/algokit-utils-ts/api/subpaths/testing/interfaces/algorandfixtureconfig/)

The fixture configuration

### Returns

[`AlgorandFixture`](/algokit-utils-ts/api/subpaths/testing/interfaces/algorandfixture/)

The fixture

### Examples

```typescript
const fixture = algorandFixture()

beforeEach(fixture.newScope)

test('My test', async () => {
    const {algod, indexer, testAccount, ...} = fixture.context
    // test things...
})
```

```typescript
const fixture = algorandFixture()

beforeAll(fixture.newScope)

test('My test', async () => {
    const {algod, indexer, testAccount, ...} = fixture.context
    // test things...
})
```

```typescript
const fixture = algorandFixture({
 algod: new AlgodClient({ baseUrl: 'http://localhost:12345', headers: { 'X-Algo-API-Token': 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' } }),
 // ...
})

beforeEach(fixture.newScope)

test('My test', async () => {
    const {algod, indexer, testAccount, ...} = fixture.context
    // test things...
})
```

## Call Signature

> **algorandFixture**(`fixtureConfig`, `config`): [`AlgorandFixture`](/algokit-utils-ts/api/subpaths/testing/interfaces/algorandfixture/)

Defined in: [src/testing/fixtures/algorand-fixture.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/fixtures/algorand-fixture.ts#L75)

:::caution[Deprecated]
Config can be passed in directly to fixture config now.

Creates a test fixture for automated testing against Algorand.
By default it tests against an environment variable specified client
 if the standard environment variables are specified, otherwise against
 a default LocalNet instance, but you can pass in an algod, indexer
 and/or kmd if you want to test against an explicitly defined network.
:::

### Parameters

#### fixtureConfig

The fixture configuration

[`AlgorandFixtureConfig`](/algokit-utils-ts/api/subpaths/testing/interfaces/algorandfixtureconfig/) | `undefined`

#### config

[`AlgoConfig`](/algokit-utils-ts/api/algokit-utils/interfaces/algoconfig/)

The fixture configuration

### Returns

[`AlgorandFixture`](/algokit-utils-ts/api/subpaths/testing/interfaces/algorandfixture/)

The fixture
