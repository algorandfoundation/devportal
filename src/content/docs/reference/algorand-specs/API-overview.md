---
numbersections: true
title: "Algorand Node API Overview"
date: \today
pandoc-latex-environment:
  tcolorbox: [box]
  info-box: [info]
  warning-box: [warning]
  error-box: [error]
---

# External Node Systems

The following is a non-normative overview of external systems for the Algorand Node.
In an effort to aid readers seeking to get a deeper understanding of
these systems, we document how these interact with underlying node components
and link each call to its implementation in [Go Algorand](https://github.com/algorand/go-algorand/tree/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/).

The general behavior for API calls could be split in three phases:
a _decoding_ phase where the request and its data is interpreted and
converted for manipulation, a _handling_ phase where calls to
the relevant internal components are issued, and a _response_ phase
where the response object is created, encoding any response data obtained
when applicable.\
In the current implementation, the input and output of
API calls is in [JSON](https://ecma-international.org/publications-and-standards/standards/ecma-404/) or [MessagePack](https://github.com/msgpack/msgpack/blob/master/spec.md) format.

There are two main daemons running in a node: _algod_ and _kmd_, each with their
respective attributions.
We go over these constructs in the following sections.

## OpenAPI schema and endpoint code generation

The `api` folder in `algod` has an _OpenAPI v2_ specification. There is also a coexisting _v3_ specification.

> [!NOTE]
> Because of limited support for _OpenAPI v3_ as of now, both _v2_ and _v3_ version are maintained, as certain tools work better in one or the other.

[Link to algod.oas2.json specification file.](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/algod.oas2.json)

From that specification, the node autogenerates the code for the endpoints using a fork of [`oapi-codegen`](https://github.com/deepmap/oapi-codegen) which contains a couple modifications that were needed to properly support every type. In particular, `uint64` types are not strictly supported by _OpenAPI_, so a type-mapping feature was added to `oapi-codegen`.

# Algorand Daemon

The Algorand Daemon, _algod_, is the main node daemon, responsible for
access to blockchain data, transaction information,
smart contract state, account balances, and generally anything
that is not specifically related to spending key derivation or
usage (which would be a _kmd_ attribution).

## Algod constants

Here we outline some constants that govern the behavior of _Algod_ API calls.
The default values are the current values in the reference implementation, and
constitute a good ballpark suggestion for implementers.

| Constants<div style="width:200px"> </div> | Value                      | Description                                                                                                      |
| ----------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| MaxTealSourceBytes                        | 524,288 bytes              | Size limit for TEAL source programs for requests                                                                 |
| MaxTealDryrunBytes                        | 1,000,000 bytes            | Size limit for dryrun requests                                                                                   |
| MaxAssetResults                           | 1000                       | Size limit for the number of assets returned in a single request to the `/v2/accounts/{address}/assets` endpoint |
| DefaultAssetResults                       | 1000                       | Similar to `MaxAssetResults` but sets the default value (in case `MaxAssetResults` is not set)                   |
| WaitForBlockTimeout                       | 1e+10 nanoseconds (1 min.) | timeout for the `WaitForBlock` endpoint.                                                                         |

## Authorized Calls

There are some endpoints that perform actions that must be authorized, e.g.
starting the loading of a checkpoint or adding participation keys.
The header `X-Algo-API-Token` is used to authenticate access to private
endpoints related to `algod`. Similarly, `X-KMD-API-Token` is used for all
`kmd` endpoints.\
The API can be configured to use two different `X-Algo-API-Token` header values,
one to authenticate public endpoints and another for private ones.

### API folder structure

- `algod.oas2.json`: API Spec. in _OpenAPI v2_ format.
- `algod.oas3.yml`: API Spec. in _OpenAPI v3_ format.
- `Makefile`: Makefile to generate infrastructure using `oapi-codegen`.
- `client` folder
  - `encoding.go`: Util functions to handle encoding.
  - `restClient.go`: Client to operate with algod APIs
- `server` folder
  - `router.go`: Registers the different groups of endpoints with their
    respective middleware on their routes.
  - `common` folder
    - `handlers.go`: Contains the handlers for the common endpoints.
    - `routes.go`: Defines specific routes for common endpoints.
  - `lib` folder
    - `common.go`: Contains interfaces used by common endpoints.
    - `middlewares` folder
      - `auth.go`: Contains the middleware to authenticate using HTTP headers.
      - `connectionLimiter.go`: Contains a middleware to limit the number of
        simultaneous connections.
      - `cors.go`: Contains CORS and Private Network Access middlewares.
      - `logger.go`: Contains logger middleware.
  - `v2` folder
    - `account.go`: Contains util functions to format account and asset structures.
    - `dryrun.go`: Contains structures to handle dry-run requests.
    - `errors.go`: Contains the error messages.
    - `handlers.go`: Contains handlers for most endpoints.
    - `utils.go`: Contains util functions to handle encoding and error messages.
    - `generated` folder: Contains the routes auto-generated by `oapi-codegen`
      using the spec.
- `spec` folder
  - `common` folder
    - `model.go`: Contains models exposed by common endpoints of algod REST API.
  - `v2` folder
    - `model.go`: Contains models exposed by v2 endpoints of algod REST API.
    - `msgp_gen.go`: Contains autogenerated MessagePack serialization functions.

### Common endpoints

These endpoints return information about the node's status, the API, and the "universe" in which the node is operating (MainNet, TestNet, etc.). these endpoints do not have any kind of protection.\
[Link to endpoints definition in the reference implementation.](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/common/handlers.go)

- `GET /genesis`: Returns the genesis file in json format.

- `GET /health`: Returns OK if healthy, used to check if api is working.

- `GET /ready`: Returns OK if healthy and fully caught up.

- `GET /swagger.json`: Get the current swagger spec.

- `GET /versions`: Retrieves the supported API versions, binary build versions, and genesis information.

### Public endpoints

These endpoints use middleware that verifies the `X-Algo-API-Token` header
parameter matches the value configured in the `algod.token` file. If this file
does not have a token configured, the check is omitted.

#### Participating:

These endpoints provide information about pending transactions and can be used
to verify that submitted transactions are being processed by the network.

- `GET /v2/accounts/{address}/transactions/pending`: Returns a list of unconfirmed transactions that were sent by an address and are currently in the transaction pool.\
  The handler for this endpoint is implemented in [GetPendingTransactionsByAddress(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1877).\
  To retrieve this information, the node accesses the [Transaction Pool](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/ledger.md#transaction-pool). If in a multithreaded architecture,
  the transaction pool mutex should be locked.

- `POST /v2/transactions`: Broadcasts a raw transaction to the network.\
  The handler for this endpoint is implemented in [RawTransaction(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1110).\
  It can only be used in the `AlgorandFullNode` configuration.
  In `devMode` it takes a lock to force each new transaction group in a new block.

- `GET /v2/transactions/pending`: Returns the list of unconfirmed transactions currently in the transaction pool.\
  The handler for this endpoint is implemented in [GetPendingTransactions(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1722).
  To retrieve this information, the node accesses the [Transaction Pool](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/ledger.md#transaction-pool).

- `GET /v2/transactions/pending/{txid}`: Returns a transaction with the specified txID from the [Transaction Pool](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/ledger.md#transaction-pool). If not found looks for the transaction in the
  [Transaction Tail](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/ledger.md#transaction-tail) (that is, the recent history of commited blocks).\
  The handler for this endpoint is implemented in [PendingTransactionInformation(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1532).

#### Non participating

These endpoints provide information about the general state of the blockchain:
its accounts, applications, assets, past block data, etc.

- `GET /v2/accounts/{address}`: Gets account's status, balance and spendable
  amounts, with the possibility to include or exclude apps and assets.\
  In order to retrieve this information, the endpoint needs to access the [Ledger](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/ledger.md).
  The handler for this endpoint is implemented in [AccountInformation(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L418).\
  To retrieve this information, in a multithreaded architecture, the node should lock the ledger and accounts
  mutexes.

- `GET /v2/accounts/{address}/applications/{application-id}`: Gets account's application local state and global state. Global state will only be returned if the provided address is the application's creator.\
  The handler for this endpoint is implemented in [AccountApplicationInformation(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L621).\
  To retrieve this information, in a multithreaded architecture, the node should lock the ledger and accounts
  mutexes.

- `GET /v2/accounts/{address}/assets/{asset-id}`: Gets the account's asset holding and asset parameters (if either exist). Asset parameters will only be returned if the provided address is the asset's creator.\
  The handler for this endpoint is implemented in [AccountAssetInformation(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L568).\
  To retrieve this information, in a multithreaded architecture, the node should lock the ledger and accounts
  mutexes.

- `GET /v2/applications/{application-id}`: Gets application information including creator, approval and clear programs, global and local schemas, and global state.\
  The handler for this endpoint is implemented in [GetApplicationByID(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1728).\
  To retrieve this information, in a multithreaded architecture, the node should lock the ledger, block queue and accounts mutexes.

- `GET /v2/applications/{application-id}/box`: Gets box information for a given application.\
  The handler for this endpoint is implemented in [GetApplicationBoxByName()](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1816).\
  For more information on how boxes are created and structured, please refer to the [Algorand Ledger Specification](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/ledger.md#boxes).\
  To retrieve this information, in a multithreaded architecture, the node should lock the ledger, block queue and accounts mutexes.

- `GET /v2/applications/{application-id}/boxes`: Gets all box names for a given application.\
  The handler for this endpoint is implemented in [GetApplicationBoxes(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1772).\
  For more information on how boxes are created and structured, please refer to the [Algorand Ledger Specification](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/ledger.md#boxes).\
  To retrieve this information, in a multithreaded architecture, the node should lock the ledger, block queue and accounts mutexes.

- `GET /v2/assets/{asset-id}`: Gets asset information including creator, name, total supply and special addresses.\
  The handler for this endpoint is implemented in [GetAssetByID(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1849).\
  To retrieve this information, in a multithreaded architecture, the node should lock the ledger, block queue and accounts mutexes.

- `GET /v2/blocks/{round}`: Gets the block for the given round.\
  The handler for this endpoint is implemented in [GetBlock(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L683).\
  To retrieve this information, in a multithreaded architecture, the node should lock the ledger, block queue and accounts mutexes.

- `GET /v2/blocks/{round}/hash`: Gets the block hash for the given round.\
  The handler for this endpoint is implemented in [GetBlockHash(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L824).
  To retrieve this information, in a multithreaded architecture, the node should lock the block queue mutex.

- `GET /v2/blocks/{round}/header`: Gets the block header for the given round.\
  The handler for this endpoint is implemented in [GetBlockHeader(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L843).\
  To retrieve this information, in a multithreaded architecture, the node should lock the block queue and transaction tail mutexes.

- `GET /v2/blocks/{round}/lightheader/proof`: Gets a proof of a light block header for a given round.\
  The handler for this endpoint is implemented in [GetLightBlockHeaderProof(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1988).\
  To retrieve this information, in a multithreaded architecture, the node should lock the block queue and transaction tail mutexes.

- `GET /v2/blocks/{round}/logs`: Gets all of the logs, included inner app calls, for a given block.\
  The handler for this endpoint is implemented in [GetBlockLogs(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L794).\
  To retrieve this information, in a multithreaded architecture, the node should lock the block queue mutex.

- `GET /v2/blocks/{round}/transactions/{txid}/proof`: Generates a Merkle proof for a transaction in a block.\
  The handler for this endpoint is implemented in [GetTransactionProof(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L877).\
  To retrieve this information the node should lock the block queue mutex.

- `GET /v2/blocks/{round}/txids`: Gets all top level TxIDs in a block for the given round.\
  The handler for this endpoint is implemented in [GetBlockTxids(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L731).\
  To retrieve this information, in a multithreaded architecture, the node should lock the block queue mutex.

- `GET /v2/deltas/txn/group/{id}`: Retrieves the delta for a specified transaction group.\
  The handler for this endpoint is implemented in [GetLedgerStateDeltaForTransactionGroup(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L2050).\
  For more details on how a _State Delta_ object is constructed, please refer to the non-normative [Algorand Ledger Overview](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/ledger-overview.md).\
  To retrieve this information the node should lock the transaction group delta tracer mutex.

- `GET /v2/deltas/{round}`: Retrieves the deltas for given round.\
  For more details on how a _State Delta_ object is constructed, please refer to the non-normative [Algorand Ledger Overview](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/ledger-overview.md).\
  The handler for this endpoint is implemented in [GetLedgerStateDelta(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1463).\
  To retrieve this information the node should lock the ledger and accounts
  mutexes.

- `GET /v2/deltas/{round}/txn/group`: Retrieves the deltas for transaction groups in a given round.\
  For more details on how a _State Delta_ object is constructed, please refer to the non-normative [Algorand Ledger Overview](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/ledger-overview.md).\
  The handler for this endpoint is implemented in[GetTransactionGroupLedgerStateDeltasForRound(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L2081).\
  To retrieve this information the node should lock the transaction group delta tracer mutex.

- `GET /v2/devmode/blocks/offset`: Gets the timestamp offset.\
  The Handler for this endpoint is implemented in [GetBlockTimeStampOffset(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L2121).\
  Note that this endpoint is only available in `devMode`.

- `POST /v2/devmode/blocks/offset/{offset}`: Sets the timestamp offset.\
  The handler for this endpoint is implemented in [SetBlockTimeStampOffset(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L2136).
  Note that this endpoint is only available in `devMode`.

- `GET /v2/ledger/supply`: Gets the current supply reported by the ledger, divided in total supply and online supply.\
  The handler for this endpoint is implemented in [GetSupply(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L959).\
  To retrieve this information the node should lock the ledger mutex.

- `GET /v2/status`: Gets the current node full status.
  If an upgrade vote is happening, it also includes all _upgrade vote_ specific information.\
  The handler for this endpoint is implemented in [GetStatus(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L977).\
  To retrieve this information the node should lock the sync status mutex.

- `GET /v2/status/wait-for-block-after/{round}/`: Returns the node status after waiting for the given round.\
  The timeout for this call is governed by the [`WaitForBlockTimeout` constant](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/API-overview.md#algod-constants).
  The handler for this endpoint is implemented in [WaitForBlock(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1035).\

- `POST /v2/transactions/simulate`: Simulates broadcasting a raw transaction to the network, returning relevant simulation results.\
  The handler for this endpoint is implemented in [SimulateTransaction(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1294).\
  To retrieve this information the node should lock the ledger, block queue and transaction tail mutexes.

- `GET /v2/transactions/params`: Returns the suggested parameters for constructing a new transaction (minimum fee, suggested fee, last round, etc).\
  The handler for this endpoint is implemented in [TransactionParams(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1486).\

- `GET /v2/stateproofs/{round}`: Returns the state proof for a given round.\
  The handler for this endpoint is implemented in [GetStateProof(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1949).\
  To retrieve this information, in a multithreaded architecture, the node should lock the block queue, transaction pool mutexes.

#### Follower Mode

A special set of APIs which require manipulating the node state in order to
provide additional data at some predefined granularity.
For example, `SetSyncRound` and `GetLedgerStateDelta` used together control and expose [StateDelta](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/ledger-overview.md#state-delta) objects containing per-round ledger differences that get compacted when actually written to the Ledger database.

The following endpoints are registered only when the node is running in
[Follower Mode](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/infrastructure-overview.md#follower-node-initialization).

- `GET /v2/ledger/sync`: Returns the minimum sync round the ledger is keeping in cache.\
  The handler for this endpoint is implemented in [GetSyncRound(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1452).

- `DELETE /v2/ledger/sync`: Removes the sync round restriction from the ledger.\
  The handler for this endpoint is implemented in [UnsetSyncRound(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1430).

- `POST /v2/ledger/sync/{round}`: Sets the sync round on the ledger.\
  The handler for this endpoint is implemented in [SetSyncRound(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1437).

#### Developer mode

The following endpoints are intended to be used by application developers and
are only enabled when the node has the `EnableDeveloperAPI` configuration set
to `true`. For more details on this and other configuration options, see the [configuration section](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/infrastructure-overview.md#node-configuration-values) in the non-normative [Algorand General Infrastructure Overview](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/infrastructure-overview.md).

- `POST /v2/teal/compile`: Compiles TEAL code to binary, returning both binary and contract address.\
  The handler for this endpoint is implemented in [TealCompile(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1903).
  The compilation process includes hashing the program and using this hash as input to derive the address for the associated contract account.\
  The "compiled binary" is a _base64_ encoding of the program bytecode itself.
  For extra details on the assembly process itself please refer to the [Algorand Virtual Machine Specification](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/AVM.md). You may also refer to the non-normative [Algorand Virtual Machine Overview](AVM-overview.md#compilation-and-assembler) for engineering details on the compilation process and how it could be implemented.

- `POST /v2/teal/disassemble`: Disassembles program bytecode encoded in _base64_ into TEAL code.\
  The handler for this endpoint is implemented in [TealDisassemble(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L2026).

- `POST /v2/teal/dryrun`: Executes TEAL program(s) in context and returns debugging information about the execution.\
  The handler for this endpoint is implemented in [TealDryrun(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1362).

#### Experimental

These endpoints are still under development and not yet ready for general use.
The following endpoints are registered only when the node has `EnableExperimentalAPI` set to `true`. For more details on this and other configuration options, see the [configuration section](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/infrastructure-overview.md#node-configuration-values) in the non-normative [Algorand General Infrastructure Overview](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/infrastructure-overview.md).

- `GET /v2/experimental`: Returns OK if experimental API is enabled.\
  The handler for this endpoint is implemented in [ExperimentalCheck(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L2114).

- `POST /v2/transactions/async`: Broadcasts a raw transaction to the
  network without ensuring it is accepted by the [Transaction Pool](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/ledger.md#transaction-pool).
  This method is intended to be used for performance testing and debugging
  purposes only. It is a development function, node should have
  both `EnableExperimentalAPI` and `EnableDeveloperAPI` set to true.\
  The handler for this endpoint is implemented in [RawTransactionAsync(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1138).\
  It can only be used in an `AlgorandFullNode` (with the aforementioned configuration flags enabled).

- `GET /v2/accounts/{address}/assets`: Gets a list of assets held by an account, inclusive of asset params.\
  The handler for this endpoint is implemented in [AccountAssetsInformation(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1158).\
  The information retrieved by this endpoint uses information stored in the database, therefore the indicated round is the last one known by the database.

### Private endpoints

These endpoints use middleware that verifies the `X-Algo-API-Token` header
parameter matches the value configured in the `algod.admin.token` file.

#### Participating

These endpoints allow managing the keys used in the participation protocol.

- `GET /v2/participation`: Return a list of registered participation keys.\
  The handler for this endpoint is implemented in [GetParticipationKeys(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L251).\
  To retrieve this information the node should lock the participation database mutex.

- `POST /v2/participation`: Add a participation key to the node.\
  The handler for this endpoint is implemented in [AddParticipationKey(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L310).\
  To add the key the node should lock the account manager mutex.

- `POST /v2/participation/generate/{address}`: Generates and installs participation keys to the node for the given address.\
  The handler for this endpoint is implemented in [GenerateParticipationKeys(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L289).\
  Only one key can be generated at a time.
  To add the key the node should lock the account manager mutex.

- `GET /v2/participation/{participation-id}`: Gets registered participation key data by id.\
  The handler for this endpoint is implemented in [GetParticipationKeyByID(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L359).\
  To retrieve this information the node should lock the participation database mutex.

- `POST /v2/participation/{participation-id}`: Append state proof keys to a participation key.\
  The handler for this endpoint is implemented in [AppendKeys(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L384).\
  To retrieve this information the node should lock the participation database mutex.

- `DELETE /v2/participation/{participation-id}`: Delete a given participation key by id.\
  The handler for this endpoint is implemented in [DeleteParticipationKeyByID(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L336).\
  To retrieve this information the node should lock the participation database mutex.

#### Non participating

These endpoints allow managing, monitoring and debugging the node's operation.

- `GET /debug/settings/pprof`: Returns the current mutex and blocking rates.\
  The handler for this endpoint is implemented in [GetDebugSettingsProf(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L2152).\

- `PUT /debug/settings/pprof`: Sets the mutex and blocking rates and returns the overwritten values.\
  The handler for this endpoint is implemented in [PutDebugSettingsProf(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L2170),\

- `GET /debug/settings/config`: Returns the merged (defaults and overrides) config file in _json_ format.\
  The handler for this endpoint is implemented in [GetConfig(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L2165).\
  For more information on the Algorand Node configuration, please refer to the non-normative [General Infrastructure Overview](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/infrastructure-overview.md).

- `POST /v2/shutdown`: Endpoint defined to shut down the node (unimplemented).
  The handler for this endpoint is in [ShutdownNode(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L411).

- `POST /v2/catchup/{catchpoint}`: Given a valid catchpoint, it starts the catchup process.\
  The handler for this endpoint is implemented in [StartCatchup(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1883).
  For more details on the catchup process, refer to the [catchup section](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/infrastructure-overview.md#node-catchup) in the [General Infrastructure Overview](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/infrastructure-overview.md).

- `DELETE /v2/catchup/{catchpoint}`: Given a valid catchpoint, it aborts the catchup process.\
  The handler for this endpoint is implemented in [AbortCatchup(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/algod/api/server/v2/handlers.go#L1890).
  For more details on the catchup process, refer to the [catchup section](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/infrastructure-overview.md#node-catchup) in the [General Infrastructure Overview](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/infrastructure-overview.md).

# Key Management Daemon

They Key Management Daemon (_kmd_) is responsible for managing wallets and private
keys in a secure way. It allows creation of wallets, key storage, and signing transactions without
exposing the private keys.

- `GET /swagger.json`: Gets the current swagger specification.
  The handler for this endpoint is implemented in [SwaggerHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/api.go#L119).

- `GET /versions`: Retrieves the supported API versions.
  The handler for this endpoint is implemented in [versionsHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/api.go#L88).

- `POST /v1/key`: Generates the next key in the deterministic key sequence (as determined by the master derivation key) and adds it to the wallet, returning the public key.
  The handler for this endpoint is implemented in [postKeyHandler](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L643).

- `DELETE /v1/key`: Deletes the key with the passed public key from the wallet.
  The handler for this endpoint is implemented in [deleteKeyHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L695).

- `POST /v1/key/export`: Export the secret key associated with the passed public key.
  The handler for this endpoint is implemented in [postKeyExportHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L586).

- `POST /v1/key/import`: Import an externally generated key into the wallet. Note that if you wish to back up the imported key, you must do so by backing up the entire wallet database, because imported keys were not derived from the wallet's master derivation key.
  The handler for this endpoint is implemented in [postKeyImportHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L533).

- `POST /v1/key/list`: Lists all of the public keys in this wallet. All of them have a stored private key.
  The handler for this endpoint is implemented in [postKeyListHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L750).

- `POST /v1/master-key/export`: Export the master derivation key from the wallet. This key is a master "backup" key for the underlying wallet. With it, you can regenerate all of the wallets that have been generated with this wallet's `POST /v1/key` endpoint. Note that this key does not allow for recovery of keys imported from other wallets.\
  The handler for this endpoint is implemented in [postMasterKeyExportHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L314).

- `DELETE /v1/multisig`: Deletes multisignature preimage information for the passed address from the wallet.\
  The handler for this endpoint is implemented in [deleteMultisigHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L1205).

- `POST /v1/multisig/export`: Given a multisig address whose preimage this wallet stores, returns the information used to generate the address, including public keys, threshold, and multisignature version.
  The handler for this endpoint is implemented in [postMultisigExportHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L1022).

- `POST /v1/multisig/import`: Generates a multisignature account from the passed public keys array and multisignature metadata, and stores all of this in the wallet.
  The handler for this endpoint is implemented in [postMultisigImportHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L970).

- `POST /v1/multisig/list`: Lists all of the multisignature accounts whose preimages this wallet stores.
  The handler for this endpoint is implemented in [postMultisigListHandler](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L920).

- `POST /v1/multisig/sign`: Start a multisig signature, or add a signature to a partially completed multisig signature object.
  The handler for this endpoint is implemented in [postMultisigTransactionSignHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L1084).

- `POST /v1/multisig/signprogram`: Start a multisig signature, or add a signature to a partially completed multisig signature object related to a logic signature program (see the logic signature execution mode in the [Algorand Virtual Machine Specifiaction](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/avm.md#execution-modes)). This pattern is also frequently referred to as a _delegated signature_.
  The handler for this endpoint is implemented in [postMultisigProgramSignHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L1146).

- `POST /v1/program/sign`: Signs the passed program with a key from the wallet, determined by the account named in the request.\
  The handler for this endpoint is implemented in [postProgramSignHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L862).

- `POST /v1/transaction/sign`: Signs the passed transaction with a key from the wallet, determined by the sender encoded in the transaction.\
  The handler for this endpoint is implemented in [postTransactionSignHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L800).

- `POST /v1/wallet`: Creates a new wallet with the given parameters.\
  The handler for this endpoint is implemented in [postWalletHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L128).

- `POST /v1/wallet/info`: Returns information about the wallet associated with the passed wallet handle token. Additionally returns expiration information about the token itself.
  The handler for this endpoint is implemented in [postWalletInfoHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L259).

- `POST /v1/wallet/init`: Unlock the wallet and return a wallet handle token that can be used for subsequent operations. These tokens expire periodically and must be renewed. You can `POST` the token to `/v1/wallet/info` to see how much time remains until expiration, and renew it with `/v1/wallet/renew`. When you're done, you can invalidate the token with `/v1/wallet/release`.\
  The handler for this endpoint is implemented in [postWalletInitHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L205).

- `POST /v1/wallet/release`: Invalidate the passed wallet handle token, making it invalid for use in subsequent requests.\
  The handler for this endpoint is implemented in [postWalletReleaseHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L368).

- `POST /v1/wallet/rename`: Rename the underlying wallet to something else.\
  The handler for this endpoint is implemented in [postWalletRenameHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L462).

- `POST /v1/wallet/renew`: Renew a wallet handle token, increasing its expiration duration to its initial value.
  The handler for this endpoint is implemented in [postWalletRenewHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L409).

- `GET /v1/wallets`: Lists all of the wallets that are known to _kmd_.
  The handler for this endpoint is implemented in [getWalletsHandler(.)](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/daemon/kmd/api/v1/handlers.go#L88).


