---
editUrl: false
next: false
prev: false
title: "AlgodClient"
---

Defined in: [packages/algod\_client/src/client.ts:5](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/client.ts#L5)

## Extends

- [`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/)

## Constructors

### Constructor

> **new AlgodClient**(`config`): `AlgodClient`

Defined in: [packages/algod\_client/src/client.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/client.ts#L6)

#### Parameters

##### config

[`ClientConfig`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/interfaces/clientconfig/)

#### Returns

`AlgodClient`

#### Overrides

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`constructor`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#constructor)

## Properties

### httpRequest

> `readonly` **httpRequest**: [`BaseHttpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/basehttprequest/)

Defined in: [packages/algod\_client/src/apis/api-service.ts:71](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L71)

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`httpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#httprequest)

## Methods

### accountApplicationInformation()

> **accountApplicationInformation**(`address`, `applicationId`): `Promise`\<[`AccountApplicationResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/accountapplicationresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L80)

Given a specific account public key and application ID, this call returns the account's application local state and global state (AppLocalState and AppParams, if either exists). Global state will only be returned if the provided address is the application's creator.

#### Parameters

##### address

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

##### applicationId

`number` | `bigint`

#### Returns

`Promise`\<[`AccountApplicationResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/accountapplicationresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`accountApplicationInformation`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#accountapplicationinformation)

***

### accountAssetInformation()

> **accountAssetInformation**(`address`, `assetId`): `Promise`\<[`AccountAssetResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/accountassetresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L100)

Given a specific account public key and asset ID, this call returns the account's asset holding and asset parameters (if either exist). Asset parameters will only be returned if the provided address is the asset's creator.

#### Parameters

##### address

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

##### assetId

`number` | `bigint`

#### Returns

`Promise`\<[`AccountAssetResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/accountassetresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`accountAssetInformation`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#accountassetinformation)

***

### accountInformation()

> **accountInformation**(`address`, `params?`): `Promise`\<[`Account`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/account/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:120](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L120)

Given a specific account public key, this call returns the account's status, balance and spendable amounts

#### Parameters

##### address

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

##### params?

###### exclude?

`"all"` \| `"none"`

#### Returns

`Promise`\<[`Account`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/account/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`accountInformation`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#accountinformation)

***

### applicationBoxByName()

> **applicationBoxByName**(`applicationId`, `boxName`): `Promise`\<[`Box`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/box/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:789](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L789)

Given an application ID and box name, it returns the round, box name, and value.

#### Parameters

##### applicationId

`number` | `bigint`

##### boxName

`Uint8Array`

#### Returns

`Promise`\<[`Box`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/box/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`applicationBoxByName`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#applicationboxbyname)

***

### applicationBoxes()

> **applicationBoxes**(`applicationId`, `params?`): `Promise`\<[`BoxesResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/boxesresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:160](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L160)

Given an application ID, return all Box names. No particular ordering is guaranteed. Request fails when client or server-side configured limits prevent returning all Box names.

#### Parameters

##### applicationId

`number` | `bigint`

##### params?

###### max?

`number`

#### Returns

`Promise`\<[`BoxesResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/boxesresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`applicationBoxes`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#applicationboxes)

***

### applicationById()

> **applicationById**(`applicationId`): `Promise`\<[`Application`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/application/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:180](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L180)

Given a application ID, it returns application information including creator, approval and clear programs, global and local schemas, and global state.

#### Parameters

##### applicationId

`number` | `bigint`

#### Returns

`Promise`\<[`Application`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/application/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`applicationById`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#applicationbyid)

***

### assetById()

> **assetById**(`assetId`): `Promise`\<[`Asset`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/asset/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:200](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L200)

Given a asset ID, it returns asset information including creator, name, total supply and special addresses.

#### Parameters

##### assetId

`number` | `bigint`

#### Returns

`Promise`\<[`Asset`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/asset/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`assetById`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#assetbyid)

***

### block()

> **block**(`round`, `params?`): `Promise`\<[`BlockResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/blockresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:217](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L217)

