---
title: Overview
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
sidebar:
  order: 0
---

---

Algorand TypeScript is a partial implementation of the TypeScript programming language that runs on the Algorand Virtual Machine (AVM). It includes a statically typed framework for the development of Algorand smart contracts and logic signatures, with TypeScript interfaces to underlying AVM functionality that work with standard TypeScript tooling.

It maintains the syntax and semantics of TypeScript such that a developer who knows TypeScript can make safe assumptions
about the behaviour of the compiled code when running on the AVM. Algorand TypeScript is also executable TypeScript that can be run
and debugged on a Node.js virtual machine with transpilation to ECMAScript and run from automated tests.

Algorand TypeScript is compiled for execution on the AVM by PuyaTs, a TypeScript front end for the [Puya](https://github.com/algorandfoundation/puya) optimising compiler that ensures the resulting AVM bytecode has execution semantics that match the given TypeScript code. PuyaTs produces output that is directly compatible with AlgoKit typed clients to make deployment and calling easy.

- [Language Guide](/algokit/languages/typescript/language-guide)
- [Migration Guides to 1.0.1](/algokit/languages/typescript/migration-guides)
