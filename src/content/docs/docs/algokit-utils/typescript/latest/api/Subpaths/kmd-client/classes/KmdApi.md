---
editUrl: false
next: false
prev: false
title: 'KmdApi'
---

Defined in: [packages/kmd_client/src/apis/api-service.ts:89](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L89)

## Extended by

- [`KmdClient`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/classes/kmdclient/)

## Constructors

### Constructor

> **new KmdApi**(`httpRequest`): `KmdApi`

Defined in: [packages/kmd_client/src/apis/api-service.ts:90](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L90)

#### Parameters

##### httpRequest

[`BaseHttpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/classes/basehttprequest/)

#### Returns

`KmdApi`

## Properties

### httpRequest

> `readonly` **httpRequest**: [`BaseHttpRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/classes/basehttprequest/)

Defined in: [packages/kmd_client/src/apis/api-service.ts:90](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L90)

## Methods

### createWallet()

> **createWallet**(`body`): `Promise`\<[`CreateWalletResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/createwalletresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:630](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L630)

Create a new wallet (collection of keys) with the given parameters.

#### Parameters

##### body

[`CreateWalletRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/createwalletrequest/)

#### Returns

`Promise`\<[`CreateWalletResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/createwalletresponse/)\>

---

### deleteKey()

> **deleteKey**(`body`): `Promise`\<`void`\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:124](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L124)

Deletes the key with the passed public key from the wallet.

#### Parameters

##### body

[`DeleteKeyRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/deletekeyrequest/)

#### Returns

`Promise`\<`void`\>

---

### deleteMultisig()

> **deleteMultisig**(`body`): `Promise`\<`void`\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:147](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L147)

Deletes multisig preimage information for the passed address from the wallet.

#### Parameters

##### body

[`DeleteMultisigRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/deletemultisigrequest/)

#### Returns

`Promise`\<`void`\>

---

### exportKey()

> **exportKey**(`body`): `Promise`\<[`ExportKeyResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/exportkeyresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:170](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L170)

Export the secret key associated with the passed public key.

#### Parameters

##### body

[`ExportKeyRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/exportkeyrequest/)

#### Returns

`Promise`\<[`ExportKeyResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/exportkeyresponse/)\>

---

### exportMasterKey()

> **exportMasterKey**(`body`): `Promise`\<[`ExportMasterKeyResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/exportmasterkeyresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:195](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L195)

Export the master derivation key from the wallet. This key is a master "backup" key for the underlying wallet. With it, you can regenerate all of the wallets that have been generated with this wallet's `POST /v1/key` endpoint. This key will not allow you to recover keys imported from other wallets, however.

#### Parameters

##### body

[`ExportMasterKeyRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/exportmasterkeyrequest/)

#### Returns

`Promise`\<[`ExportMasterKeyResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/exportmasterkeyresponse/)\>

---

### exportMultisig()

> **exportMultisig**(`body`): `Promise`\<[`ExportMultisigResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/exportmultisigresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:220](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L220)

Given a multisig address whose preimage this wallet stores, returns the information used to generate the address, including public keys, threshold, and multisig version.

#### Parameters

##### body

[`ExportMultisigRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/exportmultisigrequest/)

#### Returns

`Promise`\<[`ExportMultisigResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/exportmultisigresponse/)\>

---

### generateKey()

> **generateKey**(`body`): `Promise`\<[`GenerateKeyResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/generatekeyresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:245](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L245)

Generates the next key in the deterministic key sequence (as determined by the master derivation key) and adds it to the wallet, returning the public key.

#### Parameters

##### body

[`GenerateKeyRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/generatekeyrequest/)

#### Returns

`Promise`\<[`GenerateKeyResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/generatekeyresponse/)\>

---

### importKey()

> **importKey**(`body`): `Promise`\<[`ImportKeyResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/importkeyresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:270](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L270)

Import an externally generated key into the wallet. Note that if you wish to back up the imported key, you must do so by backing up the entire wallet database, because imported keys were not derived from the wallet's master derivation key.

#### Parameters

##### body

[`ImportKeyRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/importkeyrequest/)

#### Returns

`Promise`\<[`ImportKeyResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/importkeyresponse/)\>

---

### importMultisig()

> **importMultisig**(`body`): `Promise`\<[`ImportMultisigResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/importmultisigresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:295](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L295)

Generates a multisig account from the passed public keys array and multisig metadata, and stores all of this in the wallet.

#### Parameters

##### body

[`ImportMultisigRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/importmultisigrequest/)

#### Returns

`Promise`\<[`ImportMultisigResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/importmultisigresponse/)\>

---

### initWalletHandle()

> **initWalletHandle**(`body`): `Promise`\<[`InitWalletHandleTokenResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/initwallethandletokenresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:320](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L320)

Unlock the wallet and return a wallet handle token that can be used for subsequent operations. These tokens expire periodically and must be renewed. You can `POST` the token to `/v1/wallet/info` to see how much time remains until expiration, and renew it with `/v1/wallet/renew`. When you're done, you can invalidate the token with `/v1/wallet/release`.

#### Parameters

##### body

[`InitWalletHandleTokenRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/initwallethandletokenrequest/)

#### Returns

`Promise`\<[`InitWalletHandleTokenResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/initwallethandletokenresponse/)\>

