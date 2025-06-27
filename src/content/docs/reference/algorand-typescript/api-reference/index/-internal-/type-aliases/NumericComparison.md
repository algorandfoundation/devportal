---
title: 'NumericComparison'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [\<internal\>](/reference/readme) / NumericComparison

# Type Alias: NumericComparison\<T\>

> **NumericComparison**\<`T`\>: `T` \| \{ `lessThan`: `T`; \} \| \{ `greaterThan`: `T`; \} \| \{ `greaterThanEq`: `T`; \} \| \{ `lessThanEq`: `T`; \} \| \{ `between`: \[`T`, `T`\]; \}

Defined in: [packages/algo-ts/src/util.ts:34](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L34)

Defines possible comparison expressions for numeric types

## Type Parameters

• **T**

## Type declaration

`T`

\{ `lessThan`: `T`; \}

### lessThan

> **lessThan**: `T`

Is the subject less than the specified value

\{ `greaterThan`: `T`; \}

### greaterThan

> **greaterThan**: `T`

Is the subject greater than the specified value

\{ `greaterThanEq`: `T`; \}

### greaterThanEq

> **greaterThanEq**: `T`

Is the subject greater than or equal to the specified value

\{ `lessThanEq`: `T`; \}

### lessThanEq

> **lessThanEq**: `T`

Is the subject less than or equal to the specified value

\{ `between`: \[`T`, `T`\]; \}

### between

> **between**: \[`T`, `T`\]

Is the subject between the specified values (inclusive)
