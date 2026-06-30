---
title: 'Algorand REST APIs'
sidebar:
  label: Overview
---

## Algod, Indexer and KMD REST Endpoints

Integration with the Algorand protocol daemon (`algod`), Algorand key management daemon (`kmd`) or Algorand Indexer daemon (`algorand-indexer`) is performed using a set of REST APIs.

All REST methods and models are fully described within reference documentation.

- [Algod REST APIs](/reference/rest-api/algod)

- [Indexer REST APIs](/reference/rest-api/indexer)

- [KMD REST APIs](/reference/rest-api/kmd)

:::note
Algorand provides endpoints for [Open API Specification version 2 (OAS2)](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md) and [OAS3](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md).
:::

### Algod REST Endpoints

[Algod REST Endpoints OAS3 spec file](https://github.com/algorand/go-algorand/blob/master/daemon/algod/api/algod.oas3.yml?raw=true)(.yml)

[Algod REST Endpoints OAS2 spec file](https://github.com/algorand/go-algorand/blob/master/daemon/algod/api/algod.oas2.json?raw=true)

<a href="https://algorand-algod.apidocumentation.com/reference" style="display: inline-block;">
  <img src="https://img.shields.io/badge/Run%20in-Scalar-4A90E2?style=flat&logoColor=4A90E2&color=f0f0f0" alt="Run in Scalar">
</a>

<br>

<a href="https://nodely.io/swagger/index.html?url=/swagger/api/4160/algod.oas3.yml" style="display: inline-block;">
  <img src="https://img.shields.io/badge/Run%20in-Swagger-85EA2D?logo=swagger&logoColor=black" alt="Run in Swagger">
</a>

<br>

<a href="https://god.gw.postman.com/run-collection/35060167-e2f8f2e0-807f-4d5e-a153-23231ef25316?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D35060167-e2f8f2e0-807f-4d5e-a153-23231ef25316%26entityType%3Dcollection%26workspaceId%3D19492cc5-4dbb-46fc-9845-c45db4333e76" style="display: inline-block; margin-bottom: 10px;">
  <img src="https://run.pstmn.io/button.svg" alt="Run in Postman">
</a>

### Indexer REST Endpoints

The `algorand-indexer` daemon provides its API from the _host:port_ defined by the _--server_ flag specified at start up. The default port is 8980.

[Indexer REST Endpoints OAS3 spec file](https://www.github.com/algorand/indexer/blob/develop/api/indexer.oas3.yml?raw=true)(.yml)

[Indexer REST Endpoints OAS2 spec file](https://github.com/algorand/indexer/blob/develop/api/indexer.oas2.json?raw=true)

<a href="https://algorand-indexer.apidocumentation.com/reference" style="display: inline-block;">
  <img src="https://img.shields.io/badge/Run%20in-Scalar-4A90E2?style=flat&logoColor=4A90E2&color=f0f0f0" alt="Run in Scalar">
</a>

<br>

<a href="https://nodely.io/swagger/index.html?url=/swagger/api/4160/indexer.oas3.yml" style="display: inline-block;">
  <img src="https://img.shields.io/badge/Run%20in-Swagger-85EA2D?logo=swagger&logoColor=black" alt="Run in Swagger">
</a>

<br>

<a href="https://god.gw.postman.com/run-collection/35060167-51480ac3-c621-4c2d-a5e1-5c763fa976a3?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D35060167-51480ac3-c621-4c2d-a5e1-5c763fa976a3%26entityType%3Dcollection%26workspaceId%3D19492cc5-4dbb-46fc-9845-c45db4333e76" style="display: inline-block; margin-bottom: 10px;">
  <img src="https://run.pstmn.io/button.svg" alt="Run in Postman">
</a>

### KMD REST Endpoints

:::note
All examples in this section assume the data directory is ~/node/data
:::

This API is described using the [Open API Specification version 2 (OAS 2)](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md). The `kmd` daemon serves it's API from the _kmd.net_ files found in the _~/node/data_ and _~/node/data/kmd-{version}_ directories. The `kmd` daemons provide their API specifications in a [swagger json](https://github.com/algorand/go-algorand/blob/master/daemon/kmd/api/swagger.json) format available from this endpoint:

Algorand Key Management Daemon (`kmd`)

```shell showLineNumbers=false frame=none
curl http://$(cat ~/node/data/kmd-v0.5/kmd.net)/swagger.json
```

<a href="https://god.gw.postman.com/run-collection/35060167-0823a4c5-1a2f-499a-9e24-6b6639a057ef?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D35060167-0823a4c5-1a2f-499a-9e24-6b6639a057ef%26entityType%3Dcollection%26workspaceId%3D19492cc5-4dbb-46fc-9845-c45db4333e76" style="display: inline-block;">
  <img src="https://run.pstmn.io/button.svg" alt="Run in Postman">
</a>

:::note
The `kmd` daemon is only automatically started when using the `goal` command line tool with specific commands requiring key management access. If you require API access to `kmd` you will need to manually start the process with `goal` using the command: `goal kmd start -d <data-dir>`. If the kmd is started with the above command it never times out and stops running unless a timeout flag is specified with the -t flag. The default of 0 is no timeout.
:::

## Security Token

Most REST calls will also require an API token header to authenticate with the API server. For both `algod` and `kmd` the token is automatically generated by the daemon at startup and stored in a file. `algod` places _algod.token_ in the _~/node/data_ directory. `kmd` places _kmd.token_ the _~/node/data/kmd-{version}_ directory. Security tokens can be regenerated for both using the `goal node generatetoken` command.

| Daemon    | Header Identifier   | Header Value Defined Via                    |
| --------- | ------------------- | ------------------------------------------- |
| `algod`   | X-Algo-API-Token    | file: ~/node/data/algod.token               |
| `kmd`     | X-KMD-API-Token     | file: ~/node/data/kmd-\{version\}/kmd.token |
| `indexer` | X-Indexer-API-Token |                                             |

Each SDK provides a method for setting these headers. Most REST tools provide a method for setting additional headers. To set the header with a `curl` command use the `-H` parameter. For example, to make a call to retrieve a specific block, use the following curl command:

```shell showLineNumbers=false frame=none
curl http://$(cat ~/node/data/algod.net)/v2/blocks/16486179 -H "X-Algo-API-Token: $(cat ~/node/data/algod.token)"
```

In the above example, the block information will be displayed if the block exists on the local node. If the node is a non-Archival node, blocks older than 1000 blocks will not be available.
