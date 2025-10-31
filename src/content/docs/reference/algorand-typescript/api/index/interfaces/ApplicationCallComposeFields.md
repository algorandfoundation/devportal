---
title: ApplicationCallComposeFields
type: interface
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / ApplicationCallComposeFields

Defined in: [itxn-compose.ts:22](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L22)

## Extends

- [`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/)

## Properties

### accounts?

> `optional` **accounts**: readonly ([`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/))[]

Defined in: [itxn.ts:951](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L951)

Accounts listed in the ApplicationCall transaction

#### Param

Index of the account to get

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`accounts`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#accounts)

---

### appArgs?

> `optional` **appArgs**: readonly `unknown`[]

Defined in: [itxn.ts:946](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L946)

Arguments passed to the application in the ApplicationCall transaction

#### Param

Index of the arg to get

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`appArgs`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#appargs)

---

### appId?

> `optional` **appId**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) \| [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/)

Defined in: [itxn.ts:907](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L907)

ApplicationID from ApplicationCall transaction

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`appId`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#appid)

---

### approvalProgram?

> `optional` **approvalProgram**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/) \| readonly [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)[]

Defined in: [itxn.ts:936](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L936)

All approval program pages

#### Param

Index of the page to get

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`approvalProgram`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#approvalprogram)

---

### apps?

> `optional` **apps**: readonly ([`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) \| [`Application`](/reference/algorand-typescript/api/index/type-aliases/application/))[]

Defined in: [itxn.ts:961](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L961)

Foreign Apps listed in the ApplicationCall transaction

#### Param

Index of the application to get

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`apps`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#apps)

---

### assets?

> `optional` **assets**: readonly ([`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) \| [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/))[]

Defined in: [itxn.ts:956](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L956)

Foreign Assets listed in the ApplicationCall transaction

#### Param

Index of the asset to get

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`assets`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#assets)

---

### clearStateProgram?

> `optional` **clearStateProgram**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/) \| readonly [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)[]

Defined in: [itxn.ts:941](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L941)

All clear state program pages

#### Param

Index of the page to get

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`clearStateProgram`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#clearstateprogram)

---

### extraProgramPages?

> `optional` **extraProgramPages**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:931](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L931)

Number of additional pages for each of the application's approval and clear state program

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`extraProgramPages`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#extraprogrampages)

---

### fee?

> `optional` **fee**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:879](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L879)

microalgos

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`fee`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:883](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L883)

round number

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`firstValid`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:887](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L887)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`firstValidTime`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#firstvalidtime)

---

### globalNumBytes?

> `optional` **globalNumBytes**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:919](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L919)

Number of global state byteslices this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`globalNumBytes`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#globalnumbytes)

---

### globalNumUint?

> `optional` **globalNumUint**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:915](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L915)

Number of global state integers this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`globalNumUint`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#globalnumuint)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:891](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L891)

round number

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`lastValid`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:899](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L899)

32 byte lease value

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`lease`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#lease)

---

### localNumBytes?

> `optional` **localNumBytes**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:927](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L927)

Number of local state byteslices this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`localNumBytes`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#localnumbytes)

---

### localNumUint?

> `optional` **localNumUint**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:923](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L923)

Number of local state integers this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`localNumUint`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#localnumuint)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:895](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L895)

Any data up to 1024 bytes

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`note`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#note)

---

### onCompletion?

> `optional` **onCompletion**: [`OnCompleteAction`](/reference/algorand-typescript/api/index/enumerations/oncompleteaction/)

Defined in: [itxn.ts:911](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L911)

ApplicationCall transaction on completion action

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`onCompletion`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#oncompletion)

---

### rejectVersion?

> `optional` **rejectVersion**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:965](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L965)

Application version for which the txn must reject

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`rejectVersion`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#rejectversion)

---

### rekeyTo?

> `optional` **rekeyTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:903](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L903)

32 byte Sender's new AuthAddr

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`rekeyTo`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#rekeyto)

---

### sender?

> `optional` **sender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:875](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L875)

32 byte address

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`sender`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#sender)

---

### type

> **type**: [`ApplicationCall`](/reference/algorand-typescript/api/index/enumerations/transactiontype/#applicationcall)

Defined in: [itxn-compose.ts:23](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L23)
