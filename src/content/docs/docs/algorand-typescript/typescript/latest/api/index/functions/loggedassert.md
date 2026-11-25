---
editUrl: false
next: false
prev: false
title: "loggedAssert"
---

## Call Signature

> **loggedAssert**(`condition`, `code`, `options?`): `asserts condition`

Defined in: [util.ts:45](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L45)

Asserts that `condition` is truthy, logging a formatted error message before failing
if the condition is false.

The logged output follows the format `{prefix}:{code}` or `{prefix}:{code}:{message}`
and is compatible with ARC-56 and ARC-32 clients.

Note that this will generate extra bytecode, so it is strongly advised to keep your
messages and error codes short.

### Parameters

#### condition

`unknown`

The condition to assert; if false, logs an error and fails.

#### code

`string`

An error code. Must not contain `:`. Should be alphanumeric.

#### options?

An optional object containing the message and prefix for the error.

##### desc?

`string`

A plain description of the failure. When provided, it is used as the
                    error message in the contract's ARC-56 source info (instead of the ARC-65
                    string which is emitted by default as the ARC-56 comment).
                    It does not change the logged output, and since it is not embedded
                    in the compiled program it does not increase bytecode size.

##### message?

`string`

Message appended after the code. Must not contain `:`.
                       Defaults to no message.

##### prefix?

`"ERR"` \| `"AER"`

Error prefix, either `"ERR"` or `"AER"`. Defaults to `"ERR"`.

### Returns

`asserts condition`

## Call Signature

> **loggedAssert**(`condition`, `code`, `message`): `asserts condition`

Defined in: [util.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L64)

Asserts that `condition` is truthy, logging a formatted error message before failing
if the condition is false.

The logged output follows the format `ERR:{code}:{message}` and is compatible with
ARC-56 and ARC-32 clients.

Note that this will generate extra bytecode, so it is strongly advised to keep your
messages and error codes short.

### Parameters

#### condition

`unknown`

The condition to assert; if false, logs an error and fails.

#### code

`string`

An error code. Must not contain `:`. Should be alphanumeric.

#### message

`string`

Message appended after the code. Must not contain `:`.

### Returns

`asserts condition`
