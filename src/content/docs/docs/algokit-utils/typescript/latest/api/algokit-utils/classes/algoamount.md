---
editUrl: false
next: false
prev: false
title: 'AlgoAmount'
---

Defined in: [src/amount.ts:2](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L2)

Wrapper class to ensure safe, explicit conversion between µAlgo, Algo and numbers

## Constructors

### Constructor

> **new AlgoAmount**(`amount`): `AlgoAmount`

Defined in: [src/amount.ts:35](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L35)

Create a new `AlgoAmount` instance.

#### Parameters

##### amount

An object specifying the amount in Algo or µALGO. Use the key 'algo' for Algo amounts and 'microAlgo' for µALGO.

\{ `algos`: `number` \| `bigint`; \} | \{ `algo`: `number` \| `bigint`; \} | \{ `microAlgos`: `number` \| `bigint`; \} | \{ `microAlgo`: `number` \| `bigint`; \}

#### Returns

`AlgoAmount`

A new instance of `AlgoAmount` representing the specified amount.

#### Example

```typescript
const amount = new AlgoAmount({ algo: 5 });
```

## Accessors

### algo

#### Get Signature

> **get** **algo**(): `number`

Defined in: [src/amount.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L21)

Return the amount as a number in Algo

##### Returns

`number`

---

### algos

#### Get Signature

> **get** **algos**(): `number`

Defined in: [src/amount.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L16)

Return the amount as a number in Algo

##### Returns

`number`

---

### microAlgo

#### Get Signature

> **get** **microAlgo**(): `bigint`

Defined in: [src/amount.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L11)

Return the amount as a number in µAlgo

##### Returns

`bigint`

---

### microAlgos

#### Get Signature

> **get** **microAlgos**(): `bigint`

Defined in: [src/amount.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L6)

Return the amount as a number in µAlgo

##### Returns

`bigint`

## Methods

### toString()

> **toString**(): `string`

Defined in: [src/amount.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L48)

#### Returns

`string`

---

### valueOf()

> **valueOf**(): `number`

Defined in: [src/amount.ts:56](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L56)

valueOf allows you to use `AlgoAmount` in comparison operations such as `<` and `>=` etc.,
but it's not recommended to use this to convert to a number, it's much safer to explicitly call
the algos or microAlgos properties

#### Returns

`number`

---

### Algo()

> `static` **Algo**(`amount`): `AlgoAmount`

Defined in: [src/amount.ts:66](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L66)

Create a `AlgoAmount` object representing the given number of Algo

#### Parameters

##### amount

`number` | `bigint`

#### Returns

`AlgoAmount`

---

### Algos()

> `static` **Algos**(`amount`): `AlgoAmount`

Defined in: [src/amount.ts:61](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L61)

Create a `AlgoAmount` object representing the given number of Algo

#### Parameters

##### amount

`number` | `bigint`

#### Returns

`AlgoAmount`

---

### MicroAlgo()

> `static` **MicroAlgo**(`amount`): `AlgoAmount`

Defined in: [src/amount.ts:76](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L76)

Create a `AlgoAmount` object representing the given number of µAlgo

#### Parameters

##### amount

`number` | `bigint`

#### Returns

`AlgoAmount`

---

### MicroAlgos()

> `static` **MicroAlgos**(`amount`): `AlgoAmount`

Defined in: [src/amount.ts:71](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L71)

Create a `AlgoAmount` object representing the given number of µAlgo

#### Parameters

##### amount

`number` | `bigint`

#### Returns

`AlgoAmount`
