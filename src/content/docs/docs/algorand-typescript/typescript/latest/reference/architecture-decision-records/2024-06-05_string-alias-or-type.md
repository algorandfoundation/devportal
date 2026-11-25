---
title: "String as alias or type"
---

# Architecture Decision Record - String as alias or type

- **Status**: Draft
- **Owner:** Tristan Menzel
- **Deciders**: Alessandro Cappellato (Algorand Foundation), Bruno Martins (Algorand Foundation), Rob Moore (MakerX)
- **Date created**: 2024-06-05
- **Date decided**: N/A
- **Date updated**: 2024-06-05

## Context

A byte array (`byte[]`) on the AVM can be one of three things
 - A big-endian number larger than uint64 (which we represent with biguint)
 - The bytes of a utf8 encoded string
 - General binary data (eg. a hash, or address etc) which may not be valid if interpreted as utf8 code points

ARC4 specifies `byte` as just an alias for `uint8` and `string` as an alias for `byte[]`. These aliases have no effect on the encoding of data but do communicate intent to consumers of the contract. Existing client generators expose an argument aliased with `string` as a string type native to the client platform (`string` for javascript and `str` for python) whereas an argument defined as `byte[]` will be exposed those most appropriate binary type for the client platform (`Uint8Array` for javascript and `bytes` for python). Although documented as just an alias, generated clients consider `string` and `byte[]` to be distinct types.

Algorand Python uses `algopy.Bytes` to represent a byte array and `algopy.String` to represent a utf8 string. The string type has a `.bytes` property to retrieve the underlying byte array and a byte array can be re-interpreted as a string with `String.from_bytes(...)`. In addition to these types, Algorand Python also has arc4 encoded equivalents `aglopy.arc4.DynamicBytes` and `algopy.arc4.String` which represent data encoded as per the arc4 spec.

The purpose of this ADR is to decide how strings are represented in Algorand TS.


## Requirements

- It must be possible to indicate that an argument or return value for an arc4 method expects, or returns an utf8 encoded string (ie. not just any array of bytes)

## Principles

- **[AlgoKit Guiding Principles](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/algokit.md#guiding-principles)** - specifically Seamless onramp, Leverage existing ecosystem, Meet devs where they are
- **[Algorand Python Principles](https://algorandfoundation.github.io/puya/principles.html#principles)**
- **[Algorand TypeScript Guiding Principles](/docs/algorand-typescript/typescript/latest/reference/readme/#guiding-principals)**

## Options

### Option 1 - Alias the bytes type

Introduce an alias for the existing bytes type. The alias is nothing but an alternative name and the types of `str` and `bytes` are interchangeable. This is loosely the approach taken by TealScript currently.

```ts
type str = bytes

function myFunction(value: str): bytes {
    return value // this is fine because str and bytes are the same thing
}

```

Pros:
 - A value of type `str` will be assignable/comparable to any property/parameter of type `bytes` (eg. asset.name)

Cons:
 - It would not be possible to evolve the api of a `str` independently from that of `bytes`. (eg. ability to index/slice/iterate chars instead of bytes)
 - No semantic separation of data that is 'a utf8 encoded string' and data that is general binary
 - Type aliases are not typically semantically significant in TypeScript, aliased symbols are followed back to the declaring type. Supporting this option would mean adding an exception to this behaviour.
   - For example: Adding `type Banana = uint64` and then using `Banana` everywhere instead of `uint64` should not affect the compiler output or type checking.

### Option 2 - str is its own type

Introduce a new type not directly interchangeable with bytes.

```ts
export type str = {
    readonly bytes: bytes

    startsWith(searchString: StringCompat): boolean
    endsWith(searchString: StringCompat): boolean
}

function myFunction(value: str): bytes {
    return value.bytes // Use bytes property to access underlying byte array
}
```

Pros:
- Comparisons/assignments between `bytes` and `str` encourage deliberate consideration of the implications (eg. I can't accidentally return the result of a sha_256 call from a method that should return a utf8 compliant `str`. I would need to consciously use `Str.fromBytes(...)`)
- Option to evolve `str` api as required (eg. add char indexing etc, or even validation of utf8 chars)

Cons:
- Have to add `.bytes` when assigning/comparing to `bytes` or use `from_bytes` when converting a byte array to a string
- `bytes` and `str` type might look the same for now leading to the question of what's the point of a separate type, and we may _never_ add additional string specific functionality.

### Option 3 - native string

Use native javascript strings for string values with the option to go from bytes to string via `.toString()` and string to bytes via `Bytes(yourString)`. Native APIs which expect bytes can take a union of `string | bytes` to cut back on boilerplate conversions. Explicit conversion would be required when comparing `bytes` to `string`. We would not touch `String.prototype` and using most methods on the `string` type will be a compiler error. If we need to add more string utility methods at a later date, these would be static methods (eg. `someUtility(myString, arg1, arg2)`) rather than instance methods added to the prototype.

```ts

function myFunction(value: string, other: bytes) {
    value.startsWith("") // allowed
    value[4] // not allowed (can't index by char)
    value.slice(3, 4) // not allowed
    log(value)
    log(`Interpolated ${value}`)
    return value === other.toString() && Bytes(value) === other && other.equals(value)
}

```

Pros:
 - Meets developer expectations - a string is a string
 - Can use literals
 - Can use `+` and `+=`

Cons:
 - Some operations will feel more verbose eg. getting the byte length will require `Bytes(value).length` since `value.length` should return the number of utf-16 code units to be semantically correct.

## Selected option

Option 3 has been selected. The benefits of meeting developer expectations outweigh the cons of not being able to support all operations.
