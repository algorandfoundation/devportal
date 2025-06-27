---
title: 'AcctParams'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / AcctParams

# Variable: AcctParams

> `const` **AcctParams**: `object`

Defined in: [packages/algo-ts/src/op.ts:51](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L51)

## Type declaration

### acctAuthAddr()

Address the account is rekeyed to.
Min AVM version: 6

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`Account`](/index/type-aliases/account), `boolean`\]

### acctBalance()

Account balance in microalgos
Min AVM version: 6

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### acctIncentiveEligible()

Has this account opted into block payouts
Min AVM version: 11

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[`boolean`, `boolean`\]

### acctLastHeartbeat()

The round number of the last block this account sent a heartbeat.
Min AVM version: 11

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### acctLastProposed()

The round number of the last block this account proposed.
Min AVM version: 11

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### acctMinBalance()

Minimum required balance for account, in microalgos
Min AVM version: 6

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### acctTotalAppsCreated()

The number of existing apps created by this account.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### acctTotalAppsOptedIn()

The number of apps this account is opted into.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### acctTotalAssets()

The numbers of ASAs held by this account (including ASAs this account created).
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### acctTotalAssetsCreated()

The number of existing ASAs created by this account.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### acctTotalBoxBytes()

The total number of bytes used by this account's app's box keys and values.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### acctTotalBoxes()

The number of existing boxes created by this account's app.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### acctTotalExtraAppPages()

The number of extra app code pages used by this account.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### acctTotalNumByteSlice()

The total number of byte array values allocated by this account in Global and Local States.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]

### acctTotalNumUint()

The total number of uint64 values allocated by this account in Global and Local States.
Min AVM version: 8

#### Parameters

##### a

[`uint64`](/index/type-aliases/uint64) | [`Account`](/index/type-aliases/account)

#### Returns

readonly \[[`uint64`](/index/type-aliases/uint64), `boolean`\]
