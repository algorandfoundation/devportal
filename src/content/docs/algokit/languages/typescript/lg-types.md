---
title: Types
---

Types in Algorand TypeScript can be divided into two camps, 'native' AVM types where the implementation is opaque, and it is up to the compiler and the AVM how the type is represented in memory; and 'ARC4 Encoded types' where the in memory representation is always a byte array, and the exact format is determined by the [ARC4 Spec](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004#encoding).

ARC4 defines an Application Binary Interface (ABI) for how data should be passed to and from a smart contract, and represents a sensible standard for how data should be represented at rest (eg. in Box storage or Application State). It is not necessarily the most optimal format for an in memory representation and for data which is being mutated. For this reason we offer both sets of types and a developer can choose the most appropriate one for their usage. As a beginner the native types will feel more natural to use, but it is useful to be aware of the encoded versions when it comes to optimizing your application.

## AVM Types

The most basic [types on the AVM](https://dev.algorand.co/concepts/smart-contracts/avm/#stack-types)
are `uint64` and `bytes`, representing unsigned 64-bit integers and byte arrays respectively.
These are represented by [`uint64`](./#uint64) and [`bytes`](./#bytes) in Algorand TypeScript.

There are further "bounded" types supported by the AVM, which are backed by these two simple primitives.
For example, `biguint` represents a variably sized (up to 512-bits), unsigned integer, but is actually
backed by a `byte[]`. This is represented by [`biguint`](./#biguint) in Algorand TypeScript.

### Uint64

`uint64` represents an unsigned 64-bit integer type that will error on both underflow (negative values) and overflows (values larger than 64-bit). It can be declared with a numeric literal and a type annotation of `uint64` or by using the `Uint64` factory method (think `number` (type) vs `Number` (a function for creating numbers))

```ts
import { Uint64, uint64 } from '@algorandfoundation/algorand-typescript';

const x: uint64 = 123;
demo(x);
// Type annotation is not required when `uint64` can be inferred from usage
demo(456);

function demo(y: uint64) {}
// `Uint64` constructor can be used to define `uint64` values which `number` cannot safely represent
const z = Uint64(2n ** 54n);

// No arg (returns 0), similar to Number()
demo(Uint64());
// Create from string representation (must be a string literal)
demo(Uint64('123456'));
// Create from a boolean
demo(Uint64(true));
// Create from a numeric expression
demo(Uint64(34 + 3435));
```

Math operations with the `uint64` work the same as EcmaScript's `number` type however due to a hard limitation in TypeScript, it is not possible to control the type of these expressions - they will always be inferred as `number`. As a result, a type annotation will be required making use of the expression value if the type cannot be inferred from usage.

```ts
import { Uint64, uint64 } from '@algorandfoundation/algorand-typescript';

function add(x: uint64, y: uint64): uint64 {
  return x + y; // uint64 inferred from function's return type
}
// uint64 inferred from assignment target
const x: uint64 = 123 + add(4, 5);

const a: uint64 = 50;

// Error because type of `b` will be inferred as `number`
const b = a * x;
// Ok
const c: uint64 = a * x;
// Ok
const d = Uint64(a * x);
```

### BigUint

`biguint` represents an unsigned integer of up to 512-bit. The leading `0` padding is variable and not guaranteed. Operations made using a `biguint` are more expensive in terms of [opcode budget](https://dev.algorand.co/concepts/smart-contracts/languages/teal/#dynamic-operational-cost) by an order of magnitude, as such - the `biguint` type should only be used when dealing with integers which are larger than 64-bit. A `biguint` can be declared with a bigint literal (A number with an `n` suffix) and a type annotation of `biguint`, or by using the `BigUint` factory method. The same constraints of the `uint64` type apply here with regards to required type annotations.

```ts
import { BigUint, bigint } from '@algorandfoundation/algorand-typescript';

const x: bigint = 123n;
demo(x);
// Type annotation is not required when `bigint` can be inferred from usage
demo(456n);

function demo(y: bigint) {}

// No arg (returns 0), similar to Number()
demo(BigUint());
// Create from string representation (must be a string literal)
demo(BigUint('123456'));
// Create from a boolean
demo(BigUint(true));
// Create from a numeric expression
demo(BigUint(34 + 3435));
```

### Bytes

`bytes` represents a variable length sequence of bytes up to a maximum length of 4096. Bytes values can be created from various string encodings using string literals using the `Bytes` factory function.

```ts
import { Bytes } from '@algorandfoundation/algorand-typescript';

const fromUtf8 = Bytes('abc');
const fromHex = Bytes.fromHex('AAFF');
const fromBase32 = Bytes.fromBase32('....');
const fromBase64 = Bytes.fromBase64('....');

const interpolated = Bytes`${fromUtf8}${fromHex}${fromBase32}${fromBase64}`;
const concatenated = fromUtf8.concat(fromHex).concat(fromBase32).concat(fromBase64);
```

### String

`string` literals and values are supported in Algorand TypeScript however most of the prototype is not implemented. Strings in EcmaScript are implemented using utf-16 characters and achieving semantic compatability for any prototype method which slices or splits strings based on characters would be non-trivial (and opcode expensive) to implement on the AVM with no clear benefit as string manipulation tasks can easily be performed off-chain. Algorand TypeScript APIs which expect a `bytes` value will often also accept a `string` value. In these cases, the `string` will be interpreted as a `utf8` encoded value.

```ts
const a = 'Hello';
const b = 'world';

const interpolate = `${a} ${b}`;
const concat = a + ' ' + b;
```

### Boolean

`bool` literals and values are supported in Algorand TypeScript. The `Boolean` factory function can be used to evaluate other values as `true` or `false` based on whether the underlying value is `truthy` or `falsey`.

```ts
import { uint64 } from '@algorandfoundation/algorand-typescript';

const one: uint64 = 1;
const zero: uint64 = 0;

const trueValues = [true, Boolean(one), Boolean('abc')] as const;
const falseValues = [false, Boolean(zero), Boolean('')] as const;
```

### Account, Asset, Application

These types represent the underlying Algorand entity and expose methods and properties for retrieving data associated with that entity. They are created by passing the relevant identifier to the respective factory methods.

```ts
import { Application, Asset, Account } from '@algorandfoundation/algorand-typescript';

const app = Application(123n); // Create from application id
const asset = Asset(456n); // Create from asset id
const account = Account('A7NMWS3NT3IUDMLVO26ULGXGIIOUQ3ND2TXSER6EBGRZNOBOUIQXHIBGDE'); // Create from account address
const account2 = Account(
  Bytes.fromHex('07DACB4B6D9ED141B17576BD459AE6421D486DA3D4EF2247C409A396B82EA221'),
); // Create from account public key bytes
```

They can also be used in ABI method parameters where they will be created referencing the relevant `foreign_*` array on the transaction. See [ARC4 reference types](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004#reference-types)

### Group Transactions

The group transaction types expose properties and methods for reading attributes of other transactions in the group. They can be created explicitly by calling `gtxn.Transaction(n)` where `n` is the index of the desired transaction in the group, or they can be used in ABI method signatures where the ARC4 router will take care of providing the relevant transaction specified by the client. They should not be confused with the [itxn](lg-itxns) namespace which contains types for composing inner transactions

```ts
import { gtxn, Contract } from '@algorandfoundation/algorand-typescript';

class Demo extends Contract {
  doThing(payTxn: gtxn.PayTxn): void {
    const assetConfig = gtxn.AssetConfigTxn(1);

    const txn = gtxn.Transaction(i);
    switch (txn.type) {
      case TransactionType.ApplicationCall:
        log(txn.appId.id);
        break;
      case TransactionType.AssetTransfer:
        log(txn.xferAsset.id);
        break;
      case TransactionType.AssetConfig:
        log(txn.configAsset.id);
        break;
      case TransactionType.Payment:
        log(txn.receiver);
        break;
      case TransactionType.KeyRegistration:
        log(txn.voteKey);
        break;
      default:
        log(txn.freezeAsset.id);
        break;
    }
  }
}
```

### Arrays

**Immutable**

```ts
const myArray: uint64[] = [1, 2, 3];
const myOtherArray = ['a', 'b', 'c'];
```

Arrays in Algorand TypeScript can be declared using the array literal syntax and are explicitly typed using either the `T[]` shorthand or `Array<T>` full name. The type can usually be inferred by uints will require a type hint. Native arrays are currently considered immutable (as if they were declared `readonly T[]`) as the AVM offers limited resources for storing mutable reference types in a heap. "Mutations" can be done using the pure methods available on the Array prototype.

```ts
let myArray: uint64[] = [1, 2, 3];

// Instead of .push
myArray = [...myArray, 4];

// Instead of index assignment
myArray = myArray.with(2, 3);
```

Similar to other supported native types, much of the full prototype of Array is not supported but this coverage may expand over time.

**Mutable**

```ts
import { MutableArray, uint64 } from '@algorandfoundation/algorand-typescript';

const myMutable = new MutableArray<uint64>();
myMutable.push(1);
addToArray(myMutable);
assert(myMutable.pop() === 4);

function addToArray(x: MutableArray<uint64>) {
  x.push(4);
}
```

Mutable arrays can be declared using the [MutableArray](api/index/classes/MutableArray) type. This type makes use of [scratch space](https://dev.algorand.co/concepts/smart-contracts/languages/teal/#scratch-space-usage) as a heap in order to provide an array type with 'pass by reference' semantics. It is currently limited to fixed size item types.

### Tuples

```ts
import { Uint64, Bytes } from '@algorandfoundation/algorand-typescript';

const myTuple = [Uint64(1), 'test', false] as const;

const myOtherTuple: [string, bytes] = ['hello', Bytes('World')];
const myOtherTuple2: readonly [string, bytes] = ['hello', Bytes('World')];
```

Tuples can be declared by appending the `as const` keywords to an array literal expression, or by adding an explicit type annotation. Tuples are considered immutable regardless of how they are declared meaning `readonly [T1, T2]` is equivalent to `[T1, T2]`. Including the `readonly` keyword will improve intellisense and TypeScript IDE feedback at the expense of verbosity.

### Objects

```ts
import { Uint64, Bytes, uint64 } from '@algorandfoundation/algorand-typescript';

type NamedObj = { x: uint64; y: uint64 };

const myObj = { a: Uint64(123), b: Bytes('test'), c: false };

function test(obj: NamedObj): uint64 {
  return (obj.x = obj.y);
}
```

Object types and literals are treated as named tuples. The types themselves can be declared with a name using a `type NAME = { ... }` expression, or anonymously using an inline type annotation `let x: { a: boolean } = { ... }`. If no type annotation is present, the type will be inferred from the assigned values. Object types are immutable and are treated as if they were declared with the `Readonly` helper type. i.e. `{ a: boolean }` is equivalent to `Readonly<{ a: boolean }>`. An object's property can be updated using a spread expression.

```ts
import { Uint64 } from '@algorandfoundation/algorand-typescript';

let obj = { first: 'John', last: 'Doh' };
obj = { ...obj, first: 'Jane' };
```

## ARC4 Encoded Types

ARC4 encoded types live in the `/arc4` module

Where supported, the native equivalent of an ARC4 type can be obtained via the `.native` property. It is possible to use native types in an ABI method and the router will automatically encode and decode these types to their ARC4 equivalent.

### Booleans

**Type:** `@algorandfoundation/algorand-typescript/arc4::Bool`
**Encoding:** A single byte where the most significant bit is `1` for `True` and `0` for `False`
**Native equivalent:** `bool`

### Unsigned ints

**Types:** `@algorandfoundation/algorand-typescript/arc4::UIntN`
**Encoding:** A big endian byte array of N bits
**Native equivalent:** `uint64` or `biguint`

Common bit sizes have also been aliased under `@algorandfoundation/algorand-typescript/arc4::UInt8`, `@algorandfoundation/algorand-typescript/arc4::UInt16` etc. A uint of any size between 8 and 512 bits (in intervals of 8bits) can be created using a generic parameter. `Byte` is an alias of `UintN<8>`

### Unsigned fixed point decimals

**Types:** `@algorandfoundation/algorand-typescript/arc4::UFixedNxM`
**Encoding:** A big endian byte array of N bits where `encoded_value = value / (10^M)`
**Native equivalent:** _none_

### Bytes and strings

**Types:** `@algorandfoundation/algorand-typescript/arc4::DynamicBytes` and `@algorandfoundation/algorand-typescript/arc4::Str`
**Encoding:** A variable length byte array prefixed with a 16-bit big endian header indicating the length of the data
**Native equivalent:** `bytes` and `string`

Strings are assumed to be utf-8 encoded and the length of a string is the total number of bytes, _not the total number of characters_.

### StaticBytes

**Types:** `@algorandfoundation/algorand-typescript/arc4::StaticBytes`
**Encoding:** A fixed length byte array
**Native equivalent:** `bytes`

Like `DynamicBytes` but the length header can be omitted as the data is assumed to be of the specified length.

### Static arrays

**Type:** `@algorandfoundation/algorand-typescript/arc4::StaticArray`
**Encoding:** See [ARC4 Container Packing](#arc4-container-packing)
**Native equivalent:** _none_

An ARC4 StaticArray is an array of a fixed size. The item type is specified by the first generic parameter and the size is specified by the second.

### Address

**Type:** `@algorandfoundation/algorand-typescript/arc4::Address`
**Encoding:** A byte array 32 bytes long
**Native equivalent:** `Account`

Address represents an Algorand address' public key, and can be used instead of `Account` when needing to
reference an address in an ARC4 struct, tuple or return type. It is a subclass of `StaticArray<Byte, 32>`

### Dynamic arrays

**Type:** `@algorandfoundation/algorand-typescript/arc4::DynamicArray`
**Encoding:** See [ARC4 Container Packing](#arc4-container-packing)
**Native equivalent:** _none_

An ARC4 DynamicArray is an array of a variable size. The item type is specified by the first generic parameter. Items can be added and removed via `.pop`, `.append`, and `.extend`.

The current length of the array is encoded in a 16-bit prefix similar to the `arc4.DynamicBytes` and `arc4.String` types

### Tuples

**Type:** `@algorandfoundation/algorand-typescript/arc4::Tuple`
**Encoding:** See [ARC4 Container Packing](#arc4-container-packing)
**Native equivalent:** TypeScript tuple

ARC4 Tuples are immutable statically sized arrays of mixed item types. Item types can be specified via generic parameters or inferred from constructor parameters.

### Structs

**Type:** `@algorandfoundation/algorand-typescript/arc4::Struct`
**Encoding:** See [ARC4 Container Packing](#arc4-container-packing)
**Native equivalent:** _None_

ARC4 Structs are named tuples. Items can be accessed via names instead of indexes. They are also mutable

### ARC4 Container Packing

ARC4 encoding rules are detailed explicitly in the [ARC](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004#encoding-rules). A summary is included here.

Containers are composed of a head and a tail portion, with a possible length prefix if the container length is dynamic.

```
[Length (2 bytes)][Head bytes][Tail bytes]
                  ^ Offsets are from the start of the head bytes
```

- Fixed length items (eg. bool, uintn, byte, or a static array of a fixed length item) are inserted directly into the head
- Variable length items (eg. bytes, string, dynamic array, or even a static array of a variable length item) are inserted into the tail. The head will include a 16-bit number representing the offset of the tail data, the offset is the total number of bytes in the head + the number of bytes preceding the tail data for this item (ie. the tail bytes of any previous items)
- Consecutive boolean values are packed into CEIL(N / 8) bytes where each bit will represent a single boolean value (big endian)
