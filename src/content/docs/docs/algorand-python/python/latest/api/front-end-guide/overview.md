---
sidebar:
  order: 0
title: Building a front end for Puya
---

This guide is for those looking to add support for a new front end language to Puya. It makes several assumptions about the reader.

- They are very familiar with building smart contracts and logic signatures on the Algorand Block Chain and are aware of the AVM and Teal op codes
- They are familiar with Puya’s existing front end languages of Algorand Python and Algorand TypeScript
- They understand lexing and parsing, and how that applies to the language they would like to target

Whilst leveraging the Puya back end takes care of a lot of the complexities in lowering a high level front end language to the stack based teal language, adding a new front end is still a significant undertaking.

## Table of contents

- [Introduction](/docs/algorand-python/python/latest/api/front-end-guide/00-introduction/)
- [Calling puya](/docs/algorand-python/python/latest/api/front-end-guide/01-calling-puya/)
  - [Installing puya](/docs/algorand-python/python/latest/api/front-end-guide/01-calling-puya/#installing-puya)
  - [Puya Options](/docs/algorand-python/python/latest/api/front-end-guide/01-calling-puya/#puya-options)
  - [AWST json](/docs/algorand-python/python/latest/api/front-end-guide/01-calling-puya/#awst-json)
    - [Source annotations](/docs/algorand-python/python/latest/api/front-end-guide/01-calling-puya/#source-annotations)
    - [Other options](/docs/algorand-python/python/latest/api/front-end-guide/01-calling-puya/#other-options)
    - [Putting it all together](/docs/algorand-python/python/latest/api/front-end-guide/01-calling-puya/#putting-it-all-together)
- [Designing a language](/docs/algorand-python/python/latest/api/front-end-guide/02-designing-a-language/)
  - [Primitive and compound types](/docs/algorand-python/python/latest/api/front-end-guide/02-designing-a-language/#primitive-and-compound-types)
  - [Contract and logic signature paradigms](/docs/algorand-python/python/latest/api/front-end-guide/02-designing-a-language/#contract-and-logic-signature-paradigms)
  - [Other key abstractions](/docs/algorand-python/python/latest/api/front-end-guide/02-designing-a-language/#other-key-abstractions)
- [Parsing](/docs/algorand-python/python/latest/api/front-end-guide/03-parsing/)
  - [Generating AST](/docs/algorand-python/python/latest/api/front-end-guide/03-parsing/#generating-ast)
  - [Visiting the AST](/docs/algorand-python/python/latest/api/front-end-guide/03-parsing/#visiting-the-ast)
- [AWST build](/docs/algorand-python/python/latest/api/front-end-guide/04-awst-build/)
  - [Define AWST nodes and WTypes](/docs/algorand-python/python/latest/api/front-end-guide/04-awst-build/#define-awst-nodes-and-wtypes)
  - [Visit AST and produce AWST](/docs/algorand-python/python/latest/api/front-end-guide/04-awst-build/#visit-ast-and-produce-awst)
    - [Builder Pattern](/docs/algorand-python/python/latest/api/front-end-guide/04-awst-build/#builder-pattern)
    - [PyTypes and PTypes](/docs/algorand-python/python/latest/api/front-end-guide/04-awst-build/#pytypes-and-ptypes)
  - [Serialize to JSON](/docs/algorand-python/python/latest/api/front-end-guide/04-awst-build/#serialize-to-json)
