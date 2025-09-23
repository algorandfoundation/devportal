---
title: types/logging
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/logging

## Table of contents

### Type Aliases

- [Logger](#logger)

### Variables

- [consoleLogger](#consolelogger)
- [infoConsoleLogger](#infoconsolelogger)
- [nullLogger](#nulllogger)
- [verboseConsoleLogger](#verboseconsolelogger)
- [warningConsoleLogger](#warningconsolelogger)

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

• `Const` **consoleLogger**: [`Logger`](#logger)

A logger implementation that writes to console

#### Defined in

[src/types/logging.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L14)

---

### infoConsoleLogger

• `Const` **infoConsoleLogger**: [`Logger`](#logger)

#### Defined in

[src/types/logging.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L22)

---

### nullLogger

• `Const` **nullLogger**: [`Logger`](#logger)

A logger implementation that does nothing

#### Defined in

[src/types/logging.ts:47](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L47)

---

### verboseConsoleLogger

• `Const` **verboseConsoleLogger**: [`Logger`](#logger)

#### Defined in

[src/types/logging.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L30)

---

### warningConsoleLogger

• `Const` **warningConsoleLogger**: [`Logger`](#logger)

#### Defined in

[src/types/logging.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logging.ts#L38)
