---
editUrl: false
next: false
prev: false
title: "generateAddressWithSigners"
---

> **generateAddressWithSigners**(`args`): `object`

Defined in: [packages/transact/src/signer.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/signer.ts#L48)

Generate type-safe domain-separated signer callbacks given an ed25519 pubkey and a signing callback

## Parameters

### args

The arguments for generating signers

#### ed25519Pubkey

`Uint8Array`

The ed25519 public key used for signing

#### rawEd25519Signer

`RawEd25519Signer`

A callback function that signs raw bytes using the ed25519 private key

#### sendingAddress?

[`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)

The address that will be used as the sender of transactions. If not provided, defaults to the address derived from the ed25519 public key. This is useful when signing for a rekeyed account where the sending address differs from the auth address.

## Returns

`object`

An object containing the sending address and various signer functions

### addr

> **addr**: `Readonly`\<[`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)\>

### lsigSigner

> **lsigSigner**: [`DelegatedLsigSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/delegatedlsigsigner/)

### mxBytesSigner

> **mxBytesSigner**: [`MxBytesSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/mxbytessigner/)

### programDataSigner

> **programDataSigner**: [`ProgramDataSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/programdatasigner/)

### signer

> **signer**: [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)