#### Parameters

##### round

`number` | `bigint`

##### params?

###### headerOnly?

`boolean`

#### Returns

`Promise`\<[`BlockResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/blockresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`block`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#block)

***

### blockHash()

> **blockHash**(`round`): `Promise`\<[`BlockHashResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/blockhashresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:234](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L234)

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`BlockHashResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/blockhashresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`blockHash`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#blockhash)

***

### blockTimeStampOffset()

> **blockTimeStampOffset**(): `Promise`\<[`GetBlockTimeStampOffsetResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/getblocktimestampoffsetresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:254](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L254)

Gets the current timestamp offset.

#### Returns

`Promise`\<[`GetBlockTimeStampOffsetResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/getblocktimestampoffsetresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`blockTimeStampOffset`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#blocktimestampoffset)

***

### blockTxIds()

> **blockTxIds**(`round`): `Promise`\<[`BlockTxidsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/blocktxidsresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:271](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L271)

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`BlockTxidsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/blocktxidsresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`blockTxIds`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#blocktxids)

***

### genesis()

> **genesis**(): `Promise`\<[`Genesis`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/genesis/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:291](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L291)

Returns the entire genesis file in json.

#### Returns

`Promise`\<[`Genesis`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/genesis/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`genesis`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#genesis)

***

### healthCheck()

> **healthCheck**(): `Promise`\<`void`\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:308](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L308)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`healthCheck`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#healthcheck)

***

### ledgerStateDelta()

> **ledgerStateDelta**(`round`): `Promise`\<[`LedgerStateDelta`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/ledgerstatedelta/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:326](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L326)

Get ledger deltas for a round.

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`LedgerStateDelta`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/ledgerstatedelta/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`ledgerStateDelta`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#ledgerstatedelta)

***

### ledgerStateDeltaForTransactionGroup()

> **ledgerStateDeltaForTransactionGroup**(`id`): `Promise`\<[`LedgerStateDelta`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/ledgerstatedelta/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:346](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L346)

Get a ledger delta for a given transaction group.

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`LedgerStateDelta`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/ledgerstatedelta/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`ledgerStateDeltaForTransactionGroup`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#ledgerstatedeltafortransactiongroup)

***

### lightBlockHeaderProof()

> **lightBlockHeaderProof**(`round`): `Promise`\<[`LightBlockHeaderProof`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/lightblockheaderproof/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:363](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L363)

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`LightBlockHeaderProof`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/lightblockheaderproof/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`lightBlockHeaderProof`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#lightblockheaderproof)

***

### pendingTransactionInformation()

> **pendingTransactionInformation**(`txId`): `Promise`\<[`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:387](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L387)

Given a transaction ID of a recently submitted transaction, it returns information about it.  There are several cases when this might succeed:
- transaction committed (committed round > 0)
- transaction still in the pool (committed round = 0, pool error = "")
- transaction removed from pool due to error (committed round = 0, pool error != "")
Or the transaction may have happened sufficiently long ago that the node no longer remembers it, and this will return an error.

#### Parameters

##### txId

`string`

#### Returns

`Promise`\<[`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`pendingTransactionInformation`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#pendingtransactioninformation)

***

### pendingTransactions()

> **pendingTransactions**(`params?`): `Promise`\<[`PendingTransactionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionsresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:407](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L407)

Get the list of pending transactions, sorted by priority, in decreasing order, truncated at the end at MAX. If MAX = 0, returns all pending transactions.

#### Parameters

##### params?

###### max?

`number`

#### Returns

`Promise`\<[`PendingTransactionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionsresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`pendingTransactions`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#pendingtransactions)

***

### pendingTransactionsByAddress()

> **pendingTransactionsByAddress**(`address`, `params?`): `Promise`\<[`PendingTransactionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionsresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:427](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L427)

