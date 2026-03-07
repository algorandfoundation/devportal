---
editUrl: false
next: false
prev: false
title: "TransactionFilter"
---

Defined in: [src/types/subscription.ts:291](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L291)

Specify a filter to apply to find transactions of interest.

## Properties

### appCallArgumentsMatch()?

> `optional` **appCallArgumentsMatch**: (`appCallArguments?`) => `boolean`

Defined in: [src/types/subscription.ts:320](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L320)

Filter to app transactions that meet the given app arguments predicate.

#### Parameters

##### appCallArguments?

readonly `Uint8Array`\<`ArrayBufferLike`\>[]

#### Returns

`boolean`

***

### appCreate?

> `optional` **appCreate**: `boolean`

Defined in: [src/types/subscription.ts:303](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L303)

Filter to transactions that are creating an app.

***

### appId?

> `optional` **appId**: `bigint` \| `bigint`[]

Defined in: [src/types/subscription.ts:301](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L301)

Filter to transactions against the app with the given ID(s).

***

### appOnComplete?

> `optional` **appOnComplete**: `ApplicationOnComplete` \| `ApplicationOnComplete`[]

Defined in: [src/types/subscription.ts:305](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L305)

Filter to transactions that have given on complete(s).

***

### arc28Events?

> `optional` **arc28Events**: `object`[]

Defined in: [src/types/subscription.ts:324](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L324)

Filter to app transactions that emit the given ARC-28 events.
Note: the definitions for these events must be passed in to the subscription config via `arc28Events`.

#### eventName

> **eventName**: `string`

#### groupName

> **groupName**: `string`

***

### assetCreate?

> `optional` **assetCreate**: `boolean`

Defined in: [src/types/subscription.ts:309](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L309)

Filter to transactions that are creating an asset.

***

### assetId?

> `optional` **assetId**: `bigint` \| `bigint`[]

Defined in: [src/types/subscription.ts:307](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L307)

Filter to transactions against the asset with the given ID(s).

***

### balanceChanges?

> `optional` **balanceChanges**: `object`[]

Defined in: [src/types/subscription.ts:326](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L326)

Filter to transactions that result in balance changes that match one or more of the given set of balance changes.

#### address?

> `optional` **address**: `string` \| `string`[]

Match transactions with balance changes affecting one of the given account(s)

#### assetId?

> `optional` **assetId**: `bigint` \| `bigint`[]

Match transactions with balance changes for one of the given asset ID(s), with Algo being `0`

#### maxAbsoluteAmount?

> `optional` **maxAbsoluteAmount**: `number` \| `bigint`

Match transactions with absolute (i.e. using Math.abs()) balance changes being less than or equal to the given maximum (microAlgos or decimal units of an ASA)

#### maxAmount?

> `optional` **maxAmount**: `number` \| `bigint`

Match transactions with balance changes being less than or equal to the given maximum (microAlgos or decimal units of an ASA)

#### minAbsoluteAmount?

> `optional` **minAbsoluteAmount**: `number` \| `bigint`

Match transactions with absolute (i.e. using Math.abs()) balance changes being greater than or equal to the given minimum (microAlgos or decimal units of an ASA)

#### minAmount?

> `optional` **minAmount**: `number` \| `bigint`

Match transactions with balance changes being greater than or equal to the given minimum (microAlgos or decimal units of an ASA)

#### role?

> `optional` **role**: [`BalanceChangeRole`](/docs/algokit-subscriber/typescript/latest/api/types/enumerations/balancechangerole/) \| [`BalanceChangeRole`](/docs/algokit-subscriber/typescript/latest/api/types/enumerations/balancechangerole/)[]

Match transactions with balance changes for an account with one of the given role(s)

***

### customFilter()?

> `optional` **customFilter**: (`transaction`) => `boolean`

Defined in: [src/types/subscription.ts:343](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L343)

Catch-all custom filter to filter for things that the rest of the filters don't provide.

#### Parameters

##### transaction

[`SubscribedTransaction`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/subscribedtransaction/)

#### Returns

`boolean`

***

### maxAmount?

> `optional` **maxAmount**: `number` \| `bigint`

Defined in: [src/types/subscription.ts:315](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L315)

Filter to transactions where the amount being transferred is less than
or equal to the given maximum (microAlgos or decimal units of an ASA if type: axfer).

***

### methodSignature?

> `optional` **methodSignature**: `string` \| `string`[]

Defined in: [src/types/subscription.ts:318](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L318)

Filter to app transactions that have the given ARC-0004 method selector(s) for
the given method signature as the first app argument.

***

### minAmount?

> `optional` **minAmount**: `number` \| `bigint`

Defined in: [src/types/subscription.ts:312](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L312)

Filter to transactions where the amount being transferred is greater
than or equal to the given minimum (microAlgos or decimal units of an ASA if type: axfer).

***

### notePrefix?

> `optional` **notePrefix**: `string`

Defined in: [src/types/subscription.ts:299](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L299)

Filter to transactions with a note having the given prefix.

***

### receiver?

> `optional` **receiver**: `string` \| `string`[]

Defined in: [src/types/subscription.ts:297](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L297)

Filter to transactions being received by the specified address(es).

***

### sender?

> `optional` **sender**: `string` \| `string`[]

Defined in: [src/types/subscription.ts:295](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L295)

Filter to transactions sent from the specified address(es).

***

### type?

> `optional` **type**: `TransactionType` \| `TransactionType`[]

Defined in: [src/types/subscription.ts:293](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L293)

Filter based on the given transaction type(s).
