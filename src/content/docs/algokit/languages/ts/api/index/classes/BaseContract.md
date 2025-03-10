---
title: Class: `abstract` BaseContract
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [index](../README) / BaseContract



Defined in: [packages/algo-ts/src/base-contract.ts:9](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L9)

The base type for all Algorand TypeScript contracts

## Extended by

- [`Contract`](../../arc4/classes/Contract)

## Constructors

### new BaseContract()

> **new BaseContract**(): [`BaseContract`](BaseContract)

#### Returns

[`BaseContract`](BaseContract)

## Methods

### approvalProgram()

> `abstract` **approvalProgram**(): `boolean` \| [`uint64`](../type-aliases/uint64)

Defined in: [packages/algo-ts/src/base-contract.ts:13](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L13)

The program to be run when the On Completion Action is != ClearState (3)

#### Returns

`boolean` \| [`uint64`](../type-aliases/uint64)

***

### clearStateProgram()

> **clearStateProgram**(): `boolean` \| [`uint64`](../type-aliases/uint64)

Defined in: [packages/algo-ts/src/base-contract.ts:18](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L18)

The program to be run when the On Completion Action is == ClearState (3)

#### Returns

`boolean` \| [`uint64`](../type-aliases/uint64)