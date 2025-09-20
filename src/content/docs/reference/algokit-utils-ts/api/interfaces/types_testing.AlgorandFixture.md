---
title: AlgorandFixture
slug: reference/algokit-utils-ts/api/interfaces/types_testingalgorandfixture
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/testing](/reference/algokit-utils-ts/api/modules/types_testing/) / AlgorandFixture



[types/testing](/reference/algokit-utils-ts/api/modules/types_testing/).AlgorandFixture

An Algorand automated testing fixture

## Table of contents

### Properties

- [beforeEach](#beforeeach)
- [newScope](#newscope)

### Accessors

- [algorand](#algorand)
- [context](#context)

## Properties

### beforeEach

• **beforeEach**: () => `Promise`\<`void`\>

**`Deprecated`**

Use newScope instead.
Testing framework agnostic handler method to run before each test to prepare the `context` for that test with per test isolation.

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/testing.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L90)

___

### newScope

• **newScope**: () => `Promise`\<`void`\>

Creates a new isolated fixture scope (clean transaction logger, AlgorandClient, testAccount, etc.).

You can call this from any testing framework specific hook method to control when you want a new scope.

**`Example`**

```typescript
describe('MY MODULE', () => {
  const fixture = algorandFixture()
  beforeEach(fixture.newScope, 10_000) // Add a 10s timeout to cater for occasionally slow LocalNet calls

  test('MY TEST', async () => {
    const { algorand, testAccount } = fixture.context

    // Test stuff!
  })
})
```

**`Example`**

```typescript
describe('MY MODULE', () => {
  const fixture = algorandFixture()
  beforeAll(fixture.newScope, 10_000) // Add a 10s timeout to cater for occasionally slow LocalNet calls

  test('test1', async () => {
    const { algorand, testAccount } = fixture.context

    // Test stuff!
  })
  test('test2', async () => {
    const { algorand, testAccount } = fixture.context
    // algorand and testAccount are the same as in test1
  })
})
```

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/testing.ts:130](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L130)

## Accessors

### algorand

• `get` **algorand**(): [`AlgorandClient`](/reference/algokit-utils-ts/api/classes/types_algorand_clientalgorandclient/)

Retrieve an `AlgorandClient` loaded with the current context, including testAccount and any generated accounts loaded as signers.

#### Returns

[`AlgorandClient`](/reference/algokit-utils-ts/api/classes/types_algorand_clientalgorandclient/)

#### Defined in

[src/types/testing.ts:84](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L84)

___

### context

• `get` **context**(): [`AlgorandTestAutomationContext`](/reference/algokit-utils-ts/api/interfaces/types_testingalgorandtestautomationcontext/)

Retrieve the current context.
Useful with destructuring.

If you haven't called `newScope` then this will throw an error.

#### Returns

[`AlgorandTestAutomationContext`](/reference/algokit-utils-ts/api/interfaces/types_testingalgorandtestautomationcontext/)

**`Example`**

```typescript
test('My test', () => {
    const {algod, indexer, testAccount, ...} = fixture.context
})
```

#### Defined in

[src/types/testing.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L79)