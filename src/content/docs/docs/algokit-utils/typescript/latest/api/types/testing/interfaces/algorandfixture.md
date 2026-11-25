---
editUrl: false
next: false
prev: false
title: "AlgorandFixture"
---

Defined in: [src/types/testing.ts:66](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L66)

An Algorand automated testing fixture

## Properties

### ~~beforeEach~~

> **beforeEach**: () => `Promise`\<`void`\>

Defined in: [src/types/testing.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L90)

:::caution[Deprecated]
Use newScope instead.
Testing framework agnostic handler method to run before each test to prepare the `context` for that test with per test isolation.
:::

#### Returns

`Promise`\<`void`\>

***

### newScope

> **newScope**: () => `Promise`\<`void`\>

Defined in: [src/types/testing.ts:130](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L130)

Creates a new isolated fixture scope (clean transaction logger, AlgorandClient, testAccount, etc.).

You can call this from any testing framework specific hook method to control when you want a new scope.

#### Returns

`Promise`\<`void`\>

#### Examples

**Jest / vitest - per test isolation (beforeEach)**

```typescript
describe('MY MODULE', () => {
  const fixture = algorandFixture()
  beforeEach(fixture.newScope)

  test('MY TEST', async () => {
    const { algorand, testAccount } = fixture.context

    // Test stuff!
  })
})
```

**Jest / vitest - test suite isolation (beforeAll)**

```typescript
describe('MY MODULE', () => {
  const fixture = algorandFixture()
  beforeAll(fixture.newScope)

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

## Accessors

### algorand

#### Get Signature

> **get** **algorand**(): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/types/algorand-client/classes/algorandclient/)

Defined in: [src/types/testing.ts:84](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L84)

Retrieve an `AlgorandClient` loaded with the current context, including testAccount and any generated accounts loaded as signers.

##### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/types/algorand-client/classes/algorandclient/)

***

### context

#### Get Signature

> **get** **context**(): [`AlgorandTestAutomationContext`](/docs/algokit-utils/typescript/latest/api/types/testing/interfaces/algorandtestautomationcontext/)

Defined in: [src/types/testing.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L79)

Retrieve the current context.
Useful with destructuring.

If you haven't called `newScope` then this will throw an error.

##### Example

```typescript
test('My test', () => {
    const {algod, indexer, testAccount, ...} = fixture.context
})
```

##### Returns

[`AlgorandTestAutomationContext`](/docs/algokit-utils/typescript/latest/api/types/testing/interfaces/algorandtestautomationcontext/)
