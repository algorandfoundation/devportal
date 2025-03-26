---
title: ARC4 Types
---

These types are available under the `arc4` namespace. Refer to the [ARC4 specification](https://arc.algorand.foundation/ARCs/arc-0004) for more details on the spec.

```{hint}
Test execution context provides _value generators_ for ARC4 types. To access their _value generators_, use `{context_instance}.any.arc4` property. See more examples below.
```

```{note}
For all `arc4` types with and without respective _value generator_, instantiation can be performed directly. If you have a suggestion for a new _value generator_ implementation, please open an issue in the [`algorand-typescript-testing`](https://github.com/algorandfoundation/algorand-typescript-testing) repository or contribute by following the [contribution guide](https://github.com/algorandfoundation/algorand-typescript-testing/blob/main/CONTRIBUTING).
```

```ts
import { arc4 } from '@algorandfoundation/algorand-typescript';
import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing';

// Create the context manager for snippets below
const ctx = new TestExecutionContext();
```

## Unsigned Integers

```ts
// Integer types
const uint8Value = new arc4.UintN8(255);
const uint16Value = new arc4.UintN16(65535);
const uint32Value = new arc4.UintN32(4294967295);
const uint64Value = new arc4.UintN64(18446744073709551615n);

// Generate a random unsigned arc4 integer with default range
const uint8 = ctx.any.arc4.uintN8();
const uint16 = ctx.any.arc4.uintN16();
const uint32 = ctx.any.arc4.uintN32();
const uint64 = ctx.any.arc4.uintN64();
const biguint128 = ctx.any.arc4.uintN128();
const biguint256 = ctx.any.arc4.uintN256();
const biguint512 = ctx.any.arc4.uintN512();

// Generate a random unsigned arc4 integer with specified range
const uint8Custom = ctx.any.arc4.uintN8(10, 100);
const uint16Custom = ctx.any.arc4.uintN16(1000, 5000);
const uint32Custom = ctx.any.arc4.uintN32(100000, 1000000);
const uint64Custom = ctx.any.arc4.uintN64(1000000000, 10000000000);
const biguint128Custom = ctx.any.arc4.uintN128(1000000000000000, 10000000000000000n);
const biguint256Custom = ctx.any.arc4.uintN256(
  1000000000000000000000000n,
  10000000000000000000000000n,
);
const biguint512Custom = ctx.any.arc4.uintN512(
  10000000000000000000000000000000000n,
  10000000000000000000000000000000000n,
);
```

## Address

```ts
// Address type
const addressValue = new arc4.Address('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ');

// Generate a random address
const randomAddress = ctx.any.arc4.address();

// Access native underlaying type
const native = randomAddress.native;
```

## Dynamic Bytes

```ts
// Dynamic byte string
const bytesValue = new arc4.DynamicBytes('Hello, Algorand!');

// Generate random dynamic bytes
const randomDynamicBytes = ctx.any.arc4.dynamicBytes(123); // n is the number of bits in the arc4 dynamic bytes
```

## String

```ts
// UTF-8 encoded string
const stringValue = new arc4.Str('Hello, Algorand!');

// Generate random string
const randomString = ctx.any.arc4.str(12); // n is the number of bits in the arc4 string
```

```ts
// test cleanup
ctx.reset();
```
