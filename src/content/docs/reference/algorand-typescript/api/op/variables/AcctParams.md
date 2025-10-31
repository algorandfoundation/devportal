---
title: AcctParams
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / AcctParams

> `const` **AcctParams**: `object`

Defined in: [op.ts:52](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L52)

## Type declaration

### acctAuthAddr()

> **acctAuthAddr**(`a`): readonly \[[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/), `boolean`\]

Address the account is rekeyed to.
Min AVM version: 6

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`Account`](/reference/algorand-typescript/api/index/type-aliases/account/), `boolean`\]

### acctBalance()

> **acctBalance**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Account balance in microalgos
Min AVM version: 6

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### acctIncentiveEligible()

> **acctIncentiveEligible**(`a`): readonly \[`boolean`, `boolean`\]

Has this account opted into block payouts
Min AVM version: 11

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[`boolean`, `boolean`\]

### acctLastHeartbeat()

> **acctLastHeartbeat**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

The round number of the last block this account sent a heartbeat.
Min AVM version: 11

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### acctLastProposed()

> **acctLastProposed**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

The round number of the last block this account proposed.
Min AVM version: 11

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### acctMinBalance()

> **acctMinBalance**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

Minimum required balance for account, in microalgos
Min AVM version: 6

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### acctTotalAppsCreated()

> **acctTotalAppsCreated**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

The number of existing apps created by this account.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### acctTotalAppsOptedIn()

> **acctTotalAppsOptedIn**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

The number of apps this account is opted into.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### acctTotalAssets()

> **acctTotalAssets**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

The numbers of ASAs held by this account (including ASAs this account created).
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### acctTotalAssetsCreated()

> **acctTotalAssetsCreated**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

The number of existing ASAs created by this account.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### acctTotalBoxBytes()

> **acctTotalBoxBytes**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

The total number of bytes used by this account's app's box keys and values.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### acctTotalBoxes()

> **acctTotalBoxes**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

The number of existing boxes created by this account's app.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### acctTotalExtraAppPages()

> **acctTotalExtraAppPages**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

The number of extra app code pages used by this account.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### acctTotalNumByteSlice()

> **acctTotalNumByteSlice**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

The total number of byte array values allocated by this account in Global and Local States.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

### acctTotalNumUint()

> **acctTotalNumUint**(`a`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]

The total number of uint64 values allocated by this account in Global and Local States.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

#### Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `boolean`\]
