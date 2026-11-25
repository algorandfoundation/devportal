---
editUrl: false
next: false
prev: false
title: "arc32ToArc56"
---

> **arc32ToArc56**(`appSpec`): [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/arc56contract/)

Defined in: [src/types/app-spec.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L16)

Converts an ARC-32 Application Specification to an ARC-56 Contract

## Parameters

### appSpec

[`AppSpec`](/docs/algokit-utils/typescript/latest/api/types/app-spec/interfaces/appspec/)

The ARC-32 Application Specification

## Returns

[`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/arc56contract/)

The ARC-56 Contract

## Example

```typescript
const arc56AppSpec = arc32ToArc56(arc32AppSpec)
```
