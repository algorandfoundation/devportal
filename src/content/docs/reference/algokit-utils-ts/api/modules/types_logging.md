---
title: types/logging
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/logging

## Table of contents

### Type Aliases

- [Logger](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

### Variables

- [consoleLogger](/reference/algokit-utils-ts/api/modules/types_logging/#consolelogger)
- [infoConsoleLogger](/reference/algokit-utils-ts/api/modules/types_logging/#infoconsolelogger)
- [nullLogger](/reference/algokit-utils-ts/api/modules/types_logging/#nulllogger)
- [verboseConsoleLogger](/reference/algokit-utils-ts/api/modules/types_logging/#verboseconsolelogger)
- [warningConsoleLogger](/reference/algokit-utils-ts/api/modules/types_logging/#warningconsolelogger)

## Type Aliases

### Logger

Ƭ **Logger**: `Object`

General purpose logger type, compatible with Winston and others.

#### Type declaration

| Name      | Type                                                              |
| :-------- | :---------------------------------------------------------------- |
| `debug`   | (`message`: `string`, ...`optionalParams`: `unknown`[]) => `void` |
| `error`   | (`message`: `string`, ...`optionalParams`: `unknown`[]) => `void` |
| `info`    | (`message`: `string`, ...`optionalParams`: `unknown`[]) => `void` |
| `verbose` | (`message`: `string`, ...`optionalParams`: `unknown`[]) => `void` |
| `warn`    | (`message`: `string`, ...`optionalParams`: `unknown`[]) => `void` |

#### Defined in

[src/types/logging.ts:5](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L5)

## Variables

### consoleLogger

• `Const` **consoleLogger**: [`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

A logger implementation that writes to console

#### Defined in

[src/types/logging.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L14)

---

### infoConsoleLogger

• `Const` **infoConsoleLogger**: [`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

#### Defined in

[src/types/logging.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L22)

---

### nullLogger

• `Const` **nullLogger**: [`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

A logger implementation that does nothing

#### Defined in

[src/types/logging.ts:47](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L47)

---

### verboseConsoleLogger

• `Const` **verboseConsoleLogger**: [`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

#### Defined in

[src/types/logging.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L30)

---

### warningConsoleLogger

• `Const` **warningConsoleLogger**: [`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

#### Defined in

[src/types/logging.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L38)
