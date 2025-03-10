---
title: Interface: ApplicationTxn
---

[**@algorandfoundation/algorand-typescript**](../../../../README)

***

[@algorandfoundation/algorand-typescript](../../../../README) / [index](../../../README) / [gtxn](../README) / ApplicationTxn



Defined in: [packages/algo-ts/src/gtxn.ts:51](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L51)

## Extends

- [`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn)

## Constructors

## Properties

### appId

> `readonly` **appId**: [`Application`](../../../type-aliases/Application)

Defined in: [packages/algo-ts/src/transactions.ts:286](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L286)

ApplicationID from ApplicationCall transaction

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`appId`](../../../-internal-/interfaces/ApplicationTxn#appid)

***

### approvalProgram

> `readonly` **approvalProgram**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L306)

Approval program

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`approvalProgram`](../../../-internal-/interfaces/ApplicationTxn#approvalprogram)

***

### clearStateProgram

> `readonly` **clearStateProgram**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:311](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L311)

Clear State program

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`clearStateProgram`](../../../-internal-/interfaces/ApplicationTxn#clearstateprogram)

***

### createdApp

> `readonly` **createdApp**: [`Application`](../../../type-aliases/Application)

Defined in: [packages/algo-ts/src/transactions.ts:366](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L366)

ApplicationID allocated by the creation of an application

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`createdApp`](../../../-internal-/interfaces/ApplicationTxn#createdapp)

***

### extraProgramPages

> `readonly` **extraProgramPages**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:346](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L346)

Number of additional pages for each of the application's approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`extraProgramPages`](../../../-internal-/interfaces/ApplicationTxn#extraprogrampages)

***

### fee

> `readonly` **fee**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`fee`](../../../-internal-/interfaces/ApplicationTxn#fee)

***

### firstValid

> `readonly` **firstValid**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`firstValid`](../../../-internal-/interfaces/ApplicationTxn#firstvalid)

***

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`firstValidTime`](../../../-internal-/interfaces/ApplicationTxn#firstvalidtime)

***

### globalNumBytes

> `readonly` **globalNumBytes**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:331](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L331)

Number of global state byteslices in ApplicationCall

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`globalNumBytes`](../../../-internal-/interfaces/ApplicationTxn#globalnumbytes)

***

### globalNumUint

> `readonly` **globalNumUint**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:326](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L326)

Number of global state integers in ApplicationCall

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`globalNumUint`](../../../-internal-/interfaces/ApplicationTxn#globalnumuint)

***

### groupIndex

> `readonly` **groupIndex**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`groupIndex`](../../../-internal-/interfaces/ApplicationTxn#groupindex)

***

### lastLog

> `readonly` **lastLog**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:351](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L351)

The last message emitted. Empty bytes if none were emitted. Application mode only

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`lastLog`](../../../-internal-/interfaces/ApplicationTxn#lastlog)

***

### lastValid

> `readonly` **lastValid**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`lastValid`](../../../-internal-/interfaces/ApplicationTxn#lastvalid)

***

### lease

> `readonly` **lease**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`lease`](../../../-internal-/interfaces/ApplicationTxn#lease)

***

### localNumBytes

> `readonly` **localNumBytes**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:341](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L341)

Number of local state byteslices in ApplicationCall

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`localNumBytes`](../../../-internal-/interfaces/ApplicationTxn#localnumbytes)

***

### localNumUint

> `readonly` **localNumUint**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:336](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L336)

Number of local state integers in ApplicationCall

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`localNumUint`](../../../-internal-/interfaces/ApplicationTxn#localnumuint)

***

### note

> `readonly` **note**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`note`](../../../-internal-/interfaces/ApplicationTxn#note)

***

### numAccounts

> `readonly` **numAccounts**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:301](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L301)

Number of ApplicationArgs

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`numAccounts`](../../../-internal-/interfaces/ApplicationTxn#numaccounts)

***

### numAppArgs

> `readonly` **numAppArgs**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:296](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L296)

Number of ApplicationArgs

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`numAppArgs`](../../../-internal-/interfaces/ApplicationTxn#numappargs)

***

### numApprovalProgramPages

> `readonly` **numApprovalProgramPages**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:371](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L371)

Number of Approval Program pages

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`numApprovalProgramPages`](../../../-internal-/interfaces/ApplicationTxn#numapprovalprogrampages)

***

### numApps

> `readonly` **numApps**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:321](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L321)

Number of Applications

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`numApps`](../../../-internal-/interfaces/ApplicationTxn#numapps)

***

### numAssets

> `readonly` **numAssets**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:316](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L316)

Number of Assets

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`numAssets`](../../../-internal-/interfaces/ApplicationTxn#numassets)

***

### numClearStateProgramPages

> `readonly` **numClearStateProgramPages**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:376](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L376)

Number of Clear State Program pages

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`numClearStateProgramPages`](../../../-internal-/interfaces/ApplicationTxn#numclearstateprogrampages)

***

### numLogs

> `readonly` **numLogs**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:361](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L361)

Number of logs

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`numLogs`](../../../-internal-/interfaces/ApplicationTxn#numlogs)

***

### onCompletion

> `readonly` **onCompletion**: [`OnCompleteActionStr`](../../../../arc4/type-aliases/OnCompleteActionStr)

Defined in: [packages/algo-ts/src/transactions.ts:291](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L291)

ApplicationCall transaction on completion action

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`onCompletion`](../../../-internal-/interfaces/ApplicationTxn#oncompletion)

***

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`rekeyTo`](../../../-internal-/interfaces/ApplicationTxn#rekeyto)

***

### sender

> `readonly` **sender**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`sender`](../../../-internal-/interfaces/ApplicationTxn#sender)

***

### txnId

> `readonly` **txnId**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`txnId`](../../../-internal-/interfaces/ApplicationTxn#txnid)

***

### type

> `readonly` **type**: [`ApplicationCall`](../../../enumerations/TransactionType#applicationcall)

Defined in: [packages/algo-ts/src/transactions.ts:411](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L411)

Transaction type as integer

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`type`](../../../-internal-/interfaces/ApplicationTxn#type)

***

### typeBytes

> `readonly` **typeBytes**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`typeBytes`](../../../-internal-/interfaces/ApplicationTxn#typebytes)

## Methods

### accounts()

> **accounts**(`index`): [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:387](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L387)

Accounts listed in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](../../../type-aliases/uint64)

#### Returns

[`Account`](../../../type-aliases/Account)

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`accounts`](../../../-internal-/interfaces/ApplicationTxn#accounts)

***

### appArgs()

> **appArgs**(`index`): [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:382](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L382)

Arguments passed to the application in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](../../../type-aliases/uint64)

#### Returns

[`bytes`](../../../type-aliases/bytes)

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`appArgs`](../../../-internal-/interfaces/ApplicationTxn#appargs)

***

### approvalProgramPages()

> **approvalProgramPages**(`index`): [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:402](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L402)

Approval Program as an array of pages

#### Parameters

##### index

[`uint64`](../../../type-aliases/uint64)

#### Returns

[`bytes`](../../../type-aliases/bytes)

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`approvalProgramPages`](../../../-internal-/interfaces/ApplicationTxn#approvalprogrampages)

***

### apps()

> **apps**(`index`): [`Application`](../../../type-aliases/Application)

Defined in: [packages/algo-ts/src/transactions.ts:397](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L397)

Foreign Apps listed in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](../../../type-aliases/uint64)

#### Returns

[`Application`](../../../type-aliases/Application)

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`apps`](../../../-internal-/interfaces/ApplicationTxn#apps)

***

### assets()

> **assets**(`index`): [`Asset`](../../../type-aliases/Asset)

Defined in: [packages/algo-ts/src/transactions.ts:392](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L392)

Foreign Assets listed in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](../../../type-aliases/uint64)

#### Returns

[`Asset`](../../../type-aliases/Asset)

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`assets`](../../../-internal-/interfaces/ApplicationTxn#assets)

***

### clearStateProgramPages()

> **clearStateProgramPages**(`index`): [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:407](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L407)

Clear State Program as an array of pages

#### Parameters

##### index

[`uint64`](../../../type-aliases/uint64)

#### Returns

[`bytes`](../../../type-aliases/bytes)

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`clearStateProgramPages`](../../../-internal-/interfaces/ApplicationTxn#clearstateprogrampages)

***

### logs()

> **logs**(`index`): [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:356](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L356)

Log messages emitted by an application call

#### Parameters

##### index

[`uint64`](../../../type-aliases/uint64)

#### Returns

[`bytes`](../../../type-aliases/bytes)

#### Inherited from

[`ApplicationTxn`](../../../-internal-/interfaces/ApplicationTxn).[`logs`](../../../-internal-/interfaces/ApplicationTxn#logs)