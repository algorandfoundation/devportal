---
title: 'urange'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / urange

# Function: urange()

## Call Signature

> **urange**(`stop`): [`IterableIterator`](/arc4/-internal-/interfaces/iterableiterator)\<[`uint64`](/reference/type-aliases/uint64)\>

Defined in: [packages/algo-ts/src/util.ts:138](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L138)

Generates an iterable sequence from 0...stop inclusive

### Parameters

#### stop

[`Uint64Compat`](/reference/type-aliases/uint64compat)

The stop number of the sequence

### Returns

[`IterableIterator`](/arc4/-internal-/interfaces/iterableiterator)\<[`uint64`](/reference/type-aliases/uint64)\>

## Call Signature

> **urange**(`start`, `stop`): [`IterableIterator`](/arc4/-internal-/interfaces/iterableiterator)\<[`uint64`](/reference/type-aliases/uint64)\>

Defined in: [packages/algo-ts/src/util.ts:144](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L144)

Generates an iterable sequence from start...stop inclusive

### Parameters

#### start

[`Uint64Compat`](/reference/type-aliases/uint64compat)

The start number of the sequence

#### stop

[`Uint64Compat`](/reference/type-aliases/uint64compat)

The stop number of the sequence

### Returns

[`IterableIterator`](/arc4/-internal-/interfaces/iterableiterator)\<[`uint64`](/reference/type-aliases/uint64)\>

## Call Signature

> **urange**(`start`, `stop`, `step`): [`IterableIterator`](/arc4/-internal-/interfaces/iterableiterator)\<[`uint64`](/reference/type-aliases/uint64)\>

Defined in: [packages/algo-ts/src/util.ts:151](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L151)

Generates an iterable sequence from start...stop inclusive with increments of size step

### Parameters

#### start

[`Uint64Compat`](/reference/type-aliases/uint64compat)

The start number of the sequence

#### stop

[`Uint64Compat`](/reference/type-aliases/uint64compat)

The stop number of the sequence

#### step

[`Uint64Compat`](/reference/type-aliases/uint64compat)

The step size of the sequence

### Returns

[`IterableIterator`](/arc4/-internal-/interfaces/iterableiterator)\<[`uint64`](/reference/type-aliases/uint64)\>
