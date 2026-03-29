---
editUrl: false
next: false
prev: false
title: 'AssetParams'
---

> **AssetParams** = `object`

Defined in: [packages/indexer_client/src/models/asset-params.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L12)

AssetParams specifies the parameters for an asset.

\[apar\] when part of an AssetConfig transaction.

Definition:
data/transactions/asset.go : AssetParams

## Properties

### clawback?

> `optional` **clawback**: `string`

Defined in: [packages/indexer_client/src/models/asset-params.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L16)

Address of account used to clawback holdings of this asset. If empty, clawback is not permitted.

---

### creator

> **creator**: `string`

Defined in: [packages/indexer_client/src/models/asset-params.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L21)

The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.

---

### decimals

> **decimals**: `number`

Defined in: [packages/indexer_client/src/models/asset-params.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L26)

The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).

---

### defaultFrozen?

> `optional` **defaultFrozen**: `boolean`

Defined in: [packages/indexer_client/src/models/asset-params.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L31)

Whether holdings of this asset are frozen by default.

---

### freeze?

> `optional` **freeze**: `string`

Defined in: [packages/indexer_client/src/models/asset-params.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L36)

Address of account used to freeze holdings of this asset. If empty, freezing is not permitted.

---

### manager?

> `optional` **manager**: `string`

Defined in: [packages/indexer_client/src/models/asset-params.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L41)

Address of account used to manage the keys of this asset and to destroy it.

---

### metadataHash?

> `optional` **metadataHash**: `Uint8Array`

Defined in: [packages/indexer_client/src/models/asset-params.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L46)

A commitment to some unspecified asset metadata. The format of this metadata is up to the application.

---

### name?

> `optional` **name**: `string`

Defined in: [packages/indexer_client/src/models/asset-params.ts:51](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L51)

Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.

---

### nameB64?

> `optional` **nameB64**: `Uint8Array`

Defined in: [packages/indexer_client/src/models/asset-params.ts:56](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L56)

Base64 encoded name of this asset, as supplied by the creator.

---

### reserve?

> `optional` **reserve**: `string`

Defined in: [packages/indexer_client/src/models/asset-params.ts:61](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L61)

Address of account holding reserve (non-minted) units of this asset.

---

### total

> **total**: `bigint`

Defined in: [packages/indexer_client/src/models/asset-params.ts:66](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L66)

The total number of units of this asset.

---

### unitName?

> `optional` **unitName**: `string`

Defined in: [packages/indexer_client/src/models/asset-params.ts:71](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L71)

Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.

---

### unitNameB64?

> `optional` **unitNameB64**: `Uint8Array`

Defined in: [packages/indexer_client/src/models/asset-params.ts:76](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L76)

Base64 encoded name of a unit of this asset, as supplied by the creator.

---

### url?

> `optional` **url**: `string`

Defined in: [packages/indexer_client/src/models/asset-params.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L81)

URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.

---

### urlB64?

> `optional` **urlB64**: `Uint8Array`

Defined in: [packages/indexer_client/src/models/asset-params.ts:86](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-params.ts#L86)

Base64 encoded URL where more information about the asset can be retrieved.
