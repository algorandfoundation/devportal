---
editUrl: false
next: false
prev: false
title: "AlgoKitLogCaptureFixture"
---

Defined in: [src/types/testing.ts:148](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L148)

## Properties

### afterEach

> **afterEach**: () => `void`

Defined in: [src/types/testing.ts:158](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L158)

Testing framework agnostic handler method to run after each test to reset the logger.

#### Returns

`void`

***

### beforeEach

> **beforeEach**: () => `void`

Defined in: [src/types/testing.ts:154](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L154)

Testing framework agnostic handler method to run before each test to prepare the `testLogger` for that test.

#### Returns

`void`

## Accessors

### testLogger

#### Get Signature

> **get** **testLogger**(): [`TestLogger`](/docs/algokit-utils/typescript/latest/api/testing/classes/testlogger/)

Defined in: [src/types/testing.ts:150](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L150)

The test logger instance for the current test

##### Returns

[`TestLogger`](/docs/algokit-utils/typescript/latest/api/testing/classes/testlogger/)
