---
title: AlgorandFixture
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/) / AlgorandFixture

[types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/).AlgorandFixture

An Algorand automated testing fixture

## Table of contents

### Properties

- [beforeEach](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixture/#beforeeach)
- [newScope](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixture/#newscope)

### Accessors

- [algorand](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixture/#algorand)
- [context](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandFixture/#context)

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

---

### newScope

• **newScope**: () => `Promise`\<`void`\>

Creates a new isolated fixture scope (clean transaction logger, AlgorandClient, testAccount, etc.).

You can call this from any testing framework specific hook method to control when you want a new scope.

**`Example`**

```typescript
describe('MY MODULE', () => {
  const fixture = algorandFixture();
  beforeEach(fixture.newScope, 10_000); // Add a 10s timeout to cater for occasionally slow LocalNet calls

  test('MY TEST', async () => {
    const { algorand, testAccount } = fixture.context;

    // Test stuff!
  });
});
```

**`Example`**

```typescript
describe('MY MODULE', () => {
  const fixture = algorandFixture();
  beforeAll(fixture.newScope, 10_000); // Add a 10s timeout to cater for occasionally slow LocalNet calls

  test('test1', async () => {
    const { algorand, testAccount } = fixture.context;

    // Test stuff!
  });
  test('test2', async () => {
    const { algorand, testAccount } = fixture.context;
    // algorand and testAccount are the same as in test1
  });
});
```

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/testing.ts:130](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L130)

## Accessors

### algorand

• `get` **algorand**(): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

Retrieve an `AlgorandClient` loaded with the current context, including testAccount and any generated accounts loaded as signers.

#### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_client.AlgorandClient/)

#### Defined in

[src/types/testing.ts:84](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L84)

---

### context

• `get` **context**(): [`AlgorandTestAutomationContext`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandTestAutomationContext/)

Retrieve the current context.
Useful with destructuring.

If you haven't called `newScope` then this will throw an error.

#### Returns

[`AlgorandTestAutomationContext`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgorandTestAutomationContext/)

**`Example`**

```typescript
test('My test', () => {
    const {algod, indexer, testAccount, ...} = fixture.context
})
```

#### Defined in

[src/types/testing.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L79)
