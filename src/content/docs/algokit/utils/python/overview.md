---
title: AlgoKit Python Utilities
---

A set of core Algorand utilities written in Python and released via PyPi that make it easier to build solutions on Algorand. This project is part of [AlgoKit](https://github.com/algorandfoundation/algokit-cli).

The goal of this library is to provide intuitive, productive utility functions that make it easier, quicker and safer to build applications on Algorand. Largely these functions wrap the underlying Algorand SDK, but provide a higher level interface with sensible defaults and capabilities for common tasks.

#### NOTE

If you prefer TypeScript there’s an equivalent [TypeScript utility library](https://github.com/algorandfoundation/algokit-utils-ts).

[Core principles](#core-principles) | [Installation](#installation) | [Usage](#usage) | [Config and logging](#config-logging) | [Capabilities](#capabilities) | [Reference docs](#reference-documentation)

# Contents

- [Account management](capabilities/account)
  - [`AccountManager`](capabilities/account#accountmanager)
  - [`TransactionSignerAccountProtocol`](capabilities/account#transactionsigneraccountprotocol)
  - [Registering a signer](capabilities/account#registering-a-signer)
  - [Default signer](capabilities/account#default-signer)
  - [Get a signer](capabilities/account#get-a-signer)
  - [Accounts](capabilities/account#accounts)
  - [Rekey account](capabilities/account#rekey-account)
  - [KMD account management](capabilities/account#kmd-account-management)
- [Algorand client](capabilities/algorand-client)
  - [Accessing SDK clients](capabilities/algorand-client#accessing-sdk-clients)
  - [Accessing manager class instances](capabilities/algorand-client#accessing-manager-class-instances)
  - [Creating and issuing transactions](capabilities/algorand-client#creating-and-issuing-transactions)
- [Algo amount handling](capabilities/amount)
  - [`AlgoAmount`](capabilities/amount#algoamount)
- [App client and App factory](capabilities/app-client)
  - [`AppFactory`](capabilities/app-client#appfactory)
  - [`AppClient`](capabilities/app-client#appclient)
  - [Dynamically creating clients for a given app spec](capabilities/app-client#dynamically-creating-clients-for-a-given-app-spec)
  - [Creating and deploying an app](capabilities/app-client#creating-and-deploying-an-app)
  - [Updating and deleting an app](capabilities/app-client#updating-and-deleting-an-app)
  - [Calling the app](capabilities/app-client#calling-the-app)
  - [Funding the app account](capabilities/app-client#funding-the-app-account)
  - [Reading state](capabilities/app-client#reading-state)
  - [Handling logic errors and diagnosing errors](capabilities/app-client#handling-logic-errors-and-diagnosing-errors)
  - [Default arguments](capabilities/app-client#default-arguments)
- [App deployment](capabilities/app-deploy)
  - [Smart contract development lifecycle](capabilities/app-deploy#smart-contract-development-lifecycle)
  - [`AppDeployer`](capabilities/app-deploy#appdeployer)
  - [Deployment metadata](capabilities/app-deploy#deployment-metadata)
  - [Lookup deployed apps by name](capabilities/app-deploy#lookup-deployed-apps-by-name)
  - [Performing a deployment](capabilities/app-deploy#performing-a-deployment)
- [App management](capabilities/app)
  - [`AppManager`](capabilities/app#appmanager)
  - [Calling apps](capabilities/app#calling-apps)
  - [Accessing state](capabilities/app#accessing-state)
  - [Getting app information](capabilities/app#getting-app-information)
  - [Box references](capabilities/app#box-references)
  - [Common app parameters](capabilities/app#common-app-parameters)
- [Assets](capabilities/asset)
  - [`AssetManager`](capabilities/asset#assetmanager)
  - [Asset Information](capabilities/asset#asset-information)
  - [Bulk Operations](capabilities/asset#bulk-operations)
  - [Get Asset Information](capabilities/asset#get-asset-information)
- [Client management](capabilities/client)
  - [`ClientManager`](capabilities/client#clientmanager)
  - [Network configuration](capabilities/client#network-configuration)
  - [Clients](capabilities/client#clients)
  - [Automatic retry](capabilities/client#automatic-retry)
  - [Network information](capabilities/client#network-information)
- [Debugger](capabilities/debugging)
  - [Configuration](capabilities/debugging#configuration)
  - [`AlgoKitLogger`](capabilities/debugging#algokitlogger)
  - [Debugging Utilities](capabilities/debugging#debugging-utilities)
- [TestNet Dispenser Client](capabilities/dispenser-client)
  - [Creating a Dispenser Client](capabilities/dispenser-client#creating-a-dispenser-client)
  - [Funding an Account](capabilities/dispenser-client#funding-an-account)
  - [Registering a Refund](capabilities/dispenser-client#registering-a-refund)
  - [Getting Current Limit](capabilities/dispenser-client#getting-current-limit)
  - [Error Handling](capabilities/dispenser-client#error-handling)
- [Testing](capabilities/testing)
  - [Basic Test Setup](capabilities/testing#basic-test-setup)
  - [Creating Test Assets](capabilities/testing#creating-test-assets)
  - [Testing Application Deployments](capabilities/testing#testing-application-deployments)
  - [Testing Asset Transfers](capabilities/testing#testing-asset-transfers)
  - [Testing Application Calls](capabilities/testing#testing-application-calls)
  - [Testing Box Storage](capabilities/testing#testing-box-storage)
- [Transaction composer](capabilities/transaction-composer)
  - [Constructing a transaction](capabilities/transaction-composer#constructing-a-transaction)
  - [Simulating a transaction](capabilities/transaction-composer#simulating-a-transaction)
- [Transaction management](capabilities/transaction)
  - [Transaction Results](capabilities/transaction#transaction-results)
  - [Further reading](capabilities/transaction#further-reading)
- [Algo transfers (payments)](capabilities/transfer)
  - [`payment`](capabilities/transfer#payment)
  - [`ensure_funded`](capabilities/transfer#ensure-funded)
  - [Dispenser](capabilities/transfer#dispenser)
- [Typed application clients](capabilities/typed-app-clients)
  - [Generating an app spec](capabilities/typed-app-clients#generating-an-app-spec)
  - [Generating a typed client](capabilities/typed-app-clients#generating-a-typed-client)
  - [Getting a typed client instance](capabilities/typed-app-clients#getting-a-typed-client-instance)
  - [Client usage](capabilities/typed-app-clients#client-usage)
- [Migration Guide - v3](v3-migration-guide)
  - [Migration Steps](v3-migration-guide#migration-steps)
  - [Breaking Changes](v3-migration-guide#breaking-changes)
  - [Best Practices](v3-migration-guide#best-practices)
  - [Troubleshooting](v3-migration-guide#troubleshooting)
- [API Reference](autoapi/index)
  - [algokit_utils](autoapi/algokit_utils/index)

<a id='core-principles'></a>

# Core principles

This library follows the [Guiding Principles of AlgoKit](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/algokit#guiding-principles) and is designed with the following principles:

- **Modularity** - This library is a thin wrapper of modular building blocks over the Algorand SDK; the primitives from the underlying Algorand SDK are exposed and used wherever possible so you can opt-in to which parts of this library you want to use without having to use an all or nothing approach.
- **Type-safety** - This library provides strong type hints with effort put into creating types that provide good type safety and intellisense when used with tools like MyPy.
- **Productivity** - This library is built to make solution developers highly productive; it has a number of mechanisms to make common code easier and terser to write.

<a id='installation'></a>

# Installation

This library can be installed from PyPi using pip or poetry:

```bash
pip install algokit-utils
# or
poetry add algokit-utils
```

<a id='usage'></a>

# Usage

The main entrypoint to the bulk of the functionality in AlgoKit Utils is the `AlgorandClient` class. You can get started by using one of the static initialization methods to create an Algorand client:

```python
# Point to the network configured through environment variables or
# if no environment variables it will point to the default LocalNet configuration
algorand = AlgorandClient.from_environment()
# Point to default LocalNet configuration
algorand = AlgorandClient.default_localnet()
# Point to TestNet using AlgoNode free tier
algorand = AlgorandClient.testnet()
# Point to MainNet using AlgoNode free tier
algorand = AlgorandClient.mainnet()
# Point to a pre-created algod client
algorand = AlgorandClient.from_clients(algod=...)
# Point to a pre-created algod and indexer client
algorand = AlgorandClient.from_clients(algod=..., indexer=..., kmd=...)
# Point to custom configuration for algod
algod_config = AlgoClientNetworkConfig(server=..., token=..., port=...)
algorand = AlgorandClient.from_config(algod_config=algod_config)
# Point to custom configuration for algod and indexer and kmd
algod_config = AlgoClientNetworkConfig(server=..., token=..., port=...)
indexer_config = AlgoClientNetworkConfig(server=..., token=..., port=...)
kmd_config = AlgoClientNetworkConfig(server=..., token=..., port=...)
algorand = AlgorandClient.from_config(algod_config=algod_config, indexer_config=indexer_config, kmd_config=kmd_config)
```

# Testing

AlgoKit Utils provides a dedicated documentation page on various useful snippets that can be reused for testing with tools like [Pytest](https://docs.pytest.org/en/latest/):

- [Testing](capabilities/testing)

# Types

The library leverages Python’s native type hints and is fully compatible with [MyPy](https://mypy-lang.org/) for static type checking.

All public abstractions and methods are organized in logical modules matching their domain functionality. You can import types either directly from the root module or from their source submodules. Refer to [API documentation](autoapi/index) for more details.

<a id='config-logging'></a>

# Config and logging

To configure the AlgoKit Utils library you can make use of the [`Config`](autoapi/algokit_utils/config/index) object, which has a configure method that lets you configure some or all of the configuration options.

## Config singleton

The AlgoKit Utils configuration singleton can be updated using `config.configure()`. Refer to the [Config API documentation](autoapi/algokit_utils/config/index) for more details.

## Logging

AlgoKit has an in-built logging abstraction through the [`algokit_utils.config.AlgoKitLogger`](autoapi/algokit_utils/config/index#algokit_utils.config.AlgoKitLogger) class that provides standardized logging capabilities. The logger is accessible through the `config.logger` property and provides various logging levels.

Each method supports optional suppression of output using the `suppress_log` parameter.

## Debug mode

To turn on debug mode you can use the following:

```python
from algokit_utils.config import config
config.configure(debug=True)
```

To retrieve the current debug state you can use `debug` property.

This will turn on things like automatic tracing, more verbose logging and [advanced debugging](capabilities/debugging). It’s likely this option will result in extra HTTP calls to algod and it’s worth being careful when it’s turned on.

<a id='capabilities'></a>

# Capabilities

The library helps you interact with and develop against the Algorand blockchain with a series of end-to-end capabilities as described below:

- [**AlgorandClient**](capabilities/algorand-client) - The key entrypoint to the AlgoKit Utils functionality
- **Core capabilities**
  - [**Client management**](capabilities/client) - Creation of (auto-retry) algod, indexer and kmd clients against various networks resolved from environment or specified configuration, and creation of other API clients (e.g. TestNet Dispenser API and app clients)
  - [**Account management**](capabilities/account) - Creation, use, and management of accounts including mnemonic, rekeyed, multisig, transaction signer, idempotent KMD accounts and environment variable injected
  - [**Algo amount handling**](capabilities/amount) - Reliable, explicit, and terse specification of microAlgo and Algo amounts and safe conversion between them
  - [**Transaction management**](capabilities/transaction) - Ability to construct, simulate and send transactions with consistent and highly configurable semantics, including configurable control of transaction notes, logging, fees, validity, signing, and sending behaviour
- **Higher-order use cases**
  - [**Asset management**](capabilities/asset) - Creation, transfer, destroying, opting in and out and managing Algorand Standard Assets
  - [**Typed application clients**](capabilities/typed-app-clients) - Type-safe application clients that are [generated](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/generate#1-typed-clients) from ARC-56 or ARC-32 application spec files and allow you to intuitively and productively interact with a deployed app, which is the recommended way of interacting with apps and builds on top of the following capabilities:
    - [**ARC-56 / ARC-32 App client and App factory**](capabilities/app-client) - Builds on top of the App management and App deployment capabilities (below) to provide a high productivity application client that works with ARC-56 and ARC-32 application spec defined smart contracts
    - [**App management**](capabilities/app) - Creation, updating, deleting, calling (ABI and otherwise) smart contract apps and the metadata associated with them (including state and boxes)
    - [**App deployment**](capabilities/app-deploy) - Idempotent (safely retryable) deployment of an app, including deploy-time immutability and permanence control and TEAL template substitution
  - [**Algo transfers (payments)**](capabilities/transfer) - Ability to easily initiate Algo transfers between accounts, including dispenser management and idempotent account funding
  - [**Automated testing**](capabilities/testing) - Reusable snippets to leverage AlgoKit Utils abstractions in a manner that are useful for when writing tests in tools like [Pytest](https://docs.pytest.org/en/latest/).

<a id='reference-documentation'></a>

# Reference documentation

For detailed API documentation, see the [`algokit_utils`](autoapi/algokit_utils/index#module-algokit_utils)