---

### listKeysInWallet()

> **listKeysInWallet**(`body`): `Promise`\<[`ListKeysResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/listkeysresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:345](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L345)

Lists all of the public keys in this wallet. All of them have a stored private key.

#### Parameters

##### body

[`ListKeysRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/listkeysrequest/)

#### Returns

`Promise`\<[`ListKeysResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/listkeysresponse/)\>

---

### listMultisig()

> **listMultisig**(`body`): `Promise`\<[`ListMultisigResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/listmultisigresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:370](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L370)

Lists all of the multisig accounts whose preimages this wallet stores

#### Parameters

##### body

[`ListMultisigRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/listmultisigrequest/)

#### Returns

`Promise`\<[`ListMultisigResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/listmultisigresponse/)\>

---

### listWallets()

> **listWallets**(): `Promise`\<[`ListWalletsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/listwalletsresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:395](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L395)

Lists all of the wallets that kmd is aware of.

#### Returns

`Promise`\<[`ListWalletsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/listwalletsresponse/)\>

---

### releaseWalletHandleToken()

> **releaseWalletHandleToken**(`body`): `Promise`\<`void`\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:415](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L415)

Invalidate the passed wallet handle token, making it invalid for use in subsequent requests.

#### Parameters

##### body

[`ReleaseWalletHandleTokenRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/releasewallethandletokenrequest/)

#### Returns

`Promise`\<`void`\>

---

### renameWallet()

> **renameWallet**(`body`): `Promise`\<[`RenameWalletResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/renamewalletresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:438](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L438)

Rename the underlying wallet to something else

#### Parameters

##### body

[`RenameWalletRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/renamewalletrequest/)

#### Returns

`Promise`\<[`RenameWalletResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/renamewalletresponse/)\>

---

### renewWalletHandleToken()

> **renewWalletHandleToken**(`body`): `Promise`\<[`RenewWalletHandleTokenResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/renewwallethandletokenresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:463](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L463)

Renew a wallet handle token, increasing its expiration duration to its initial value

#### Parameters

##### body

[`RenewWalletHandleTokenRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/renewwallethandletokenrequest/)

#### Returns

`Promise`\<[`RenewWalletHandleTokenResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/renewwallethandletokenresponse/)\>

---

### signMultisigProgram()

> **signMultisigProgram**(`body`): `Promise`\<[`SignProgramMultisigResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/signprogrammultisigresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:488](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L488)

Start a multisig signature, or add a signature to a partially completed multisig signature object.

#### Parameters

##### body

[`SignProgramMultisigRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/signprogrammultisigrequest/)

#### Returns

`Promise`\<[`SignProgramMultisigResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/signprogrammultisigresponse/)\>

---

### signMultisigTransaction()

> **signMultisigTransaction**(`body`): `Promise`\<[`SignMultisigResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/signmultisigresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:644](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L644)

Enables the signing of a transaction using the provided wallet and multisig info.
The public key is used to identify which multisig account key to use for signing.
When a signer is provided it is used to resolve the private key and sign the transaction, enabling rekeyed account signing.

#### Parameters

##### body

###### partialMultisig?

[`MultisigSig`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/multisigsig/)

###### publicKey

`Uint8Array`

###### signer?

`Uint8Array`\<`ArrayBufferLike`\>

###### transaction

[`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)

###### walletHandleToken

`string`

###### walletPassword?

`string`

#### Returns

`Promise`\<[`SignMultisigResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/signmultisigresponse/)\>

A multisig signature or partial signature, which can be used to form a signed transaction.

---

### signProgram()

> **signProgram**(`body`): `Promise`\<[`SignProgramResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/signprogramresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:538](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L538)

Signs the passed program with a key from the wallet, determined by the account named in the request.

#### Parameters

##### body

[`SignProgramRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/signprogramrequest/)

#### Returns

`Promise`\<[`SignProgramResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/signprogramresponse/)\>

---

### signTransaction()

> **signTransaction**(`body`): `Promise`\<[`SignTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/signtransactionresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:657](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L657)

Enables the signing of a transaction using the provided wallet info.
When a public key is provided it is used to resolve the private key and sign the transaction, enabling rekeyed account signing.

#### Parameters

##### body

###### publicKey?

`Uint8Array`\<`ArrayBufferLike`\>

###### transaction

[`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)

###### walletHandleToken

`string`

###### walletPassword?

`string`

#### Returns

`Promise`\<[`SignTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/signtransactionresponse/)\>

An encoded, signed transaction.

---

### version()

> **version**(): `Promise`\<[`VersionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/versionsresponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:585](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L585)

#### Returns

`Promise`\<[`VersionsResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/versionsresponse/)\>

---

### walletInfo()

> **walletInfo**(`body`): `Promise`\<[`WalletInfoResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/walletinforesponse/)\>

Defined in: [packages/kmd_client/src/apis/api-service.ts:605](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L605)

Returns information about the wallet associated with the passed wallet handle token. Additionally returns expiration information about the token itself.

#### Parameters

##### body

[`WalletInfoRequest`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/walletinforequest/)

#### Returns

`Promise`\<[`WalletInfoResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/walletinforesponse/)\>
