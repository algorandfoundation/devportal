---
editUrl: false
next: false
prev: false
title: "AppCallType"
---

> **AppCallType** = `"no_op"` \| `"opt_in"` \| `"close_out"` \| `"clear_state"` \| `"update_application"` \| `"delete_application"`

Defined in: [src/types/app.ts:180](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L180)

:::caution[Deprecated]
Use `algosdk.OnApplicationComplete` directly instead.

The type of call / [on-completion action](https://dev.algorand.co/concepts/smart-contracts/overview#smart-contract-lifecycle) for a smart contract call.

Equivalent of `algosdk.OnApplicationComplete`, but as a more convenient string enum.

* `no_op`: Normal smart contract call, no special on-complete action
* `opt_in`: Opt-in to smart contract local storage
* `close_out`: Close-out local storage storage
* `clear_state`: Clear local storage state
* `update_application`: Update the smart contract
* `delete_application`: Delete the smart contract
:::
