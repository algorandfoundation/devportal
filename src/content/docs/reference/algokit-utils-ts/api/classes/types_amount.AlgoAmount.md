---
title: AlgoAmount
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/amount](/reference/algokit-utils-ts/api/modules/types_amount/) / AlgoAmount

[types/amount](/reference/algokit-utils-ts/api/modules/types_amount/).AlgoAmount

Wrapper class to ensure safe, explicit conversion between µAlgo, Algo and numbers

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [amountInMicroAlgo](#amountinmicroalgo)

### Accessors

- [algo](#algo)
- [algos](#algos)
- [microAlgo](#microalgo)
- [microAlgos](#microalgos)

### Methods

- [toString](#tostring)
- [valueOf](#valueof)
- [Algo](#algo-1)
- [Algos](#algos-1)
- [MicroAlgo](#microalgo-1)
- [MicroAlgos](#microalgos-1)

## Constructors

### constructor

• **new AlgoAmount**(`amount`): [`AlgoAmount`]()

Create a new `AlgoAmount` instance.

#### Parameters

| Name     | Type                                                                                                                                                         | Description                                                                                                      |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| `amount` | \{ `algos`: `number` \| `bigint` } \| \{ `algo`: `number` \| `bigint` } \| \{ `microAlgos`: `number` \| `bigint` } \| \{ `microAlgo`: `number` \| `bigint` } | An object specifying the amount in Algo or µALGO. Use the key 'algo' for Algo amounts and 'microAlgo' for µALGO. |

#### Returns

[`AlgoAmount`]()

A new instance of `AlgoAmount` representing the specified amount.

**`Example`**

```typescript
const amount = new AlgoAmount({ algo: 5 });
```

#### Defined in

[src/types/amount.ts:37](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L37)

## Properties

### amountInMicroAlgo

• `Private` **amountInMicroAlgo**: `bigint`

#### Defined in

[src/types/amount.ts:5](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L5)

## Accessors

### algo

• `get` **algo**(): `number`

Return the amount as a number in Algo

#### Returns

`number`

#### Defined in

[src/types/amount.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L23)

---

### algos

• `get` **algos**(): `number`

Return the amount as a number in Algo

#### Returns

`number`

#### Defined in

[src/types/amount.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L18)

---

### microAlgo

• `get` **microAlgo**(): `bigint`

Return the amount as a number in µAlgo

#### Returns

`bigint`

#### Defined in

[src/types/amount.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L13)

---

### microAlgos

• `get` **microAlgos**(): `bigint`

Return the amount as a number in µAlgo

#### Returns

`bigint`

#### Defined in

[src/types/amount.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L8)

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/types/amount.ts:50](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L50)

---

### valueOf

▸ **valueOf**(): `number`

valueOf allows you to use `AlgoAmount` in comparison operations such as `<` and `>=` etc.,
but it's not recommended to use this to convert to a number, it's much safer to explicitly call
the algos or microAlgos properties

#### Returns

`number`

#### Defined in

[src/types/amount.ts:58](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L58)

---

### Algo

▸ **Algo**(`amount`): [`AlgoAmount`]()

Create a `AlgoAmount` object representing the given number of Algo

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `amount` | `number` \| `bigint` |

#### Returns

[`AlgoAmount`]()

#### Defined in

[src/types/amount.ts:68](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L68)

---

### Algos

▸ **Algos**(`amount`): [`AlgoAmount`]()

Create a `AlgoAmount` object representing the given number of Algo

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `amount` | `number` \| `bigint` |

#### Returns

[`AlgoAmount`]()

#### Defined in

[src/types/amount.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L63)

---

### MicroAlgo

▸ **MicroAlgo**(`amount`): [`AlgoAmount`]()

Create a `AlgoAmount` object representing the given number of µAlgo

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `amount` | `number` \| `bigint` |

#### Returns

[`AlgoAmount`]()

#### Defined in

[src/types/amount.ts:78](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L78)

---

### MicroAlgos

▸ **MicroAlgos**(`amount`): [`AlgoAmount`]()

Create a `AlgoAmount` object representing the given number of µAlgo

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `amount` | `number` \| `bigint` |

#### Returns

[`AlgoAmount`]()

#### Defined in

[src/types/amount.ts:73](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L73)
