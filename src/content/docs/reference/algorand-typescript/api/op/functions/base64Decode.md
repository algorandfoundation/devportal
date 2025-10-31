---
title: base64Decode
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / base64Decode

> **base64Decode**(`e`, `a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [op.ts:556](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L556)

decode A which was base64-encoded using _encoding_ E. Fail if A is not base64 encoded with encoding E
_Warning_: Usage should be restricted to very rare use cases. In almost all cases, smart contracts should directly handle non-encoded byte-strings. This opcode should only be used in cases where base64 is the only available option, e.g. interoperability with a third-party that only signs base64 strings.
Decodes A using the base64 encoding E. Specify the encoding with an immediate arg either as URL and Filename Safe (`URLEncoding`) or Standard (`StdEncoding`). See [RFC 4648 sections 4 and 5](https://rfc-editor.org/rfc/rfc4648.html#section-4). It is assumed that the encoding ends with the exact number of `=` padding characters as required by the RFC. When padding occurs, any unused pad bits in the encoding must be set to zero or the decoding will fail. The special cases of `\n` and `\r` are allowed but completely ignored. An error will result when attempting to decode a string with a character that is not in the encoding alphabet or not one of `=`, `\r`, or `\n`.

## Parameters

### e

[`Base64`](/reference/algorand-typescript/api/op/enumerations/base64/)

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## See

Native TEAL opcode: [`base64_decode`](https://dev.algorand.co/reference/algorand-teal/opcodes#base64_decode)
Min AVM version: 7