Get the list of pending transactions by address, sorted by priority, in decreasing order, truncated at the end at MAX. If MAX = 0, returns all pending transactions.

#### Parameters

##### address

[`ReadableAddress`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/readableaddress/)

##### params?

###### max?

`number`

#### Returns

`Promise`\<[`PendingTransactionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionsresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`pendingTransactionsByAddress`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#pendingtransactionsbyaddress)

***

### ready()

> **ready**(): `Promise`\<`void`\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:465](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L465)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`ready`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#ready)

***

### sendRawTransaction()

> **sendRawTransaction**(`stxOrStxs`): `Promise`\<[`PostTransactionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/posttransactionsresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:773](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L773)

Send a signed transaction or array of signed transactions to the network.

#### Parameters

##### stxOrStxs

`Uint8Array`\<`ArrayBufferLike`\> | `Uint8Array`\<`ArrayBufferLike`\>[]

#### Returns

`Promise`\<[`PostTransactionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/posttransactionsresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`sendRawTransaction`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#sendrawtransaction)

***

### setBlockTimeStampOffset()

> **setBlockTimeStampOffset**(`offset`): `Promise`\<`void`\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:483](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L483)

Sets the timestamp offset (seconds) for blocks in dev mode. Providing an offset of 0 will unset this value and try to use the real clock for the timestamp.

#### Parameters

##### offset

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`setBlockTimeStampOffset`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#setblocktimestampoffset)

***

### setSyncRound()

> **setSyncRound**(`round`): `Promise`\<`void`\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:501](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L501)

Sets the minimum sync round on the ledger.

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`setSyncRound`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#setsyncround)

***

### simulateRawTransactions()

> **simulateRawTransactions**(`stxOrStxs`): `Promise`\<[`SimulateResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulateresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:822](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L822)

Simulate an encoded signed transaction or array of encoded signed transactions.

#### Parameters

##### stxOrStxs

`Uint8Array`\<`ArrayBufferLike`\> | `Uint8Array`\<`ArrayBufferLike`\>[]

#### Returns

`Promise`\<[`SimulateResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulateresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`simulateRawTransactions`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#simulaterawtransactions)

***

### simulateTransactions()

> **simulateTransactions**(`body`): `Promise`\<[`SimulateResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulateresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:516](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L516)

#### Parameters

##### body

