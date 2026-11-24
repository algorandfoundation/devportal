---
editUrl: false
next: false
prev: false
title: "AlgoAmount"
---

Defined in: [src/types/amount.ts:4](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L4)

Wrapper class to ensure safe, explicit conversion between µAlgo, Algo and numbers

## Constructors

### Constructor

> **new AlgoAmount**(`amount`): `AlgoAmount`

Defined in: [src/types/amount.ts:37](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L37)

Create a new `AlgoAmount` instance.

#### Parameters

##### amount

\{ `algos`: `number` \| `bigint`; \} \| \{ `algo`: `number` \| `bigint`; \} \| \{ `microAlgos`: `number` \| `bigint`; \} \| \{ `microAlgo`: `number` \| `bigint`; \}

An object specifying the amount in Algo or µALGO. Use the key 'algo' for Algo amounts and 'microAlgo' for µALGO.

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

Defined in: [src/types/amount.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L23)

Return the amount as a number in Algo

##### Returns

`number`

***

### algos

#### Get Signature

> **get** **algos**(): `number`

Defined in: [src/types/amount.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L18)

Return the amount as a number in Algo

##### Returns

`number`

***

### microAlgo

#### Get Signature

> **get** **microAlgo**(): `bigint`

Defined in: [src/types/amount.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L13)

Return the amount as a number in µAlgo

##### Returns

`bigint`

***

### microAlgos

#### Get Signature

> **get** **microAlgos**(): `bigint`

Defined in: [src/types/amount.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L8)

Return the amount as a number in µAlgo

##### Returns

`bigint`

## Methods

### toString()

> **toString**(): `string`

Defined in: [src/types/amount.ts:50](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L50)

#### Returns

`string`

***

### valueOf()

> **valueOf**(): `number`

Defined in: [src/types/amount.ts:58](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L58)

valueOf allows you to use `AlgoAmount` in comparison operations such as `<` and `>=` etc.,
but it's not recommended to use this to convert to a number, it's much safer to explicitly call
the algos or microAlgos properties

#### Returns

`number`

***

### Algo()

> `static` **Algo**(`amount`): `AlgoAmount`

Defined in: [src/types/amount.ts:68](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L68)

Create a `AlgoAmount` object representing the given number of Algo

#### Parameters

##### amount

`number` \| `bigint`

#### Returns

`AlgoAmount`

***

### Algos()

> `static` **Algos**(`amount`): `AlgoAmount`

Defined in: [src/types/amount.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L63)

Create a `AlgoAmount` object representing the given number of Algo

#### Parameters

##### amount

`number` \| `bigint`

#### Returns

`AlgoAmount`

***

### MicroAlgo()

> `static` **MicroAlgo**(`amount`): `AlgoAmount`

Defined in: [src/types/amount.ts:78](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L78)

Create a `AlgoAmount` object representing the given number of µAlgo

#### Parameters

##### amount

`number` \| `bigint`

#### Returns

`AlgoAmount`

***

### MicroAlgos()

> `static` **MicroAlgos**(`amount`): `AlgoAmount`

Defined in: [src/types/amount.ts:73](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/amount.ts#L73)

Create a `AlgoAmount` object representing the given number of µAlgo

#### Parameters

##### amount

`number` \| `bigint`

#### Returns

`AlgoAmount`
