---
editUrl: false
next: false
prev: false
title: "KmdClient"
---

Defined in: [packages/kmd\_client/src/client.ts:5](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/client.ts#L5)

## Extends

- [`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/)

## Constructors

### Constructor

> **new KmdClient**(`config`): `KmdClient`

Defined in: [packages/kmd\_client/src/client.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/client.ts#L6)

#### Parameters

##### config

[`ClientConfig`](/algokit-utils-ts/api/subpaths/kmd-client/interfaces/clientconfig/)

#### Returns

`KmdClient`

#### Overrides

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`constructor`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#constructor)

## Properties

### httpRequest

> `readonly` **httpRequest**: [`BaseHttpRequest`](/algokit-utils-ts/api/subpaths/kmd-client/classes/basehttprequest/)

Defined in: [packages/kmd\_client/src/apis/api-service.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L90)

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`httpRequest`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#httprequest)

## Methods

### createWallet()

> **createWallet**(`body`): `Promise`\<[`CreateWalletResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/createwalletresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:630](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L630)

Create a new wallet (collection of keys) with the given parameters.

#### Parameters

##### body

[`CreateWalletRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/createwalletrequest/)

#### Returns

`Promise`\<[`CreateWalletResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/createwalletresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`createWallet`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#createwallet)

***

### deleteKey()

> **deleteKey**(`body`): `Promise`\<`void`\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:124](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L124)

Deletes the key with the passed public key from the wallet.

#### Parameters

##### body

[`DeleteKeyRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/deletekeyrequest/)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`deleteKey`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#deletekey)

***

### deleteMultisig()

> **deleteMultisig**(`body`): `Promise`\<`void`\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:147](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L147)

Deletes multisig preimage information for the passed address from the wallet.

#### Parameters

##### body

[`DeleteMultisigRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/deletemultisigrequest/)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`deleteMultisig`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#deletemultisig)

***

### exportKey()

> **exportKey**(`body`): `Promise`\<[`ExportKeyResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/exportkeyresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:170](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L170)

Export the secret key associated with the passed public key.

#### Parameters

##### body

[`ExportKeyRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/exportkeyrequest/)

#### Returns

`Promise`\<[`ExportKeyResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/exportkeyresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`exportKey`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#exportkey)

***

### exportMasterKey()

> **exportMasterKey**(`body`): `Promise`\<[`ExportMasterKeyResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/exportmasterkeyresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:195](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L195)

Export the master derivation key from the wallet. This key is a master "backup" key for the underlying wallet. With it, you can regenerate all of the wallets that have been generated with this wallet's `POST /v1/key` endpoint. This key will not allow you to recover keys imported from other wallets, however.

#### Parameters

##### body

[`ExportMasterKeyRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/exportmasterkeyrequest/)

#### Returns

`Promise`\<[`ExportMasterKeyResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/exportmasterkeyresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`exportMasterKey`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#exportmasterkey)

***

### exportMultisig()

> **exportMultisig**(`body`): `Promise`\<[`ExportMultisigResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/exportmultisigresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:220](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L220)

Given a multisig address whose preimage this wallet stores, returns the information used to generate the address, including public keys, threshold, and multisig version.

#### Parameters

##### body

[`ExportMultisigRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/exportmultisigrequest/)

#### Returns

`Promise`\<[`ExportMultisigResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/exportmultisigresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`exportMultisig`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#exportmultisig)

***

### generateKey()

> **generateKey**(`body`): `Promise`\<[`GenerateKeyResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/generatekeyresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:245](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L245)

Generates the next key in the deterministic key sequence (as determined by the master derivation key) and adds it to the wallet, returning the public key.

#### Parameters

##### body

[`GenerateKeyRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/generatekeyrequest/)

#### Returns

`Promise`\<[`GenerateKeyResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/generatekeyresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`generateKey`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#generatekey)

***

### importKey()

> **importKey**(`body`): `Promise`\<[`ImportKeyResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/importkeyresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:270](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L270)

Import an externally generated key into the wallet. Note that if you wish to back up the imported key, you must do so by backing up the entire wallet database, because imported keys were not derived from the wallet's master derivation key.

#### Parameters

##### body

[`ImportKeyRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/importkeyrequest/)

#### Returns

`Promise`\<[`ImportKeyResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/importkeyresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`importKey`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#importkey)

***

### importMultisig()

> **importMultisig**(`body`): `Promise`\<[`ImportMultisigResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/importmultisigresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:295](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L295)

Generates a multisig account from the passed public keys array and multisig metadata, and stores all of this in the wallet.

#### Parameters

##### body

[`ImportMultisigRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/importmultisigrequest/)

#### Returns

`Promise`\<[`ImportMultisigResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/importmultisigresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`importMultisig`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#importmultisig)

***

### initWalletHandle()

> **initWalletHandle**(`body`): `Promise`\<[`InitWalletHandleTokenResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/initwallethandletokenresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:320](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L320)

Unlock the wallet and return a wallet handle token that can be used for subsequent operations. These tokens expire periodically and must be renewed. You can `POST` the token to `/v1/wallet/info` to see how much time remains until expiration, and renew it with `/v1/wallet/renew`. When you're done, you can invalidate the token with `/v1/wallet/release`.

#### Parameters

##### body

[`InitWalletHandleTokenRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/initwallethandletokenrequest/)

#### Returns

`Promise`\<[`InitWalletHandleTokenResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/initwallethandletokenresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`initWalletHandle`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#initwallethandle)

***

### listKeysInWallet()

> **listKeysInWallet**(`body`): `Promise`\<[`ListKeysResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/listkeysresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:345](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L345)

Lists all of the public keys in this wallet. All of them have a stored private key.

#### Parameters

##### body

[`ListKeysRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/listkeysrequest/)

#### Returns

`Promise`\<[`ListKeysResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/listkeysresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`listKeysInWallet`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#listkeysinwallet)

***

### listMultisig()

> **listMultisig**(`body`): `Promise`\<[`ListMultisigResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/listmultisigresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:370](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L370)

Lists all of the multisig accounts whose preimages this wallet stores

#### Parameters

##### body

[`ListMultisigRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/listmultisigrequest/)

#### Returns

`Promise`\<[`ListMultisigResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/listmultisigresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`listMultisig`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#listmultisig)

***

### listWallets()

> **listWallets**(): `Promise`\<[`ListWalletsResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/listwalletsresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:395](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L395)

Lists all of the wallets that kmd is aware of.

#### Returns

`Promise`\<[`ListWalletsResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/listwalletsresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`listWallets`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#listwallets)

***

### releaseWalletHandleToken()

> **releaseWalletHandleToken**(`body`): `Promise`\<`void`\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:415](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L415)

Invalidate the passed wallet handle token, making it invalid for use in subsequent requests.

#### Parameters

##### body

[`ReleaseWalletHandleTokenRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/releasewallethandletokenrequest/)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`releaseWalletHandleToken`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#releasewallethandletoken)

***

### renameWallet()

> **renameWallet**(`body`): `Promise`\<[`RenameWalletResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/renamewalletresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:438](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L438)

Rename the underlying wallet to something else

#### Parameters

##### body

[`RenameWalletRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/renamewalletrequest/)

#### Returns

`Promise`\<[`RenameWalletResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/renamewalletresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`renameWallet`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#renamewallet)

***

### renewWalletHandleToken()

> **renewWalletHandleToken**(`body`): `Promise`\<[`RenewWalletHandleTokenResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/renewwallethandletokenresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:463](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L463)

Renew a wallet handle token, increasing its expiration duration to its initial value

#### Parameters

##### body

[`RenewWalletHandleTokenRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/renewwallethandletokenrequest/)

#### Returns

`Promise`\<[`RenewWalletHandleTokenResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/renewwallethandletokenresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`renewWalletHandleToken`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#renewwallethandletoken)

***

### signMultisigProgram()

> **signMultisigProgram**(`body`): `Promise`\<[`SignProgramMultisigResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/signprogrammultisigresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:488](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L488)

Start a multisig signature, or add a signature to a partially completed multisig signature object.

#### Parameters

##### body

[`SignProgramMultisigRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/signprogrammultisigrequest/)

#### Returns

`Promise`\<[`SignProgramMultisigResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/signprogrammultisigresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`signMultisigProgram`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#signmultisigprogram)

***

### signMultisigTransaction()

> **signMultisigTransaction**(`body`): `Promise`\<[`SignMultisigResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/signmultisigresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:644](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L644)

Enables the signing of a transaction using the provided wallet and multisig info.
The public key is used to identify which multisig account key to use for signing.
When a signer is provided it is used to resolve the private key and sign the transaction, enabling rekeyed account signing.

#### Parameters

##### body

###### partialMultisig?

[`MultisigSig`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/multisigsig/)

###### publicKey

`Uint8Array`

###### signer?

`Uint8Array`\<`ArrayBufferLike`\>

###### transaction

[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)

###### walletHandleToken

`string`

###### walletPassword?

`string`

#### Returns

`Promise`\<[`SignMultisigResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/signmultisigresponse/)\>

A multisig signature or partial signature, which can be used to form a signed transaction.

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`signMultisigTransaction`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#signmultisigtransaction)

***

### signProgram()

> **signProgram**(`body`): `Promise`\<[`SignProgramResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/signprogramresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:538](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L538)

Signs the passed program with a key from the wallet, determined by the account named in the request.

#### Parameters

##### body

[`SignProgramRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/signprogramrequest/)

#### Returns

`Promise`\<[`SignProgramResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/signprogramresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`signProgram`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#signprogram)

***

### signTransaction()

> **signTransaction**(`body`): `Promise`\<[`SignTransactionResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/signtransactionresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:657](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L657)

Enables the signing of a transaction using the provided wallet info.
When a public key is provided it is used to resolve the private key and sign the transaction, enabling rekeyed account signing.

#### Parameters

##### body

###### publicKey?

`Uint8Array`\<`ArrayBufferLike`\>

###### transaction

[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)

###### walletHandleToken

`string`

###### walletPassword?

`string`

#### Returns

`Promise`\<[`SignTransactionResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/signtransactionresponse/)\>

An encoded, signed transaction.

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`signTransaction`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#signtransaction)

***

### version()

> **version**(): `Promise`\<[`VersionsResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/versionsresponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:585](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L585)

#### Returns

`Promise`\<[`VersionsResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/versionsresponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`version`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#version)

***

### walletInfo()

> **walletInfo**(`body`): `Promise`\<[`WalletInfoResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/walletinforesponse/)\>

Defined in: [packages/kmd\_client/src/apis/api-service.ts:605](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/apis/api-service.ts#L605)

Returns information about the wallet associated with the passed wallet handle token. Additionally returns expiration information about the token itself.

#### Parameters

##### body

[`WalletInfoRequest`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/walletinforequest/)

#### Returns

`Promise`\<[`WalletInfoResponse`](/algokit-utils-ts/api/subpaths/kmd-client/type-aliases/walletinforesponse/)\>

#### Inherited from

[`KmdApi`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/).[`walletInfo`](/algokit-utils-ts/api/subpaths/kmd-client/classes/kmdapi/#walletinfo)
