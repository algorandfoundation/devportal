---
editUrl: false
next: false
prev: false
title: "TestLogger"
---

Defined in: [src/testing/test-logger.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L8)

Exposes an AlgoKit logger which captures log messages, while wrapping an original logger.
This is useful for automated testing.

## Implements

- `Logger`

## Constructors

### Constructor

> **new TestLogger**(`originalLogger?`): `TestLogger`

Defined in: [src/testing/test-logger.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L16)

Create a new test logger that wraps the given logger if provided.

#### Parameters

##### originalLogger?

`Logger`

The optional original logger to wrap.

#### Returns

`TestLogger`

## Accessors

### capturedLogs

#### Get Signature

> **get** **capturedLogs**(): `string`[]

Defined in: [src/testing/test-logger.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L22)

Returns all logs captured thus far.

##### Returns

`string`[]

## Methods

### clear()

> **clear**(): `void`

Defined in: [src/testing/test-logger.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L27)

Clears all logs captured so far.

#### Returns

`void`

***

### debug()

> **debug**(`message`, ...`optionalParams`): `void`

Defined in: [src/testing/test-logger.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L80)

#### Parameters

##### message

`string`

##### optionalParams

...`unknown`[]

#### Returns

`void`

#### Implementation of

`Logger.debug`

***

### error()

> **error**(`message`, ...`optionalParams`): `void`

Defined in: [src/testing/test-logger.ts:64](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L64)

#### Parameters

##### message

`string`

##### optionalParams

...`unknown`[]

#### Returns

`void`

#### Implementation of

`Logger.error`

***

### getLogSnapshot()

> **getLogSnapshot**(`config?`): `string`

Defined in: [src/testing/test-logger.ts:47](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L47)

Returns a captured log snapshot.
This helps ensure that the provided configuration items won't appear
 with random values in the log snapshot, but rather will get substituted with predictable ids.

https://jestjs.io/docs/snapshot-testing#2-tests-should-be-deterministic

#### Parameters

##### config?

[`LogSnapshotConfig`](/algokit-utils-ts/api/subpaths/testing/interfaces/logsnapshotconfig/)

The snapshot configuration

#### Returns

`string`

The snapshotted logs.

#### Example

```typescript
const logger = new TestLogger()
...
expect(logger.getLogSnapshot()).toMatchSnapshot()
```

***

### info()

> **info**(`message`, ...`optionalParams`): `void`

Defined in: [src/testing/test-logger.ts:72](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L72)

#### Parameters

##### message

`string`

##### optionalParams

...`unknown`[]

#### Returns

`void`

#### Implementation of

`Logger.info`

***

### verbose()

> **verbose**(`message`, ...`optionalParams`): `void`

Defined in: [src/testing/test-logger.ts:76](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L76)

#### Parameters

##### message

`string`

##### optionalParams

...`unknown`[]

#### Returns

`void`

#### Implementation of

`Logger.verbose`

***

### warn()

> **warn**(`message`, ...`optionalParams`): `void`

Defined in: [src/testing/test-logger.ts:68](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L68)

#### Parameters

##### message

`string`

##### optionalParams

...`unknown`[]

#### Returns

`void`

#### Implementation of

`Logger.warn`
