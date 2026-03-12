---
editUrl: false
next: false
prev: false
title: "ABIReturn"
---

> **ABIReturn** = \{ `decodeError`: `undefined`; `method`: [`ABIMethod`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abimethod/); `rawReturnValue`: `Uint8Array`; `returnValue`: [`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/); \} \| \{ `decodeError?`: `Error`; `method`: [`ABIMethod`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abimethod/); `rawReturnValue?`: `undefined`; `returnValue?`: `undefined`; \}

Defined in: [packages/abi/src/abi-method.ts:54](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-method.ts#L54)

Represents an ABI method return value with parsed data.

## Type Declaration

\{ `decodeError`: `undefined`; `method`: [`ABIMethod`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abimethod/); `rawReturnValue`: `Uint8Array`; `returnValue`: [`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/); \}

### decodeError

> **decodeError**: `undefined`

### method

> **method**: [`ABIMethod`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abimethod/)

The method that was called.

### rawReturnValue

> **rawReturnValue**: `Uint8Array`

The raw return value as bytes.

This is the value from the last app call log with the first 4 bytes (the ABI return prefix) omitted.

### returnValue

> **returnValue**: [`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/)

The parsed ABI return value.

\{ `decodeError?`: `Error`; `method`: [`ABIMethod`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abimethod/); `rawReturnValue?`: `undefined`; `returnValue?`: `undefined`; \}

### decodeError?

> `optional` **decodeError**: `Error`

### method

> **method**: [`ABIMethod`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abimethod/)

### rawReturnValue?

> `optional` **rawReturnValue**: `undefined`

### returnValue?

> `optional` **returnValue**: `undefined`
