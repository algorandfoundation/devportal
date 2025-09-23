---
title: TestLogger
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [testing](/reference/algokit-utils-ts/api/modules/testing/) / TestLogger

[testing](/reference/algokit-utils-ts/api/modules/testing/).TestLogger

Exposes an AlgoKit logger which captures log messages, while wrapping an original logger.
This is useful for automated testing.

## Implements

- [`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [logs](#logs)
- [originalLogger](#originallogger)

### Accessors

- [capturedLogs](#capturedlogs)

### Methods

- [clear](#clear)
- [debug](#debug)
- [error](#error)
- [getLogSnapshot](#getlogsnapshot)
- [info](#info)
- [verbose](#verbose)
- [warn](#warn)

## Constructors

### constructor

• **new TestLogger**(`originalLogger?`): [`TestLogger`]()

Create a new test logger that wraps the given logger if provided.

#### Parameters

| Name              | Type                                                                      | Description                           |
| :---------------- | :------------------------------------------------------------------------ | :------------------------------------ |
| `originalLogger?` | [`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger) | The optional original logger to wrap. |

#### Returns

[`TestLogger`]()

#### Defined in

[src/testing/test-logger.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L16)

## Properties

### logs

• `Private` **logs**: `string`[]

#### Defined in

[src/testing/test-logger.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L10)

---

### originalLogger

• `Private` **originalLogger**: `undefined` \| [`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

#### Defined in

[src/testing/test-logger.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L9)

## Accessors

### capturedLogs

• `get` **capturedLogs**(): `string`[]

Returns all logs captured thus far.

#### Returns

`string`[]

#### Defined in

[src/testing/test-logger.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L22)

## Methods

### clear

▸ **clear**(): `void`

Clears all logs captured so far.

#### Returns

`void`

#### Defined in

[src/testing/test-logger.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L27)

---

### debug

▸ **debug**(`message`, `...optionalParams`): `void`

#### Parameters

| Name                | Type        |
| :------------------ | :---------- |
| `message`           | `string`    |
| `...optionalParams` | `unknown`[] |

#### Returns

`void`

#### Implementation of

Logger.debug

#### Defined in

[src/testing/test-logger.ts:89](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L89)

---

### error

▸ **error**(`message`, `...optionalParams`): `void`

#### Parameters

| Name                | Type        |
| :------------------ | :---------- |
| `message`           | `string`    |
| `...optionalParams` | `unknown`[] |

#### Returns

`void`

#### Implementation of

Logger.error

#### Defined in

[src/testing/test-logger.ts:73](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L73)

---

### getLogSnapshot

▸ **getLogSnapshot**(`config?`): `string`

Returns a captured log snapshot.
This helps ensure that the provided configuration items won't appear
with random values in the log snapshot, but rather will get substituted with predictable ids.

https://jestjs.io/docs/snapshot-testing#2-tests-should-be-deterministic

#### Parameters

| Name      | Type                                                                                              | Description                |
| :-------- | :------------------------------------------------------------------------------------------------ | :------------------------- |
| `config?` | [`LogSnapshotConfig`](/reference/algokit-utils-ts/api/interfaces/types_testinglogsnapshotconfig/) | The snapshot configuration |

#### Returns

`string`

The snapshotted logs.

**`Example`**

```typescript
const logger = new TestLogger()
...
expect(logger.getLogSnapshot()).toMatchSnapshot()
```

#### Defined in

[src/testing/test-logger.ts:47](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L47)

---

### info

▸ **info**(`message`, `...optionalParams`): `void`

#### Parameters

| Name                | Type        |
| :------------------ | :---------- |
| `message`           | `string`    |
| `...optionalParams` | `unknown`[] |

#### Returns

`void`

#### Implementation of

Logger.info

#### Defined in

[src/testing/test-logger.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L81)

---

### verbose

▸ **verbose**(`message`, `...optionalParams`): `void`

#### Parameters

| Name                | Type        |
| :------------------ | :---------- |
| `message`           | `string`    |
| `...optionalParams` | `unknown`[] |

#### Returns

`void`

#### Implementation of

Logger.verbose

#### Defined in

[src/testing/test-logger.ts:85](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L85)

---

### warn

▸ **warn**(`message`, `...optionalParams`): `void`

#### Parameters

| Name                | Type        |
| :------------------ | :---------- |
| `message`           | `string`    |
| `...optionalParams` | `unknown`[] |

#### Returns

`void`

#### Implementation of

Logger.warn

#### Defined in

[src/testing/test-logger.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L77)
