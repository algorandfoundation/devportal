---
title: "algokit_utils.protocols.typed_clients"
---

<div class="api-ref">

# algokit_utils.protocols.typed_clients

## Classes

| [`TypedAppClientProtocol`](#algokit_utils.protocols.typed_clients.TypedAppClientProtocol)   | App Client protocol   |
|---------------------------------------------------------------------------------------------|-----------------------|
| [`TypedAppFactoryProtocol`](#algokit_utils.protocols.typed_clients.TypedAppFactoryProtocol) | App factory protocol  |

## Module Contents

### *class* TypedAppClientProtocol(\*, app_id: int, app_name: str | None = None, default_sender: str | None = None, default_signer: TransactionSigner | None = None, algorand: [AlgorandClient](/docs/algokit-utils/python/latest/api/algokit_utils/algorand/#algokit_utils.algorand.AlgorandClient), approval_source_map: ProgramSourceMap | None = None, clear_source_map: ProgramSourceMap | None = None)

Bases: `Protocol`

App Client protocol

#### *classmethod* from_creator_and_name(\*, creator_address: str, app_name: str, default_sender: str | None = None, default_signer: TransactionSigner | None = None, ignore_cache: bool | None = None, app_lookup_cache: [ApplicationLookup](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_deployer/#algokit_utils.applications.app_deployer.ApplicationLookup) | None = None, algorand: [AlgorandClient](/docs/algokit-utils/python/latest/api/algokit_utils/algorand/#algokit_utils.algorand.AlgorandClient)) → Self

#### *classmethod* from_network(\*, app_name: str | None = None, default_sender: str | None = None, default_signer: TransactionSigner | None = None, approval_source_map: ProgramSourceMap | None = None, clear_source_map: ProgramSourceMap | None = None, algorand: [AlgorandClient](/docs/algokit-utils/python/latest/api/algokit_utils/algorand/#algokit_utils.algorand.AlgorandClient)) → Self

### *class* TypedAppFactoryProtocol(algorand: [AlgorandClient](/docs/algokit-utils/python/latest/api/algokit_utils/algorand/#algokit_utils.algorand.AlgorandClient), \*\*kwargs: Any)

Bases: `Protocol`, `Generic`[`CreateParamsT`, `UpdateParamsT`, `DeleteParamsT`]

App factory protocol

#### deploy(\*, on_update: [OnUpdate](/docs/algokit-utils/python/latest/api/algokit_utils/applications/enums/#algokit_utils.applications.enums.OnUpdate) | None = None, on_schema_break: [OnSchemaBreak](/docs/algokit-utils/python/latest/api/algokit_utils/applications/enums/#algokit_utils.applications.enums.OnSchemaBreak) | None = None, create_params: CreateParamsT | None = None, update_params: UpdateParamsT | None = None, delete_params: DeleteParamsT | None = None, existing_deployments: [ApplicationLookup](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_deployer/#algokit_utils.applications.app_deployer.ApplicationLookup) | None = None, ignore_cache: bool = False, app_name: str | None = None, send_params: [SendParams](/docs/algokit-utils/python/latest/api/algokit_utils/models/transaction/#algokit_utils.models.transaction.SendParams) | None = None, compilation_params: [AppClientCompilationParams](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#algokit_utils.applications.app_client.AppClientCompilationParams) | None = None) → tuple[[TypedAppClientProtocol](#algokit_utils.protocols.typed_clients.TypedAppClientProtocol), [AppFactoryDeployResult](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_factory/#algokit_utils.applications.app_factory.AppFactoryDeployResult)]

</div>
