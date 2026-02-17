---
title: AnyTransactionComposeFields
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/README/) / AnyTransactionComposeFields

Defined in: [itxn-compose.ts:26](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L26)

## Extends

- [`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/PaymentFields/).[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`AssetTransferFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetTransferFields/).[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/)

## Properties

### accounts?

> `optional` **accounts**: readonly ([`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/))[]

Defined in: [itxn.ts:951](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L951)

Accounts listed in the ApplicationCall transaction

#### Param

Index of the account to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`accounts`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#accounts)

---

### amount?

> `optional` **amount**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:621](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L621)

microalgos

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/PaymentFields/).[`amount`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/PaymentFields/#amount)

---

### appArgs?

> `optional` **appArgs**: readonly `unknown`[]

Defined in: [itxn.ts:946](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L946)

Arguments passed to the application in the ApplicationCall transaction

#### Param

Index of the arg to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`appArgs`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#appargs)

---

### appId?

> `optional` **appId**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Application/)

Defined in: [itxn.ts:907](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L907)

ApplicationID from ApplicationCall transaction

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`appId`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#appid)

---

### approvalProgram?

> `optional` **approvalProgram**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/) \| readonly [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)[]

Defined in: [itxn.ts:936](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L936)

All approval program pages

#### Param

Index of the page to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`approvalProgram`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#approvalprogram)

---

### apps?

> `optional` **apps**: readonly ([`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Application`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Application/))[]

Defined in: [itxn.ts:961](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L961)

Foreign Apps listed in the ApplicationCall transaction

#### Param

Index of the application to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`apps`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#apps)

---

### assetAmount?

> `optional` **assetAmount**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:811](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L811)

value in Asset's units

#### Inherited from

[`AssetTransferFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetTransferFields/).[`assetAmount`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetTransferFields/#assetamount)

---

### assetCloseTo?

> `optional` **assetCloseTo**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:823](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L823)

32 byte address

#### Inherited from

[`AssetTransferFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetTransferFields/).[`assetCloseTo`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetTransferFields/#assetcloseto)

---

### assetName?

> `optional` **assetName**: `string` \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:745](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L745)

The asset name

#### Inherited from

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`assetName`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/#assetname)

---

### assetReceiver?

> `optional` **assetReceiver**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:819](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L819)

32 byte address

#### Inherited from

[`AssetTransferFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetTransferFields/).[`assetReceiver`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetTransferFields/#assetreceiver)

---

### assets?

> `optional` **assets**: readonly ([`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Asset/))[]

Defined in: [itxn.ts:956](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L956)

Foreign Assets listed in the ApplicationCall transaction

#### Param

Index of the asset to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`assets`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#assets)

---

### assetSender?

> `optional` **assetSender**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:815](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L815)

32 byte address. Source of assets if Sender is the Asset's Clawback address.

#### Inherited from

[`AssetTransferFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetTransferFields/).[`assetSender`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetTransferFields/#assetsender)

---

### clawback?

> `optional` **clawback**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:769](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L769)

32 byte address

#### Inherited from

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`clawback`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/#clawback)

---

### clearStateProgram?

> `optional` **clearStateProgram**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/) \| readonly [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)[]

Defined in: [itxn.ts:941](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L941)

All clear state program pages

#### Param

Index of the page to get

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`clearStateProgram`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#clearstateprogram)

---

### closeRemainderTo?

> `optional` **closeRemainderTo**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:625](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L625)

32 byte address

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/PaymentFields/).[`closeRemainderTo`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/PaymentFields/#closeremainderto)

---

### configAsset?

> `optional` **configAsset**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Asset/)

Defined in: [itxn.ts:725](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L725)

Asset ID in asset config transaction

#### Inherited from

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`configAsset`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/#configasset)

---

### decimals?

> `optional` **decimals**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:733](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L733)

Number of digits to display after the decimal place when displaying the asset

#### Inherited from

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`decimals`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/#decimals)

---

### defaultFrozen?

> `optional` **defaultFrozen**: `boolean`

Defined in: [itxn.ts:737](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L737)

Whether the asset's slots are frozen by default or not, 0 or 1

#### Inherited from

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`defaultFrozen`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/#defaultfrozen)

---

### extraProgramPages?

> `optional` **extraProgramPages**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:931](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L931)

Number of additional pages for each of the application's approval and clear state program

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`extraProgramPages`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#extraprogrampages)

---

### fee?

> `optional` **fee**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:589](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L589)

microalgos

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`fee`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:593](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L593)

round number

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`firstValid`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:597](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L597)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`firstValidTime`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#firstvalidtime)

---

### freeze?

> `optional` **freeze**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:765](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L765)

32 byte address

#### Inherited from

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`freeze`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/#freeze)

---

### freezeAccount?

> `optional` **freezeAccount**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:865](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L865)

32 byte address of the account whose asset slot is being frozen or un-frozen

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`freezeAccount`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#freezeaccount)

