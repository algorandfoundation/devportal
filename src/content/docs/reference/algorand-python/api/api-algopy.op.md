---
title: algopy.op
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

## Module Contents

### Classes

| [`AcctParamsGet`](#algopy.op.AcctParamsGet)           | X is field F from account A. Y is 1 if A owns positive algos, else 0<br/>Native TEAL op: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`AppGlobal`](#algopy.op.AppGlobal)                   | Get or modify Global app state<br/>Native TEAL ops: [`app_global_del`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_del), [`app_global_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_get), [`app_global_get_ex`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_get_ex), [`app_global_put`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_put)                                                                                                                                                                                                                                                                                                                                                                         |
| [`AppLocal`](#algopy.op.AppLocal)                     | Get or modify Local app state<br/>Native TEAL ops: [`app_local_del`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_del), [`app_local_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_get), [`app_local_get_ex`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_get_ex), [`app_local_put`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_put)                                                                                                                                                                                                                                                                                                                                                                                  |
| [`AppParamsGet`](#algopy.op.AppParamsGet)             | X is field F from app A. Y is 1 if A exists, else 0 params: Txn.ForeignApps offset or an _available_ app id. Return: did_exist flag (1 if the application existed and 0 otherwise), value.<br/>Native TEAL op: [`app_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_params_get)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`AssetHoldingGet`](#algopy.op.AssetHoldingGet)       | X is field F from account A’s holding of asset B. Y is 1 if A is opted into B, else 0 params: Txn.Accounts offset (or, since v4, an _available_ address), asset id (or, since v4, a Txn.ForeignAssets offset). Return: did_exist flag (1 if the asset existed and 0 otherwise), value.<br/>Native TEAL op: [`asset_holding_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_holding_get)                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`AssetParamsGet`](#algopy.op.AssetParamsGet)         | X is field F from asset A. Y is 1 if A exists, else 0 params: Txn.ForeignAssets offset (or, since v4, an _available_ asset id. Return: did_exist flag (1 if the asset existed and 0 otherwise), value.<br/>Native TEAL op: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`Base64`](#algopy.op.Base64)                         | Available values for the `base64` enum                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`Block`](#algopy.op.Block)                           | field F of block A. Fail unless A falls between txn.LastValid-1002 and txn.FirstValid (exclusive)<br/>Native TEAL op: [`block`](https://dev.algorand.co/reference/algorand-teal/opcodes/#block)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`Box`](#algopy.op.Box)                               | Get or modify box state<br/>Native TEAL ops: [`box_create`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_create), [`box_del`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_del), [`box_extract`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_extract), [`box_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_get), [`box_len`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_len), [`box_put`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_put), [`box_replace`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_replace), [`box_resize`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_resize), [`box_splice`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_splice) |
| [`EC`](#algopy.op.EC)                                 | Available values for the `EC` enum                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`ECDSA`](#algopy.op.ECDSA)                           | Available values for the `ECDSA` enum                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`EllipticCurve`](#algopy.op.EllipticCurve)           | Elliptic Curve functions<br/>Native TEAL ops: [`ec_add`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_add), [`ec_map_to`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_map_to), [`ec_multi_scalar_mul`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_multi_scalar_mul), [`ec_pairing_check`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_pairing_check), [`ec_scalar_mul`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_scalar_mul), [`ec_subgroup_check`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_subgroup_check)                                                                                                                                                                                                   |
| [`GITxn`](#algopy.op.GITxn)                           | Get values for inner transaction in the last group submitted<br/>Native TEAL ops: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn), [`gitxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxnas)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GTxn`](#algopy.op.GTxn)                             | Get values for transactions in the current group<br/>Native TEAL ops: [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns), [`gtxnsas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsas)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`Global`](#algopy.op.Global)                         | Get Global values<br/>Native TEAL op: [`global`](https://dev.algorand.co/reference/algorand-teal/opcodes/#global)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`ITxn`](#algopy.op.ITxn)                             | Get values for the last inner transaction<br/>Native TEAL ops: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn), [`itxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxnas)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`ITxnCreate`](#algopy.op.ITxnCreate)                 | Create inner transactions<br/>Native TEAL ops: [`itxn_begin`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_begin), [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field), [`itxn_next`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_next), [`itxn_submit`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_submit)                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`JsonRef`](#algopy.op.JsonRef)                       | key B’s value, of type R, from a [valid]() utf-8 encoded json object A _Warning_: Usage should be restricted to very rare use cases, as JSON decoding is expensive and quite limited. In addition, JSON objects are large and not optimized for size. Almost all smart contracts should use simpler and smaller methods (such as the [ABI](https://arc.algorand.foundation/ARCs/arc-0004). This opcode should only be used in cases where JSON is only available option, e.g. when a third-party only signs JSON.<br/>Native TEAL op: [`json_ref`](https://dev.algorand.co/reference/algorand-teal/opcodes/#json_ref)                                                                                                                                                                                                |
| [`MiMCConfigurations`](#algopy.op.MiMCConfigurations) | Available values for the `Mimc Configurations` enum                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`Scratch`](#algopy.op.Scratch)                       | Load or store scratch values<br/>Native TEAL ops: [`loads`](https://dev.algorand.co/reference/algorand-teal/opcodes/#loads), [`stores`](https://dev.algorand.co/reference/algorand-teal/opcodes/#stores)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`Txn`](#algopy.op.Txn)                               | Get values for the current executing transaction<br/>Native TEAL ops: [`txn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txn), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`VoterParamsGet`](#algopy.op.VoterParamsGet)         | X is field F from online account A as of the balance round: 320 rounds before the current round. Y is 1 if A had positive algos online in the agreement round, else Y is 0 and X is a type specific zero-value<br/>Native TEAL op: [`voter_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#voter_params_get)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`VrfVerify`](#algopy.op.VrfVerify)                   | Available values for the `vrf_verify` enum                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Functions

| [`addw`](#algopy.op.addw)                               | A plus B as a 128-bit result. X is the carry-bit, Y is the low-order 64 bits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ------------ | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`app_opted_in`](#algopy.op.app_opted_in)               | 1 if account A is opted in to application B, else 0<br/>params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: 1 if opted in and 0 otherwise.                                                                                                                                                                                                                                                                                                                                                                                   |
| [`arg`](#algopy.op.arg)                                 | Ath LogicSig argument                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`balance`](#algopy.op.balance)                         | balance for account A, in microalgos. The balance is observed after the effects of previous transactions in the group, and after the fee for the current transaction is deducted. Changes caused by inner transactions are observable immediately following `itxn_submit`<br/>params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: value.                                                                                                                                                                                     |
| [`base64_decode`](#algopy.op.base64_decode)             | decode A which was base64-encoded using _encoding_ E. Fail if A is not base64 encoded with encoding E<br/>_Warning_: Usage should be restricted to very rare use cases. In almost all cases, smart contracts should directly handle non-encoded byte-strings. This opcode should only be used in cases where base64 is the only available option, e.g. interoperability with a third-party that only signs base64 strings.                                                                                                                                                                                                        |
| [`bitlen`](#algopy.op.bitlen)                           | The highest set bit in A. If A is a byte-array, it is interpreted as a big-endian unsigned integer. bitlen of 0 is 0, bitlen of 8 is 4<br/>bitlen interprets arrays as big-endian integers, unlike setbit/getbit                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`bsqrt`](#algopy.op.bsqrt)                             | The largest integer I such that I^2 <= A. A and I are interpreted as big-endian unsigned integers                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`btoi`](#algopy.op.btoi)                               | converts big-endian byte array A to uint64. Fails if len(A) > 8. Padded by leading 0s if len(A) < 8.<br/>`btoi` fails if the input is longer than 8 bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`bzero`](#algopy.op.bzero)                             | zero filled byte-array of length A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`concat`](#algopy.op.concat)                           | join A and B<br/>`concat` fails if the result would be greater than 4096 bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`divmodw`](#algopy.op.divmodw)                         | W,X = (A,B / C,D); Y,Z = (A,B modulo C,D)<br/>The notation J,K indicates that two uint64 values J and K are interpreted as a uint128 value, with J as the high uint64 and K the low.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`divw`](#algopy.op.divw)                               | A,B / C. Fail if C == 0 or if result overflows.<br/>The notation A,B indicates that A and B are interpreted as a uint128 value, with A as the high uint64 and B the low.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`ecdsa_pk_decompress`](#algopy.op.ecdsa_pk_decompress) | decompress pubkey A into components X, Y<br/>The 33 byte public key in a compressed form to be decompressed into X and Y (top) components. All values are big-endian encoded.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`ecdsa_pk_recover`](#algopy.op.ecdsa_pk_recover)       | for (data A, recovery id B, signature C, D) recover a public key<br/>S (top) and R elements of a signature, recovery id and data (bottom) are expected on the stack and used to deriver a public key. All values are big-endian encoded. The signed data must be 32 bytes long.                                                                                                                                                                                                                                                                                                                                                   |
| [`ecdsa_verify`](#algopy.op.ecdsa_verify)               | for (data A, signature B, C and pubkey D, E) verify the signature of the data against the pubkey => {0 or 1}<br/>The 32 byte Y-component of a public key is the last element on the stack, preceded by X-component of a pubkey, preceded by S and R components of a signature, preceded by the data that is fifth element on the stack. All values are big-endian encoded. The signed data must be 32 bytes long, and signatures in lower-S form are only accepted.                                                                                                                                                               |
| [`ed25519verify`](#algopy.op.ed25519verify)             | for (data A, signature B, pubkey C) verify the signature of (“ProgData”                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |     | program_hash |     | data) against the pubkey => {0 or 1}<br/>The 32 byte public key is the last element on the stack, preceded by the 64 byte signature at the second-to-last element on the stack, preceded by the data which was signed at the third-to-last element on the stack. |
| [`ed25519verify_bare`](#algopy.op.ed25519verify_bare)   | for (data A, signature B, pubkey C) verify the signature of the data against the pubkey => {0 or 1}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`err`](#algopy.op.err)                                 | Fail immediately.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`exit`](#algopy.op.exit)                               | use A as success value; end                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`exp`](#algopy.op.exp)                                 | A raised to the Bth power. Fail if A == B == 0 and on overflow                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`expw`](#algopy.op.expw)                               | A raised to the Bth power as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low. Fail if A == B == 0 or if the results exceeds 2^128-1                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`extract`](#algopy.op.extract)                         | A range of bytes from A starting at B up to but not including B+C. If B+C is larger than the array length, the program fails<br/>`extract3` can be called using `extract` with no immediates.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`extract_uint16`](#algopy.op.extract_uint16)           | A uint16 formed from a range of big-endian bytes from A starting at B up to but not including B+2. If B+2 is larger than the array length, the program fails                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`extract_uint32`](#algopy.op.extract_uint32)           | A uint32 formed from a range of big-endian bytes from A starting at B up to but not including B+4. If B+4 is larger than the array length, the program fails                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`extract_uint64`](#algopy.op.extract_uint64)           | A uint64 formed from a range of big-endian bytes from A starting at B up to but not including B+8. If B+8 is larger than the array length, the program fails                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`falcon_verify`](#algopy.op.falcon_verify)             | for (data A, compressed-format signature B, pubkey C) verify the signature of data against the pubkey => {0 or 1}<br/>Min AVM version: 12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`gaid`](#algopy.op.gaid)                               | ID of the asset or application created in the Ath transaction of the current group<br/>`gaids` fails unless the requested transaction created an asset or application and A < GroupIndex.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`getbit`](#algopy.op.getbit)                           | Bth bit of (byte-array or integer) A. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails<br/>see explanation of bit ordering in setbit                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`getbyte`](#algopy.op.getbyte)                         | Bth byte of A, as an integer. If B is greater than or equal to the array length, the program fails                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`gload_bytes`](#algopy.op.gload_bytes)                 | Bth scratch space value of the Ath transaction in the current group                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`gload_uint64`](#algopy.op.gload_uint64)               | Bth scratch space value of the Ath transaction in the current group                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`itob`](#algopy.op.itob)                               | converts uint64 A to big-endian byte array, always of length 8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`keccak256`](#algopy.op.keccak256)                     | Keccak256 hash of value A, yields [32]byte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`mimc`](#algopy.op.mimc)                               | MiMC hash of scalars A, using curve and parameters specified by configuration C<br/>A is a list of concatenated 32 byte big-endian unsigned integer scalars. Fail if A’s length is not a multiple of 32 or any element exceeds the curve modulus.                                                                                                                                                                                                                                                                                                                                                                                 |
| [`min_balance`](#algopy.op.min_balance)                 | minimum required balance for account A, in microalgos. Required balance is affected by ASA, App, and Box usage. When creating or opting into an app, the minimum balance grows before the app code runs, therefore the increase is visible there. When deleting or closing out, the minimum balance decreases after the app executes. Changes caused by inner transactions or box usage are observable immediately following the opcode effecting the change.<br/>params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: value. |
| [`mulw`](#algopy.op.mulw)                               | A times B as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`online_stake`](#algopy.op.online_stake)               | the total online stake in the agreement round<br/>Min AVM version: 11                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`replace`](#algopy.op.replace)                         | Copy of A with the bytes starting at B replaced by the bytes of C. Fails if B+len(C) exceeds len(A)<br/>`replace3` can be called using `replace` with no immediates.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`select_bytes`](#algopy.op.select_bytes)               | selects one of two values based on top-of-stack: B if C != 0, else A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`select_uint64`](#algopy.op.select_uint64)             | selects one of two values based on top-of-stack: B if C != 0, else A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`setbit_bytes`](#algopy.op.setbit_bytes)               | Copy of (byte-array or integer) A, with the Bth bit set to (0 or 1) C. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails<br/>When A is a uint64, index 0 is the least significant bit. Setting bit 3 to 1 on the integer 0 yields 8, or 2^3. When A is a byte array, index 0 is the leftmost bit of the leftmost byte. Setting bits 0 through 11 to 1 in a 4-byte-array of 0s yields the byte array 0xfff00000. Setting bit 3 to 1 on the 1-byte-array 0x00 yields the byte array 0x10.                                                                                            |
| [`setbit_uint64`](#algopy.op.setbit_uint64)             | Copy of (byte-array or integer) A, with the Bth bit set to (0 or 1) C. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails<br/>When A is a uint64, index 0 is the least significant bit. Setting bit 3 to 1 on the integer 0 yields 8, or 2^3. When A is a byte array, index 0 is the leftmost bit of the leftmost byte. Setting bits 0 through 11 to 1 in a 4-byte-array of 0s yields the byte array 0xfff00000. Setting bit 3 to 1 on the 1-byte-array 0x00 yields the byte array 0x10.                                                                                            |
| [`setbyte`](#algopy.op.setbyte)                         | Copy of A with the Bth byte set to small integer (between 0..255) C. If B is greater than or equal to the array length, the program fails                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`sha256`](#algopy.op.sha256)                           | SHA256 hash of value A, yields [32]byte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`sha3_256`](#algopy.op.sha3_256)                       | SHA3_256 hash of value A, yields [32]byte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`sha512_256`](#algopy.op.sha512_256)                   | SHA512_256 hash of value A, yields [32]byte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`shl`](#algopy.op.shl)                                 | A times 2^B, modulo 2^64                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`shr`](#algopy.op.shr)                                 | A divided by 2^B                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`sqrt`](#algopy.op.sqrt)                               | The largest integer I such that I^2 <= A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`substring`](#algopy.op.substring)                     | A range of bytes from A starting at B up to but not including C. If C < B, or either is larger than the array length, the program fails                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`sumhash512`](#algopy.op.sumhash512)                   | sumhash512 of value A, yields [64]byte<br/>Min AVM version: 13                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`vrf_verify`](#algopy.op.vrf_verify)                   | Verify the proof B of message A against pubkey C. Returns vrf output and verification flag.<br/>`VrfAlgorand` is the VRF used in Algorand. It is ECVRF-ED25519-SHA512-Elligator2, specified in the IETF internet draft [draft-irtf-cfrg-vrf-03](https://datatracker.ietf.org/doc/draft-irtf-cfrg-vrf/03/).                                                                                                                                                                                                                                                                                                                        |

### API

#### _class_ algopy.op.AcctParamsGet

X is field F from account A. Y is 1 if A owns positive algos, else 0
Native TEAL op: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_auth_addr

\*_static_ acct_auth_addr(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Address the account is rekeyed to.

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_balance

\*_static_ acct_balance(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Account balance in microalgos

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_incentive_eligible

\*_static_ acct_incentive_eligible(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[bool](https://docs.python.org/3/library/functions.html#bool), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Min AVM version: 11

- **Returns tuple[bool, bool]:**
  Has this account opted into block payouts

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_last_heartbeat

\*_static_ acct_last_heartbeat(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Min AVM version: 11

- **Returns tuple[UInt64, bool]:**
  The round number of the last block this account sent a heartbeat.

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_last_proposed

\*_static_ acct_last_proposed(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Min AVM version: 11

- **Returns tuple[UInt64, bool]:**
  The round number of the last block this account proposed.

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_min_balance

\*_static_ acct_min_balance(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Minimum required balance for account, in microalgos

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_total_apps_created

\*_static_ acct_total_apps_created(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

The number of existing apps created by this account.

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_total_apps_opted_in

\*_static_ acct_total_apps_opted_in(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

The number of apps this account is opted into.

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_total_assets

\*_static_ acct_total_assets(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

The numbers of ASAs held by this account (including ASAs this account created).

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_total_assets_created

\*_static_ acct_total_assets_created(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

The number of existing ASAs created by this account.

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_total_box_bytes

\*_static_ acct_total_box_bytes(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

The total number of bytes used by this account’s app’s box keys and values.

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_total_boxes

\*_static_ acct_total_boxes(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

The number of existing boxes created by this account’s app.

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_total_extra_app_pages

\*_static_ acct_total_extra_app_pages(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

The number of extra app code pages used by this account.

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_total_num_byte_slice

\*_static_ acct_total_num_byte_slice(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

The total number of byte array values allocated by this account in Global and Local States.

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

##### _static_ acct_total_num_uint

\*_static_ acct_total_num_uint(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

The total number of uint64 values allocated by this account in Global and Local States.

Native TEAL opcode: [`acct_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#acct_params_get)

#### _class_ algopy.op.AppGlobal

Get or modify Global app state
Native TEAL ops: [`app_global_del`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_del), [`app_global_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_get), [`app_global_get_ex`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_get_ex), [`app_global_put`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_put)

##### _static_ delete

\*_static_ delete(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

delete key A from the global state of the current application
params: state key.

Deleting a key which is already absent has no effect on the application global state. (In particular, it does _not_ cause the program to fail.)

Native TEAL opcode: [`app_global_del`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_del)

##### _static_ get_bytes

\*_static_ get_bytes(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

global state of the key A in the current application
params: state key. Return: value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_global_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_get)

##### _static_ get_ex_bytes

\*_static_ get_ex_bytes(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

X is the global state of application A, key B. Y is 1 if key existed, else 0
params: Txn.ForeignApps offset (or, since v4, an _available_ application id), state key. Return: did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_global_get_ex`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_get_ex)

##### _static_ get_ex_uint64

\*_static_ get_ex_uint64(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

X is the global state of application A, key B. Y is 1 if key existed, else 0
params: Txn.ForeignApps offset (or, since v4, an _available_ application id), state key. Return: did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_global_get_ex`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_get_ex)

##### _static_ get_uint64

\*_static_ get_uint64(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

global state of the key A in the current application
params: state key. Return: value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_global_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_get)

##### _static_ put

\*_static_ put(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

write B to key A in the global state of the current application

Native TEAL opcode: [`app_global_put`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_global_put)

#### _class_ algopy.op.AppLocal

Get or modify Local app state
Native TEAL ops: [`app_local_del`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_del), [`app_local_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_get), [`app_local_get_ex`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_get_ex), [`app_local_put`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_put)

##### _static_ delete

\*_static_ delete(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

delete key B from account A’s local state of the current application
params: Txn.Accounts offset (or, since v4, an _available_ account address), state key.

Deleting a key which is already absent has no effect on the application local state. (In particular, it does _not_ cause the program to fail.)

Native TEAL opcode: [`app_local_del`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_del)

##### _static_ get_bytes

\*_static_ get_bytes(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

local state of the key B in the current application in account A
params: Txn.Accounts offset (or, since v4, an _available_ account address), state key. Return: value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_local_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_get)

##### _static_ get_ex_bytes

\*_static_ get_ex_bytes(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

X is the local state of application B, key C in account A. Y is 1 if key existed, else 0
params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset), state key. Return: did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_local_get_ex`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_get_ex)

##### _static_ get_ex_uint64

\*_static_ get_ex_uint64(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

X is the local state of application B, key C in account A. Y is 1 if key existed, else 0
params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset), state key. Return: did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_local_get_ex`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_get_ex)

##### _static_ get_uint64

\*_static_ get_uint64(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

local state of the key B in the current application in account A
params: Txn.Accounts offset (or, since v4, an _available_ account address), state key. Return: value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_local_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_get)

##### _static_ put

\*_static_ put(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

write C to key B in account A’s local state of the current application
params: Txn.Accounts offset (or, since v4, an _available_ account address), state key, value.

Native TEAL opcode: [`app_local_put`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_local_put)

#### _class_ algopy.op.AppParamsGet

X is field F from app A. Y is 1 if A exists, else 0 params: Txn.ForeignApps offset or an _available_ app id. Return: did_exist flag (1 if the application existed and 0 otherwise), value.
Native TEAL op: [`app_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_params_get)

##### _static_ app_address

\*_static_ app_address(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Address for which this application has authority

Native TEAL opcode: [`app_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_params_get)

##### _static_ app_approval_program

\*_static_ app_approval_program(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Bytecode of Approval Program

Native TEAL opcode: [`app_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_params_get)

##### _static_ app_clear_state_program

\*_static_ app_clear_state_program(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Bytecode of Clear State Program

Native TEAL opcode: [`app_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_params_get)

##### _static_ app_creator

\*_static_ app_creator(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Creator address

Native TEAL opcode: [`app_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_params_get)

##### _static_ app_extra_program_pages

\*_static_ app_extra_program_pages(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Number of Extra Program Pages of code space

Native TEAL opcode: [`app_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_params_get)

##### _static_ app_global_num_byte_slice

\*_static_ app_global_num_byte_slice(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Number of byte array values allowed in Global State

Native TEAL opcode: [`app_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_params_get)

##### _static_ app_global_num_uint

\*_static_ app_global_num_uint(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Number of uint64 values allowed in Global State

Native TEAL opcode: [`app_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_params_get)

##### _static_ app_local_num_byte_slice

\*_static_ app_local_num_byte_slice(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Number of byte array values allowed in Local State

Native TEAL opcode: [`app_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_params_get)

##### _static_ app_local_num_uint

\*_static_ app_local_num_uint(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Number of uint64 values allowed in Local State

Native TEAL opcode: [`app_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_params_get)

##### _static_ app_version

\*_static_ app_version(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Min AVM version: 12

- **Returns tuple[UInt64, bool]:**
  Version of the app, incremented each time the approval or clear program changes

Native TEAL opcode: [`app_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_params_get)

#### _class_ algopy.op.AssetHoldingGet

X is field F from account A’s holding of asset B. Y is 1 if A is opted into B, else 0 params: Txn.Accounts offset (or, since v4, an _available_ address), asset id (or, since v4, a Txn.ForeignAssets offset). Return: did_exist flag (1 if the asset existed and 0 otherwise), value.
Native TEAL op: [`asset_holding_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_holding_get)

##### _static_ asset_balance

\*_static_ asset_balance(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Amount of the asset unit held by this account

Native TEAL opcode: [`asset_holding_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_holding_get)

##### _static_ asset_frozen

\*_static_ asset_frozen(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[bool](https://docs.python.org/3/library/functions.html#bool), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Is the asset frozen or not

Native TEAL opcode: [`asset_holding_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_holding_get)

#### _class_ algopy.op.AssetParamsGet

X is field F from asset A. Y is 1 if A exists, else 0 params: Txn.ForeignAssets offset (or, since v4, an _available_ asset id. Return: did_exist flag (1 if the asset existed and 0 otherwise), value.
Native TEAL op: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

##### _static_ asset_clawback

\*_static_ asset_clawback(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Clawback address

Native TEAL opcode: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

##### _static_ asset_creator

\*_static_ asset_creator(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Creator address

Native TEAL opcode: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

##### _static_ asset_decimals

\*_static_ asset_decimals(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

See AssetParams.Decimals

Native TEAL opcode: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

##### _static_ asset_default_frozen

\*_static_ asset_default_frozen(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[bool](https://docs.python.org/3/library/functions.html#bool), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Frozen by default or not

Native TEAL opcode: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

##### _static_ asset_freeze

\*_static_ asset_freeze(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Freeze address

Native TEAL opcode: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

##### _static_ asset_manager

\*_static_ asset_manager(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Manager address

Native TEAL opcode: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

##### _static_ asset_metadata_hash

\*_static_ asset_metadata_hash(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Arbitrary commitment

Native TEAL opcode: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

##### _static_ asset_name

\*_static_ asset_name(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Asset name

Native TEAL opcode: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

##### _static_ asset_reserve

\*_static_ asset_reserve(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Reserve address

Native TEAL opcode: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

##### _static_ asset_total

\*_static_ asset_total(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Total number of units of this asset

Native TEAL opcode: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

##### _static_ asset_unit_name

\*_static_ asset_unit_name(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Asset unit name

Native TEAL opcode: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

##### _static_ asset_url

\*_static_ asset_url(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

URL with additional info about the asset

Native TEAL opcode: [`asset_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#asset_params_get)

#### _class_ algopy.op.Base64

Available values for the `base64` enum

##### Initialization

Initialize self. See help(type(self)) for accurate signature.

##### \_\_add\_\_

_\_\_add\_\_()_

Return self+value.

##### \_\_contains\_\_

_\_\_contains\_\_()_

Return bool(key in self).

##### \_\_delattr\_\_

_\_\_delattr\_\_()_

Implement delattr(self, name).

##### \_\_dir\_\_

_\_\_dir\_\_()_

Default dir() implementation.

##### \_\_eq\_\_

_\_\_eq\_\_()_

Return self==value.

##### \_\_format\_\_

_\_\_format\_\_()_

Return a formatted version of the string as described by format_spec.

##### \_\_ge\_\_

_\_\_ge\_\_()_

Return self>=value.

##### \_\_getattribute\_\_

_\_\_getattribute\_\_()_

Return getattr(self, name).

##### \_\_getitem\_\_

_\_\_getitem\_\_()_

Return self[key].

##### \_\_getstate\_\_

_\_\_getstate\_\_()_

Helper for pickle.

##### \_\_gt\_\_

_\_\_gt\_\_()_

Return self>value.

##### \_\_hash\_\_

_\_\_hash\_\_()_

Return hash(self).

##### \_\_iter\_\_

_\_\_iter\_\_()_

Implement iter(self).

##### \_\_le\_\_

_\_\_le\_\_()_

Return self<=value.

##### \_\_len\_\_

_\_\_len\_\_()_

Return len(self).

##### \_\_lt\_\_

_\_\_lt\_\_()_

Return self<value.

##### \_\_mod\_\_

_\_\_mod\_\_()_

Return self%value.

##### \_\_mul\_\_

_\_\_mul\_\_()_

Return self\*value.

##### \_\_ne\_\_

_\_\_ne\_\_()_

Return self!=value.

##### \_\_new\_\_

_\_\_new\_\_()_

Create and return a new object. See help(type) for accurate signature.

##### \_\_reduce\_\_

_\_\_reduce\_\_()_

Helper for pickle.

##### \_\_reduce*ex*\_

_\_\_reduce*ex*\_()_

Helper for pickle.

##### \_\_repr\_\_

_\_\_repr\_\_()_

Return repr(self).

##### \_\_rmod\_\_

_\_\_rmod\_\_()_

Return value%self.

##### \_\_rmul\_\_

_\_\_rmul\_\_()_

Return value\*self.

##### \_\_setattr\_\_

_\_\_setattr\_\_()_

Implement setattr(self, name, value).

##### \_\_sizeof\_\_

_\_\_sizeof\_\_()_

Return the size of the string in memory, in bytes.

##### \_\_str\_\_

_\_\_str\_\_()_

Return str(self).

##### capitalize

_capitalize()_

Return a capitalized version of the string.

More specifically, make the first character have upper case and the rest lower
case.

##### casefold

_casefold()_

Return a version of the string suitable for caseless comparisons.

##### center

_center()_

Return a centered string of length width.

Padding is done using the specified fill character (default is a space).

##### count

_count()_

S.count(sub[, start[, end]]) -> int

Return the number of non-overlapping occurrences of substring sub in
string S[start:end]. Optional arguments start and end are
interpreted as in slice notation.

##### encode

_encode()_

Encode the string using the codec registered for encoding.

encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors.
The default is ‘strict’ meaning that encoding errors raise a
UnicodeEncodeError. Other possible values are ‘ignore’, ‘replace’ and
‘xmlcharrefreplace’ as well as any other name registered with
codecs.register_error that can handle UnicodeEncodeErrors.

##### endswith

_endswith()_

S.endswith(suffix[, start[, end]]) -> bool

Return True if S ends with the specified suffix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
suffix can also be a tuple of strings to try.

##### expandtabs

_expandtabs()_

Return a copy where all tab characters are expanded using spaces.

If tabsize is not given, a tab size of 8 characters is assumed.

##### find

_find()_

S.find(sub[, start[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

##### format

_format()_

S.format(\*args, \*\*kwargs) -> str

Return a formatted version of S, using substitutions from args and kwargs.
The substitutions are identified by braces (‘{’ and ‘}’).

##### format_map

_format_map()_

S.format_map(mapping) -> str

Return a formatted version of S, using substitutions from mapping.
The substitutions are identified by braces (‘{’ and ‘}’).

##### index

_index()_

S.index(sub[, start[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

##### isalnum

_isalnum()_

Return True if the string is an alpha-numeric string, False otherwise.

A string is alpha-numeric if all characters in the string are alpha-numeric and
there is at least one character in the string.

##### isalpha

_isalpha()_

Return True if the string is an alphabetic string, False otherwise.

A string is alphabetic if all characters in the string are alphabetic and there
is at least one character in the string.

##### isascii

_isascii()_

Return True if all characters in the string are ASCII, False otherwise.

ASCII characters have code points in the range U+0000-U+007F.
Empty string is ASCII too.

##### isdecimal

_isdecimal()_

Return True if the string is a decimal string, False otherwise.

A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.

##### isdigit

_isdigit()_

Return True if the string is a digit string, False otherwise.

A string is a digit string if all characters in the string are digits and there
is at least one character in the string.

##### isidentifier

_isidentifier()_

Return True if the string is a valid Python identifier, False otherwise.

Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.

##### islower

_islower()_

Return True if the string is a lowercase string, False otherwise.

A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.

##### isnumeric

_isnumeric()_

Return True if the string is a numeric string, False otherwise.

A string is numeric if all characters in the string are numeric and there is at
least one character in the string.

##### isprintable

_isprintable()_

Return True if the string is printable, False otherwise.

A string is printable if all of its characters are considered printable in
repr() or if it is empty.

##### isspace

_isspace()_

Return True if the string is a whitespace string, False otherwise.

A string is whitespace if all characters in the string are whitespace and there
is at least one character in the string.

##### istitle

_istitle()_

Return True if the string is a title-cased string, False otherwise.

In a title-cased string, upper- and title-case characters may only
follow uncased characters and lowercase characters only cased ones.

##### isupper

_isupper()_

Return True if the string is an uppercase string, False otherwise.

A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.

##### join

_join()_

Concatenate any number of strings.

The string whose method is called is inserted in between each given string.
The result is returned as a new string.

Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

##### ljust

_ljust()_

Return a left-justified string of length width.

Padding is done using the specified fill character (default is a space).

##### lower

_lower()_

Return a copy of the string converted to lowercase.

##### lstrip

_lstrip()_

Return a copy of the string with leading whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### partition

_partition()_

Partition the string into three parts using the given separator.

This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.

If the separator is not found, returns a 3-tuple containing the original string
and two empty strings.

##### removeprefix

_removeprefix()_

Return a str with the given prefix string removed if present.

If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.

##### removesuffix

_removesuffix()_

Return a str with the given suffix string removed if present.

If the string ends with the suffix string and that suffix is not empty,
return string[:-len(suffix)]. Otherwise, return a copy of the original
string.

##### replace

_replace()_

Return a copy with all occurrences of substring old replaced by new.

count
Maximum number of occurrences to replace.
-1 (the default value) means replace all occurrences.

If the optional argument count is given, only the first count occurrences are
replaced.

##### rfind

_rfind()_

S.rfind(sub[, start[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

##### rindex

_rindex()_

S.rindex(sub[, start[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

##### rjust

_rjust()_

Return a right-justified string of length width.

Padding is done using the specified fill character (default is a space).

##### rpartition

_rpartition()_

Partition the string into three parts using the given separator.

This will search for the separator in the string, starting at the end. If
the separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.

If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.

##### rsplit

_rsplit()_

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the end of the string and works to the front.

##### rstrip

_rstrip()_

Return a copy of the string with trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### split

_split()_

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the front of the string and works to the end.

Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using
the regular expression module.

##### splitlines

_splitlines()_

Return a list of the lines in the string, breaking at line boundaries.

Line breaks are not included in the resulting list unless keepends is given and
true.

##### startswith

_startswith()_

S.startswith(prefix[, start[, end]]) -> bool

Return True if S starts with the specified prefix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
prefix can also be a tuple of strings to try.

##### strip

_strip()_

Return a copy of the string with leading and trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### swapcase

_swapcase()_

Convert uppercase characters to lowercase and lowercase characters to uppercase.

##### title

_title()_

Return a version of the string where each word is titlecased.

More specifically, words start with uppercased characters and all remaining
cased characters have lower case.

##### translate

_translate()_

Replace each character in the string using the given translation table.

table
Translation table, which must be a mapping of Unicode ordinals to
Unicode ordinals, strings, or None.

The table must implement lookup/indexing via **getitem**, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.

##### upper

_upper()_

Return a copy of the string converted to uppercase.

##### zfill

_zfill()_

Pad a numeric string with zeros on the left, to fill a field of the given width.

The string is never truncated.

#### _class_ algopy.op.Block

field F of block A. Fail unless A falls between txn.LastValid-1002 and txn.FirstValid (exclusive)
Native TEAL op: [`block`](https://dev.algorand.co/reference/algorand-teal/opcodes/#block)

##### _static_ blk_bonus

\*_static_ blk_bonus(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Min AVM version: 11

Native TEAL opcode: [`block`](https://dev.algorand.co/reference/algorand-teal/opcodes/#block)

##### _static_ blk_branch

\*_static_ blk_branch(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Min AVM version: 11

Native TEAL opcode: [`block`](https://dev.algorand.co/reference/algorand-teal/opcodes/#block)

##### _static_ blk_fee_sink

\*_static_ blk_fee_sink(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

Min AVM version: 11

Native TEAL opcode: [`block`](https://dev.algorand.co/reference/algorand-teal/opcodes/#block)

##### _static_ blk_fees_collected

\*_static_ blk_fees_collected(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Min AVM version: 11

Native TEAL opcode: [`block`](https://dev.algorand.co/reference/algorand-teal/opcodes/#block)

##### _static_ blk_proposer

\*_static_ blk_proposer(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

Min AVM version: 11

Native TEAL opcode: [`block`](https://dev.algorand.co/reference/algorand-teal/opcodes/#block)

##### _static_ blk_proposer_payout

\*_static_ blk_proposer_payout(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Min AVM version: 11

Native TEAL opcode: [`block`](https://dev.algorand.co/reference/algorand-teal/opcodes/#block)

##### _static_ blk_protocol

\*_static_ blk_protocol(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Min AVM version: 11

Native TEAL opcode: [`block`](https://dev.algorand.co/reference/algorand-teal/opcodes/#block)

##### _static_ blk_seed

\*_static_ blk_seed(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Native TEAL opcode: [`block`](https://dev.algorand.co/reference/algorand-teal/opcodes/#block)

##### _static_ blk_timestamp

\*_static_ blk_timestamp(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Native TEAL opcode: [`block`](https://dev.algorand.co/reference/algorand-teal/opcodes/#block)

##### _static_ blk_txn_counter

\*_static_ blk_txn_counter(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Min AVM version: 11

Native TEAL opcode: [`block`](https://dev.algorand.co/reference/algorand-teal/opcodes/#block)

#### _class_ algopy.op.Box

Get or modify box state
Native TEAL ops: [`box_create`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_create), [`box_del`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_del), [`box_extract`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_extract), [`box_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_get), [`box_len`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_len), [`box_put`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_put), [`box_replace`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_replace), [`box_resize`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_resize), [`box_splice`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_splice)

##### _static_ create

\*_static_ create(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)\*

create a box named A, of length B. Fail if the name A is empty or B exceeds 32,768. Returns 0 if A already existed, else 1
Newly created boxes are filled with 0 bytes. `box_create` will fail if the referenced box already exists with a different size. Otherwise, existing boxes are unchanged by `box_create`.

Native TEAL opcode: [`box_create`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_create)

##### _static_ delete

\*_static_ delete(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)\*

delete box named A if it exists. Return 1 if A existed, 0 otherwise

Native TEAL opcode: [`box_del`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_del)

##### _static_ extract

\*_static_ extract(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

read C bytes from box A, starting at offset B. Fail if A does not exist, or the byte range is outside A’s size.

Native TEAL opcode: [`box_extract`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_extract)

##### _static_ get

\*_static_ get(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

X is the contents of box A if A exists, else ‘’. Y is 1 if A exists, else 0.
For boxes that exceed 4,096 bytes, consider `box_create`, `box_extract`, and `box_replace`

Native TEAL opcode: [`box_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_get)

##### _static_ length

\*_static_ length(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

X is the length of box A if A exists, else 0. Y is 1 if A exists, else 0.

Native TEAL opcode: [`box_len`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_len)

##### _static_ put

\*_static_ put(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

replaces the contents of box A with byte-array B. Fails if A exists and len(B) != len(box A). Creates A if it does not exist
For boxes that exceed 4,096 bytes, consider `box_create`, `box_extract`, and `box_replace`

Native TEAL opcode: [`box_put`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_put)

##### _static_ replace

\*_static_ replace(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

write byte-array C into box A, starting at offset B. Fail if A does not exist, or the byte range is outside A’s size.

Native TEAL opcode: [`box_replace`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_replace)

##### _static_ resize

\*_static_ resize(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

change the size of box named A to be of length B, adding zero bytes to end or removing bytes from the end, as needed. Fail if the name A is empty, A is not an existing box, or B exceeds 32,768.

Native TEAL opcode: [`box_resize`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_resize)

##### _static_ splice

\*_static_ splice(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), d: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

set box A to contain its previous bytes up to index B, followed by D, followed by the original bytes of A that began at index B+C.
Boxes are of constant length. If C < len(D), then len(D)-C bytes will be removed from the end. If C > len(D), zero bytes will be appended to the end to reach the box length.

Native TEAL opcode: [`box_splice`](https://dev.algorand.co/reference/algorand-teal/opcodes/#box_splice)

#### _class_ algopy.op.EC

Available values for the `EC` enum

##### Initialization

Initialize self. See help(type(self)) for accurate signature.

##### BLS12_381g1 \*: [algopy.op.EC]

_BLS12_381g1 _: [algopy.op.EC](#algopy.op.EC)\*\*

Ellipsis

G1 of the BLS 12-381 curve. Points encoded as 48 byte X following by 48 byte Y

##### BLS12_381g2 \*: [algopy.op.EC]

_BLS12_381g2 _: [algopy.op.EC](#algopy.op.EC)\*\*

Ellipsis

G2 of the BLS 12-381 curve. Points encoded as 96 byte X following by 96 byte Y

##### BN254g1 \*: [algopy.op.EC]

_BN254g1 _: [algopy.op.EC](#algopy.op.EC)\*\*

Ellipsis

G1 of the BN254 curve. Points encoded as 32 byte X following by 32 byte Y

##### BN254g2 \*: [algopy.op.EC]

_BN254g2 _: [algopy.op.EC](#algopy.op.EC)\*\*

Ellipsis

G2 of the BN254 curve. Points encoded as 64 byte X following by 64 byte Y

##### \_\_add\_\_

_\_\_add\_\_()_

Return self+value.

##### \_\_contains\_\_

_\_\_contains\_\_()_

Return bool(key in self).

##### \_\_delattr\_\_

_\_\_delattr\_\_()_

Implement delattr(self, name).

##### \_\_dir\_\_

_\_\_dir\_\_()_

Default dir() implementation.

##### \_\_eq\_\_

_\_\_eq\_\_()_

Return self==value.

##### \_\_format\_\_

_\_\_format\_\_()_

Return a formatted version of the string as described by format_spec.

##### \_\_ge\_\_

_\_\_ge\_\_()_

Return self>=value.

##### \_\_getattribute\_\_

_\_\_getattribute\_\_()_

Return getattr(self, name).

##### \_\_getitem\_\_

_\_\_getitem\_\_()_

Return self[key].

##### \_\_getstate\_\_

_\_\_getstate\_\_()_

Helper for pickle.

##### \_\_gt\_\_

_\_\_gt\_\_()_

Return self>value.

##### \_\_hash\_\_

_\_\_hash\_\_()_

Return hash(self).

##### \_\_iter\_\_

_\_\_iter\_\_()_

Implement iter(self).

##### \_\_le\_\_

_\_\_le\_\_()_

Return self<=value.

##### \_\_len\_\_

_\_\_len\_\_()_

Return len(self).

##### \_\_lt\_\_

_\_\_lt\_\_()_

Return self<value.

##### \_\_mod\_\_

_\_\_mod\_\_()_

Return self%value.

##### \_\_mul\_\_

_\_\_mul\_\_()_

Return self\*value.

##### \_\_ne\_\_

_\_\_ne\_\_()_

Return self!=value.

##### \_\_new\_\_

_\_\_new\_\_()_

Create and return a new object. See help(type) for accurate signature.

##### \_\_reduce\_\_

_\_\_reduce\_\_()_

Helper for pickle.

##### \_\_reduce*ex*\_

_\_\_reduce*ex*\_()_

Helper for pickle.

##### \_\_repr\_\_

_\_\_repr\_\_()_

Return repr(self).

##### \_\_rmod\_\_

_\_\_rmod\_\_()_

Return value%self.

##### \_\_rmul\_\_

_\_\_rmul\_\_()_

Return value\*self.

##### \_\_setattr\_\_

_\_\_setattr\_\_()_

Implement setattr(self, name, value).

##### \_\_sizeof\_\_

_\_\_sizeof\_\_()_

Return the size of the string in memory, in bytes.

##### \_\_str\_\_

_\_\_str\_\_()_

Return str(self).

##### capitalize

_capitalize()_

Return a capitalized version of the string.

More specifically, make the first character have upper case and the rest lower
case.

##### casefold

_casefold()_

Return a version of the string suitable for caseless comparisons.

##### center

_center()_

Return a centered string of length width.

Padding is done using the specified fill character (default is a space).

##### count

_count()_

S.count(sub[, start[, end]]) -> int

Return the number of non-overlapping occurrences of substring sub in
string S[start:end]. Optional arguments start and end are
interpreted as in slice notation.

##### encode

_encode()_

Encode the string using the codec registered for encoding.

encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors.
The default is ‘strict’ meaning that encoding errors raise a
UnicodeEncodeError. Other possible values are ‘ignore’, ‘replace’ and
‘xmlcharrefreplace’ as well as any other name registered with
codecs.register_error that can handle UnicodeEncodeErrors.

##### endswith

_endswith()_

S.endswith(suffix[, start[, end]]) -> bool

Return True if S ends with the specified suffix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
suffix can also be a tuple of strings to try.

##### expandtabs

_expandtabs()_

Return a copy where all tab characters are expanded using spaces.

If tabsize is not given, a tab size of 8 characters is assumed.

##### find

_find()_

S.find(sub[, start[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

##### format

_format()_

S.format(\*args, \*\*kwargs) -> str

Return a formatted version of S, using substitutions from args and kwargs.
The substitutions are identified by braces (‘{’ and ‘}’).

##### format_map

_format_map()_

S.format_map(mapping) -> str

Return a formatted version of S, using substitutions from mapping.
The substitutions are identified by braces (‘{’ and ‘}’).

##### index

_index()_

S.index(sub[, start[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

##### isalnum

_isalnum()_

Return True if the string is an alpha-numeric string, False otherwise.

A string is alpha-numeric if all characters in the string are alpha-numeric and
there is at least one character in the string.

##### isalpha

_isalpha()_

Return True if the string is an alphabetic string, False otherwise.

A string is alphabetic if all characters in the string are alphabetic and there
is at least one character in the string.

##### isascii

_isascii()_

Return True if all characters in the string are ASCII, False otherwise.

ASCII characters have code points in the range U+0000-U+007F.
Empty string is ASCII too.

##### isdecimal

_isdecimal()_

Return True if the string is a decimal string, False otherwise.

A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.

##### isdigit

_isdigit()_

Return True if the string is a digit string, False otherwise.

A string is a digit string if all characters in the string are digits and there
is at least one character in the string.

##### isidentifier

_isidentifier()_

Return True if the string is a valid Python identifier, False otherwise.

Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.

##### islower

_islower()_

Return True if the string is a lowercase string, False otherwise.

A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.

##### isnumeric

_isnumeric()_

Return True if the string is a numeric string, False otherwise.

A string is numeric if all characters in the string are numeric and there is at
least one character in the string.

##### isprintable

_isprintable()_

Return True if the string is printable, False otherwise.

A string is printable if all of its characters are considered printable in
repr() or if it is empty.

##### isspace

_isspace()_

Return True if the string is a whitespace string, False otherwise.

A string is whitespace if all characters in the string are whitespace and there
is at least one character in the string.

##### istitle

_istitle()_

Return True if the string is a title-cased string, False otherwise.

In a title-cased string, upper- and title-case characters may only
follow uncased characters and lowercase characters only cased ones.

##### isupper

_isupper()_

Return True if the string is an uppercase string, False otherwise.

A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.

##### join

_join()_

Concatenate any number of strings.

The string whose method is called is inserted in between each given string.
The result is returned as a new string.

Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

##### ljust

_ljust()_

Return a left-justified string of length width.

Padding is done using the specified fill character (default is a space).

##### lower

_lower()_

Return a copy of the string converted to lowercase.

##### lstrip

_lstrip()_

Return a copy of the string with leading whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### partition

_partition()_

Partition the string into three parts using the given separator.

This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.

If the separator is not found, returns a 3-tuple containing the original string
and two empty strings.

##### removeprefix

_removeprefix()_

Return a str with the given prefix string removed if present.

If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.

##### removesuffix

_removesuffix()_

Return a str with the given suffix string removed if present.

If the string ends with the suffix string and that suffix is not empty,
return string[:-len(suffix)]. Otherwise, return a copy of the original
string.

##### replace

_replace()_

Return a copy with all occurrences of substring old replaced by new.

count
Maximum number of occurrences to replace.
-1 (the default value) means replace all occurrences.

If the optional argument count is given, only the first count occurrences are
replaced.

##### rfind

_rfind()_

S.rfind(sub[, start[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

##### rindex

_rindex()_

S.rindex(sub[, start[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

##### rjust

_rjust()_

Return a right-justified string of length width.

Padding is done using the specified fill character (default is a space).

##### rpartition

_rpartition()_

Partition the string into three parts using the given separator.

This will search for the separator in the string, starting at the end. If
the separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.

If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.

##### rsplit

_rsplit()_

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the end of the string and works to the front.

##### rstrip

_rstrip()_

Return a copy of the string with trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### split

_split()_

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the front of the string and works to the end.

Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using
the regular expression module.

##### splitlines

_splitlines()_

Return a list of the lines in the string, breaking at line boundaries.

Line breaks are not included in the resulting list unless keepends is given and
true.

##### startswith

_startswith()_

S.startswith(prefix[, start[, end]]) -> bool

Return True if S starts with the specified prefix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
prefix can also be a tuple of strings to try.

##### strip

_strip()_

Return a copy of the string with leading and trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### swapcase

_swapcase()_

Convert uppercase characters to lowercase and lowercase characters to uppercase.

##### title

_title()_

Return a version of the string where each word is titlecased.

More specifically, words start with uppercased characters and all remaining
cased characters have lower case.

##### translate

_translate()_

Replace each character in the string using the given translation table.

table
Translation table, which must be a mapping of Unicode ordinals to
Unicode ordinals, strings, or None.

The table must implement lookup/indexing via **getitem**, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.

##### upper

_upper()_

Return a copy of the string converted to uppercase.

##### zfill

_zfill()_

Pad a numeric string with zeros on the left, to fill a field of the given width.

The string is never truncated.

#### _class_ algopy.op.ECDSA

Available values for the `ECDSA` enum

##### Initialization

Initialize self. See help(type(self)) for accurate signature.

##### Secp256k1 \*: [algopy.op.ECDSA]

_Secp256k1 _: [algopy.op.ECDSA](#algopy.op.ECDSA)\*\*

Ellipsis

secp256k1 curve, used in Bitcoin

##### Secp256r1 \*: [algopy.op.ECDSA]

_Secp256r1 _: [algopy.op.ECDSA](#algopy.op.ECDSA)\*\*

Ellipsis

secp256r1 curve, NIST standard

##### \_\_add\_\_

_\_\_add\_\_()_

Return self+value.

##### \_\_contains\_\_

_\_\_contains\_\_()_

Return bool(key in self).

##### \_\_delattr\_\_

_\_\_delattr\_\_()_

Implement delattr(self, name).

##### \_\_dir\_\_

_\_\_dir\_\_()_

Default dir() implementation.

##### \_\_eq\_\_

_\_\_eq\_\_()_

Return self==value.

##### \_\_format\_\_

_\_\_format\_\_()_

Return a formatted version of the string as described by format_spec.

##### \_\_ge\_\_

_\_\_ge\_\_()_

Return self>=value.

##### \_\_getattribute\_\_

_\_\_getattribute\_\_()_

Return getattr(self, name).

##### \_\_getitem\_\_

_\_\_getitem\_\_()_

Return self[key].

##### \_\_getstate\_\_

_\_\_getstate\_\_()_

Helper for pickle.

##### \_\_gt\_\_

_\_\_gt\_\_()_

Return self>value.

##### \_\_hash\_\_

_\_\_hash\_\_()_

Return hash(self).

##### \_\_iter\_\_

_\_\_iter\_\_()_

Implement iter(self).

##### \_\_le\_\_

_\_\_le\_\_()_

Return self<=value.

##### \_\_len\_\_

_\_\_len\_\_()_

Return len(self).

##### \_\_lt\_\_

_\_\_lt\_\_()_

Return self<value.

##### \_\_mod\_\_

_\_\_mod\_\_()_

Return self%value.

##### \_\_mul\_\_

_\_\_mul\_\_()_

Return self\*value.

##### \_\_ne\_\_

_\_\_ne\_\_()_

Return self!=value.

##### \_\_new\_\_

_\_\_new\_\_()_

Create and return a new object. See help(type) for accurate signature.

##### \_\_reduce\_\_

_\_\_reduce\_\_()_

Helper for pickle.

##### \_\_reduce*ex*\_

_\_\_reduce*ex*\_()_

Helper for pickle.

##### \_\_repr\_\_

_\_\_repr\_\_()_

Return repr(self).

##### \_\_rmod\_\_

_\_\_rmod\_\_()_

Return value%self.

##### \_\_rmul\_\_

_\_\_rmul\_\_()_

Return value\*self.

##### \_\_setattr\_\_

_\_\_setattr\_\_()_

Implement setattr(self, name, value).

##### \_\_sizeof\_\_

_\_\_sizeof\_\_()_

Return the size of the string in memory, in bytes.

##### \_\_str\_\_

_\_\_str\_\_()_

Return str(self).

##### capitalize

_capitalize()_

Return a capitalized version of the string.

More specifically, make the first character have upper case and the rest lower
case.

##### casefold

_casefold()_

Return a version of the string suitable for caseless comparisons.

##### center

_center()_

Return a centered string of length width.

Padding is done using the specified fill character (default is a space).

##### count

_count()_

S.count(sub[, start[, end]]) -> int

Return the number of non-overlapping occurrences of substring sub in
string S[start:end]. Optional arguments start and end are
interpreted as in slice notation.

##### encode

_encode()_

Encode the string using the codec registered for encoding.

encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors.
The default is ‘strict’ meaning that encoding errors raise a
UnicodeEncodeError. Other possible values are ‘ignore’, ‘replace’ and
‘xmlcharrefreplace’ as well as any other name registered with
codecs.register_error that can handle UnicodeEncodeErrors.

##### endswith

_endswith()_

S.endswith(suffix[, start[, end]]) -> bool

Return True if S ends with the specified suffix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
suffix can also be a tuple of strings to try.

##### expandtabs

_expandtabs()_

Return a copy where all tab characters are expanded using spaces.

If tabsize is not given, a tab size of 8 characters is assumed.

##### find

_find()_

S.find(sub[, start[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

##### format

_format()_

S.format(\*args, \*\*kwargs) -> str

Return a formatted version of S, using substitutions from args and kwargs.
The substitutions are identified by braces (‘{’ and ‘}’).

##### format_map

_format_map()_

S.format_map(mapping) -> str

Return a formatted version of S, using substitutions from mapping.
The substitutions are identified by braces (‘{’ and ‘}’).

##### index

_index()_

S.index(sub[, start[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

##### isalnum

_isalnum()_

Return True if the string is an alpha-numeric string, False otherwise.

A string is alpha-numeric if all characters in the string are alpha-numeric and
there is at least one character in the string.

##### isalpha

_isalpha()_

Return True if the string is an alphabetic string, False otherwise.

A string is alphabetic if all characters in the string are alphabetic and there
is at least one character in the string.

##### isascii

_isascii()_

Return True if all characters in the string are ASCII, False otherwise.

ASCII characters have code points in the range U+0000-U+007F.
Empty string is ASCII too.

##### isdecimal

_isdecimal()_

Return True if the string is a decimal string, False otherwise.

A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.

##### isdigit

_isdigit()_

Return True if the string is a digit string, False otherwise.

A string is a digit string if all characters in the string are digits and there
is at least one character in the string.

##### isidentifier

_isidentifier()_

Return True if the string is a valid Python identifier, False otherwise.

Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.

##### islower

_islower()_

Return True if the string is a lowercase string, False otherwise.

A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.

##### isnumeric

_isnumeric()_

Return True if the string is a numeric string, False otherwise.

A string is numeric if all characters in the string are numeric and there is at
least one character in the string.

##### isprintable

_isprintable()_

Return True if the string is printable, False otherwise.

A string is printable if all of its characters are considered printable in
repr() or if it is empty.

##### isspace

_isspace()_

Return True if the string is a whitespace string, False otherwise.

A string is whitespace if all characters in the string are whitespace and there
is at least one character in the string.

##### istitle

_istitle()_

Return True if the string is a title-cased string, False otherwise.

In a title-cased string, upper- and title-case characters may only
follow uncased characters and lowercase characters only cased ones.

##### isupper

_isupper()_

Return True if the string is an uppercase string, False otherwise.

A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.

##### join

_join()_

Concatenate any number of strings.

The string whose method is called is inserted in between each given string.
The result is returned as a new string.

Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

##### ljust

_ljust()_

Return a left-justified string of length width.

Padding is done using the specified fill character (default is a space).

##### lower

_lower()_

Return a copy of the string converted to lowercase.

##### lstrip

_lstrip()_

Return a copy of the string with leading whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### partition

_partition()_

Partition the string into three parts using the given separator.

This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.

If the separator is not found, returns a 3-tuple containing the original string
and two empty strings.

##### removeprefix

_removeprefix()_

Return a str with the given prefix string removed if present.

If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.

##### removesuffix

_removesuffix()_

Return a str with the given suffix string removed if present.

If the string ends with the suffix string and that suffix is not empty,
return string[:-len(suffix)]. Otherwise, return a copy of the original
string.

##### replace

_replace()_

Return a copy with all occurrences of substring old replaced by new.

count
Maximum number of occurrences to replace.
-1 (the default value) means replace all occurrences.

If the optional argument count is given, only the first count occurrences are
replaced.

##### rfind

_rfind()_

S.rfind(sub[, start[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

##### rindex

_rindex()_

S.rindex(sub[, start[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

##### rjust

_rjust()_

Return a right-justified string of length width.

Padding is done using the specified fill character (default is a space).

##### rpartition

_rpartition()_

Partition the string into three parts using the given separator.

This will search for the separator in the string, starting at the end. If
the separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.

If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.

##### rsplit

_rsplit()_

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the end of the string and works to the front.

##### rstrip

_rstrip()_

Return a copy of the string with trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### split

_split()_

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the front of the string and works to the end.

Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using
the regular expression module.

##### splitlines

_splitlines()_

Return a list of the lines in the string, breaking at line boundaries.

Line breaks are not included in the resulting list unless keepends is given and
true.

##### startswith

_startswith()_

S.startswith(prefix[, start[, end]]) -> bool

Return True if S starts with the specified prefix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
prefix can also be a tuple of strings to try.

##### strip

_strip()_

Return a copy of the string with leading and trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### swapcase

_swapcase()_

Convert uppercase characters to lowercase and lowercase characters to uppercase.

##### title

_title()_

Return a version of the string where each word is titlecased.

More specifically, words start with uppercased characters and all remaining
cased characters have lower case.

##### translate

_translate()_

Replace each character in the string using the given translation table.

table
Translation table, which must be a mapping of Unicode ordinals to
Unicode ordinals, strings, or None.

The table must implement lookup/indexing via **getitem**, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.

##### upper

_upper()_

Return a copy of the string converted to uppercase.

##### zfill

_zfill()_

Pad a numeric string with zeros on the left, to fill a field of the given width.

The string is never truncated.

#### _class_ algopy.op.EllipticCurve

Elliptic Curve functions
Native TEAL ops: [`ec_add`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_add), [`ec_map_to`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_map_to), [`ec_multi_scalar_mul`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_multi_scalar_mul), [`ec_pairing_check`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_pairing_check), [`ec_scalar_mul`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_scalar_mul), [`ec_subgroup_check`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_subgroup_check)

##### _static_ add

\*_static_ add(g: [algopy.op.EC](#algopy.op.EC), a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

for curve points A and B, return the curve point A + B
A and B are curve points in affine representation: field element X concatenated with field element Y. Field element `Z` is encoded as follows.
For the base field elements (Fp), `Z` is encoded as a big-endian number and must be lower than the field modulus.
For the quadratic field extension (Fp2), `Z` is encoded as the concatenation of the individual encoding of the coefficients. For an Fp2 element of the form `Z = Z0 + Z1 i`, where `i` is a formal quadratic non-residue, the encoding of Z is the concatenation of the encoding of `Z0` and `Z1` in this order. (`Z0` and `Z1` must be less than the field modulus).

The point at infinity is encoded as `(X,Y) = (0,0)`.
Groups G1 and G2 are denoted additively.

Fails if A or B is not in G.
A and/or B are allowed to be the point at infinity.
Does _not_ check if A and B are in the main prime-order subgroup.

- **Parameters:**
  **g** ([_EC_](#algopy.op.EC)) – curve index

Native TEAL opcode: [`ec_add`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_add)

##### _static_ map_to

\*_static_ map_to(g: [algopy.op.EC](#algopy.op.EC), a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

maps field element A to group G
BN254 points are mapped by the SVDW map. BLS12-381 points are mapped by the SSWU map.
G1 element inputs are base field elements and G2 element inputs are quadratic field elements, with nearly the same encoding rules (for field elements) as defined in `ec_add`. There is one difference of encoding rule: G1 element inputs do not need to be 0-padded if they fit in less than 32 bytes for BN254 and less than 48 bytes for BLS12-381. (As usual, the empty byte array represents 0.) G2 elements inputs need to be always have the required size.

- **Parameters:**
  **g** ([_EC_](#algopy.op.EC)) – curve index

Native TEAL opcode: [`ec_map_to`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_map_to)

##### _static_ pairing_check

\*_static_ pairing_check(g: [algopy.op.EC](#algopy.op.EC), a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)\*

1 if the product of the pairing of each point in A with its respective point in B is equal to the identity element of the target group Gt, else 0
A and B are concatenated points, encoded and checked as described in `ec_add`. A contains points of the group G, B contains points of the associated group (G2 if G is G1, and vice versa). Fails if A and B have a different number of points, or if any point is not in its described group or outside the main prime-order subgroup - a stronger condition than other opcodes. AVM values are limited to 4096 bytes, so `ec_pairing_check` is limited by the size of the points in the groups being operated upon.

- **Parameters:**
  **g** ([_EC_](#algopy.op.EC)) – curve index

Native TEAL opcode: [`ec_pairing_check`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_pairing_check)

##### _static_ scalar_mul

\*_static_ scalar_mul(g: [algopy.op.EC](#algopy.op.EC), a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

for curve point A and scalar B, return the curve point BA, the point A multiplied by the scalar B.
A is a curve point encoded and checked as described in `ec_add`. Scalar B is interpreted as a big-endian unsigned integer. Fails if B exceeds 32 bytes.

- **Parameters:**
  **g** ([_EC_](#algopy.op.EC)) – curve index

Native TEAL opcode: [`ec_scalar_mul`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_scalar_mul)

##### _static_ scalar_mul_multi

\*_static_ scalar_mul_multi(g: [algopy.op.EC](#algopy.op.EC), a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

for curve points A and scalars B, return curve point B0A0 + B1A1 + B2A2 + … + BnAn
A is a list of concatenated points, encoded and checked as described in `ec_add`. B is a list of concatenated scalars which, unlike ec_scalar_mul, must all be exactly 32 bytes long.
The name `ec_multi_scalar_mul` was chosen to reflect common usage, but a more consistent name would be `ec_multi_scalar_mul`. AVM values are limited to 4096 bytes, so `ec_multi_scalar_mul` is limited by the size of the points in the group being operated upon.

- **Parameters:**
  **g** ([_EC_](#algopy.op.EC)) – curve index

Native TEAL opcode: [`ec_multi_scalar_mul`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_multi_scalar_mul)

##### _static_ subgroup_check

\*_static_ subgroup_check(g: [algopy.op.EC](#algopy.op.EC), a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)\*

1 if A is in the main prime-order subgroup of G (including the point at infinity) else 0. Program fails if A is not in G at all.

- **Parameters:**
  **g** ([_EC_](#algopy.op.EC)) – curve index

Native TEAL opcode: [`ec_subgroup_check`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ec_subgroup_check)

#### _class_ algopy.op.GITxn

Get values for inner transaction in the last group submitted
Native TEAL ops: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn), [`gitxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxnas)

##### _static_ accounts

\*_static_ accounts(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  Accounts listed in the ApplicationCall transaction

Native TEAL opcode: [`gitxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxna), [`gitxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxnas)

##### _static_ amount

\*_static_ amount(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  microalgos

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ application_args

\*_static_ application_args(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  Arguments passed to the application in the ApplicationCall transaction

Native TEAL opcode: [`gitxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxna), [`gitxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxnas)

##### _static_ application_id

\*_static_ application_id(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Application:**
  ApplicationID from ApplicationCall transaction

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ applications

\*_static_ applications(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Application:**
  Foreign Apps listed in the ApplicationCall transaction

Native TEAL opcode: [`gitxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxna), [`gitxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxnas)

##### _static_ approval_program

\*_static_ approval_program(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  Approval program

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ approval_program_pages

\*_static_ approval_program_pages(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  Approval Program as an array of pages

Native TEAL opcode: [`gitxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxna), [`gitxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxnas)

##### _static_ asset_amount

\*_static_ asset_amount(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  value in Asset’s units

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ asset_close_to

\*_static_ asset_close_to(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ asset_receiver

\*_static_ asset_receiver(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ asset_sender

\*_static_ asset_sender(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  32 byte address. Source of assets if Sender is the Asset’s Clawback address.

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ assets

\*_static_ assets(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Asset:**
  Foreign Assets listed in the ApplicationCall transaction

Native TEAL opcode: [`gitxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxna), [`gitxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxnas)

##### _static_ clear_state_program

\*_static_ clear_state_program(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  Clear state program

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ clear_state_program_pages

\*_static_ clear_state_program_pages(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  ClearState Program as an array of pages

Native TEAL opcode: [`gitxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxna), [`gitxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxnas)

##### _static_ close_remainder_to

\*_static_ close_remainder_to(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ config_asset

\*_static_ config_asset(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Asset:**
  Asset ID in asset config transaction

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ config_asset_clawback

\*_static_ config_asset_clawback(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ config_asset_decimals

\*_static_ config_asset_decimals(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of digits to display after the decimal place when displaying the asset

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ config_asset_default_frozen

\*_static_ config_asset_default_frozen(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns bool:**
  Whether the asset’s slots are frozen by default or not, 0 or 1

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ config_asset_freeze

\*_static_ config_asset_freeze(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ config_asset_manager

\*_static_ config_asset_manager(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ config_asset_metadata_hash

\*_static_ config_asset_metadata_hash(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  32 byte commitment to unspecified asset metadata

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ config_asset_name

\*_static_ config_asset_name(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  The asset name

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ config_asset_reserve

\*_static_ config_asset_reserve(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ config_asset_total

\*_static_ config_asset_total(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Total number of units of this asset created

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ config_asset_unit_name

\*_static_ config_asset_unit_name(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  Unit name of the asset

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ config_asset_url

\*_static_ config_asset_url(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  URL

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ created_application_id

\*_static_ created_application_id(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Application:**
  ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ created_asset_id

\*_static_ created_asset_id(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Asset:**
  Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ extra_program_pages

\*_static_ extra_program_pages(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ fee

\*_static_ fee(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  microalgos

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ first_valid

\*_static_ first_valid(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  round number

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ first_valid_time

\*_static_ first_valid_time(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  UNIX timestamp of block before txn.FirstValid. Fails if negative

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ freeze_asset

\*_static_ freeze_asset(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Asset:**
  Asset ID being frozen or un-frozen

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ freeze_asset_account

\*_static_ freeze_asset_account(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  32 byte address of the account whose asset slot is being frozen or un-frozen

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ freeze_asset_frozen

\*_static_ freeze_asset_frozen(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns bool:**
  The new frozen value, 0 or 1

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ global_num_byte_slice

\*_static_ global_num_byte_slice(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of global state byteslices in ApplicationCall

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ global_num_uint

\*_static_ global_num_uint(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of global state integers in ApplicationCall

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ group_index

\*_static_ group_index(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ last_log

\*_static_ last_log(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  The last message emitted. Empty bytes if none were emitted. Application mode only

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ last_valid

\*_static_ last_valid(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  round number

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ lease

\*_static_ lease(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  32 byte lease value

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ local_num_byte_slice

\*_static_ local_num_byte_slice(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of local state byteslices in ApplicationCall

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ local_num_uint

\*_static_ local_num_uint(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of local state integers in ApplicationCall

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ logs

\*_static_ logs(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  Log messages emitted by an application call (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gitxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxna), [`gitxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxnas)

##### _static_ nonparticipation

\*_static_ nonparticipation(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns bool:**
  Marks an account nonparticipating for rewards

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ note

\*_static_ note(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  Any data up to 1024 bytes

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ num_accounts

\*_static_ num_accounts(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of Accounts

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ num_app_args

\*_static_ num_app_args(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of ApplicationArgs

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ num_applications

\*_static_ num_applications(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of Applications

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ num_approval_program_pages

\*_static_ num_approval_program_pages(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of Approval Program pages

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ num_assets

\*_static_ num_assets(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of Assets

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ num_clear_state_program_pages

\*_static_ num_clear_state_program_pages(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of ClearState Program pages

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ num_logs

\*_static_ num_logs(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Number of Logs (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ on_completion

\*_static_ on_completion(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.OnCompleteAction](/reference/algorand-python/api/api-algopy/#algopy.OnCompleteAction)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns OnCompleteAction:**
  ApplicationCall transaction on completion action

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ receiver

\*_static_ receiver(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ reject_version

\*_static_ reject_version(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Min AVM version: 12

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Application version for which the txn must reject

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ rekey_to

\*_static_ rekey_to(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  32 byte Sender’s new AuthAddr

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ selection_pk

\*_static_ selection_pk(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ sender

\*_static_ sender(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ state_proof_pk

\*_static_ state_proof_pk(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  State proof public key

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ tx_id

\*_static_ tx_id(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  The computed ID for this transaction. 32 bytes.

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ type

\*_static_ type(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  Transaction type as bytes

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ type_enum

\*_static_ type_enum(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns TransactionType:**
  Transaction type as integer

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ vote_first

\*_static_ vote_first(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  The first round that the participation key is valid.

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ vote_key_dilution

\*_static_ vote_key_dilution(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  Dilution for the 2-level participation key

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ vote_last

\*_static_ vote_last(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns UInt64:**
  The last round that the participation key is valid.

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ vote_pk

\*_static_ vote_pk(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Bytes:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

##### _static_ xfer_asset

\*_static_ xfer_asset(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

- **Parameters:**
  **t** ([_int_](https://docs.python.org/3/library/functions.html#int)) – transaction group index
- **Returns Asset:**
  Asset ID

Native TEAL opcode: [`gitxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gitxn)

#### _class_ algopy.op.GTxn

Get values for transactions in the current group
Native TEAL ops: [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns), [`gtxnsas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsas)

##### _static_ accounts

\*_static_ accounts(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

Accounts listed in the ApplicationCall transaction

Native TEAL opcode: [`gtxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxna), [`gtxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnas), [`gtxnsa`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsa), [`gtxnsas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsas)

##### _static_ amount

\*_static_ amount(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

microalgos

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ application_args

\*_static_ application_args(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Arguments passed to the application in the ApplicationCall transaction

Native TEAL opcode: [`gtxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxna), [`gtxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnas), [`gtxnsa`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsa), [`gtxnsas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsas)

##### _static_ application_id

\*_static_ application_id(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)\*

ApplicationID from ApplicationCall transaction

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ applications

\*_static_ applications(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)\*

Foreign Apps listed in the ApplicationCall transaction

Native TEAL opcode: [`gtxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxna), [`gtxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnas), [`gtxnsa`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsa), [`gtxnsas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsas)

##### _static_ approval_program

\*_static_ approval_program(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Approval program

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ approval_program_pages

\*_static_ approval_program_pages(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Approval Program as an array of pages

Native TEAL opcode: [`gtxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxna), [`gtxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnas), [`gtxnsa`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsa), [`gtxnsas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsas)

##### _static_ asset_amount

\*_static_ asset_amount(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

value in Asset’s units

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ asset_close_to

\*_static_ asset_close_to(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ asset_receiver

\*_static_ asset_receiver(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ asset_sender

\*_static_ asset_sender(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address. Source of assets if Sender is the Asset’s Clawback address.

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ assets

\*_static_ assets(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

Foreign Assets listed in the ApplicationCall transaction

Native TEAL opcode: [`gtxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxna), [`gtxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnas), [`gtxnsa`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsa), [`gtxnsas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsas)

##### _static_ clear_state_program

\*_static_ clear_state_program(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Clear state program

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ clear_state_program_pages

\*_static_ clear_state_program_pages(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

ClearState Program as an array of pages

Native TEAL opcode: [`gtxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxna), [`gtxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnas), [`gtxnsa`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsa), [`gtxnsas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsas)

##### _static_ close_remainder_to

\*_static_ close_remainder_to(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ config_asset

\*_static_ config_asset(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

Asset ID in asset config transaction

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ config_asset_clawback

\*_static_ config_asset_clawback(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ config_asset_decimals

\*_static_ config_asset_decimals(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of digits to display after the decimal place when displaying the asset

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ config_asset_default_frozen

\*_static_ config_asset_default_frozen(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)\*

Whether the asset’s slots are frozen by default or not, 0 or 1

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ config_asset_freeze

\*_static_ config_asset_freeze(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ config_asset_manager

\*_static_ config_asset_manager(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ config_asset_metadata_hash

\*_static_ config_asset_metadata_hash(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

32 byte commitment to unspecified asset metadata

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ config_asset_name

\*_static_ config_asset_name(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

The asset name

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ config_asset_reserve

\*_static_ config_asset_reserve(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ config_asset_total

\*_static_ config_asset_total(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Total number of units of this asset created

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ config_asset_unit_name

\*_static_ config_asset_unit_name(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Unit name of the asset

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ config_asset_url

\*_static_ config_asset_url(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

URL

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ created_application_id

\*_static_ created_application_id(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)\*

ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ created_asset_id

\*_static_ created_asset_id(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ extra_program_pages

\*_static_ extra_program_pages(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ fee

\*_static_ fee(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

microalgos

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ first_valid

\*_static_ first_valid(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

round number

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ first_valid_time

\*_static_ first_valid_time(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

UNIX timestamp of block before txn.FirstValid. Fails if negative

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ freeze_asset

\*_static_ freeze_asset(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

Asset ID being frozen or un-frozen

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ freeze_asset_account

\*_static_ freeze_asset_account(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address of the account whose asset slot is being frozen or un-frozen

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ freeze_asset_frozen

\*_static_ freeze_asset_frozen(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)\*

The new frozen value, 0 or 1

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ global_num_byte_slice

\*_static_ global_num_byte_slice(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of global state byteslices in ApplicationCall

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ global_num_uint

\*_static_ global_num_uint(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of global state integers in ApplicationCall

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ group_index

\*_static_ group_index(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ last_log

\*_static_ last_log(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

The last message emitted. Empty bytes if none were emitted. Application mode only

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ last_valid

\*_static_ last_valid(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

round number

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ lease

\*_static_ lease(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

32 byte lease value

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ local_num_byte_slice

\*_static_ local_num_byte_slice(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of local state byteslices in ApplicationCall

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ local_num_uint

\*_static_ local_num_uint(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of local state integers in ApplicationCall

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ logs

\*_static_ logs(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Log messages emitted by an application call (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gtxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxna), [`gtxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnas), [`gtxnsa`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsa), [`gtxnsas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxnsas)

##### _static_ nonparticipation

\*_static_ nonparticipation(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)\*

Marks an account nonparticipating for rewards

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ note

\*_static_ note(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Any data up to 1024 bytes

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ num_accounts

\*_static_ num_accounts(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of Accounts

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ num_app_args

\*_static_ num_app_args(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of ApplicationArgs

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ num_applications

\*_static_ num_applications(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of Applications

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ num_approval_program_pages

\*_static_ num_approval_program_pages(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of Approval Program pages

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ num_assets

\*_static_ num_assets(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of Assets

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ num_clear_state_program_pages

\*_static_ num_clear_state_program_pages(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of ClearState Program pages

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ num_logs

\*_static_ num_logs(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of Logs (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ on_completion

\*_static_ on_completion(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.OnCompleteAction](/reference/algorand-python/api/api-algopy/#algopy.OnCompleteAction)\*

ApplicationCall transaction on completion action

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ receiver

\*_static_ receiver(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ reject_version

\*_static_ reject_version(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Min AVM version: 12

- **Returns UInt64:**
  Application version for which the txn must reject

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ rekey_to

\*_static_ rekey_to(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte Sender’s new AuthAddr

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ selection_pk

\*_static_ selection_pk(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

32 byte address

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ sender

\*_static_ sender(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ state_proof_pk

\*_static_ state_proof_pk(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

State proof public key

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ tx_id

\*_static_ tx_id(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

The computed ID for this transaction. 32 bytes.

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ type

\*_static_ type(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Transaction type as bytes

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ type_enum

\*_static_ type_enum(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType)\*

Transaction type as integer

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ vote_first

\*_static_ vote_first(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

The first round that the participation key is valid.

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ vote_key_dilution

\*_static_ vote_key_dilution(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Dilution for the 2-level participation key

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ vote_last

\*_static_ vote_last(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

The last round that the participation key is valid.

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ vote_pk

\*_static_ vote_pk(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

32 byte address

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

##### _static_ xfer_asset

\*_static_ xfer_asset(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

Asset ID

Native TEAL opcode: [`gtxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxn), [`gtxns`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gtxns)

#### _class_ algopy.op.Global

Get Global values
Native TEAL op: [`global`](https://dev.algorand.co/reference/algorand-teal/opcodes/#global)

##### asset_create_min_balance \*: [Final]

_asset_create_min_balance _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

The additional minimum balance required to create (and opt-in to) an asset.

##### asset_opt_in_min_balance \*: [Final]

_asset_opt_in_min_balance _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

The additional minimum balance required to opt-in to an asset.

##### caller_application_address \*: [Final]

_caller_application_address _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

The application address of the application that called this application. ZeroAddress if this application is at the top-level. Application mode only.

##### caller_application_id \*: [Final]

_caller_application_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

The application ID of the application that called this application. 0 if this application is at the top-level. Application mode only.

##### creator_address \*: [Final]

_creator_address _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

Address of the creator of the current application. Application mode only.

##### current_application_address \*: [Final]

_current_application_address _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

Address that the current application controls. Application mode only.

##### current_application_id \*: [Final]

_current_application_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)]\*\*

Ellipsis

ID of current application executing. Application mode only.

##### genesis_hash \*: [Final]

_genesis_hash _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

The Genesis Hash for the network.

##### group_id \*: [Final]

_group_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

ID of the transaction group. 32 zero bytes if the transaction is not part of a group.

##### group_size \*: [Final]

_group_size _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of transactions in this atomic transaction group. At least 1

##### latest_timestamp \*: [Final]

_latest_timestamp _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Last confirmed block UNIX timestamp. Fails if negative. Application mode only.

##### logic_sig_version \*: [Final]

_logic_sig_version _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Maximum supported version

##### max_txn_life \*: [Final]

_max_txn_life _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

rounds

##### min_balance \*: [Final]

_min_balance _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

microalgos

##### min_txn_fee \*: [Final]

_min_txn_fee _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

microalgos

##### _static_ opcode_budget

\*_static_ opcode_budget() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

The remaining cost that can be spent by opcodes in this program.

Native TEAL opcode: [`global`](https://dev.algorand.co/reference/algorand-teal/opcodes/#global)

##### payouts_enabled \*: [Final]

_payouts_enabled _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[bool](https://docs.python.org/3/library/functions.html#bool)]\*\*

Ellipsis

Whether block proposal payouts are enabled.
Min AVM version: 11

##### payouts_go_online_fee \*: [Final]

_payouts_go_online_fee _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

The fee required in a keyreg transaction to make an account incentive eligible.
Min AVM version: 11

##### payouts_max_balance \*: [Final]

_payouts_max_balance _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

The maximum balance an account can have in the agreement round to receive block payouts in the proposal round.
Min AVM version: 11

##### payouts_min_balance \*: [Final]

_payouts_min_balance _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

The minimum balance an account must have in the agreement round to receive block payouts in the proposal round.
Min AVM version: 11

##### payouts_percent \*: [Final]

_payouts_percent _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

The percentage of transaction fees in a block that can be paid to the block proposer.
Min AVM version: 11

##### round \*: [Final]

_round _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Current round number. Application mode only.

##### zero_address \*: [Final]

_zero_address _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte address of all zero bytes

#### _class_ algopy.op.ITxn

Get values for the last inner transaction
Native TEAL ops: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn), [`itxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxnas)

##### _static_ accounts

\*_static_ accounts(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

Accounts listed in the ApplicationCall transaction

Native TEAL opcode: [`itxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxna), [`itxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxnas)

##### _static_ amount

\*_static_ amount() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

microalgos

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ application_args

\*_static_ application_args(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Arguments passed to the application in the ApplicationCall transaction

Native TEAL opcode: [`itxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxna), [`itxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxnas)

##### _static_ application_id

\*_static_ application_id() → [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)\*

ApplicationID from ApplicationCall transaction

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ applications

\*_static_ applications(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)\*

Foreign Apps listed in the ApplicationCall transaction

Native TEAL opcode: [`itxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxna), [`itxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxnas)

##### _static_ approval_program

\*_static_ approval_program() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Approval program

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ approval_program_pages

\*_static_ approval_program_pages(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Approval Program as an array of pages

Native TEAL opcode: [`itxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxna), [`itxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxnas)

##### _static_ asset_amount

\*_static_ asset_amount() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

value in Asset’s units

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ asset_close_to

\*_static_ asset_close_to() → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ asset_receiver

\*_static_ asset_receiver() → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ asset_sender

\*_static_ asset_sender() → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address. Source of assets if Sender is the Asset’s Clawback address.

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ assets

\*_static_ assets(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

Foreign Assets listed in the ApplicationCall transaction

Native TEAL opcode: [`itxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxna), [`itxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxnas)

##### _static_ clear_state_program

\*_static_ clear_state_program() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Clear state program

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ clear_state_program_pages

\*_static_ clear_state_program_pages(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

ClearState Program as an array of pages

Native TEAL opcode: [`itxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxna), [`itxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxnas)

##### _static_ close_remainder_to

\*_static_ close_remainder_to() → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ config_asset

\*_static_ config_asset() → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

Asset ID in asset config transaction

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ config_asset_clawback

\*_static_ config_asset_clawback() → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ config_asset_decimals

\*_static_ config_asset_decimals() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of digits to display after the decimal place when displaying the asset

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ config_asset_default_frozen

\*_static_ config_asset_default_frozen() → [bool](https://docs.python.org/3/library/functions.html#bool)\*

Whether the asset’s slots are frozen by default or not, 0 or 1

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ config_asset_freeze

\*_static_ config_asset_freeze() → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ config_asset_manager

\*_static_ config_asset_manager() → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ config_asset_metadata_hash

\*_static_ config_asset_metadata_hash() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

32 byte commitment to unspecified asset metadata

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ config_asset_name

\*_static_ config_asset_name() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

The asset name

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ config_asset_reserve

\*_static_ config_asset_reserve() → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ config_asset_total

\*_static_ config_asset_total() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Total number of units of this asset created

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ config_asset_unit_name

\*_static_ config_asset_unit_name() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Unit name of the asset

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ config_asset_url

\*_static_ config_asset_url() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

URL

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ created_application_id

\*_static_ created_application_id() → [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)\*

ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ created_asset_id

\*_static_ created_asset_id() → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ extra_program_pages

\*_static_ extra_program_pages() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ fee

\*_static_ fee() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

microalgos

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ first_valid

\*_static_ first_valid() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

round number

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ first_valid_time

\*_static_ first_valid_time() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

UNIX timestamp of block before txn.FirstValid. Fails if negative

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ freeze_asset

\*_static_ freeze_asset() → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

Asset ID being frozen or un-frozen

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ freeze_asset_account

\*_static_ freeze_asset_account() → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address of the account whose asset slot is being frozen or un-frozen

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ freeze_asset_frozen

\*_static_ freeze_asset_frozen() → [bool](https://docs.python.org/3/library/functions.html#bool)\*

The new frozen value, 0 or 1

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ global_num_byte_slice

\*_static_ global_num_byte_slice() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of global state byteslices in ApplicationCall

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ global_num_uint

\*_static_ global_num_uint() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of global state integers in ApplicationCall

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ group_index

\*_static_ group_index() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ last_log

\*_static_ last_log() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

The last message emitted. Empty bytes if none were emitted. Application mode only

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ last_valid

\*_static_ last_valid() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

round number

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ lease

\*_static_ lease() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

32 byte lease value

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ local_num_byte_slice

\*_static_ local_num_byte_slice() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of local state byteslices in ApplicationCall

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ local_num_uint

\*_static_ local_num_uint() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of local state integers in ApplicationCall

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ logs

\*_static_ logs(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Log messages emitted by an application call (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`itxna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxna), [`itxnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxnas)

##### _static_ nonparticipation

\*_static_ nonparticipation() → [bool](https://docs.python.org/3/library/functions.html#bool)\*

Marks an account nonparticipating for rewards

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ note

\*_static_ note() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Any data up to 1024 bytes

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ num_accounts

\*_static_ num_accounts() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of Accounts

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ num_app_args

\*_static_ num_app_args() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of ApplicationArgs

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ num_applications

\*_static_ num_applications() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of Applications

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ num_approval_program_pages

\*_static_ num_approval_program_pages() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of Approval Program pages

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ num_assets

\*_static_ num_assets() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of Assets

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ num_clear_state_program_pages

\*_static_ num_clear_state_program_pages() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of ClearState Program pages

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ num_logs

\*_static_ num_logs() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Number of Logs (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ on_completion

\*_static_ on_completion() → [algopy.OnCompleteAction](/reference/algorand-python/api/api-algopy/#algopy.OnCompleteAction)\*

ApplicationCall transaction on completion action

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ receiver

\*_static_ receiver() → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ reject_version

\*_static_ reject_version() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Min AVM version: 12

- **Returns UInt64:**
  Application version for which the txn must reject

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ rekey_to

\*_static_ rekey_to() → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte Sender’s new AuthAddr

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ selection_pk

\*_static_ selection_pk() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

32 byte address

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ sender

\*_static_ sender() → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

32 byte address

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ state_proof_pk

\*_static_ state_proof_pk() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

State proof public key

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ tx_id

\*_static_ tx_id() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

The computed ID for this transaction. 32 bytes.

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ type

\*_static_ type() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Transaction type as bytes

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ type_enum

\*_static_ type_enum() → [algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType)\*

Transaction type as integer

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ vote_first

\*_static_ vote_first() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

The first round that the participation key is valid.

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ vote_key_dilution

\*_static_ vote_key_dilution() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Dilution for the 2-level participation key

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ vote_last

\*_static_ vote_last() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

The last round that the participation key is valid.

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ vote_pk

\*_static_ vote_pk() → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

32 byte address

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

##### _static_ xfer_asset

\*_static_ xfer_asset() → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

Asset ID

Native TEAL opcode: [`itxn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn)

#### _class_ algopy.op.ITxnCreate

Create inner transactions
Native TEAL ops: [`itxn_begin`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_begin), [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field), [`itxn_next`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_next), [`itxn_submit`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_submit)

##### _static_ begin

\*_static_ begin() → [None](https://docs.python.org/3/library/constants.html#None)\*

begin preparation of a new inner transaction in a new transaction group
`itxn_begin` initializes Sender to the application address; Fee to the minimum allowable, taking into account MinTxnFee and credit from overpaying in earlier transactions; FirstValid/LastValid to the values in the invoking transaction, and all other fields to zero or empty values.

Native TEAL opcode: [`itxn_begin`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_begin)

##### _static_ next

\*_static_ next() → [None](https://docs.python.org/3/library/constants.html#None)\*

begin preparation of a new inner transaction in the same transaction group
`itxn_next` initializes the transaction exactly as `itxn_begin` does

Native TEAL opcode: [`itxn_next`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_next)

##### _static_ set_accounts

\*_static_ set_accounts(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – Accounts listed in the ApplicationCall transaction

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_amount

\*_static_ set_amount(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – microalgos

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_application_args

\*_static_ set_application_args(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – Arguments passed to the application in the ApplicationCall transaction

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_application_id

\*_static_ set_application_id(a: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Application_](/reference/algorand-python/api/api-algopy/#algopy.Application) _|_ [_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – ApplicationID from ApplicationCall transaction

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_applications

\*_static_ set_applications(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Foreign Apps listed in the ApplicationCall transaction

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_approval_program

\*_static_ set_approval_program(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – Approval program

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_approval_program_pages

\*_static_ set_approval_program_pages(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – Approval Program as an array of pages

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_asset_amount

\*_static_ set_asset_amount(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – value in Asset’s units

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_asset_close_to

\*_static_ set_asset_close_to(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_asset_receiver

\*_static_ set_asset_receiver(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_asset_sender

\*_static_ set_asset_sender(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – 32 byte address. Source of assets if Sender is the Asset’s Clawback address.

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_assets

\*_static_ set_assets(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Foreign Assets listed in the ApplicationCall transaction

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_clear_state_program

\*_static_ set_clear_state_program(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – Clear state program

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_clear_state_program_pages

\*_static_ set_clear_state_program_pages(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – ClearState Program as an array of pages

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_close_remainder_to

\*_static_ set_close_remainder_to(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_config_asset

\*_static_ set_config_asset(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Asset_](/reference/algorand-python/api/api-algopy/#algopy.Asset) _|_ [_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Asset ID in asset config transaction

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_config_asset_clawback

\*_static_ set_config_asset_clawback(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_config_asset_decimals

\*_static_ set_config_asset_decimals(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Number of digits to display after the decimal place when displaying the asset

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_config_asset_default_frozen

\*_static_ set_config_asset_default_frozen(a: [bool](https://docs.python.org/3/library/functions.html#bool), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_bool_](https://docs.python.org/3/library/functions.html#bool)) – Whether the asset’s slots are frozen by default or not, 0 or 1

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_config_asset_freeze

\*_static_ set_config_asset_freeze(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_config_asset_manager

\*_static_ set_config_asset_manager(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_config_asset_metadata_hash

\*_static_ set_config_asset_metadata_hash(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – 32 byte commitment to unspecified asset metadata

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_config_asset_name

\*_static_ set_config_asset_name(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – The asset name

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_config_asset_reserve

\*_static_ set_config_asset_reserve(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_config_asset_total

\*_static_ set_config_asset_total(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Total number of units of this asset created

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_config_asset_unit_name

\*_static_ set_config_asset_unit_name(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – Unit name of the asset

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_config_asset_url

\*_static_ set_config_asset_url(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – URL

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_extra_program_pages

\*_static_ set_extra_program_pages(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_fee

\*_static_ set_fee(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – microalgos

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_freeze_asset

\*_static_ set_freeze_asset(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Asset_](/reference/algorand-python/api/api-algopy/#algopy.Asset) _|_ [_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Asset ID being frozen or un-frozen

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_freeze_asset_account

\*_static_ set_freeze_asset_account(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – 32 byte address of the account whose asset slot is being frozen or un-frozen

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_freeze_asset_frozen

\*_static_ set_freeze_asset_frozen(a: [bool](https://docs.python.org/3/library/functions.html#bool), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_bool_](https://docs.python.org/3/library/functions.html#bool)) – The new frozen value, 0 or 1

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_global_num_byte_slice

\*_static_ set_global_num_byte_slice(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Number of global state byteslices in ApplicationCall

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_global_num_uint

\*_static_ set_global_num_uint(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Number of global state integers in ApplicationCall

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_local_num_byte_slice

\*_static_ set_local_num_byte_slice(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Number of local state byteslices in ApplicationCall

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_local_num_uint

\*_static_ set_local_num_uint(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Number of local state integers in ApplicationCall

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_nonparticipation

\*_static_ set_nonparticipation(a: [bool](https://docs.python.org/3/library/functions.html#bool), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_bool_](https://docs.python.org/3/library/functions.html#bool)) – Marks an account nonparticipating for rewards

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_note

\*_static_ set_note(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – Any data up to 1024 bytes

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_on_completion

\*_static_ set_on_completion(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – ApplicationCall transaction on completion action

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_receiver

\*_static_ set_receiver(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_reject_version

\*_static_ set_reject_version(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

Min AVM version: 12

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Application version for which the txn must reject

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_rekey_to

\*_static_ set_rekey_to(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – 32 byte Sender’s new AuthAddr

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_selection_pk

\*_static_ set_selection_pk(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_sender

\*_static_ set_sender(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Account_](/reference/algorand-python/api/api-algopy/#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_state_proof_pk

\*_static_ set_state_proof_pk(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – State proof public key

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_type

\*_static_ set_type(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – Transaction type as bytes

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_type_enum

\*_static_ set_type_enum(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Transaction type as integer

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_vote_first

\*_static_ set_vote_first(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – The first round that the participation key is valid.

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_vote_key_dilution

\*_static_ set_vote_key_dilution(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Dilution for the 2-level participation key

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_vote_last

\*_static_ set_vote_last(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – The last round that the participation key is valid.

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_vote_pk

\*_static_ set_vote_pk(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Bytes_](/reference/algorand-python/api/api-algopy/#algopy.Bytes) _|_ [_bytes_](https://docs.python.org/3/library/stdtypes.html#bytes)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ set_xfer_asset

\*_static_ set_xfer_asset(a: [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

- **Parameters:**
  **a** ([_Asset_](/reference/algorand-python/api/api-algopy/#algopy.Asset) _|_ [_UInt64_](/reference/algorand-python/api/api-algopy/#algopy.UInt64) _|_ [_int_](https://docs.python.org/3/library/functions.html#int)) – Asset ID

Native TEAL opcode: [`itxn_field`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_field)

##### _static_ submit

\*_static_ submit() → [None](https://docs.python.org/3/library/constants.html#None)\*

execute the current inner transaction group. Fail if executing this group would exceed the inner transaction limit, or if any transaction in the group fails.
`itxn_submit` resets the current transaction so that it can not be resubmitted. A new `itxn_begin` is required to prepare another inner transaction.

Native TEAL opcode: [`itxn_submit`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itxn_submit)

#### _class_ algopy.op.JsonRef

key B’s value, of type R, from a [valid]() utf-8 encoded json object A _Warning_: Usage should be restricted to very rare use cases, as JSON decoding is expensive and quite limited. In addition, JSON objects are large and not optimized for size. Almost all smart contracts should use simpler and smaller methods (such as the [ABI](https://arc.algorand.foundation/ARCs/arc-0004). This opcode should only be used in cases where JSON is only available option, e.g. when a third-party only signs JSON.
Native TEAL op: [`json_ref`](https://dev.algorand.co/reference/algorand-teal/opcodes/#json_ref)

##### _static_ json_object

\*_static_ json_object(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Native TEAL opcode: [`json_ref`](https://dev.algorand.co/reference/algorand-teal/opcodes/#json_ref)

##### _static_ json_string

\*_static_ json_string(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Native TEAL opcode: [`json_ref`](https://dev.algorand.co/reference/algorand-teal/opcodes/#json_ref)

##### _static_ json_uint64

\*_static_ json_uint64(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Native TEAL opcode: [`json_ref`](https://dev.algorand.co/reference/algorand-teal/opcodes/#json_ref)

#### _class_ algopy.op.MiMCConfigurations

Available values for the `Mimc Configurations` enum

##### Initialization

Initialize self. See help(type(self)) for accurate signature.

##### BLS12_381Mp111 \*: [algopy.op.MiMCConfigurations]

_BLS12_381Mp111 _: [algopy.op.MiMCConfigurations](#algopy.op.MiMCConfigurations)\*\*

Ellipsis

MiMC configuration for the BLS12-381 curve with Miyaguchi-Preneel mode, 111 rounds, exponent 5, seed “seed”
Min AVM version: 11

##### BN254Mp110 \*: [algopy.op.MiMCConfigurations]

_BN254Mp110 _: [algopy.op.MiMCConfigurations](#algopy.op.MiMCConfigurations)\*\*

Ellipsis

MiMC configuration for the BN254 curve with Miyaguchi-Preneel mode, 110 rounds, exponent 5, seed “seed”
Min AVM version: 11

##### \_\_add\_\_

_\_\_add\_\_()_

Return self+value.

##### \_\_contains\_\_

_\_\_contains\_\_()_

Return bool(key in self).

##### \_\_delattr\_\_

_\_\_delattr\_\_()_

Implement delattr(self, name).

##### \_\_dir\_\_

_\_\_dir\_\_()_

Default dir() implementation.

##### \_\_eq\_\_

_\_\_eq\_\_()_

Return self==value.

##### \_\_format\_\_

_\_\_format\_\_()_

Return a formatted version of the string as described by format_spec.

##### \_\_ge\_\_

_\_\_ge\_\_()_

Return self>=value.

##### \_\_getattribute\_\_

_\_\_getattribute\_\_()_

Return getattr(self, name).

##### \_\_getitem\_\_

_\_\_getitem\_\_()_

Return self[key].

##### \_\_getstate\_\_

_\_\_getstate\_\_()_

Helper for pickle.

##### \_\_gt\_\_

_\_\_gt\_\_()_

Return self>value.

##### \_\_hash\_\_

_\_\_hash\_\_()_

Return hash(self).

##### \_\_iter\_\_

_\_\_iter\_\_()_

Implement iter(self).

##### \_\_le\_\_

_\_\_le\_\_()_

Return self<=value.

##### \_\_len\_\_

_\_\_len\_\_()_

Return len(self).

##### \_\_lt\_\_

_\_\_lt\_\_()_

Return self<value.

##### \_\_mod\_\_

_\_\_mod\_\_()_

Return self%value.

##### \_\_mul\_\_

_\_\_mul\_\_()_

Return self\*value.

##### \_\_ne\_\_

_\_\_ne\_\_()_

Return self!=value.

##### \_\_new\_\_

_\_\_new\_\_()_

Create and return a new object. See help(type) for accurate signature.

##### \_\_reduce\_\_

_\_\_reduce\_\_()_

Helper for pickle.

##### \_\_reduce*ex*\_

_\_\_reduce*ex*\_()_

Helper for pickle.

##### \_\_repr\_\_

_\_\_repr\_\_()_

Return repr(self).

##### \_\_rmod\_\_

_\_\_rmod\_\_()_

Return value%self.

##### \_\_rmul\_\_

_\_\_rmul\_\_()_

Return value\*self.

##### \_\_setattr\_\_

_\_\_setattr\_\_()_

Implement setattr(self, name, value).

##### \_\_sizeof\_\_

_\_\_sizeof\_\_()_

Return the size of the string in memory, in bytes.

##### \_\_str\_\_

_\_\_str\_\_()_

Return str(self).

##### capitalize

_capitalize()_

Return a capitalized version of the string.

More specifically, make the first character have upper case and the rest lower
case.

##### casefold

_casefold()_

Return a version of the string suitable for caseless comparisons.

##### center

_center()_

Return a centered string of length width.

Padding is done using the specified fill character (default is a space).

##### count

_count()_

S.count(sub[, start[, end]]) -> int

Return the number of non-overlapping occurrences of substring sub in
string S[start:end]. Optional arguments start and end are
interpreted as in slice notation.

##### encode

_encode()_

Encode the string using the codec registered for encoding.

encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors.
The default is ‘strict’ meaning that encoding errors raise a
UnicodeEncodeError. Other possible values are ‘ignore’, ‘replace’ and
‘xmlcharrefreplace’ as well as any other name registered with
codecs.register_error that can handle UnicodeEncodeErrors.

##### endswith

_endswith()_

S.endswith(suffix[, start[, end]]) -> bool

Return True if S ends with the specified suffix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
suffix can also be a tuple of strings to try.

##### expandtabs

_expandtabs()_

Return a copy where all tab characters are expanded using spaces.

If tabsize is not given, a tab size of 8 characters is assumed.

##### find

_find()_

S.find(sub[, start[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

##### format

_format()_

S.format(\*args, \*\*kwargs) -> str

Return a formatted version of S, using substitutions from args and kwargs.
The substitutions are identified by braces (‘{’ and ‘}’).

##### format_map

_format_map()_

S.format_map(mapping) -> str

Return a formatted version of S, using substitutions from mapping.
The substitutions are identified by braces (‘{’ and ‘}’).

##### index

_index()_

S.index(sub[, start[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

##### isalnum

_isalnum()_

Return True if the string is an alpha-numeric string, False otherwise.

A string is alpha-numeric if all characters in the string are alpha-numeric and
there is at least one character in the string.

##### isalpha

_isalpha()_

Return True if the string is an alphabetic string, False otherwise.

A string is alphabetic if all characters in the string are alphabetic and there
is at least one character in the string.

##### isascii

_isascii()_

Return True if all characters in the string are ASCII, False otherwise.

ASCII characters have code points in the range U+0000-U+007F.
Empty string is ASCII too.

##### isdecimal

_isdecimal()_

Return True if the string is a decimal string, False otherwise.

A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.

##### isdigit

_isdigit()_

Return True if the string is a digit string, False otherwise.

A string is a digit string if all characters in the string are digits and there
is at least one character in the string.

##### isidentifier

_isidentifier()_

Return True if the string is a valid Python identifier, False otherwise.

Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.

##### islower

_islower()_

Return True if the string is a lowercase string, False otherwise.

A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.

##### isnumeric

_isnumeric()_

Return True if the string is a numeric string, False otherwise.

A string is numeric if all characters in the string are numeric and there is at
least one character in the string.

##### isprintable

_isprintable()_

Return True if the string is printable, False otherwise.

A string is printable if all of its characters are considered printable in
repr() or if it is empty.

##### isspace

_isspace()_

Return True if the string is a whitespace string, False otherwise.

A string is whitespace if all characters in the string are whitespace and there
is at least one character in the string.

##### istitle

_istitle()_

Return True if the string is a title-cased string, False otherwise.

In a title-cased string, upper- and title-case characters may only
follow uncased characters and lowercase characters only cased ones.

##### isupper

_isupper()_

Return True if the string is an uppercase string, False otherwise.

A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.

##### join

_join()_

Concatenate any number of strings.

The string whose method is called is inserted in between each given string.
The result is returned as a new string.

Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

##### ljust

_ljust()_

Return a left-justified string of length width.

Padding is done using the specified fill character (default is a space).

##### lower

_lower()_

Return a copy of the string converted to lowercase.

##### lstrip

_lstrip()_

Return a copy of the string with leading whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### partition

_partition()_

Partition the string into three parts using the given separator.

This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.

If the separator is not found, returns a 3-tuple containing the original string
and two empty strings.

##### removeprefix

_removeprefix()_

Return a str with the given prefix string removed if present.

If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.

##### removesuffix

_removesuffix()_

Return a str with the given suffix string removed if present.

If the string ends with the suffix string and that suffix is not empty,
return string[:-len(suffix)]. Otherwise, return a copy of the original
string.

##### replace

_replace()_

Return a copy with all occurrences of substring old replaced by new.

count
Maximum number of occurrences to replace.
-1 (the default value) means replace all occurrences.

If the optional argument count is given, only the first count occurrences are
replaced.

##### rfind

_rfind()_

S.rfind(sub[, start[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

##### rindex

_rindex()_

S.rindex(sub[, start[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

##### rjust

_rjust()_

Return a right-justified string of length width.

Padding is done using the specified fill character (default is a space).

##### rpartition

_rpartition()_

Partition the string into three parts using the given separator.

This will search for the separator in the string, starting at the end. If
the separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.

If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.

##### rsplit

_rsplit()_

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the end of the string and works to the front.

##### rstrip

_rstrip()_

Return a copy of the string with trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### split

_split()_

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the front of the string and works to the end.

Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using
the regular expression module.

##### splitlines

_splitlines()_

Return a list of the lines in the string, breaking at line boundaries.

Line breaks are not included in the resulting list unless keepends is given and
true.

##### startswith

_startswith()_

S.startswith(prefix[, start[, end]]) -> bool

Return True if S starts with the specified prefix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
prefix can also be a tuple of strings to try.

##### strip

_strip()_

Return a copy of the string with leading and trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### swapcase

_swapcase()_

Convert uppercase characters to lowercase and lowercase characters to uppercase.

##### title

_title()_

Return a version of the string where each word is titlecased.

More specifically, words start with uppercased characters and all remaining
cased characters have lower case.

##### translate

_translate()_

Replace each character in the string using the given translation table.

table
Translation table, which must be a mapping of Unicode ordinals to
Unicode ordinals, strings, or None.

The table must implement lookup/indexing via **getitem**, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.

##### upper

_upper()_

Return a copy of the string converted to uppercase.

##### zfill

_zfill()_

Pad a numeric string with zeros on the left, to fill a field of the given width.

The string is never truncated.

#### _class_ algopy.op.Scratch

Load or store scratch values
Native TEAL ops: [`loads`](https://dev.algorand.co/reference/algorand-teal/opcodes/#loads), [`stores`](https://dev.algorand.co/reference/algorand-teal/opcodes/#stores)

##### _static_ load_bytes

\*_static_ load_bytes(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Ath scratch space value. All scratch spaces are 0 at program start.

Native TEAL opcode: [`loads`](https://dev.algorand.co/reference/algorand-teal/opcodes/#loads)

##### _static_ load_uint64

\*_static_ load_uint64(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)\*

Ath scratch space value. All scratch spaces are 0 at program start.

Native TEAL opcode: [`loads`](https://dev.algorand.co/reference/algorand-teal/opcodes/#loads)

##### _static_ store

\*_static_ store(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)\*

store B to the Ath scratch space

Native TEAL opcode: [`stores`](https://dev.algorand.co/reference/algorand-teal/opcodes/#stores)

#### _class_ algopy.op.Txn

Get values for the current executing transaction
Native TEAL ops: [`txn`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txn), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### _static_ accounts

\*_static_ accounts(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)\*

Accounts listed in the ApplicationCall transaction

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### amount \*: [Final]

_amount _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

microalgos

##### _static_ application_args

\*_static_ application_args(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Arguments passed to the application in the ApplicationCall transaction

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### application_id \*: [Final]

_application_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)]\*\*

Ellipsis

ApplicationID from ApplicationCall transaction

##### _static_ applications

\*_static_ applications(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)\*

Foreign Apps listed in the ApplicationCall transaction

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### approval_program \*: [Final]

_approval_program _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

Approval program

##### _static_ approval_program_pages

\*_static_ approval_program_pages(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Approval Program as an array of pages

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### asset_amount \*: [Final]

_asset_amount _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

value in Asset’s units

##### asset_close_to \*: [Final]

_asset_close_to _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte address

##### asset_receiver \*: [Final]

_asset_receiver _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte address

##### asset_sender \*: [Final]

_asset_sender _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte address. Source of assets if Sender is the Asset’s Clawback address.

##### _static_ assets

\*_static_ assets(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)\*

Foreign Assets listed in the ApplicationCall transaction

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### clear_state_program \*: [Final]

_clear_state_program _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

Clear state program

##### _static_ clear_state_program_pages

\*_static_ clear_state_program_pages(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

ClearState Program as an array of pages

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### close_remainder_to \*: [Final]

_close_remainder_to _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte address

##### config_asset \*: [Final]

_config_asset _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)]\*\*

Ellipsis

Asset ID in asset config transaction

##### config_asset_clawback \*: [Final]

_config_asset_clawback _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte address

##### config_asset_decimals \*: [Final]

_config_asset_decimals _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of digits to display after the decimal place when displaying the asset

##### config_asset_default_frozen \*: [Final]

_config_asset_default_frozen _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[bool](https://docs.python.org/3/library/functions.html#bool)]\*\*

Ellipsis

Whether the asset’s slots are frozen by default or not, 0 or 1

##### config_asset_freeze \*: [Final]

_config_asset_freeze _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte address

##### config_asset_manager \*: [Final]

_config_asset_manager _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte address

##### config_asset_metadata_hash \*: [Final]

_config_asset_metadata_hash _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

32 byte commitment to unspecified asset metadata

##### config_asset_name \*: [Final]

_config_asset_name _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

The asset name

##### config_asset_reserve \*: [Final]

_config_asset_reserve _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte address

##### config_asset_total \*: [Final]

_config_asset_total _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Total number of units of this asset created

##### config_asset_unit_name \*: [Final]

_config_asset_unit_name _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

Unit name of the asset

##### config_asset_url \*: [Final]

_config_asset_url _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

URL

##### created_application_id \*: [Final]

_created_application_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application)]\*\*

Ellipsis

ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only

##### created_asset_id \*: [Final]

_created_asset_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)]\*\*

Ellipsis

Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only

##### extra_program_pages \*: [Final]

_extra_program_pages _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

##### fee \*: [Final]

_fee _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

microalgos

##### first_valid \*: [Final]

_first_valid _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

round number

##### first_valid_time \*: [Final]

_first_valid_time _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

UNIX timestamp of block before txn.FirstValid. Fails if negative

##### freeze_asset \*: [Final]

_freeze_asset _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)]\*\*

Ellipsis

Asset ID being frozen or un-frozen

##### freeze_asset_account \*: [Final]

_freeze_asset_account _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte address of the account whose asset slot is being frozen or un-frozen

##### freeze_asset_frozen \*: [Final]

_freeze_asset_frozen _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[bool](https://docs.python.org/3/library/functions.html#bool)]\*\*

Ellipsis

The new frozen value, 0 or 1

##### global_num_byte_slice \*: [Final]

_global_num_byte_slice _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of global state byteslices in ApplicationCall

##### global_num_uint \*: [Final]

_global_num_uint _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of global state integers in ApplicationCall

##### group_index \*: [Final]

_group_index _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1

##### last_log \*: [Final]

_last_log _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

The last message emitted. Empty bytes if none were emitted. Application mode only

##### last_valid \*: [Final]

_last_valid _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

round number

##### lease \*: [Final]

_lease _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

32 byte lease value

##### local_num_byte_slice \*: [Final]

_local_num_byte_slice _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of local state byteslices in ApplicationCall

##### local_num_uint \*: [Final]

_local_num_uint _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of local state integers in ApplicationCall

##### _static_ logs

\*_static_ logs(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)\*

Log messages emitted by an application call (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`txna`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txna), [`txnas`](https://dev.algorand.co/reference/algorand-teal/opcodes/#txnas)

##### nonparticipation \*: [Final]

_nonparticipation _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[bool](https://docs.python.org/3/library/functions.html#bool)]\*\*

Ellipsis

Marks an account nonparticipating for rewards

##### note \*: [Final]

_note _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

Any data up to 1024 bytes

##### num_accounts \*: [Final]

_num_accounts _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of Accounts

##### num_app_args \*: [Final]

_num_app_args _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of ApplicationArgs

##### num_applications \*: [Final]

_num_applications _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of Applications

##### num_approval_program_pages \*: [Final]

_num_approval_program_pages _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of Approval Program pages

##### num_assets \*: [Final]

_num_assets _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of Assets

##### num_clear_state_program_pages \*: [Final]

_num_clear_state_program_pages _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of ClearState Program pages

##### num_logs \*: [Final]

_num_logs _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Number of Logs (only with `itxn` in v5). Application mode only

##### on_completion \*: [Final]

_on_completion _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.OnCompleteAction](/reference/algorand-python/api/api-algopy/#algopy.OnCompleteAction)]\*\*

Ellipsis

ApplicationCall transaction on completion action

##### receiver \*: [Final]

_receiver _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte address

##### reject_version \*: [Final]

_reject_version _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Application version for which the txn must reject
Min AVM version: 12

##### rekey_to \*: [Final]

_rekey_to _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte Sender’s new AuthAddr

##### selection_pk \*: [Final]

_selection_pk _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

32 byte address

##### sender \*: [Final]

_sender _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account)]\*\*

Ellipsis

32 byte address

##### state_proof_pk \*: [Final]

_state_proof_pk _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

State proof public key

##### tx_id \*: [Final]

_tx_id _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

The computed ID for this transaction. 32 bytes.

##### type \*: [Final]

_type _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

Transaction type as bytes

##### type_enum \*: [Final]

_type_enum _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.TransactionType](/reference/algorand-python/api/api-algopy/#algopy.TransactionType)]\*\*

Ellipsis

Transaction type as integer

##### vote_first \*: [Final]

_vote_first _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

The first round that the participation key is valid.

##### vote_key_dilution \*: [Final]

_vote_key_dilution _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

Dilution for the 2-level participation key

##### vote_last \*: [Final]

_vote_last _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]\*\*

Ellipsis

The last round that the participation key is valid.

##### vote_pk \*: [Final]

_vote_pk _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]\*\*

Ellipsis

32 byte address

##### xfer_asset \*: [Final]

_xfer_asset _: [Final](https://docs.python.org/3/library/typing.html#typing.Final)[[algopy.Asset](/reference/algorand-python/api/api-algopy/#algopy.Asset)]\*\*

Ellipsis

Asset ID

#### _class_ algopy.op.VoterParamsGet

X is field F from online account A as of the balance round: 320 rounds before the current round. Y is 1 if A had positive algos online in the agreement round, else Y is 0 and X is a type specific zero-value
Native TEAL op: [`voter_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#voter_params_get)

##### _static_ voter_balance

\*_static_ voter_balance(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Min AVM version: 11

- **Returns tuple[UInt64, bool]:**
  Online stake in microalgos

Native TEAL opcode: [`voter_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#voter_params_get)

##### _static_ voter_incentive_eligible

\*_static_ voter_incentive_eligible(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[bool](https://docs.python.org/3/library/functions.html#bool), [bool](https://docs.python.org/3/library/functions.html#bool)]\*

Min AVM version: 11

- **Returns tuple[bool, bool]:**
  Had this account opted into block payouts

Native TEAL opcode: [`voter_params_get`](https://dev.algorand.co/reference/algorand-teal/opcodes/#voter_params_get)

#### _class_ algopy.op.VrfVerify

Available values for the `vrf_verify` enum

##### Initialization

Initialize self. See help(type(self)) for accurate signature.

##### \_\_add\_\_

_\_\_add\_\_()_

Return self+value.

##### \_\_contains\_\_

_\_\_contains\_\_()_

Return bool(key in self).

##### \_\_delattr\_\_

_\_\_delattr\_\_()_

Implement delattr(self, name).

##### \_\_dir\_\_

_\_\_dir\_\_()_

Default dir() implementation.

##### \_\_eq\_\_

_\_\_eq\_\_()_

Return self==value.

##### \_\_format\_\_

_\_\_format\_\_()_

Return a formatted version of the string as described by format_spec.

##### \_\_ge\_\_

_\_\_ge\_\_()_

Return self>=value.

##### \_\_getattribute\_\_

_\_\_getattribute\_\_()_

Return getattr(self, name).

##### \_\_getitem\_\_

_\_\_getitem\_\_()_

Return self[key].

##### \_\_getstate\_\_

_\_\_getstate\_\_()_

Helper for pickle.

##### \_\_gt\_\_

_\_\_gt\_\_()_

Return self>value.

##### \_\_hash\_\_

_\_\_hash\_\_()_

Return hash(self).

##### \_\_iter\_\_

_\_\_iter\_\_()_

Implement iter(self).

##### \_\_le\_\_

_\_\_le\_\_()_

Return self<=value.

##### \_\_len\_\_

_\_\_len\_\_()_

Return len(self).

##### \_\_lt\_\_

_\_\_lt\_\_()_

Return self<value.

##### \_\_mod\_\_

_\_\_mod\_\_()_

Return self%value.

##### \_\_mul\_\_

_\_\_mul\_\_()_

Return self\*value.

##### \_\_ne\_\_

_\_\_ne\_\_()_

Return self!=value.

##### \_\_new\_\_

_\_\_new\_\_()_

Create and return a new object. See help(type) for accurate signature.

##### \_\_reduce\_\_

_\_\_reduce\_\_()_

Helper for pickle.

##### \_\_reduce*ex*\_

_\_\_reduce*ex*\_()_

Helper for pickle.

##### \_\_repr\_\_

_\_\_repr\_\_()_

Return repr(self).

##### \_\_rmod\_\_

_\_\_rmod\_\_()_

Return value%self.

##### \_\_rmul\_\_

_\_\_rmul\_\_()_

Return value\*self.

##### \_\_setattr\_\_

_\_\_setattr\_\_()_

Implement setattr(self, name, value).

##### \_\_sizeof\_\_

_\_\_sizeof\_\_()_

Return the size of the string in memory, in bytes.

##### \_\_str\_\_

_\_\_str\_\_()_

Return str(self).

##### capitalize

_capitalize()_

Return a capitalized version of the string.

More specifically, make the first character have upper case and the rest lower
case.

##### casefold

_casefold()_

Return a version of the string suitable for caseless comparisons.

##### center

_center()_

Return a centered string of length width.

Padding is done using the specified fill character (default is a space).

##### count

_count()_

S.count(sub[, start[, end]]) -> int

Return the number of non-overlapping occurrences of substring sub in
string S[start:end]. Optional arguments start and end are
interpreted as in slice notation.

##### encode

_encode()_

Encode the string using the codec registered for encoding.

encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors.
The default is ‘strict’ meaning that encoding errors raise a
UnicodeEncodeError. Other possible values are ‘ignore’, ‘replace’ and
‘xmlcharrefreplace’ as well as any other name registered with
codecs.register_error that can handle UnicodeEncodeErrors.

##### endswith

_endswith()_

S.endswith(suffix[, start[, end]]) -> bool

Return True if S ends with the specified suffix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
suffix can also be a tuple of strings to try.

##### expandtabs

_expandtabs()_

Return a copy where all tab characters are expanded using spaces.

If tabsize is not given, a tab size of 8 characters is assumed.

##### find

_find()_

S.find(sub[, start[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

##### format

_format()_

S.format(\*args, \*\*kwargs) -> str

Return a formatted version of S, using substitutions from args and kwargs.
The substitutions are identified by braces (‘{’ and ‘}’).

##### format_map

_format_map()_

S.format_map(mapping) -> str

Return a formatted version of S, using substitutions from mapping.
The substitutions are identified by braces (‘{’ and ‘}’).

##### index

_index()_

S.index(sub[, start[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

##### isalnum

_isalnum()_

Return True if the string is an alpha-numeric string, False otherwise.

A string is alpha-numeric if all characters in the string are alpha-numeric and
there is at least one character in the string.

##### isalpha

_isalpha()_

Return True if the string is an alphabetic string, False otherwise.

A string is alphabetic if all characters in the string are alphabetic and there
is at least one character in the string.

##### isascii

_isascii()_

Return True if all characters in the string are ASCII, False otherwise.

ASCII characters have code points in the range U+0000-U+007F.
Empty string is ASCII too.

##### isdecimal

_isdecimal()_

Return True if the string is a decimal string, False otherwise.

A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.

##### isdigit

_isdigit()_

Return True if the string is a digit string, False otherwise.

A string is a digit string if all characters in the string are digits and there
is at least one character in the string.

##### isidentifier

_isidentifier()_

Return True if the string is a valid Python identifier, False otherwise.

Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.

##### islower

_islower()_

Return True if the string is a lowercase string, False otherwise.

A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.

##### isnumeric

_isnumeric()_

Return True if the string is a numeric string, False otherwise.

A string is numeric if all characters in the string are numeric and there is at
least one character in the string.

##### isprintable

_isprintable()_

Return True if the string is printable, False otherwise.

A string is printable if all of its characters are considered printable in
repr() or if it is empty.

##### isspace

_isspace()_

Return True if the string is a whitespace string, False otherwise.

A string is whitespace if all characters in the string are whitespace and there
is at least one character in the string.

##### istitle

_istitle()_

Return True if the string is a title-cased string, False otherwise.

In a title-cased string, upper- and title-case characters may only
follow uncased characters and lowercase characters only cased ones.

##### isupper

_isupper()_

Return True if the string is an uppercase string, False otherwise.

A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.

##### join

_join()_

Concatenate any number of strings.

The string whose method is called is inserted in between each given string.
The result is returned as a new string.

Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

##### ljust

_ljust()_

Return a left-justified string of length width.

Padding is done using the specified fill character (default is a space).

##### lower

_lower()_

Return a copy of the string converted to lowercase.

##### lstrip

_lstrip()_

Return a copy of the string with leading whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### partition

_partition()_

Partition the string into three parts using the given separator.

This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.

If the separator is not found, returns a 3-tuple containing the original string
and two empty strings.

##### removeprefix

_removeprefix()_

Return a str with the given prefix string removed if present.

If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.

##### removesuffix

_removesuffix()_

Return a str with the given suffix string removed if present.

If the string ends with the suffix string and that suffix is not empty,
return string[:-len(suffix)]. Otherwise, return a copy of the original
string.

##### replace

_replace()_

Return a copy with all occurrences of substring old replaced by new.

count
Maximum number of occurrences to replace.
-1 (the default value) means replace all occurrences.

If the optional argument count is given, only the first count occurrences are
replaced.

##### rfind

_rfind()_

S.rfind(sub[, start[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

##### rindex

_rindex()_

S.rindex(sub[, start[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S[start:end]. Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

##### rjust

_rjust()_

Return a right-justified string of length width.

Padding is done using the specified fill character (default is a space).

##### rpartition

_rpartition()_

Partition the string into three parts using the given separator.

This will search for the separator in the string, starting at the end. If
the separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.

If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.

##### rsplit

_rsplit()_

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the end of the string and works to the front.

##### rstrip

_rstrip()_

Return a copy of the string with trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### split

_split()_

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the front of the string and works to the end.

Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using
the regular expression module.

##### splitlines

_splitlines()_

Return a list of the lines in the string, breaking at line boundaries.

Line breaks are not included in the resulting list unless keepends is given and
true.

##### startswith

_startswith()_

S.startswith(prefix[, start[, end]]) -> bool

Return True if S starts with the specified prefix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
prefix can also be a tuple of strings to try.

##### strip

_strip()_

Return a copy of the string with leading and trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

##### swapcase

_swapcase()_

Convert uppercase characters to lowercase and lowercase characters to uppercase.

##### title

_title()_

Return a version of the string where each word is titlecased.

More specifically, words start with uppercased characters and all remaining
cased characters have lower case.

##### translate

_translate()_

Replace each character in the string using the given translation table.

table
Translation table, which must be a mapping of Unicode ordinals to
Unicode ordinals, strings, or None.

The table must implement lookup/indexing via **getitem**, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.

##### upper

_upper()_

Return a copy of the string converted to uppercase.

##### zfill

_zfill()_

Pad a numeric string with zeros on the left, to fill a field of the given width.

The string is never truncated.

##### algopy.op.addw

_algopy.op.addw(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]_

A plus B as a 128-bit result. X is the carry-bit, Y is the low-order 64 bits.

Native TEAL opcode: [`addw`](https://dev.algorand.co/reference/algorand-teal/opcodes/#addw)

##### algopy.op.app_opted_in

_algopy.op.app_opted_in(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Application](/reference/algorand-python/api/api-algopy/#algopy.Application) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)_

1 if account A is opted in to application B, else 0
params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: 1 if opted in and 0 otherwise.

Native TEAL opcode: [`app_opted_in`](https://dev.algorand.co/reference/algorand-teal/opcodes/#app_opted_in)

##### algopy.op.arg

_algopy.op.arg(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Ath LogicSig argument

Native TEAL opcode: [`arg`](https://dev.algorand.co/reference/algorand-teal/opcodes/#arg), [`args`](https://dev.algorand.co/reference/algorand-teal/opcodes/#args)

##### algopy.op.balance

_algopy.op.balance(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

balance for account A, in microalgos. The balance is observed after the effects of previous transactions in the group, and after the fee for the current transaction is deducted. Changes caused by inner transactions are observable immediately following `itxn_submit`
params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: value.

Native TEAL opcode: [`balance`](https://dev.algorand.co/reference/algorand-teal/opcodes/#balance)

##### algopy.op.base64_decode

_algopy.op.base64_decode(e: [algopy.op.Base64](#algopy.op.Base64), a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

decode A which was base64-encoded using _encoding_ E. Fail if A is not base64 encoded with encoding E
_Warning_: Usage should be restricted to very rare use cases. In almost all cases, smart contracts should directly handle non-encoded byte-strings. This opcode should only be used in cases where base64 is the only available option, e.g. interoperability with a third-party that only signs base64 strings.

Decodes A using the base64 encoding E. Specify the encoding with an immediate arg either as URL and Filename Safe (`URLEncoding`) or Standard (`StdEncoding`). See [RFC 4648 sections 4 and 5](https://rfc-editor.org/rfc/rfc4648.html#section-4). It is assumed that the encoding ends with the exact number of `=` padding characters as required by the RFC. When padding occurs, any unused pad bits in the encoding must be set to zero or the decoding will fail. The special cases of `\n` and `\r` are allowed but completely ignored. An error will result when attempting to decode a string with a character that is not in the encoding alphabet or not one of `=`, `\r`, or `\n`.

- **Parameters:**
  **e** ([_Base64_](#algopy.op.Base64)) – encoding index

Native TEAL opcode: [`base64_decode`](https://dev.algorand.co/reference/algorand-teal/opcodes/#base64_decode)

##### algopy.op.bitlen

_algopy.op.bitlen(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

The highest set bit in A. If A is a byte-array, it is interpreted as a big-endian unsigned integer. bitlen of 0 is 0, bitlen of 8 is 4
bitlen interprets arrays as big-endian integers, unlike setbit/getbit

Native TEAL opcode: [`bitlen`](https://dev.algorand.co/reference/algorand-teal/opcodes/#bitlen)

##### algopy.op.bsqrt

_algopy.op.bsqrt(a: [algopy.BigUInt](/reference/algorand-python/api/api-algopy/#algopy.BigUInt) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.BigUInt](/reference/algorand-python/api/api-algopy/#algopy.BigUInt)_

The largest integer I such that I^2 <= A. A and I are interpreted as big-endian unsigned integers

Native TEAL opcode: [`bsqrt`](https://dev.algorand.co/reference/algorand-teal/opcodes/#bsqrt)

##### algopy.op.btoi

_algopy.op.btoi(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

converts big-endian byte array A to uint64. Fails if len(A) > 8. Padded by leading 0s if len(A) < 8.
`btoi` fails if the input is longer than 8 bytes.

Native TEAL opcode: [`btoi`](https://dev.algorand.co/reference/algorand-teal/opcodes/#btoi)

##### algopy.op.bzero

_algopy.op.bzero(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

zero filled byte-array of length A

Native TEAL opcode: [`bzero`](https://dev.algorand.co/reference/algorand-teal/opcodes/#bzero)

##### algopy.op.concat

_algopy.op.concat(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

join A and B
`concat` fails if the result would be greater than 4096 bytes.

Native TEAL opcode: [`concat`](https://dev.algorand.co/reference/algorand-teal/opcodes/#concat)

##### algopy.op.divmodw

_algopy.op.divmodw(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), d: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]_

W,X = (A,B / C,D); Y,Z = (A,B modulo C,D)
The notation J,K indicates that two uint64 values J and K are interpreted as a uint128 value, with J as the high uint64 and K the low.

Native TEAL opcode: [`divmodw`](https://dev.algorand.co/reference/algorand-teal/opcodes/#divmodw)

##### algopy.op.divw

_algopy.op.divw(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

A,B / C. Fail if C == 0 or if result overflows.
The notation A,B indicates that A and B are interpreted as a uint128 value, with A as the high uint64 and B the low.

Native TEAL opcode: [`divw`](https://dev.algorand.co/reference/algorand-teal/opcodes/#divw)

##### algopy.op.ecdsa_pk_decompress

_algopy.op.ecdsa_pk_decompress(v: [algopy.op.ECDSA](#algopy.op.ECDSA), a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]_

decompress pubkey A into components X, Y
The 33 byte public key in a compressed form to be decompressed into X and Y (top) components. All values are big-endian encoded.

- **Parameters:**
  **v** ([_ECDSA_](#algopy.op.ECDSA)) – curve index

Native TEAL opcode: [`ecdsa_pk_decompress`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ecdsa_pk_decompress)

##### algopy.op.ecdsa_pk_recover

_algopy.op.ecdsa_pk_recover(v: [algopy.op.ECDSA](#algopy.op.ECDSA), a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), d: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)]_

for (data A, recovery id B, signature C, D) recover a public key
S (top) and R elements of a signature, recovery id and data (bottom) are expected on the stack and used to deriver a public key. All values are big-endian encoded. The signed data must be 32 bytes long.

- **Parameters:**
  **v** ([_ECDSA_](#algopy.op.ECDSA)) – curve index

Native TEAL opcode: [`ecdsa_pk_recover`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ecdsa_pk_recover)

##### algopy.op.ecdsa_verify

_algopy.op.ecdsa_verify(v: [algopy.op.ECDSA](#algopy.op.ECDSA), a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), d: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), e: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)_

for (data A, signature B, C and pubkey D, E) verify the signature of the data against the pubkey => {0 or 1}
The 32 byte Y-component of a public key is the last element on the stack, preceded by X-component of a pubkey, preceded by S and R components of a signature, preceded by the data that is fifth element on the stack. All values are big-endian encoded. The signed data must be 32 bytes long, and signatures in lower-S form are only accepted.

- **Parameters:**
  **v** ([_ECDSA_](#algopy.op.ECDSA)) – curve index

Native TEAL opcode: [`ecdsa_verify`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ecdsa_verify)

##### algopy.op.ed25519verify

_algopy.op.ed25519verify(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)_

for (data A, signature B, pubkey C) verify the signature of (“ProgData” || program_hash || data) against the pubkey => {0 or 1}
The 32 byte public key is the last element on the stack, preceded by the 64 byte signature at the second-to-last element on the stack, preceded by the data which was signed at the third-to-last element on the stack.

Native TEAL opcode: [`ed25519verify`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ed25519verify)

##### algopy.op.ed25519verify_bare

_algopy.op.ed25519verify_bare(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)_

for (data A, signature B, pubkey C) verify the signature of the data against the pubkey => {0 or 1}

Native TEAL opcode: [`ed25519verify_bare`](https://dev.algorand.co/reference/algorand-teal/opcodes/#ed25519verify_bare)

##### algopy.op.err

_algopy.op.err() → [Never](https://docs.python.org/3/library/typing.html#typing.Never)_

Fail immediately.

- **Returns typing.Never:**
  Halts program

Native TEAL opcode: [`err`](https://dev.algorand.co/reference/algorand-teal/opcodes/#err)

##### algopy.op.exit

_algopy.op.exit(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [Never](https://docs.python.org/3/library/typing.html#typing.Never)_

use A as success value; end

- **Returns typing.Never:**
  Halts program

Native TEAL opcode: [`return`](https://dev.algorand.co/reference/algorand-teal/opcodes/#return)

##### algopy.op.exp

_algopy.op.exp(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

A raised to the Bth power. Fail if A == B == 0 and on overflow

Native TEAL opcode: [`exp`](https://dev.algorand.co/reference/algorand-teal/opcodes/#exp)

##### algopy.op.expw

_algopy.op.expw(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]_

A raised to the Bth power as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low. Fail if A == B == 0 or if the results exceeds 2^128-1

Native TEAL opcode: [`expw`](https://dev.algorand.co/reference/algorand-teal/opcodes/#expw)

##### algopy.op.extract

_algopy.op.extract(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

A range of bytes from A starting at B up to but not including B+C. If B+C is larger than the array length, the program fails
`extract3` can be called using `extract` with no immediates.

Native TEAL opcode: [`extract`](https://dev.algorand.co/reference/algorand-teal/opcodes/#extract), [`extract3`](https://dev.algorand.co/reference/algorand-teal/opcodes/#extract3)

##### algopy.op.extract_uint16

_algopy.op.extract_uint16(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

A uint16 formed from a range of big-endian bytes from A starting at B up to but not including B+2. If B+2 is larger than the array length, the program fails

Native TEAL opcode: [`extract_uint16`](https://dev.algorand.co/reference/algorand-teal/opcodes/#extract_uint16)

##### algopy.op.extract_uint32

_algopy.op.extract_uint32(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

A uint32 formed from a range of big-endian bytes from A starting at B up to but not including B+4. If B+4 is larger than the array length, the program fails

Native TEAL opcode: [`extract_uint32`](https://dev.algorand.co/reference/algorand-teal/opcodes/#extract_uint32)

##### algopy.op.extract_uint64

_algopy.op.extract_uint64(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

A uint64 formed from a range of big-endian bytes from A starting at B up to but not including B+8. If B+8 is larger than the array length, the program fails

Native TEAL opcode: [`extract_uint64`](https://dev.algorand.co/reference/algorand-teal/opcodes/#extract_uint64)

##### algopy.op.falcon_verify

_algopy.op.falcon_verify(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)_

for (data A, compressed-format signature B, pubkey C) verify the signature of data against the pubkey => {0 or 1}
Min AVM version: 12

Native TEAL opcode: [`falcon_verify`](https://dev.algorand.co/reference/algorand-teal/opcodes/#falcon_verify)

##### algopy.op.gaid

_algopy.op.gaid(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

ID of the asset or application created in the Ath transaction of the current group
`gaids` fails unless the requested transaction created an asset or application and A < GroupIndex.

Native TEAL opcode: [`gaid`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gaid), [`gaids`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gaids)

##### algopy.op.getbit

_algopy.op.getbit(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)_

Bth bit of (byte-array or integer) A. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails
see explanation of bit ordering in setbit

Native TEAL opcode: [`getbit`](https://dev.algorand.co/reference/algorand-teal/opcodes/#getbit)

##### algopy.op.getbyte

_algopy.op.getbyte(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

Bth byte of A, as an integer. If B is greater than or equal to the array length, the program fails

Native TEAL opcode: [`getbyte`](https://dev.algorand.co/reference/algorand-teal/opcodes/#getbyte)

##### algopy.op.gload_bytes

_algopy.op.gload_bytes(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Bth scratch space value of the Ath transaction in the current group

Native TEAL opcode: [`gload`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gload), [`gloads`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gloads), [`gloadss`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gloadss)

##### algopy.op.gload_uint64

_algopy.op.gload_uint64(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

Bth scratch space value of the Ath transaction in the current group

Native TEAL opcode: [`gload`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gload), [`gloads`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gloads), [`gloadss`](https://dev.algorand.co/reference/algorand-teal/opcodes/#gloadss)

##### algopy.op.itob

_algopy.op.itob(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

converts uint64 A to big-endian byte array, always of length 8

Native TEAL opcode: [`itob`](https://dev.algorand.co/reference/algorand-teal/opcodes/#itob)

##### algopy.op.keccak256

_algopy.op.keccak256(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Keccak256 hash of value A, yields [32]byte

Native TEAL opcode: [`keccak256`](https://dev.algorand.co/reference/algorand-teal/opcodes/#keccak256)

##### algopy.op.mimc

_algopy.op.mimc(c: [algopy.op.MiMCConfigurations](#algopy.op.MiMCConfigurations), a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

MiMC hash of scalars A, using curve and parameters specified by configuration C
A is a list of concatenated 32 byte big-endian unsigned integer scalars. Fail if A’s length is not a multiple of 32 or any element exceeds the curve modulus.

The MiMC hash function has known collisions since any input which is a multiple of the elliptic curve modulus will hash to the same value. MiMC is thus not a general purpose hash function, but meant to be used in zero knowledge applications to match a zk-circuit implementation.
Min AVM version: 11

- **Parameters:**
  **c** ([_MiMCConfigurations_](#algopy.op.MiMCConfigurations)) – configuration index

Native TEAL opcode: [`mimc`](https://dev.algorand.co/reference/algorand-teal/opcodes/#mimc)

##### algopy.op.min_balance

_algopy.op.min_balance(a: [algopy.Account](/reference/algorand-python/api/api-algopy/#algopy.Account) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

minimum required balance for account A, in microalgos. Required balance is affected by ASA, App, and Box usage. When creating or opting into an app, the minimum balance grows before the app code runs, therefore the increase is visible there. When deleting or closing out, the minimum balance decreases after the app executes. Changes caused by inner transactions or box usage are observable immediately following the opcode effecting the change.
params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: value.

Native TEAL opcode: [`min_balance`](https://dev.algorand.co/reference/algorand-teal/opcodes/#min_balance)

##### algopy.op.mulw

_algopy.op.mulw(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64), [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)]_

A times B as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low

Native TEAL opcode: [`mulw`](https://dev.algorand.co/reference/algorand-teal/opcodes/#mulw)

##### algopy.op.online_stake

_algopy.op.online_stake() → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

the total online stake in the agreement round
Min AVM version: 11

Native TEAL opcode: [`online_stake`](https://dev.algorand.co/reference/algorand-teal/opcodes/#online_stake)

##### algopy.op.replace

_algopy.op.replace(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Copy of A with the bytes starting at B replaced by the bytes of C. Fails if B+len(C) exceeds len(A)
`replace3` can be called using `replace` with no immediates.

Native TEAL opcode: [`replace2`](https://dev.algorand.co/reference/algorand-teal/opcodes/#replace2), [`replace3`](https://dev.algorand.co/reference/algorand-teal/opcodes/#replace3)

##### algopy.op.select_bytes

_algopy.op.select_bytes(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [bool](https://docs.python.org/3/library/functions.html#bool) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

selects one of two values based on top-of-stack: B if C != 0, else A

Native TEAL opcode: [`select`](https://dev.algorand.co/reference/algorand-teal/opcodes/#select)

##### algopy.op.select_uint64

_algopy.op.select_uint64(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [bool](https://docs.python.org/3/library/functions.html#bool) | [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

selects one of two values based on top-of-stack: B if C != 0, else A

Native TEAL opcode: [`select`](https://dev.algorand.co/reference/algorand-teal/opcodes/#select)

##### algopy.op.setbit_bytes

_algopy.op.setbit_bytes(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [bool](https://docs.python.org/3/library/functions.html#bool), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Copy of (byte-array or integer) A, with the Bth bit set to (0 or 1) C. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails
When A is a uint64, index 0 is the least significant bit. Setting bit 3 to 1 on the integer 0 yields 8, or 2^3. When A is a byte array, index 0 is the leftmost bit of the leftmost byte. Setting bits 0 through 11 to 1 in a 4-byte-array of 0s yields the byte array 0xfff00000. Setting bit 3 to 1 on the 1-byte-array 0x00 yields the byte array 0x10.

Native TEAL opcode: [`setbit`](https://dev.algorand.co/reference/algorand-teal/opcodes/#setbit)

##### algopy.op.setbit_uint64

_algopy.op.setbit_uint64(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [bool](https://docs.python.org/3/library/functions.html#bool), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

Copy of (byte-array or integer) A, with the Bth bit set to (0 or 1) C. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails
When A is a uint64, index 0 is the least significant bit. Setting bit 3 to 1 on the integer 0 yields 8, or 2^3. When A is a byte array, index 0 is the leftmost bit of the leftmost byte. Setting bits 0 through 11 to 1 in a 4-byte-array of 0s yields the byte array 0xfff00000. Setting bit 3 to 1 on the 1-byte-array 0x00 yields the byte array 0x10.

Native TEAL opcode: [`setbit`](https://dev.algorand.co/reference/algorand-teal/opcodes/#setbit)

##### algopy.op.setbyte

_algopy.op.setbyte(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

Copy of A with the Bth byte set to small integer (between 0..255) C. If B is greater than or equal to the array length, the program fails

Native TEAL opcode: [`setbyte`](https://dev.algorand.co/reference/algorand-teal/opcodes/#setbyte)

##### algopy.op.sha256

_algopy.op.sha256(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

SHA256 hash of value A, yields [32]byte

Native TEAL opcode: [`sha256`](https://dev.algorand.co/reference/algorand-teal/opcodes/#sha256)

##### algopy.op.sha3_256

_algopy.op.sha3_256(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

SHA3_256 hash of value A, yields [32]byte

Native TEAL opcode: [`sha3_256`](https://dev.algorand.co/reference/algorand-teal/opcodes/#sha3_256)

##### algopy.op.sha512_256

_algopy.op.sha512_256(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

SHA512_256 hash of value A, yields [32]byte

Native TEAL opcode: [`sha512_256`](https://dev.algorand.co/reference/algorand-teal/opcodes/#sha512_256)

##### algopy.op.shl

_algopy.op.shl(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

A times 2^B, modulo 2^64

Native TEAL opcode: [`shl`](https://dev.algorand.co/reference/algorand-teal/opcodes/#shl)

##### algopy.op.shr

_algopy.op.shr(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

A divided by 2^B

Native TEAL opcode: [`shr`](https://dev.algorand.co/reference/algorand-teal/opcodes/#shr)

##### algopy.op.sqrt

_algopy.op.sqrt(a: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64)_

The largest integer I such that I^2 <= A

Native TEAL opcode: [`sqrt`](https://dev.algorand.co/reference/algorand-teal/opcodes/#sqrt)

##### algopy.op.substring

_algopy.op.substring(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](/reference/algorand-python/api/api-algopy/#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

A range of bytes from A starting at B up to but not including C. If C < B, or either is larger than the array length, the program fails

Native TEAL opcode: [`substring`](https://dev.algorand.co/reference/algorand-teal/opcodes/#substring), [`substring3`](https://dev.algorand.co/reference/algorand-teal/opcodes/#substring3)

##### algopy.op.sumhash512

_algopy.op.sumhash512(a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes)_

sumhash512 of value A, yields [64]byte
Min AVM version: 13

Native TEAL opcode: [`sumhash512`](https://dev.algorand.co/reference/algorand-teal/opcodes/#sumhash512)

##### algopy.op.vrf_verify

_algopy.op.vrf_verify(s: [algopy.op.VrfVerify](#algopy.op.VrfVerify), a: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[[algopy.Bytes](/reference/algorand-python/api/api-algopy/#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]_

Verify the proof B of message A against pubkey C. Returns vrf output and verification flag.
`VrfAlgorand` is the VRF used in Algorand. It is ECVRF-ED25519-SHA512-Elligator2, specified in the IETF internet draft [draft-irtf-cfrg-vrf-03](https://datatracker.ietf.org/doc/draft-irtf-cfrg-vrf/03/).

- **Parameters:**
  **s** ([_VrfVerify_](#algopy.op.VrfVerify)) – parameters index

Native TEAL opcode: [`vrf_verify`](https://dev.algorand.co/reference/algorand-teal/opcodes/#vrf_verify)
