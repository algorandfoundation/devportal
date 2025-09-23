---
title: algokit_utils.applications.app_client.AppClientCompilationResult
---

#### _class_ algokit_utils.applications.app_client.AppClientCompilationResult

Result of compiling an application’s TEAL code.

Contains the compiled approval and clear state programs along with optional compilation artifacts.

#### approval_program _: bytes_

The compiled approval program bytes

#### clear_state_program _: bytes_

The compiled clear state program bytes

#### compiled_approval _: [algokit_utils.models.application.CompiledTeal](/reference/algokit-utils-py/api/models/application/compiledteal/#algokit_utils.models.application.CompiledTeal) | None_ _= None_

Optional compilation artifacts for approval program

#### compiled_clear _: [algokit_utils.models.application.CompiledTeal](/reference/algokit-utils-py/api/models/application/compiledteal/#algokit_utils.models.application.CompiledTeal) | None_ _= None_

Optional compilation artifacts for clear state program
