---
title: types/indexer
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/indexer

## Table of contents

### Enumerations

- [AccountStatus](/reference/algokit-utils-ts/api/enums/types_indexeraccountstatus/)
- [ApplicationOnComplete](/reference/algokit-utils-ts/api/enums/types_indexerapplicationoncomplete/)
- [SignatureType](/reference/algokit-utils-ts/api/enums/types_indexersignaturetype/)

### Interfaces

- [LookupAssetHoldingsOptions](/reference/algokit-utils-ts/api/interfaces/types_indexerlookupassetholdingsoptions/)

### Type Aliases

- [AccountLookupResult](/reference/algokit-utils-ts/api/modules/types_indexer/#accountlookupresult)
- [AccountParticipation](/reference/algokit-utils-ts/api/modules/types_indexer/#accountparticipation)
- [AccountResult](/reference/algokit-utils-ts/api/modules/types_indexer/#accountresult)
- [AccountStateDelta](/reference/algokit-utils-ts/api/modules/types_indexer/#accountstatedelta)
- [AppLocalState](/reference/algokit-utils-ts/api/modules/types_indexer/#applocalstate)
- [ApplicationCreatedLookupResult](/reference/algokit-utils-ts/api/modules/types_indexer/#applicationcreatedlookupresult)
- [ApplicationLookupResult](/reference/algokit-utils-ts/api/modules/types_indexer/#applicationlookupresult)
- [ApplicationParams](/reference/algokit-utils-ts/api/modules/types_indexer/#applicationparams)
- [ApplicationResult](/reference/algokit-utils-ts/api/modules/types_indexer/#applicationresult)
- [ApplicationTransactionResult](/reference/algokit-utils-ts/api/modules/types_indexer/#applicationtransactionresult)
- [AssetBalancesLookupResult](/reference/algokit-utils-ts/api/modules/types_indexer/#assetbalanceslookupresult)
- [AssetConfigTransactionResult](/reference/algokit-utils-ts/api/modules/types_indexer/#assetconfigtransactionresult)
- [AssetFreezeTransactionResult](/reference/algokit-utils-ts/api/modules/types_indexer/#assetfreezetransactionresult)
- [AssetHolding](/reference/algokit-utils-ts/api/modules/types_indexer/#assetholding)
- [AssetLookupResult](/reference/algokit-utils-ts/api/modules/types_indexer/#assetlookupresult)
- [AssetParams](/reference/algokit-utils-ts/api/modules/types_indexer/#assetparams)
- [AssetResult](/reference/algokit-utils-ts/api/modules/types_indexer/#assetresult)
- [AssetTransferTransactionResult](/reference/algokit-utils-ts/api/modules/types_indexer/#assettransfertransactionresult)
- [AssetsCreatedLookupResult](/reference/algokit-utils-ts/api/modules/types_indexer/#assetscreatedlookupresult)
- [AssetsLookupResult](/reference/algokit-utils-ts/api/modules/types_indexer/#assetslookupresult)
- [EvalDelta](/reference/algokit-utils-ts/api/modules/types_indexer/#evaldelta)
- [EvalDeltaKeyValue](/reference/algokit-utils-ts/api/modules/types_indexer/#evaldeltakeyvalue)
- [KeyRegistrationTransactionResult](/reference/algokit-utils-ts/api/modules/types_indexer/#keyregistrationtransactionresult)
- [LogicTransactionSignature](/reference/algokit-utils-ts/api/modules/types_indexer/#logictransactionsignature)
- [MerkleArrayProof](/reference/algokit-utils-ts/api/modules/types_indexer/#merklearrayproof)
- [MiniAssetHolding](/reference/algokit-utils-ts/api/modules/types_indexer/#miniassetholding)
- [MultisigTransactionSignature](/reference/algokit-utils-ts/api/modules/types_indexer/#multisigtransactionsignature)
- [MultisigTransactionSubSignature](/reference/algokit-utils-ts/api/modules/types_indexer/#multisigtransactionsubsignature)
- [PaymentTransactionResult](/reference/algokit-utils-ts/api/modules/types_indexer/#paymenttransactionresult)
- [StateDelta](/reference/algokit-utils-ts/api/modules/types_indexer/#statedelta)
- [StateProofTransactionResult](/reference/algokit-utils-ts/api/modules/types_indexer/#stateprooftransactionresult)
- [StateSchema](/reference/algokit-utils-ts/api/modules/types_indexer/#stateschema)
- [TransactionLookupResult](/reference/algokit-utils-ts/api/modules/types_indexer/#transactionlookupresult)
- [TransactionResult](/reference/algokit-utils-ts/api/modules/types_indexer/#transactionresult)
- [TransactionSearchResults](/reference/algokit-utils-ts/api/modules/types_indexer/#transactionsearchresults)
- [TransactionSignature](/reference/algokit-utils-ts/api/modules/types_indexer/#transactionsignature)

## Type Aliases

### AccountLookupResult

Ƭ **AccountLookupResult**: `indexerModels.AccountResponse`

**`Deprecated`**

Use `algosdk.indexerModels.AccountResponse`. Indexer result for an account lookup, https://dev.algorand.co/reference/rest-apis/indexer#get-v2accountsaccount-id

#### Defined in

[src/types/indexer.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L8)

---

### AccountParticipation

Ƭ **AccountParticipation**: `indexerModels.AccountParticipation`

**`Deprecated`**

Use `algosdk.indexerModels.AccountParticipation`. Indexer AccountParticipation describes the parameters used by this account in consensus protocol. https://dev.algorand.co/reference/rest-apis/indexer#accountparticipation

#### Defined in

[src/types/indexer.ts:199](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L199)

---

### AccountResult

Ƭ **AccountResult**: `indexerModels.Account`

**`Deprecated`**

Use `algosdk.indexerModels.Account`. Indexer Account information at a given round https://dev.algorand.co/reference/rest-apis/indexer#account

#### Defined in

[src/types/indexer.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L45)

---

### AccountStateDelta

Ƭ **AccountStateDelta**: `indexerModels.AccountStateDelta`

**`Deprecated`**

Use `algosdk.indexerModels.AccountStateDelta`.

#### Defined in

[src/types/indexer.ts:145](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L145)

---

### AppLocalState

Ƭ **AppLocalState**: `indexerModels.ApplicationLocalState`

**`Deprecated`**

Use `algosdk.indexerModels.ApplicationLocalState`. Indexer Stores local state associated with an application. https://dev.algorand.co/reference/rest-apis/indexer#applicationlocalstate

#### Defined in

[src/types/indexer.ts:202](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L202)

---

### ApplicationCreatedLookupResult

Ƭ **ApplicationCreatedLookupResult**: `indexerModels.ApplicationsResponse`

**`Deprecated`**

Use `algosdk.indexerModels.ApplicationsResponse`. Indexer result for an account's created applications, https://dev.algorand.co/reference/rest-apis/indexer#get-v2accountsaccount-idcreated-applications

#### Defined in

[src/types/indexer.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L17)

---

### ApplicationLookupResult

Ƭ **ApplicationLookupResult**: `indexerModels.ApplicationResponse`

**`Deprecated`**

Use `algosdk.indexerModels.ApplicationResponse`. Indexer result for an application lookup, https://dev.algorand.co/reference/rest-apis/indexer#get-v2applicationsapplication-id

#### Defined in

[src/types/indexer.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L39)

---

### ApplicationParams

Ƭ **ApplicationParams**: `indexerModels.ApplicationParams`

**`Deprecated`**

Use `algosdk.indexerModels.ApplicationParams`. Indexer Stores the global information associated with an application https://dev.algorand.co/reference/rest-apis/indexer#applicationparams

#### Defined in

[src/types/indexer.ts:154](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L154)

---

### ApplicationResult

Ƭ **ApplicationResult**: `indexerModels.Application`

**`Deprecated`**

Use `algosdk.indexerModels.Application`. Indexer result of looking up an application

#### Defined in

[src/types/indexer.ts:122](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L122)

---

### ApplicationTransactionResult

Ƭ **ApplicationTransactionResult**: `indexerModels.TransactionApplication`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionApplication`. Indexer Fields for an application transaction https://dev.algorand.co/reference/rest-apis/indexer#transactionapplication

#### Defined in

[src/types/indexer.ts:99](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L99)

---

### AssetBalancesLookupResult

Ƭ **AssetBalancesLookupResult**: `indexerModels.AssetBalancesResponse`

**`Deprecated`**

Use `algosdk.indexerModels.AssetBalancesResponse`. Indexer result for an asset's account holdings, https://dev.algorand.co/reference/rest-apis/indexer#get-v2assetsasset-idbalances

#### Defined in

[src/types/indexer.ts:33](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L33)

---

### AssetConfigTransactionResult

Ƭ **AssetConfigTransactionResult**: `indexerModels.TransactionAssetConfig`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionAssetConfig`. Indexer Fields for asset allocation, re-configuration, and destruction.
https://dev.algorand.co/reference/rest-apis/indexer#transactionassetconfig

A zero value for asset-id indicates asset creation. A zero value for the params indicates asset destruction.

#### Defined in

[src/types/indexer.ts:106](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L106)

---

### AssetFreezeTransactionResult

Ƭ **AssetFreezeTransactionResult**: `indexerModels.TransactionAssetFreeze`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionAssetFreeze`. Indexer Fields for an asset freeze transaction. https://dev.algorand.co/reference/rest-apis/indexer#transactionassetfreeze

#### Defined in

[src/types/indexer.ts:109](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L109)

---

### AssetHolding

Ƭ **AssetHolding**: `indexerModels.AssetHolding`

**`Deprecated`**

Use `algosdk.indexerModels.AssetHolding`. Indexer Describes an asset held by an account. https://dev.algorand.co/reference/rest-apis/indexer#assetholding

#### Defined in

[src/types/indexer.ts:205](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L205)

---

### AssetLookupResult

Ƭ **AssetLookupResult**: `indexerModels.AssetResponse`

**`Deprecated`**

Use `algosdk.indexerModels.AssetResponse`. Indexer result for an asset lookup, https://dev.algorand.co/reference/rest-apis/indexer#get-v2assetsasset-id

#### Defined in

[src/types/indexer.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L20)

---

### AssetParams

Ƭ **AssetParams**: `indexerModels.AssetParams`

**`Deprecated`**

Use `algosdk.indexerModels.AssetParams`. Indexer AssetParams specifies the parameters for an asset. https://dev.algorand.co/reference/rest-apis/indexer#assetparams

#### Defined in

[src/types/indexer.ts:176](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L176)

---

### AssetResult

Ƭ **AssetResult**: `indexerModels.Asset`

**`Deprecated`**

Use `algosdk.indexerModels.Asset`. Indexer Fields to specify both the unique identifier and the parameters for an asset. https://dev.algorand.co/reference/rest-apis/indexer#asset

#### Defined in

[src/types/indexer.ts:118](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L118)

---

### AssetTransferTransactionResult

Ƭ **AssetTransferTransactionResult**: `indexerModels.TransactionAssetTransfer`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionAssetTransfer`. Indexer Fields for an asset transfer transaction. https://dev.algorand.co/reference/rest-apis/indexer#transactionassettransfer

#### Defined in

[src/types/indexer.ts:112](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L112)

---

### AssetsCreatedLookupResult

Ƭ **AssetsCreatedLookupResult**: `indexerModels.AssetsResponse`

**`Deprecated`**

Use `algosdk.indexerModels.AssetsResponse`. Indexer result for an account's created assets, https://dev.algorand.co/reference/rest-apis/indexer#get-v2accountsaccount-idcreated-assets

#### Defined in

[src/types/indexer.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L14)

---

### AssetsLookupResult

Ƭ **AssetsLookupResult**: `indexerModels.AssetHoldingsResponse`

**`Deprecated`**

Use `algosdk.indexerModels.AssetHoldingsResponse`. Indexer result for an account's asset holdings, https://dev.algorand.co/reference/rest-apis/indexer#get-v2accountsaccount-idassets

#### Defined in

[src/types/indexer.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L11)

---

### EvalDelta

Ƭ **EvalDelta**: `indexerModels.EvalDelta`

**`Deprecated`**

Use `algosdk.indexerModels.EvalDelta`. Indexer Represents a TEAL value delta. https://dev.algorand.co/reference/rest-apis/indexer#evaldelta

#### Defined in

[src/types/indexer.ts:151](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L151)

---

### EvalDeltaKeyValue

Ƭ **EvalDeltaKeyValue**: `indexerModels.EvalDeltaKeyValue`

**`Deprecated`**

Use `algosdk.indexerModels.EvalDeltaKeyValue`.

#### Defined in

[src/types/indexer.ts:142](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L142)

---

### KeyRegistrationTransactionResult

Ƭ **KeyRegistrationTransactionResult**: `indexerModels.TransactionKeyreg`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionKeyreg`. Indexer Fields for a `keyreg` transaction https://dev.algorand.co/reference/rest-apis/indexer#transactionkeyreg

#### Defined in

[src/types/indexer.ts:115](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L115)

---

### LogicTransactionSignature

Ƭ **LogicTransactionSignature**: `indexerModels.TransactionSignatureLogicsig`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionSignatureLogicsig`. Indexer [lsig] Programatic transaction signature.

https://dev.algorand.co/reference/rest-apis/indexer#transactionsignaturelogicsig

https://dev.algorand.co/concepts/smart-contracts/logic-sigs

#### Defined in

[src/types/indexer.ts:133](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L133)

---

### MerkleArrayProof

Ƭ **MerkleArrayProof**: `indexerModels.MerkleArrayProof`

**`Deprecated`**

Use `algosdk.indexerModels.MerkleArrayProof`. Indexer Merkle array Proof.

Proof is used to convince a verifier about membership of leaves: h0,h1...hn
at indexes i0,i1...in on a tree. The verifier has a trusted value of the tree
root hash.

Path is bounded by MaxNumLeaves since there could be multiple reveals, and
given the distribution of the elt positions and the depth of the tree,
the path length can increase up to 2^MaxTreeDepth / 2

Consider two different reveals for the same tree:

```
.                z5
.         z3              z4
.     y       z       z1      z2
.   q   r   s   t   u   v   w   x
.  a b c d e f g h i j k l m n o p
.    ^
. hints: [a, r, z, z4]
. len(hints) = 4
```

You need a to combine with b to get q, need r to combine with the computed q and get y, and so on.

The worst case is this:

```
.               z5
.        z3              z4
.    y       z       z1      z2
.  q   r   s   t   u   v   w   x
. a b c d e f g h i j k l m n o p
. ^   ^     ^   ^ ^   ^     ^   ^
.
. hints: [b, d, e, g, j, l, m, o]
. len(hints) = 2^4/2
```

#### Defined in

[src/types/indexer.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L96)

---

### MiniAssetHolding

Ƭ **MiniAssetHolding**: `indexerModels.MiniAssetHolding`

**`Deprecated`**

Use `algosdk.indexerModels.MiniAssetHolding`. Indexer Describes an asset holding for an account of a known asset. https://dev.algorand.co/reference/rest-apis/indexer#miniassetholding

#### Defined in

[src/types/indexer.ts:208](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L208)

---

### MultisigTransactionSignature

Ƭ **MultisigTransactionSignature**: `indexerModels.TransactionSignatureMultisig`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionSignatureMultisig`. Indexer [msig] structure holding multiple subsignatures. https://dev.algorand.co/reference/rest-apis/indexer#transactionsignaturemultisig

#### Defined in

[src/types/indexer.ts:136](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L136)

---

### MultisigTransactionSubSignature

Ƭ **MultisigTransactionSubSignature**: `indexerModels.TransactionSignatureMultisigSubsignature`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionSignatureMultisigSubsignature`. Indexer Sub-signature for a multisig signature https://dev.algorand.co/reference/rest-apis/indexer#transactionsignaturemultisigsubsignature

#### Defined in

[src/types/indexer.ts:139](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L139)

---

### PaymentTransactionResult

Ƭ **PaymentTransactionResult**: `indexerModels.TransactionPayment`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionPayment`. Indexer Fields for a payment transaction https://dev.algorand.co/reference/rest-apis/indexer#transactionpayment

#### Defined in

[src/types/indexer.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L48)

---

### StateDelta

Ƭ **StateDelta**: [`EvalDeltaKeyValue`](/reference/algokit-utils-ts/api/modules/types_indexer/#evaldeltakeyvalue)[]

**`Deprecated`**

Use `algosdk.indexerModels.EvalDeltaKeyValue[]`.

#### Defined in

[src/types/indexer.ts:148](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L148)

---

### StateProofTransactionResult

Ƭ **StateProofTransactionResult**: `indexerModels.TransactionStateProof`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionStateProof`. Indexer Fields for a state proof transaction https://dev.algorand.co/reference/rest-apis/indexer#transactionstateproof.

See also https://dev.algorand.co/concepts/protocol/state-proofs/,
https://github.com/algorand/go-algorand/blob/master/data/transactions/stateproof.go,
https://github.com/algorand/go-algorand/blob/master/crypto/stateproof/structs.go,
https://github.com/algorand/go-algorand/blob/master/data/stateproofmsg/message.go, and
https://dev.algorand.co/reference/rest-apis/algod/#stateproof.

#### Defined in

[src/types/indexer.ts:58](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L58)

---

### StateSchema

Ƭ **StateSchema**: `indexerModels.StateSchema`

**`Deprecated`**

Use `algosdk.indexerModels.StateSchema`. Indexer Represents a [apls] local-state or [apgs] global-state schema.
https://dev.algorand.co/reference/rest-apis/indexer#stateschema

These schemas determine how much storage may be used in a local-state or global-state for an application.

The more space used, the larger minimum balance must be maintained in the account holding the data.

#### Defined in

[src/types/indexer.ts:163](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L163)

---

### TransactionLookupResult

Ƭ **TransactionLookupResult**: `indexerModels.TransactionResponse`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionResponse`. Indexer result for a transaction lookup, https://dev.algorand.co/reference/rest-apis/indexer#get-v2transactionstxid

#### Defined in

[src/types/indexer.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L36)

---

### TransactionResult

Ƭ **TransactionResult**: `indexerModels.Transaction`

**`Deprecated`**

Use `algosdk.indexerModels.Transaction`. Indexer result for a transaction, https://dev.algorand.co/reference/rest-apis/indexer#transaction

#### Defined in

[src/types/indexer.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L42)

---

### TransactionSearchResults

Ƭ **TransactionSearchResults**: `indexerModels.TransactionsResponse`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionsResponse`. Indexer result for a transaction search, https://dev.algorand.co/reference/rest-apis/indexer#get-v2transactions

#### Defined in

[src/types/indexer.ts:5](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L5)

---

### TransactionSignature

Ƭ **TransactionSignature**: `indexerModels.TransactionSignature`

**`Deprecated`**

Use `algosdk.indexerModels.TransactionSignature`. Indexer Validation signature associated with some data. Only one of the signatures should be provided. https://dev.algorand.co/reference/rest-apis/indexer#transactionsignature

#### Defined in

[src/types/indexer.ts:125](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L125)
