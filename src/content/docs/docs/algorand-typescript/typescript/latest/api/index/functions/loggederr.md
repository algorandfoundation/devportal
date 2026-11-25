---
editUrl: false
next: false
prev: false
title: "loggedErr"
---

## Call Signature

> **loggedErr**(`code`, `options?`): `never`

Defined in: [util.ts:95](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L95)

Logs a formatted ARC-65 error message and immediately fails the transaction.

Equivalent to `loggedAssert(false, code, {message, prefix})`.

The logged output follows the format `{prefix}:{code}` or `{prefix}:{code}:{message}`
and is compatible with ARC-56 and ARC-32 clients.

Note that this will generate extra bytecode, so it is strongly advised to keep your
messages and error codes short.

### Parameters

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

`never`

## Call Signature

> **loggedErr**(`code`, `message`): `never`

Defined in: [util.ts:110](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L110)

Logs a formatted ARC-65 error message and immediately fails the transaction.

Equivalent to `loggedAssert(false, code, {message, prefix})`.

The logged output follows the format `ERR:{code}:{message}` and is compatible with
ARC-56 and ARC-32 clients.

Note that this will generate extra bytecode, so it is strongly advised to keep your
messages and error codes short.

### Parameters

#### code

`string`

An error code. Must not contain `:`. Should be alphanumeric.

#### message

`string`

Message appended after the code. Must not contain `:`.

### Returns

`never`
