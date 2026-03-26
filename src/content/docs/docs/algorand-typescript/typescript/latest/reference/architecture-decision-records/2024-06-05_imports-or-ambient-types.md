---
title: 'Imports or ambient types'
---

# Architecture Decision Record - Imports or ambient types

- **Status**: Draft
- **Owner:** Tristan Menzel
- **Deciders**: Alessandro Cappellato (Algorand Foundation), Bruno Martins (Algorand Foundation), Rob Moore (MakerX)
- **Date created**: 2024-06-05
- **Date decided**: N/A
- **Date updated**: 2024-06-07

## Context

Algorand TS will be composed of many types and apis. There will be a subset of these types that are used in most if not all contracts and many more that will only be used in some contracts. The purpose of this ADR is to decide how to expose these types to the developer.

Algorand Python exposes types through a number of stub modules. The root module `algopy` contains most of the commonly used types and apis whilst arc4, ops, and inner transaction apis are grouped in nested modules. These are then re-exported in the root under an alias such that, for example: all operations from the op module can be accessed by importing `op` from `algopy` and then typing `op.` and a list of supported ops will show such as `op.sha_256`

## Requirements

- The Algorand TS api must be exposed to the developer in a way that provides development time type safety.

## Principles

- **[AlgoKit Guiding Principles](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/algokit.md#guiding-principles)** - specifically Seamless onramp, Leverage existing ecosystem, Meet devs where they are
- **[Algorand Python Principles](https://algorandfoundation.github.io/puya/principles.html#principles)**
- **[Algorand TypeScript Guiding Principles](/docs/algorand-typescript/typescript/latest/reference/readme/#guiding-principals)**

## Options

### Option 1 - Ambient typing

All types and apis are declared against the global scope and are available without importing. This is how TealScript currently works however TealScript is not executable TypeScript/JavaScript so simply having types available is enough.

Pros:

- No need for importing anything

Cons:

- No structure applied to api making it harder to find a particular type or method
- Would require library to be implicitly imported or referenced somewhere in order for types to exist at (test) runtime
- Doesn't align with modern web development where modules are imported explicitly
- Root intellisense is a mix of Algo TS types and browser types making it hard to see just Algo TS ones

### Option 2 - Import types from modules

All types exist in modules under an `@algorandfoundation/algo-ts` package and are only available when imported explicitly. Importing a missing type in modern IDEs is usually as simple as hitting a keyboard combination. Eg. `alt` + `enter` or `ctrl` + `.`.

Pros:

- API can be divided in submodules of related types
- Idiomatic with modern TypeScript development
- Can offer filtered intellisense options by grouping things like operations under `op.*`

Cons:

- A breaking change from TealScript's approach
- Imports occasionally need to be pruned as code is refactored lest we face the wrath of the linter (but IDEs are great at helping us with this)

## Preferred option

Option 2 is the preferred option as the ability to group related types into submodules which can be imported as required whilst not having _ALL_ the types appear under intellisense provides a better developer experience. Importing from modules is also the standard approach to modern TypeScript development which aligns with our guiding principle of familiarity to TypeScript developers.

## Selected option

Option 2 has been selected