---

### freezeAsset?

> `optional` **freezeAsset**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Asset/)

Defined in: [itxn.ts:861](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L861)

Asset ID being frozen or un-frozen

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`freezeAsset`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#freezeasset)

---

### frozen?

> `optional` **frozen**: `boolean`

Defined in: [itxn.ts:869](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L869)

The new frozen value

#### Inherited from

[`AssetFreezeFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/).[`frozen`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetFreezeFields/#frozen)

---

### globalNumBytes?

> `optional` **globalNumBytes**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:919](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L919)

Number of global state byteslices this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`globalNumBytes`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#globalnumbytes)

---

### globalNumUint?

> `optional` **globalNumUint**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:915](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L915)

Number of global state integers this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`globalNumUint`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#globalnumuint)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:601](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L601)

round number

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`lastValid`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:609](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L609)

32 byte lease value

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`lease`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#lease)

---

### localNumBytes?

> `optional` **localNumBytes**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:927](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L927)

Number of local state byteslices this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`localNumBytes`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#localnumbytes)

---

### localNumUint?

> `optional` **localNumUint**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:923](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L923)

Number of local state integers this application makes use of.

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`localNumUint`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#localnumuint)

---

### manager?

> `optional` **manager**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:757](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L757)

32 byte address

#### Inherited from

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`manager`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/#manager)

---

### metadataHash?

> `optional` **metadataHash**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:753](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L753)

32 byte commitment to unspecified asset metadata

#### Inherited from

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`metadataHash`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/#metadatahash)

---

### nonparticipation?

> `optional` **nonparticipation**: `boolean`

Defined in: [itxn.ts:683](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L683)

Marks an account nonparticipating for rewards

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`nonparticipation`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#nonparticipation)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:605](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L605)

Any data up to 1024 bytes

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`note`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#note)

---

### onCompletion?

> `optional` **onCompletion**: [`OnCompleteAction`](/docs/algorand-typescript/typescript/latest/api/index/enumerations/OnCompleteAction/)

Defined in: [itxn.ts:911](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L911)

ApplicationCall transaction on completion action

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`onCompletion`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#oncompletion)

---

### receiver?

> `optional` **receiver**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:617](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L617)

32 byte address

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/PaymentFields/).[`receiver`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/PaymentFields/#receiver)

---

### rejectVersion?

> `optional` **rejectVersion**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:965](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L965)

Application version for which the txn must reject

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`rejectVersion`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#rejectversion)

---

### rekeyTo?

> `optional` **rekeyTo**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:613](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L613)

32 byte Sender's new AuthAddr

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`rekeyTo`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#rekeyto)

---

### reserve?

> `optional` **reserve**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:761](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L761)

32 byte address

#### Inherited from

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`reserve`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/#reserve)

---

### selectionKey?

> `optional` **selectionKey**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:667](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L667)

32 byte address

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`selectionKey`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#selectionkey)

---

### sender?

> `optional` **sender**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:585](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L585)

32 byte address

#### Inherited from

[`ApplicationCallFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/).[`sender`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/ApplicationCallFields/#sender)

---

### stateProofKey?

> `optional` **stateProofKey**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`64`\>

Defined in: [itxn.ts:687](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L687)

64 byte state proof public key

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`stateProofKey`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#stateproofkey)

---

### total?

> `optional` **total**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:729](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L729)

Total number of units of this asset created

#### Inherited from

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`total`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/#total)

---

### type

> **type**: [`TransactionType`](/docs/algorand-typescript/typescript/latest/api/index/enumerations/TransactionType/)

Defined in: [itxn-compose.ts:33](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L33)

---

### unitName?

> `optional` **unitName**: `string` \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:741](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L741)

Unit name of the asset

#### Inherited from

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`unitName`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/#unitname)

---

### url?

> `optional` **url**: `string` \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:749](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L749)

URL

#### Inherited from

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/).[`url`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetConfigFields/#url)

---

### voteFirst?

> `optional` **voteFirst**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:671](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L671)

The first round that the participation key is valid.

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`voteFirst`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#votefirst)

---

### voteKey?

> `optional` **voteKey**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:663](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L663)

32 byte address

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`voteKey`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#votekey)

---

### voteKeyDilution?

> `optional` **voteKeyDilution**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:679](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L679)

Dilution for the 2-level participation key

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`voteKeyDilution`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#votekeydilution)

---

### voteLast?

> `optional` **voteLast**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:675](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L675)

The last round that the participation key is valid.

#### Inherited from

[`KeyRegistrationFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/).[`voteLast`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/KeyRegistrationFields/#votelast)

---

### xferAsset?

> `optional` **xferAsset**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`Asset`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Asset/)

Defined in: [itxn.ts:807](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L807)

Asset ID

#### Inherited from

[`AssetTransferFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetTransferFields/).[`xferAsset`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/AssetTransferFields/#xferasset)