[`SimulateRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulaterequest/)

#### Returns

`Promise`\<[`SimulateResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/simulateresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`simulateTransactions`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#simulatetransactions)

***

### stateProof()

> **stateProof**(`round`): `Promise`\<[`StateProof`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/stateproof/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:538](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L538)

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`StateProof`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/stateproof/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`stateProof`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#stateproof)

***

### status()

> **status**(): `Promise`\<[`NodeStatusResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/nodestatusresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:555](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L555)

#### Returns

`Promise`\<[`NodeStatusResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/nodestatusresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`status`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#status)

***

### statusAfterBlock()

> **statusAfterBlock**(`round`): `Promise`\<[`NodeStatusResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/nodestatusresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:575](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L575)

Waits for a block to appear after round {round} and returns the node's status at the time. There is a 1 minute timeout, when reached the current status is returned regardless of whether or not it is the round after the given round.

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`NodeStatusResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/nodestatusresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`statusAfterBlock`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#statusafterblock)

***

### suggestedParams()

> **suggestedParams**(): `Promise`\<\{ `consensusVersion`: `string`; `fee`: `bigint`; `firstValid`: `bigint`; `flatFee`: `boolean`; `genesisHash`: `Uint8Array`; `genesisId`: `string`; `lastValid`: `bigint`; `minFee`: `bigint`; \}\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:797](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L797)

Returns the common needed parameters for a new transaction.

#### Returns

`Promise`\<\{ `consensusVersion`: `string`; `fee`: `bigint`; `firstValid`: `bigint`; `flatFee`: `boolean`; `genesisHash`: `Uint8Array`; `genesisId`: `string`; `lastValid`: `bigint`; `minFee`: `bigint`; \}\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`suggestedParams`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#suggestedparams)

***

### supply()

> **supply**(): `Promise`\<[`SupplyResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/supplyresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:592](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L592)

#### Returns

`Promise`\<[`SupplyResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/supplyresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`supply`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#supply)

***

### syncRound()

> **syncRound**(): `Promise`\<[`GetSyncRoundResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/getsyncroundresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:612](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L612)

Gets the minimum sync round for the ledger.

#### Returns

`Promise`\<[`GetSyncRoundResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/getsyncroundresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`syncRound`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#syncround)

***

### tealCompile()

> **tealCompile**(`body`, `params?`): `Promise`\<[`CompileResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/compileresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:632](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L632)

Given TEAL source code in plain text, return base64 encoded program bytes and base32 SHA512_256 hash of program bytes (Address style). This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.

#### Parameters

##### body

`string`

##### params?

###### sourcemap?

`boolean`

#### Returns

`Promise`\<[`CompileResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/compileresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`tealCompile`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#tealcompile)

***

### tealDisassemble()

> **tealDisassemble**(`body`): `Promise`\<[`DisassembleResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/disassembleresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:657](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L657)

Given the program bytes, return the TEAL source code in plain text. This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.

#### Parameters

##### body

`Uint8Array`

#### Returns

`Promise`\<[`DisassembleResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/disassembleresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`tealDisassemble`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#tealdisassemble)

***

### transactionGroupLedgerStateDeltasForRound()

> **transactionGroupLedgerStateDeltasForRound**(`round`): `Promise`\<[`TransactionGroupLedgerStateDeltasForRoundResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/transactiongroupledgerstatedeltasforroundresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:681](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L681)

Get ledger deltas for transaction groups in a given round.

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`TransactionGroupLedgerStateDeltasForRoundResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/transactiongroupledgerstatedeltasforroundresponse/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`transactionGroupLedgerStateDeltasForRound`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#transactiongroupledgerstatedeltasforround)

***

### transactionParams()

> **transactionParams**(): `Promise`\<\{ `consensusVersion`: `string`; `fee`: `bigint`; `firstValid`: `bigint`; `flatFee`: `boolean`; `genesisHash`: `Uint8Array`; `genesisId`: `string`; `lastValid`: `bigint`; `minFee`: `bigint`; \}\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:815](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L815)

Returns the common needed parameters for a new transaction.

#### Returns

`Promise`\<\{ `consensusVersion`: `string`; `fee`: `bigint`; `firstValid`: `bigint`; `flatFee`: `boolean`; `genesisHash`: `Uint8Array`; `genesisId`: `string`; `lastValid`: `bigint`; `minFee`: `bigint`; \}\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`transactionParams`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#transactionparams)

***

### transactionProof()

> **transactionProof**(`round`, `txId`, `params?`): `Promise`\<[`TransactionProof`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/transactionproof/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:715](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L715)

#### Parameters

##### round

`number` | `bigint`

##### txId

`string`

##### params?

###### hashtype?

`"sha512_256"` \| `"sha256"`

#### Returns

`Promise`\<[`TransactionProof`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/transactionproof/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`transactionProof`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#transactionproof)

***

### unsetSyncRound()

> **unsetSyncRound**(): `Promise`\<`void`\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:735](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L735)

Unset the ledger sync round.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`unsetSyncRound`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#unsetsyncround)

***

### version()

> **version**(): `Promise`\<[`Version`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/version/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:753](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L753)

Retrieves the supported API versions, binary build versions, and genesis information.

#### Returns

`Promise`\<[`Version`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/version/)\>

#### Inherited from

[`AlgodApi`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/).[`version`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/classes/algodapi/#version)
