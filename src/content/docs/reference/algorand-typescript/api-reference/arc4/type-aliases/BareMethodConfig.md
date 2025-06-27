---
title: 'BareMethodConfig'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / BareMethodConfig

# Type Alias: BareMethodConfig

> **BareMethodConfig**: `object`

Defined in: [packages/algo-ts/src/arc4/index.ts:135](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L135)

Configuration options for a bare method

## Type declaration

### allowActions?

> `optional` **allowActions**: [`OnCompleteActionStr`](/reference/algorand-typescript/oncompleteactionstr) \| [`OnCompleteActionStr`](/reference/algorand-typescript/oncompleteactionstr)[]

Which on complete action(s) are allowed when invoking this method.

#### Default

```ts
'NoOp';
```

### onCreate?

> `optional` **onCreate**: [`CreateOptions`](/reference/algorand-typescript/createoptions)

Whether this method should be callable when creating the application.

#### Default

```ts
'disallow';
```
