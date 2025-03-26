---
title: Inner Transactions
---

## Basic API

The `itxn` namespace exposes types for constructing inner transactions. There is a factory method for each transaction type which accepts an object containing fields specific to the transaction type. The factories then return a `*ItxnParams` object where `*` is the transaction type (eg. `PaymentItxnParams`). The params object has a `submit` to submit the transaction immediately, a `set` method to make further updates to the fields, and a `copy` method to clone the params object.

To submit multiple transactions in a group - use the `itxn.submitGroup` function.

```ts
import { itxn, Global, log } from '@algorandfoundation/algorand-typescript';

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

Both the `submitGroup` and `params.submit()` functions return a `*InnerTxn` object per input params object which allow you to read application logs or created asset/application ids. There are restrictions on accessing these properties which come from the current AVM implementation. The restrictions are detailed below.

## Restrictions

The `*ItxnParams` objects cannot be passed between subroutines, or stored in arrays or application state. This is because they contain up to 20 fields each with many of the fields being of variable length. Storing this object would require encoding it to binary and would be very expensive and inefficient.

Submitting dynamic group sizes with `submitGroup` is not supported as the AVM is quite restrictive in how transaction results are accessed. [gitxn](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v11/#gitxn) op codes require transaction indexes to be referenced with a compile time constant value and this is obviously not possible with dynamic group sizes. An alternative API may be offered in the future which allows dynamic group sizes with the caveat of not having access to the transaction results.

## Pre-compiled contracts

If your contract needs to deploy other contracts then it's likely you will need access to the compiled approval and clear state programs. The `compile` method takes a contract class and returns the compiled byte code along with some basic schema information.

```ts
import { itxn, compile } from '@algorandfoundation/algorand-typescript';
import { encodeArc4, methodSelector } from '@algorandfoundation/algorand-typescript/arc4';

const compiled = compile(Hello);

const helloApp = itxn
  .applicationCall({
    appArgs: [methodSelector(Hello.prototype.create), encodeArc4('hello')],
    approvalProgram: compiled.approvalProgram,
    clearStateProgram: compiled.clearStateProgram,
    globalNumBytes: compiled.globalBytes,
  })
  .submit().createdApp;
```

If the contract you are compiling makes use of template variables - these will need to be resolved to a constant value.

```ts
const compiled = compile(HelloTemplate, { templateVars: { GREETING: 'hey' } });
```

## Strongly typed contract to contract

Assuming the contract you wish to compile extends the ARC4 `Contract` type, you can make use of `compileArc4` to produce a contract proxy object that makes it easy to invoke application methods with
compile time type safety.

```ts
import { assert, itxn } from '@algorandfoundation/algorand-typescript';
import { compileArc4 } from '@algorandfoundation/algorand-typescript/arc4';

const compiled = compileArc4(Hello);

const app = compiled.call.create({
  args: ['hello'],
}).itxn.createdApp;

const result = compiled.call.greet({
  args: ['world'],
  appId: app,
}).returnValue;
assert(result === 'hello world');
```

The proxy will automatically include approval and clear state program bytes + schema properties from the compiled contract, but these can also be overridden if required.

## Strongly typed ABI calls

If your use case does not require deploying another contract, and instead you are just calling methods then the `abiCall` method will allow you to do this in a strongly typed manner provided you have at bare minimum a compatible stub implementation of the target contract.

**A sample stub implementation**

```ts
export abstract class HelloStubbed extends Contract {
  // Make sure the abi decorator matches the target implementation
  @abimethod()
  greet(name: string): string {
    // Stub implementations don't need method bodies, as long as the type information is correct
    err('stub only');
  }
}
```

**Invocation using the stub**

```ts
const result3 = abiCall(HelloStubbed.prototype.greet, {
  appId: app,
  args: ['stubbed'],
}).returnValue;
assert(result3 === 'hello stubbed');
```
