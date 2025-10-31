---
title: Guiding Principles
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [Reference docs](/reference/algorand-typescript/api/documents/reference-docs/) / Guiding Principles

## Familiarity

Where the base language (TypeScript/ECMAScript) does not support a given feature natively (e.g., unsigned fixed-size integers),
prior art should be used to inspire an API that is familiar to a user of the base language, and transpilation can be used to
ensure this code executes correctly.

## Leveraging TypeScript type system

TypeScript's type system should be used wherever possible to ensure code is type-safe before compilation, to create a fast
feedback loop and nudge users into the [pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success/).

## TEALScript compatibility

[TEALScript](https://github.com/algorandfoundation/tealscript/) is an existing TypeScript-like language to TEAL compiler; however, the source code is not executable TypeScript, and it does not prioritise semantic compatibility. Wherever possible, Algorand TypeScript should endeavour to be compatible with existing TEALScript contracts and, where not possible, migratable with minimal changes.

## Algorand Python

[Algorand Python](https://algorandfoundation.github.io/puya/) is the Python equivalent of Algorand TypeScript. Whilst there is a primary goal to produce an API which makes sense in the TypeScript ecosystem, a secondary goal is to minimise the disparity between the two APIs such that users who choose to, or are required to, develop on both platforms are not facing a completely unfamiliar API.

# Architecture decisions

As part of developing Algorand TypeScript we are documenting key architecture decisions using [Architecture Decision Records (ADRs)](https://adr.github.io/). The following are the key decisions that have been made thus far:

- [2024-05-21: Primitive integer types](docs/_md/_media/2024-05-21_primitive-integer-types)
- [2024-05-21: Primitive byte and string types](docs/_md/_media/2024-05-21_primitive-bytes-and-strings)
