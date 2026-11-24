---
title: Algorand TypeScript Migration Guides
---

This page contains migration guides for updating to Algorand TypeScript 1.0.

- **[Algorand TypeScript beta to 1.0](#migrating-algorand-typescript-beta-to-10)** - If you have an existing Algorand TypeScript beta project, this guide details the breaking changes and new features you need to be aware of when upgrading to version 1.0.

- **[TEALScript to Algorand TypeScript 1.0](#migrating-tealscript-to-algorand-typescript-10)** - If you're migrating from TEALScript, this guide provides a mapping of TEALScript concepts to their Algorand TypeScript equivalents with code examples for common patterns.

## Migrating Algorand TypeScript beta to 1.0

This guide outlines the steps required to migrate your Algorand TypeScript projects from the beta version to version 1.0. Version 1.0 introduces significant improvements, including native mutable objects and arrays, simplified type names, and enhanced functionality for inner transactions. However, it also includes breaking changes that require updates to your codebase. This guide is divided into two sections: [Breaking Changes](#breaking-changes), which require action to ensure compatibility, and [New Features](#new-features), which highlight opportunities to leverage new functionality. Each section includes code examples to illustrate the changes.

### Migration Checklist

Use this checklist to work through the required changes when migrating from beta to 1.0:

- [ ] **[Object literals](#review-object-literals---add-readonly-or-as-const-if-immutability-needed)**: Add `readonly` or `as const` modifiers to object literals if you need to maintain immutable semantics
- [ ] **[Native arrays](#review-native-arrays---add-readonly-or-as-const-if-immutability-needed)**: Add `readonly` or `as const` modifiers to arrays if you need to maintain immutable semantics
- [ ] **[MutableArray → ReferenceArray](#rename-mutablearray-to-referencearray)**: Replace all `MutableArray` imports and usages with `ReferenceArray`
- [ ] **[Copy method](#replace-xxxcopy-calls-with-clonexxx)**: Replace all `.copy()` method calls with the `clone()` function
- [ ] **[ARC4 numeric types](#remove-n-and-nxm-suffixes-from-arc4-numeric-types)**: Remove 'N' and 'NxM' suffixes from ARC4 types
- [ ] **[gtxn/itxn imports](#update-gtxn-and-itxn-imports-to-use-namespaced-imports)**: Update direct imports to use namespaced imports
- [ ] **[Resource encoding](#update-methods-with-asset-application-or-account-parameters-to-handle-value-encoding)**: Add `resourceEncoding: 'index'` to `@abimethod` decorators for methods using `Asset`, `Application`, or `Account` parameters that need the old index-based behavior, or update implementation to use value-based encoding
- [ ] **[Test files](#rename-test-files-from-specortest.ts-to-algospecortest.ts)**: Rename test files from `.(spec|test).ts` to `.algo.(spec|test).ts`
- [ ] **[arc4EncodedLength](#rename-arc4encodedlength-function-to-sizeof)**: Replace `arc4EncodedLength` with `sizeOf`
- [ ] **[abiCall signature](#update-abicall-syntax-to-use-object-parameter)**: Update `arc4.abiCall(Method.prototype.method, { ... })` to `arc4.abiCall({ method: Method.prototype.method, ... })` or use type argument syntax
- [ ] **[interpretAsArc4](#rename-interpretasarc4-function-to-convertbytes)**: Replace `arc4.interpretAsArc4<T>(value)` with `arc4.convertBytes<T>(value, { strategy: 'validate' })` or `{ strategy: 'unsafe-cast' }`
- [ ] **[BoxRef](#replace-boxref-with-boxbytes)**: Replace `BoxRef` with `Box<bytes>` and update `.put()` to `.value =` and `.size` to `.length`
- [ ] **[.native property](#replace-native-property-with-asuint64-or-asbiguint-methods)**: Replace `.native` with `.asUint64()` for arc4.Uint types ≤64 bits, or `.asBigUint()` for larger types

### Breaking changes

#### Review object literals - add `readonly` or `as const` if immutability needed

Object literals are now mutable by default, which can be used without any changes. If you'd like to keep the same execution semantics as before, then apply a `readonly` or `as const` modifier to make them immutable.

**BEFORE - Algorand TypeScript beta**

```ts
import { uint64, Uint64 } from '@algorandfoundation/algorand-typescript';

// ... rest of code

// These types and objects are immutable
type Point = { y: uint64; x: uint64 };
const p1: Point = { x: 1, y: 2 };
const p2 = { x: Uint64(1), y: Uint64(2) };
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { uint64, Uint64 } from '@algorandfoundation/algorand-typescript';

// ... rest of code

// These types and objects are mutable
type Point = { y: uint64; x: uint64 };
const p1: Point = { x: 1, y: 2 };
const p2 = { x: Uint64(1), y: Uint64(2) };
p1.x = 3;
p2.x = 3;

// or if you want to maintain the previous execution semantics
// explicitly mark as `readonly` or `as const`
type Point = Readonly<{ y: uint64; x: uint64 }>;
const p1: Point = { x: 1, y: 2 };
const p2 = { x: Uint64(1), y: Uint64(2) } as const;
```

#### Review native arrays - add `readonly` or `as const` if immutability needed

Native arrays are now mutable by default, which can be used without any changes.
If you'd like to keep the same execution semantics as before, then apply a `readonly` or `as const` modifier to make them immutable.

**BEFORE - Algorand TypeScript beta**

```ts
import { uint64, Uint64 } from '@algorandfoundation/algorand-typescript'

// ... rest of code

// The arrays are immutable
const t1: uint64[] = [1, 2, 3];
const t2 = [Uint64(1), Uint64(2), Uint64(3)];
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { uint64, Uint64 } from '@algorandfoundation/algorand-typescript';

// ... rest of code

// The arrays are mutable
const t1: uint64[] = [1, 2, 3];
const t2 = [Uint64(1), Uint64(2), Uint64(3)];

t1[0] = 3;
t1.push(4);
t2[0] = 3;
t2.push(4);

// or if you want to maintain the previous execution semantics
// explicitly mark as `readonly` or `as const`
const t1: readonly uint64[] = [1, 2, 3];
const t2 = [Uint64(1), Uint64(2), Uint64(3)] as const;
```

#### Rename `MutableArray` to `ReferenceArray`

Now that native arrays are mutable by default, it was confusing to call the scratch slot backed arrays with reference semantics `MutableArray`, so they have been renamed.

**BEFORE - Algorand TypeScript beta**

```ts
import { uint64, MutableArray } from '@algorandfoundation/algorand-typescript'

// ... rest of code

const a = new MutableArray<uint64>();
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { uint64, ReferenceArray } from '@algorandfoundation/algorand-typescript';

// ... rest of code

const a = new ReferenceArray<uint64>();
```

#### Replace `xxx.copy()` calls with `clone(xxx)`

**BEFORE - Algorand TypeScript beta**

```ts
import { arc4 } from '@algorandfoundation/algorand-typescript'

// ... rest of code

public example(): void {
  const a = new arc4.StaticArray<arc4.UintN64, 3>(new arc4.UintN64(1), new arc4.UintN64(2), new arc4.UintN64(3));
  const b = a.copy();
}
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { arc4, clone } from '@algorandfoundation/algorand-typescript'

// ... rest of code

public example(): void {
  const a = new arc4.StaticArray<arc4.Uint64, 3>(new arc4.Uint64(1), new arc4.Uint64(2), new arc4.Uint64(3))
  const b = clone(a)
}
```

#### Remove 'N' and 'NxM' suffixes from ARC4 numeric types

The 'N' and 'NxM' suffixes have been removed from the ARC4 numeric types, which results in more natural type names.

**BEFORE - Algorand TypeScript beta**

```ts
import { arc4 } from '@algorandfoundation/algorand-typescript'

// ... rest of code

type User = {
  id: arc4.UintN16;
  score: arc4.UFixedNxM<32, 4>;
};

const user = {
  id: new arc4.UintN<16>(1234),
  score: new arc4.UFixedNxM<32, 4>('1.234'),
};
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { arc4 } from '@algorandfoundation/algorand-typescript'

// ... rest of code

type User = {
  id: arc4.Uint16;
  score: arc4.UFixed<32, 4>;
};

const user = {
  id: new arc4.Uint<16>(1234),
  score: new arc4.UFixed<32, 4>('1.234'),
};
```

#### Update `gtxn` and `itxn` imports to use namespaced imports

**BEFORE - Algorand TypeScript beta**

```ts
import type { PaymentTxn } from '@algorandfoundation/algorand-typescript/gtxn'

// ... rest of code

function makePayment(payment: PaymentTxn) {
  // ... implementation
}
```

**AFTER - Algorand TypeScript 1.0**

```ts
import type { gtxn } from '@algorandfoundation/algorand-typescript'

// ... rest of code

function makePayment(payment: gtxn.PaymentTxn) {
  // ... implementation
}
```

#### Update methods with Asset, Application, or Account parameters to handle value encoding

`resourceEncoding: 'index' | 'value'` option is added to `@abimethod` decorator config with `value` as default. Application, Asset and Account arguments are now passed by their uint64 id (Application and Asset) or bytes[32] address (Account) by default. Use `resourceEncoding: 'index'` for methods that need to preserve the previous index-based behaviour.

**BEFORE - Algorand TypeScript beta**

```ts
import {
  Account,
  Application,
  Asset,
  Txn,
  assert,
  op,
} from '@algorandfoundation/algorand-typescript'

// ... rest of code

test(asset: Asset, app: Application, acc: Account) {
  const assetIdx = op.btoi(Txn.applicationArgs(1))
  assert(asset === Txn.assets(assetIdx), 'expected asset to be passed by index')

  const appIdx = op.btoi(Txn.applicationArgs(2))
  assert(app === Txn.applications(appIdx), 'expected application to be passed by index')

  const accIdx = op.btoi(Txn.applicationArgs(3))
  assert(acc === Txn.accounts(accIdx), 'expected account to be passed by index')

  return [assetIdx, appIdx, accIdx] as const
}
```

**AFTER - Algorand TypeScript 1.0**

```ts
import {
  Account,
  Application,
  Asset,
  Txn,
  assert,
  op,
  abimethod,
} from '@algorandfoundation/algorand-typescript'

// ... rest of code

// use `index` resource encoding to keep old behaviour
@abimethod({ resourceEncoding: 'index' })
test(asset: Asset, app: Application, acc: Account) {
  const assetIdx = op.btoi(Txn.applicationArgs(1))
  assert(asset === Txn.assets(assetIdx), 'expected asset to be passed by index')

  const appIdx = op.btoi(Txn.applicationArgs(2))
  assert(app === Txn.applications(appIdx), 'expected application to be passed by index')

  const accIdx = op.btoi(Txn.applicationArgs(3))
  assert(acc === Txn.accounts(accIdx), 'expected account to be passed by index')

  return [assetIdx, appIdx, accIdx] as const
}
```

Alternatively, update the implementation to use default `value` resource encoding.

```ts
// ... rest of code

test(asset: Asset, app: Application, acc: Account): [Asset, Application, Account] {
  const assetId = op.btoi(Txn.applicationArgs(1))
  assert(asset === Asset(assetId), 'expected asset to be passed by value')

  const appId = op.btoi(Txn.applicationArgs(2))
  assert(app === Application(appId), 'expected application to be passed by value')

  const address = Txn.applicationArgs(3)
  assert(acc === Account(address), 'expected account to be passed by value')

  return [asset, app, acc]
}
```

#### Rename test files from `.(spec|test).ts` to `.algo.(spec|test).ts`.

Existing test files that need to run in a simulated AVM environment or import modules from `algorand-typescript` or `algorand-typescript-testing` packages should be renamed to have either the `.algo.spec.ts` or `.algo.test.ts` extension.

`puyaTsTransformer` will only provide the simulated AVM environment and executable implementations of `algorand-typescript` module to files with those extensions, excluding standard `.spec.ts` or `.test.ts` files (e.g. `e2e.spec.ts`).

This change can improve test performance by ensuring only relevant files are processed through `algorandTsTransformer`.

#### Rename `arc4EncodedLength` function to `sizeOf`

**BEFORE - Algorand TypeScript beta**

```ts
import { arc4EncodedLength, assert } from '@algorandfoundation/algorand-typescript'

// ... rest of code

assert(arc4EncodedLength<uint64>() === 8);
assert(arc4EncodedLength<boolean>() === 1);
assert(arc4EncodedLength<UintN<512>>() === 64);
assert(arc4EncodedLength<[StaticArray<Bool, 10>, boolean, boolean]>() === 3);
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { sizeOf, assert } from '@algorandfoundation/algorand-typescript'

// ... rest of code

assert(sizeOf<uint64>() === 8);
assert(sizeOf<boolean>() === 1);
assert(sizeOf<Uint<512>>() === 64);
assert(sizeOf<[StaticArray<Bool, 10>, boolean, boolean]>() === 3);
```

#### Update `abiCall` syntax to use object parameter

The signature of `abiCall` helper changes from

```ts
import { arc4 } from '@algorandfoundation/algorand-typescript'
import MyContract from './MyContract.algo'

// ... rest of code

arc4.abiCall(MyContract.prototype.myMethod, { 
  // ... implementation
})
```

to

```ts
import { arc4 } from '@algorandfoundation/algorand-typescript'
import MyContract from './MyContract.algo'

// ... rest of code

arc4.abiCall({ method: MyContract.prototype.myMethod, 
  // ... implementation
})
```

The new `method` property exists to provide a natural way to specify the `TMethod` generic parameter, but it is optional and alternatively the generic arg can be specified explicitly with

```ts
import { arc4 } from '@algorandfoundation/algorand-typescript'
import type { MyContract } from '../MyContract/contract.algo'

// ... rest of code

arc4.abiCall<typeof MyContract.prototype.myMethod>({ 
  // ... implementation
})
```

This form of invocation supports using type only imports `import type { MyContract } from '...'` which allow for circular references versus value imports which cannot be circular.

If, in some unforeseen circumstances, both a type argument and the `method` property are provided to the `abiCall` helper, the type argument takes precedence and the method specified by the type argument is called.

**BEFORE - Algorand TypeScript beta**

```ts
import { arc4, assert } from '@algorandfoundation/algorand-typescript'
import Hello, { HelloStubbed } from './Hello.algo'

// ... rest of code

const result2 = arc4.abiCall(Hello.prototype.greet, {
  appId: 1234,
  args: ['abi'],
}).returnValue;

assert(result2 === 'hello abi');

const result3 = arc4.abiCall(HelloStubbed.prototype.greet, {
  appId: 1234,
  args: ['stubbed'],
}).returnValue;
assert(result3 === 'hello stubbed');
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { arc4, assert } from '@algorandfoundation/algorand-typescript'
import Hello, { HelloStubbed } from './Hello.algo'

// ... rest of code

// provide method property
const result2 = arc4.abiCall({
  method: Hello.prototype.greet,
  appId: app,
  args: ['abi'],
}).returnValue;

assert(result2 === 'hello abi');

// or provide type argument, this approach supports using type only imports
const result3 = arc4.abiCall<typeof HelloStubbed.prototype.greet>({
  appId: app,
  args: ['stubbed'],
}).returnValue;
assert(result3 === 'hello stubbed');
```

#### Rename `interpretAsArc4` function to `convertBytes`

The function now accepts an `options` object with `strategy: 'unsafe-cast' | 'validate'` and an optional `prefix` parameter.

**BEFORE - Algorand TypeScript beta**

```ts
import { arc4 } from '@algorandfoundation/algorand-typescript'

// ... rest of code

const x = arc4.interpretAsArc4<arc4.UintN<32>>(someBytes);
const y = arc4.interpretAsArc4<arc4.Byte>(someBytes, "log");
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { arc4 } from '@algorandfoundation/algorand-typescript'

// ... rest of code

const x = arc4.convertBytes<arc4.Uint<32>>(someBytes, { strategy: 'validate' });
const y = arc4.convertBytes<arc4.Byte>(someBytes, { prefix: 'log', strategy: 'unsafe-cast' });
```

#### Replace `BoxRef` with `Box<bytes>`

`Box<bytes>` now includes all functionality previously available in `BoxRef`, including `extract`, `replace`, `resize`, and `splice` methods.

**BEFORE - Algorand TypeScript beta**

```ts
import { Contract, BoxRef, Bytes, bytes } from '@algorandfoundation/algorand-typescript'

// ... rest of code

const box = BoxRef({ key: 'test_key' });
box.create({ size: 32768 });

const boxValue = Bytes('FOO')
box.put(boxValue);

box.resize(Uint64(6))
box.splice(Uint64(3), Uint64(3), Bytes('BAR')) // FOOBAR
box.replace(Uint64(0), Bytes('BAR')) // BARBAR

const extracted = box.extract(0, 3);

box.resize(extracted.size);
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { Contract, Box, Bytes, bytes } from '@algorandfoundation/algorand-typescript'

// ... rest of code

const box = Box<bytes>({ key: 'test_key' })
box.create({ size: 32768 })

box.value = Bytes('FOO')

box.resize(Uint64(6))
box.splice(Uint64(3), Uint64(3), Bytes('BAR')) // FOOBAR
box.replace(Uint64(0), Bytes('BAR')) // BARBAR

const extracted = box.extract(Uint64(0), Uint64(3)) // BAR

box.resize(extracted.length)

return box.value
```

#### Replace `.native` property with `.asUint64()` or `.asBigUint()` methods

For `Uint` types larger than 64 bits, `.asUint64()` throws an overflow error if the value exceeds `uint64` bounds.

**BEFORE - Algorand TypeScript beta**

```ts
import { arc4 } from '@algorandfoundation/algorand-typescript'

// ... rest of code

const z = new arc4.UintN8(n);
const z_native = z.native;

const a = new arc4.UintN128(b);
const a_native = a.native;
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { arc4 } from '@algorandfoundation/algorand-typescript'

// ... rest of code

const z = new arc4.Uint<8>(n);
const z_native = z.asUint64();

const a = new arc4.Uint<128>(b);
const a_native = a.asBigUint();
```

### New features

#### Native mutable objects

```typescript
type Point = { x: uint64; y: uint64 };
const p: Point = { x: 1, y: 2 };
// or
const p: { x: uint64; y: uint64 } = { x: 1, y: 2 };
// or
const p = { x: Uint64(1), y: Uint64(2) };

p.x = 3;
p.y = 4;
```

#### Native mutable arrays

The native TypeScript array is mutable and supports both arc4 and native types. You typically don't need to use an `arc4.DynamicArray` anymore.

```ts
const a: Array<uint64> = [1, 2, 3];
// or
const a: uint64[] = [1, 2, 3];
// or
const a = [Uint64(1), Uint64(2), Uint64(3)];

a[0] = 10;
a.push(4);
```

#### New `FixedArray` type

A `FixedArray` type was added which has a fixed size, is mutable, and supports both arc4 and native types. You typically don't need to use an `arc4.StaticArray` anymore.

```ts
const x = new FixedArray<uint64, 4>(1, 2, 3, 4);
x[0] = 0;
```

#### `Bytes` type now supports fixed size byte sequences

An optional length generic type argument has been added for declaring statically sized byte sequences.

The original unbounded `bytes` type without the length generic remains available and no changes are required unless you want to take advantage of the new feature.

The bytes type can also be declared with a length and an optional `strategy` parameter with valid options of `'assert-length'` or `'unsafe-cast'` (defaults to `'assert-length'`) to indicate if it should assert the length of the input versus an `unsafe` casting which doesn't verify the input length. Due to covariance a `bytes<N>` value can always be assigned to a `bytes` target but in order to do the opposite, you will need to call `.toFixed` on the unbounded value. This method takes the same options parameter with a length and an optional `strategy` properties.

```ts
snapshotPublicKey = GlobalState<bytes<32>>();

const fromUtf8 = Bytes('abc', { length: 3 });

function padTo32(b: bytes<16>): bytes<32> {
  return b.bitwiseOr(bzero(32)).toFixed({ length: 32, strategy: 'unsafe-cast' });
}
```

#### Number and bigint types can be used when declaring consts

We now support `number` and `bigint` literals when they are assigned to a `const` variable. Basic expressions are also allowed as long as they evaluate to a compile-time constant.

:::note
`number` literals cannot exceed `Number.MAX_SAFE_INTEGER` as they will lose precision when parsed, but it is possible to write expressions that would evaluate to unsafe integers e.g. `2 ** 54`. This is because evaluation is handled by the compiler and performed using the `bigint` type.
:::

```typescript
const x = 123;
const y = x * 500;
const a = 2n ** 128n;
```

#### Tuples can be stored in boxes, global and local state

```typescript
boxA = Box<[string, bytes]>({ key: Bytes('A') });
boxA.value = ['Hello', Bytes('World')];
```

#### Box maps support composite key types

```typescript
boxMap = BoxMap<{ a: uint64; b: uint64 }, string>({ keyPrefix: '' });

boxMap({ a: 1, b: 2 }).value = 'test';
```

#### `Box` supports direct bytes access via `extract`, `replace`, `resize`, and `splice` methods

`extract`, `replace`, `resize`, and `splice` methods were added to the `Box` type for direct access to box bytes.

:::note
This enables direct manipulation of the bytes of any box, though it should be noted that mutations via this approach are not validated against the `Box` value type which could lead to box content being invalid for the expected type.
:::

```typescript
boxMap = BoxMap<Account, StaticArray<Uint8, 4>>({ keyPrefix: '' });
const boxForCaller = this.boxMap(Txn.sender);

boxForCaller.create();

boxForCaller.replace(0, new Uint8(123).bytes);
```

#### Inner transaction groups can be dynamically composed

The `itxnCompose` helper exposes three methods, `begin` and `next`, and `submit`. Multiple calls to `begin`, or calls to `next` that are not preceded by a `begin` will fail when executed on chain.

Use `GITxn` ops (e.g. `op.GITxn.lastLog(1)`) to read the result from any of these transactions.

```typescript
distribute(addresses: Address[], funds: gtxn.PaymentTxn, verifier: Application) {
  const share: uint64 = funds.amount / addresses.length
  const payFields = {
    type: TransactionType.Payment,
    amount: share,
    receiver: addresses[0].bytes,
  } satisfies PaymentComposeFields

  itxnCompose.begin(payFields)
  for (const i of urange(1, addresses.length)) {
    const addr = addresses[i]
    itxnCompose.next({
      ...payFields,

      receiver: addr.bytes,
    })
  }
  itxnCompose.next(VerifierContract.prototype.verify, {
    appId: verifier,
  })
  itxnCompose.next(
    itxn.assetConfig({
      assetName: 'abc',
    }),
  )

  itxnCompose.submit()
}
```

#### `not` expressions are now supported on `match` and `assertMatch`

```typescript
assertMatch(xObj, { x: { not: 3 } }, 'x should not be 3');
assertMatch(Txn, { sender: { not: Global.zeroAddress } });
```

#### `@readonly` decorator can be used instead of `@abimethod({ readonly: true })`

A new `@readonly` decorator has been added to provide a shorthand for `@abimethod({ readonly: true })`. Setting `readonly` flag via `@abimethod` decorator is still available to avoid needing multiple decorators when other options are also needed to be set e.g. `@arc4.abimethod({ allowActions: ['NoOp'], readonly: true })`.

```typescript
// use @abimethod decorator to set `readonly` flag
@abimethod({ readonly: true })
public getPreconditions(signature: bytes<64>): VotingPreconditions {
  ...
}

// or use @readonly decorator
@readonly
public getPreconditions(signature: bytes<64>): VotingPreconditions {
  ...
}
```

#### `validateEncoding` option is added to `@abimethod` decorator

`validateEncoding` option controls validation behaviour for the method and has valid values of `"args"` and `"unsafe-disabled"`.

If `"args"`, then ABI arguments are validated automatically to ensure they are encoded correctly.
If `"unsafe-disabled"`, then no automatic validation occurs. Arguments can instead be validated using the validateEncoding(...) function.

The default behaviour of this option can be controlled with the --validate-abi-args CLI flag.

```typescript
class AbiValidationAlgo extends Contract {
  @abimethod({ validateEncoding: 'args' })
  withValidation(value: bytes<32>) {
    return value.length;
  }

  @abimethod({ validateEncoding: 'unsafe-disabled' })
  withoutValidation(value: bytes<32>) {
    return value.length;
  }

  // performs validation on `value` parameter by default
  defaultValidation(value: bytes<32>) {
    return value.length;
  }
}
```

#### `validateEncoding` function can be used to ensure the value is well-formed

It performs validation to ensure the value is well-formed and throws errors if it is not.

```typescript
class AbiValidationAlgo extends Contract {
  @abimethod({ validateEncoding: 'unsafe-disabled' })
  manualValidation(value: bytes<32>) {
    validateEncoding(value);
    return value.length;
  }
}
```

#### `--validate-abi-args` and `--validate-abi-return` CLI flags are added

- `--validate-abi-args`: validates ABI transaction arguments by ensuring they are encoded correctly.
- `--validate-abi-return`: validates encoding of ABI return values when using convertBytes with 'log' `prefix` option, `arc4.abiCall`, and strongly typed contract to contract calls.

## Migrating TEALScript to Algorand TypeScript 1.0

This guide outlines the steps required to migrate your TEALScript projects to Algorand TypeScript 1.0. Algorand TypeScript 1.0 introduces significant improvements over TEALScript, including explicit imports for better IDE support, enhanced inner transaction interfaces, and more robust type safety. However, it also includes breaking changes that require updates to your codebase. This guide is divided into two sections: [Migration Checklist](#migration-checklist), which provides a systematic approach to the migration process, and [Migrations](#migrations), which includes detailed code examples for each major change. Each section includes code examples to illustrate the transformations.

### Migration Checklist

Use this checklist to work through the required changes when migrating from TEALScript to Algorand TypeScript 1.0:

- [ ] **[Add explicit imports](#add-explicit-imports-for-all-types-and-functions)**: Replace global namespace usage with explicit imports from `@algorandfoundation/algorand-typescript`
- [ ] **[Update event logging](#replace-eventlogger-with-emit-function)**: Replace `EventLogger` with `emit()` function
- [ ] **[Update box creation](#update-box-creation-syntax-to-use-object-parameter)**: Change `box.create(size)` to `box.create({ size })`
- [ ] **[Refactor inner transactions](#refactor-inner-transactions-to-use-itxn-namespace)**: Update to use `itxn` namespace methods (`itxn.payment()`, `itxn.assetConfig()`, etc.)
- [ ] **[Update typed method calls](#replace-sendmethodcall-with-arc4abicall)**: Replace `sendMethodCall` with `arc4.abiCall({ method, appId, args })`
- [ ] **[Update app creation](#use-arc4compilearc4-before-creating-apps)**: Use `arc4.compileArc4()` before creating apps, access schema via compiled object
- [ ] **[Update compiled contract access](#replace-static-methods-with-arc4compilearc4-for-program-access)**: Replace static methods (`Contract.approvalProgram()`) with `arc4.compileArc4()` result
- [ ] **[Update logic sigs](#rename-logic-to-program-and-add-return-statement)**: Rename `logic()` to `program()`, add return statement, use `op.arg()` for arguments
- [ ] **[Update template variables](#move-template-variables-outside-class-properties)**: Move template vars outside class properties, use `TemplateVar<uint64>('NAME')` syntax
- [ ] **[Add explicit type annotations](#add-explicit-type-annotations-to-all-numeric-values)**: Add `:uint64` type annotations to all arithmetic operations and intermediate values
- [ ] **[Update numeric types](#replace-typed-literals-with-arc4uint-constructors)**: Replace typed literals (`uint256`) with `arc4.Uint<256>` constructors and `biguint` for arithmetic
- [ ] **[Replace type casting](#replace-as-type-casts-with-constructor-calls)**: Replace `as uint8` with constructor calls like `new arc4.Uint<8>(value)`
- [ ] **[Update array/object references](#use-clone-for-array-and-object-copies)**: Replace mutable references with `clone()` function when needed
- [ ] **Update type names**: Use [Migration Table](#migration-table) to replace renamed types (`EventLogger` → `emit`, `AppID` → `Application`, `Address` → `Account`, etc.)

### Migration Table

| TEALScript                              | Algorand TypeScript                                                                                | Notes                                                                                                                                                                 |
| --------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `EventLogger`                           | [`emit`](https://dev.algorand.co/reference/algorand-typescript/api-reference/index/functions/emit) |                                                                                                                                                                       |
| `BoxKey`                                | \[`Box`\]                                                                                          |                                                                                                                                                                       |
| `Txn`                                   | `Transaction`                                                                                      |                                                                                                                                                                       |
| `PayTxn`                                | `PaymentTxn`                                                                                       |                                                                                                                                                                       |
| `AppCallTxn`                            | `ApplicationCallTxn`                                                                               |                                                                                                                                                                       |
| `KeyRegTxn`                             | `KeyRegistrationTxn`                                                                               |                                                                                                                                                                       |
| `OnCompletion`                          | `OnCompleteAction`                                                                                 |                                                                                                                                                                       |
| Eliptic curve opcodes (i.e `ecAdd`)     | Now under \[`ElipticCurve`\] (i.e. `ElipticCurve.add`)                                             |                                                                                                                                                                       |
| `GlobalStateKey`                        | `GlobalState`                                                                                      |                                                                                                                                                                       |
| `LocalStateKey`                         | `LocalState`                                                                                       |                                                                                                                                                                       |
| `GlobalStateMap`                        | Not yet supported                                                                                  |                                                                                                                                                                       |
| `LocalStateMap`                         | Not yet supported                                                                                  |                                                                                                                                                                       |
| `isOptedInToApp` and `isOptedInToAsset` | \[`isOptedIn`\]                                                                                    |                                                                                                                                                                       |
| `this.txn`                              | \[`Txn`\]                                                                                          |                                                                                                                                                                       |
| `this.app`                              | `Global.currentApplicationAddress`                                                                 | We can add support for `this.app`, but may be after 1.0                                                                                                               |
| `verify...Txn`                          | `assertMatch`                                                                                      | `assertMatch` can be used on any txn type or any object                                                                                                               |
| `globals`                               | \[`Global`\]                                                                                       |                                                                                                                                                                       |
| `StaticArray`                           | `FixedArray`                                                                                       | May not cover all cases. See the array section for more details                                                                                                       |
| `AppID`                                 | `Application`                                                                                      |                                                                                                                                                                       |
| `AssetID`                               | `Asset`                                                                                            |                                                                                                                                                                       |
| `Address`                               | `Account`                                                                                          | Algorand TypeScript does have an `arc4.Address` type, but `Account` should always be used instead. By default its ABI type will be `address` in ABI method signatures |
| `throw Error('error message')`          | `err('error message')`                                                                             |                                                                                                                                                                       |

### Migrations

#### Replace `EventLogger` with `emit()` function

**BEFORE - TEALScript**

```ts
class Swapper {
  swap = new EventLogger<{
    assetA: AssetID;
    assetB: AssetID;
  }>();

  doSwap(a: AssetID, b: AssetID) {
    this.swap.log({ assetA: a, assetB: b });
  }
}
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { uint64, emit } from '@algorandfoundation/algorand-typescript';

type Swap = { assetA: uint64; assetB: uint64 };

class Swapper {
  public doSwap(a: uint64, b: uint64): void {
    emit('swap', { assetA: a, assetB: b } as Swap);
  }
}
```

The event name can also be inferred from the name of a defined type

```ts
import { uint64, emit, Contract } from '@algorandfoundation/algorand-typescript';

type swap = { assetA: uint64; assetB: uint64 };

class Swapper extends Contract {
  doSwap(a: uint64, b: uint64) {
    emit<swap>({ assetA: a, assetB: b });
  }
}
```

#### Update box creation syntax to use object parameter

In TEALScript boxes are created via the create method: `create(size?: uint64)`.

In Algorand TypeScript the create method uses an object with a size parameter: `create(options?: { size?: uint64 })`

In both, the size will automatically be determined for fixed-length types, thus the size parameter is optional

#### Refactor inner transactions to use `itxn` namespace

The interfaces for forming, sending, and inspecting inner transactions have significantly improved with Algorand TypeScript, but the interfaces are quite different. They all revolve around the `itxn` namespace.

##### Sending a transaction

**BEFORE - TEALScript**

```ts
// ... rest of code

sendAssetConfig({
  total: 1000,
  assetName: 'AST1',
  unitName: 'unit'
  decimals: 3,
  manager: this.app.address,
  reserve: this.app.address
})
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { itxn, Global, log } from '@algorandfoundation/algorand-typescript';

// ... rest of code

const assetParams = itxn.assetConfig({
  total: 1000,
  assetName: 'AST1',
  unitName: 'unit',
  decimals: 3,
  manager: Global.currentApplicationAddress,
  reserve: Global.currentApplicationAddress,
});

const asset1_txn = assetParams.submit();
log(asset1_txn.createdAsset.id);
```

##### Sending a Transaction Group

**BEFORE - TEALScript**

```ts
// ... rest of code

this.pendingGroup.addAssetCreation({
  configAssetTotal: 1000,
  configAssetName: 'AST3',
  configAssetUnitName: 'unit',
  configAssetDecimals: 3,
  configAssetManager: this.app.address,
  configAssetReserve: this.app.address,
});

this.pendingGroup.addAppCall({
  approvalProgram: APPROVE,
  clearStateProgram: APPROVE,
  fee: 0,
});

const appCreateTxn = this.lastInnerGroup[0];
const asset3_txn = this.lastInnerGroup[1];

assert(appCreateTxn.createdApplicationID, 'app is created');
assert(asset3_txn.createdAssetID === 'AST3', 'asset3_txn is correct');
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { uint64, Contract, itxn, Global, assert, Bytes } from '@algorandfoundation/algorand-typescript'

// ... rest of code

const assetParams = itxn.assetConfig({
  total: 1000,
  assetName: 'AST3',
  unitName: 'unit',
  decimals: 3,
  manager: Global.currentApplicationAddress,
  reserve: Global.currentApplicationAddress,
});

const appCreateParams = itxn.applicationCall({
  approvalProgram: APPROVAL_PROGRAM,
  clearStateProgram: CLEAR_STATE_PROGRAM,
  fee: 0,
});

const [appCreateTxn, asset3_txn] = itxn.submitGroup(appCreateParams, assetParams);

assert(appCreateTxn.createdApp, 'app is created');
assert(asset3_txn.assetName === Bytes('AST3'), 'asset3_txn is correct');
```

#### Replace `sendMethodCall` with `arc4.abiCall`

In Algorand TypeScript, there is a specific `abiCall` method for typed contract-to-contract calls instead of a generic like in TEALScript.

These examples are for calling a contract method with the signature `greet(name: string): string` in a contract `Hello` that returns `"hello " + name`

**BEFORE - TEALScript**

```ts
// ... rest of code

const result = sendMethodCall<typeof Hello.prototype.greet>({
  applicationID: app,
  methodArgs: ['algo dev'],
});

assert(result === 'hello algo dev');
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { arc4, assert } from '@algorandfoundation/algorand-typescript'
import type { HelloStubbed } from './HelloWorld.algo'

// ... rest of code

const result3 = arc4.abiCall<typeof HelloStubbed.prototype.greet>({
  appId: 1234,
  args: ['algo dev'],
}).returnValue

assert(result3 === 'hello algo dev')
```

Alternatively, reference the method directly.

```ts
import { uint64, Contract, arc4, assert } from '@algorandfoundation/algorand-typescript'

// ... rest of code

const result = arc4.abiCall({
  method: Hello.prototype.greet,
  appId: 1234,
  args: ['algo dev'],
}).returnValue;

assert(result === 'hello algo dev');
```

#### Use `arc4.compileArc4()` before creating apps

In Algorand TypeScript, you must first explicitly compile a contract before creating it or access the programs/schema

**BEFORE - TEALScript**

```ts
sendMethodCall<typeof Greeter.prototype.createApplication>({
  clearStateProgram: Greeter.clearProgram(),
  approvalProgram: Greeter.approvalProgram(),
  globalNumUint: Greeter.schema.global.numUint,
  methodArgs: ['hello'],
});

const app = this.itxn.createdApplicationId;

const result = sendMethodCall<typeof Greeter.prototype.greet>({
  applicationID: app,
  methodArgs: ['world'],
});

assert(result == 'hello world');
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { Contract, arc4, assert } from '@algorandfoundation/algorand-typescript';
import Greeter from './Greeter.algo';

// // First explicitly compile the app
const compiled = arc4.compileArc4(Greeter);

const app = arc4.abiCall({
  method: compiled.call.createApplication,
  args: ['hello'],
  globalNumUint: compiled.globalUints,
}).itxn.createdApp;

const result = arc4.abiCall({
  method: compiled.call.greet,
  args: ['world'],
  appId: app,
}).returnValue;

assert(result === 'hello world');
```

#### Replace static methods with `arc4.compileArc4()` for program access

TEALScript contracts have static methods for getting the contract programs and schema. In Algorand TypeScript, you must first explicitly
compile the contract and then use the resulting object to access program information.

**BEFORE - TEALScript**

```ts
// Access program information directly via static methods
sendMethodCall<typeof Greeter.prototype.createApplication>({
  clearStateProgram: Greeter.clearProgram(),
  approvalProgram: Greeter.approvalProgram(),
  globalNumUint: Greeter.schema.global.numUint,
  methodArgs: ['hello'],
});
```

**AFTER - Algorand TypeScript 1.0**

```ts
// First explicitly compile the app
const compiled = arc4.compileArc4(Greeter);

// Then access program information on the compiled object
const app = arc4.abiCall({
  method: compiled.call.createApplication,
  args: ['hello'],
  globalNumUint: compiled.globalUints,
}).itxn.createdApp;
```

#### Rename `logic()` to `program()` and add return statement

In TEALScript, logic sigs must implement the `logic` method which may take one or more arguments which map to the lsig arguments when forming the transaction. All lsigs are approved unless an error occurs. Algorand TypeScript also requires implementation of the `program` method but it may not take an arguments and must return a `boolean` or `uint64` indicating whether the transaction is approved or not.

**BEFORE - TEALScript**

```ts
class DangerousPaymentLsig extends LogicSig {
  logic(amt: uint64) {
    assert(this.txn.amount === amt);
  }
}
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { op, LogicSig, Txn } from '@algorandfoundation/algorand-typescript';

class DangerousPaymentLsig extends LogicSig {
  program() {
    const amt = op.btoi(op.arg(0));
    return Txn.amount === amt;
  }
}
```

#### Move template variables outside class properties

In TEALScript, template variables must be properties of a contract. In Algorand TypeScript, they can be defined like any other variable.

**BEFORE - TEALScript**

```ts
class AppCaller extends LogicSig {
  APP_ID = TemplateVar<AppID>();

  logic(): void {
    assert(this.txn.applicationID === this.APP_ID);
  }
}
```

**AFTER - Algorand TypeScript 1.0**

```ts
import {
  LogicSig,
  Txn,
  TemplateVar,
  assert,
  uint64,
} from '@algorandfoundation/algorand-typescript';

class AppCaller extends LogicSig {
  program(): boolean {
    assert(Txn.applicationId.id === TemplateVar<uint64>('APP_ID'));
    return true;
  }
}
```

They can also exist outside of contracts and re-used across multiple contracts.

```ts
// ... imports and other code

const APP_ID = TemplateVar<uint64>('APP_ID');

class AppCaller extends LogicSig {
  program(): boolean {
    assert(Txn.applicationId.id === APP_ID);
    return true;
  }
}
```

#### Add explicit imports for all types and functions

In TEALScript, all of the type are injecting into the global namespace. This means no importing is required for most functions and objects. Algorand TypeScript, however, requires explicit importing of every type, allowing for better LSP discovery.

**BEFORE - TEALScript**

```ts
import { LogicSig } from '@algorandfoundation/tealscript';

class AppCaller extends LogicSig {
  logic(): void {
    // No need to import assert
    assert(this.txn.applicationID === 1234);
  }
}
```

**AFTER - Algorand TypeScript 1.0**

```ts
import {
  LogicSig,
  Txn,
  assert,
  uint64,
  TemplateVar,
} from '@algorandfoundation/algorand-typescript';

class AppCaller extends LogicSig {
  program(): boolean {
    assert(Txn.applicationId.id === APP_ID);
    return true;
  }
}
```

#### Add explicit type annotations to all numeric values

##### Add `:uint64` type annotations to arithmetic operations

Both TEALScript and Algorand TypeScript have a `uint64` type, but Algorand TypeScript disallows any types to be resolved as `number`. This means all arithmetic values must be explicitly typed as `uint64`, otherwise they will have the `number` type which is not allowed.

**BEFORE - TEALScript**

```ts
// ... rest of code

add(a: uint64, b: uint64): uint64 {
  // Type not needed for sum
  const sum = a + b;
  return sum;
}
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { uint64 } from '@algorandfoundation/algorand-typescript';

// ... rest of code

add(a: uint64, b: uint64): uint64 {
  // The type is required for sum
  const sum: uint64 = a + b;
  return sum;
}

```

##### Replace typed literals with `arc4.Uint` constructors

TEALScript supports typed numeric literals for most common uint types, such as `uint8`, `uint16`, `uint256`, etc. In Algorand TypeScript, the arc4.Uint constructors must be used.

**BEFORE - TEALScript**

```ts
// ... rest of code

addOne(n: uint256): uint256 {
  const one: uint256 = 1;
  const sum = n + one;
  return sum;
}
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { arc4, biguint } from '@algorandfoundation/algorand-typescript'

// ... rest of code

addOne(n: arc4.Uint<256>): arc4.Uint<256> {
  // Need to explicitly use Uint<256> constructor to get uint256 and use biguint to perform arithmetic
  const one = 1n;
  const sum: biguint = n.asBigUint() + one + 2n;
  return new arc4.Uint<256>(sum);
}
```

:::note
In Algorand TypeScript, it's generally best to use `biguint` for intermediate values until the final value needs to be encoded as a specific Uint type.
:::

##### Use `biguint` for intermediate values to avoid overflow checks

In TEALScript, overflow checks do not occur until the value is encoded (returned, logged, put into an array/object). In Algorand TypeScript, overflow checking occurs whenever the `Uint` constructor is used. Since overflow checking is fairly expensive, it is recommended to not use the `Uint` type until it needs to be encoded.

**BEFORE - TEALScript**

```ts
// ... rest of code

addToNumber(n: uint8) {
  assert(n != 0)
  const x: uint8 = 255
  const sum = n + x // Intermediate value of overflows the max uint8, but not checked here

  // final returned value is within max value of uint8, so no error
  return sum - x
}
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { uint64, arc4, biguint } from '@algorandfoundation/algorand-typescript'

// ... rest of code

addToNumber(n: arc4.Uint<8>) {
  // Use biguint for intermediate values which can go up to u512
  const x: biguint = 255n
  const sum: biguint = n.asBigUint() + x

  return new arc4.Uint8(sum - x)
}
```

#### Replace `as` type casts with constructor calls

In TEALScript, the `as` keyword is used to cast values as different types. Much like regular typescript, the `as` keyword in Algorand TypeScript cannot change runtime behavior. This means constructors must be used instead of `as`

**BEFORE - TEALScript**

```ts
// ... rest of code

convertNumber(n: uint64): uint8 {
  return n as uint8
}
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { uint64, arc4 } from '@algorandfoundation/algorand-typescript'

// ... rest of code

convertNumber(n: uint64): arc4.Uint<8> {
  return new arc4.Uint<8>(n)
}
```

#### Use `clone()` for array and object copies

TEALScript allows developers to create mutable references to arrays and objects, even when nested. Algorand TypeScript, however, does not allow this. Any new variables must copy the array or object.

**BEFORE - TEALScript**

```ts
// ... rest of code

const a: uint64[] = [1, 2, 3];
const b = a;
b.push(4);

assert(a === b); // a and b are referencing the same array
```

**AFTER - Algorand TypeScript 1.0**

```ts
import { uint64, clone, assertMatch } from '@algorandfoundation/algorand-typescript'

// ... rest of code

const a: uint64[] = [1, 2, 3]
const b = clone(a)
b.push(4)

assertMatch(a, [1, 2, 3])
assertMatch(b, [1, 2, 3, 4]) // a and b are different arrays
```
