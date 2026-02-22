---
editUrl: false
next: false
prev: false
title: "AlgodClient"
---

Defined in: [packages/algod\_client/src/client.ts:5](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/client.ts#L5)

## Extends

- [`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/)

## Constructors

### Constructor

> **new AlgodClient**(`config`): `AlgodClient`

Defined in: [packages/algod\_client/src/client.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/client.ts#L6)

#### Parameters

##### config

[`ClientConfig`](/algokit-utils-ts/api/subpaths/algod-client/interfaces/clientconfig/)

#### Returns

`AlgodClient`

#### Overrides

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`constructor`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#constructor)

## Properties

### httpRequest

> `readonly` **httpRequest**: [`BaseHttpRequest`](/algokit-utils-ts/api/subpaths/algod-client/classes/basehttprequest/)

Defined in: [packages/algod\_client/src/apis/api-service.ts:71](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L71)

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`httpRequest`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#httprequest)

## Methods

### accountApplicationInformation()

> **accountApplicationInformation**(`address`, `applicationId`): `Promise`\<[`AccountApplicationResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/accountapplicationresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L80)

Given a specific account public key and application ID, this call returns the account's application local state and global state (AppLocalState and AppParams, if either exists). Global state will only be returned if the provided address is the application's creator.

#### Parameters

##### address

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

##### applicationId

`number` | `bigint`

#### Returns

`Promise`\<[`AccountApplicationResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/accountapplicationresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`accountApplicationInformation`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#accountapplicationinformation)

***

### accountAssetInformation()

> **accountAssetInformation**(`address`, `assetId`): `Promise`\<[`AccountAssetResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/accountassetresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L100)

Given a specific account public key and asset ID, this call returns the account's asset holding and asset parameters (if either exist). Asset parameters will only be returned if the provided address is the asset's creator.

#### Parameters

##### address

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

##### assetId

`number` | `bigint`

#### Returns

`Promise`\<[`AccountAssetResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/accountassetresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`accountAssetInformation`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#accountassetinformation)

***

### accountInformation()

> **accountInformation**(`address`, `params?`): `Promise`\<[`Account`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/account/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:120](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L120)

Given a specific account public key, this call returns the account's status, balance and spendable amounts

#### Parameters

##### address

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

##### params?

###### exclude?

`"all"` \| `"none"`

#### Returns

`Promise`\<[`Account`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/account/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`accountInformation`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#accountinformation)

***

### applicationBoxByName()

> **applicationBoxByName**(`applicationId`, `boxName`): `Promise`\<[`Box`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/box/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:789](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L789)

Given an application ID and box name, it returns the round, box name, and value.

#### Parameters

##### applicationId

`number` | `bigint`

##### boxName

`Uint8Array`

#### Returns

`Promise`\<[`Box`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/box/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`applicationBoxByName`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#applicationboxbyname)

***

### applicationBoxes()

> **applicationBoxes**(`applicationId`, `params?`): `Promise`\<[`BoxesResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/boxesresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:160](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L160)

Given an application ID, return all Box names. No particular ordering is guaranteed. Request fails when client or server-side configured limits prevent returning all Box names.

#### Parameters

##### applicationId

`number` | `bigint`

##### params?

###### max?

`number`

#### Returns

`Promise`\<[`BoxesResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/boxesresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`applicationBoxes`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#applicationboxes)

***

### applicationById()

> **applicationById**(`applicationId`): `Promise`\<[`Application`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/application/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:180](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L180)

Given a application ID, it returns application information including creator, approval and clear programs, global and local schemas, and global state.

#### Parameters

##### applicationId

`number` | `bigint`

#### Returns

`Promise`\<[`Application`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/application/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`applicationById`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#applicationbyid)

***

### assetById()

> **assetById**(`assetId`): `Promise`\<[`Asset`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/asset/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:200](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L200)

Given a asset ID, it returns asset information including creator, name, total supply and special addresses.

#### Parameters

##### assetId

`number` | `bigint`

#### Returns

`Promise`\<[`Asset`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/asset/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`assetById`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#assetbyid)

***

### block()

> **block**(`round`, `params?`): `Promise`\<[`BlockResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/blockresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:217](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L217)

#### Parameters

##### round

`number` | `bigint`

##### params?

###### headerOnly?

`boolean`

#### Returns

`Promise`\<[`BlockResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/blockresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`block`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#block)

***

### blockHash()

> **blockHash**(`round`): `Promise`\<[`BlockHashResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/blockhashresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:234](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L234)

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`BlockHashResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/blockhashresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`blockHash`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#blockhash)

***

### blockTimeStampOffset()

> **blockTimeStampOffset**(): `Promise`\<[`GetBlockTimeStampOffsetResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/getblocktimestampoffsetresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:254](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L254)

Gets the current timestamp offset.

#### Returns

