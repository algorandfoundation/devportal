---
title: ContractProxy
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / ContractProxy

> **ContractProxy**\<`TContract`\> = [`CompiledContract`](/reference/algorand-typescript/api/index/type-aliases/compiledcontract/) & `object`

Defined in: [arc4/c2c.ts:79](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L79)

Conditional type which maps an ARC4 compatible contract to a proxy object which allows for constructing application call transactions for
all available ABI and bare methods. Also includes the compiled contract result data.

## Type declaration

### call

> **call**: \{ \[key in keyof TContract as key extends "approvalProgram" \| "clearStateProgram" ? never : TContract\[key\] extends AnyFunction ? key : never\]: ContractProxyMethod\<TContract\[key\]\> \}

Get methods for calling ABI and bare methods on the target contract

### bareCreate()

> **bareCreate**(`fields?`): [`ApplicationCallInnerTxn`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallinnertxn/)

Create a bare application call itxn to create the contract.

#### Parameters

##### fields?

[`BareCreateApplicationCallFields`](BareCreateApplicationCallFields)

Specify values for transaction fields which should override the default values.

#### Returns

[`ApplicationCallInnerTxn`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallinnertxn/)

## Type Parameters

### TContract

`TContract` _extends_ [`Contract`](/reference/algorand-typescript/api/arc4/classes/contract/)
