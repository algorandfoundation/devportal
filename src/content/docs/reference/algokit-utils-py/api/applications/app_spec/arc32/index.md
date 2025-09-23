---
title: algokit_utils.applications.app_spec.arc32
---
## Classes

| [`CallConfig`](#algokit_utils.applications.app_spec.arc32.CallConfig)                            | Describes the type of calls a method can be used for based on {py:class}\`algosdk.transaction.OnComplete\` type   |
|---------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| [`StructArgDict`](#algokit_utils.applications.app_spec.arc32.StructArgDict)                   | dict() -> new empty dictionary                                                                                    |
| [`DefaultArgumentDict`](#algokit_utils.applications.app_spec.arc32.DefaultArgumentDict) | DefaultArgument is a container for any arguments that may                                                         |
| [`MethodHints`](#algokit_utils.applications.app_spec.arc32.MethodHints)                         | MethodHints provides hints to the caller about how to call the method                                             |
| [`Arc32Contract`](#algokit_utils.applications.app_spec.arc32.Arc32Contract)                   | ARC-0032 application specification                                                                                |

## Module Contents

### *type* algokit_utils.applications.app_spec.arc32.AppSpecStateDict *= dict[str, dict[str, dict]]*

Type defining Application Specification state entries

### *type* algokit_utils.applications.app_spec.arc32.OnCompleteActionName *= Literal['no_op', 'opt_in', 'close_out', 'clear_state', 'update_application', 'delete_application']*

String literals representing on completion transaction types

### *type* algokit_utils.applications.app_spec.arc32.MethodConfigDict *= dict[OnCompleteActionName, [CallConfig](#algokit_utils.applications.app_spec.arc32.CallConfig)]*

Dictionary of dict[OnCompletionActionName, CallConfig] representing allowed actions for each on completion type

### *type* algokit_utils.applications.app_spec.arc32.DefaultArgumentType *= Literal['abi-method', 'local-state', 'global-state', 'constant']*

Literal values describing the types of default argument sources

### algokit_utils.applications.app_spec.arc32.StateDict