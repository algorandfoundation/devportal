---
title: TypedAppFactoryProtocol
sidebar:
  label: TypedAppFactoryProtocol
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.protocols.typed_clients.TypedAppFactoryProtocol(algorand: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/algorand/algorandclient/#algokit_utils.algorand.AlgorandClient), \*\*kwargs: Any)

Bases: `Protocol`, `Generic`[`CreateParamsT`, `UpdateParamsT`, `DeleteParamsT`]

Base class for protocol classes.

Protocol classes are defined as:

```default
class Proto(Protocol):
    def meth(self) -> int:
        ...
```

Such classes are primarily used with static type checkers that recognize
structural subtyping (static duck-typing).

For example:

```default
class C:
    def meth(self) -> int:
        return 0

def func(x: Proto) -> int:
    return x.meth()

func(C())  # Passes static type check
```

See PEP 544 for details. Protocol classes decorated with
@typing.runtime_checkable act as simple-minded runtime protocols that check
only the presence of given attributes, ignoring their type signatures.
Protocol classes can be generic, they are defined as:

```default
class GenProto[T](Protocol):
    def meth(self) -> T:
        ...
```

#### deploy(\*, on_update: algokit_utils.applications.app_deployer.OnUpdate | None = None, on_schema_break: algokit_utils.applications.app_deployer.OnSchemaBreak | None = None, create_params: CreateParamsT | None = None, update_params: UpdateParamsT | None = None, delete_params: DeleteParamsT | None = None, existing_deployments: [algokit_utils.applications.app_deployer.ApplicationLookup](/reference/algokit-utils-py/api/applications/app_deployer/applicationlookup/#algokit_utils.applications.app_deployer.ApplicationLookup) | None = None, ignore_cache: bool = False, app_name: str | None = None, send_params: algokit_utils.models.SendParams | None = None, compilation_params: [algokit_utils.applications.app_client.AppClientCompilationParams](/reference/algokit-utils-py/api/applications/app_client/appclientcompilationparams/#algokit_utils.applications.app_client.AppClientCompilationParams) | None = None) → tuple[[TypedAppClientProtocol](TypedAppClientProtocol.md#algokit_utils.protocols.typed_clients.TypedAppClientProtocol), [algokit_utils.applications.app_factory.AppFactoryDeployResult](/reference/algokit-utils-py/api/applications/app_factory/appfactorydeployresult/#algokit_utils.applications.app_factory.AppFactoryDeployResult)]
