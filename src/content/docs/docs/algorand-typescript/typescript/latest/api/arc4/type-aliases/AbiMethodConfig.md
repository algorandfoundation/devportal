---
title: AbiMethodConfig
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/readme/) / AbiMethodConfig

> **AbiMethodConfig**\<`TContract`\> = `object`

Defined in: [arc4/index.ts:103](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L103)

Configuration options for an abi method

## Type Parameters

### TContract

`TContract` _extends_ [`Contract`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/contract/)

the type of the contract this method is a part of

## Properties

### allowActions?

> `optional` **allowActions**: [`OnCompleteActionStr`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/oncompleteactionstr/) \| [`OnCompleteActionStr`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/oncompleteactionstr/)[]

Defined in: [arc4/index.ts:108](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L108)

Which on complete action(s) are allowed when invoking this method.

#### Default

```ts
'NoOp';
```

---

### defaultArguments?

> `optional` **defaultArguments**: `Record`\<`string`, [`DefaultArgument`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/defaultargument/)\<`TContract`\>\>

Defined in: [arc4/index.ts:147](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L147)

Specify default arguments that can be populated by clients calling this method.

A map of parameter names to the default argument source

---

### name?

> `optional` **name**: `string`

Defined in: [arc4/index.ts:122](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L122)

Override the name used to generate the abi method selector

---

### onCreate?

> `optional` **onCreate**: [`CreateOptions`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/createoptions/)

Defined in: [arc4/index.ts:113](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L113)

Whether this method should be callable when creating the application.

#### Default

```ts
'disallow';
```

---

### readonly?

> `optional` **readonly**: `boolean`

Defined in: [arc4/index.ts:118](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L118)

Does the method only perform read operations (no mutation of chain state)

#### Default

```ts
false;
```

---

### resourceEncoding?

> `optional` **resourceEncoding**: [`ResourceEncodingOptions`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/resourceencodingoptions/)

Defined in: [arc4/index.ts:131](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L131)

The resource encoding to use for this method. The default is 'value'

index: Application, Asset, and Account arguments are included in the transaction's relevant array. The argument value is the uint8 index of the resource in the that array.
value: Application, Asset and Account arguments are passed by their uint64 id (Application and Asset) or bytes[32] address (Account).

The resource must still be 'available' to this transaction but can take advantage of resource sharing within the transaction group.

---

### validateEncoding?

> `optional` **validateEncoding**: [`ValidateEncodingOptions`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/validateencodingoptions/)

Defined in: [arc4/index.ts:140](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L140)

Controls validation behaviour for this method.

If "args", then ABI arguments are validated automatically to ensure they are encoded correctly.
If "unsafe-disabled", then no automatic validation occurs. Arguments can instead be validated using the validateEncoding(...) function.
The default behaviour of this option can be controlled with the --validate-abi-args CLI flag.
