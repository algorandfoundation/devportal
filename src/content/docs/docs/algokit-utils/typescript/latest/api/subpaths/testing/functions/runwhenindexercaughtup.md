---
editUrl: false
next: false
prev: false
title: 'runWhenIndexerCaughtUp'
---

> **runWhenIndexerCaughtUp**\<`T`\>(`run`): `Promise`\<`T`\>

Defined in: [src/testing/indexer.ts:12](https://github.com/larkiny/algokit-utils-ts/blob/main/src/testing/indexer.ts#L12)

Runs the given indexer call until a 404 error is no longer returned.
Tried every 200ms up to 100 times.
Very rudimentary implementation designed for automated testing.

## Type Parameters

### T

`T`

## Parameters

### run

() => `Promise`\<`T`\>

The code to run

## Returns

`Promise`\<`T`\>

The result (as a promise), or throws if the indexer didn't catch up in time

## Example

```typescript
const transaction = await runWhenIndexerCaughtUp(() => indexer.lookupTransactionByID(txnId).do());
```