`Promise`\<[`GetBlockTimeStampOffsetResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/getblocktimestampoffsetresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`blockTimeStampOffset`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#blocktimestampoffset)

***

### blockTxIds()

> **blockTxIds**(`round`): `Promise`\<[`BlockTxidsResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/blocktxidsresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:271](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L271)

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`BlockTxidsResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/blocktxidsresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`blockTxIds`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#blocktxids)

***

### genesis()

> **genesis**(): `Promise`\<[`Genesis`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/genesis/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:291](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L291)

Returns the entire genesis file in json.

#### Returns

`Promise`\<[`Genesis`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/genesis/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`genesis`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#genesis)

***

### healthCheck()

> **healthCheck**(): `Promise`\<`void`\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:308](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L308)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`healthCheck`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#healthcheck)

***

### ledgerStateDelta()

> **ledgerStateDelta**(`round`): `Promise`\<[`LedgerStateDelta`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/ledgerstatedelta/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:326](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L326)

Get ledger deltas for a round.

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`LedgerStateDelta`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/ledgerstatedelta/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`ledgerStateDelta`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#ledgerstatedelta)

***

### ledgerStateDeltaForTransactionGroup()

> **ledgerStateDeltaForTransactionGroup**(`id`): `Promise`\<[`LedgerStateDelta`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/ledgerstatedelta/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:346](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L346)

Get a ledger delta for a given transaction group.

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`LedgerStateDelta`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/ledgerstatedelta/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`ledgerStateDeltaForTransactionGroup`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#ledgerstatedeltafortransactiongroup)

***

### lightBlockHeaderProof()

> **lightBlockHeaderProof**(`round`): `Promise`\<[`LightBlockHeaderProof`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/lightblockheaderproof/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:363](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L363)

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`LightBlockHeaderProof`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/lightblockheaderproof/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`lightBlockHeaderProof`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#lightblockheaderproof)

***

### pendingTransactionInformation()

> **pendingTransactionInformation**(`txId`): `Promise`\<[`PendingTransactionResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)\>

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

`Promise`\<[`PendingTransactionResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`pendingTransactionInformation`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#pendingtransactioninformation)

***

### pendingTransactions()

> **pendingTransactions**(`params?`): `Promise`\<[`PendingTransactionsResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionsresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:407](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L407)

Get the list of pending transactions, sorted by priority, in decreasing order, truncated at the end at MAX. If MAX = 0, returns all pending transactions.

#### Parameters

##### params?

###### max?

`number`

#### Returns

`Promise`\<[`PendingTransactionsResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionsresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`pendingTransactions`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#pendingtransactions)

***

### pendingTransactionsByAddress()

> **pendingTransactionsByAddress**(`address`, `params?`): `Promise`\<[`PendingTransactionsResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionsresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:427](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L427)

Get the list of pending transactions by address, sorted by priority, in decreasing order, truncated at the end at MAX. If MAX = 0, returns all pending transactions.

#### Parameters

##### address

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

##### params?

###### max?

`number`

#### Returns

`Promise`\<[`PendingTransactionsResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionsresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`pendingTransactionsByAddress`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#pendingtransactionsbyaddress)

***

### ready()

> **ready**(): `Promise`\<`void`\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:465](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L465)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`ready`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#ready)

***

### sendRawTransaction()

> **sendRawTransaction**(`stxOrStxs`): `Promise`\<[`PostTransactionsResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/posttransactionsresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:773](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L773)

Send a signed transaction or array of signed transactions to the network.

#### Parameters

##### stxOrStxs

`Uint8Array`\<`ArrayBufferLike`\> | `Uint8Array`\<`ArrayBufferLike`\>[]

#### Returns

`Promise`\<[`PostTransactionsResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/posttransactionsresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`sendRawTransaction`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#sendrawtransaction)

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

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`setBlockTimeStampOffset`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#setblocktimestampoffset)

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

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`setSyncRound`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#setsyncround)

***

### simulateRawTransactions()

> **simulateRawTransactions**(`stxOrStxs`): `Promise`\<[`SimulateResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/simulateresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:822](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L822)

Simulate an encoded signed transaction or array of encoded signed transactions.

#### Parameters

##### stxOrStxs

`Uint8Array`\<`ArrayBufferLike`\> | `Uint8Array`\<`ArrayBufferLike`\>[]

#### Returns

`Promise`\<[`SimulateResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/simulateresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`simulateRawTransactions`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#simulaterawtransactions)

***

### simulateTransactions()

> **simulateTransactions**(`body`): `Promise`\<[`SimulateResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/simulateresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:516](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L516)

#### Parameters

##### body

[`SimulateRequest`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/simulaterequest/)

#### Returns

`Promise`\<[`SimulateResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/simulateresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`simulateTransactions`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#simulatetransactions)

***

### stateProof()

> **stateProof**(`round`): `Promise`\<[`StateProof`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/stateproof/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:538](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L538)

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`StateProof`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/stateproof/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`stateProof`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#stateproof)

***

### status()

> **status**(): `Promise`\<[`NodeStatusResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/nodestatusresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:555](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L555)

