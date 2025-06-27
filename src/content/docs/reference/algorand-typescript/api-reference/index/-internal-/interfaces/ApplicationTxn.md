---
title: 'ApplicationTxn'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [\<internal\>](/reference/readme) / ApplicationTxn

# Interface: ApplicationTxn

Defined in: [packages/algo-ts/src/transactions.ts:282](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L282)

## Extends

- [`TransactionBase`](/reference/algorand-typescript/transactionbase)

## Extended by

- [`ApplicationInnerTxn`](/namespaces/itxn/interfaces/applicationinnertxn)
- [`ApplicationTxn`](/namespaces/gtxn/interfaces/applicationtxn)

## Properties

### appId

> `readonly` **appId**: [`Application`](/type-aliases/application)

Defined in: [packages/algo-ts/src/transactions.ts:286](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L286)

ApplicationID from ApplicationCall transaction

---

### approvalProgram

> `readonly` **approvalProgram**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L306)

Approval program

---

### clearStateProgram

> `readonly` **clearStateProgram**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:311](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L311)

Clear State program

---

### createdApp

> `readonly` **createdApp**: [`Application`](/type-aliases/application)

Defined in: [packages/algo-ts/src/transactions.ts:366](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L366)

ApplicationID allocated by the creation of an application

---

### extraProgramPages

> `readonly` **extraProgramPages**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:346](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L346)

Number of additional pages for each of the application's approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

---

### fee

> `readonly` **fee**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`fee`](/reference/algorand-typescript/transactionbase#fee)

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`firstValid`](/reference/algorand-typescript/transactionbase#firstvalid)

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`firstValidTime`](/reference/algorand-typescript/transactionbase#firstvalidtime)

---

### globalNumBytes

> `readonly` **globalNumBytes**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:331](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L331)

Number of global state byteslices in ApplicationCall

---

### globalNumUint

> `readonly` **globalNumUint**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:326](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L326)

Number of global state integers in ApplicationCall

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`groupIndex`](/reference/algorand-typescript/transactionbase#groupindex)

---

### lastLog

> `readonly` **lastLog**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:351](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L351)

The last message emitted. Empty bytes if none were emitted. Application mode only

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`lastValid`](/reference/algorand-typescript/transactionbase#lastvalid)

---

### lease

> `readonly` **lease**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`lease`](/reference/algorand-typescript/transactionbase#lease)

---

### localNumBytes

> `readonly` **localNumBytes**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:341](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L341)

Number of local state byteslices in ApplicationCall

---

### localNumUint

> `readonly` **localNumUint**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:336](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L336)

Number of local state integers in ApplicationCall

---

### note

> `readonly` **note**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`note`](/reference/algorand-typescript/transactionbase#note)

---

### numAccounts

> `readonly` **numAccounts**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:301](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L301)

Number of ApplicationArgs

---

### numAppArgs

> `readonly` **numAppArgs**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:296](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L296)

Number of ApplicationArgs

---

### numApprovalProgramPages

> `readonly` **numApprovalProgramPages**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:371](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L371)

Number of Approval Program pages

---

### numApps

> `readonly` **numApps**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:321](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L321)

Number of Applications

---

### numAssets

> `readonly` **numAssets**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:316](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L316)

Number of Assets

---

### numClearStateProgramPages

> `readonly` **numClearStateProgramPages**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:376](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L376)

Number of Clear State Program pages

---

### numLogs

> `readonly` **numLogs**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:361](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L361)

Number of logs

---

### onCompletion

> `readonly` **onCompletion**: [`OnCompleteActionStr`](/arc4/type-aliases/oncompleteactionstr)

Defined in: [packages/algo-ts/src/transactions.ts:291](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L291)

ApplicationCall transaction on completion action

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`rekeyTo`](/reference/algorand-typescript/transactionbase#rekeyto)

---

### sender

> `readonly` **sender**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`sender`](/reference/algorand-typescript/transactionbase#sender)

---

### txnId

> `readonly` **txnId**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`txnId`](/reference/algorand-typescript/transactionbase#txnid)

---

### type

> `readonly` **type**: [`ApplicationCall`](/enumerations/transactiontype#applicationcall)

Defined in: [packages/algo-ts/src/transactions.ts:411](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L411)

Transaction type as integer

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`typeBytes`](/reference/algorand-typescript/transactionbase#typebytes)

## Methods

### accounts()

> **accounts**(`index`): [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:387](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L387)

Accounts listed in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](/type-aliases/uint64)

#### Returns

[`Account`](/type-aliases/account)

---

### appArgs()

> **appArgs**(`index`): [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:382](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L382)

Arguments passed to the application in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](/type-aliases/uint64)

#### Returns

[`bytes`](/type-aliases/bytes)

---

### approvalProgramPages()

> **approvalProgramPages**(`index`): [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:402](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L402)

Approval Program as an array of pages

#### Parameters

##### index

[`uint64`](/type-aliases/uint64)

#### Returns

[`bytes`](/type-aliases/bytes)

---

### apps()

> **apps**(`index`): [`Application`](/type-aliases/application)

Defined in: [packages/algo-ts/src/transactions.ts:397](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L397)

Foreign Apps listed in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](/type-aliases/uint64)

#### Returns

[`Application`](/type-aliases/application)

---

### assets()

> **assets**(`index`): [`Asset`](/type-aliases/asset)

Defined in: [packages/algo-ts/src/transactions.ts:392](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L392)

Foreign Assets listed in the ApplicationCall transaction

#### Parameters

##### index

[`uint64`](/type-aliases/uint64)

#### Returns

[`Asset`](/type-aliases/asset)

---

### clearStateProgramPages()

> **clearStateProgramPages**(`index`): [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:407](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L407)

Clear State Program as an array of pages

#### Parameters

##### index

[`uint64`](/type-aliases/uint64)

#### Returns

[`bytes`](/type-aliases/bytes)

---

### logs()

> **logs**(`index`): [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:356](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L356)

Log messages emitted by an application call

#### Parameters

##### index

[`uint64`](/type-aliases/uint64)

#### Returns

[`bytes`](/type-aliases/bytes)
