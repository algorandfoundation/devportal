---
title: "algokit_utils.protocols.typed_clients"
---

<div class="api-ref">

## Classes

| [`TypedAppClientProtocol`](#class-typedappclientprotocol)   | Base class for protocol classes.   |
|---------------------------------------------------------------------------------------------|------------------------------------|
| [`TypedAppFactoryProtocol`](#class-typedappfactoryprotocol) | Base class for protocol classes.   |

## Module Contents

### *class* TypedAppClientProtocol
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
class GenProto[T](/docs/algokit-utils/python/latest/api/algokit_utils/protocols/typed_clients/protocol/):
    def meth(self) -> T:
        ...
```

#### *classmethod* from_creator_and_name(, creator_address: str, app_name: str, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, ignore_cache: bool | None = None, app_lookup_cache: [ApplicationLookup](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_deployer/#class-applicationlookup) | None = None, algorand: [AlgorandClient](/docs/algokit-utils/python/latest/api/algokit_utils/algorand/#class-algorandclient)) → Self

#### *classmethod* from_network(, app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None, algorand: [AlgorandClient](/docs/algokit-utils/python/latest/api/algokit_utils/algorand/#class-algorandclient)) → Self

### *class* TypedAppFactoryProtocol
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
class GenProto[T](/docs/algokit-utils/python/latest/api/algokit_utils/protocols/typed_clients/protocol/):
    def meth(self) -> T:
        ...
```

#### deploy(, on_update: OnUpdate | None = None, on_schema_break: OnSchemaBreak | None = None, create_params: CreateParamsT | None = None, update_params: UpdateParamsT | None = None, delete_params: DeleteParamsT | None = None, existing_deployments: [ApplicationLookup](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_deployer/#class-applicationlookup) | None = None, ignore_cache: bool = False, app_name: str | None = None, send_params: SendParams | None = None, compilation_params: [AppClientCompilationParams](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientcompilationparams) | None = None) → tuple[[TypedAppClientProtocol](#class-typedappclientprotocol), [AppFactoryDeployResult](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_factory/#class-appfactorydeployresult)]


</div>
