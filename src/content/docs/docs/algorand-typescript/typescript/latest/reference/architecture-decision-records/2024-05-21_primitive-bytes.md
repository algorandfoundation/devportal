---
title: "Primitive bytes"
---

# Architecture Decision Record - Primitive bytes

- **Status**: Draft
- **Owner:** Tristan Menzel
- **Deciders**: Alessandro Cappellato (Algorand Foundation), Joe Polny (Algorand Foundation), Rob Moore (MakerX)
- **Date created**: 2024-05-21
- **Date decided**: N/A
- **Date updated**: 2024-05-31

## Context

See [Architecture Decision Record - Primitive integer types](/docs/algorand-typescript/typescript/latest/reference/architecture-decision-records/2024-05-21_primitive-bytes/2024-05-21_primitive-integer-types/) for related decision and context.

The AVM's only non-integer type is a variable length byte array. When _not_ being interpreted as a `biguint`, leading zeros are significant and length is constant unless explicitly manipulated. Strings can only be represented in the AVM if they are encoded as bytes. The AVM supports byte literals in the form of base16, base64, and UTF-8 encoded strings. Once a literal has been parsed, the AVM has no concept of the original encoding or of UTF-8 characters. As a result, whilst a byte array can be indexed to receive a single byte (or a slice of bytes); it cannot be indexed to return a single UTF-8 _character_ - unless one assumes all characters in the original string were ASCII (i.e. single byte) characters.

