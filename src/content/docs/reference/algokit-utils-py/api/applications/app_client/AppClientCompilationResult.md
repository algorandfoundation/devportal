---
title: AppClientCompilationResult
---
#### *class* algokit_utils.applications.app_client.AppClientCompilationResult

Result of compiling an application’s TEAL code.

Contains the compiled approval and clear state programs along with optional compilation artifacts.

#### approval_program *: bytes*

The compiled approval program bytes

#### clear_state_program *: bytes*

The compiled clear state program bytes

#### compiled_approval *: [algokit_utils.models.application.CompiledTeal](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/application/compiledteal/#algokit_utils.models.application.CompiledTeal) | None* *= None*

Optional compilation artifacts for approval program

#### compiled_clear *: [algokit_utils.models.application.CompiledTeal](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/application/compiledteal/#algokit_utils.models.application.CompiledTeal) | None* *= None*

Optional compilation artifacts for clear state program