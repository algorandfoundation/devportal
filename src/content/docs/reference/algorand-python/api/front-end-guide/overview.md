---
title: Building a front end for Puya
sidebar:
  order: 0
---

This guide is for those looking to add support for a new front end language to Puya. It makes several assumptions about the reader.

- They are very familiar with building smart contracts and logic signatures on the Algorand Block Chain and are aware of the AVM and Teal op codes
- They are familiar with Puya’s existing front end languages of Algorand Python and Algorand TypeScript
- They understand lexing and parsing, and how that applies to the language they would like to target

Whilst leveraging the Puya back end takes care of a lot of the complexities in lowering a high level front end language to the stack based teal language, adding a new front end is still a significant undertaking.

## Table of contents

- [Introduction](/reference/algorand-python/api/front-end-guide/00-introduction/)
- [Calling puya](/reference/algorand-python/api/front-end-guide/01-calling-puya/)
  - [Installing puya](/reference/algorand-python/api/front-end-guide/01-calling-puya/#installing-puya)
  - [Puya Options](/reference/algorand-python/api/front-end-guide/01-calling-puya/#puya-options)
  - [AWST json](/reference/algorand-python/api/front-end-guide/01-calling-puya/#awst-json)
    - [Source annotations](/reference/algorand-python/api/front-end-guide/01-calling-puya/#source-annotations)
    - [Other options](/reference/algorand-python/api/front-end-guide/01-calling-puya/#other-options)
    - [Putting it all together](/reference/algorand-python/api/front-end-guide/01-calling-puya/#putting-it-all-together)
- [Designing a language](/reference/algorand-python/api/front-end-guide/02-designing-a-language/)
  - [Primitive and compound types](/reference/algorand-python/api/front-end-guide/02-designing-a-language/#primitive-and-compound-types)
  - [Contract and logic signature paradigms](/reference/algorand-python/api/front-end-guide/02-designing-a-language/#contract-and-logic-signature-paradigms)
  - [Other key abstractions](/reference/algorand-python/api/front-end-guide/02-designing-a-language/#other-key-abstractions)
- [Parsing](/reference/algorand-python/api/front-end-guide/03-parsing/)
  - [Generating AST](/reference/algorand-python/api/front-end-guide/03-parsing/#generating-ast)
  - [Visiting the AST](/reference/algorand-python/api/front-end-guide/03-parsing/#visiting-the-ast)
- [AWST build](/reference/algorand-python/api/front-end-guide/04-awst-build/)
  - [Define AWST nodes and WTypes](/reference/algorand-python/api/front-end-guide/04-awst-build/#define-awst-nodes-and-wtypes)
  - [Visit AST and produce AWST](/reference/algorand-python/api/front-end-guide/04-awst-build/#visit-ast-and-produce-awst)
    - [Builder Pattern](/reference/algorand-python/api/front-end-guide/04-awst-build/#builder-pattern)
    - [PyTypes and PTypes](/reference/algorand-python/api/front-end-guide/04-awst-build/#pytypes-and-ptypes)
  - [Serialize to JSON](/reference/algorand-python/api/front-end-guide/04-awst-build/#serialize-to-json)
