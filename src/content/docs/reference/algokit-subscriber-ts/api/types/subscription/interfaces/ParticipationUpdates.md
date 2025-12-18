---
title: 'Interface: ParticipationUpdates'
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

[@algorandfoundation/algokit-subscriber](../../../modules.md) / [types/subscription](../README.md) / ParticipationUpdates

Defined in: [src/types/subscription.ts:142](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L142)

## Properties

### absentParticipationAccounts?

> `optional` **absentParticipationAccounts**: `string`[]

Defined in: [src/types/subscription.ts:146](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L146)

(partupabs) a list of online accounts that need to be suspended.

---

### expiredParticipationAccounts?

> `optional` **expiredParticipationAccounts**: `string`[]

Defined in: [src/types/subscription.ts:152](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L152)

(partupdrmv) a list of online accounts that needs to be converted to offline
since their participation key expired.
