---
title: AlgoKitLogCaptureFixture
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/) / AlgoKitLogCaptureFixture

[types/testing](/docs/algokit-utils/typescript/latest/api/modules/types_testing/).AlgoKitLogCaptureFixture

## Table of contents

### Properties

- [afterEach](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgoKitLogCaptureFixture/#aftereach)
- [beforeEach](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgoKitLogCaptureFixture/#beforeeach)

### Accessors

- [testLogger](/docs/algokit-utils/typescript/latest/api/interfaces/types_testing.AlgoKitLogCaptureFixture/#testlogger)

## Properties

### afterEach

• **afterEach**: () => `void`

Testing framework agnostic handler method to run after each test to reset the logger.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/types/testing.ts:158](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L158)

---

### beforeEach

• **beforeEach**: () => `void`

Testing framework agnostic handler method to run before each test to prepare the `testLogger` for that test.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/types/testing.ts:154](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L154)

## Accessors

### testLogger

• `get` **testLogger**(): [`TestLogger`](/docs/algokit-utils/typescript/latest/api/classes/testing.TestLogger/)

The test logger instance for the current test

#### Returns

[`TestLogger`](/docs/algokit-utils/typescript/latest/api/classes/testing.TestLogger/)

#### Defined in

[src/types/testing.ts:150](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L150)
