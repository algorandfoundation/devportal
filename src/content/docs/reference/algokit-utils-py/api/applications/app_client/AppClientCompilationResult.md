---
title: AppClientCompilationResult
sidebar:
  label: AppClientCompilationResult
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.applications.app_client.AppClientCompilationResult

Result of compiling an application’s TEAL code.

Contains the compiled approval and clear state programs along with optional compilation artifacts.

#### approval*program *: bytes\_

The compiled approval program bytes

#### clear*state_program *: bytes\_

The compiled clear state program bytes

#### compiled*approval *: [algokit_utils.models.application.CompiledTeal](/reference/algokit-utils-py/api/models/application/compiledteal/#algokit_utils.models.application.CompiledTeal) | None\_ _= None_

Optional compilation artifacts for approval program

#### compiled*clear *: [algokit_utils.models.application.CompiledTeal](/reference/algokit-utils-py/api/models/application/compiledteal/#algokit_utils.models.application.CompiledTeal) | None\_ _= None_

Optional compilation artifacts for clear state program
