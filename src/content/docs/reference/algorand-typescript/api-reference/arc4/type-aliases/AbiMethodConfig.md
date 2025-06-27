---
title: 'AbiMethodConfig'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / AbiMethodConfig

# Type Alias: AbiMethodConfig\<TContract\>

> **AbiMethodConfig**\<`TContract`\>: `object`

Defined in: [packages/algo-ts/src/arc4/index.ts:89](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L89)

Configuration options for an abi method

## Type Parameters

• **TContract** _extends_ [`Contract`](/reference/classes/contract)

the type of the contract this method is a part of

## Type declaration

### allowActions?

> `optional` **allowActions**: [`OnCompleteActionStr`](/reference/algorand-typescript/oncompleteactionstr) \| [`OnCompleteActionStr`](/reference/algorand-typescript/oncompleteactionstr)[]

Which on complete action(s) are allowed when invoking this method.

#### Default

```ts
'NoOp';
```

### defaultArguments?

> `optional` **defaultArguments**: [`Record`](/index/-internal-/type-aliases/record)\<`string`, [`DefaultArgument`](/reference/algorand-typescript/defaultargument)\<`TContract`\>\>

Specify default arguments that can be populated by clients calling this method.

A map of parameter names to the default argument source

### name?

> `optional` **name**: `string`

Override the name used to generate the abi method selector

### onCreate?

> `optional` **onCreate**: [`CreateOptions`](/reference/algorand-typescript/createoptions)

Whether this method should be callable when creating the application.

#### Default

```ts
'disallow';
```

### readonly?

> `optional` **readonly**: `boolean`

Does the method only perform read operations (no mutation of chain state)

#### Default

```ts
false;
```
