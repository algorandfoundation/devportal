---
editUrl: false
next: false
prev: false
title: "CallConfigValue"
---

> **CallConfigValue** = `"NEVER"` \| `"CALL"` \| `"CREATE"` \| `"ALL"`

Defined in: [src/types/app-spec.ts:183](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L183)

The various call configs:
 * `NEVER`: Will not be called
 * `CALL`: Can be called during a non-create call i.e. app id != 0
 * `CREATE`: Can be called during a create call i.e. app id = 0
 * `ALL`: Can be during a create OR non-create call
