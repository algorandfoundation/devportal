---
title: types/logging
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / types/logging



## Table of contents

### Type Aliases

- [Logger](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

### Variables

- [consoleLogger](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#consolelogger)
- [infoConsoleLogger](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#infoconsolelogger)
- [nullLogger](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#nulllogger)
- [verboseConsoleLogger](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#verboseconsolelogger)
- [warningConsoleLogger](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#warningconsolelogger)

## Type Aliases

### Logger

Ƭ **Logger**: `Object`

General purpose logger type, compatible with Winston and others.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debug` | (`message`: `string`, ...`optionalParams`: `unknown`[]) => `void` |
| `error` | (`message`: `string`, ...`optionalParams`: `unknown`[]) => `void` |
| `info` | (`message`: `string`, ...`optionalParams`: `unknown`[]) => `void` |
| `verbose` | (`message`: `string`, ...`optionalParams`: `unknown`[]) => `void` |
| `warn` | (`message`: `string`, ...`optionalParams`: `unknown`[]) => `void` |

#### Defined in

[src/types/logging.ts:5](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L5)

## Variables

### consoleLogger

• `Const` **consoleLogger**: [`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

A logger implementation that writes to console

#### Defined in

[src/types/logging.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L14)

___

### infoConsoleLogger

• `Const` **infoConsoleLogger**: [`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

#### Defined in

[src/types/logging.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L22)

___

### nullLogger

• `Const` **nullLogger**: [`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

A logger implementation that does nothing

#### Defined in

[src/types/logging.ts:47](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L47)

___

### verboseConsoleLogger

• `Const` **verboseConsoleLogger**: [`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

#### Defined in

[src/types/logging.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L30)

___

### warningConsoleLogger

• `Const` **warningConsoleLogger**: [`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

#### Defined in

[src/types/logging.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L38)