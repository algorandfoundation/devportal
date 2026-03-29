---
editUrl: false
next: false
prev: false
title: 'ApplicationCallComposeFields'
---

Defined in: [itxn-compose.ts:22](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L22)

## Extends

- [`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/)

## Properties

### accounts?

> `optional` **accounts**: readonly ([`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/))[]

Defined in: [itxn.ts:951](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L951)

Accounts listed in the ApplicationCall transaction

#### Param

Index of the account to get

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`accounts`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#accounts)

---

### appArgs?

> `optional` **appArgs**: readonly `unknown`[]

Defined in: [itxn.ts:946](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L946)

Arguments passed to the application in the ApplicationCall transaction

#### Param

Index of the arg to get

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`appArgs`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#appargs)

---

### appId?

> `optional` **appId**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) \| [`Application`](/algorand-typescript/api/index/type-aliases/application/)

Defined in: [itxn.ts:907](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L907)

ApplicationID from ApplicationCall transaction

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`appId`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#appid)

---

### approvalProgram?

> `optional` **approvalProgram**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| readonly [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)[]

Defined in: [itxn.ts:936](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L936)

All approval program pages

#### Param

Index of the page to get

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`approvalProgram`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#approvalprogram)

---

### apps?

> `optional` **apps**: readonly ([`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) \| [`Application`](/algorand-typescript/api/index/type-aliases/application/))[]

Defined in: [itxn.ts:961](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L961)

Foreign Apps listed in the ApplicationCall transaction

#### Param

Index of the application to get

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`apps`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#apps)

---

### assets?

> `optional` **assets**: readonly ([`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) \| [`Asset`](/algorand-typescript/api/index/type-aliases/asset/))[]

Defined in: [itxn.ts:956](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L956)

Foreign Assets listed in the ApplicationCall transaction

#### Param

Index of the asset to get

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`assets`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#assets)

---

### clearStateProgram?

> `optional` **clearStateProgram**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| readonly [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)[]

Defined in: [itxn.ts:941](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L941)

All clear state program pages

#### Param

Index of the page to get

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`clearStateProgram`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#clearstateprogram)

---

### extraProgramPages?

> `optional` **extraProgramPages**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:931](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L931)

Number of additional pages for each of the application's approval and clear state program

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`extraProgramPages`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#extraprogrampages)

---

### fee?

> `optional` **fee**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:879](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L879)

microalgos

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`fee`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:883](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L883)

round number

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`firstValid`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:887](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L887)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`firstValidTime`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#firstvalidtime)

---

### globalNumBytes?

> `optional` **globalNumBytes**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:919](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L919)

Number of global state byteslices this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`globalNumBytes`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#globalnumbytes)

---

### globalNumUint?

> `optional` **globalNumUint**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:915](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L915)

Number of global state integers this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`globalNumUint`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#globalnumuint)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:891](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L891)

round number

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`lastValid`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:899](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L899)

32 byte lease value

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`lease`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#lease)

---

### localNumBytes?

> `optional` **localNumBytes**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:927](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L927)

Number of local state byteslices this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`localNumBytes`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#localnumbytes)

---

### localNumUint?

> `optional` **localNumUint**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:923](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L923)

Number of local state integers this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`localNumUint`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#localnumuint)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:895](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L895)

Any data up to 1024 bytes

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`note`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#note)

---

### onCompletion?

> `optional` **onCompletion**: [`OnCompleteAction`](/algorand-typescript/api/index/enumerations/oncompleteaction/)

Defined in: [itxn.ts:911](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L911)

ApplicationCall transaction on completion action

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`onCompletion`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#oncompletion)

---

### rejectVersion?

> `optional` **rejectVersion**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:965](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L965)

Application version for which the txn must reject

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`rejectVersion`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#rejectversion)

---

### rekeyTo?

> `optional` **rekeyTo**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:903](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L903)

32 byte Sender's new AuthAddr

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`rekeyTo`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#rekeyto)

---

### sender?

> `optional` **sender**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:875](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L875)

32 byte address

#### Inherited from

[`ApplicationCallFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`sender`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#sender)

---

### type

> **type**: [`ApplicationCall`](/algorand-typescript/api/index/enumerations/transactiontype/#applicationcall)

Defined in: [itxn-compose.ts:23](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L23)
