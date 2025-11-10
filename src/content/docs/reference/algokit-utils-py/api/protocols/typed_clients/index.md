---
title: protocols.typed_clients
sidebar:
  label: Index
  order: 0
---

## Classes

| [`TypedAppClientProtocol`](#algokit_utils.protocols.typed_clients.TypedAppClientProtocol)   | Base class for protocol classes. |
| ------------------------------------------------------------------------------------------- | -------------------------------- |
| [`TypedAppFactoryProtocol`](#algokit_utils.protocols.typed_clients.TypedAppFactoryProtocol) | Base class for protocol classes. |

## Module Contents

### _class_ algokit_utils.protocols.typed_clients.TypedAppClientProtocol(\*, app_id: int, app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, algorand: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/algorand/#algokit_utils.algorand.AlgorandClient), approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None)

Bases: `Protocol`

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
class GenProto[T](/reference/algokit-utils-py/api/protocols/typed_clients/protocol/):
    def meth(self) -> T:
        ...
```

#### _classmethod_ from_creator_and_name(\*, creator_address: str, app_name: str, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, ignore_cache: bool | None = None, app_lookup_cache: [algokit_utils.applications.app_deployer.ApplicationLookup](/reference/algokit-utils-py/api/applications/app_deployer/#algokit_utils.applications.app_deployer.ApplicationLookup) | None = None, algorand: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/algorand/#algokit_utils.algorand.AlgorandClient)) → typing_extensions.Self

#### _classmethod_ from_network(\*, app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None, algorand: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/algorand/#algokit_utils.algorand.AlgorandClient)) → typing_extensions.Self

### _class_ algokit_utils.protocols.typed_clients.TypedAppFactoryProtocol(algorand: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/algorand/#algokit_utils.algorand.AlgorandClient), \*\*kwargs: Any)

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
class GenProto[T](/reference/algokit-utils-py/api/protocols/typed_clients/protocol/):
    def meth(self) -> T:
        ...
```

#### deploy(\*, on_update: algokit_utils.applications.app_deployer.OnUpdate | None = None, on_schema_break: algokit_utils.applications.app_deployer.OnSchemaBreak | None = None, create_params: CreateParamsT | None = None, update_params: UpdateParamsT | None = None, delete_params: DeleteParamsT | None = None, existing_deployments: [algokit_utils.applications.app_deployer.ApplicationLookup](/reference/algokit-utils-py/api/applications/app_deployer/#algokit_utils.applications.app_deployer.ApplicationLookup) | None = None, ignore_cache: bool = False, app_name: str | None = None, send_params: algokit_utils.models.SendParams | None = None, compilation_params: [algokit_utils.applications.app_client.AppClientCompilationParams](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientCompilationParams) | None = None) → tuple[[TypedAppClientProtocol](#algokit_utils.protocols.typed_clients.TypedAppClientProtocol), [algokit_utils.applications.app_factory.AppFactoryDeployResult](/reference/algokit-utils-py/api/applications/app_factory/#algokit_utils.applications.app_factory.AppFactoryDeployResult)]
