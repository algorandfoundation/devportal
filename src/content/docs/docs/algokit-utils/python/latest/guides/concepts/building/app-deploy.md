---
title: 'App deployment'
description: 'AlgoKit contains advanced smart contract deployment capabilities that allow you to have idempotent (safely retryable) deployment of a named app, including deploy-time immutability and permanence control and TEAL template substitution. This allows you to control the smart contract development lifecycle of a single-instance app across multiple environments (e.g. LocalNet, TestNet, MainNet).'
---

AlgoKit contains advanced smart contract deployment capabilities that allow you to have idempotent (safely retryable) deployment of a named app, including deploy-time immutability and permanence control and TEAL template substitution. This allows you to control the smart contract development lifecycle of a single-instance app across multiple environments (e.g. LocalNet, TestNet, MainNet).

It's optional to use this functionality, since you can construct your own deployment logic using create / update / delete calls and your own mechanism to maintaining app metadata (like app IDs etc.), but this capability is an opinionated out-of-the-box solution that takes care of the heavy lifting for you.

App deployment is a higher-order use case capability provided by AlgoKit Utils that builds on top of the core capabilities, particularly [App management](/docs/algokit-utils/python/latest/guides/concepts/building/app/).

To see some usage examples check out the [automated tests](https://github.com/algorandfoundation/algokit-utils-py/tree/main/tests/applications).

## Smart contract development lifecycle

The design behind the deployment capability is unique. The architecture design behind app deployment is articulated in an [architecture decision record](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/architecture-decisions/2023-01-12_smart-contract-deployment.md). While the implementation will naturally evolve over time and diverge from this record, the principles and design goals behind the design are comprehensively explained.

Namely, it described the concept of a smart contract development lifecycle:

1. Development
   1. **Write** smart contracts
   2. **Transpile** smart contracts with development-time parameters (code configuration) to TEAL Templates
   3. **Verify** the TEAL Templates maintain [output stability](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/articles/output_stability.md) and any other static code quality checks
2. Deployment
   1. **Substitute** deploy-time parameters into TEAL Templates to create final TEAL code
   2. **Compile** the TEAL to create byte code using algod
   3. **Deploy** the byte code to one or more Algorand networks (e.g. LocalNet, TestNet, MainNet) to create Deployed Application(s)
3. Runtime
   1. **Validate** the deployed app via automated testing of the smart contracts to provide confidence in their correctness
   2. **Call** deployed smart contract with runtime parameters to utilise it

![App deployment lifecycle](/docs/algokit-utils/python/latest/images/lifecycle.jpg)

The App deployment capability provided by AlgoKit Utils helps implement **#2 Deployment**.

Furthermore, the implementation contains the following implementation characteristics per the original architecture design:

- Deploy-time parameters can be provided and substituted into a TEAL Template by convention (by replacing `TMPL_{KEY}`)
- Contracts can be built by any smart contract framework that supports [ARC-56](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0056.md) and [ARC-32](https://github.com/algorandfoundation/ARCs/pull/150), which also means the deployment language can be different to the development language e.g. you can deploy a Python smart contract with TypeScript for instance
- There is explicit control of the immutability (updatability / upgradeability) and permanence (deletability) of the smart contract, which can be varied per environment to allow for easier development and testing in non-MainNet environments (by replacing `TMPL_UPDATABLE` and `TMPL_DELETABLE` at deploy-time by convention, if present)
- Contracts are resolvable by a string "name" for a given creator to allow automated determination of whether that contract had been deployed previously or not, but can also be resolved by ID instead

This design allows you to have the same deployment code across environments without having to specify an ID for each environment. This makes it really easy to apply [continuous delivery](https://continuousdelivery.com/) practices to your smart contract deployment and make the deployment process completely automated.

## `AppDeployer`

The `AppDeployer` is a class that is used to manage app deployments and deployment metadata.

To get an instance of `AppDeployer` you can use either [`AlgorandClient`](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/) via `algorand.app_deployer` or instantiate it directly (passing in an [`AppManager`](/docs/algokit-utils/python/latest/guides/concepts/building/app/#appmanager), [`AlgorandClientTransactionSender`](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/#sending-a-single-transaction) and optionally an indexer client instance):

```python
from algokit_utils.applications.app_deployer import AppDeployer

app_deployer = AppDeployer(app_manager, transaction_sender, indexer)
```

## Deployment metadata

When AlgoKit performs a deployment of an app it creates metadata to describe that deployment and includes this metadata in an [ARC-2](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md) transaction note on any creation and update transactions.

The deployment metadata is defined in `AppDeploymentMetaData`, which is an object with:

- `name: str` - The unique name identifier of the app within the creator account
- `version: str` - The version of app that is / will be deployed; can be an arbitrary string, but we recommend using [semver](https://semver.org/)
- `deletable: bool | None` - Whether or not the app is deletable (`True`) / permanent (`False`) / unspecified (`None`)
- `updatable: bool | None` - Whether or not the app is updatable (`True`) / immutable (`False`) / unspecified (`None`)

> [!NOTE]
> As of v3.0.0, the contract version is no longer auto-incremented. You must explicitly set the `version` field in `AppDeploymentMetaData` for each deployment.

An example of the ARC-2 transaction note that is attached as an app creation / update transaction note to specify this metadata is:

```
ALGOKIT_DEPLOYER:j{name:"MyApp",version:"1.0",updatable:true,deletable:false}
```

## Lookup deployed apps by name

In order to resolve what apps have been previously deployed and their metadata, AlgoKit provides a method that does a series of indexer lookups and returns a map of name to app metadata via `algorand.app_deployer.get_creator_apps_by_name(creator_address=...)`.

```python
app_lookup = algorand.app_deployer.get_creator_apps_by_name(creator_address="CREATORADDRESS")
app1_metadata = app_lookup.apps["app1"]
```

This method caches the result of the lookup, since it's a reasonably heavyweight call (N+1 indexer calls for N deployed apps by the creator). If you want to skip the cache to get a fresh version then you can pass in a second parameter `ignore_cache=True`. This should only be needed if you are performing parallel deployments outside of the current `AppDeployer` instance, since it will keep its cache updated based on its own deployments.

The return type of `get_creator_apps_by_name` is `ApplicationLookup`:

```python
@dataclasses.dataclass
class ApplicationLookup:
    creator: str
    apps: dict[str, ApplicationMetaData] = dataclasses.field(default_factory=dict)
```

The `apps` property contains a lookup by app name that resolves to the current `ApplicationMetaData` value:

```python
@dataclasses.dataclass(frozen=True)
class ApplicationReference:
    app_id: int
    app_address: str

@dataclasses.dataclass(frozen=True)
class ApplicationMetaData:
    # App ID and address (wrapped in ApplicationReference)
    reference: ApplicationReference
    # The deployment metadata (name, version, deletable, updatable)
    deploy_metadata: AppDeploymentMetaData
    # The round the app was created
    created_round: int
    # The last round that the app was updated
    updated_round: int
    # Whether or not the app is deleted
    deleted: bool = False

    # Convenience properties (delegated from reference / deploy_metadata):
    # app_id, app_address, name, version, deletable, updatable
```

An example `ApplicationLookup` might look like this:

```python
ApplicationLookup(
    creator="<creator_address>",
    apps={
        "<app_name>": ApplicationMetaData(
            reference=ApplicationReference(
                app_id=1,
                app_address="<app_account_address>",
            ),
            deploy_metadata=AppDeploymentMetaData(
                name="<app_name>",
                version="2.0.0",
                deletable=False,
                updatable=False,
            ),
            created_round=1,
            updated_round=2,
            deleted=False,
        ),
        # ...
    },
)
```

## Performing a deployment

In order to perform a deployment, AlgoKit provides the `algorand.app_deployer.deploy(deployment)` method.

For example:

```python
deployment_result = algorand.app_deployer.deploy(
    AppDeployParams(
        metadata=AppDeploymentMetaData(
            name="MyApp",
            version="1.0.0",
            deletable=False,
            updatable=False,
        ),
        create_params=AppCreateParams(
            sender="CREATORADDRESS",
            approval_program=approval_teal_template_or_byte_code,
            clear_state_program=clear_state_teal_template_or_byte_code,
            schema=AppCreateSchema(
                global_ints=1,
                global_byte_slices=2,
                local_ints=3,
                local_byte_slices=4,
            ),
            # Other parameters if a create call is made...
        ),
        update_params=AppUpdateParams(
            sender="SENDERADDRESS",
            app_id=0,  # Placeholder — overridden by deploy()
            approval_program="",  # Placeholder — overridden by deploy()
            clear_state_program="",  # Placeholder — overridden by deploy()
        ),
        delete_params=AppDeleteParams(
            sender="SENDERADDRESS",
            app_id=0,  # Placeholder — overridden by deploy()
        ),
        deploy_time_params={
            # Key => value of any TEAL template variables to replace before compilation
            "VALUE": 1,
        },
        # How to handle a schema break
        on_schema_break=OnSchemaBreak.AppendApp,
        # How to handle a contract code update
        on_update=OnUpdate.UpdateApp,
        # Optional send parameters
        send_params={"populate_app_call_resources": True},
    )
)
```

This method performs an idempotent (safely retryable) deployment. It will detect if the app already exists and if it doesn't it will create it. If the app does already exist then it will:

- Detect if the app has been updated (i.e. the program logic has changed) and either fail, perform an update, deploy a new version or perform a replacement (delete old app and create new app) based on the deployment configuration.
- Detect if the app has a breaking schema change (i.e. more global or local storage is needed than were originally requested) and either fail, deploy a new version or perform a replacement (delete old app and create new app) based on the deployment configuration.

It will automatically [add metadata to the transaction note of the create or update transactions](#deployment-metadata) that indicates the name, version, updatability and deletability of the contract. This metadata works in concert with [`app_deployer.get_creator_apps_by_name`](#lookup-deployed-apps-by-name) to allow the app to be reliably retrieved against that creator in it's currently deployed state. It will automatically update it's lookup cache so subsequent calls to `get_creator_apps_by_name` or `deploy` will use the latest metadata without needing to call indexer again.

`deploy` also automatically executes [template substitution](#compilation-and-template-substitution) including deploy-time control of permanence and immutability if the requisite template parameters are specified in the provided TEAL template.

### Input parameters

The first parameter `deployment` is an `AppDeployParams`, which is an object with:

- `metadata: AppDeploymentMetaData` - determines the [deployment metadata](#deployment-metadata) of the deployment
- `create_params: AppCreateParams | AppCreateMethodCallParams` - the parameters for an [app creation call](/docs/algokit-utils/python/latest/guides/concepts/building/app/#creation) (raw or ABI method call)
- `update_params: AppUpdateParams | AppUpdateMethodCallParams` - the parameters for an [app update call](/docs/algokit-utils/python/latest/guides/concepts/building/app/#updating) (raw or ABI method call) without the `app_id`, `approval_program` or `clear_state_program`, since these are calculated by the `deploy` method
- `delete_params: AppDeleteParams | AppDeleteMethodCallParams` - the parameters for an [app delete call](/docs/algokit-utils/python/latest/guides/concepts/building/app/#deleting) (raw or ABI method call) without the `app_id`, since this is calculated by the `deploy` method
- `deploy_time_params: TealTemplateParams | None` - allows automatic substitution of [deploy-time TEAL template variables](#compilation-and-template-substitution)
  - `TealTemplateParams` is a `key => value` dict that will result in `TMPL_{key}` being replaced with `value` (where a string or `bytes` will be appropriately encoded as bytes within the TEAL code)
- `on_schema_break: Literal["replace", "fail", "append"] | OnSchemaBreak | None` - determines `what should happen` if a breaking change to the schema is detected (e.g. if you need more global or local state that was previously requested when the contract was originally created)
- `on_update: Literal["update", "replace", "fail", "append"] | OnUpdate | None` - determines `what should happen` if an update to the smart contract is detected (e.g. the TEAL code has changed since last deployment)
- `existing_deployments: ApplicationLookup | None` - optionally allows the [app lookup retrieval](#lookup-deployed-apps-by-name) to be skipped if it's already been retrieved outside of this `AppDeployer` instance
- `ignore_cache: bool` - optionally allows the [lookup cache](#lookup-deployed-apps-by-name) to be ignored and force retrieval of fresh deployment metadata from indexer (default `False`)
- `max_fee: int | None` - optional maximum fee
- `send_params: SendParams | None` - optional [transaction execution control parameters](/docs/algokit-utils/python/latest/guides/concepts/core/algorand-client/#transaction-parameters)

### Idempotency

`deploy` is idempotent which means you can safely call it again multiple times and it will only apply any changes it detects. If you call it again straight after calling it then it will do nothing.

### Compilation and template substitution

When compiling TEAL template code, the capabilities described in the [above design](#smart-contract-development-lifecycle) are present, namely the ability to supply deploy-time parameters and the ability to control immutability and permanence of the smart contract at deploy-time.

In order for a smart contract to opt-in to use this functionality, it must have a TEAL Template that contains the following:

- `TMPL_{key}` - Which can be replaced with a number or a string / byte array which will be automatically hexadecimal encoded (for any number of `{key}` => `{value}` pairs)
- `TMPL_UPDATABLE` - Which will be replaced with a `1` if an app should be updatable and `0` if it shouldn't (immutable)
- `TMPL_DELETABLE` - Which will be replaced with a `1` if an app should be deletable and `0` if it shouldn't (permanent)

If you passed in a TEAL template for the `approval_program` or `clear_state_program` (i.e. a `str` rather than `bytes`) then `deploy` will automatically compile the templates and use the resulting bytecode for the deployment.

Template substitution is done internally via `AppManager.compile_teal_template(teal_template_code, template_params, deployment_metadata)`, which calls the following in order (all of which can also be invoked directly):

- `AppManager.strip_teal_comments(teal_code)` - Strips out any TEAL comments to reduce the payload that is sent to algod and reduce the likelihood of hitting the max payload limit
- `AppManager.replace_template_variables(teal_template_code, template_values)` - Replaces the template variables by looking for `TMPL_{key}`
- `AppManager.replace_teal_template_deploy_time_control_params(teal_template_code, params)` - If `params` is provided, it allows for deploy-time immutability and permanence control by replacing `TMPL_UPDATABLE` with `params.get("updatable")` if it's not `None` and replacing `TMPL_DELETABLE` with `params.get("deletable")` if it's not `None`
- `algorand.app.compile_teal(teal_code)` - Sends the final TEAL to algod for compilation and returns the result including the source map and caches the compilation result within the `AppManager` instance

#### Making updatable/deletable apps

Below is a sample in [Algorand Python SDK](https://github.com/algorandfoundation/puya) that demonstrates how to make an app updatable/deletable smart contract with the use of `TMPL_UPDATABLE` and `TMPL_DELETABLE` template parameters.

```python
# ... your contract code ...
@arc4.baremethod(allow_actions=["UpdateApplication"])
def update(self) -> None:
    assert TemplateVar[bool](/docs/algokit-utils/python/latest/guides/concepts/building/"UPDATABLE"/)

@arc4.baremethod(allow_actions=["DeleteApplication"])
def delete(self) -> None:
    assert TemplateVar[bool](/docs/algokit-utils/python/latest/guides/concepts/building/"DELETABLE"/)
# ... your contract code ...
```

Alternative example in [Algorand TypeScript SDK](https://github.com/algorandfoundation/puya-ts):

```typescript
// ... your contract code ...
@baremethod({ allowActions: 'UpdateApplication' })
public onUpdate() {
    assert(TemplateVar<boolean>('UPDATABLE'))
}

@baremethod({ allowActions: 'DeleteApplication' })
public onDelete() {
    assert(TemplateVar<boolean>('DELETABLE'))
}
// ... your contract code ...
```

With the above code, when deploying your application, you can pass in the following deploy-time parameters:

```python
my_factory.deploy(
    ... # other deployment parameters
    compilation_params={
        "updatable": True,  # resulting app will be updatable, and this metadata will be set in the ARC-2 transaction note
        "deletable": False,  # resulting app will not be deletable, and this metadata will be set in the ARC-2 transaction note
    }
)
```

### Return value

When `deploy` executes it will return a `comprehensive result` object that describes exactly what it did and has comprehensive metadata to describe the end result of the deployed app.

The `deploy` call itself may do one of the following (which you can determine by looking at the `operation_performed` field on the return value from the function):

- `OperationPerformed.Create` - The smart contract app was created
- `OperationPerformed.Update` - The smart contract app was updated
- `OperationPerformed.Replace` - The smart contract app was deleted and created again (in an atomic transaction)
- `OperationPerformed.Nothing` - Nothing was done since it was detected the existing smart contract app deployment was up to date

The return type is `AppDeployResult`:

```python
@dataclass(frozen=True)
class AppDeployResult:
    app: ApplicationMetaData
    operation_performed: OperationPerformed
    create_result: SendAppCreateTransactionResult | None = None
    update_result: SendAppUpdateTransactionResult | None = None
    delete_result: SendAppTransactionResult | None = None
```

Based on the value of `operation_performed`, the corresponding result fields will be populated:

- If `Create` then `create_result` will contain the [`SendAppCreateTransactionResult`](/docs/algokit-utils/python/latest/guides/concepts/building/app/#calling-an-app)
- If `Update` then `update_result` will contain the [`SendAppUpdateTransactionResult`](/docs/algokit-utils/python/latest/guides/concepts/building/app/#calling-an-app)
- If `Replace` then both `create_result` and `delete_result` will be populated (the old app is deleted and a new one is created in an atomic transaction)
- If `Nothing` then all result fields will be `None`

Both `SendAppCreateTransactionResult` and `SendAppUpdateTransactionResult` include compilation results when TEAL templates were compiled during deployment:

- `compiled_approval: CompiledTeal | bytes | None` - The compiled approval program (a `CompiledTeal` object if compiled from a TEAL template, raw `bytes` if bytecode was provided directly, or `None` if not available)
- `compiled_clear: CompiledTeal | bytes | None` - The compiled clear state program (same semantics as above)
