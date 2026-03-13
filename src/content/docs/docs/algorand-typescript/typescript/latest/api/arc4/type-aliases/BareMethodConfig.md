---
editUrl: false
next: false
prev: false
title: "BareMethodConfig"
---

> **BareMethodConfig** = `object`

Defined in: [arc4/index.ts:179](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L179)

Configuration options for a bare method

## Properties

### allowActions?

> `optional` **allowActions**: [`OnCompleteActionStr`](/algorand-typescript/api/index/type-aliases/oncompleteactionstr/) \| [`OnCompleteActionStr`](/algorand-typescript/api/index/type-aliases/oncompleteactionstr/)[]

Defined in: [arc4/index.ts:184](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L184)

Which on complete action(s) are allowed when invoking this method.

#### Default

```ts
'NoOp'
```

***

### onCreate?

> `optional` **onCreate**: [`CreateOptions`](/algorand-typescript/api/arc4/type-aliases/createoptions/)

Defined in: [arc4/index.ts:189](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L189)

Whether this method should be callable when creating the application.

#### Default

```ts
'disallow'
```
