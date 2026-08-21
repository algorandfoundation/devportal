---
editUrl: false
next: false
prev: false
title: 'itxnCompose'
---

> `const` **itxnCompose**: [`ItxnCompose`](/algorand-typescript/api/index/type-aliases/itxncompose/)

Defined in: [itxn-compose.ts:179](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L179)

The itxnCompose helper can be used to build dynamically sized itxn groups which aren't supported by the stronger typed itxn paradigm. The
first transaction in a group must be 'staged' with `itxnCompose.begin` whilst all other transactions in the group should use `itxnCompose.next`.
When the group is complete it can be submitted using `itxnCompose.submit`.

## Remarks

The itxn API offered by teal opcodes has some rough edges which are not fully abstracted over by this compose API, but it hoped that use
cases for it are limited and that most transaction groups can be composed with a static size relying on the atomic nature of the outer transaction
to ensure multiple smaller itxn groups are committed atomically.
