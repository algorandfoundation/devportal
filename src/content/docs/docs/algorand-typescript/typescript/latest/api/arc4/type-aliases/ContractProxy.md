---
title: ContractProxy
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/README/) / ContractProxy

> **ContractProxy**\<`TContract`\> = [`CompiledContract`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/CompiledContract/) & `object`

Defined in: [arc4/c2c.ts:79](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L79)

Conditional type which maps an ARC4 compatible contract to a proxy object which allows for constructing application call transactions for
all available ABI and bare methods. Also includes the compiled contract result data.

## Type declaration

### call

> **call**: \{ \[key in keyof TContract as key extends "approvalProgram" \| "clearStateProgram" ? never : TContract\[key\] extends AnyFunction ? key : never\]: ContractProxyMethod\<TContract\[key\]\> \}

Get methods for calling ABI and bare methods on the target contract

### bareCreate()

> **bareCreate**(`fields?`): [`ApplicationCallInnerTxn`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallInnerTxn/)

Create a bare application call itxn to create the contract.

#### Parameters

##### fields?

[`BareCreateApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/BareCreateApplicationCallFields/)

Specify values for transaction fields which should override the default values.

#### Returns

[`ApplicationCallInnerTxn`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallInnerTxn/)

## Type Parameters

### TContract

`TContract` _extends_ [`Contract`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Contract/)