Algorand Python has specific [Bytes and String types](https://algorandfoundation.github.io/puya/lg-types.html#avm-types) that have semantics that exactly match the AVM semantics. Python allows for operator overloading so these types also use native operators (where they align to functionality in the underlying AVM).

## Requirements

- Support bytes AVM type
- Semantic compatibility between AVM execution and TypeScript execution (e.g. in unit tests)

## Principles

- **[AlgoKit Guiding Principles](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/algokit.md#guiding-principles)** - specifically Seamless onramp, Leverage existing ecosystem, Meet devs where they are
- **[Algorand Python Principles](https://algorandfoundation.github.io/puya/principles.html#principles)**
- **[Algorand TypeScript Guiding Principles](/docs/algorand-typescript/typescript/latest/reference/architecture-decision-records/guiding-principles/)**

## Options

### Option 1 - Direct use of native EcmaScript types

EcmaScript provides two relevant types for bytes and strings.

- **string**: The native string type. Supports arbitrary length, concatenation, indexation/slicing of characters plus many utility methods (upper/lower/startswith/endswith/charcodeat/trim etc). Supports concat with binary `+` operator.
- **Uint8Array**: A variable length mutable array of 8-bit numbers. Supports indexing/slicing of 'bytes'.

```ts
const b1 = 'somebytes'

const b2 = new Uint8Array([1, 2, 3, 4])

const b3 = b1 + b1
```

Whilst binary data is often a representation of a utf-8 string, it is not always - so direct use of the string type is not a natural fit. It doesn't allow us to represent alternative encodings (b16/b64) and the existing api surface is very 'string' centric. Much of the api would also be expensive to implement on the AVM leading to a bunch of 'dead' methods hanging off the type (or a significant amount of work implementing all the methods). The signatures of these methods also use `number` which is [not a semantically relevant type](/docs/algorand-typescript/typescript/latest/reference/architecture-decision-records/2024-05-21_primitive-bytes/2024-05-21_primitive-integer-types/).

Achieving semantic compatability with EcmaScript's `String` type would also be very expensive as it uses utf-16 encoding underneath whilst an ABI string is utf-8 encoded. A significant number of ops (and program size) would be required to convert between the two. If we were to ignore this and use utf-8 at runtime, apis such as `.length` would return different results. For example `"😄".length` in ES returns `2` whilst utf-8 encoding would yield `1` codepoint or `4` bytes, similarly indexing and slicing would yield different results. We would also need a way to specify non-utf-8 bytes values. Eg. from base16 or base64.

The Uint8Array type is fit for purpose as an encoding mechanism but the API is not as friendly as it could be for writing declarative contracts. The `new` keyword feels unnatural for something that is ostensibly a primitive type. The fact that it is mutable also complicates the implementation the compiler produces for the AVM.

### Option 2 - Branded strings (TEALScript approach)

TEALScript uses a branded `string` to represent `bytes` and native `string` to represent UTF-8 bytes. Base64/Base16 encoding/decoding is performed with specific methods.

```typescript
const someString = 'foo'
const someHexValue = hex('0xdeadbeef') // branded "bytes"
```

Bytes and UTF-8 strings are typed via branded `string` types. UTF-8 strings are the most common use case for strings, thus have the JavaScript `String` prototype functions when working with byteslice, which provides a familiar set of function signatures. This option also enables the usage of `+` for concatenation.

To differentiate between ABI `string` and AVM `byteslice`, a branded type, `bytes`, can be used to represent non-encoded byteslices that may or may not be UTF-8 strings.

Additional functions can be used when wanting to have string literals of a specific encoding represent a string or byteslice.

The downsides of using `string` are listed in Option 1.

### Option 3 - Define a class to represent Bytes

A `Bytes` class is defined with a very specific API tailored to operations which are available on the AVM:

```ts
class Bytes {
  constructor(v: string) {
    this.v = v
  }

  concat(other: Bytes): Bytes {
    return new Bytes(this.v + other.v)
  }

  at(x: uint64): Bytes {
    return new Bytes(this.v[x])
  }
  
  static fromHex(v: string): Bytes {
      
  }
  
  static fromBase64(v: string): Bytes {
      
  }
  

  /* etc */
}


```

This solution provides great type safety and requires no transpilation to run _correctly_ on Node.js. However, non-primitive types in Node.js have equality checked by reference. Again the `new` keyword feels unnatural. Due to lack of overloading, `+` will not work as expected however concatenations do not require the same understanding of "order of operations" and nesting as numeric operations, so a `concat` method isn't as unwieldy (but still isn't idiomatic).

```ts
const a = new Bytes("Hello")
const b = new Bytes("World")
const ab = a.concat(b)

function testValue(x: Bytes) {
  // No compile error, but will work on reference not value
  switch (x) {
    case a:
      return b
    case b:
      return a
  }
  return new Bytes('default')
}
```

To have equality checks behave as expected we would need a transpilation step to replace bytes values in certain expressions with a primitive type.

### Option 4 - Implement bytes as a class but define it as a type + factory

We can iron out some of the rough edges of using a class by only exposing a factory method for `Bytes` and a resulting type `bytes`. This removes the need for the `new` keyword and lets us use a 'primitive looking' type alias (`bytes` versus `Bytes` - much like `string` and `String`). We can use [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) to improve the user experience of multipart concat expressions in lieu of having the `+` operator.

```ts
export type bytes = {
  readonly length: uint64

  at(i: Uint64Compat): bytes

  concat(other: BytesCompat): bytes
} & symbol

export function Bytes(value: TemplateStringsArray, ...replacements: BytesCompat[]): bytes
export function Bytes(value: BytesCompat): bytes
export function Bytes(value: BytesCompat | TemplateStringsArray, ...replacements: BytesCompat[]): bytes {
  /* implementation */
}

const a = Bytes('Hello')
const b = Bytes.fromHex('ABFF')
const c = Bytes.fromBase64('...')
const d = Bytes.fromInts(255, 123, 28, 20)
const e = Bytes`${a} World!`

function testValue(x: bytes, y: bytes): bytes {
  return Bytes`${x} and ${y}`
}


```

Having `bytes` behave like a primitive value type (value equality) whilst not _actually_ being a primitive is not strictly semantically compatible with EcmaScript however the lowercase type names (plus factory with no `new` keyword) communicates the intention of it being a primitive value type and there is an existing precedence of introducing new value types to the language in a similar pattern (`bigint` and `BigInt`). Essentially - if EcmaScript were to have a primitive bytes type, this is most likely what it would look like.

## Preferred option

Option 3 can be excluded because the requirement for a `new` keyword feels unnatural for representing a primitive value type.

Option 1 and 2 are not preferred as they make maintaining semantic compatibility with EcmaScript impractical.

Option 4 gives us the most natural feeling api whilst still giving us full control over the api surface. It doesn't support the `+` operator, but supports interpolation and `.concat` which gives us most of what `+` provides other than augmented assignment (ie. `+=`). 

## Selected option

Option 4 has been selected as the best option
