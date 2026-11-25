---
editUrl: false
next: false
prev: false
title: "ContractProxy"
---

> **ContractProxy**\<`TContract`\> = [`CompiledContract`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/compiledcontract/) & `object`

Defined in: [arc4/c2c.ts:79](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L79)

Conditional type which maps an ARC4 compatible contract to a proxy object which allows for constructing application call transactions for
all available ABI and bare methods. Also includes the compiled contract result data.

## Type Declaration

### call

> **call**: \{ \[key in keyof TContract as key extends "approvalProgram" \| "clearStateProgram" ? never : TContract\[key\] extends AnyFunction ? key : never\]: ContractProxyMethod\<TContract\[key\]\> \}

Get methods for calling ABI and bare methods on the target contract

### bareCreate()

> **bareCreate**(`fields?`): [`ApplicationCallInnerTxn`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallinnertxn/)

Create a bare application call itxn to create the contract.

#### Parameters

##### fields?

[`BareCreateApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/barecreateapplicationcallfields/)

Specify values for transaction fields which should override the default values.

#### Returns

[`ApplicationCallInnerTxn`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/applicationcallinnertxn/)

## Type Parameters

### TContract

`TContract` *extends* [`Contract`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/contract/)
