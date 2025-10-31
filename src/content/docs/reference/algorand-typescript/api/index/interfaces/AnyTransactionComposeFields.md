---
title: AnyTransactionComposeFields
type: interface
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / AnyTransactionComposeFields

Defined in: [itxn-compose.ts:26](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L26)

## Extends

- [`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`KeyRegistrationFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/).[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/)

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

### amount?

> `optional` **amount**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:621](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L621)

microalgos

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`amount`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#amount)

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

### assetAmount?

> `optional` **assetAmount**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:811](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L811)

value in Asset's units

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`assetAmount`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#assetamount)

---

### assetCloseTo?

> `optional` **assetCloseTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:823](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L823)

32 byte address

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`assetCloseTo`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#assetcloseto)

---

### assetName?

> `optional` **assetName**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:745](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L745)

The asset name

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`assetName`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#assetname)

---

### assetReceiver?

> `optional` **assetReceiver**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:819](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L819)

32 byte address

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`assetReceiver`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#assetreceiver)

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

### assetSender?

> `optional` **assetSender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:815](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L815)

32 byte address. Source of assets if Sender is the Asset's Clawback address.

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`assetSender`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#assetsender)

---

### clawback?

> `optional` **clawback**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:769](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L769)

32 byte address

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`clawback`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#clawback)

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

### closeRemainderTo?

> `optional` **closeRemainderTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:625](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L625)

32 byte address

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`closeRemainderTo`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#closeremainderto)

---

### configAsset?

> `optional` **configAsset**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) \| [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [itxn.ts:725](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L725)

Asset ID in asset config transaction

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`configAsset`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#configasset)

---

### decimals?

> `optional` **decimals**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:733](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L733)

Number of digits to display after the decimal place when displaying the asset

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`decimals`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#decimals)

---

### defaultFrozen?

> `optional` **defaultFrozen**: `boolean`

Defined in: [itxn.ts:737](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L737)

Whether the asset's slots are frozen by default or not, 0 or 1

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`defaultFrozen`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#defaultfrozen)

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

Defined in: [itxn.ts:589](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L589)

microalgos

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`fee`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:593](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L593)

round number

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`firstValid`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:597](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L597)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`firstValidTime`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#firstvalidtime)

---

### freeze?

> `optional` **freeze**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:765](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L765)

32 byte address

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`freeze`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#freeze)

---

### freezeAccount?

> `optional` **freezeAccount**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:865](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L865)

32 byte address of the account whose asset slot is being frozen or un-frozen

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`freezeAccount`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#freezeaccount)

---

### freezeAsset?

> `optional` **freezeAsset**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) \| [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [itxn.ts:861](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L861)

Asset ID being frozen or un-frozen

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`freezeAsset`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#freezeasset)

---

### frozen?

> `optional` **frozen**: `boolean`

Defined in: [itxn.ts:869](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L869)

The new frozen value

#### Inherited from

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/).[`frozen`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/#frozen)

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

Defined in: [itxn.ts:601](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L601)

round number

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`lastValid`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:609](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L609)

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

### manager?

> `optional` **manager**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:757](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L757)

32 byte address

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`manager`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#manager)

---

### metadataHash?

> `optional` **metadataHash**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:753](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L753)

32 byte commitment to unspecified asset metadata

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`metadataHash`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#metadatahash)

---

### nonparticipation?

> `optional` **nonparticipation**: `boolean`

Defined in: [itxn.ts:683](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L683)

Marks an account nonparticipating for rewards

#### Inherited from

[`KeyRegistrationFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/).[`nonparticipation`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/#nonparticipation)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:605](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L605)

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

### receiver?

> `optional` **receiver**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:617](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L617)

32 byte address

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`receiver`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#receiver)

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

Defined in: [itxn.ts:613](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L613)

32 byte Sender's new AuthAddr

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`rekeyTo`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#rekeyto)

---

### reserve?

> `optional` **reserve**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:761](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L761)

32 byte address

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`reserve`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#reserve)

---

### selectionKey?

> `optional` **selectionKey**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:667](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L667)

32 byte address

#### Inherited from

[`KeyRegistrationFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/).[`selectionKey`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/#selectionkey)

---

### sender?

> `optional` **sender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:585](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L585)

32 byte address

#### Inherited from

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/).[`sender`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/#sender)

---

### stateProofKey?

> `optional` **stateProofKey**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>

Defined in: [itxn.ts:687](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L687)

64 byte state proof public key

#### Inherited from

[`KeyRegistrationFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/).[`stateProofKey`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/#stateproofkey)

---

### total?

> `optional` **total**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:729](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L729)

Total number of units of this asset created

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`total`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#total)

---

### type

> **type**: [`TransactionType`](/reference/algorand-typescript/api/index/enumerations/transactiontype/)

Defined in: [itxn-compose.ts:33](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L33)

---

### unitName?

> `optional` **unitName**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:741](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L741)

Unit name of the asset

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`unitName`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#unitname)

---

### url?

> `optional` **url**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:749](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L749)

URL

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`url`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#url)

---

### voteFirst?

> `optional` **voteFirst**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:671](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L671)

The first round that the participation key is valid.

#### Inherited from

[`KeyRegistrationFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/).[`voteFirst`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/#votefirst)

---

### voteKey?

> `optional` **voteKey**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:663](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L663)

32 byte address

#### Inherited from

[`KeyRegistrationFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/).[`voteKey`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/#votekey)

---

### voteKeyDilution?

> `optional` **voteKeyDilution**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:679](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L679)

Dilution for the 2-level participation key

#### Inherited from

[`KeyRegistrationFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/).[`voteKeyDilution`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/#votekeydilution)

---

### voteLast?

> `optional` **voteLast**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:675](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L675)

The last round that the participation key is valid.

#### Inherited from

[`KeyRegistrationFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/).[`voteLast`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/#votelast)

---

### xferAsset?

> `optional` **xferAsset**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) \| [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [itxn.ts:807](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L807)

Asset ID

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`xferAsset`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#xferasset)