#### Returns

`Promise`\<[`NodeStatusResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/nodestatusresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`status`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#status)

***

### statusAfterBlock()

> **statusAfterBlock**(`round`): `Promise`\<[`NodeStatusResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/nodestatusresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:575](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L575)

Waits for a block to appear after round {round} and returns the node's status at the time. There is a 1 minute timeout, when reached the current status is returned regardless of whether or not it is the round after the given round.

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`NodeStatusResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/nodestatusresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`statusAfterBlock`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#statusafterblock)

***

### suggestedParams()

> **suggestedParams**(): `Promise`\<\{ `consensusVersion`: `string`; `fee`: `bigint`; `firstValid`: `bigint`; `flatFee`: `boolean`; `genesisHash`: `Uint8Array`; `genesisId`: `string`; `lastValid`: `bigint`; `minFee`: `bigint`; \}\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:797](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L797)

Returns the common needed parameters for a new transaction.

#### Returns

`Promise`\<\{ `consensusVersion`: `string`; `fee`: `bigint`; `firstValid`: `bigint`; `flatFee`: `boolean`; `genesisHash`: `Uint8Array`; `genesisId`: `string`; `lastValid`: `bigint`; `minFee`: `bigint`; \}\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`suggestedParams`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#suggestedparams)

***

### supply()

> **supply**(): `Promise`\<[`SupplyResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/supplyresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:592](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L592)

#### Returns

`Promise`\<[`SupplyResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/supplyresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`supply`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#supply)

***

### syncRound()

> **syncRound**(): `Promise`\<[`GetSyncRoundResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/getsyncroundresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:612](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L612)

Gets the minimum sync round for the ledger.

#### Returns

`Promise`\<[`GetSyncRoundResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/getsyncroundresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`syncRound`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#syncround)

***

### tealCompile()

> **tealCompile**(`body`, `params?`): `Promise`\<[`CompileResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/compileresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:632](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L632)

Given TEAL source code in plain text, return base64 encoded program bytes and base32 SHA512_256 hash of program bytes (Address style). This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.

#### Parameters

##### body

`string`

##### params?

###### sourcemap?

`boolean`

#### Returns

`Promise`\<[`CompileResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/compileresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`tealCompile`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#tealcompile)

***

### tealDisassemble()

> **tealDisassemble**(`body`): `Promise`\<[`DisassembleResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/disassembleresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:657](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L657)

Given the program bytes, return the TEAL source code in plain text. This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.

#### Parameters

##### body

`Uint8Array`

#### Returns

`Promise`\<[`DisassembleResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/disassembleresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`tealDisassemble`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#tealdisassemble)

***

### transactionGroupLedgerStateDeltasForRound()

> **transactionGroupLedgerStateDeltasForRound**(`round`): `Promise`\<[`TransactionGroupLedgerStateDeltasForRoundResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/transactiongroupledgerstatedeltasforroundresponse/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:681](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L681)

Get ledger deltas for transaction groups in a given round.

#### Parameters

##### round

`number` | `bigint`

#### Returns

`Promise`\<[`TransactionGroupLedgerStateDeltasForRoundResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/transactiongroupledgerstatedeltasforroundresponse/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`transactionGroupLedgerStateDeltasForRound`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#transactiongroupledgerstatedeltasforround)

***

### transactionParams()

> **transactionParams**(): `Promise`\<\{ `consensusVersion`: `string`; `fee`: `bigint`; `firstValid`: `bigint`; `flatFee`: `boolean`; `genesisHash`: `Uint8Array`; `genesisId`: `string`; `lastValid`: `bigint`; `minFee`: `bigint`; \}\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:815](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L815)

Returns the common needed parameters for a new transaction.

#### Returns

`Promise`\<\{ `consensusVersion`: `string`; `fee`: `bigint`; `firstValid`: `bigint`; `flatFee`: `boolean`; `genesisHash`: `Uint8Array`; `genesisId`: `string`; `lastValid`: `bigint`; `minFee`: `bigint`; \}\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`transactionParams`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#transactionparams)

***

### transactionProof()

> **transactionProof**(`round`, `txId`, `params?`): `Promise`\<[`TransactionProof`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/transactionproof/)\>

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

`Promise`\<[`TransactionProof`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/transactionproof/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`transactionProof`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#transactionproof)

***

### unsetSyncRound()

> **unsetSyncRound**(): `Promise`\<`void`\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:735](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L735)

Unset the ledger sync round.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`unsetSyncRound`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#unsetsyncround)

***

### version()

> **version**(): `Promise`\<[`Version`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/version/)\>

Defined in: [packages/algod\_client/src/apis/api-service.ts:753](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/apis/api-service.ts#L753)

Retrieves the supported API versions, binary build versions, and genesis information.

#### Returns

`Promise`\<[`Version`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/version/)\>

#### Inherited from

[`AlgodApi`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/).[`version`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodapi/#version)
