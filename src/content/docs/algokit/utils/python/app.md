---
title: App management
---

App management is a higher-order use case capability provided by AlgoKit Utils that builds on top of the core capabilities. It allows you to create, update, delete, call (ABI and otherwise) smart contract apps and the metadata associated with them (including state and boxes).

## `AppManager`

The `AppManager` is a class that is used to manage app information. To get an instance of `AppManager` you can use either [`AlgorandClient`](algorand-client) via `algorand.app` or instantiate it directly (passing in an algod client instance):

```python
from algokit_utils import AppManager

app_manager = AppManager(algod_client)
```

## Calling apps

### App Clients

The recommended way of interacting with apps is via [App clients](app-client) and [App factory](app-client#appfactory). The methods shown on this page are the underlying mechanisms that app clients use and are for advanced use cases when you want more control.

### Compilation

The `AppManager` class allows you to compile TEAL code with caching semantics that allows you to avoid duplicate compilation and keep track of source maps from compiled code.

```python
# Basic compilation
teal_code = "return 1"
compilation_result = app_manager.compile_teal(teal_code)

# Get cached compilation result
cached_result = app_manager.get_compilation_result(teal_code)

# Compile with template substitution
template_code = "int TMPL_VALUE"
template_params = {"VALUE": 1}
compilation_result = app_manager.compile_teal_template(
    template_code,
    template_params=template_params
)

# Compile with deployment control (updatable/deletable)
control_template = f"""#pragma version 8
int {UPDATABLE_TEMPLATE_NAME}
int {DELETABLE_TEMPLATE_NAME}"""
deployment_metadata = {"updatable": True, "deletable": True}
compilation_result = app_manager.compile_teal_template(
    control_template,
    deployment_metadata=deployment_metadata
)
```

The compilation result contains:

- `teal` - Original TEAL code
- `compiled` - Base64 encoded compiled bytecode
- `compiled_hash` - Hash of compiled bytecode
- `compiled_base64_to_bytes` - Raw bytes of compiled bytecode
- `source_map` - Source map for debugging

## Accessing state

### Global state

To access global state you can use:

```python
# Get global state for app
global_state = app_manager.get_global_state(app_id)

# Parse raw state from algod
decoded_state = AppManager.decode_app_state(raw_state)

# Access state values
key_raw = decoded_state["value1"].key_raw  # Raw bytes
key_base64 = decoded_state["value1"].key_base64  # Base64 encoded
value = decoded_state["value1"].value  # Parsed value (str or int)
value_raw = decoded_state["value1"].value_raw  # Raw bytes if bytes value
value_base64 = decoded_state["value1"].value_base64  # Base64 if bytes value
```

### Local state

To access local state you can use:

```python
local_state = app_manager.get_local_state(app_id, "ACCOUNT_ADDRESS")
```

### Boxes

To access box storage:

```python
# Get box names
box_names = app_manager.get_box_names(app_id)

# Get box values
box_value = app_manager.get_box_value(app_id, box_name)
box_values = app_manager.get_box_values(app_id, [box_name1, box_name2])

# Get decoded ABI values
abi_value = app_manager.get_box_value_from_abi_type(
    app_id, box_name, algosdk.abi.StringType()
)
abi_values = app_manager.get_box_values_from_abi_type(
    app_id, [box_name1, box_name2], algosdk.abi.StringType()
)

# Get box reference for transaction
box_ref = AppManager.get_box_reference(box_id)
```

## Getting app information

To get app information:

```python
# Get app info by ID
app_info = app_manager.get_by_id(app_id)

# Get ABI return value from transaction
abi_return = AppManager.get_abi_return(confirmation, abi_method)
```

## Box references

Box references can be specified in several ways:

```python
# String name (encoded to bytes)
box_ref = "my_box"

# Raw bytes
box_ref = b"my_box"

# Account signer (uses address as name)
box_ref = account_signer

# Box reference with app ID
box_ref = BoxReference(app_id=123, name=b"my_box")
```

## Common app parameters

When interacting with apps (creating, updating, deleting, calling), there are common parameters that can be passed:

- `app_id` - ID of the application
- `sender` - Address of transaction sender
- `signer` - Transaction signer (optional)
- `args` - Arguments to pass to the smart contract
- `account_references` - Account addresses to reference
- `app_references` - App IDs to reference
- `asset_references` - Asset IDs to reference
- `box_references` - Box references to load
- `on_complete` - On complete action
- Other common transaction parameters like `note`, `lease`, etc.

For ABI method calls, additional parameters:

- `method` - The ABI method to call
- `args` - ABI typed arguments to pass

See [App client](app-client) for more details on constructing app calls.
