---
editUrl: false
next: false
prev: false
title: "AlgoKitLogCaptureFixture"
---

Defined in: [src/testing/types.ts:151](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L151)

## Properties

### afterEach()

> **afterEach**: () => `void`

Defined in: [src/testing/types.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L161)

Testing framework agnostic handler method to run after each test to reset the logger.

#### Returns

`void`

***

### beforeEach()

> **beforeEach**: () => `void`

Defined in: [src/testing/types.ts:157](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L157)

Testing framework agnostic handler method to run before each test to prepare the `testLogger` for that test.

#### Returns

`void`

## Accessors

### testLogger

#### Get Signature

> **get** **testLogger**(): [`TestLogger`](/algokit-utils-ts/api/subpaths/testing/classes/testlogger/)

Defined in: [src/testing/types.ts:153](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/types.ts#L153)

The test logger instance for the current test

##### Returns

[`TestLogger`](/algokit-utils-ts/api/subpaths/testing/classes/testlogger/)
