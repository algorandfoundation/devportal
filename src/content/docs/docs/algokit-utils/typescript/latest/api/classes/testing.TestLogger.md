---
title: TestLogger
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [testing](/docs/algokit-utils/typescript/latest/api/modules/testing/) / TestLogger



[testing](/docs/algokit-utils/typescript/latest/api/modules/testing/).TestLogger

Exposes an AlgoKit logger which captures log messages, while wrapping an original logger.
This is useful for automated testing.

## Implements

- [`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

## Table of contents

### Constructors

- [constructor](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/#constructor)

### Properties

- [logs](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/#logs)
- [originalLogger](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/#originallogger)

### Accessors

- [capturedLogs](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/#capturedlogs)

### Methods

- [clear](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/#clear)
- [debug](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/#debug)
- [error](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/#error)
- [getLogSnapshot](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/#getlogsnapshot)
- [info](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/#info)
- [verbose](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/#verbose)
- [warn](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/#warn)

## Constructors

### constructor

• **new TestLogger**(`originalLogger?`): [`TestLogger`](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/)

Create a new test logger that wraps the given logger if provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `originalLogger?` | [`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger) | The optional original logger to wrap. |

#### Returns

[`TestLogger`](/docs/algokit-utils/typescript/latest/api/classes/testingtestlogger/)

#### Defined in

[src/testing/test-logger.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L16)

## Properties

### logs

• `Private` **logs**: `string`[]

#### Defined in

[src/testing/test-logger.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L10)

___

### originalLogger

• `Private` **originalLogger**: `undefined` \| [`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

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

___

### debug

▸ **debug**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `...optionalParams` | `unknown`[] |

#### Returns

`void`

#### Implementation of

Logger.debug

#### Defined in

[src/testing/test-logger.ts:89](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L89)

___

### error

▸ **error**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `...optionalParams` | `unknown`[] |

#### Returns

`void`

#### Implementation of

Logger.error

#### Defined in

[src/testing/test-logger.ts:73](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L73)

___

### getLogSnapshot

▸ **getLogSnapshot**(`config?`): `string`

Returns a captured log snapshot.
This helps ensure that the provided configuration items won't appear
 with random values in the log snapshot, but rather will get substituted with predictable ids.

https://jestjs.io/docs/snapshot-testing#2-tests-should-be-deterministic

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`LogSnapshotConfig`](/docs/algokit-utils/typescript/latest/api/interfaces/types_testinglogsnapshotconfig/) | The snapshot configuration |

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

___

### info

▸ **info**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `...optionalParams` | `unknown`[] |

#### Returns

`void`

#### Implementation of

Logger.info

#### Defined in

[src/testing/test-logger.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L81)

___

### verbose

▸ **verbose**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `...optionalParams` | `unknown`[] |

#### Returns

`void`

#### Implementation of

Logger.verbose

#### Defined in

[src/testing/test-logger.ts:85](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L85)

___

### warn

▸ **warn**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `...optionalParams` | `unknown`[] |

#### Returns

`void`

#### Implementation of

Logger.warn

#### Defined in

[src/testing/test-logger.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/testing/test-logger.ts#L77)