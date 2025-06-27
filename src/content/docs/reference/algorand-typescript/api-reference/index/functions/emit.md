---
title: 'emit'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / emit

# Function: emit()

## Call Signature

> **emit**\<`TEvent`\>(`event`): `void`

Defined in: [packages/algo-ts/src/arc-28.ts:22](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc-28.ts#L22)

Emit an arc28 event log using either an ARC4Struct type or a named object type.
Object types must have an ARC4 equivalent type.

Anonymous types cannot be used as the type name is used to determine the event prefix

### Type Parameters

• **TEvent** _extends_ [`Record`](/reference/-internal-/type-aliases/record)\<`string`, `any`\>

### Parameters

#### event

`TEvent`

An ARC4Struct instance, or a plain object with a named type

### Returns

`void`

### Examples

```ts
class Demo extends Struct<{ a: UintN64 }> {}
emit(new Demo({ a: new UintN64(123) }));
```

```ts
type Demo = { a: uint64 };
emit<Demo>({ a: 123 });
// or
const d: Demo = { a: 123 };
emit(d);
```

## Call Signature

> **emit**\<`TProps`\>(`eventName`, ...`eventProps`): `void`

Defined in: [packages/algo-ts/src/arc-28.ts:36](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc-28.ts#L36)

Emit an arc28 event log using an explicit name and inferred property/field types.
Property types must be ARC4 or have an ARC4 equivalent type.

### Type Parameters

• **TProps** _extends_ `any`[]

### Parameters

#### eventName

`string`

The name of the event (must be a compile time constant)

#### eventProps

...`TProps`

A set of event properties (order is significant)

### Returns

`void`

### Examples

```ts
emit('Demo', new UintN64(123));
```

```ts
const a: uint64 = 123;
emit('Demo', a);
```
