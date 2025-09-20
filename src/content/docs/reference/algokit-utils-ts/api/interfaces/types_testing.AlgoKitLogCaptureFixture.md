---
title: AlgoKitLogCaptureFixture
slug: reference/algokit-utils-ts/api/interfaces/types_testingalgokitlogcapturefixture
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/testing](/reference/algokit-utils-ts/api/modules/types_testing/) / AlgoKitLogCaptureFixture



[types/testing](/reference/algokit-utils-ts/api/modules/types_testing/).AlgoKitLogCaptureFixture

## Table of contents

### Properties

- [afterEach](#aftereach)
- [beforeEach](#beforeeach)

### Accessors

- [testLogger](#testlogger)

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

___

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

• `get` **testLogger**(): [`TestLogger`](/reference/algokit-utils-ts/api/classes/testingtestlogger/)

The test logger instance for the current test

#### Returns

[`TestLogger`](/reference/algokit-utils-ts/api/classes/testingtestlogger/)

#### Defined in

[src/types/testing.ts:150](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/testing.ts#L150)