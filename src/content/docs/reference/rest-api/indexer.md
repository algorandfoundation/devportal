---
title: Indexer API
---

<!-- Generator: Widdershins v4.0.1 -->



> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Algorand ledger analytics API.

Base URLs:

* <a href="https://example.com/">https://example.com/</a>

Web: <a href="https://www.algorand.com/get-in-touch/contact">Algorand</a> 


## common


### makeHealthCheck

<a id="opIdmakeHealthCheck"></a>

> Code samples

```shell

curl -X GET https://example.com/health \
  -H 'Accept: application/json'

```

```http
GET https://example.com/health HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/health',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/health',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/health', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/health', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/health");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/health", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /health`

*Returns 200 if healthy.*

> Example responses

> 200 Response

```json
{
  "data": {},
  "db-available": true,
  "errors": [
    "string"
  ],
  "is-migrating": true,
  "message": "string",
  "round": 0,
  "version": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|[HealthCheck](#schemahealthcheck)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="success">
This operation does not require authentication
</aside>


## lookup


### lookupAccountAppLocalStates

<a id="opIdlookupAccountAppLocalStates"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/accounts/{account-id}/apps-local-state \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/accounts/{account-id}/apps-local-state HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/accounts/{account-id}/apps-local-state',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/accounts/{account-id}/apps-local-state',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/accounts/{account-id}/apps-local-state', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/accounts/{account-id}/apps-local-state', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/accounts/{account-id}/apps-local-state");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/accounts/{account-id}/apps-local-state", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/accounts/{account-id}/apps-local-state`

Lookup an account's asset holdings, optionally for a specific ID.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account-id|path|string|true|account string|
|application-id|query|integer|false|Application ID|
|include-all|query|boolean|false|Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|

> Example responses

> 200 Response

```json
{
  "apps-local-states": [
    {
      "closed-out-at-round": 0,
      "deleted": true,
      "id": 0,
      "key-value": [
        {
          "key": "string",
          "value": {
            "bytes": "string",
            "type": 0,
            "uint": 0
          }
        }
      ],
      "opted-in-at-round": 0,
      "schema": {
        "num-byte-slice": 0,
        "num-uint": 0
      }
    }
  ],
  "current-round": 0,
  "next-token": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» apps-local-states|[[ApplicationLocalState](#schemaapplicationlocalstate)]|true|none|[Stores local state associated with an application.]|
|»» closed-out-at-round|integer|false|none|Round when account closed out of the application.|
|»» deleted|boolean|false|none|Whether or not the application local state is currently deleted from its account.|
|»» id|integer|true|none|The application which this local state is for.|
|»» key-value|[[TealKeyValue](#schematealkeyvalue)]|false|none|Represents a key-value store for use in an application.|
|»»» key|string|true|none|none|
|»»» value|[TealValue](#schematealvalue)|true|none|Represents a TEAL value.|
|»»»» bytes|string|true|none|bytes value.|
|»»»» type|integer|true|none|type of the value. Value `1` refers to **bytes**, value `2` refers to **uint**|
|»»»» uint|integer|true|none|uint value.|
|»» opted-in-at-round|integer|false|none|Round when the account opted into the application.|
|»» schema|[ApplicationStateSchema](#schemaapplicationstateschema)|true|none|Specifies maximums on the number of each type that may be stored.|
|»»» num-byte-slice|integer|true|none|number of byte slices.|
|»»» num-uint|integer|true|none|number of uints.|
|» current-round|integer|true|none|Round at which the results were computed.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### lookupAccountAssets

<a id="opIdlookupAccountAssets"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/accounts/{account-id}/assets \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/accounts/{account-id}/assets HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/accounts/{account-id}/assets',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/accounts/{account-id}/assets',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/accounts/{account-id}/assets', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/accounts/{account-id}/assets', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/accounts/{account-id}/assets");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/accounts/{account-id}/assets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/accounts/{account-id}/assets`

Lookup an account's asset holdings, optionally for a specific ID.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account-id|path|string|true|account string|
|asset-id|query|integer|false|Asset ID|
|include-all|query|boolean|false|Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "amount": 0,
      "asset-id": 0,
      "deleted": true,
      "is-frozen": true,
      "opted-in-at-round": 0,
      "opted-out-at-round": 0
    }
  ],
  "current-round": 0,
  "next-token": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» assets|[[AssetHolding](#schemaassetholding)]|true|none|[Describes an asset held by an account.<br><br>Definition:<br>data/basics/userBalance.go : AssetHolding]|
|»» amount|integer|true|none|number of units held.|
|»» asset-id|integer|true|none|Asset ID of the holding.|
|»» deleted|boolean|false|none|Whether or not the asset holding is currently deleted from its account.|
|»» is-frozen|boolean|true|none|whether or not the holding is frozen.|
|»» opted-in-at-round|integer|false|none|Round during which the account opted into this asset holding.|
|»» opted-out-at-round|integer|false|none|Round during which the account opted out of this asset holding.|
|» current-round|integer|true|none|Round at which the results were computed.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### lookupAccountByID

<a id="opIdlookupAccountByID"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/accounts/{account-id} \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/accounts/{account-id} HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/accounts/{account-id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/accounts/{account-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/accounts/{account-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/accounts/{account-id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/accounts/{account-id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/accounts/{account-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/accounts/{account-id}`

Lookup account information.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account-id|path|string|true|account string|
|round|query|integer|false|Include results for the specified round.|
|include-all|query|boolean|false|Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.|
|exclude|query|array[string]|false|Exclude additional items such as asset holdings, application local data stored for this account, asset parameters created by this account, and application parameters created by this account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exclude|all|
|exclude|assets|
|exclude|created-assets|
|exclude|apps-local-state|
|exclude|created-apps|
|exclude|none|

> Example responses

> 200 Response

```json
{
  "account": {
    "address": "string",
    "amount": 0,
    "amount-without-pending-rewards": 0,
    "apps-local-state": [
      {
        "closed-out-at-round": 0,
        "deleted": true,
        "id": 0,
        "key-value": [
          {
            "key": "string",
            "value": {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          }
        ],
        "opted-in-at-round": 0,
        "schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        }
      }
    ],
    "apps-total-extra-pages": 0,
    "apps-total-schema": {
      "num-byte-slice": 0,
      "num-uint": 0
    },
    "assets": [
      {
        "amount": 0,
        "asset-id": 0,
        "deleted": true,
        "is-frozen": true,
        "opted-in-at-round": 0,
        "opted-out-at-round": 0
      }
    ],
    "auth-addr": "string",
    "closed-at-round": 0,
    "created-apps": [
      {
        "created-at-round": 0,
        "deleted": true,
        "deleted-at-round": 0,
        "id": 0,
        "params": {
          "approval-program": "string",
          "clear-state-program": "string",
          "creator": "string",
          "extra-program-pages": 0,
          "global-state": [
            {
              "key": "string",
              "value": {
                "bytes": "string",
                "type": 0,
                "uint": 0
              }
            }
          ],
          "global-state-schema": {
            "num-byte-slice": 0,
            "num-uint": 0
          },
          "local-state-schema": {
            "num-byte-slice": 0,
            "num-uint": 0
          },
          "version": 0
        }
      }
    ],
    "created-assets": [
      {
        "created-at-round": 0,
        "deleted": true,
        "destroyed-at-round": 0,
        "index": 0,
        "params": {
          "clawback": "string",
          "creator": "string",
          "decimals": 19,
          "default-frozen": true,
          "freeze": "string",
          "manager": "string",
          "metadata-hash": "string",
          "name": "string",
          "name-b64": "string",
          "reserve": "string",
          "total": 0,
          "unit-name": "string",
          "unit-name-b64": "string",
          "url": "string",
          "url-b64": "string"
        }
      }
    ],
    "created-at-round": 0,
    "deleted": true,
    "incentive-eligible": true,
    "last-heartbeat": 0,
    "last-proposed": 0,
    "min-balance": 0,
    "participation": {
      "selection-participation-key": "string",
      "state-proof-key": "string",
      "vote-first-valid": 0,
      "vote-key-dilution": 0,
      "vote-last-valid": 0,
      "vote-participation-key": "string"
    },
    "pending-rewards": 0,
    "reward-base": 0,
    "rewards": 0,
    "round": 0,
    "sig-type": "sig",
    "status": "string",
    "total-apps-opted-in": 0,
    "total-assets-opted-in": 0,
    "total-box-bytes": 0,
    "total-boxes": 0,
    "total-created-apps": 0,
    "total-created-assets": 0
  },
  "current-round": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» account|[Account](#schemaaccount)|true|none|Account information at a given round.<br><br>Definition:<br>data/basics/userBalance.go : AccountData|
|»» address|string|true|none|the account public key|
|»» amount|integer|true|none|total number of MicroAlgos in the account|
|»» amount-without-pending-rewards|integer|true|none|specifies the amount of MicroAlgos in the account, without the pending rewards.|
|»» apps-local-state|[[ApplicationLocalState](#schemaapplicationlocalstate)]|false|none|application local data stored in this account.<br><br>Note the raw object uses `map[int] -> AppLocalState` for this type.|
|»»» closed-out-at-round|integer|false|none|Round when account closed out of the application.|
|»»» deleted|boolean|false|none|Whether or not the application local state is currently deleted from its account.|
|»»» id|integer|true|none|The application which this local state is for.|
|»»» key-value|[[TealKeyValue](#schematealkeyvalue)]|false|none|Represents a key-value store for use in an application.|
|»»»» key|string|true|none|none|
|»»»» value|[TealValue](#schematealvalue)|true|none|Represents a TEAL value.|
|»»»»» bytes|string|true|none|bytes value.|
|»»»»» type|integer|true|none|type of the value. Value `1` refers to **bytes**, value `2` refers to **uint**|
|»»»»» uint|integer|true|none|uint value.|
|»»» opted-in-at-round|integer|false|none|Round when the account opted into the application.|
|»»» schema|[ApplicationStateSchema](#schemaapplicationstateschema)|true|none|Specifies maximums on the number of each type that may be stored.|
|»»»» num-byte-slice|integer|true|none|number of byte slices.|
|»»»» num-uint|integer|true|none|number of uints.|
|»» apps-total-extra-pages|integer|false|none|the sum of all extra application program pages for this account.|
|»» apps-total-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»» assets|[[AssetHolding](#schemaassetholding)]|false|none|assets held by this account.<br><br>Note the raw object uses `map[int] -> AssetHolding` for this type.|
|»»» amount|integer|true|none|number of units held.|
|»»» asset-id|integer|true|none|Asset ID of the holding.|
|»»» deleted|boolean|false|none|Whether or not the asset holding is currently deleted from its account.|
|»»» is-frozen|boolean|true|none|whether or not the holding is frozen.|
|»»» opted-in-at-round|integer|false|none|Round during which the account opted into this asset holding.|
|»»» opted-out-at-round|integer|false|none|Round during which the account opted out of this asset holding.|
|»» auth-addr|string|false|none|The address against which signing should be checked. If empty, the address of the current account is used. This field can be updated in any transaction by setting the RekeyTo field.|
|»» closed-at-round|integer|false|none|Round during which this account was most recently closed.|
|»» created-apps|[[Application](#schemaapplication)]|false|none|parameters of applications created by this account including app global data.<br><br>Note: the raw account uses `map[int] -> AppParams` for this type.|
|»»» created-at-round|integer|false|none|Round when this application was created.|
|»»» deleted|boolean|false|none|Whether or not this application is currently deleted.|
|»»» deleted-at-round|integer|false|none|Round when this application was deleted.|
|»»» id|integer|true|none|application index.|
|»»» params|[ApplicationParams](#schemaapplicationparams)|true|none|Stores the global information associated with an application.|
|»»»» approval-program|string(byte)|true|none|approval program.|
|»»»» clear-state-program|string(byte)|true|none|clear state program.|
|»»»» creator|string|false|none|The address that created this application. This is the address where the parameters and global state for this application can be found.|
|»»»» extra-program-pages|integer|false|none|the number of extra program pages available to this app.|
|»»»» global-state|[[TealKeyValue](#schematealkeyvalue)]|false|none|Represents a key-value store for use in an application.|
|»»»» global-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»»»» local-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»»»» version|integer|false|none|the number of updates to the application programs|
|»» created-assets|[[Asset](#schemaasset)]|false|none|parameters of assets created by this account.<br><br>Note: the raw account uses `map[int] -> Asset` for this type.|
|»»» created-at-round|integer|false|none|Round during which this asset was created.|
|»»» deleted|boolean|false|none|Whether or not this asset is currently deleted.|
|»»» destroyed-at-round|integer|false|none|Round during which this asset was destroyed.|
|»»» index|integer|true|none|unique asset identifier|
|»»» params|[AssetParams](#schemaassetparams)|true|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|
|»»»» clawback|string|false|none|Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|»»»» creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|»»»» decimals|integer|true|none|The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|»»»» default-frozen|boolean|false|none|Whether holdings of this asset are frozen by default.|
|»»»» freeze|string|false|none|Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|»»»» manager|string|false|none|Address of account used to manage the keys of this asset and to destroy it.|
|»»»» metadata-hash|string(byte)|false|none|A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|»»»» name|string|false|none|Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|»»»» name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|»»»» reserve|string|false|none|Address of account holding reserve (non-minted) units of this asset.|
|»»»» total|integer|true|none|The total number of units of this asset.|
|»»»» unit-name|string|false|none|Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|»»»» unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|»»»» url|string|false|none|URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|»»»» url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|
|»» created-at-round|integer|false|none|Round during which this account first appeared in a transaction.|
|»» deleted|boolean|false|none|Whether or not this account is currently closed.|
|»» incentive-eligible|boolean|false|none|can the account receive block incentives if its balance is in range at proposal time.|
|»» last-heartbeat|integer|false|none|The round in which this account last went online, or explicitly renewed their online status.|
|»» last-proposed|integer|false|none|The round in which this account last proposed the block.|
|»» min-balance|integer|true|none|MicroAlgo balance required by the account.<br><br>The requirement grows based on asset and application usage.|
|»» participation|[AccountParticipation](#schemaaccountparticipation)|false|none|AccountParticipation describes the parameters used by this account in consensus protocol.|
|»»» selection-participation-key|string(byte)|true|none|Selection public key (if any) currently registered for this round.|
|»»» state-proof-key|string(byte)|false|none|Root of the state proof key (if any)|
|»»» vote-first-valid|integer|true|none|First round for which this participation is valid.|
|»»» vote-key-dilution|integer|true|none|Number of subkeys in each batch of participation keys.|
|»»» vote-last-valid|integer|true|none|Last round for which this participation is valid.|
|»»» vote-participation-key|string(byte)|true|none|root participation public key (if any) currently registered for this round.|
|»» pending-rewards|integer|true|none|amount of MicroAlgos of pending rewards in this account.|
|»» reward-base|integer|false|none|used as part of the rewards computation. Only applicable to accounts which are participating.|
|»» rewards|integer|true|none|total rewards of MicroAlgos the account has received, including pending rewards.|
|»» round|integer|true|none|The round for which this information is relevant.|
|»» sig-type|string|false|none|the type of signature used by this account, must be one of:<br>* sig<br>* msig<br>* lsig<br>* or null if unknown|
|»» status|string|true|none|voting status of the account's MicroAlgos<br>* Offline - indicates that the associated account is delegated.<br>*  Online  - indicates that the associated account used as part of the delegation pool.<br>*   NotParticipating - indicates that the associated account is neither a delegator nor a delegate.|
|»» total-apps-opted-in|integer|true|none|The count of all applications that have been opted in, equivalent to the count of application local data (AppLocalState objects) stored in this account.|
|»» total-assets-opted-in|integer|true|none|The count of all assets that have been opted in, equivalent to the count of AssetHolding objects held by this account.|
|»» total-box-bytes|integer|true|none|For app-accounts only. The total number of bytes allocated for the keys and values of boxes which belong to the associated application.|
|»» total-boxes|integer|true|none|For app-accounts only. The total number of boxes which belong to the associated application.|
|»» total-created-apps|integer|true|none|The count of all apps (AppParams objects) created by this account.|
|»» total-created-assets|integer|true|none|The count of all assets (AssetParams objects) created by this account.|
|» current-round|integer|true|none|Round at which the results were computed.|

#### Enumerated Values

|Property|Value|
|---|---|
|sig-type|sig|
|sig-type|msig|
|sig-type|lsig|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### lookupAccountCreatedApplications

<a id="opIdlookupAccountCreatedApplications"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/accounts/{account-id}/created-applications \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/accounts/{account-id}/created-applications HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/accounts/{account-id}/created-applications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/accounts/{account-id}/created-applications',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/accounts/{account-id}/created-applications', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/accounts/{account-id}/created-applications', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/accounts/{account-id}/created-applications");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/accounts/{account-id}/created-applications", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/accounts/{account-id}/created-applications`

Lookup an account's created application parameters, optionally for a specific ID.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account-id|path|string|true|account string|
|application-id|query|integer|false|Application ID|
|include-all|query|boolean|false|Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|

> Example responses

> 200 Response

```json
{
  "applications": [
    {
      "created-at-round": 0,
      "deleted": true,
      "deleted-at-round": 0,
      "id": 0,
      "params": {
        "approval-program": "string",
        "clear-state-program": "string",
        "creator": "string",
        "extra-program-pages": 0,
        "global-state": [
          {
            "key": "string",
            "value": {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          }
        ],
        "global-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "local-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "version": 0
      }
    }
  ],
  "current-round": 0,
  "next-token": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» applications|[[Application](#schemaapplication)]|true|none|[Application index and its parameters]|
|»» created-at-round|integer|false|none|Round when this application was created.|
|»» deleted|boolean|false|none|Whether or not this application is currently deleted.|
|»» deleted-at-round|integer|false|none|Round when this application was deleted.|
|»» id|integer|true|none|application index.|
|»» params|[ApplicationParams](#schemaapplicationparams)|true|none|Stores the global information associated with an application.|
|»»» approval-program|string(byte)|true|none|approval program.|
|»»» clear-state-program|string(byte)|true|none|clear state program.|
|»»» creator|string|false|none|The address that created this application. This is the address where the parameters and global state for this application can be found.|
|»»» extra-program-pages|integer|false|none|the number of extra program pages available to this app.|
|»»» global-state|[[TealKeyValue](#schematealkeyvalue)]|false|none|Represents a key-value store for use in an application.|
|»»»» key|string|true|none|none|
|»»»» value|[TealValue](#schematealvalue)|true|none|Represents a TEAL value.|
|»»»»» bytes|string|true|none|bytes value.|
|»»»»» type|integer|true|none|type of the value. Value `1` refers to **bytes**, value `2` refers to **uint**|
|»»»»» uint|integer|true|none|uint value.|
|»»» global-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»»»» num-byte-slice|integer|true|none|number of byte slices.|
|»»»» num-uint|integer|true|none|number of uints.|
|»»» local-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»»» version|integer|false|none|the number of updates to the application programs|
|» current-round|integer|true|none|Round at which the results were computed.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### lookupAccountCreatedAssets

<a id="opIdlookupAccountCreatedAssets"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/accounts/{account-id}/created-assets \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/accounts/{account-id}/created-assets HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/accounts/{account-id}/created-assets',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/accounts/{account-id}/created-assets',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/accounts/{account-id}/created-assets', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/accounts/{account-id}/created-assets', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/accounts/{account-id}/created-assets");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/accounts/{account-id}/created-assets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/accounts/{account-id}/created-assets`

Lookup an account's created asset parameters, optionally for a specific ID.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account-id|path|string|true|account string|
|asset-id|query|integer|false|Asset ID|
|include-all|query|boolean|false|Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "created-at-round": 0,
      "deleted": true,
      "destroyed-at-round": 0,
      "index": 0,
      "params": {
        "clawback": "string",
        "creator": "string",
        "decimals": 19,
        "default-frozen": true,
        "freeze": "string",
        "manager": "string",
        "metadata-hash": "string",
        "name": "string",
        "name-b64": "string",
        "reserve": "string",
        "total": 0,
        "unit-name": "string",
        "unit-name-b64": "string",
        "url": "string",
        "url-b64": "string"
      }
    }
  ],
  "current-round": 0,
  "next-token": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» assets|[[Asset](#schemaasset)]|true|none|[Specifies both the unique identifier and the parameters for an asset]|
|»» created-at-round|integer|false|none|Round during which this asset was created.|
|»» deleted|boolean|false|none|Whether or not this asset is currently deleted.|
|»» destroyed-at-round|integer|false|none|Round during which this asset was destroyed.|
|»» index|integer|true|none|unique asset identifier|
|»» params|[AssetParams](#schemaassetparams)|true|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|
|»»» clawback|string|false|none|Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|»»» creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|»»» decimals|integer|true|none|The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|»»» default-frozen|boolean|false|none|Whether holdings of this asset are frozen by default.|
|»»» freeze|string|false|none|Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|»»» manager|string|false|none|Address of account used to manage the keys of this asset and to destroy it.|
|»»» metadata-hash|string(byte)|false|none|A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|»»» name|string|false|none|Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|»»» name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|»»» reserve|string|false|none|Address of account holding reserve (non-minted) units of this asset.|
|»»» total|integer|true|none|The total number of units of this asset.|
|»»» unit-name|string|false|none|Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|»»» unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|»»» url|string|false|none|URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|»»» url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|
|» current-round|integer|true|none|Round at which the results were computed.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### lookupAccountTransactions

<a id="opIdlookupAccountTransactions"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/accounts/{account-id}/transactions \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/accounts/{account-id}/transactions HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/accounts/{account-id}/transactions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/accounts/{account-id}/transactions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/accounts/{account-id}/transactions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/accounts/{account-id}/transactions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/accounts/{account-id}/transactions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/accounts/{account-id}/transactions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/accounts/{account-id}/transactions`

Lookup account transactions. Transactions are returned newest to oldest.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|
|note-prefix|query|string|false|Specifies a prefix which must be contained in the note field.|
|tx-type|query|string|false|none|
|sig-type|query|string|false|SigType filters just results using the specified type of signature:|
|txid|query|string|false|Lookup the specific transaction by ID.|
|round|query|integer|false|Include results for the specified round.|
|min-round|query|integer|false|Include results at or after the specified min-round.|
|max-round|query|integer|false|Include results at or before the specified max-round.|
|asset-id|query|integer|false|Asset ID|
|before-time|query|string(date-time)|false|Include results before the given time. Must be an RFC 3339 formatted string.|
|after-time|query|string(date-time)|false|Include results after the given time. Must be an RFC 3339 formatted string.|
|currency-greater-than|query|integer|false|Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.|
|currency-less-than|query|integer|false|Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.|
|account-id|path|string|true|account string|
|rekey-to|query|boolean|false|Include results which include the rekey-to field.|

#### Detailed descriptions

**sig-type**: SigType filters just results using the specified type of signature:
* sig - Standard
* msig - MultiSig
* lsig - LogicSig

#### Enumerated Values

|Parameter|Value|
|---|---|
|tx-type|pay|
|tx-type|keyreg|
|tx-type|acfg|
|tx-type|axfer|
|tx-type|afrz|
|tx-type|appl|
|tx-type|stpf|
|tx-type|hb|
|sig-type|sig|
|sig-type|msig|
|sig-type|lsig|

> Example responses

> 200 Response

```json
{
  "current-round": 0,
  "next-token": "string",
  "transactions": [
    {
      "application-transaction": {
        "access": [
          {
            "address": "string",
            "application-id": 0,
            "asset-id": 0,
            "box": {
              "app": 0,
              "name": "string"
            },
            "holding": {
              "address": "string",
              "asset": 0
            },
            "local": {
              "address": "string",
              "app": 0
            }
          }
        ],
        "accounts": [
          "string"
        ],
        "application-args": [
          "string"
        ],
        "application-id": 0,
        "approval-program": "string",
        "box-references": [
          {
            "app": 0,
            "name": "string"
          }
        ],
        "clear-state-program": "string",
        "extra-program-pages": 0,
        "foreign-apps": [
          0
        ],
        "foreign-assets": [
          0
        ],
        "global-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "local-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "on-completion": "noop",
        "reject-version": 0
      },
      "asset-config-transaction": {
        "asset-id": 0,
        "params": {
          "clawback": "string",
          "creator": "string",
          "decimals": 19,
          "default-frozen": true,
          "freeze": "string",
          "manager": "string",
          "metadata-hash": "string",
          "name": "string",
          "name-b64": "string",
          "reserve": "string",
          "total": 0,
          "unit-name": "string",
          "unit-name-b64": "string",
          "url": "string",
          "url-b64": "string"
        }
      },
      "asset-freeze-transaction": {
        "address": "string",
        "asset-id": 0,
        "new-freeze-status": true
      },
      "asset-transfer-transaction": {
        "amount": 0,
        "asset-id": 0,
        "close-amount": 0,
        "close-to": "string",
        "receiver": "string",
        "sender": "string"
      },
      "auth-addr": "string",
      "close-rewards": 0,
      "closing-amount": 0,
      "confirmed-round": 0,
      "created-application-index": 0,
      "created-asset-index": 0,
      "fee": 0,
      "first-valid": 0,
      "genesis-hash": "string",
      "genesis-id": "string",
      "global-state-delta": [
        {
          "key": "string",
          "value": {
            "action": 0,
            "bytes": "string",
            "uint": 0
          }
        }
      ],
      "group": "string",
      "heartbeat-transaction": {
        "hb-address": "string",
        "hb-key-dilution": 0,
        "hb-proof": {
          "hb-pk": "string",
          "hb-pk1sig": "string",
          "hb-pk2": "string",
          "hb-pk2sig": "string",
          "hb-sig": "string"
        },
        "hb-seed": "string",
        "hb-vote-id": "string"
      },
      "id": "string",
      "inner-txns": [
        {}
      ],
      "intra-round-offset": 0,
      "keyreg-transaction": {
        "non-participation": true,
        "selection-participation-key": "string",
        "state-proof-key": "string",
        "vote-first-valid": 0,
        "vote-key-dilution": 0,
        "vote-last-valid": 0,
        "vote-participation-key": "string"
      },
      "last-valid": 0,
      "lease": "string",
      "local-state-delta": [
        {
          "address": "string",
          "delta": [
            {
              "key": "string",
              "value": {
                "action": 0,
                "bytes": "string",
                "uint": 0
              }
            }
          ]
        }
      ],
      "logs": [
        "string"
      ],
      "note": "string",
      "payment-transaction": {
        "amount": 0,
        "close-amount": 0,
        "close-remainder-to": "string",
        "receiver": "string"
      },
      "receiver-rewards": 0,
      "rekey-to": "string",
      "round-time": 0,
      "sender": "string",
      "sender-rewards": 0,
      "signature": {
        "logicsig": {
          "args": [
            "string"
          ],
          "logic": "string",
          "logic-multisig-signature": {
            "subsignature": [
              {
                "public-key": "string",
                "signature": "string"
              }
            ],
            "threshold": 0,
            "version": 0
          },
          "multisig-signature": {
            "subsignature": [
              {
                "public-key": "string",
                "signature": "string"
              }
            ],
            "threshold": 0,
            "version": 0
          },
          "signature": "string"
        },
        "multisig": {
          "subsignature": [
            {
              "public-key": "string",
              "signature": "string"
            }
          ],
          "threshold": 0,
          "version": 0
        },
        "sig": "string"
      },
      "state-proof-transaction": {
        "message": {
          "block-headers-commitment": "string",
          "first-attested-round": 0,
          "latest-attested-round": 0,
          "ln-proven-weight": 0,
          "voters-commitment": "string"
        },
        "state-proof": {
          "part-proofs": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "positions-to-reveal": [
            0
          ],
          "reveals": [
            {
              "participant": {
                "verifier": {
                  "commitment": "string",
                  "key-lifetime": 0
                },
                "weight": 0
              },
              "position": 0,
              "sig-slot": {
                "lower-sig-weight": 0,
                "signature": {
                  "falcon-signature": "string",
                  "merkle-array-index": 0,
                  "proof": {
                    "hash-factory": {},
                    "path": [],
                    "tree-depth": 0
                  },
                  "verifying-key": "string"
                }
              }
            }
          ],
          "salt-version": 0,
          "sig-commit": "string",
          "sig-proofs": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "signed-weight": 0
        },
        "state-proof-type": 0
      },
      "tx-type": "pay"
    }
  ]
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» current-round|integer|true|none|Round at which the results were computed.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|
|» transactions|[[Transaction](#schematransaction)]|true|none|[Contains all fields common to all transactions and serves as an envelope to all transactions type. Represents both regular and inner transactions.<br><br>Definition:<br>data/transactions/signedtxn.go : SignedTxn<br>data/transactions/transaction.go : Transaction<br>]|
|»» application-transaction|[TransactionApplication](#schematransactionapplication)|false|none|Fields for application transactions.<br><br>Definition:<br>data/transactions/application.go : ApplicationCallTxnFields|
|»»» access|[[ResourceRef](#schemaresourceref)]|false|none|\[al\] Access unifies `accounts`, `foreign-apps`, `foreign-assets`, and `box-references` under a single list. If access is non-empty, these lists must be empty. If access is empty, those lists may be non-empty.|
|»»»» address|string|false|none|\[d\] Account whose balance record is accessible by the executing ApprovalProgram or ClearStateProgram.|
|»»»» application-id|integer|false|none|\[p\] Application id whose GlobalState may be read by the executing<br> ApprovalProgram or ClearStateProgram.|
|»»»» asset-id|integer|false|none|\[s\] Asset whose AssetParams may be read by the executing<br> ApprovalProgram or ClearStateProgram.|
|»»»» box|[BoxReference](#schemaboxreference)|false|none|BoxReference names a box by its name and the application ID it belongs to.|
|»»»»» app|integer|true|none|Application ID to which the box belongs, or zero if referring to the called application.|
|»»»»» name|string(byte)|true|none|Base64 encoded box name|
|»»»» holding|[HoldingRef](#schemaholdingref)|false|none|HoldingRef names a holding by referring to an Address and Asset it belongs to.|
|»»»»» address|string|true|none|\[d\] Address in access list, or the sender of the transaction.|
|»»»»» asset|integer|true|none|\[s\] Asset ID for asset in access list.|
|»»»» local|[LocalsRef](#schemalocalsref)|false|none|LocalsRef names a local state by referring to an Address and App it belongs to.|
|»»»»» address|string|true|none|\[d\] Address in access list, or the sender of the transaction.|
|»»»»» app|integer|true|none|\[p\] Application ID for app in access list, or zero if referring to the called application.|
|»»» accounts|[string]|false|none|\[apat\] List of accounts in addition to the sender that may be accessed from the application's approval-program and clear-state-program.|
|»»» application-args|[string]|false|none|\[apaa\] transaction specific arguments accessed from the application's approval-program and clear-state-program.|
|»»» application-id|integer|true|none|\[apid\] ID of the application being configured or empty if creating.|
|»»» approval-program|string(byte)|false|none|\[apap\] Logic executed for every application transaction, except when on-completion is set to "clear". It can read and write global state for the application, as well as account-specific local state. Approval programs may reject the transaction.|
|»»» box-references|[[BoxReference](#schemaboxreference)]|false|none|\[apbx\] the boxes that can be accessed by this transaction (and others in the same group).|
|»»» clear-state-program|string(byte)|false|none|\[apsu\] Logic executed for application transactions with on-completion set to "clear". It can read and write global state for the application, as well as account-specific local state. Clear state programs cannot reject the transaction.|
|»»» extra-program-pages|integer|false|none|\[epp\] specifies the additional app program len requested in pages.|
|»»» foreign-apps|[integer]|false|none|\[apfa\] Lists the applications in addition to the application-id whose global states may be accessed by this application's approval-program and clear-state-program. The access is read-only.|
|»»» foreign-assets|[integer]|false|none|\[apas\] lists the assets whose parameters may be accessed by this application's ApprovalProgram and ClearStateProgram. The access is read-only.|
|»»» global-state-schema|[StateSchema](#schemastateschema)|false|none|Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.|
|»»»» num-byte-slice|integer|true|none|Maximum number of TEAL byte slices that may be stored in the key/value store.|
|»»»» num-uint|integer|true|none|Maximum number of TEAL uints that may be stored in the key/value store.|
|»»» local-state-schema|[StateSchema](#schemastateschema)|false|none|Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.|
|»»» on-completion|[OnCompletion](#schemaoncompletion)|true|none|\[apan\] defines the what additional actions occur with the transaction.<br><br>Valid types:<br>* noop<br>* optin<br>* closeout<br>* clear<br>* update<br>* update<br>* delete|
|»»» reject-version|integer|false|none|\[aprv\] the lowest application version for which this transaction should immediately fail. 0 indicates that no version check should be performed.|
|»» asset-config-transaction|[TransactionAssetConfig](#schematransactionassetconfig)|false|none|Fields for asset allocation, re-configuration, and destruction.<br><br><br>A zero value for asset-id indicates asset creation.<br>A zero value for the params indicates asset destruction.<br><br>Definition:<br>data/transactions/asset.go : AssetConfigTxnFields|
|»»» asset-id|integer|false|none|\[xaid\] ID of the asset being configured or empty if creating.|
|»»» params|[AssetParams](#schemaassetparams)|false|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|
|»»»» clawback|string|false|none|Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|»»»» creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|»»»» decimals|integer|true|none|The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|»»»» default-frozen|boolean|false|none|Whether holdings of this asset are frozen by default.|
|»»»» freeze|string|false|none|Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|»»»» manager|string|false|none|Address of account used to manage the keys of this asset and to destroy it.|
|»»»» metadata-hash|string(byte)|false|none|A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|»»»» name|string|false|none|Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|»»»» name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|»»»» reserve|string|false|none|Address of account holding reserve (non-minted) units of this asset.|
|»»»» total|integer|true|none|The total number of units of this asset.|
|»»»» unit-name|string|false|none|Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|»»»» unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|»»»» url|string|false|none|URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|»»»» url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|
|»» asset-freeze-transaction|[TransactionAssetFreeze](#schematransactionassetfreeze)|false|none|Fields for an asset freeze transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetFreezeTxnFields|
|»»» address|string|true|none|\[fadd\] Address of the account whose asset is being frozen or thawed.|
|»»» asset-id|integer|true|none|\[faid\] ID of the asset being frozen or thawed.|
|»»» new-freeze-status|boolean|true|none|\[afrz\] The new freeze status.|
|»» asset-transfer-transaction|[TransactionAssetTransfer](#schematransactionassettransfer)|false|none|Fields for an asset transfer transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetTransferTxnFields|
|»»» amount|integer|true|none|\[aamt\] Amount of asset to transfer. A zero amount transferred to self allocates that asset in the account's Assets map.|
|»»» asset-id|integer|true|none|\[xaid\] ID of the asset being transferred.|
|»»» close-amount|integer|false|none|Number of assets transferred to the close-to account as part of the transaction.|
|»»» close-to|string|false|none|\[aclose\] Indicates that the asset should be removed from the account's Assets map, and specifies where the remaining asset holdings should be transferred.  It's always valid to transfer remaining asset holdings to the creator account.|
|»»» receiver|string|true|none|\[arcv\] Recipient address of the transfer.|
|»»» sender|string|false|none|\[asnd\] The effective sender during a clawback transactions. If this is not a zero value, the real transaction sender must be the Clawback address from the AssetParams.|
|»» auth-addr|string|false|none|\[sgnr\] this is included with signed transactions when the signing address does not equal the sender. The backend can use this to ensure that auth addr is equal to the accounts auth addr.|
|»» close-rewards|integer|false|none|\[rc\] rewards applied to close-remainder-to account.|
|»» closing-amount|integer|false|none|\[ca\] closing amount for transaction.|
|»» confirmed-round|integer|false|none|Round when the transaction was confirmed.|
|»» created-application-index|integer|false|none|Specifies an application index (ID) if an application was created with this transaction.|
|»» created-asset-index|integer|false|none|Specifies an asset index (ID) if an asset was created with this transaction.|
|»» fee|integer|true|none|\[fee\] Transaction fee.|
|»» first-valid|integer|true|none|\[fv\] First valid round for this transaction.|
|»» genesis-hash|string(byte)|false|none|\[gh\] Hash of genesis block.|
|»» genesis-id|string|false|none|\[gen\] genesis block ID.|
|»» global-state-delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|false|none|Application state delta.|
|»»» key|string|true|none|none|
|»»» value|[EvalDelta](#schemaevaldelta)|true|none|Represents a TEAL value delta.|
|»»»» action|integer|true|none|\[at\] delta action.|
|»»»» bytes|string|false|none|\[bs\] bytes value.|
|»»»» uint|integer|false|none|\[ui\] uint value.|
|»» group|string(byte)|false|none|\[grp\] Base64 encoded byte array of a sha512/256 digest. When present indicates that this transaction is part of a transaction group and the value is the sha512/256 hash of the transactions in that group.|
|»» heartbeat-transaction|[TransactionHeartbeat](#schematransactionheartbeat)|false|none|Fields for a heartbeat transaction.<br><br>Definition:<br>data/transactions/heartbeat.go : HeartbeatTxnFields|
|»»» hb-address|string|true|none|\[hbad\] HbAddress is the account this txn is proving onlineness for.|
|»»» hb-key-dilution|integer|true|none|\[hbkd\] HbKeyDilution must match HbAddress account's current KeyDilution.|
|»»» hb-proof|[HbProofFields](#schemahbprooffields)|true|none|\[hbprf\] HbProof is a signature using HeartbeatAddress's partkey, thereby showing it is online.|
|»»»» hb-pk|string(byte)|false|none|\[p\] Public key of the heartbeat message.|
|»»»» hb-pk1sig|string(byte)|false|none|\[p1s\] Signature of OneTimeSignatureSubkeyOffsetID(PK, Batch, Offset) under the key PK2.|
|»»»» hb-pk2|string(byte)|false|none|\[p2\] Key for new-style two-level ephemeral signature.|
|»»»» hb-pk2sig|string(byte)|false|none|\[p2s\] Signature of OneTimeSignatureSubkeyBatchID(PK2, Batch) under the master key (OneTimeSignatureVerifier).|
|»»»» hb-sig|string(byte)|false|none|\[s\] Signature of the heartbeat message.|
|»»» hb-seed|string(byte)|true|none|\[hbsd\] HbSeed must be the block seed for the this transaction's firstValid block.|
|»»» hb-vote-id|string(byte)|true|none|\[hbvid\] HbVoteID must match the HbAddress account's current VoteID.|
|»» id|string|false|none|Transaction ID|
|»» inner-txns|[[Transaction](#schematransaction)]|false|none|Inner transactions produced by application execution.|
|»» intra-round-offset|integer|false|none|Offset into the round where this transaction was confirmed.|
|»» keyreg-transaction|[TransactionKeyreg](#schematransactionkeyreg)|false|none|Fields for a keyreg transaction.<br><br>Definition:<br>data/transactions/keyreg.go : KeyregTxnFields|
|»»» non-participation|boolean|false|none|\[nonpart\] Mark the account as participating or non-participating.|
|»»» selection-participation-key|string(byte)|false|none|\[selkey\] Public key used with the Verified Random Function (VRF) result during committee selection.|
|»»» state-proof-key|string(byte)|false|none|\[sprfkey\] State proof key used in key registration transactions.|
|»»» vote-first-valid|integer|false|none|\[votefst\] First round this participation key is valid.|
|»»» vote-key-dilution|integer|false|none|\[votekd\] Number of subkeys in each batch of participation keys.|
|»»» vote-last-valid|integer|false|none|\[votelst\] Last round this participation key is valid.|
|»»» vote-participation-key|string(byte)|false|none|\[votekey\] Participation public key used in key registration transactions.|
|»» last-valid|integer|true|none|\[lv\] Last valid round for this transaction.|
|»» lease|string(byte)|false|none|\[lx\] Base64 encoded 32-byte array. Lease enforces mutual exclusion of transactions.  If this field is nonzero, then once the transaction is confirmed, it acquires the lease identified by the (Sender, Lease) pair of the transaction until the LastValid round passes.  While this transaction possesses the lease, no other transaction specifying this lease can be confirmed.|
|»» local-state-delta|[[AccountStateDelta](#schemaaccountstatedelta)]|false|none|\[ld\] Local state key/value changes for the application being executed by this transaction.|
|»»» address|string|true|none|none|
|»»» delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|true|none|Application state delta.|
|»» logs|[string]|false|none|\[lg\] Logs for the application being executed by this transaction.|
|»» note|string(byte)|false|none|\[note\] Free form data.|
|»» payment-transaction|[TransactionPayment](#schematransactionpayment)|false|none|Fields for a payment transaction.<br><br>Definition:<br>data/transactions/payment.go : PaymentTxnFields|
|»»» amount|integer|true|none|\[amt\] number of MicroAlgos intended to be transferred.|
|»»» close-amount|integer|false|none|Number of MicroAlgos that were sent to the close-remainder-to address when closing the sender account.|
|»»» close-remainder-to|string|false|none|\[close\] when set, indicates that the sending account should be closed and all remaining funds be transferred to this address.|
|»»» receiver|string|true|none|\[rcv\] receiver's address.|
|»» receiver-rewards|integer|false|none|\[rr\] rewards applied to receiver account.|
|»» rekey-to|string|false|none|\[rekey\] when included in a valid transaction, the accounts auth addr will be updated with this value and future signatures must be signed with the key represented by this address.|
|»» round-time|integer|false|none|Time when the block this transaction is in was confirmed.|
|»» sender|string|true|none|\[snd\] Sender's address.|
|»» sender-rewards|integer|false|none|\[rs\] rewards applied to sender account.|
|»» signature|[TransactionSignature](#schematransactionsignature)|false|none|Validation signature associated with some data. Only one of the signatures should be provided.|
|»»» logicsig|[TransactionSignatureLogicsig](#schematransactionsignaturelogicsig)|false|none|\[lsig\] Programatic transaction signature.<br><br>Definition:<br>data/transactions/logicsig.go|
|»»»» args|[string]|false|none|\[arg\] Logic arguments, base64 encoded.|
|»»»» logic|string(byte)|true|none|\[l\] Program signed by a signature or multi signature, or hashed to be the address of ana ccount. Base64 encoded TEAL program.|
|»»»» logic-multisig-signature|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»»»» subsignature|[[TransactionSignatureMultisigSubsignature](#schematransactionsignaturemultisigsubsignature)]|false|none|\[subsig\] holds pairs of public key and signatures.|
|»»»»»» public-key|string(byte)|false|none|\[pk\]|
|»»»»»» signature|string(byte)|false|none|\[s\]|
|»»»»» threshold|integer|false|none|\[thr\]|
|»»»»» version|integer|false|none|\[v\]|
|»»»» multisig-signature|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»»» signature|string(byte)|false|none|\[sig\] ed25519 signature.|
|»»» multisig|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»» sig|string(byte)|false|none|\[sig\] Standard ed25519 signature.|
|»» state-proof-transaction|[TransactionStateProof](#schematransactionstateproof)|false|none|Fields for a state proof transaction. <br><br>Definition:<br>data/transactions/stateproof.go : StateProofTxnFields|
|»»» message|[IndexerStateProofMessage](#schemaindexerstateproofmessage)|false|none|none|
|»»»» block-headers-commitment|string(byte)|false|none|\[b\]|
|»»»» first-attested-round|integer|false|none|\[f\]|
|»»»» latest-attested-round|integer|false|none|\[l\]|
|»»»» ln-proven-weight|integer|false|none|\[P\]|
|»»»» voters-commitment|string(byte)|false|none|\[v\]|
|»»» state-proof|[StateProofFields](#schemastateprooffields)|false|none|\[sp\] represents a state proof.<br><br>Definition:<br>crypto/stateproof/structs.go : StateProof|
|»»»» part-proofs|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»»» hash-factory|[HashFactory](#schemahashfactory)|false|none|none|
|»»»»»» hash-type|integer|false|none|\[t\]|
|»»»»» path|[string]|false|none|\[pth\]|
|»»»»» tree-depth|integer|false|none|\[td\]|
|»»»» positions-to-reveal|[integer]|false|none|\[pr\] Sequence of reveal positions.|
|»»»» reveals|[[StateProofReveal](#schemastateproofreveal)]|false|none|\[r\] Note that this is actually stored as a map[uint64] - Reveal in the actual msgp|
|»»»»» participant|[StateProofParticipant](#schemastateproofparticipant)|false|none|none|
|»»»»»» verifier|[StateProofVerifier](#schemastateproofverifier)|false|none|none|
|»»»»»»» commitment|string(byte)|false|none|\[cmt\] Represents the root of the vector commitment tree.|
|»»»»»»» key-lifetime|integer|false|none|\[lf\] Key lifetime.|
|»»»»»» weight|integer|false|none|\[w\]|
|»»»»» position|integer|false|none|The position in the signature and participants arrays corresponding to this entry.|
|»»»»» sig-slot|[StateProofSigSlot](#schemastateproofsigslot)|false|none|none|
|»»»»»» lower-sig-weight|integer|false|none|\[l\] The total weight of signatures in the lower-numbered slots.|
|»»»»»» signature|[StateProofSignature](#schemastateproofsignature)|false|none|none|
|»»»»»»» falcon-signature|string(byte)|false|none|none|
|»»»»»»» merkle-array-index|integer|false|none|none|
|»»»»»»» proof|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»»»»» verifying-key|string(byte)|false|none|\[vkey\]|
|»»»» salt-version|integer|false|none|\[v\] Salt version of the merkle signature.|
|»»»» sig-commit|string(byte)|false|none|\[c\]|
|»»»» sig-proofs|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»» signed-weight|integer|false|none|\[w\]|
|»»» state-proof-type|integer|false|none|\[sptype\] Type of the state proof. Integer representing an entry defined in protocol/stateproof.go|
|»» tx-type|string|true|none|\[type\] Indicates what type of transaction this is. Different types have different fields.<br><br>Valid types, and where their fields are stored:<br>* \[pay\] payment-transaction<br>* \[keyreg\] keyreg-transaction<br>* \[acfg\] asset-config-transaction<br>* \[axfer\] asset-transfer-transaction<br>* \[afrz\] asset-freeze-transaction<br>* \[appl\] application-transaction<br>* \[stpf\] state-proof-transaction<br>* \[hb\] heartbeat-transaction|

#### Enumerated Values

|Property|Value|
|---|---|
|on-completion|noop|
|on-completion|optin|
|on-completion|closeout|
|on-completion|clear|
|on-completion|update|
|on-completion|delete|
|tx-type|pay|
|tx-type|keyreg|
|tx-type|acfg|
|tx-type|axfer|
|tx-type|afrz|
|tx-type|appl|
|tx-type|stpf|
|tx-type|hb|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### lookupApplicationBoxByIDAndName

<a id="opIdlookupApplicationBoxByIDAndName"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/applications/{application-id}/box?name=string \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/applications/{application-id}/box?name=string HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/applications/{application-id}/box?name=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/applications/{application-id}/box',
  params: {
  'name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/applications/{application-id}/box', params={
  'name': 'string'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/applications/{application-id}/box', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/applications/{application-id}/box?name=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/applications/{application-id}/box", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/applications/{application-id}/box`

*Get box information for a given application.*

Given an application ID and box name, returns base64 encoded box name and value. Box names must be in the goal app call arg form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, encode base 64 and use 'b64' prefix as in 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application-id|path|integer|true|none|
|name|query|string|true|A box name in goal-arg form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, use the form 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "round": 0,
  "value": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Box information|[Box](#schemabox)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### lookupApplicationByID

<a id="opIdlookupApplicationByID"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/applications/{application-id} \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/applications/{application-id} HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/applications/{application-id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/applications/{application-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/applications/{application-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/applications/{application-id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/applications/{application-id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/applications/{application-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/applications/{application-id}`

Lookup application.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application-id|path|integer|true|none|
|include-all|query|boolean|false|Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.|

> Example responses

> 200 Response

```json
{
  "application": {
    "created-at-round": 0,
    "deleted": true,
    "deleted-at-round": 0,
    "id": 0,
    "params": {
      "approval-program": "string",
      "clear-state-program": "string",
      "creator": "string",
      "extra-program-pages": 0,
      "global-state": [
        {
          "key": "string",
          "value": {
            "bytes": "string",
            "type": 0,
            "uint": 0
          }
        }
      ],
      "global-state-schema": {
        "num-byte-slice": 0,
        "num-uint": 0
      },
      "local-state-schema": {
        "num-byte-slice": 0,
        "num-uint": 0
      },
      "version": 0
    }
  },
  "current-round": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» application|[Application](#schemaapplication)|false|none|Application index and its parameters|
|»» created-at-round|integer|false|none|Round when this application was created.|
|»» deleted|boolean|false|none|Whether or not this application is currently deleted.|
|»» deleted-at-round|integer|false|none|Round when this application was deleted.|
|»» id|integer|true|none|application index.|
|»» params|[ApplicationParams](#schemaapplicationparams)|true|none|Stores the global information associated with an application.|
|»»» approval-program|string(byte)|true|none|approval program.|
|»»» clear-state-program|string(byte)|true|none|clear state program.|
|»»» creator|string|false|none|The address that created this application. This is the address where the parameters and global state for this application can be found.|
|»»» extra-program-pages|integer|false|none|the number of extra program pages available to this app.|
|»»» global-state|[[TealKeyValue](#schematealkeyvalue)]|false|none|Represents a key-value store for use in an application.|
|»»»» key|string|true|none|none|
|»»»» value|[TealValue](#schematealvalue)|true|none|Represents a TEAL value.|
|»»»»» bytes|string|true|none|bytes value.|
|»»»»» type|integer|true|none|type of the value. Value `1` refers to **bytes**, value `2` refers to **uint**|
|»»»»» uint|integer|true|none|uint value.|
|»»» global-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»»»» num-byte-slice|integer|true|none|number of byte slices.|
|»»»» num-uint|integer|true|none|number of uints.|
|»»» local-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»»» version|integer|false|none|the number of updates to the application programs|
|» current-round|integer|true|none|Round at which the results were computed.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### lookupApplicationLogsByID

<a id="opIdlookupApplicationLogsByID"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/applications/{application-id}/logs \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/applications/{application-id}/logs HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/applications/{application-id}/logs',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/applications/{application-id}/logs',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/applications/{application-id}/logs', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/applications/{application-id}/logs', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/applications/{application-id}/logs");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/applications/{application-id}/logs", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/applications/{application-id}/logs`

Lookup application logs.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application-id|path|integer|true|none|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|
|txid|query|string|false|Lookup the specific transaction by ID.|
|min-round|query|integer|false|Include results at or after the specified min-round.|
|max-round|query|integer|false|Include results at or before the specified max-round.|
|sender-address|query|string|false|Only include transactions with this sender address.|

> Example responses

> 200 Response

```json
{
  "application-id": 0,
  "current-round": 0,
  "log-data": [
    {
      "logs": [
        "string"
      ],
      "txid": "string"
    }
  ],
  "next-token": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» application-id|integer|true|none|\[appidx\] application index.|
|» current-round|integer|true|none|Round at which the results were computed.|
|» log-data|[[ApplicationLogData](#schemaapplicationlogdata)]|false|none|[Stores the global information associated with an application.]|
|»» logs|[string]|true|none|Logs for the application being executed by the transaction.|
|»» txid|string|true|none|Transaction ID|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|

<aside class="success">
This operation does not require authentication
</aside>


### lookupAssetBalances

<a id="opIdlookupAssetBalances"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/assets/{asset-id}/balances \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/assets/{asset-id}/balances HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/assets/{asset-id}/balances',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/assets/{asset-id}/balances',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/assets/{asset-id}/balances', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/assets/{asset-id}/balances', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/assets/{asset-id}/balances");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/assets/{asset-id}/balances", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/assets/{asset-id}/balances`

Lookup the list of accounts who hold this asset 

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include-all|query|boolean|false|Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|
|currency-greater-than|query|integer|false|Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.|
|currency-less-than|query|integer|false|Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.|
|asset-id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "balances": [
    {
      "address": "string",
      "amount": 0,
      "deleted": true,
      "is-frozen": true,
      "opted-in-at-round": 0,
      "opted-out-at-round": 0
    }
  ],
  "current-round": 0,
  "next-token": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» balances|[[MiniAssetHolding](#schemaminiassetholding)]|true|none|[A simplified version of AssetHolding ]|
|»» address|string|true|none|none|
|»» amount|integer|true|none|none|
|»» deleted|boolean|false|none|Whether or not this asset holding is currently deleted from its account.|
|»» is-frozen|boolean|true|none|none|
|»» opted-in-at-round|integer|false|none|Round during which the account opted into the asset.|
|»» opted-out-at-round|integer|false|none|Round during which the account opted out of the asset.|
|» current-round|integer|true|none|Round at which the results were computed.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### lookupAssetByID

<a id="opIdlookupAssetByID"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/assets/{asset-id} \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/assets/{asset-id} HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/assets/{asset-id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/assets/{asset-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/assets/{asset-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/assets/{asset-id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/assets/{asset-id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/assets/{asset-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/assets/{asset-id}`

Lookup asset information.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset-id|path|integer|true|none|
|include-all|query|boolean|false|Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.|

> Example responses

> 200 Response

```json
{
  "asset": {
    "created-at-round": 0,
    "deleted": true,
    "destroyed-at-round": 0,
    "index": 0,
    "params": {
      "clawback": "string",
      "creator": "string",
      "decimals": 19,
      "default-frozen": true,
      "freeze": "string",
      "manager": "string",
      "metadata-hash": "string",
      "name": "string",
      "name-b64": "string",
      "reserve": "string",
      "total": 0,
      "unit-name": "string",
      "unit-name-b64": "string",
      "url": "string",
      "url-b64": "string"
    }
  },
  "current-round": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» asset|[Asset](#schemaasset)|true|none|Specifies both the unique identifier and the parameters for an asset|
|»» created-at-round|integer|false|none|Round during which this asset was created.|
|»» deleted|boolean|false|none|Whether or not this asset is currently deleted.|
|»» destroyed-at-round|integer|false|none|Round during which this asset was destroyed.|
|»» index|integer|true|none|unique asset identifier|
|»» params|[AssetParams](#schemaassetparams)|true|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|
|»»» clawback|string|false|none|Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|»»» creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|»»» decimals|integer|true|none|The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|»»» default-frozen|boolean|false|none|Whether holdings of this asset are frozen by default.|
|»»» freeze|string|false|none|Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|»»» manager|string|false|none|Address of account used to manage the keys of this asset and to destroy it.|
|»»» metadata-hash|string(byte)|false|none|A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|»»» name|string|false|none|Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|»»» name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|»»» reserve|string|false|none|Address of account holding reserve (non-minted) units of this asset.|
|»»» total|integer|true|none|The total number of units of this asset.|
|»»» unit-name|string|false|none|Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|»»» unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|»»» url|string|false|none|URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|»»» url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|
|» current-round|integer|true|none|Round at which the results were computed.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### lookupAssetTransactions

<a id="opIdlookupAssetTransactions"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/assets/{asset-id}/transactions \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/assets/{asset-id}/transactions HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/assets/{asset-id}/transactions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/assets/{asset-id}/transactions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/assets/{asset-id}/transactions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/assets/{asset-id}/transactions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/assets/{asset-id}/transactions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/assets/{asset-id}/transactions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/assets/{asset-id}/transactions`

Lookup transactions for an asset. Transactions are returned oldest to newest.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|
|note-prefix|query|string|false|Specifies a prefix which must be contained in the note field.|
|tx-type|query|string|false|none|
|sig-type|query|string|false|SigType filters just results using the specified type of signature:|
|txid|query|string|false|Lookup the specific transaction by ID.|
|round|query|integer|false|Include results for the specified round.|
|min-round|query|integer|false|Include results at or after the specified min-round.|
|max-round|query|integer|false|Include results at or before the specified max-round.|
|before-time|query|string(date-time)|false|Include results before the given time. Must be an RFC 3339 formatted string.|
|after-time|query|string(date-time)|false|Include results after the given time. Must be an RFC 3339 formatted string.|
|currency-greater-than|query|integer|false|Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.|
|currency-less-than|query|integer|false|Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.|
|address|query|string|false|Only include transactions with this address in one of the transaction fields.|
|address-role|query|string|false|Combine with the address parameter to define what type of address to search for.|
|exclude-close-to|query|boolean|false|Combine with address and address-role parameters to define what type of address to search for. The close to fields are normally treated as a receiver, if you would like to exclude them set this parameter to true.|
|asset-id|path|integer|true|none|
|rekey-to|query|boolean|false|Include results which include the rekey-to field.|

#### Detailed descriptions

**sig-type**: SigType filters just results using the specified type of signature:
* sig - Standard
* msig - MultiSig
* lsig - LogicSig

#### Enumerated Values

|Parameter|Value|
|---|---|
|tx-type|pay|
|tx-type|keyreg|
|tx-type|acfg|
|tx-type|axfer|
|tx-type|afrz|
|tx-type|appl|
|tx-type|stpf|
|tx-type|hb|
|sig-type|sig|
|sig-type|msig|
|sig-type|lsig|
|address-role|sender|
|address-role|receiver|
|address-role|freeze-target|

> Example responses

> 200 Response

```json
{
  "current-round": 0,
  "next-token": "string",
  "transactions": [
    {
      "application-transaction": {
        "access": [
          {
            "address": "string",
            "application-id": 0,
            "asset-id": 0,
            "box": {
              "app": 0,
              "name": "string"
            },
            "holding": {
              "address": "string",
              "asset": 0
            },
            "local": {
              "address": "string",
              "app": 0
            }
          }
        ],
        "accounts": [
          "string"
        ],
        "application-args": [
          "string"
        ],
        "application-id": 0,
        "approval-program": "string",
        "box-references": [
          {
            "app": 0,
            "name": "string"
          }
        ],
        "clear-state-program": "string",
        "extra-program-pages": 0,
        "foreign-apps": [
          0
        ],
        "foreign-assets": [
          0
        ],
        "global-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "local-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "on-completion": "noop",
        "reject-version": 0
      },
      "asset-config-transaction": {
        "asset-id": 0,
        "params": {
          "clawback": "string",
          "creator": "string",
          "decimals": 19,
          "default-frozen": true,
          "freeze": "string",
          "manager": "string",
          "metadata-hash": "string",
          "name": "string",
          "name-b64": "string",
          "reserve": "string",
          "total": 0,
          "unit-name": "string",
          "unit-name-b64": "string",
          "url": "string",
          "url-b64": "string"
        }
      },
      "asset-freeze-transaction": {
        "address": "string",
        "asset-id": 0,
        "new-freeze-status": true
      },
      "asset-transfer-transaction": {
        "amount": 0,
        "asset-id": 0,
        "close-amount": 0,
        "close-to": "string",
        "receiver": "string",
        "sender": "string"
      },
      "auth-addr": "string",
      "close-rewards": 0,
      "closing-amount": 0,
      "confirmed-round": 0,
      "created-application-index": 0,
      "created-asset-index": 0,
      "fee": 0,
      "first-valid": 0,
      "genesis-hash": "string",
      "genesis-id": "string",
      "global-state-delta": [
        {
          "key": "string",
          "value": {
            "action": 0,
            "bytes": "string",
            "uint": 0
          }
        }
      ],
      "group": "string",
      "heartbeat-transaction": {
        "hb-address": "string",
        "hb-key-dilution": 0,
        "hb-proof": {
          "hb-pk": "string",
          "hb-pk1sig": "string",
          "hb-pk2": "string",
          "hb-pk2sig": "string",
          "hb-sig": "string"
        },
        "hb-seed": "string",
        "hb-vote-id": "string"
      },
      "id": "string",
      "inner-txns": [
        {}
      ],
      "intra-round-offset": 0,
      "keyreg-transaction": {
        "non-participation": true,
        "selection-participation-key": "string",
        "state-proof-key": "string",
        "vote-first-valid": 0,
        "vote-key-dilution": 0,
        "vote-last-valid": 0,
        "vote-participation-key": "string"
      },
      "last-valid": 0,
      "lease": "string",
      "local-state-delta": [
        {
          "address": "string",
          "delta": [
            {
              "key": "string",
              "value": {
                "action": 0,
                "bytes": "string",
                "uint": 0
              }
            }
          ]
        }
      ],
      "logs": [
        "string"
      ],
      "note": "string",
      "payment-transaction": {
        "amount": 0,
        "close-amount": 0,
        "close-remainder-to": "string",
        "receiver": "string"
      },
      "receiver-rewards": 0,
      "rekey-to": "string",
      "round-time": 0,
      "sender": "string",
      "sender-rewards": 0,
      "signature": {
        "logicsig": {
          "args": [
            "string"
          ],
          "logic": "string",
          "logic-multisig-signature": {
            "subsignature": [
              {
                "public-key": "string",
                "signature": "string"
              }
            ],
            "threshold": 0,
            "version": 0
          },
          "multisig-signature": {
            "subsignature": [
              {
                "public-key": "string",
                "signature": "string"
              }
            ],
            "threshold": 0,
            "version": 0
          },
          "signature": "string"
        },
        "multisig": {
          "subsignature": [
            {
              "public-key": "string",
              "signature": "string"
            }
          ],
          "threshold": 0,
          "version": 0
        },
        "sig": "string"
      },
      "state-proof-transaction": {
        "message": {
          "block-headers-commitment": "string",
          "first-attested-round": 0,
          "latest-attested-round": 0,
          "ln-proven-weight": 0,
          "voters-commitment": "string"
        },
        "state-proof": {
          "part-proofs": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "positions-to-reveal": [
            0
          ],
          "reveals": [
            {
              "participant": {
                "verifier": {
                  "commitment": "string",
                  "key-lifetime": 0
                },
                "weight": 0
              },
              "position": 0,
              "sig-slot": {
                "lower-sig-weight": 0,
                "signature": {
                  "falcon-signature": "string",
                  "merkle-array-index": 0,
                  "proof": {
                    "hash-factory": {},
                    "path": [],
                    "tree-depth": 0
                  },
                  "verifying-key": "string"
                }
              }
            }
          ],
          "salt-version": 0,
          "sig-commit": "string",
          "sig-proofs": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "signed-weight": 0
        },
        "state-proof-type": 0
      },
      "tx-type": "pay"
    }
  ]
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» current-round|integer|true|none|Round at which the results were computed.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|
|» transactions|[[Transaction](#schematransaction)]|true|none|[Contains all fields common to all transactions and serves as an envelope to all transactions type. Represents both regular and inner transactions.<br><br>Definition:<br>data/transactions/signedtxn.go : SignedTxn<br>data/transactions/transaction.go : Transaction<br>]|
|»» application-transaction|[TransactionApplication](#schematransactionapplication)|false|none|Fields for application transactions.<br><br>Definition:<br>data/transactions/application.go : ApplicationCallTxnFields|
|»»» access|[[ResourceRef](#schemaresourceref)]|false|none|\[al\] Access unifies `accounts`, `foreign-apps`, `foreign-assets`, and `box-references` under a single list. If access is non-empty, these lists must be empty. If access is empty, those lists may be non-empty.|
|»»»» address|string|false|none|\[d\] Account whose balance record is accessible by the executing ApprovalProgram or ClearStateProgram.|
|»»»» application-id|integer|false|none|\[p\] Application id whose GlobalState may be read by the executing<br> ApprovalProgram or ClearStateProgram.|
|»»»» asset-id|integer|false|none|\[s\] Asset whose AssetParams may be read by the executing<br> ApprovalProgram or ClearStateProgram.|
|»»»» box|[BoxReference](#schemaboxreference)|false|none|BoxReference names a box by its name and the application ID it belongs to.|
|»»»»» app|integer|true|none|Application ID to which the box belongs, or zero if referring to the called application.|
|»»»»» name|string(byte)|true|none|Base64 encoded box name|
|»»»» holding|[HoldingRef](#schemaholdingref)|false|none|HoldingRef names a holding by referring to an Address and Asset it belongs to.|
|»»»»» address|string|true|none|\[d\] Address in access list, or the sender of the transaction.|
|»»»»» asset|integer|true|none|\[s\] Asset ID for asset in access list.|
|»»»» local|[LocalsRef](#schemalocalsref)|false|none|LocalsRef names a local state by referring to an Address and App it belongs to.|
|»»»»» address|string|true|none|\[d\] Address in access list, or the sender of the transaction.|
|»»»»» app|integer|true|none|\[p\] Application ID for app in access list, or zero if referring to the called application.|
|»»» accounts|[string]|false|none|\[apat\] List of accounts in addition to the sender that may be accessed from the application's approval-program and clear-state-program.|
|»»» application-args|[string]|false|none|\[apaa\] transaction specific arguments accessed from the application's approval-program and clear-state-program.|
|»»» application-id|integer|true|none|\[apid\] ID of the application being configured or empty if creating.|
|»»» approval-program|string(byte)|false|none|\[apap\] Logic executed for every application transaction, except when on-completion is set to "clear". It can read and write global state for the application, as well as account-specific local state. Approval programs may reject the transaction.|
|»»» box-references|[[BoxReference](#schemaboxreference)]|false|none|\[apbx\] the boxes that can be accessed by this transaction (and others in the same group).|
|»»» clear-state-program|string(byte)|false|none|\[apsu\] Logic executed for application transactions with on-completion set to "clear". It can read and write global state for the application, as well as account-specific local state. Clear state programs cannot reject the transaction.|
|»»» extra-program-pages|integer|false|none|\[epp\] specifies the additional app program len requested in pages.|
|»»» foreign-apps|[integer]|false|none|\[apfa\] Lists the applications in addition to the application-id whose global states may be accessed by this application's approval-program and clear-state-program. The access is read-only.|
|»»» foreign-assets|[integer]|false|none|\[apas\] lists the assets whose parameters may be accessed by this application's ApprovalProgram and ClearStateProgram. The access is read-only.|
|»»» global-state-schema|[StateSchema](#schemastateschema)|false|none|Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.|
|»»»» num-byte-slice|integer|true|none|Maximum number of TEAL byte slices that may be stored in the key/value store.|
|»»»» num-uint|integer|true|none|Maximum number of TEAL uints that may be stored in the key/value store.|
|»»» local-state-schema|[StateSchema](#schemastateschema)|false|none|Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.|
|»»» on-completion|[OnCompletion](#schemaoncompletion)|true|none|\[apan\] defines the what additional actions occur with the transaction.<br><br>Valid types:<br>* noop<br>* optin<br>* closeout<br>* clear<br>* update<br>* update<br>* delete|
|»»» reject-version|integer|false|none|\[aprv\] the lowest application version for which this transaction should immediately fail. 0 indicates that no version check should be performed.|
|»» asset-config-transaction|[TransactionAssetConfig](#schematransactionassetconfig)|false|none|Fields for asset allocation, re-configuration, and destruction.<br><br><br>A zero value for asset-id indicates asset creation.<br>A zero value for the params indicates asset destruction.<br><br>Definition:<br>data/transactions/asset.go : AssetConfigTxnFields|
|»»» asset-id|integer|false|none|\[xaid\] ID of the asset being configured or empty if creating.|
|»»» params|[AssetParams](#schemaassetparams)|false|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|
|»»»» clawback|string|false|none|Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|»»»» creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|»»»» decimals|integer|true|none|The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|»»»» default-frozen|boolean|false|none|Whether holdings of this asset are frozen by default.|
|»»»» freeze|string|false|none|Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|»»»» manager|string|false|none|Address of account used to manage the keys of this asset and to destroy it.|
|»»»» metadata-hash|string(byte)|false|none|A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|»»»» name|string|false|none|Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|»»»» name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|»»»» reserve|string|false|none|Address of account holding reserve (non-minted) units of this asset.|
|»»»» total|integer|true|none|The total number of units of this asset.|
|»»»» unit-name|string|false|none|Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|»»»» unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|»»»» url|string|false|none|URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|»»»» url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|
|»» asset-freeze-transaction|[TransactionAssetFreeze](#schematransactionassetfreeze)|false|none|Fields for an asset freeze transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetFreezeTxnFields|
|»»» address|string|true|none|\[fadd\] Address of the account whose asset is being frozen or thawed.|
|»»» asset-id|integer|true|none|\[faid\] ID of the asset being frozen or thawed.|
|»»» new-freeze-status|boolean|true|none|\[afrz\] The new freeze status.|
|»» asset-transfer-transaction|[TransactionAssetTransfer](#schematransactionassettransfer)|false|none|Fields for an asset transfer transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetTransferTxnFields|
|»»» amount|integer|true|none|\[aamt\] Amount of asset to transfer. A zero amount transferred to self allocates that asset in the account's Assets map.|
|»»» asset-id|integer|true|none|\[xaid\] ID of the asset being transferred.|
|»»» close-amount|integer|false|none|Number of assets transferred to the close-to account as part of the transaction.|
|»»» close-to|string|false|none|\[aclose\] Indicates that the asset should be removed from the account's Assets map, and specifies where the remaining asset holdings should be transferred.  It's always valid to transfer remaining asset holdings to the creator account.|
|»»» receiver|string|true|none|\[arcv\] Recipient address of the transfer.|
|»»» sender|string|false|none|\[asnd\] The effective sender during a clawback transactions. If this is not a zero value, the real transaction sender must be the Clawback address from the AssetParams.|
|»» auth-addr|string|false|none|\[sgnr\] this is included with signed transactions when the signing address does not equal the sender. The backend can use this to ensure that auth addr is equal to the accounts auth addr.|
|»» close-rewards|integer|false|none|\[rc\] rewards applied to close-remainder-to account.|
|»» closing-amount|integer|false|none|\[ca\] closing amount for transaction.|
|»» confirmed-round|integer|false|none|Round when the transaction was confirmed.|
|»» created-application-index|integer|false|none|Specifies an application index (ID) if an application was created with this transaction.|
|»» created-asset-index|integer|false|none|Specifies an asset index (ID) if an asset was created with this transaction.|
|»» fee|integer|true|none|\[fee\] Transaction fee.|
|»» first-valid|integer|true|none|\[fv\] First valid round for this transaction.|
|»» genesis-hash|string(byte)|false|none|\[gh\] Hash of genesis block.|
|»» genesis-id|string|false|none|\[gen\] genesis block ID.|
|»» global-state-delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|false|none|Application state delta.|
|»»» key|string|true|none|none|
|»»» value|[EvalDelta](#schemaevaldelta)|true|none|Represents a TEAL value delta.|
|»»»» action|integer|true|none|\[at\] delta action.|
|»»»» bytes|string|false|none|\[bs\] bytes value.|
|»»»» uint|integer|false|none|\[ui\] uint value.|
|»» group|string(byte)|false|none|\[grp\] Base64 encoded byte array of a sha512/256 digest. When present indicates that this transaction is part of a transaction group and the value is the sha512/256 hash of the transactions in that group.|
|»» heartbeat-transaction|[TransactionHeartbeat](#schematransactionheartbeat)|false|none|Fields for a heartbeat transaction.<br><br>Definition:<br>data/transactions/heartbeat.go : HeartbeatTxnFields|
|»»» hb-address|string|true|none|\[hbad\] HbAddress is the account this txn is proving onlineness for.|
|»»» hb-key-dilution|integer|true|none|\[hbkd\] HbKeyDilution must match HbAddress account's current KeyDilution.|
|»»» hb-proof|[HbProofFields](#schemahbprooffields)|true|none|\[hbprf\] HbProof is a signature using HeartbeatAddress's partkey, thereby showing it is online.|
|»»»» hb-pk|string(byte)|false|none|\[p\] Public key of the heartbeat message.|
|»»»» hb-pk1sig|string(byte)|false|none|\[p1s\] Signature of OneTimeSignatureSubkeyOffsetID(PK, Batch, Offset) under the key PK2.|
|»»»» hb-pk2|string(byte)|false|none|\[p2\] Key for new-style two-level ephemeral signature.|
|»»»» hb-pk2sig|string(byte)|false|none|\[p2s\] Signature of OneTimeSignatureSubkeyBatchID(PK2, Batch) under the master key (OneTimeSignatureVerifier).|
|»»»» hb-sig|string(byte)|false|none|\[s\] Signature of the heartbeat message.|
|»»» hb-seed|string(byte)|true|none|\[hbsd\] HbSeed must be the block seed for the this transaction's firstValid block.|
|»»» hb-vote-id|string(byte)|true|none|\[hbvid\] HbVoteID must match the HbAddress account's current VoteID.|
|»» id|string|false|none|Transaction ID|
|»» inner-txns|[[Transaction](#schematransaction)]|false|none|Inner transactions produced by application execution.|
|»» intra-round-offset|integer|false|none|Offset into the round where this transaction was confirmed.|
|»» keyreg-transaction|[TransactionKeyreg](#schematransactionkeyreg)|false|none|Fields for a keyreg transaction.<br><br>Definition:<br>data/transactions/keyreg.go : KeyregTxnFields|
|»»» non-participation|boolean|false|none|\[nonpart\] Mark the account as participating or non-participating.|
|»»» selection-participation-key|string(byte)|false|none|\[selkey\] Public key used with the Verified Random Function (VRF) result during committee selection.|
|»»» state-proof-key|string(byte)|false|none|\[sprfkey\] State proof key used in key registration transactions.|
|»»» vote-first-valid|integer|false|none|\[votefst\] First round this participation key is valid.|
|»»» vote-key-dilution|integer|false|none|\[votekd\] Number of subkeys in each batch of participation keys.|
|»»» vote-last-valid|integer|false|none|\[votelst\] Last round this participation key is valid.|
|»»» vote-participation-key|string(byte)|false|none|\[votekey\] Participation public key used in key registration transactions.|
|»» last-valid|integer|true|none|\[lv\] Last valid round for this transaction.|
|»» lease|string(byte)|false|none|\[lx\] Base64 encoded 32-byte array. Lease enforces mutual exclusion of transactions.  If this field is nonzero, then once the transaction is confirmed, it acquires the lease identified by the (Sender, Lease) pair of the transaction until the LastValid round passes.  While this transaction possesses the lease, no other transaction specifying this lease can be confirmed.|
|»» local-state-delta|[[AccountStateDelta](#schemaaccountstatedelta)]|false|none|\[ld\] Local state key/value changes for the application being executed by this transaction.|
|»»» address|string|true|none|none|
|»»» delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|true|none|Application state delta.|
|»» logs|[string]|false|none|\[lg\] Logs for the application being executed by this transaction.|
|»» note|string(byte)|false|none|\[note\] Free form data.|
|»» payment-transaction|[TransactionPayment](#schematransactionpayment)|false|none|Fields for a payment transaction.<br><br>Definition:<br>data/transactions/payment.go : PaymentTxnFields|
|»»» amount|integer|true|none|\[amt\] number of MicroAlgos intended to be transferred.|
|»»» close-amount|integer|false|none|Number of MicroAlgos that were sent to the close-remainder-to address when closing the sender account.|
|»»» close-remainder-to|string|false|none|\[close\] when set, indicates that the sending account should be closed and all remaining funds be transferred to this address.|
|»»» receiver|string|true|none|\[rcv\] receiver's address.|
|»» receiver-rewards|integer|false|none|\[rr\] rewards applied to receiver account.|
|»» rekey-to|string|false|none|\[rekey\] when included in a valid transaction, the accounts auth addr will be updated with this value and future signatures must be signed with the key represented by this address.|
|»» round-time|integer|false|none|Time when the block this transaction is in was confirmed.|
|»» sender|string|true|none|\[snd\] Sender's address.|
|»» sender-rewards|integer|false|none|\[rs\] rewards applied to sender account.|
|»» signature|[TransactionSignature](#schematransactionsignature)|false|none|Validation signature associated with some data. Only one of the signatures should be provided.|
|»»» logicsig|[TransactionSignatureLogicsig](#schematransactionsignaturelogicsig)|false|none|\[lsig\] Programatic transaction signature.<br><br>Definition:<br>data/transactions/logicsig.go|
|»»»» args|[string]|false|none|\[arg\] Logic arguments, base64 encoded.|
|»»»» logic|string(byte)|true|none|\[l\] Program signed by a signature or multi signature, or hashed to be the address of ana ccount. Base64 encoded TEAL program.|
|»»»» logic-multisig-signature|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»»»» subsignature|[[TransactionSignatureMultisigSubsignature](#schematransactionsignaturemultisigsubsignature)]|false|none|\[subsig\] holds pairs of public key and signatures.|
|»»»»»» public-key|string(byte)|false|none|\[pk\]|
|»»»»»» signature|string(byte)|false|none|\[s\]|
|»»»»» threshold|integer|false|none|\[thr\]|
|»»»»» version|integer|false|none|\[v\]|
|»»»» multisig-signature|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»»» signature|string(byte)|false|none|\[sig\] ed25519 signature.|
|»»» multisig|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»» sig|string(byte)|false|none|\[sig\] Standard ed25519 signature.|
|»» state-proof-transaction|[TransactionStateProof](#schematransactionstateproof)|false|none|Fields for a state proof transaction. <br><br>Definition:<br>data/transactions/stateproof.go : StateProofTxnFields|
|»»» message|[IndexerStateProofMessage](#schemaindexerstateproofmessage)|false|none|none|
|»»»» block-headers-commitment|string(byte)|false|none|\[b\]|
|»»»» first-attested-round|integer|false|none|\[f\]|
|»»»» latest-attested-round|integer|false|none|\[l\]|
|»»»» ln-proven-weight|integer|false|none|\[P\]|
|»»»» voters-commitment|string(byte)|false|none|\[v\]|
|»»» state-proof|[StateProofFields](#schemastateprooffields)|false|none|\[sp\] represents a state proof.<br><br>Definition:<br>crypto/stateproof/structs.go : StateProof|
|»»»» part-proofs|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»»» hash-factory|[HashFactory](#schemahashfactory)|false|none|none|
|»»»»»» hash-type|integer|false|none|\[t\]|
|»»»»» path|[string]|false|none|\[pth\]|
|»»»»» tree-depth|integer|false|none|\[td\]|
|»»»» positions-to-reveal|[integer]|false|none|\[pr\] Sequence of reveal positions.|
|»»»» reveals|[[StateProofReveal](#schemastateproofreveal)]|false|none|\[r\] Note that this is actually stored as a map[uint64] - Reveal in the actual msgp|
|»»»»» participant|[StateProofParticipant](#schemastateproofparticipant)|false|none|none|
|»»»»»» verifier|[StateProofVerifier](#schemastateproofverifier)|false|none|none|
|»»»»»»» commitment|string(byte)|false|none|\[cmt\] Represents the root of the vector commitment tree.|
|»»»»»»» key-lifetime|integer|false|none|\[lf\] Key lifetime.|
|»»»»»» weight|integer|false|none|\[w\]|
|»»»»» position|integer|false|none|The position in the signature and participants arrays corresponding to this entry.|
|»»»»» sig-slot|[StateProofSigSlot](#schemastateproofsigslot)|false|none|none|
|»»»»»» lower-sig-weight|integer|false|none|\[l\] The total weight of signatures in the lower-numbered slots.|
|»»»»»» signature|[StateProofSignature](#schemastateproofsignature)|false|none|none|
|»»»»»»» falcon-signature|string(byte)|false|none|none|
|»»»»»»» merkle-array-index|integer|false|none|none|
|»»»»»»» proof|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»»»»» verifying-key|string(byte)|false|none|\[vkey\]|
|»»»» salt-version|integer|false|none|\[v\] Salt version of the merkle signature.|
|»»»» sig-commit|string(byte)|false|none|\[c\]|
|»»»» sig-proofs|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»» signed-weight|integer|false|none|\[w\]|
|»»» state-proof-type|integer|false|none|\[sptype\] Type of the state proof. Integer representing an entry defined in protocol/stateproof.go|
|»» tx-type|string|true|none|\[type\] Indicates what type of transaction this is. Different types have different fields.<br><br>Valid types, and where their fields are stored:<br>* \[pay\] payment-transaction<br>* \[keyreg\] keyreg-transaction<br>* \[acfg\] asset-config-transaction<br>* \[axfer\] asset-transfer-transaction<br>* \[afrz\] asset-freeze-transaction<br>* \[appl\] application-transaction<br>* \[stpf\] state-proof-transaction<br>* \[hb\] heartbeat-transaction|

#### Enumerated Values

|Property|Value|
|---|---|
|on-completion|noop|
|on-completion|optin|
|on-completion|closeout|
|on-completion|clear|
|on-completion|update|
|on-completion|delete|
|tx-type|pay|
|tx-type|keyreg|
|tx-type|acfg|
|tx-type|axfer|
|tx-type|afrz|
|tx-type|appl|
|tx-type|stpf|
|tx-type|hb|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### lookupBlock

<a id="opIdlookupBlock"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/blocks/{round-number} \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/blocks/{round-number} HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/blocks/{round-number}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/blocks/{round-number}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/blocks/{round-number}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/blocks/{round-number}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/blocks/{round-number}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/blocks/{round-number}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/blocks/{round-number}`

Lookup block.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|round-number|path|integer|true|Round number|
|header-only|query|boolean|false|Header only flag. When this is set to true, returned block does not contain the transactions|

> Example responses

> 200 Response

```json
{
  "bonus": 0,
  "fees-collected": 0,
  "genesis-hash": "string",
  "genesis-id": "string",
  "participation-updates": {
    "absent-participation-accounts": [
      "string"
    ],
    "expired-participation-accounts": [
      "string"
    ]
  },
  "previous-block-hash": "string",
  "previous-block-hash-512": "string",
  "proposer": "string",
  "proposer-payout": 0,
  "rewards": {
    "fee-sink": "string",
    "rewards-calculation-round": 0,
    "rewards-level": 0,
    "rewards-pool": "string",
    "rewards-rate": 0,
    "rewards-residue": 0
  },
  "round": 0,
  "seed": "string",
  "state-proof-tracking": [
    {
      "next-round": 0,
      "online-total-weight": 0,
      "type": 0,
      "voters-commitment": "string"
    }
  ],
  "timestamp": 0,
  "transactions": [
    {
      "application-transaction": {
        "access": [
          {
            "address": "string",
            "application-id": 0,
            "asset-id": 0,
            "box": {
              "app": 0,
              "name": "string"
            },
            "holding": {
              "address": "string",
              "asset": 0
            },
            "local": {
              "address": "string",
              "app": 0
            }
          }
        ],
        "accounts": [
          "string"
        ],
        "application-args": [
          "string"
        ],
        "application-id": 0,
        "approval-program": "string",
        "box-references": [
          {
            "app": 0,
            "name": "string"
          }
        ],
        "clear-state-program": "string",
        "extra-program-pages": 0,
        "foreign-apps": [
          0
        ],
        "foreign-assets": [
          0
        ],
        "global-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "local-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "on-completion": "noop",
        "reject-version": 0
      },
      "asset-config-transaction": {
        "asset-id": 0,
        "params": {
          "clawback": "string",
          "creator": "string",
          "decimals": 19,
          "default-frozen": true,
          "freeze": "string",
          "manager": "string",
          "metadata-hash": "string",
          "name": "string",
          "name-b64": "string",
          "reserve": "string",
          "total": 0,
          "unit-name": "string",
          "unit-name-b64": "string",
          "url": "string",
          "url-b64": "string"
        }
      },
      "asset-freeze-transaction": {
        "address": "string",
        "asset-id": 0,
        "new-freeze-status": true
      },
      "asset-transfer-transaction": {
        "amount": 0,
        "asset-id": 0,
        "close-amount": 0,
        "close-to": "string",
        "receiver": "string",
        "sender": "string"
      },
      "auth-addr": "string",
      "close-rewards": 0,
      "closing-amount": 0,
      "confirmed-round": 0,
      "created-application-index": 0,
      "created-asset-index": 0,
      "fee": 0,
      "first-valid": 0,
      "genesis-hash": "string",
      "genesis-id": "string",
      "global-state-delta": [
        {
          "key": "string",
          "value": {
            "action": 0,
            "bytes": "string",
            "uint": 0
          }
        }
      ],
      "group": "string",
      "heartbeat-transaction": {
        "hb-address": "string",
        "hb-key-dilution": 0,
        "hb-proof": {
          "hb-pk": "string",
          "hb-pk1sig": "string",
          "hb-pk2": "string",
          "hb-pk2sig": "string",
          "hb-sig": "string"
        },
        "hb-seed": "string",
        "hb-vote-id": "string"
      },
      "id": "string",
      "inner-txns": [
        {}
      ],
      "intra-round-offset": 0,
      "keyreg-transaction": {
        "non-participation": true,
        "selection-participation-key": "string",
        "state-proof-key": "string",
        "vote-first-valid": 0,
        "vote-key-dilution": 0,
        "vote-last-valid": 0,
        "vote-participation-key": "string"
      },
      "last-valid": 0,
      "lease": "string",
      "local-state-delta": [
        {
          "address": "string",
          "delta": [
            {
              "key": "string",
              "value": {
                "action": 0,
                "bytes": "string",
                "uint": 0
              }
            }
          ]
        }
      ],
      "logs": [
        "string"
      ],
      "note": "string",
      "payment-transaction": {
        "amount": 0,
        "close-amount": 0,
        "close-remainder-to": "string",
        "receiver": "string"
      },
      "receiver-rewards": 0,
      "rekey-to": "string",
      "round-time": 0,
      "sender": "string",
      "sender-rewards": 0,
      "signature": {
        "logicsig": {
          "args": [
            "string"
          ],
          "logic": "string",
          "logic-multisig-signature": {
            "subsignature": [
              {
                "public-key": "string",
                "signature": "string"
              }
            ],
            "threshold": 0,
            "version": 0
          },
          "multisig-signature": {
            "subsignature": [
              {
                "public-key": "string",
                "signature": "string"
              }
            ],
            "threshold": 0,
            "version": 0
          },
          "signature": "string"
        },
        "multisig": {
          "subsignature": [
            {
              "public-key": "string",
              "signature": "string"
            }
          ],
          "threshold": 0,
          "version": 0
        },
        "sig": "string"
      },
      "state-proof-transaction": {
        "message": {
          "block-headers-commitment": "string",
          "first-attested-round": 0,
          "latest-attested-round": 0,
          "ln-proven-weight": 0,
          "voters-commitment": "string"
        },
        "state-proof": {
          "part-proofs": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "positions-to-reveal": [
            0
          ],
          "reveals": [
            {
              "participant": {
                "verifier": {
                  "commitment": "string",
                  "key-lifetime": 0
                },
                "weight": 0
              },
              "position": 0,
              "sig-slot": {
                "lower-sig-weight": 0,
                "signature": {
                  "falcon-signature": "string",
                  "merkle-array-index": 0,
                  "proof": {
                    "hash-factory": {},
                    "path": [],
                    "tree-depth": 0
                  },
                  "verifying-key": "string"
                }
              }
            }
          ],
          "salt-version": 0,
          "sig-commit": "string",
          "sig-proofs": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "signed-weight": 0
        },
        "state-proof-type": 0
      },
      "tx-type": "pay"
    }
  ],
  "transactions-root": "string",
  "transactions-root-sha256": "string",
  "transactions-root-sha512": "string",
  "txn-counter": 0,
  "upgrade-state": {
    "current-protocol": "string",
    "next-protocol": "string",
    "next-protocol-approvals": 0,
    "next-protocol-switch-on": 0,
    "next-protocol-vote-before": 0
  },
  "upgrade-vote": {
    "upgrade-approve": true,
    "upgrade-delay": 0,
    "upgrade-propose": "string"
  }
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|[Block](#schemablock)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### lookupTransaction

<a id="opIdlookupTransaction"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/transactions/{txid} \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/transactions/{txid} HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/transactions/{txid}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/transactions/{txid}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/transactions/{txid}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/transactions/{txid}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/transactions/{txid}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/transactions/{txid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/transactions/{txid}`

Lookup a single transaction.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|txid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "current-round": 0,
  "transaction": {
    "application-transaction": {
      "access": [
        {
          "address": "string",
          "application-id": 0,
          "asset-id": 0,
          "box": {
            "app": 0,
            "name": "string"
          },
          "holding": {
            "address": "string",
            "asset": 0
          },
          "local": {
            "address": "string",
            "app": 0
          }
        }
      ],
      "accounts": [
        "string"
      ],
      "application-args": [
        "string"
      ],
      "application-id": 0,
      "approval-program": "string",
      "box-references": [
        {
          "app": 0,
          "name": "string"
        }
      ],
      "clear-state-program": "string",
      "extra-program-pages": 0,
      "foreign-apps": [
        0
      ],
      "foreign-assets": [
        0
      ],
      "global-state-schema": {
        "num-byte-slice": 0,
        "num-uint": 0
      },
      "local-state-schema": {
        "num-byte-slice": 0,
        "num-uint": 0
      },
      "on-completion": "noop",
      "reject-version": 0
    },
    "asset-config-transaction": {
      "asset-id": 0,
      "params": {
        "clawback": "string",
        "creator": "string",
        "decimals": 19,
        "default-frozen": true,
        "freeze": "string",
        "manager": "string",
        "metadata-hash": "string",
        "name": "string",
        "name-b64": "string",
        "reserve": "string",
        "total": 0,
        "unit-name": "string",
        "unit-name-b64": "string",
        "url": "string",
        "url-b64": "string"
      }
    },
    "asset-freeze-transaction": {
      "address": "string",
      "asset-id": 0,
      "new-freeze-status": true
    },
    "asset-transfer-transaction": {
      "amount": 0,
      "asset-id": 0,
      "close-amount": 0,
      "close-to": "string",
      "receiver": "string",
      "sender": "string"
    },
    "auth-addr": "string",
    "close-rewards": 0,
    "closing-amount": 0,
    "confirmed-round": 0,
    "created-application-index": 0,
    "created-asset-index": 0,
    "fee": 0,
    "first-valid": 0,
    "genesis-hash": "string",
    "genesis-id": "string",
    "global-state-delta": [
      {
        "key": "string",
        "value": {
          "action": 0,
          "bytes": "string",
          "uint": 0
        }
      }
    ],
    "group": "string",
    "heartbeat-transaction": {
      "hb-address": "string",
      "hb-key-dilution": 0,
      "hb-proof": {
        "hb-pk": "string",
        "hb-pk1sig": "string",
        "hb-pk2": "string",
        "hb-pk2sig": "string",
        "hb-sig": "string"
      },
      "hb-seed": "string",
      "hb-vote-id": "string"
    },
    "id": "string",
    "inner-txns": [
      {}
    ],
    "intra-round-offset": 0,
    "keyreg-transaction": {
      "non-participation": true,
      "selection-participation-key": "string",
      "state-proof-key": "string",
      "vote-first-valid": 0,
      "vote-key-dilution": 0,
      "vote-last-valid": 0,
      "vote-participation-key": "string"
    },
    "last-valid": 0,
    "lease": "string",
    "local-state-delta": [
      {
        "address": "string",
        "delta": [
          {
            "key": "string",
            "value": {
              "action": 0,
              "bytes": "string",
              "uint": 0
            }
          }
        ]
      }
    ],
    "logs": [
      "string"
    ],
    "note": "string",
    "payment-transaction": {
      "amount": 0,
      "close-amount": 0,
      "close-remainder-to": "string",
      "receiver": "string"
    },
    "receiver-rewards": 0,
    "rekey-to": "string",
    "round-time": 0,
    "sender": "string",
    "sender-rewards": 0,
    "signature": {
      "logicsig": {
        "args": [
          "string"
        ],
        "logic": "string",
        "logic-multisig-signature": {
          "subsignature": [
            {
              "public-key": "string",
              "signature": "string"
            }
          ],
          "threshold": 0,
          "version": 0
        },
        "multisig-signature": {
          "subsignature": [
            {
              "public-key": "string",
              "signature": "string"
            }
          ],
          "threshold": 0,
          "version": 0
        },
        "signature": "string"
      },
      "multisig": {
        "subsignature": [
          {
            "public-key": "string",
            "signature": "string"
          }
        ],
        "threshold": 0,
        "version": 0
      },
      "sig": "string"
    },
    "state-proof-transaction": {
      "message": {
        "block-headers-commitment": "string",
        "first-attested-round": 0,
        "latest-attested-round": 0,
        "ln-proven-weight": 0,
        "voters-commitment": "string"
      },
      "state-proof": {
        "part-proofs": {
          "hash-factory": {
            "hash-type": 0
          },
          "path": [
            "string"
          ],
          "tree-depth": 0
        },
        "positions-to-reveal": [
          0
        ],
        "reveals": [
          {
            "participant": {
              "verifier": {
                "commitment": "string",
                "key-lifetime": 0
              },
              "weight": 0
            },
            "position": 0,
            "sig-slot": {
              "lower-sig-weight": 0,
              "signature": {
                "falcon-signature": "string",
                "merkle-array-index": 0,
                "proof": {
                  "hash-factory": {
                    "hash-type": 0
                  },
                  "path": [
                    "string"
                  ],
                  "tree-depth": 0
                },
                "verifying-key": "string"
              }
            }
          }
        ],
        "salt-version": 0,
        "sig-commit": "string",
        "sig-proofs": {
          "hash-factory": {
            "hash-type": 0
          },
          "path": [
            "string"
          ],
          "tree-depth": 0
        },
        "signed-weight": 0
      },
      "state-proof-type": 0
    },
    "tx-type": "pay"
  }
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» current-round|integer|true|none|Round at which the results were computed.|
|» transaction|[Transaction](#schematransaction)|true|none|Contains all fields common to all transactions and serves as an envelope to all transactions type. Represents both regular and inner transactions.<br><br>Definition:<br>data/transactions/signedtxn.go : SignedTxn<br>data/transactions/transaction.go : Transaction|
|»» application-transaction|[TransactionApplication](#schematransactionapplication)|false|none|Fields for application transactions.<br><br>Definition:<br>data/transactions/application.go : ApplicationCallTxnFields|
|»»» access|[[ResourceRef](#schemaresourceref)]|false|none|\[al\] Access unifies `accounts`, `foreign-apps`, `foreign-assets`, and `box-references` under a single list. If access is non-empty, these lists must be empty. If access is empty, those lists may be non-empty.|
|»»»» address|string|false|none|\[d\] Account whose balance record is accessible by the executing ApprovalProgram or ClearStateProgram.|
|»»»» application-id|integer|false|none|\[p\] Application id whose GlobalState may be read by the executing<br> ApprovalProgram or ClearStateProgram.|
|»»»» asset-id|integer|false|none|\[s\] Asset whose AssetParams may be read by the executing<br> ApprovalProgram or ClearStateProgram.|
|»»»» box|[BoxReference](#schemaboxreference)|false|none|BoxReference names a box by its name and the application ID it belongs to.|
|»»»»» app|integer|true|none|Application ID to which the box belongs, or zero if referring to the called application.|
|»»»»» name|string(byte)|true|none|Base64 encoded box name|
|»»»» holding|[HoldingRef](#schemaholdingref)|false|none|HoldingRef names a holding by referring to an Address and Asset it belongs to.|
|»»»»» address|string|true|none|\[d\] Address in access list, or the sender of the transaction.|
|»»»»» asset|integer|true|none|\[s\] Asset ID for asset in access list.|
|»»»» local|[LocalsRef](#schemalocalsref)|false|none|LocalsRef names a local state by referring to an Address and App it belongs to.|
|»»»»» address|string|true|none|\[d\] Address in access list, or the sender of the transaction.|
|»»»»» app|integer|true|none|\[p\] Application ID for app in access list, or zero if referring to the called application.|
|»»» accounts|[string]|false|none|\[apat\] List of accounts in addition to the sender that may be accessed from the application's approval-program and clear-state-program.|
|»»» application-args|[string]|false|none|\[apaa\] transaction specific arguments accessed from the application's approval-program and clear-state-program.|
|»»» application-id|integer|true|none|\[apid\] ID of the application being configured or empty if creating.|
|»»» approval-program|string(byte)|false|none|\[apap\] Logic executed for every application transaction, except when on-completion is set to "clear". It can read and write global state for the application, as well as account-specific local state. Approval programs may reject the transaction.|
|»»» box-references|[[BoxReference](#schemaboxreference)]|false|none|\[apbx\] the boxes that can be accessed by this transaction (and others in the same group).|
|»»» clear-state-program|string(byte)|false|none|\[apsu\] Logic executed for application transactions with on-completion set to "clear". It can read and write global state for the application, as well as account-specific local state. Clear state programs cannot reject the transaction.|
|»»» extra-program-pages|integer|false|none|\[epp\] specifies the additional app program len requested in pages.|
|»»» foreign-apps|[integer]|false|none|\[apfa\] Lists the applications in addition to the application-id whose global states may be accessed by this application's approval-program and clear-state-program. The access is read-only.|
|»»» foreign-assets|[integer]|false|none|\[apas\] lists the assets whose parameters may be accessed by this application's ApprovalProgram and ClearStateProgram. The access is read-only.|
|»»» global-state-schema|[StateSchema](#schemastateschema)|false|none|Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.|
|»»»» num-byte-slice|integer|true|none|Maximum number of TEAL byte slices that may be stored in the key/value store.|
|»»»» num-uint|integer|true|none|Maximum number of TEAL uints that may be stored in the key/value store.|
|»»» local-state-schema|[StateSchema](#schemastateschema)|false|none|Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.|
|»»» on-completion|[OnCompletion](#schemaoncompletion)|true|none|\[apan\] defines the what additional actions occur with the transaction.<br><br>Valid types:<br>* noop<br>* optin<br>* closeout<br>* clear<br>* update<br>* update<br>* delete|
|»»» reject-version|integer|false|none|\[aprv\] the lowest application version for which this transaction should immediately fail. 0 indicates that no version check should be performed.|
|»» asset-config-transaction|[TransactionAssetConfig](#schematransactionassetconfig)|false|none|Fields for asset allocation, re-configuration, and destruction.<br><br><br>A zero value for asset-id indicates asset creation.<br>A zero value for the params indicates asset destruction.<br><br>Definition:<br>data/transactions/asset.go : AssetConfigTxnFields|
|»»» asset-id|integer|false|none|\[xaid\] ID of the asset being configured or empty if creating.|
|»»» params|[AssetParams](#schemaassetparams)|false|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|
|»»»» clawback|string|false|none|Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|»»»» creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|»»»» decimals|integer|true|none|The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|»»»» default-frozen|boolean|false|none|Whether holdings of this asset are frozen by default.|
|»»»» freeze|string|false|none|Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|»»»» manager|string|false|none|Address of account used to manage the keys of this asset and to destroy it.|
|»»»» metadata-hash|string(byte)|false|none|A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|»»»» name|string|false|none|Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|»»»» name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|»»»» reserve|string|false|none|Address of account holding reserve (non-minted) units of this asset.|
|»»»» total|integer|true|none|The total number of units of this asset.|
|»»»» unit-name|string|false|none|Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|»»»» unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|»»»» url|string|false|none|URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|»»»» url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|
|»» asset-freeze-transaction|[TransactionAssetFreeze](#schematransactionassetfreeze)|false|none|Fields for an asset freeze transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetFreezeTxnFields|
|»»» address|string|true|none|\[fadd\] Address of the account whose asset is being frozen or thawed.|
|»»» asset-id|integer|true|none|\[faid\] ID of the asset being frozen or thawed.|
|»»» new-freeze-status|boolean|true|none|\[afrz\] The new freeze status.|
|»» asset-transfer-transaction|[TransactionAssetTransfer](#schematransactionassettransfer)|false|none|Fields for an asset transfer transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetTransferTxnFields|
|»»» amount|integer|true|none|\[aamt\] Amount of asset to transfer. A zero amount transferred to self allocates that asset in the account's Assets map.|
|»»» asset-id|integer|true|none|\[xaid\] ID of the asset being transferred.|
|»»» close-amount|integer|false|none|Number of assets transferred to the close-to account as part of the transaction.|
|»»» close-to|string|false|none|\[aclose\] Indicates that the asset should be removed from the account's Assets map, and specifies where the remaining asset holdings should be transferred.  It's always valid to transfer remaining asset holdings to the creator account.|
|»»» receiver|string|true|none|\[arcv\] Recipient address of the transfer.|
|»»» sender|string|false|none|\[asnd\] The effective sender during a clawback transactions. If this is not a zero value, the real transaction sender must be the Clawback address from the AssetParams.|
|»» auth-addr|string|false|none|\[sgnr\] this is included with signed transactions when the signing address does not equal the sender. The backend can use this to ensure that auth addr is equal to the accounts auth addr.|
|»» close-rewards|integer|false|none|\[rc\] rewards applied to close-remainder-to account.|
|»» closing-amount|integer|false|none|\[ca\] closing amount for transaction.|
|»» confirmed-round|integer|false|none|Round when the transaction was confirmed.|
|»» created-application-index|integer|false|none|Specifies an application index (ID) if an application was created with this transaction.|
|»» created-asset-index|integer|false|none|Specifies an asset index (ID) if an asset was created with this transaction.|
|»» fee|integer|true|none|\[fee\] Transaction fee.|
|»» first-valid|integer|true|none|\[fv\] First valid round for this transaction.|
|»» genesis-hash|string(byte)|false|none|\[gh\] Hash of genesis block.|
|»» genesis-id|string|false|none|\[gen\] genesis block ID.|
|»» global-state-delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|false|none|Application state delta.|
|»»» key|string|true|none|none|
|»»» value|[EvalDelta](#schemaevaldelta)|true|none|Represents a TEAL value delta.|
|»»»» action|integer|true|none|\[at\] delta action.|
|»»»» bytes|string|false|none|\[bs\] bytes value.|
|»»»» uint|integer|false|none|\[ui\] uint value.|
|»» group|string(byte)|false|none|\[grp\] Base64 encoded byte array of a sha512/256 digest. When present indicates that this transaction is part of a transaction group and the value is the sha512/256 hash of the transactions in that group.|
|»» heartbeat-transaction|[TransactionHeartbeat](#schematransactionheartbeat)|false|none|Fields for a heartbeat transaction.<br><br>Definition:<br>data/transactions/heartbeat.go : HeartbeatTxnFields|
|»»» hb-address|string|true|none|\[hbad\] HbAddress is the account this txn is proving onlineness for.|
|»»» hb-key-dilution|integer|true|none|\[hbkd\] HbKeyDilution must match HbAddress account's current KeyDilution.|
|»»» hb-proof|[HbProofFields](#schemahbprooffields)|true|none|\[hbprf\] HbProof is a signature using HeartbeatAddress's partkey, thereby showing it is online.|
|»»»» hb-pk|string(byte)|false|none|\[p\] Public key of the heartbeat message.|
|»»»» hb-pk1sig|string(byte)|false|none|\[p1s\] Signature of OneTimeSignatureSubkeyOffsetID(PK, Batch, Offset) under the key PK2.|
|»»»» hb-pk2|string(byte)|false|none|\[p2\] Key for new-style two-level ephemeral signature.|
|»»»» hb-pk2sig|string(byte)|false|none|\[p2s\] Signature of OneTimeSignatureSubkeyBatchID(PK2, Batch) under the master key (OneTimeSignatureVerifier).|
|»»»» hb-sig|string(byte)|false|none|\[s\] Signature of the heartbeat message.|
|»»» hb-seed|string(byte)|true|none|\[hbsd\] HbSeed must be the block seed for the this transaction's firstValid block.|
|»»» hb-vote-id|string(byte)|true|none|\[hbvid\] HbVoteID must match the HbAddress account's current VoteID.|
|»» id|string|false|none|Transaction ID|
|»» inner-txns|[[Transaction](#schematransaction)]|false|none|Inner transactions produced by application execution.|
|»» intra-round-offset|integer|false|none|Offset into the round where this transaction was confirmed.|
|»» keyreg-transaction|[TransactionKeyreg](#schematransactionkeyreg)|false|none|Fields for a keyreg transaction.<br><br>Definition:<br>data/transactions/keyreg.go : KeyregTxnFields|
|»»» non-participation|boolean|false|none|\[nonpart\] Mark the account as participating or non-participating.|
|»»» selection-participation-key|string(byte)|false|none|\[selkey\] Public key used with the Verified Random Function (VRF) result during committee selection.|
|»»» state-proof-key|string(byte)|false|none|\[sprfkey\] State proof key used in key registration transactions.|
|»»» vote-first-valid|integer|false|none|\[votefst\] First round this participation key is valid.|
|»»» vote-key-dilution|integer|false|none|\[votekd\] Number of subkeys in each batch of participation keys.|
|»»» vote-last-valid|integer|false|none|\[votelst\] Last round this participation key is valid.|
|»»» vote-participation-key|string(byte)|false|none|\[votekey\] Participation public key used in key registration transactions.|
|»» last-valid|integer|true|none|\[lv\] Last valid round for this transaction.|
|»» lease|string(byte)|false|none|\[lx\] Base64 encoded 32-byte array. Lease enforces mutual exclusion of transactions.  If this field is nonzero, then once the transaction is confirmed, it acquires the lease identified by the (Sender, Lease) pair of the transaction until the LastValid round passes.  While this transaction possesses the lease, no other transaction specifying this lease can be confirmed.|
|»» local-state-delta|[[AccountStateDelta](#schemaaccountstatedelta)]|false|none|\[ld\] Local state key/value changes for the application being executed by this transaction.|
|»»» address|string|true|none|none|
|»»» delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|true|none|Application state delta.|
|»» logs|[string]|false|none|\[lg\] Logs for the application being executed by this transaction.|
|»» note|string(byte)|false|none|\[note\] Free form data.|
|»» payment-transaction|[TransactionPayment](#schematransactionpayment)|false|none|Fields for a payment transaction.<br><br>Definition:<br>data/transactions/payment.go : PaymentTxnFields|
|»»» amount|integer|true|none|\[amt\] number of MicroAlgos intended to be transferred.|
|»»» close-amount|integer|false|none|Number of MicroAlgos that were sent to the close-remainder-to address when closing the sender account.|
|»»» close-remainder-to|string|false|none|\[close\] when set, indicates that the sending account should be closed and all remaining funds be transferred to this address.|
|»»» receiver|string|true|none|\[rcv\] receiver's address.|
|»» receiver-rewards|integer|false|none|\[rr\] rewards applied to receiver account.|
|»» rekey-to|string|false|none|\[rekey\] when included in a valid transaction, the accounts auth addr will be updated with this value and future signatures must be signed with the key represented by this address.|
|»» round-time|integer|false|none|Time when the block this transaction is in was confirmed.|
|»» sender|string|true|none|\[snd\] Sender's address.|
|»» sender-rewards|integer|false|none|\[rs\] rewards applied to sender account.|
|»» signature|[TransactionSignature](#schematransactionsignature)|false|none|Validation signature associated with some data. Only one of the signatures should be provided.|
|»»» logicsig|[TransactionSignatureLogicsig](#schematransactionsignaturelogicsig)|false|none|\[lsig\] Programatic transaction signature.<br><br>Definition:<br>data/transactions/logicsig.go|
|»»»» args|[string]|false|none|\[arg\] Logic arguments, base64 encoded.|
|»»»» logic|string(byte)|true|none|\[l\] Program signed by a signature or multi signature, or hashed to be the address of ana ccount. Base64 encoded TEAL program.|
|»»»» logic-multisig-signature|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»»»» subsignature|[[TransactionSignatureMultisigSubsignature](#schematransactionsignaturemultisigsubsignature)]|false|none|\[subsig\] holds pairs of public key and signatures.|
|»»»»»» public-key|string(byte)|false|none|\[pk\]|
|»»»»»» signature|string(byte)|false|none|\[s\]|
|»»»»» threshold|integer|false|none|\[thr\]|
|»»»»» version|integer|false|none|\[v\]|
|»»»» multisig-signature|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»»» signature|string(byte)|false|none|\[sig\] ed25519 signature.|
|»»» multisig|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»» sig|string(byte)|false|none|\[sig\] Standard ed25519 signature.|
|»» state-proof-transaction|[TransactionStateProof](#schematransactionstateproof)|false|none|Fields for a state proof transaction. <br><br>Definition:<br>data/transactions/stateproof.go : StateProofTxnFields|
|»»» message|[IndexerStateProofMessage](#schemaindexerstateproofmessage)|false|none|none|
|»»»» block-headers-commitment|string(byte)|false|none|\[b\]|
|»»»» first-attested-round|integer|false|none|\[f\]|
|»»»» latest-attested-round|integer|false|none|\[l\]|
|»»»» ln-proven-weight|integer|false|none|\[P\]|
|»»»» voters-commitment|string(byte)|false|none|\[v\]|
|»»» state-proof|[StateProofFields](#schemastateprooffields)|false|none|\[sp\] represents a state proof.<br><br>Definition:<br>crypto/stateproof/structs.go : StateProof|
|»»»» part-proofs|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»»» hash-factory|[HashFactory](#schemahashfactory)|false|none|none|
|»»»»»» hash-type|integer|false|none|\[t\]|
|»»»»» path|[string]|false|none|\[pth\]|
|»»»»» tree-depth|integer|false|none|\[td\]|
|»»»» positions-to-reveal|[integer]|false|none|\[pr\] Sequence of reveal positions.|
|»»»» reveals|[[StateProofReveal](#schemastateproofreveal)]|false|none|\[r\] Note that this is actually stored as a map[uint64] - Reveal in the actual msgp|
|»»»»» participant|[StateProofParticipant](#schemastateproofparticipant)|false|none|none|
|»»»»»» verifier|[StateProofVerifier](#schemastateproofverifier)|false|none|none|
|»»»»»»» commitment|string(byte)|false|none|\[cmt\] Represents the root of the vector commitment tree.|
|»»»»»»» key-lifetime|integer|false|none|\[lf\] Key lifetime.|
|»»»»»» weight|integer|false|none|\[w\]|
|»»»»» position|integer|false|none|The position in the signature and participants arrays corresponding to this entry.|
|»»»»» sig-slot|[StateProofSigSlot](#schemastateproofsigslot)|false|none|none|
|»»»»»» lower-sig-weight|integer|false|none|\[l\] The total weight of signatures in the lower-numbered slots.|
|»»»»»» signature|[StateProofSignature](#schemastateproofsignature)|false|none|none|
|»»»»»»» falcon-signature|string(byte)|false|none|none|
|»»»»»»» merkle-array-index|integer|false|none|none|
|»»»»»»» proof|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»»»»» verifying-key|string(byte)|false|none|\[vkey\]|
|»»»» salt-version|integer|false|none|\[v\] Salt version of the merkle signature.|
|»»»» sig-commit|string(byte)|false|none|\[c\]|
|»»»» sig-proofs|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»» signed-weight|integer|false|none|\[w\]|
|»»» state-proof-type|integer|false|none|\[sptype\] Type of the state proof. Integer representing an entry defined in protocol/stateproof.go|
|»» tx-type|string|true|none|\[type\] Indicates what type of transaction this is. Different types have different fields.<br><br>Valid types, and where their fields are stored:<br>* \[pay\] payment-transaction<br>* \[keyreg\] keyreg-transaction<br>* \[acfg\] asset-config-transaction<br>* \[axfer\] asset-transfer-transaction<br>* \[afrz\] asset-freeze-transaction<br>* \[appl\] application-transaction<br>* \[stpf\] state-proof-transaction<br>* \[hb\] heartbeat-transaction|

#### Enumerated Values

|Property|Value|
|---|---|
|on-completion|noop|
|on-completion|optin|
|on-completion|closeout|
|on-completion|clear|
|on-completion|update|
|on-completion|delete|
|tx-type|pay|
|tx-type|keyreg|
|tx-type|acfg|
|tx-type|axfer|
|tx-type|afrz|
|tx-type|appl|
|tx-type|stpf|
|tx-type|hb|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


## Schemas


### Account
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "address": "string",
  "amount": 0,
  "amount-without-pending-rewards": 0,
  "apps-local-state": [
    {
      "closed-out-at-round": 0,
      "deleted": true,
      "id": 0,
      "key-value": [
        {
          "key": "string",
          "value": {
            "bytes": "string",
            "type": 0,
            "uint": 0
          }
        }
      ],
      "opted-in-at-round": 0,
      "schema": {
        "num-byte-slice": 0,
        "num-uint": 0
      }
    }
  ],
  "apps-total-extra-pages": 0,
  "apps-total-schema": {
    "num-byte-slice": 0,
    "num-uint": 0
  },
  "assets": [
    {
      "amount": 0,
      "asset-id": 0,
      "deleted": true,
      "is-frozen": true,
      "opted-in-at-round": 0,
      "opted-out-at-round": 0
    }
  ],
  "auth-addr": "string",
  "closed-at-round": 0,
  "created-apps": [
    {
      "created-at-round": 0,
      "deleted": true,
      "deleted-at-round": 0,
      "id": 0,
      "params": {
        "approval-program": "string",
        "clear-state-program": "string",
        "creator": "string",
        "extra-program-pages": 0,
        "global-state": [
          {
            "key": "string",
            "value": {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          }
        ],
        "global-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "local-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "version": 0
      }
    }
  ],
  "created-assets": [
    {
      "created-at-round": 0,
      "deleted": true,
      "destroyed-at-round": 0,
      "index": 0,
      "params": {
        "clawback": "string",
        "creator": "string",
        "decimals": 19,
        "default-frozen": true,
        "freeze": "string",
        "manager": "string",
        "metadata-hash": "string",
        "name": "string",
        "name-b64": "string",
        "reserve": "string",
        "total": 0,
        "unit-name": "string",
        "unit-name-b64": "string",
        "url": "string",
        "url-b64": "string"
      }
    }
  ],
  "created-at-round": 0,
  "deleted": true,
  "incentive-eligible": true,
  "last-heartbeat": 0,
  "last-proposed": 0,
  "min-balance": 0,
  "participation": {
    "selection-participation-key": "string",
    "state-proof-key": "string",
    "vote-first-valid": 0,
    "vote-key-dilution": 0,
    "vote-last-valid": 0,
    "vote-participation-key": "string"
  },
  "pending-rewards": 0,
  "reward-base": 0,
  "rewards": 0,
  "round": 0,
  "sig-type": "sig",
  "status": "string",
  "total-apps-opted-in": 0,
  "total-assets-opted-in": 0,
  "total-box-bytes": 0,
  "total-boxes": 0,
  "total-created-apps": 0,
  "total-created-assets": 0
}

```

Account information at a given round.

Definition:
data/basics/userBalance.go : AccountData

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|the account public key|
|amount|integer|true|none|total number of MicroAlgos in the account|
|amount-without-pending-rewards|integer|true|none|specifies the amount of MicroAlgos in the account, without the pending rewards.|
|apps-local-state|[[ApplicationLocalState](#schemaapplicationlocalstate)]|false|none|application local data stored in this account.<br><br>Note the raw object uses `map[int] -> AppLocalState` for this type.|
|apps-total-extra-pages|integer|false|none|the sum of all extra application program pages for this account.|
|apps-total-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|assets|[[AssetHolding](#schemaassetholding)]|false|none|assets held by this account.<br><br>Note the raw object uses `map[int] -> AssetHolding` for this type.|
|auth-addr|string|false|none|The address against which signing should be checked. If empty, the address of the current account is used. This field can be updated in any transaction by setting the RekeyTo field.|
|closed-at-round|integer|false|none|Round during which this account was most recently closed.|
|created-apps|[[Application](#schemaapplication)]|false|none|parameters of applications created by this account including app global data.<br><br>Note: the raw account uses `map[int] -> AppParams` for this type.|
|created-assets|[[Asset](#schemaasset)]|false|none|parameters of assets created by this account.<br><br>Note: the raw account uses `map[int] -> Asset` for this type.|
|created-at-round|integer|false|none|Round during which this account first appeared in a transaction.|
|deleted|boolean|false|none|Whether or not this account is currently closed.|
|incentive-eligible|boolean|false|none|can the account receive block incentives if its balance is in range at proposal time.|
|last-heartbeat|integer|false|none|The round in which this account last went online, or explicitly renewed their online status.|
|last-proposed|integer|false|none|The round in which this account last proposed the block.|
|min-balance|integer|true|none|MicroAlgo balance required by the account.<br><br>The requirement grows based on asset and application usage.|
|participation|[AccountParticipation](#schemaaccountparticipation)|false|none|AccountParticipation describes the parameters used by this account in consensus protocol.|
|pending-rewards|integer|true|none|amount of MicroAlgos of pending rewards in this account.|
|reward-base|integer|false|none|used as part of the rewards computation. Only applicable to accounts which are participating.|
|rewards|integer|true|none|total rewards of MicroAlgos the account has received, including pending rewards.|
|round|integer|true|none|The round for which this information is relevant.|
|sig-type|string|false|none|the type of signature used by this account, must be one of:<br>* sig<br>* msig<br>* lsig<br>* or null if unknown|
|status|string|true|none|voting status of the account's MicroAlgos<br>* Offline - indicates that the associated account is delegated.<br>*  Online  - indicates that the associated account used as part of the delegation pool.<br>*   NotParticipating - indicates that the associated account is neither a delegator nor a delegate.|
|total-apps-opted-in|integer|true|none|The count of all applications that have been opted in, equivalent to the count of application local data (AppLocalState objects) stored in this account.|
|total-assets-opted-in|integer|true|none|The count of all assets that have been opted in, equivalent to the count of AssetHolding objects held by this account.|
|total-box-bytes|integer|true|none|For app-accounts only. The total number of bytes allocated for the keys and values of boxes which belong to the associated application.|
|total-boxes|integer|true|none|For app-accounts only. The total number of boxes which belong to the associated application.|
|total-created-apps|integer|true|none|The count of all apps (AppParams objects) created by this account.|
|total-created-assets|integer|true|none|The count of all assets (AssetParams objects) created by this account.|

#### Enumerated Values

|Property|Value|
|---|---|
|sig-type|sig|
|sig-type|msig|
|sig-type|lsig|


### AccountParticipation
<!-- backwards compatibility -->
<a id="schemaaccountparticipation"></a>
<a id="schema_AccountParticipation"></a>
<a id="tocSaccountparticipation"></a>
<a id="tocsaccountparticipation"></a>

```json
{
  "selection-participation-key": "string",
  "state-proof-key": "string",
  "vote-first-valid": 0,
  "vote-key-dilution": 0,
  "vote-last-valid": 0,
  "vote-participation-key": "string"
}

```

AccountParticipation describes the parameters used by this account in consensus protocol.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selection-participation-key|string(byte)|true|none|Selection public key (if any) currently registered for this round.|
|state-proof-key|string(byte)|false|none|Root of the state proof key (if any)|
|vote-first-valid|integer|true|none|First round for which this participation is valid.|
|vote-key-dilution|integer|true|none|Number of subkeys in each batch of participation keys.|
|vote-last-valid|integer|true|none|Last round for which this participation is valid.|
|vote-participation-key|string(byte)|true|none|root participation public key (if any) currently registered for this round.|


### AccountStateDelta
<!-- backwards compatibility -->
<a id="schemaaccountstatedelta"></a>
<a id="schema_AccountStateDelta"></a>
<a id="tocSaccountstatedelta"></a>
<a id="tocsaccountstatedelta"></a>

```json
{
  "address": "string",
  "delta": [
    {
      "key": "string",
      "value": {
        "action": 0,
        "bytes": "string",
        "uint": 0
      }
    }
  ]
}

```

Application state delta.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|none|
|delta|[StateDelta](#schemastatedelta)|true|none|Application state delta.|


### Application
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "created-at-round": 0,
  "deleted": true,
  "deleted-at-round": 0,
  "id": 0,
  "params": {
    "approval-program": "string",
    "clear-state-program": "string",
    "creator": "string",
    "extra-program-pages": 0,
    "global-state": [
      {
        "key": "string",
        "value": {
          "bytes": "string",
          "type": 0,
          "uint": 0
        }
      }
    ],
    "global-state-schema": {
      "num-byte-slice": 0,
      "num-uint": 0
    },
    "local-state-schema": {
      "num-byte-slice": 0,
      "num-uint": 0
    },
    "version": 0
  }
}

```

Application index and its parameters

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created-at-round|integer|false|none|Round when this application was created.|
|deleted|boolean|false|none|Whether or not this application is currently deleted.|
|deleted-at-round|integer|false|none|Round when this application was deleted.|
|id|integer|true|none|application index.|
|params|[ApplicationParams](#schemaapplicationparams)|true|none|Stores the global information associated with an application.|


### ApplicationLocalState
<!-- backwards compatibility -->
<a id="schemaapplicationlocalstate"></a>
<a id="schema_ApplicationLocalState"></a>
<a id="tocSapplicationlocalstate"></a>
<a id="tocsapplicationlocalstate"></a>

```json
{
  "closed-out-at-round": 0,
  "deleted": true,
  "id": 0,
  "key-value": [
    {
      "key": "string",
      "value": {
        "bytes": "string",
        "type": 0,
        "uint": 0
      }
    }
  ],
  "opted-in-at-round": 0,
  "schema": {
    "num-byte-slice": 0,
    "num-uint": 0
  }
}

```

Stores local state associated with an application.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closed-out-at-round|integer|false|none|Round when account closed out of the application.|
|deleted|boolean|false|none|Whether or not the application local state is currently deleted from its account.|
|id|integer|true|none|The application which this local state is for.|
|key-value|[TealKeyValueStore](#schematealkeyvaluestore)|false|none|Represents a key-value store for use in an application.|
|opted-in-at-round|integer|false|none|Round when the account opted into the application.|
|schema|[ApplicationStateSchema](#schemaapplicationstateschema)|true|none|Specifies maximums on the number of each type that may be stored.|


### ApplicationLogData
<!-- backwards compatibility -->
<a id="schemaapplicationlogdata"></a>
<a id="schema_ApplicationLogData"></a>
<a id="tocSapplicationlogdata"></a>
<a id="tocsapplicationlogdata"></a>

```json
{
  "logs": [
    "string"
  ],
  "txid": "string"
}

```

Stores the global information associated with an application.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|[string]|true|none|Logs for the application being executed by the transaction.|
|txid|string|true|none|Transaction ID|


### ApplicationParams
<!-- backwards compatibility -->
<a id="schemaapplicationparams"></a>
<a id="schema_ApplicationParams"></a>
<a id="tocSapplicationparams"></a>
<a id="tocsapplicationparams"></a>

```json
{
  "approval-program": "string",
  "clear-state-program": "string",
  "creator": "string",
  "extra-program-pages": 0,
  "global-state": [
    {
      "key": "string",
      "value": {
        "bytes": "string",
        "type": 0,
        "uint": 0
      }
    }
  ],
  "global-state-schema": {
    "num-byte-slice": 0,
    "num-uint": 0
  },
  "local-state-schema": {
    "num-byte-slice": 0,
    "num-uint": 0
  },
  "version": 0
}

```

Stores the global information associated with an application.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approval-program|string(byte)|true|none|approval program.|
|clear-state-program|string(byte)|true|none|clear state program.|
|creator|string|false|none|The address that created this application. This is the address where the parameters and global state for this application can be found.|
|extra-program-pages|integer|false|none|the number of extra program pages available to this app.|
|global-state|[TealKeyValueStore](#schematealkeyvaluestore)|false|none|Represents a key-value store for use in an application.|
|global-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|local-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|version|integer|false|none|the number of updates to the application programs|


### ApplicationStateSchema
<!-- backwards compatibility -->
<a id="schemaapplicationstateschema"></a>
<a id="schema_ApplicationStateSchema"></a>
<a id="tocSapplicationstateschema"></a>
<a id="tocsapplicationstateschema"></a>

```json
{
  "num-byte-slice": 0,
  "num-uint": 0
}

```

Specifies maximums on the number of each type that may be stored.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num-byte-slice|integer|true|none|number of byte slices.|
|num-uint|integer|true|none|number of uints.|


### Asset
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "created-at-round": 0,
  "deleted": true,
  "destroyed-at-round": 0,
  "index": 0,
  "params": {
    "clawback": "string",
    "creator": "string",
    "decimals": 19,
    "default-frozen": true,
    "freeze": "string",
    "manager": "string",
    "metadata-hash": "string",
    "name": "string",
    "name-b64": "string",
    "reserve": "string",
    "total": 0,
    "unit-name": "string",
    "unit-name-b64": "string",
    "url": "string",
    "url-b64": "string"
  }
}

```

Specifies both the unique identifier and the parameters for an asset

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created-at-round|integer|false|none|Round during which this asset was created.|
|deleted|boolean|false|none|Whether or not this asset is currently deleted.|
|destroyed-at-round|integer|false|none|Round during which this asset was destroyed.|
|index|integer|true|none|unique asset identifier|
|params|[AssetParams](#schemaassetparams)|true|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|


### AssetHolding
<!-- backwards compatibility -->
<a id="schemaassetholding"></a>
<a id="schema_AssetHolding"></a>
<a id="tocSassetholding"></a>
<a id="tocsassetholding"></a>

```json
{
  "amount": 0,
  "asset-id": 0,
  "deleted": true,
  "is-frozen": true,
  "opted-in-at-round": 0,
  "opted-out-at-round": 0
}

```

Describes an asset held by an account.

Definition:
data/basics/userBalance.go : AssetHolding

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|true|none|number of units held.|
|asset-id|integer|true|none|Asset ID of the holding.|
|deleted|boolean|false|none|Whether or not the asset holding is currently deleted from its account.|
|is-frozen|boolean|true|none|whether or not the holding is frozen.|
|opted-in-at-round|integer|false|none|Round during which the account opted into this asset holding.|
|opted-out-at-round|integer|false|none|Round during which the account opted out of this asset holding.|


### AssetParams
<!-- backwards compatibility -->
<a id="schemaassetparams"></a>
<a id="schema_AssetParams"></a>
<a id="tocSassetparams"></a>
<a id="tocsassetparams"></a>

```json
{
  "clawback": "string",
  "creator": "string",
  "decimals": 19,
  "default-frozen": true,
  "freeze": "string",
  "manager": "string",
  "metadata-hash": "string",
  "name": "string",
  "name-b64": "string",
  "reserve": "string",
  "total": 0,
  "unit-name": "string",
  "unit-name-b64": "string",
  "url": "string",
  "url-b64": "string"
}

```

AssetParams specifies the parameters for an asset.

\[apar\] when part of an AssetConfig transaction.

Definition:
data/transactions/asset.go : AssetParams

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clawback|string|false|none|Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|decimals|integer|true|none|The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|default-frozen|boolean|false|none|Whether holdings of this asset are frozen by default.|
|freeze|string|false|none|Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|manager|string|false|none|Address of account used to manage the keys of this asset and to destroy it.|
|metadata-hash|string(byte)|false|none|A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|name|string|false|none|Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|reserve|string|false|none|Address of account holding reserve (non-minted) units of this asset.|
|total|integer|true|none|The total number of units of this asset.|
|unit-name|string|false|none|Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|url|string|false|none|URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|


### Block
<!-- backwards compatibility -->
<a id="schemablock"></a>
<a id="schema_Block"></a>
<a id="tocSblock"></a>
<a id="tocsblock"></a>

```json
{
  "bonus": 0,
  "fees-collected": 0,
  "genesis-hash": "string",
  "genesis-id": "string",
  "participation-updates": {
    "absent-participation-accounts": [
      "string"
    ],
    "expired-participation-accounts": [
      "string"
    ]
  },
  "previous-block-hash": "string",
  "previous-block-hash-512": "string",
  "proposer": "string",
  "proposer-payout": 0,
  "rewards": {
    "fee-sink": "string",
    "rewards-calculation-round": 0,
    "rewards-level": 0,
    "rewards-pool": "string",
    "rewards-rate": 0,
    "rewards-residue": 0
  },
  "round": 0,
  "seed": "string",
  "state-proof-tracking": [
    {
      "next-round": 0,
      "online-total-weight": 0,
      "type": 0,
      "voters-commitment": "string"
    }
  ],
  "timestamp": 0,
  "transactions": [
    {
      "application-transaction": {
        "access": [
          {
            "address": "string",
            "application-id": 0,
            "asset-id": 0,
            "box": {
              "app": 0,
              "name": "string"
            },
            "holding": {
              "address": "string",
              "asset": 0
            },
            "local": {
              "address": "string",
              "app": 0
            }
          }
        ],
        "accounts": [
          "string"
        ],
        "application-args": [
          "string"
        ],
        "application-id": 0,
        "approval-program": "string",
        "box-references": [
          {
            "app": 0,
            "name": "string"
          }
        ],
        "clear-state-program": "string",
        "extra-program-pages": 0,
        "foreign-apps": [
          0
        ],
        "foreign-assets": [
          0
        ],
        "global-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "local-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "on-completion": "noop",
        "reject-version": 0
      },
      "asset-config-transaction": {
        "asset-id": 0,
        "params": {
          "clawback": "string",
          "creator": "string",
          "decimals": 19,
          "default-frozen": true,
          "freeze": "string",
          "manager": "string",
          "metadata-hash": "string",
          "name": "string",
          "name-b64": "string",
          "reserve": "string",
          "total": 0,
          "unit-name": "string",
          "unit-name-b64": "string",
          "url": "string",
          "url-b64": "string"
        }
      },
      "asset-freeze-transaction": {
        "address": "string",
        "asset-id": 0,
        "new-freeze-status": true
      },
      "asset-transfer-transaction": {
        "amount": 0,
        "asset-id": 0,
        "close-amount": 0,
        "close-to": "string",
        "receiver": "string",
        "sender": "string"
      },
      "auth-addr": "string",
      "close-rewards": 0,
      "closing-amount": 0,
      "confirmed-round": 0,
      "created-application-index": 0,
      "created-asset-index": 0,
      "fee": 0,
      "first-valid": 0,
      "genesis-hash": "string",
      "genesis-id": "string",
      "global-state-delta": [
        {
          "key": "string",
          "value": {
            "action": 0,
            "bytes": "string",
            "uint": 0
          }
        }
      ],
      "group": "string",
      "heartbeat-transaction": {
        "hb-address": "string",
        "hb-key-dilution": 0,
        "hb-proof": {
          "hb-pk": "string",
          "hb-pk1sig": "string",
          "hb-pk2": "string",
          "hb-pk2sig": "string",
          "hb-sig": "string"
        },
        "hb-seed": "string",
        "hb-vote-id": "string"
      },
      "id": "string",
      "inner-txns": [
        {}
      ],
      "intra-round-offset": 0,
      "keyreg-transaction": {
        "non-participation": true,
        "selection-participation-key": "string",
        "state-proof-key": "string",
        "vote-first-valid": 0,
        "vote-key-dilution": 0,
        "vote-last-valid": 0,
        "vote-participation-key": "string"
      },
      "last-valid": 0,
      "lease": "string",
      "local-state-delta": [
        {
          "address": "string",
          "delta": [
            {
              "key": "string",
              "value": {
                "action": 0,
                "bytes": "string",
                "uint": 0
              }
            }
          ]
        }
      ],
      "logs": [
        "string"
      ],
      "note": "string",
      "payment-transaction": {
        "amount": 0,
        "close-amount": 0,
        "close-remainder-to": "string",
        "receiver": "string"
      },
      "receiver-rewards": 0,
      "rekey-to": "string",
      "round-time": 0,
      "sender": "string",
      "sender-rewards": 0,
      "signature": {
        "logicsig": {
          "args": [
            "string"
          ],
          "logic": "string",
          "logic-multisig-signature": {
            "subsignature": [
              {
                "public-key": "string",
                "signature": "string"
              }
            ],
            "threshold": 0,
            "version": 0
          },
          "multisig-signature": {
            "subsignature": [
              {
                "public-key": "string",
                "signature": "string"
              }
            ],
            "threshold": 0,
            "version": 0
          },
          "signature": "string"
        },
        "multisig": {
          "subsignature": [
            {
              "public-key": "string",
              "signature": "string"
            }
          ],
          "threshold": 0,
          "version": 0
        },
        "sig": "string"
      },
      "state-proof-transaction": {
        "message": {
          "block-headers-commitment": "string",
          "first-attested-round": 0,
          "latest-attested-round": 0,
          "ln-proven-weight": 0,
          "voters-commitment": "string"
        },
        "state-proof": {
          "part-proofs": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "positions-to-reveal": [
            0
          ],
          "reveals": [
            {
              "participant": {
                "verifier": {
                  "commitment": "string",
                  "key-lifetime": 0
                },
                "weight": 0
              },
              "position": 0,
              "sig-slot": {
                "lower-sig-weight": 0,
                "signature": {
                  "falcon-signature": "string",
                  "merkle-array-index": 0,
                  "proof": {
                    "hash-factory": {},
                    "path": [],
                    "tree-depth": 0
                  },
                  "verifying-key": "string"
                }
              }
            }
          ],
          "salt-version": 0,
          "sig-commit": "string",
          "sig-proofs": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "signed-weight": 0
        },
        "state-proof-type": 0
      },
      "tx-type": "pay"
    }
  ],
  "transactions-root": "string",
  "transactions-root-sha256": "string",
  "transactions-root-sha512": "string",
  "txn-counter": 0,
  "upgrade-state": {
    "current-protocol": "string",
    "next-protocol": "string",
    "next-protocol-approvals": 0,
    "next-protocol-switch-on": 0,
    "next-protocol-vote-before": 0
  },
  "upgrade-vote": {
    "upgrade-approve": true,
    "upgrade-delay": 0,
    "upgrade-propose": "string"
  }
}

```

Block information.

Definition:
data/bookkeeping/block.go : Block

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bonus|integer|false|none|the potential bonus payout for this block.|
|fees-collected|integer|false|none|the sum of all fees paid by transactions in this block.|
|genesis-hash|string(byte)|true|none|\[gh\] hash to which this block belongs.|
|genesis-id|string|true|none|\[gen\] ID to which this block belongs.|
|participation-updates|[ParticipationUpdates](#schemaparticipationupdates)|false|none|Participation account data that needs to be checked/acted on by the network.|
|previous-block-hash|string(byte)|true|none|\[prev\] Previous block hash.|
|previous-block-hash-512|string(byte)|false|none|\[prev512\] Previous block hash, using SHA-512.|
|proposer|string|false|none|the proposer of this block.|
|proposer-payout|integer|false|none|the actual amount transferred to the proposer from the fee sink.|
|rewards|[BlockRewards](#schemablockrewards)|false|none|Fields relating to rewards,|
|round|integer|true|none|\[rnd\] Current round on which this block was appended to the chain.|
|seed|string(byte)|true|none|\[seed\] Sortition seed.|
|state-proof-tracking|[[StateProofTracking](#schemastateprooftracking)]|false|none|Tracks the status of state proofs.|
|timestamp|integer|true|none|\[ts\] Block creation timestamp in seconds since eposh|
|transactions|[[Transaction](#schematransaction)]|false|none|\[txns\] list of transactions corresponding to a given round.|
|transactions-root|string(byte)|true|none|\[txn\] TransactionsRoot authenticates the set of transactions appearing in the block. More specifically, it's the root of a merkle tree whose leaves are the block's Txids, in lexicographic order. For the empty block, it's 0. Note that the TxnRoot does not authenticate the signatures on the transactions, only the transactions themselves. Two blocks with the same transactions but in a different order and with different signatures will have the same TxnRoot.|
|transactions-root-sha256|string(byte)|true|none|\[txn256\] TransactionsRootSHA256 is an auxiliary TransactionRoot, built using a vector commitment instead of a merkle tree, and SHA256 hash function instead of the default SHA512_256. This commitment can be used on environments where only the SHA256 function exists.|
|transactions-root-sha512|string(byte)|false|none|\[txn512\] TransactionsRootSHA512 is an auxiliary TransactionRoot, built using a vector commitment instead of a merkle tree, and SHA512 hash function instead of the default SHA512_256.|
|txn-counter|integer|false|none|\[tc\] TxnCounter counts the number of transactions committed in the ledger, from the time at which support for this feature was introduced.<br><br>Specifically, TxnCounter is the number of the next transaction that will be committed after this block.  It is 0 when no transactions have ever been committed (since TxnCounter started being supported).|
|upgrade-state|[BlockUpgradeState](#schemablockupgradestate)|false|none|Fields relating to a protocol upgrade.|
|upgrade-vote|[BlockUpgradeVote](#schemablockupgradevote)|false|none|Fields relating to voting for a protocol upgrade.|


### BlockRewards
<!-- backwards compatibility -->
<a id="schemablockrewards"></a>
<a id="schema_BlockRewards"></a>
<a id="tocSblockrewards"></a>
<a id="tocsblockrewards"></a>

```json
{
  "fee-sink": "string",
  "rewards-calculation-round": 0,
  "rewards-level": 0,
  "rewards-pool": "string",
  "rewards-rate": 0,
  "rewards-residue": 0
}

```

Fields relating to rewards,

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fee-sink|string|true|none|\[fees\] accepts transaction fees, it can only spend to the incentive pool.|
|rewards-calculation-round|integer|true|none|\[rwcalr\] number of leftover MicroAlgos after the distribution of rewards-rate MicroAlgos for every reward unit in the next round.|
|rewards-level|integer|true|none|\[earn\] How many rewards, in MicroAlgos, have been distributed to each RewardUnit of MicroAlgos since genesis.|
|rewards-pool|string|true|none|\[rwd\] accepts periodic injections from the fee-sink and continually redistributes them as rewards.|
|rewards-rate|integer|true|none|\[rate\] Number of new MicroAlgos added to the participation stake from rewards at the next round.|
|rewards-residue|integer|true|none|\[frac\] Number of leftover MicroAlgos after the distribution of RewardsRate/rewardUnits MicroAlgos for every reward unit in the next round.|


### BlockUpgradeState
<!-- backwards compatibility -->
<a id="schemablockupgradestate"></a>
<a id="schema_BlockUpgradeState"></a>
<a id="tocSblockupgradestate"></a>
<a id="tocsblockupgradestate"></a>

```json
{
  "current-protocol": "string",
  "next-protocol": "string",
  "next-protocol-approvals": 0,
  "next-protocol-switch-on": 0,
  "next-protocol-vote-before": 0
}

```

Fields relating to a protocol upgrade.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current-protocol|string|true|none|\[proto\] The current protocol version.|
|next-protocol|string|false|none|\[nextproto\] The next proposed protocol version.|
|next-protocol-approvals|integer|false|none|\[nextyes\] Number of blocks which approved the protocol upgrade.|
|next-protocol-switch-on|integer|false|none|\[nextswitch\] Round on which the protocol upgrade will take effect.|
|next-protocol-vote-before|integer|false|none|\[nextbefore\] Deadline round for this protocol upgrade (No votes will be consider after this round).|


### BlockUpgradeVote
<!-- backwards compatibility -->
<a id="schemablockupgradevote"></a>
<a id="schema_BlockUpgradeVote"></a>
<a id="tocSblockupgradevote"></a>
<a id="tocsblockupgradevote"></a>

```json
{
  "upgrade-approve": true,
  "upgrade-delay": 0,
  "upgrade-propose": "string"
}

```

Fields relating to voting for a protocol upgrade.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|upgrade-approve|boolean|false|none|\[upgradeyes\] Indicates a yes vote for the current proposal.|
|upgrade-delay|integer|false|none|\[upgradedelay\] Indicates the time between acceptance and execution.|
|upgrade-propose|string|false|none|\[upgradeprop\] Indicates a proposed upgrade.|


### Box
<!-- backwards compatibility -->
<a id="schemabox"></a>
<a id="schema_Box"></a>
<a id="tocSbox"></a>
<a id="tocsbox"></a>

```json
{
  "name": "string",
  "round": 0,
  "value": "string"
}

```

Box name and its content.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string(byte)|true|none|\[name\] box name, base64 encoded|
|round|integer|true|none|The round for which this information is relevant|
|value|string(byte)|true|none|\[value\] box value, base64 encoded.|


### BoxDescriptor
<!-- backwards compatibility -->
<a id="schemaboxdescriptor"></a>
<a id="schema_BoxDescriptor"></a>
<a id="tocSboxdescriptor"></a>
<a id="tocsboxdescriptor"></a>

```json
{
  "name": "string"
}

```

Box descriptor describes an app box without a value.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string(byte)|true|none|Base64 encoded box name|


### BoxReference
<!-- backwards compatibility -->
<a id="schemaboxreference"></a>
<a id="schema_BoxReference"></a>
<a id="tocSboxreference"></a>
<a id="tocsboxreference"></a>

```json
{
  "app": 0,
  "name": "string"
}

```

BoxReference names a box by its name and the application ID it belongs to.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|integer|true|none|Application ID to which the box belongs, or zero if referring to the called application.|
|name|string(byte)|true|none|Base64 encoded box name|


### EvalDelta
<!-- backwards compatibility -->
<a id="schemaevaldelta"></a>
<a id="schema_EvalDelta"></a>
<a id="tocSevaldelta"></a>
<a id="tocsevaldelta"></a>

```json
{
  "action": 0,
  "bytes": "string",
  "uint": 0
}

```

Represents a TEAL value delta.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|integer|true|none|\[at\] delta action.|
|bytes|string|false|none|\[bs\] bytes value.|
|uint|integer|false|none|\[ui\] uint value.|


### EvalDeltaKeyValue
<!-- backwards compatibility -->
<a id="schemaevaldeltakeyvalue"></a>
<a id="schema_EvalDeltaKeyValue"></a>
<a id="tocSevaldeltakeyvalue"></a>
<a id="tocsevaldeltakeyvalue"></a>

```json
{
  "key": "string",
  "value": {
    "action": 0,
    "bytes": "string",
    "uint": 0
  }
}

```

Key-value pairs for StateDelta.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|[EvalDelta](#schemaevaldelta)|true|none|Represents a TEAL value delta.|


### HashFactory
<!-- backwards compatibility -->
<a id="schemahashfactory"></a>
<a id="schema_HashFactory"></a>
<a id="tocShashfactory"></a>
<a id="tocshashfactory"></a>

```json
{
  "hash-type": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash-type|integer|false|none|\[t\]|


### Hashtype
<!-- backwards compatibility -->
<a id="schemahashtype"></a>
<a id="schema_Hashtype"></a>
<a id="tocShashtype"></a>
<a id="tocshashtype"></a>

```json
"sha512_256"

```

The type of hash function used to create the proof, must be one of: 
* sha512_256 
* sha256

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The type of hash function used to create the proof, must be one of: <br>* sha512_256 <br>* sha256|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|sha512_256|
|*anonymous*|sha256|


### HbProofFields
<!-- backwards compatibility -->
<a id="schemahbprooffields"></a>
<a id="schema_HbProofFields"></a>
<a id="tocShbprooffields"></a>
<a id="tocshbprooffields"></a>

```json
{
  "hb-pk": "string",
  "hb-pk1sig": "string",
  "hb-pk2": "string",
  "hb-pk2sig": "string",
  "hb-sig": "string"
}

```

\[hbprf\] HbProof is a signature using HeartbeatAddress's partkey, thereby showing it is online.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hb-pk|string(byte)|false|none|\[p\] Public key of the heartbeat message.|
|hb-pk1sig|string(byte)|false|none|\[p1s\] Signature of OneTimeSignatureSubkeyOffsetID(PK, Batch, Offset) under the key PK2.|
|hb-pk2|string(byte)|false|none|\[p2\] Key for new-style two-level ephemeral signature.|
|hb-pk2sig|string(byte)|false|none|\[p2s\] Signature of OneTimeSignatureSubkeyBatchID(PK2, Batch) under the master key (OneTimeSignatureVerifier).|
|hb-sig|string(byte)|false|none|\[s\] Signature of the heartbeat message.|


### HealthCheck
<!-- backwards compatibility -->
<a id="schemahealthcheck"></a>
<a id="schema_HealthCheck"></a>
<a id="tocShealthcheck"></a>
<a id="tocshealthcheck"></a>

```json
{
  "data": {},
  "db-available": true,
  "errors": [
    "string"
  ],
  "is-migrating": true,
  "message": "string",
  "round": 0,
  "version": "string"
}

```

A health check response.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|db-available|boolean|true|none|none|
|errors|[string]|false|none|none|
|is-migrating|boolean|true|none|none|
|message|string|true|none|none|
|round|integer|true|none|none|
|version|string|true|none|Current version.|


### HoldingRef
<!-- backwards compatibility -->
<a id="schemaholdingref"></a>
<a id="schema_HoldingRef"></a>
<a id="tocSholdingref"></a>
<a id="tocsholdingref"></a>

```json
{
  "address": "string",
  "asset": 0
}

```

HoldingRef names a holding by referring to an Address and Asset it belongs to.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|\[d\] Address in access list, or the sender of the transaction.|
|asset|integer|true|none|\[s\] Asset ID for asset in access list.|


### IndexerStateProofMessage
<!-- backwards compatibility -->
<a id="schemaindexerstateproofmessage"></a>
<a id="schema_IndexerStateProofMessage"></a>
<a id="tocSindexerstateproofmessage"></a>
<a id="tocsindexerstateproofmessage"></a>

```json
{
  "block-headers-commitment": "string",
  "first-attested-round": 0,
  "latest-attested-round": 0,
  "ln-proven-weight": 0,
  "voters-commitment": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block-headers-commitment|string(byte)|false|none|\[b\]|
|first-attested-round|integer|false|none|\[f\]|
|latest-attested-round|integer|false|none|\[l\]|
|ln-proven-weight|integer|false|none|\[P\]|
|voters-commitment|string(byte)|false|none|\[v\]|


### LocalsRef
<!-- backwards compatibility -->
<a id="schemalocalsref"></a>
<a id="schema_LocalsRef"></a>
<a id="tocSlocalsref"></a>
<a id="tocslocalsref"></a>

```json
{
  "address": "string",
  "app": 0
}

```

LocalsRef names a local state by referring to an Address and App it belongs to.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|\[d\] Address in access list, or the sender of the transaction.|
|app|integer|true|none|\[p\] Application ID for app in access list, or zero if referring to the called application.|


### MerkleArrayProof
<!-- backwards compatibility -->
<a id="schemamerklearrayproof"></a>
<a id="schema_MerkleArrayProof"></a>
<a id="tocSmerklearrayproof"></a>
<a id="tocsmerklearrayproof"></a>

```json
{
  "hash-factory": {
    "hash-type": 0
  },
  "path": [
    "string"
  ],
  "tree-depth": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash-factory|[HashFactory](#schemahashfactory)|false|none|none|
|path|[string]|false|none|\[pth\]|
|tree-depth|integer|false|none|\[td\]|


### MiniAssetHolding
<!-- backwards compatibility -->
<a id="schemaminiassetholding"></a>
<a id="schema_MiniAssetHolding"></a>
<a id="tocSminiassetholding"></a>
<a id="tocsminiassetholding"></a>

```json
{
  "address": "string",
  "amount": 0,
  "deleted": true,
  "is-frozen": true,
  "opted-in-at-round": 0,
  "opted-out-at-round": 0
}

```

A simplified version of AssetHolding 

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|none|
|amount|integer|true|none|none|
|deleted|boolean|false|none|Whether or not this asset holding is currently deleted from its account.|
|is-frozen|boolean|true|none|none|
|opted-in-at-round|integer|false|none|Round during which the account opted into the asset.|
|opted-out-at-round|integer|false|none|Round during which the account opted out of the asset.|


### OnCompletion
<!-- backwards compatibility -->
<a id="schemaoncompletion"></a>
<a id="schema_OnCompletion"></a>
<a id="tocSoncompletion"></a>
<a id="tocsoncompletion"></a>

```json
"noop"

```

\[apan\] defines the what additional actions occur with the transaction.

Valid types:
* noop
* optin
* closeout
* clear
* update
* update
* delete

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|\[apan\] defines the what additional actions occur with the transaction.<br><br>Valid types:<br>* noop<br>* optin<br>* closeout<br>* clear<br>* update<br>* update<br>* delete|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|noop|
|*anonymous*|optin|
|*anonymous*|closeout|
|*anonymous*|clear|
|*anonymous*|update|
|*anonymous*|delete|


### ParticipationUpdates
<!-- backwards compatibility -->
<a id="schemaparticipationupdates"></a>
<a id="schema_ParticipationUpdates"></a>
<a id="tocSparticipationupdates"></a>
<a id="tocsparticipationupdates"></a>

```json
{
  "absent-participation-accounts": [
    "string"
  ],
  "expired-participation-accounts": [
    "string"
  ]
}

```

Participation account data that needs to be checked/acted on by the network.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absent-participation-accounts|[string]|false|none|\[partupabs\] a list of online accounts that need to be suspended.|
|expired-participation-accounts|[string]|false|none|\[partupdrmv\] a list of online accounts that needs to be converted to offline since their participation key expired.|


### ResourceRef
<!-- backwards compatibility -->
<a id="schemaresourceref"></a>
<a id="schema_ResourceRef"></a>
<a id="tocSresourceref"></a>
<a id="tocsresourceref"></a>

```json
{
  "address": "string",
  "application-id": 0,
  "asset-id": 0,
  "box": {
    "app": 0,
    "name": "string"
  },
  "holding": {
    "address": "string",
    "asset": 0
  },
  "local": {
    "address": "string",
    "app": 0
  }
}

```

ResourceRef names a single resource. Only one of the fields should be set.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|\[d\] Account whose balance record is accessible by the executing ApprovalProgram or ClearStateProgram.|
|application-id|integer|false|none|\[p\] Application id whose GlobalState may be read by the executing<br> ApprovalProgram or ClearStateProgram.|
|asset-id|integer|false|none|\[s\] Asset whose AssetParams may be read by the executing<br> ApprovalProgram or ClearStateProgram.|
|box|[BoxReference](#schemaboxreference)|false|none|BoxReference names a box by its name and the application ID it belongs to.|
|holding|[HoldingRef](#schemaholdingref)|false|none|HoldingRef names a holding by referring to an Address and Asset it belongs to.|
|local|[LocalsRef](#schemalocalsref)|false|none|LocalsRef names a local state by referring to an Address and App it belongs to.|


### StateDelta
<!-- backwards compatibility -->
<a id="schemastatedelta"></a>
<a id="schema_StateDelta"></a>
<a id="tocSstatedelta"></a>
<a id="tocsstatedelta"></a>

```json
[
  {
    "key": "string",
    "value": {
      "action": 0,
      "bytes": "string",
      "uint": 0
    }
  }
]

```

Application state delta.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|false|none|Application state delta.|


### StateProofFields
<!-- backwards compatibility -->
<a id="schemastateprooffields"></a>
<a id="schema_StateProofFields"></a>
<a id="tocSstateprooffields"></a>
<a id="tocsstateprooffields"></a>

```json
{
  "part-proofs": {
    "hash-factory": {
      "hash-type": 0
    },
    "path": [
      "string"
    ],
    "tree-depth": 0
  },
  "positions-to-reveal": [
    0
  ],
  "reveals": [
    {
      "participant": {
        "verifier": {
          "commitment": "string",
          "key-lifetime": 0
        },
        "weight": 0
      },
      "position": 0,
      "sig-slot": {
        "lower-sig-weight": 0,
        "signature": {
          "falcon-signature": "string",
          "merkle-array-index": 0,
          "proof": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "verifying-key": "string"
        }
      }
    }
  ],
  "salt-version": 0,
  "sig-commit": "string",
  "sig-proofs": {
    "hash-factory": {
      "hash-type": 0
    },
    "path": [
      "string"
    ],
    "tree-depth": 0
  },
  "signed-weight": 0
}

```

\[sp\] represents a state proof.

Definition:
crypto/stateproof/structs.go : StateProof

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|part-proofs|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|positions-to-reveal|[integer]|false|none|\[pr\] Sequence of reveal positions.|
|reveals|[[StateProofReveal](#schemastateproofreveal)]|false|none|\[r\] Note that this is actually stored as a map[uint64] - Reveal in the actual msgp|
|salt-version|integer|false|none|\[v\] Salt version of the merkle signature.|
|sig-commit|string(byte)|false|none|\[c\]|
|sig-proofs|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|signed-weight|integer|false|none|\[w\]|


### StateProofParticipant
<!-- backwards compatibility -->
<a id="schemastateproofparticipant"></a>
<a id="schema_StateProofParticipant"></a>
<a id="tocSstateproofparticipant"></a>
<a id="tocsstateproofparticipant"></a>

```json
{
  "verifier": {
    "commitment": "string",
    "key-lifetime": 0
  },
  "weight": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verifier|[StateProofVerifier](#schemastateproofverifier)|false|none|none|
|weight|integer|false|none|\[w\]|


### StateProofReveal
<!-- backwards compatibility -->
<a id="schemastateproofreveal"></a>
<a id="schema_StateProofReveal"></a>
<a id="tocSstateproofreveal"></a>
<a id="tocsstateproofreveal"></a>

```json
{
  "participant": {
    "verifier": {
      "commitment": "string",
      "key-lifetime": 0
    },
    "weight": 0
  },
  "position": 0,
  "sig-slot": {
    "lower-sig-weight": 0,
    "signature": {
      "falcon-signature": "string",
      "merkle-array-index": 0,
      "proof": {
        "hash-factory": {
          "hash-type": 0
        },
        "path": [
          "string"
        ],
        "tree-depth": 0
      },
      "verifying-key": "string"
    }
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|participant|[StateProofParticipant](#schemastateproofparticipant)|false|none|none|
|position|integer|false|none|The position in the signature and participants arrays corresponding to this entry.|
|sig-slot|[StateProofSigSlot](#schemastateproofsigslot)|false|none|none|


### StateProofSignature
<!-- backwards compatibility -->
<a id="schemastateproofsignature"></a>
<a id="schema_StateProofSignature"></a>
<a id="tocSstateproofsignature"></a>
<a id="tocsstateproofsignature"></a>

```json
{
  "falcon-signature": "string",
  "merkle-array-index": 0,
  "proof": {
    "hash-factory": {
      "hash-type": 0
    },
    "path": [
      "string"
    ],
    "tree-depth": 0
  },
  "verifying-key": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|falcon-signature|string(byte)|false|none|none|
|merkle-array-index|integer|false|none|none|
|proof|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|verifying-key|string(byte)|false|none|\[vkey\]|


### StateProofSigSlot
<!-- backwards compatibility -->
<a id="schemastateproofsigslot"></a>
<a id="schema_StateProofSigSlot"></a>
<a id="tocSstateproofsigslot"></a>
<a id="tocsstateproofsigslot"></a>

```json
{
  "lower-sig-weight": 0,
  "signature": {
    "falcon-signature": "string",
    "merkle-array-index": 0,
    "proof": {
      "hash-factory": {
        "hash-type": 0
      },
      "path": [
        "string"
      ],
      "tree-depth": 0
    },
    "verifying-key": "string"
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lower-sig-weight|integer|false|none|\[l\] The total weight of signatures in the lower-numbered slots.|
|signature|[StateProofSignature](#schemastateproofsignature)|false|none|none|


### StateProofTracking
<!-- backwards compatibility -->
<a id="schemastateprooftracking"></a>
<a id="schema_StateProofTracking"></a>
<a id="tocSstateprooftracking"></a>
<a id="tocsstateprooftracking"></a>

```json
{
  "next-round": 0,
  "online-total-weight": 0,
  "type": 0,
  "voters-commitment": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next-round|integer|false|none|\[n\] Next round for which we will accept a state proof transaction.|
|online-total-weight|integer|false|none|\[t\] The total number of microalgos held by the online accounts during the StateProof round.|
|type|integer|false|none|State Proof Type. Note the raw object uses map with this as key.|
|voters-commitment|string(byte)|false|none|\[v\] Root of a vector commitment containing online accounts that will help sign the proof.|


### StateProofVerifier
<!-- backwards compatibility -->
<a id="schemastateproofverifier"></a>
<a id="schema_StateProofVerifier"></a>
<a id="tocSstateproofverifier"></a>
<a id="tocsstateproofverifier"></a>

```json
{
  "commitment": "string",
  "key-lifetime": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitment|string(byte)|false|none|\[cmt\] Represents the root of the vector commitment tree.|
|key-lifetime|integer|false|none|\[lf\] Key lifetime.|


### StateSchema
<!-- backwards compatibility -->
<a id="schemastateschema"></a>
<a id="schema_StateSchema"></a>
<a id="tocSstateschema"></a>
<a id="tocsstateschema"></a>

```json
{
  "num-byte-slice": 0,
  "num-uint": 0
}

```

Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num-byte-slice|integer|true|none|Maximum number of TEAL byte slices that may be stored in the key/value store.|
|num-uint|integer|true|none|Maximum number of TEAL uints that may be stored in the key/value store.|


### TealKeyValue
<!-- backwards compatibility -->
<a id="schematealkeyvalue"></a>
<a id="schema_TealKeyValue"></a>
<a id="tocStealkeyvalue"></a>
<a id="tocstealkeyvalue"></a>

```json
{
  "key": "string",
  "value": {
    "bytes": "string",
    "type": 0,
    "uint": 0
  }
}

```

Represents a key-value pair in an application store.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|[TealValue](#schematealvalue)|true|none|Represents a TEAL value.|


### TealKeyValueStore
<!-- backwards compatibility -->
<a id="schematealkeyvaluestore"></a>
<a id="schema_TealKeyValueStore"></a>
<a id="tocStealkeyvaluestore"></a>
<a id="tocstealkeyvaluestore"></a>

```json
[
  {
    "key": "string",
    "value": {
      "bytes": "string",
      "type": 0,
      "uint": 0
    }
  }
]

```

Represents a key-value store for use in an application.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TealKeyValue](#schematealkeyvalue)]|false|none|Represents a key-value store for use in an application.|


### TealValue
<!-- backwards compatibility -->
<a id="schematealvalue"></a>
<a id="schema_TealValue"></a>
<a id="tocStealvalue"></a>
<a id="tocstealvalue"></a>

```json
{
  "bytes": "string",
  "type": 0,
  "uint": 0
}

```

Represents a TEAL value.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytes|string|true|none|bytes value.|
|type|integer|true|none|type of the value. Value `1` refers to **bytes**, value `2` refers to **uint**|
|uint|integer|true|none|uint value.|


### Transaction
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "application-transaction": {
    "access": [
      {
        "address": "string",
        "application-id": 0,
        "asset-id": 0,
        "box": {
          "app": 0,
          "name": "string"
        },
        "holding": {
          "address": "string",
          "asset": 0
        },
        "local": {
          "address": "string",
          "app": 0
        }
      }
    ],
    "accounts": [
      "string"
    ],
    "application-args": [
      "string"
    ],
    "application-id": 0,
    "approval-program": "string",
    "box-references": [
      {
        "app": 0,
        "name": "string"
      }
    ],
    "clear-state-program": "string",
    "extra-program-pages": 0,
    "foreign-apps": [
      0
    ],
    "foreign-assets": [
      0
    ],
    "global-state-schema": {
      "num-byte-slice": 0,
      "num-uint": 0
    },
    "local-state-schema": {
      "num-byte-slice": 0,
      "num-uint": 0
    },
    "on-completion": "noop",
    "reject-version": 0
  },
  "asset-config-transaction": {
    "asset-id": 0,
    "params": {
      "clawback": "string",
      "creator": "string",
      "decimals": 19,
      "default-frozen": true,
      "freeze": "string",
      "manager": "string",
      "metadata-hash": "string",
      "name": "string",
      "name-b64": "string",
      "reserve": "string",
      "total": 0,
      "unit-name": "string",
      "unit-name-b64": "string",
      "url": "string",
      "url-b64": "string"
    }
  },
  "asset-freeze-transaction": {
    "address": "string",
    "asset-id": 0,
    "new-freeze-status": true
  },
  "asset-transfer-transaction": {
    "amount": 0,
    "asset-id": 0,
    "close-amount": 0,
    "close-to": "string",
    "receiver": "string",
    "sender": "string"
  },
  "auth-addr": "string",
  "close-rewards": 0,
  "closing-amount": 0,
  "confirmed-round": 0,
  "created-application-index": 0,
  "created-asset-index": 0,
  "fee": 0,
  "first-valid": 0,
  "genesis-hash": "string",
  "genesis-id": "string",
  "global-state-delta": [
    {
      "key": "string",
      "value": {
        "action": 0,
        "bytes": "string",
        "uint": 0
      }
    }
  ],
  "group": "string",
  "heartbeat-transaction": {
    "hb-address": "string",
    "hb-key-dilution": 0,
    "hb-proof": {
      "hb-pk": "string",
      "hb-pk1sig": "string",
      "hb-pk2": "string",
      "hb-pk2sig": "string",
      "hb-sig": "string"
    },
    "hb-seed": "string",
    "hb-vote-id": "string"
  },
  "id": "string",
  "inner-txns": [
    {
      "application-transaction": {
        "access": [
          {
            "address": "string",
            "application-id": 0,
            "asset-id": 0,
            "box": {
              "app": 0,
              "name": "string"
            },
            "holding": {
              "address": "string",
              "asset": 0
            },
            "local": {
              "address": "string",
              "app": 0
            }
          }
        ],
        "accounts": [
          "string"
        ],
        "application-args": [
          "string"
        ],
        "application-id": 0,
        "approval-program": "string",
        "box-references": [
          {
            "app": 0,
            "name": "string"
          }
        ],
        "clear-state-program": "string",
        "extra-program-pages": 0,
        "foreign-apps": [
          0
        ],
        "foreign-assets": [
          0
        ],
        "global-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "local-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "on-completion": "noop",
        "reject-version": 0
      },
      "asset-config-transaction": {
        "asset-id": 0,
        "params": {
          "clawback": "string",
          "creator": "string",
          "decimals": 19,
          "default-frozen": true,
          "freeze": "string",
          "manager": "string",
          "metadata-hash": "string",
          "name": "string",
          "name-b64": "string",
          "reserve": "string",
          "total": 0,
          "unit-name": "string",
          "unit-name-b64": "string",
          "url": "string",
          "url-b64": "string"
        }
      },
      "asset-freeze-transaction": {
        "address": "string",
        "asset-id": 0,
        "new-freeze-status": true
      },
      "asset-transfer-transaction": {
        "amount": 0,
        "asset-id": 0,
        "close-amount": 0,
        "close-to": "string",
        "receiver": "string",
        "sender": "string"
      },
      "auth-addr": "string",
      "close-rewards": 0,
      "closing-amount": 0,
      "confirmed-round": 0,
      "created-application-index": 0,
      "created-asset-index": 0,
      "fee": 0,
      "first-valid": 0,
      "genesis-hash": "string",
      "genesis-id": "string",
      "global-state-delta": [
        {
          "key": "string",
          "value": {
            "action": 0,
            "bytes": "string",
            "uint": 0
          }
        }
      ],
      "group": "string",
      "heartbeat-transaction": {
        "hb-address": "string",
        "hb-key-dilution": 0,
        "hb-proof": {
          "hb-pk": "string",
          "hb-pk1sig": "string",
          "hb-pk2": "string",
          "hb-pk2sig": "string",
          "hb-sig": "string"
        },
        "hb-seed": "string",
        "hb-vote-id": "string"
      },
      "id": "string",
      "inner-txns": [],
      "intra-round-offset": 0,
      "keyreg-transaction": {
        "non-participation": true,
        "selection-participation-key": "string",
        "state-proof-key": "string",
        "vote-first-valid": 0,
        "vote-key-dilution": 0,
        "vote-last-valid": 0,
        "vote-participation-key": "string"
      },
      "last-valid": 0,
      "lease": "string",
      "local-state-delta": [
        {
          "address": "string",
          "delta": [
            {
              "key": "string",
              "value": {
                "action": 0,
                "bytes": "string",
                "uint": 0
              }
            }
          ]
        }
      ],
      "logs": [
        "string"
      ],
      "note": "string",
      "payment-transaction": {
        "amount": 0,
        "close-amount": 0,
        "close-remainder-to": "string",
        "receiver": "string"
      },
      "receiver-rewards": 0,
      "rekey-to": "string",
      "round-time": 0,
      "sender": "string",
      "sender-rewards": 0,
      "signature": {
        "logicsig": {
          "args": [
            "string"
          ],
          "logic": "string",
          "logic-multisig-signature": {
            "subsignature": [
              {
                "public-key": "string",
                "signature": "string"
              }
            ],
            "threshold": 0,
            "version": 0
          },
          "multisig-signature": {
            "subsignature": [
              {
                "public-key": "string",
                "signature": "string"
              }
            ],
            "threshold": 0,
            "version": 0
          },
          "signature": "string"
        },
        "multisig": {
          "subsignature": [
            {
              "public-key": "string",
              "signature": "string"
            }
          ],
          "threshold": 0,
          "version": 0
        },
        "sig": "string"
      },
      "state-proof-transaction": {
        "message": {
          "block-headers-commitment": "string",
          "first-attested-round": 0,
          "latest-attested-round": 0,
          "ln-proven-weight": 0,
          "voters-commitment": "string"
        },
        "state-proof": {
          "part-proofs": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "positions-to-reveal": [
            0
          ],
          "reveals": [
            {
              "participant": {
                "verifier": {
                  "commitment": "string",
                  "key-lifetime": 0
                },
                "weight": 0
              },
              "position": 0,
              "sig-slot": {
                "lower-sig-weight": 0,
                "signature": {
                  "falcon-signature": "string",
                  "merkle-array-index": 0,
                  "proof": {
                    "hash-factory": {},
                    "path": [],
                    "tree-depth": 0
                  },
                  "verifying-key": "string"
                }
              }
            }
          ],
          "salt-version": 0,
          "sig-commit": "string",
          "sig-proofs": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "signed-weight": 0
        },
        "state-proof-type": 0
      },
      "tx-type": "pay"
    }
  ],
  "intra-round-offset": 0,
  "keyreg-transaction": {
    "non-participation": true,
    "selection-participation-key": "string",
    "state-proof-key": "string",
    "vote-first-valid": 0,
    "vote-key-dilution": 0,
    "vote-last-valid": 0,
    "vote-participation-key": "string"
  },
  "last-valid": 0,
  "lease": "string",
  "local-state-delta": [
    {
      "address": "string",
      "delta": [
        {
          "key": "string",
          "value": {
            "action": 0,
            "bytes": "string",
            "uint": 0
          }
        }
      ]
    }
  ],
  "logs": [
    "string"
  ],
  "note": "string",
  "payment-transaction": {
    "amount": 0,
    "close-amount": 0,
    "close-remainder-to": "string",
    "receiver": "string"
  },
  "receiver-rewards": 0,
  "rekey-to": "string",
  "round-time": 0,
  "sender": "string",
  "sender-rewards": 0,
  "signature": {
    "logicsig": {
      "args": [
        "string"
      ],
      "logic": "string",
      "logic-multisig-signature": {
        "subsignature": [
          {
            "public-key": "string",
            "signature": "string"
          }
        ],
        "threshold": 0,
        "version": 0
      },
      "multisig-signature": {
        "subsignature": [
          {
            "public-key": "string",
            "signature": "string"
          }
        ],
        "threshold": 0,
        "version": 0
      },
      "signature": "string"
    },
    "multisig": {
      "subsignature": [
        {
          "public-key": "string",
          "signature": "string"
        }
      ],
      "threshold": 0,
      "version": 0
    },
    "sig": "string"
  },
  "state-proof-transaction": {
    "message": {
      "block-headers-commitment": "string",
      "first-attested-round": 0,
      "latest-attested-round": 0,
      "ln-proven-weight": 0,
      "voters-commitment": "string"
    },
    "state-proof": {
      "part-proofs": {
        "hash-factory": {
          "hash-type": 0
        },
        "path": [
          "string"
        ],
        "tree-depth": 0
      },
      "positions-to-reveal": [
        0
      ],
      "reveals": [
        {
          "participant": {
            "verifier": {
              "commitment": "string",
              "key-lifetime": 0
            },
            "weight": 0
          },
          "position": 0,
          "sig-slot": {
            "lower-sig-weight": 0,
            "signature": {
              "falcon-signature": "string",
              "merkle-array-index": 0,
              "proof": {
                "hash-factory": {
                  "hash-type": 0
                },
                "path": [
                  "string"
                ],
                "tree-depth": 0
              },
              "verifying-key": "string"
            }
          }
        }
      ],
      "salt-version": 0,
      "sig-commit": "string",
      "sig-proofs": {
        "hash-factory": {
          "hash-type": 0
        },
        "path": [
          "string"
        ],
        "tree-depth": 0
      },
      "signed-weight": 0
    },
    "state-proof-type": 0
  },
  "tx-type": "pay"
}

```

Contains all fields common to all transactions and serves as an envelope to all transactions type. Represents both regular and inner transactions.

Definition:
data/transactions/signedtxn.go : SignedTxn
data/transactions/transaction.go : Transaction

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application-transaction|[TransactionApplication](#schematransactionapplication)|false|none|Fields for application transactions.<br><br>Definition:<br>data/transactions/application.go : ApplicationCallTxnFields|
|asset-config-transaction|[TransactionAssetConfig](#schematransactionassetconfig)|false|none|Fields for asset allocation, re-configuration, and destruction.<br><br><br>A zero value for asset-id indicates asset creation.<br>A zero value for the params indicates asset destruction.<br><br>Definition:<br>data/transactions/asset.go : AssetConfigTxnFields|
|asset-freeze-transaction|[TransactionAssetFreeze](#schematransactionassetfreeze)|false|none|Fields for an asset freeze transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetFreezeTxnFields|
|asset-transfer-transaction|[TransactionAssetTransfer](#schematransactionassettransfer)|false|none|Fields for an asset transfer transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetTransferTxnFields|
|auth-addr|string|false|none|\[sgnr\] this is included with signed transactions when the signing address does not equal the sender. The backend can use this to ensure that auth addr is equal to the accounts auth addr.|
|close-rewards|integer|false|none|\[rc\] rewards applied to close-remainder-to account.|
|closing-amount|integer|false|none|\[ca\] closing amount for transaction.|
|confirmed-round|integer|false|none|Round when the transaction was confirmed.|
|created-application-index|integer|false|none|Specifies an application index (ID) if an application was created with this transaction.|
|created-asset-index|integer|false|none|Specifies an asset index (ID) if an asset was created with this transaction.|
|fee|integer|true|none|\[fee\] Transaction fee.|
|first-valid|integer|true|none|\[fv\] First valid round for this transaction.|
|genesis-hash|string(byte)|false|none|\[gh\] Hash of genesis block.|
|genesis-id|string|false|none|\[gen\] genesis block ID.|
|global-state-delta|[StateDelta](#schemastatedelta)|false|none|Application state delta.|
|group|string(byte)|false|none|\[grp\] Base64 encoded byte array of a sha512/256 digest. When present indicates that this transaction is part of a transaction group and the value is the sha512/256 hash of the transactions in that group.|
|heartbeat-transaction|[TransactionHeartbeat](#schematransactionheartbeat)|false|none|Fields for a heartbeat transaction.<br><br>Definition:<br>data/transactions/heartbeat.go : HeartbeatTxnFields|
|id|string|false|none|Transaction ID|
|inner-txns|[[Transaction](#schematransaction)]|false|none|Inner transactions produced by application execution.|
|intra-round-offset|integer|false|none|Offset into the round where this transaction was confirmed.|
|keyreg-transaction|[TransactionKeyreg](#schematransactionkeyreg)|false|none|Fields for a keyreg transaction.<br><br>Definition:<br>data/transactions/keyreg.go : KeyregTxnFields|
|last-valid|integer|true|none|\[lv\] Last valid round for this transaction.|
|lease|string(byte)|false|none|\[lx\] Base64 encoded 32-byte array. Lease enforces mutual exclusion of transactions.  If this field is nonzero, then once the transaction is confirmed, it acquires the lease identified by the (Sender, Lease) pair of the transaction until the LastValid round passes.  While this transaction possesses the lease, no other transaction specifying this lease can be confirmed.|
|local-state-delta|[[AccountStateDelta](#schemaaccountstatedelta)]|false|none|\[ld\] Local state key/value changes for the application being executed by this transaction.|
|logs|[string]|false|none|\[lg\] Logs for the application being executed by this transaction.|
|note|string(byte)|false|none|\[note\] Free form data.|
|payment-transaction|[TransactionPayment](#schematransactionpayment)|false|none|Fields for a payment transaction.<br><br>Definition:<br>data/transactions/payment.go : PaymentTxnFields|
|receiver-rewards|integer|false|none|\[rr\] rewards applied to receiver account.|
|rekey-to|string|false|none|\[rekey\] when included in a valid transaction, the accounts auth addr will be updated with this value and future signatures must be signed with the key represented by this address.|
|round-time|integer|false|none|Time when the block this transaction is in was confirmed.|
|sender|string|true|none|\[snd\] Sender's address.|
|sender-rewards|integer|false|none|\[rs\] rewards applied to sender account.|
|signature|[TransactionSignature](#schematransactionsignature)|false|none|Validation signature associated with some data. Only one of the signatures should be provided.|
|state-proof-transaction|[TransactionStateProof](#schematransactionstateproof)|false|none|Fields for a state proof transaction. <br><br>Definition:<br>data/transactions/stateproof.go : StateProofTxnFields|
|tx-type|string|true|none|\[type\] Indicates what type of transaction this is. Different types have different fields.<br><br>Valid types, and where their fields are stored:<br>* \[pay\] payment-transaction<br>* \[keyreg\] keyreg-transaction<br>* \[acfg\] asset-config-transaction<br>* \[axfer\] asset-transfer-transaction<br>* \[afrz\] asset-freeze-transaction<br>* \[appl\] application-transaction<br>* \[stpf\] state-proof-transaction<br>* \[hb\] heartbeat-transaction|

#### Enumerated Values

|Property|Value|
|---|---|
|tx-type|pay|
|tx-type|keyreg|
|tx-type|acfg|
|tx-type|axfer|
|tx-type|afrz|
|tx-type|appl|
|tx-type|stpf|
|tx-type|hb|


### TransactionApplication
<!-- backwards compatibility -->
<a id="schematransactionapplication"></a>
<a id="schema_TransactionApplication"></a>
<a id="tocStransactionapplication"></a>
<a id="tocstransactionapplication"></a>

```json
{
  "access": [
    {
      "address": "string",
      "application-id": 0,
      "asset-id": 0,
      "box": {
        "app": 0,
        "name": "string"
      },
      "holding": {
        "address": "string",
        "asset": 0
      },
      "local": {
        "address": "string",
        "app": 0
      }
    }
  ],
  "accounts": [
    "string"
  ],
  "application-args": [
    "string"
  ],
  "application-id": 0,
  "approval-program": "string",
  "box-references": [
    {
      "app": 0,
      "name": "string"
    }
  ],
  "clear-state-program": "string",
  "extra-program-pages": 0,
  "foreign-apps": [
    0
  ],
  "foreign-assets": [
    0
  ],
  "global-state-schema": {
    "num-byte-slice": 0,
    "num-uint": 0
  },
  "local-state-schema": {
    "num-byte-slice": 0,
    "num-uint": 0
  },
  "on-completion": "noop",
  "reject-version": 0
}

```

Fields for application transactions.

Definition:
data/transactions/application.go : ApplicationCallTxnFields

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[[ResourceRef](#schemaresourceref)]|false|none|\[al\] Access unifies `accounts`, `foreign-apps`, `foreign-assets`, and `box-references` under a single list. If access is non-empty, these lists must be empty. If access is empty, those lists may be non-empty.|
|accounts|[string]|false|none|\[apat\] List of accounts in addition to the sender that may be accessed from the application's approval-program and clear-state-program.|
|application-args|[string]|false|none|\[apaa\] transaction specific arguments accessed from the application's approval-program and clear-state-program.|
|application-id|integer|true|none|\[apid\] ID of the application being configured or empty if creating.|
|approval-program|string(byte)|false|none|\[apap\] Logic executed for every application transaction, except when on-completion is set to "clear". It can read and write global state for the application, as well as account-specific local state. Approval programs may reject the transaction.|
|box-references|[[BoxReference](#schemaboxreference)]|false|none|\[apbx\] the boxes that can be accessed by this transaction (and others in the same group).|
|clear-state-program|string(byte)|false|none|\[apsu\] Logic executed for application transactions with on-completion set to "clear". It can read and write global state for the application, as well as account-specific local state. Clear state programs cannot reject the transaction.|
|extra-program-pages|integer|false|none|\[epp\] specifies the additional app program len requested in pages.|
|foreign-apps|[integer]|false|none|\[apfa\] Lists the applications in addition to the application-id whose global states may be accessed by this application's approval-program and clear-state-program. The access is read-only.|
|foreign-assets|[integer]|false|none|\[apas\] lists the assets whose parameters may be accessed by this application's ApprovalProgram and ClearStateProgram. The access is read-only.|
|global-state-schema|[StateSchema](#schemastateschema)|false|none|Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.|
|local-state-schema|[StateSchema](#schemastateschema)|false|none|Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.|
|on-completion|[OnCompletion](#schemaoncompletion)|true|none|\[apan\] defines the what additional actions occur with the transaction.<br><br>Valid types:<br>* noop<br>* optin<br>* closeout<br>* clear<br>* update<br>* update<br>* delete|
|reject-version|integer|false|none|\[aprv\] the lowest application version for which this transaction should immediately fail. 0 indicates that no version check should be performed.|


### TransactionAssetConfig
<!-- backwards compatibility -->
<a id="schematransactionassetconfig"></a>
<a id="schema_TransactionAssetConfig"></a>
<a id="tocStransactionassetconfig"></a>
<a id="tocstransactionassetconfig"></a>

```json
{
  "asset-id": 0,
  "params": {
    "clawback": "string",
    "creator": "string",
    "decimals": 19,
    "default-frozen": true,
    "freeze": "string",
    "manager": "string",
    "metadata-hash": "string",
    "name": "string",
    "name-b64": "string",
    "reserve": "string",
    "total": 0,
    "unit-name": "string",
    "unit-name-b64": "string",
    "url": "string",
    "url-b64": "string"
  }
}

```

Fields for asset allocation, re-configuration, and destruction.

A zero value for asset-id indicates asset creation.
A zero value for the params indicates asset destruction.

Definition:
data/transactions/asset.go : AssetConfigTxnFields

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset-id|integer|false|none|\[xaid\] ID of the asset being configured or empty if creating.|
|params|[AssetParams](#schemaassetparams)|false|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|


### TransactionAssetFreeze
<!-- backwards compatibility -->
<a id="schematransactionassetfreeze"></a>
<a id="schema_TransactionAssetFreeze"></a>
<a id="tocStransactionassetfreeze"></a>
<a id="tocstransactionassetfreeze"></a>

```json
{
  "address": "string",
  "asset-id": 0,
  "new-freeze-status": true
}

```

Fields for an asset freeze transaction.

Definition:
data/transactions/asset.go : AssetFreezeTxnFields

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|\[fadd\] Address of the account whose asset is being frozen or thawed.|
|asset-id|integer|true|none|\[faid\] ID of the asset being frozen or thawed.|
|new-freeze-status|boolean|true|none|\[afrz\] The new freeze status.|


### TransactionAssetTransfer
<!-- backwards compatibility -->
<a id="schematransactionassettransfer"></a>
<a id="schema_TransactionAssetTransfer"></a>
<a id="tocStransactionassettransfer"></a>
<a id="tocstransactionassettransfer"></a>

```json
{
  "amount": 0,
  "asset-id": 0,
  "close-amount": 0,
  "close-to": "string",
  "receiver": "string",
  "sender": "string"
}

```

Fields for an asset transfer transaction.

Definition:
data/transactions/asset.go : AssetTransferTxnFields

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|true|none|\[aamt\] Amount of asset to transfer. A zero amount transferred to self allocates that asset in the account's Assets map.|
|asset-id|integer|true|none|\[xaid\] ID of the asset being transferred.|
|close-amount|integer|false|none|Number of assets transferred to the close-to account as part of the transaction.|
|close-to|string|false|none|\[aclose\] Indicates that the asset should be removed from the account's Assets map, and specifies where the remaining asset holdings should be transferred.  It's always valid to transfer remaining asset holdings to the creator account.|
|receiver|string|true|none|\[arcv\] Recipient address of the transfer.|
|sender|string|false|none|\[asnd\] The effective sender during a clawback transactions. If this is not a zero value, the real transaction sender must be the Clawback address from the AssetParams.|


### TransactionHeartbeat
<!-- backwards compatibility -->
<a id="schematransactionheartbeat"></a>
<a id="schema_TransactionHeartbeat"></a>
<a id="tocStransactionheartbeat"></a>
<a id="tocstransactionheartbeat"></a>

```json
{
  "hb-address": "string",
  "hb-key-dilution": 0,
  "hb-proof": {
    "hb-pk": "string",
    "hb-pk1sig": "string",
    "hb-pk2": "string",
    "hb-pk2sig": "string",
    "hb-sig": "string"
  },
  "hb-seed": "string",
  "hb-vote-id": "string"
}

```

Fields for a heartbeat transaction.

Definition:
data/transactions/heartbeat.go : HeartbeatTxnFields

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hb-address|string|true|none|\[hbad\] HbAddress is the account this txn is proving onlineness for.|
|hb-key-dilution|integer|true|none|\[hbkd\] HbKeyDilution must match HbAddress account's current KeyDilution.|
|hb-proof|[HbProofFields](#schemahbprooffields)|true|none|\[hbprf\] HbProof is a signature using HeartbeatAddress's partkey, thereby showing it is online.|
|hb-seed|string(byte)|true|none|\[hbsd\] HbSeed must be the block seed for the this transaction's firstValid block.|
|hb-vote-id|string(byte)|true|none|\[hbvid\] HbVoteID must match the HbAddress account's current VoteID.|


### TransactionKeyreg
<!-- backwards compatibility -->
<a id="schematransactionkeyreg"></a>
<a id="schema_TransactionKeyreg"></a>
<a id="tocStransactionkeyreg"></a>
<a id="tocstransactionkeyreg"></a>

```json
{
  "non-participation": true,
  "selection-participation-key": "string",
  "state-proof-key": "string",
  "vote-first-valid": 0,
  "vote-key-dilution": 0,
  "vote-last-valid": 0,
  "vote-participation-key": "string"
}

```

Fields for a keyreg transaction.

Definition:
data/transactions/keyreg.go : KeyregTxnFields

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|non-participation|boolean|false|none|\[nonpart\] Mark the account as participating or non-participating.|
|selection-participation-key|string(byte)|false|none|\[selkey\] Public key used with the Verified Random Function (VRF) result during committee selection.|
|state-proof-key|string(byte)|false|none|\[sprfkey\] State proof key used in key registration transactions.|
|vote-first-valid|integer|false|none|\[votefst\] First round this participation key is valid.|
|vote-key-dilution|integer|false|none|\[votekd\] Number of subkeys in each batch of participation keys.|
|vote-last-valid|integer|false|none|\[votelst\] Last round this participation key is valid.|
|vote-participation-key|string(byte)|false|none|\[votekey\] Participation public key used in key registration transactions.|


### TransactionPayment
<!-- backwards compatibility -->
<a id="schematransactionpayment"></a>
<a id="schema_TransactionPayment"></a>
<a id="tocStransactionpayment"></a>
<a id="tocstransactionpayment"></a>

```json
{
  "amount": 0,
  "close-amount": 0,
  "close-remainder-to": "string",
  "receiver": "string"
}

```

Fields for a payment transaction.

Definition:
data/transactions/payment.go : PaymentTxnFields

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|true|none|\[amt\] number of MicroAlgos intended to be transferred.|
|close-amount|integer|false|none|Number of MicroAlgos that were sent to the close-remainder-to address when closing the sender account.|
|close-remainder-to|string|false|none|\[close\] when set, indicates that the sending account should be closed and all remaining funds be transferred to this address.|
|receiver|string|true|none|\[rcv\] receiver's address.|


### TransactionSignature
<!-- backwards compatibility -->
<a id="schematransactionsignature"></a>
<a id="schema_TransactionSignature"></a>
<a id="tocStransactionsignature"></a>
<a id="tocstransactionsignature"></a>

```json
{
  "logicsig": {
    "args": [
      "string"
    ],
    "logic": "string",
    "logic-multisig-signature": {
      "subsignature": [
        {
          "public-key": "string",
          "signature": "string"
        }
      ],
      "threshold": 0,
      "version": 0
    },
    "multisig-signature": {
      "subsignature": [
        {
          "public-key": "string",
          "signature": "string"
        }
      ],
      "threshold": 0,
      "version": 0
    },
    "signature": "string"
  },
  "multisig": {
    "subsignature": [
      {
        "public-key": "string",
        "signature": "string"
      }
    ],
    "threshold": 0,
    "version": 0
  },
  "sig": "string"
}

```

Validation signature associated with some data. Only one of the signatures should be provided.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logicsig|[TransactionSignatureLogicsig](#schematransactionsignaturelogicsig)|false|none|\[lsig\] Programatic transaction signature.<br><br>Definition:<br>data/transactions/logicsig.go|
|multisig|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|sig|string(byte)|false|none|\[sig\] Standard ed25519 signature.|


### TransactionSignatureLogicsig
<!-- backwards compatibility -->
<a id="schematransactionsignaturelogicsig"></a>
<a id="schema_TransactionSignatureLogicsig"></a>
<a id="tocStransactionsignaturelogicsig"></a>
<a id="tocstransactionsignaturelogicsig"></a>

```json
{
  "args": [
    "string"
  ],
  "logic": "string",
  "logic-multisig-signature": {
    "subsignature": [
      {
        "public-key": "string",
        "signature": "string"
      }
    ],
    "threshold": 0,
    "version": 0
  },
  "multisig-signature": {
    "subsignature": [
      {
        "public-key": "string",
        "signature": "string"
      }
    ],
    "threshold": 0,
    "version": 0
  },
  "signature": "string"
}

```

\[lsig\] Programatic transaction signature.

Definition:
data/transactions/logicsig.go

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|args|[string]|false|none|\[arg\] Logic arguments, base64 encoded.|
|logic|string(byte)|true|none|\[l\] Program signed by a signature or multi signature, or hashed to be the address of ana ccount. Base64 encoded TEAL program.|
|logic-multisig-signature|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|multisig-signature|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|signature|string(byte)|false|none|\[sig\] ed25519 signature.|


### TransactionSignatureMultisig
<!-- backwards compatibility -->
<a id="schematransactionsignaturemultisig"></a>
<a id="schema_TransactionSignatureMultisig"></a>
<a id="tocStransactionsignaturemultisig"></a>
<a id="tocstransactionsignaturemultisig"></a>

```json
{
  "subsignature": [
    {
      "public-key": "string",
      "signature": "string"
    }
  ],
  "threshold": 0,
  "version": 0
}

```

structure holding multiple subsignatures.

Definition:
crypto/multisig.go : MultisigSig

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subsignature|[[TransactionSignatureMultisigSubsignature](#schematransactionsignaturemultisigsubsignature)]|false|none|\[subsig\] holds pairs of public key and signatures.|
|threshold|integer|false|none|\[thr\]|
|version|integer|false|none|\[v\]|


### TransactionSignatureMultisigSubsignature
<!-- backwards compatibility -->
<a id="schematransactionsignaturemultisigsubsignature"></a>
<a id="schema_TransactionSignatureMultisigSubsignature"></a>
<a id="tocStransactionsignaturemultisigsubsignature"></a>
<a id="tocstransactionsignaturemultisigsubsignature"></a>

```json
{
  "public-key": "string",
  "signature": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public-key|string(byte)|false|none|\[pk\]|
|signature|string(byte)|false|none|\[s\]|


### TransactionStateProof
<!-- backwards compatibility -->
<a id="schematransactionstateproof"></a>
<a id="schema_TransactionStateProof"></a>
<a id="tocStransactionstateproof"></a>
<a id="tocstransactionstateproof"></a>

```json
{
  "message": {
    "block-headers-commitment": "string",
    "first-attested-round": 0,
    "latest-attested-round": 0,
    "ln-proven-weight": 0,
    "voters-commitment": "string"
  },
  "state-proof": {
    "part-proofs": {
      "hash-factory": {
        "hash-type": 0
      },
      "path": [
        "string"
      ],
      "tree-depth": 0
    },
    "positions-to-reveal": [
      0
    ],
    "reveals": [
      {
        "participant": {
          "verifier": {
            "commitment": "string",
            "key-lifetime": 0
          },
          "weight": 0
        },
        "position": 0,
        "sig-slot": {
          "lower-sig-weight": 0,
          "signature": {
            "falcon-signature": "string",
            "merkle-array-index": 0,
            "proof": {
              "hash-factory": {
                "hash-type": 0
              },
              "path": [
                "string"
              ],
              "tree-depth": 0
            },
            "verifying-key": "string"
          }
        }
      }
    ],
    "salt-version": 0,
    "sig-commit": "string",
    "sig-proofs": {
      "hash-factory": {
        "hash-type": 0
      },
      "path": [
        "string"
      ],
      "tree-depth": 0
    },
    "signed-weight": 0
  },
  "state-proof-type": 0
}

```

Fields for a state proof transaction. 

Definition:
data/transactions/stateproof.go : StateProofTxnFields

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[IndexerStateProofMessage](#schemaindexerstateproofmessage)|false|none|none|
|state-proof|[StateProofFields](#schemastateprooffields)|false|none|\[sp\] represents a state proof.<br><br>Definition:<br>crypto/stateproof/structs.go : StateProof|
|state-proof-type|integer|false|none|\[sptype\] Type of the state proof. Integer representing an entry defined in protocol/stateproof.go|


## search


### searchForAccounts

<a id="opIdsearchForAccounts"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/accounts \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/accounts HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/accounts',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/accounts',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/accounts', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/accounts', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/accounts");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/accounts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/accounts`

Search for accounts.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset-id|query|integer|false|Asset ID|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|
|currency-greater-than|query|integer|false|Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.|
|include-all|query|boolean|false|Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.|
|exclude|query|array[string]|false|Exclude additional items such as asset holdings, application local data stored for this account, asset parameters created by this account, and application parameters created by this account.|
|currency-less-than|query|integer|false|Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.|
|auth-addr|query|string|false|Include accounts configured to use this spending key.|
|round|query|integer|false|Include results for the specified round. For performance reasons, this parameter may be disabled on some configurations. Using application-id or asset-id filters will return both creator and opt-in accounts. Filtering by include-all will return creator and opt-in accounts for deleted assets and accounts. Non-opt-in managers are not included in the results when asset-id is used.|
|application-id|query|integer|false|Application ID|
|online-only|query|boolean|false|When this is set to true, return only accounts whose participation status is currently online.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exclude|all|
|exclude|assets|
|exclude|created-assets|
|exclude|apps-local-state|
|exclude|created-apps|
|exclude|none|

> Example responses

> 200 Response

```json
{
  "accounts": [
    {
      "address": "string",
      "amount": 0,
      "amount-without-pending-rewards": 0,
      "apps-local-state": [
        {
          "closed-out-at-round": 0,
          "deleted": true,
          "id": 0,
          "key-value": [
            {
              "key": "string",
              "value": {
                "bytes": "string",
                "type": 0,
                "uint": 0
              }
            }
          ],
          "opted-in-at-round": 0,
          "schema": {
            "num-byte-slice": 0,
            "num-uint": 0
          }
        }
      ],
      "apps-total-extra-pages": 0,
      "apps-total-schema": {
        "num-byte-slice": 0,
        "num-uint": 0
      },
      "assets": [
        {
          "amount": 0,
          "asset-id": 0,
          "deleted": true,
          "is-frozen": true,
          "opted-in-at-round": 0,
          "opted-out-at-round": 0
        }
      ],
      "auth-addr": "string",
      "closed-at-round": 0,
      "created-apps": [
        {
          "created-at-round": 0,
          "deleted": true,
          "deleted-at-round": 0,
          "id": 0,
          "params": {
            "approval-program": "string",
            "clear-state-program": "string",
            "creator": "string",
            "extra-program-pages": 0,
            "global-state": [
              {
                "key": "string",
                "value": {
                  "bytes": "string",
                  "type": 0,
                  "uint": 0
                }
              }
            ],
            "global-state-schema": {
              "num-byte-slice": 0,
              "num-uint": 0
            },
            "local-state-schema": {
              "num-byte-slice": 0,
              "num-uint": 0
            },
            "version": 0
          }
        }
      ],
      "created-assets": [
        {
          "created-at-round": 0,
          "deleted": true,
          "destroyed-at-round": 0,
          "index": 0,
          "params": {
            "clawback": "string",
            "creator": "string",
            "decimals": 19,
            "default-frozen": true,
            "freeze": "string",
            "manager": "string",
            "metadata-hash": "string",
            "name": "string",
            "name-b64": "string",
            "reserve": "string",
            "total": 0,
            "unit-name": "string",
            "unit-name-b64": "string",
            "url": "string",
            "url-b64": "string"
          }
        }
      ],
      "created-at-round": 0,
      "deleted": true,
      "incentive-eligible": true,
      "last-heartbeat": 0,
      "last-proposed": 0,
      "min-balance": 0,
      "participation": {
        "selection-participation-key": "string",
        "state-proof-key": "string",
        "vote-first-valid": 0,
        "vote-key-dilution": 0,
        "vote-last-valid": 0,
        "vote-participation-key": "string"
      },
      "pending-rewards": 0,
      "reward-base": 0,
      "rewards": 0,
      "round": 0,
      "sig-type": "sig",
      "status": "string",
      "total-apps-opted-in": 0,
      "total-assets-opted-in": 0,
      "total-box-bytes": 0,
      "total-boxes": 0,
      "total-created-apps": 0,
      "total-created-assets": 0
    }
  ],
  "current-round": 0,
  "next-token": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» accounts|[[Account](#schemaaccount)]|true|none|[Account information at a given round.<br><br>Definition:<br>data/basics/userBalance.go : AccountData<br>]|
|»» address|string|true|none|the account public key|
|»» amount|integer|true|none|total number of MicroAlgos in the account|
|»» amount-without-pending-rewards|integer|true|none|specifies the amount of MicroAlgos in the account, without the pending rewards.|
|»» apps-local-state|[[ApplicationLocalState](#schemaapplicationlocalstate)]|false|none|application local data stored in this account.<br><br>Note the raw object uses `map[int] -> AppLocalState` for this type.|
|»»» closed-out-at-round|integer|false|none|Round when account closed out of the application.|
|»»» deleted|boolean|false|none|Whether or not the application local state is currently deleted from its account.|
|»»» id|integer|true|none|The application which this local state is for.|
|»»» key-value|[[TealKeyValue](#schematealkeyvalue)]|false|none|Represents a key-value store for use in an application.|
|»»»» key|string|true|none|none|
|»»»» value|[TealValue](#schematealvalue)|true|none|Represents a TEAL value.|
|»»»»» bytes|string|true|none|bytes value.|
|»»»»» type|integer|true|none|type of the value. Value `1` refers to **bytes**, value `2` refers to **uint**|
|»»»»» uint|integer|true|none|uint value.|
|»»» opted-in-at-round|integer|false|none|Round when the account opted into the application.|
|»»» schema|[ApplicationStateSchema](#schemaapplicationstateschema)|true|none|Specifies maximums on the number of each type that may be stored.|
|»»»» num-byte-slice|integer|true|none|number of byte slices.|
|»»»» num-uint|integer|true|none|number of uints.|
|»» apps-total-extra-pages|integer|false|none|the sum of all extra application program pages for this account.|
|»» apps-total-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»» assets|[[AssetHolding](#schemaassetholding)]|false|none|assets held by this account.<br><br>Note the raw object uses `map[int] -> AssetHolding` for this type.|
|»»» amount|integer|true|none|number of units held.|
|»»» asset-id|integer|true|none|Asset ID of the holding.|
|»»» deleted|boolean|false|none|Whether or not the asset holding is currently deleted from its account.|
|»»» is-frozen|boolean|true|none|whether or not the holding is frozen.|
|»»» opted-in-at-round|integer|false|none|Round during which the account opted into this asset holding.|
|»»» opted-out-at-round|integer|false|none|Round during which the account opted out of this asset holding.|
|»» auth-addr|string|false|none|The address against which signing should be checked. If empty, the address of the current account is used. This field can be updated in any transaction by setting the RekeyTo field.|
|»» closed-at-round|integer|false|none|Round during which this account was most recently closed.|
|»» created-apps|[[Application](#schemaapplication)]|false|none|parameters of applications created by this account including app global data.<br><br>Note: the raw account uses `map[int] -> AppParams` for this type.|
|»»» created-at-round|integer|false|none|Round when this application was created.|
|»»» deleted|boolean|false|none|Whether or not this application is currently deleted.|
|»»» deleted-at-round|integer|false|none|Round when this application was deleted.|
|»»» id|integer|true|none|application index.|
|»»» params|[ApplicationParams](#schemaapplicationparams)|true|none|Stores the global information associated with an application.|
|»»»» approval-program|string(byte)|true|none|approval program.|
|»»»» clear-state-program|string(byte)|true|none|clear state program.|
|»»»» creator|string|false|none|The address that created this application. This is the address where the parameters and global state for this application can be found.|
|»»»» extra-program-pages|integer|false|none|the number of extra program pages available to this app.|
|»»»» global-state|[[TealKeyValue](#schematealkeyvalue)]|false|none|Represents a key-value store for use in an application.|
|»»»» global-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»»»» local-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»»»» version|integer|false|none|the number of updates to the application programs|
|»» created-assets|[[Asset](#schemaasset)]|false|none|parameters of assets created by this account.<br><br>Note: the raw account uses `map[int] -> Asset` for this type.|
|»»» created-at-round|integer|false|none|Round during which this asset was created.|
|»»» deleted|boolean|false|none|Whether or not this asset is currently deleted.|
|»»» destroyed-at-round|integer|false|none|Round during which this asset was destroyed.|
|»»» index|integer|true|none|unique asset identifier|
|»»» params|[AssetParams](#schemaassetparams)|true|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|
|»»»» clawback|string|false|none|Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|»»»» creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|»»»» decimals|integer|true|none|The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|»»»» default-frozen|boolean|false|none|Whether holdings of this asset are frozen by default.|
|»»»» freeze|string|false|none|Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|»»»» manager|string|false|none|Address of account used to manage the keys of this asset and to destroy it.|
|»»»» metadata-hash|string(byte)|false|none|A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|»»»» name|string|false|none|Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|»»»» name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|»»»» reserve|string|false|none|Address of account holding reserve (non-minted) units of this asset.|
|»»»» total|integer|true|none|The total number of units of this asset.|
|»»»» unit-name|string|false|none|Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|»»»» unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|»»»» url|string|false|none|URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|»»»» url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|
|»» created-at-round|integer|false|none|Round during which this account first appeared in a transaction.|
|»» deleted|boolean|false|none|Whether or not this account is currently closed.|
|»» incentive-eligible|boolean|false|none|can the account receive block incentives if its balance is in range at proposal time.|
|»» last-heartbeat|integer|false|none|The round in which this account last went online, or explicitly renewed their online status.|
|»» last-proposed|integer|false|none|The round in which this account last proposed the block.|
|»» min-balance|integer|true|none|MicroAlgo balance required by the account.<br><br>The requirement grows based on asset and application usage.|
|»» participation|[AccountParticipation](#schemaaccountparticipation)|false|none|AccountParticipation describes the parameters used by this account in consensus protocol.|
|»»» selection-participation-key|string(byte)|true|none|Selection public key (if any) currently registered for this round.|
|»»» state-proof-key|string(byte)|false|none|Root of the state proof key (if any)|
|»»» vote-first-valid|integer|true|none|First round for which this participation is valid.|
|»»» vote-key-dilution|integer|true|none|Number of subkeys in each batch of participation keys.|
|»»» vote-last-valid|integer|true|none|Last round for which this participation is valid.|
|»»» vote-participation-key|string(byte)|true|none|root participation public key (if any) currently registered for this round.|
|»» pending-rewards|integer|true|none|amount of MicroAlgos of pending rewards in this account.|
|»» reward-base|integer|false|none|used as part of the rewards computation. Only applicable to accounts which are participating.|
|»» rewards|integer|true|none|total rewards of MicroAlgos the account has received, including pending rewards.|
|»» round|integer|true|none|The round for which this information is relevant.|
|»» sig-type|string|false|none|the type of signature used by this account, must be one of:<br>* sig<br>* msig<br>* lsig<br>* or null if unknown|
|»» status|string|true|none|voting status of the account's MicroAlgos<br>* Offline - indicates that the associated account is delegated.<br>*  Online  - indicates that the associated account used as part of the delegation pool.<br>*   NotParticipating - indicates that the associated account is neither a delegator nor a delegate.|
|»» total-apps-opted-in|integer|true|none|The count of all applications that have been opted in, equivalent to the count of application local data (AppLocalState objects) stored in this account.|
|»» total-assets-opted-in|integer|true|none|The count of all assets that have been opted in, equivalent to the count of AssetHolding objects held by this account.|
|»» total-box-bytes|integer|true|none|For app-accounts only. The total number of bytes allocated for the keys and values of boxes which belong to the associated application.|
|»» total-boxes|integer|true|none|For app-accounts only. The total number of boxes which belong to the associated application.|
|»» total-created-apps|integer|true|none|The count of all apps (AppParams objects) created by this account.|
|»» total-created-assets|integer|true|none|The count of all assets (AssetParams objects) created by this account.|
|» current-round|integer|true|none|Round at which the results were computed.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|

#### Enumerated Values

|Property|Value|
|---|---|
|sig-type|sig|
|sig-type|msig|
|sig-type|lsig|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### searchForApplicationBoxes

<a id="opIdsearchForApplicationBoxes"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/applications/{application-id}/boxes \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/applications/{application-id}/boxes HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/applications/{application-id}/boxes',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/applications/{application-id}/boxes',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/applications/{application-id}/boxes', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/applications/{application-id}/boxes', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/applications/{application-id}/boxes");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/applications/{application-id}/boxes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/applications/{application-id}/boxes`

*Get box names for a given application.*

Given an application ID, returns the box names of that application sorted lexicographically.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application-id|path|integer|true|none|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|

> Example responses

> 200 Response

```json
{
  "application-id": 0,
  "boxes": [
    {
      "name": "string"
    }
  ],
  "next-token": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Box names of an application|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» application-id|integer|true|none|\[appidx\] application index.|
|» boxes|[[BoxDescriptor](#schemaboxdescriptor)]|true|none|[Box descriptor describes an app box without a value.]|
|»» name|string(byte)|true|none|Base64 encoded box name|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### searchForApplications

<a id="opIdsearchForApplications"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/applications \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/applications HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/applications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/applications',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/applications', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/applications', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/applications");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/applications", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/applications`

Search for applications

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application-id|query|integer|false|Application ID|
|creator|query|string|false|Filter just applications with the given creator address.|
|include-all|query|boolean|false|Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|

> Example responses

> 200 Response

```json
{
  "applications": [
    {
      "created-at-round": 0,
      "deleted": true,
      "deleted-at-round": 0,
      "id": 0,
      "params": {
        "approval-program": "string",
        "clear-state-program": "string",
        "creator": "string",
        "extra-program-pages": 0,
        "global-state": [
          {
            "key": "string",
            "value": {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          }
        ],
        "global-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "local-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "version": 0
      }
    }
  ],
  "current-round": 0,
  "next-token": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» applications|[[Application](#schemaapplication)]|true|none|[Application index and its parameters]|
|»» created-at-round|integer|false|none|Round when this application was created.|
|»» deleted|boolean|false|none|Whether or not this application is currently deleted.|
|»» deleted-at-round|integer|false|none|Round when this application was deleted.|
|»» id|integer|true|none|application index.|
|»» params|[ApplicationParams](#schemaapplicationparams)|true|none|Stores the global information associated with an application.|
|»»» approval-program|string(byte)|true|none|approval program.|
|»»» clear-state-program|string(byte)|true|none|clear state program.|
|»»» creator|string|false|none|The address that created this application. This is the address where the parameters and global state for this application can be found.|
|»»» extra-program-pages|integer|false|none|the number of extra program pages available to this app.|
|»»» global-state|[[TealKeyValue](#schematealkeyvalue)]|false|none|Represents a key-value store for use in an application.|
|»»»» key|string|true|none|none|
|»»»» value|[TealValue](#schematealvalue)|true|none|Represents a TEAL value.|
|»»»»» bytes|string|true|none|bytes value.|
|»»»»» type|integer|true|none|type of the value. Value `1` refers to **bytes**, value `2` refers to **uint**|
|»»»»» uint|integer|true|none|uint value.|
|»»» global-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»»»» num-byte-slice|integer|true|none|number of byte slices.|
|»»»» num-uint|integer|true|none|number of uints.|
|»»» local-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»»» version|integer|false|none|the number of updates to the application programs|
|» current-round|integer|true|none|Round at which the results were computed.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### searchForAssets

<a id="opIdsearchForAssets"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/assets \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/assets HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/assets',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/assets',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/assets', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/assets', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/assets");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/assets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/assets`

Search for assets.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include-all|query|boolean|false|Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|
|creator|query|string|false|Filter just assets with the given creator address.|
|name|query|string|false|Filter just assets with the given name.|
|unit|query|string|false|Filter just assets with the given unit.|
|asset-id|query|integer|false|Asset ID|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "created-at-round": 0,
      "deleted": true,
      "destroyed-at-round": 0,
      "index": 0,
      "params": {
        "clawback": "string",
        "creator": "string",
        "decimals": 19,
        "default-frozen": true,
        "freeze": "string",
        "manager": "string",
        "metadata-hash": "string",
        "name": "string",
        "name-b64": "string",
        "reserve": "string",
        "total": 0,
        "unit-name": "string",
        "unit-name-b64": "string",
        "url": "string",
        "url-b64": "string"
      }
    }
  ],
  "current-round": 0,
  "next-token": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» assets|[[Asset](#schemaasset)]|true|none|[Specifies both the unique identifier and the parameters for an asset]|
|»» created-at-round|integer|false|none|Round during which this asset was created.|
|»» deleted|boolean|false|none|Whether or not this asset is currently deleted.|
|»» destroyed-at-round|integer|false|none|Round during which this asset was destroyed.|
|»» index|integer|true|none|unique asset identifier|
|»» params|[AssetParams](#schemaassetparams)|true|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|
|»»» clawback|string|false|none|Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|»»» creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|»»» decimals|integer|true|none|The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|»»» default-frozen|boolean|false|none|Whether holdings of this asset are frozen by default.|
|»»» freeze|string|false|none|Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|»»» manager|string|false|none|Address of account used to manage the keys of this asset and to destroy it.|
|»»» metadata-hash|string(byte)|false|none|A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|»»» name|string|false|none|Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|»»» name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|»»» reserve|string|false|none|Address of account holding reserve (non-minted) units of this asset.|
|»»» total|integer|true|none|The total number of units of this asset.|
|»»» unit-name|string|false|none|Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|»»» unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|»»» url|string|false|none|URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|»»» url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|
|» current-round|integer|true|none|Round at which the results were computed.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### searchForBlockHeaders

<a id="opIdsearchForBlockHeaders"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/block-headers \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/block-headers HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/block-headers',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/block-headers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/block-headers', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/block-headers', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/block-headers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/block-headers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/block-headers`

Search for block headers. Block headers are returned in ascending round order. Transactions are not included in the output.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|
|min-round|query|integer|false|Include results at or after the specified min-round.|
|max-round|query|integer|false|Include results at or before the specified max-round.|
|before-time|query|string(date-time)|false|Include results before the given time. Must be an RFC 3339 formatted string.|
|after-time|query|string(date-time)|false|Include results after the given time. Must be an RFC 3339 formatted string.|
|proposers|query|array[string]|false|Accounts marked as proposer in the block header's participation updates. This parameter accepts a comma separated list of addresses.|
|expired|query|array[string]|false|Accounts marked as expired in the block header's participation updates. This parameter accepts a comma separated list of addresses.|
|absent|query|array[string]|false|Accounts marked as absent in the block header's participation updates. This parameter accepts a comma separated list of addresses.|

> Example responses

> 200 Response

```json
{
  "blocks": [
    {
      "bonus": 0,
      "fees-collected": 0,
      "genesis-hash": "string",
      "genesis-id": "string",
      "participation-updates": {
        "absent-participation-accounts": [
          "string"
        ],
        "expired-participation-accounts": [
          "string"
        ]
      },
      "previous-block-hash": "string",
      "previous-block-hash-512": "string",
      "proposer": "string",
      "proposer-payout": 0,
      "rewards": {
        "fee-sink": "string",
        "rewards-calculation-round": 0,
        "rewards-level": 0,
        "rewards-pool": "string",
        "rewards-rate": 0,
        "rewards-residue": 0
      },
      "round": 0,
      "seed": "string",
      "state-proof-tracking": [
        {
          "next-round": 0,
          "online-total-weight": 0,
          "type": 0,
          "voters-commitment": "string"
        }
      ],
      "timestamp": 0,
      "transactions": [
        {
          "application-transaction": {
            "access": [
              {
                "address": "string",
                "application-id": 0,
                "asset-id": 0,
                "box": {
                  "app": 0,
                  "name": "string"
                },
                "holding": {
                  "address": "string",
                  "asset": 0
                },
                "local": {
                  "address": "string",
                  "app": 0
                }
              }
            ],
            "accounts": [
              "string"
            ],
            "application-args": [
              "string"
            ],
            "application-id": 0,
            "approval-program": "string",
            "box-references": [
              {
                "app": 0,
                "name": "string"
              }
            ],
            "clear-state-program": "string",
            "extra-program-pages": 0,
            "foreign-apps": [
              0
            ],
            "foreign-assets": [
              0
            ],
            "global-state-schema": {
              "num-byte-slice": 0,
              "num-uint": 0
            },
            "local-state-schema": {
              "num-byte-slice": 0,
              "num-uint": 0
            },
            "on-completion": "noop",
            "reject-version": 0
          },
          "asset-config-transaction": {
            "asset-id": 0,
            "params": {
              "clawback": "string",
              "creator": "string",
              "decimals": 19,
              "default-frozen": true,
              "freeze": "string",
              "manager": "string",
              "metadata-hash": "string",
              "name": "string",
              "name-b64": "string",
              "reserve": "string",
              "total": 0,
              "unit-name": "string",
              "unit-name-b64": "string",
              "url": "string",
              "url-b64": "string"
            }
          },
          "asset-freeze-transaction": {
            "address": "string",
            "asset-id": 0,
            "new-freeze-status": true
          },
          "asset-transfer-transaction": {
            "amount": 0,
            "asset-id": 0,
            "close-amount": 0,
            "close-to": "string",
            "receiver": "string",
            "sender": "string"
          },
          "auth-addr": "string",
          "close-rewards": 0,
          "closing-amount": 0,
          "confirmed-round": 0,
          "created-application-index": 0,
          "created-asset-index": 0,
          "fee": 0,
          "first-valid": 0,
          "genesis-hash": "string",
          "genesis-id": "string",
          "global-state-delta": [
            {
              "key": "string",
              "value": {
                "action": 0,
                "bytes": "string",
                "uint": 0
              }
            }
          ],
          "group": "string",
          "heartbeat-transaction": {
            "hb-address": "string",
            "hb-key-dilution": 0,
            "hb-proof": {
              "hb-pk": "string",
              "hb-pk1sig": "string",
              "hb-pk2": "string",
              "hb-pk2sig": "string",
              "hb-sig": "string"
            },
            "hb-seed": "string",
            "hb-vote-id": "string"
          },
          "id": "string",
          "inner-txns": [
            {}
          ],
          "intra-round-offset": 0,
          "keyreg-transaction": {
            "non-participation": true,
            "selection-participation-key": "string",
            "state-proof-key": "string",
            "vote-first-valid": 0,
            "vote-key-dilution": 0,
            "vote-last-valid": 0,
            "vote-participation-key": "string"
          },
          "last-valid": 0,
          "lease": "string",
          "local-state-delta": [
            {
              "address": "string",
              "delta": [
                {
                  "key": "string",
                  "value": {
                    "action": 0,
                    "bytes": "string",
                    "uint": 0
                  }
                }
              ]
            }
          ],
          "logs": [
            "string"
          ],
          "note": "string",
          "payment-transaction": {
            "amount": 0,
            "close-amount": 0,
            "close-remainder-to": "string",
            "receiver": "string"
          },
          "receiver-rewards": 0,
          "rekey-to": "string",
          "round-time": 0,
          "sender": "string",
          "sender-rewards": 0,
          "signature": {
            "logicsig": {
              "args": [
                "string"
              ],
              "logic": "string",
              "logic-multisig-signature": {
                "subsignature": [
                  {
                    "public-key": "string",
                    "signature": "string"
                  }
                ],
                "threshold": 0,
                "version": 0
              },
              "multisig-signature": {
                "subsignature": [
                  {
                    "public-key": "string",
                    "signature": "string"
                  }
                ],
                "threshold": 0,
                "version": 0
              },
              "signature": "string"
            },
            "multisig": {
              "subsignature": [
                {
                  "public-key": "string",
                  "signature": "string"
                }
              ],
              "threshold": 0,
              "version": 0
            },
            "sig": "string"
          },
          "state-proof-transaction": {
            "message": {
              "block-headers-commitment": "string",
              "first-attested-round": 0,
              "latest-attested-round": 0,
              "ln-proven-weight": 0,
              "voters-commitment": "string"
            },
            "state-proof": {
              "part-proofs": {
                "hash-factory": {
                  "hash-type": 0
                },
                "path": [
                  "string"
                ],
                "tree-depth": 0
              },
              "positions-to-reveal": [
                0
              ],
              "reveals": [
                {
                  "participant": {
                    "verifier": {},
                    "weight": 0
                  },
                  "position": 0,
                  "sig-slot": {
                    "lower-sig-weight": 0,
                    "signature": {}
                  }
                }
              ],
              "salt-version": 0,
              "sig-commit": "string",
              "sig-proofs": {
                "hash-factory": {
                  "hash-type": 0
                },
                "path": [
                  "string"
                ],
                "tree-depth": 0
              },
              "signed-weight": 0
            },
            "state-proof-type": 0
          },
          "tx-type": "pay"
        }
      ],
      "transactions-root": "string",
      "transactions-root-sha256": "string",
      "transactions-root-sha512": "string",
      "txn-counter": 0,
      "upgrade-state": {
        "current-protocol": "string",
        "next-protocol": "string",
        "next-protocol-approvals": 0,
        "next-protocol-switch-on": 0,
        "next-protocol-vote-before": 0
      },
      "upgrade-vote": {
        "upgrade-approve": true,
        "upgrade-delay": 0,
        "upgrade-propose": "string"
      }
    }
  ],
  "current-round": 0,
  "next-token": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» blocks|[[Block](#schemablock)]|true|none|[Block information.<br><br>Definition:<br>data/bookkeeping/block.go : Block]|
|»» bonus|integer|false|none|the potential bonus payout for this block.|
|»» fees-collected|integer|false|none|the sum of all fees paid by transactions in this block.|
|»» genesis-hash|string(byte)|true|none|\[gh\] hash to which this block belongs.|
|»» genesis-id|string|true|none|\[gen\] ID to which this block belongs.|
|»» participation-updates|[ParticipationUpdates](#schemaparticipationupdates)|false|none|Participation account data that needs to be checked/acted on by the network.|
|»»» absent-participation-accounts|[string]|false|none|\[partupabs\] a list of online accounts that need to be suspended.|
|»»» expired-participation-accounts|[string]|false|none|\[partupdrmv\] a list of online accounts that needs to be converted to offline since their participation key expired.|
|»» previous-block-hash|string(byte)|true|none|\[prev\] Previous block hash.|
|»» previous-block-hash-512|string(byte)|false|none|\[prev512\] Previous block hash, using SHA-512.|
|»» proposer|string|false|none|the proposer of this block.|
|»» proposer-payout|integer|false|none|the actual amount transferred to the proposer from the fee sink.|
|»» rewards|[BlockRewards](#schemablockrewards)|false|none|Fields relating to rewards,|
|»»» fee-sink|string|true|none|\[fees\] accepts transaction fees, it can only spend to the incentive pool.|
|»»» rewards-calculation-round|integer|true|none|\[rwcalr\] number of leftover MicroAlgos after the distribution of rewards-rate MicroAlgos for every reward unit in the next round.|
|»»» rewards-level|integer|true|none|\[earn\] How many rewards, in MicroAlgos, have been distributed to each RewardUnit of MicroAlgos since genesis.|
|»»» rewards-pool|string|true|none|\[rwd\] accepts periodic injections from the fee-sink and continually redistributes them as rewards.|
|»»» rewards-rate|integer|true|none|\[rate\] Number of new MicroAlgos added to the participation stake from rewards at the next round.|
|»»» rewards-residue|integer|true|none|\[frac\] Number of leftover MicroAlgos after the distribution of RewardsRate/rewardUnits MicroAlgos for every reward unit in the next round.|
|»» round|integer|true|none|\[rnd\] Current round on which this block was appended to the chain.|
|»» seed|string(byte)|true|none|\[seed\] Sortition seed.|
|»» state-proof-tracking|[[StateProofTracking](#schemastateprooftracking)]|false|none|Tracks the status of state proofs.|
|»»» next-round|integer|false|none|\[n\] Next round for which we will accept a state proof transaction.|
|»»» online-total-weight|integer|false|none|\[t\] The total number of microalgos held by the online accounts during the StateProof round.|
|»»» type|integer|false|none|State Proof Type. Note the raw object uses map with this as key.|
|»»» voters-commitment|string(byte)|false|none|\[v\] Root of a vector commitment containing online accounts that will help sign the proof.|
|»» timestamp|integer|true|none|\[ts\] Block creation timestamp in seconds since eposh|
|»» transactions|[[Transaction](#schematransaction)]|false|none|\[txns\] list of transactions corresponding to a given round.|
|»»» application-transaction|[TransactionApplication](#schematransactionapplication)|false|none|Fields for application transactions.<br><br>Definition:<br>data/transactions/application.go : ApplicationCallTxnFields|
|»»»» access|[[ResourceRef](#schemaresourceref)]|false|none|\[al\] Access unifies `accounts`, `foreign-apps`, `foreign-assets`, and `box-references` under a single list. If access is non-empty, these lists must be empty. If access is empty, those lists may be non-empty.|
|»»»»» address|string|false|none|\[d\] Account whose balance record is accessible by the executing ApprovalProgram or ClearStateProgram.|
|»»»»» application-id|integer|false|none|\[p\] Application id whose GlobalState may be read by the executing<br> ApprovalProgram or ClearStateProgram.|
|»»»»» asset-id|integer|false|none|\[s\] Asset whose AssetParams may be read by the executing<br> ApprovalProgram or ClearStateProgram.|
|»»»»» box|[BoxReference](#schemaboxreference)|false|none|BoxReference names a box by its name and the application ID it belongs to.|
|»»»»»» app|integer|true|none|Application ID to which the box belongs, or zero if referring to the called application.|
|»»»»»» name|string(byte)|true|none|Base64 encoded box name|
|»»»»» holding|[HoldingRef](#schemaholdingref)|false|none|HoldingRef names a holding by referring to an Address and Asset it belongs to.|
|»»»»»» address|string|true|none|\[d\] Address in access list, or the sender of the transaction.|
|»»»»»» asset|integer|true|none|\[s\] Asset ID for asset in access list.|
|»»»»» local|[LocalsRef](#schemalocalsref)|false|none|LocalsRef names a local state by referring to an Address and App it belongs to.|
|»»»»»» address|string|true|none|\[d\] Address in access list, or the sender of the transaction.|
|»»»»»» app|integer|true|none|\[p\] Application ID for app in access list, or zero if referring to the called application.|
|»»»» accounts|[string]|false|none|\[apat\] List of accounts in addition to the sender that may be accessed from the application's approval-program and clear-state-program.|
|»»»» application-args|[string]|false|none|\[apaa\] transaction specific arguments accessed from the application's approval-program and clear-state-program.|
|»»»» application-id|integer|true|none|\[apid\] ID of the application being configured or empty if creating.|
|»»»» approval-program|string(byte)|false|none|\[apap\] Logic executed for every application transaction, except when on-completion is set to "clear". It can read and write global state for the application, as well as account-specific local state. Approval programs may reject the transaction.|
|»»»» box-references|[[BoxReference](#schemaboxreference)]|false|none|\[apbx\] the boxes that can be accessed by this transaction (and others in the same group).|
|»»»» clear-state-program|string(byte)|false|none|\[apsu\] Logic executed for application transactions with on-completion set to "clear". It can read and write global state for the application, as well as account-specific local state. Clear state programs cannot reject the transaction.|
|»»»» extra-program-pages|integer|false|none|\[epp\] specifies the additional app program len requested in pages.|
|»»»» foreign-apps|[integer]|false|none|\[apfa\] Lists the applications in addition to the application-id whose global states may be accessed by this application's approval-program and clear-state-program. The access is read-only.|
|»»»» foreign-assets|[integer]|false|none|\[apas\] lists the assets whose parameters may be accessed by this application's ApprovalProgram and ClearStateProgram. The access is read-only.|
|»»»» global-state-schema|[StateSchema](#schemastateschema)|false|none|Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.|
|»»»»» num-byte-slice|integer|true|none|Maximum number of TEAL byte slices that may be stored in the key/value store.|
|»»»»» num-uint|integer|true|none|Maximum number of TEAL uints that may be stored in the key/value store.|
|»»»» local-state-schema|[StateSchema](#schemastateschema)|false|none|Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.|
|»»»» on-completion|[OnCompletion](#schemaoncompletion)|true|none|\[apan\] defines the what additional actions occur with the transaction.<br><br>Valid types:<br>* noop<br>* optin<br>* closeout<br>* clear<br>* update<br>* update<br>* delete|
|»»»» reject-version|integer|false|none|\[aprv\] the lowest application version for which this transaction should immediately fail. 0 indicates that no version check should be performed.|
|»»» asset-config-transaction|[TransactionAssetConfig](#schematransactionassetconfig)|false|none|Fields for asset allocation, re-configuration, and destruction.<br><br><br>A zero value for asset-id indicates asset creation.<br>A zero value for the params indicates asset destruction.<br><br>Definition:<br>data/transactions/asset.go : AssetConfigTxnFields|
|»»»» asset-id|integer|false|none|\[xaid\] ID of the asset being configured or empty if creating.|
|»»»» params|[AssetParams](#schemaassetparams)|false|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|
|»»»»» clawback|string|false|none|Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|»»»»» creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|»»»»» decimals|integer|true|none|The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|»»»»» default-frozen|boolean|false|none|Whether holdings of this asset are frozen by default.|
|»»»»» freeze|string|false|none|Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|»»»»» manager|string|false|none|Address of account used to manage the keys of this asset and to destroy it.|
|»»»»» metadata-hash|string(byte)|false|none|A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|»»»»» name|string|false|none|Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|»»»»» name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|»»»»» reserve|string|false|none|Address of account holding reserve (non-minted) units of this asset.|
|»»»»» total|integer|true|none|The total number of units of this asset.|
|»»»»» unit-name|string|false|none|Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|»»»»» unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|»»»»» url|string|false|none|URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|»»»»» url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|
|»»» asset-freeze-transaction|[TransactionAssetFreeze](#schematransactionassetfreeze)|false|none|Fields for an asset freeze transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetFreezeTxnFields|
|»»»» address|string|true|none|\[fadd\] Address of the account whose asset is being frozen or thawed.|
|»»»» asset-id|integer|true|none|\[faid\] ID of the asset being frozen or thawed.|
|»»»» new-freeze-status|boolean|true|none|\[afrz\] The new freeze status.|
|»»» asset-transfer-transaction|[TransactionAssetTransfer](#schematransactionassettransfer)|false|none|Fields for an asset transfer transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetTransferTxnFields|
|»»»» amount|integer|true|none|\[aamt\] Amount of asset to transfer. A zero amount transferred to self allocates that asset in the account's Assets map.|
|»»»» asset-id|integer|true|none|\[xaid\] ID of the asset being transferred.|
|»»»» close-amount|integer|false|none|Number of assets transferred to the close-to account as part of the transaction.|
|»»»» close-to|string|false|none|\[aclose\] Indicates that the asset should be removed from the account's Assets map, and specifies where the remaining asset holdings should be transferred.  It's always valid to transfer remaining asset holdings to the creator account.|
|»»»» receiver|string|true|none|\[arcv\] Recipient address of the transfer.|
|»»»» sender|string|false|none|\[asnd\] The effective sender during a clawback transactions. If this is not a zero value, the real transaction sender must be the Clawback address from the AssetParams.|
|»»» auth-addr|string|false|none|\[sgnr\] this is included with signed transactions when the signing address does not equal the sender. The backend can use this to ensure that auth addr is equal to the accounts auth addr.|
|»»» close-rewards|integer|false|none|\[rc\] rewards applied to close-remainder-to account.|
|»»» closing-amount|integer|false|none|\[ca\] closing amount for transaction.|
|»»» confirmed-round|integer|false|none|Round when the transaction was confirmed.|
|»»» created-application-index|integer|false|none|Specifies an application index (ID) if an application was created with this transaction.|
|»»» created-asset-index|integer|false|none|Specifies an asset index (ID) if an asset was created with this transaction.|
|»»» fee|integer|true|none|\[fee\] Transaction fee.|
|»»» first-valid|integer|true|none|\[fv\] First valid round for this transaction.|
|»»» genesis-hash|string(byte)|false|none|\[gh\] Hash of genesis block.|
|»»» genesis-id|string|false|none|\[gen\] genesis block ID.|
|»»» global-state-delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|false|none|Application state delta.|
|»»»» key|string|true|none|none|
|»»»» value|[EvalDelta](#schemaevaldelta)|true|none|Represents a TEAL value delta.|
|»»»»» action|integer|true|none|\[at\] delta action.|
|»»»»» bytes|string|false|none|\[bs\] bytes value.|
|»»»»» uint|integer|false|none|\[ui\] uint value.|
|»»» group|string(byte)|false|none|\[grp\] Base64 encoded byte array of a sha512/256 digest. When present indicates that this transaction is part of a transaction group and the value is the sha512/256 hash of the transactions in that group.|
|»»» heartbeat-transaction|[TransactionHeartbeat](#schematransactionheartbeat)|false|none|Fields for a heartbeat transaction.<br><br>Definition:<br>data/transactions/heartbeat.go : HeartbeatTxnFields|
|»»»» hb-address|string|true|none|\[hbad\] HbAddress is the account this txn is proving onlineness for.|
|»»»» hb-key-dilution|integer|true|none|\[hbkd\] HbKeyDilution must match HbAddress account's current KeyDilution.|
|»»»» hb-proof|[HbProofFields](#schemahbprooffields)|true|none|\[hbprf\] HbProof is a signature using HeartbeatAddress's partkey, thereby showing it is online.|
|»»»»» hb-pk|string(byte)|false|none|\[p\] Public key of the heartbeat message.|
|»»»»» hb-pk1sig|string(byte)|false|none|\[p1s\] Signature of OneTimeSignatureSubkeyOffsetID(PK, Batch, Offset) under the key PK2.|
|»»»»» hb-pk2|string(byte)|false|none|\[p2\] Key for new-style two-level ephemeral signature.|
|»»»»» hb-pk2sig|string(byte)|false|none|\[p2s\] Signature of OneTimeSignatureSubkeyBatchID(PK2, Batch) under the master key (OneTimeSignatureVerifier).|
|»»»»» hb-sig|string(byte)|false|none|\[s\] Signature of the heartbeat message.|
|»»»» hb-seed|string(byte)|true|none|\[hbsd\] HbSeed must be the block seed for the this transaction's firstValid block.|
|»»»» hb-vote-id|string(byte)|true|none|\[hbvid\] HbVoteID must match the HbAddress account's current VoteID.|
|»»» id|string|false|none|Transaction ID|
|»»» inner-txns|[[Transaction](#schematransaction)]|false|none|Inner transactions produced by application execution.|
|»»» intra-round-offset|integer|false|none|Offset into the round where this transaction was confirmed.|
|»»» keyreg-transaction|[TransactionKeyreg](#schematransactionkeyreg)|false|none|Fields for a keyreg transaction.<br><br>Definition:<br>data/transactions/keyreg.go : KeyregTxnFields|
|»»»» non-participation|boolean|false|none|\[nonpart\] Mark the account as participating or non-participating.|
|»»»» selection-participation-key|string(byte)|false|none|\[selkey\] Public key used with the Verified Random Function (VRF) result during committee selection.|
|»»»» state-proof-key|string(byte)|false|none|\[sprfkey\] State proof key used in key registration transactions.|
|»»»» vote-first-valid|integer|false|none|\[votefst\] First round this participation key is valid.|
|»»»» vote-key-dilution|integer|false|none|\[votekd\] Number of subkeys in each batch of participation keys.|
|»»»» vote-last-valid|integer|false|none|\[votelst\] Last round this participation key is valid.|
|»»»» vote-participation-key|string(byte)|false|none|\[votekey\] Participation public key used in key registration transactions.|
|»»» last-valid|integer|true|none|\[lv\] Last valid round for this transaction.|
|»»» lease|string(byte)|false|none|\[lx\] Base64 encoded 32-byte array. Lease enforces mutual exclusion of transactions.  If this field is nonzero, then once the transaction is confirmed, it acquires the lease identified by the (Sender, Lease) pair of the transaction until the LastValid round passes.  While this transaction possesses the lease, no other transaction specifying this lease can be confirmed.|
|»»» local-state-delta|[[AccountStateDelta](#schemaaccountstatedelta)]|false|none|\[ld\] Local state key/value changes for the application being executed by this transaction.|
|»»»» address|string|true|none|none|
|»»»» delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|true|none|Application state delta.|
|»»» logs|[string]|false|none|\[lg\] Logs for the application being executed by this transaction.|
|»»» note|string(byte)|false|none|\[note\] Free form data.|
|»»» payment-transaction|[TransactionPayment](#schematransactionpayment)|false|none|Fields for a payment transaction.<br><br>Definition:<br>data/transactions/payment.go : PaymentTxnFields|
|»»»» amount|integer|true|none|\[amt\] number of MicroAlgos intended to be transferred.|
|»»»» close-amount|integer|false|none|Number of MicroAlgos that were sent to the close-remainder-to address when closing the sender account.|
|»»»» close-remainder-to|string|false|none|\[close\] when set, indicates that the sending account should be closed and all remaining funds be transferred to this address.|
|»»»» receiver|string|true|none|\[rcv\] receiver's address.|
|»»» receiver-rewards|integer|false|none|\[rr\] rewards applied to receiver account.|
|»»» rekey-to|string|false|none|\[rekey\] when included in a valid transaction, the accounts auth addr will be updated with this value and future signatures must be signed with the key represented by this address.|
|»»» round-time|integer|false|none|Time when the block this transaction is in was confirmed.|
|»»» sender|string|true|none|\[snd\] Sender's address.|
|»»» sender-rewards|integer|false|none|\[rs\] rewards applied to sender account.|
|»»» signature|[TransactionSignature](#schematransactionsignature)|false|none|Validation signature associated with some data. Only one of the signatures should be provided.|
|»»»» logicsig|[TransactionSignatureLogicsig](#schematransactionsignaturelogicsig)|false|none|\[lsig\] Programatic transaction signature.<br><br>Definition:<br>data/transactions/logicsig.go|
|»»»»» args|[string]|false|none|\[arg\] Logic arguments, base64 encoded.|
|»»»»» logic|string(byte)|true|none|\[l\] Program signed by a signature or multi signature, or hashed to be the address of ana ccount. Base64 encoded TEAL program.|
|»»»»» logic-multisig-signature|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»»»»» subsignature|[[TransactionSignatureMultisigSubsignature](#schematransactionsignaturemultisigsubsignature)]|false|none|\[subsig\] holds pairs of public key and signatures.|
|»»»»»»» public-key|string(byte)|false|none|\[pk\]|
|»»»»»»» signature|string(byte)|false|none|\[s\]|
|»»»»»» threshold|integer|false|none|\[thr\]|
|»»»»»» version|integer|false|none|\[v\]|
|»»»»» multisig-signature|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»»»» signature|string(byte)|false|none|\[sig\] ed25519 signature.|
|»»»» multisig|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»»» sig|string(byte)|false|none|\[sig\] Standard ed25519 signature.|
|»»» state-proof-transaction|[TransactionStateProof](#schematransactionstateproof)|false|none|Fields for a state proof transaction. <br><br>Definition:<br>data/transactions/stateproof.go : StateProofTxnFields|
|»»»» message|[IndexerStateProofMessage](#schemaindexerstateproofmessage)|false|none|none|
|»»»»» block-headers-commitment|string(byte)|false|none|\[b\]|
|»»»»» first-attested-round|integer|false|none|\[f\]|
|»»»»» latest-attested-round|integer|false|none|\[l\]|
|»»»»» ln-proven-weight|integer|false|none|\[P\]|
|»»»»» voters-commitment|string(byte)|false|none|\[v\]|
|»»»» state-proof|[StateProofFields](#schemastateprooffields)|false|none|\[sp\] represents a state proof.<br><br>Definition:<br>crypto/stateproof/structs.go : StateProof|
|»»»»» part-proofs|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»»»» hash-factory|[HashFactory](#schemahashfactory)|false|none|none|
|»»»»»»» hash-type|integer|false|none|\[t\]|
|»»»»»» path|[string]|false|none|\[pth\]|
|»»»»»» tree-depth|integer|false|none|\[td\]|
|»»»»» positions-to-reveal|[integer]|false|none|\[pr\] Sequence of reveal positions.|
|»»»»» reveals|[[StateProofReveal](#schemastateproofreveal)]|false|none|\[r\] Note that this is actually stored as a map[uint64] - Reveal in the actual msgp|
|»»»»»» participant|[StateProofParticipant](#schemastateproofparticipant)|false|none|none|
|»»»»»»» verifier|[StateProofVerifier](#schemastateproofverifier)|false|none|none|
|»»»»»»»» commitment|string(byte)|false|none|\[cmt\] Represents the root of the vector commitment tree.|
|»»»»»»»» key-lifetime|integer|false|none|\[lf\] Key lifetime.|
|»»»»»»» weight|integer|false|none|\[w\]|
|»»»»»» position|integer|false|none|The position in the signature and participants arrays corresponding to this entry.|
|»»»»»» sig-slot|[StateProofSigSlot](#schemastateproofsigslot)|false|none|none|
|»»»»»»» lower-sig-weight|integer|false|none|\[l\] The total weight of signatures in the lower-numbered slots.|
|»»»»»»» signature|[StateProofSignature](#schemastateproofsignature)|false|none|none|
|»»»»»»»» falcon-signature|string(byte)|false|none|none|
|»»»»»»»» merkle-array-index|integer|false|none|none|
|»»»»»»»» proof|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»»»»»» verifying-key|string(byte)|false|none|\[vkey\]|
|»»»»» salt-version|integer|false|none|\[v\] Salt version of the merkle signature.|
|»»»»» sig-commit|string(byte)|false|none|\[c\]|
|»»»»» sig-proofs|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»»» signed-weight|integer|false|none|\[w\]|
|»»»» state-proof-type|integer|false|none|\[sptype\] Type of the state proof. Integer representing an entry defined in protocol/stateproof.go|
|»»» tx-type|string|true|none|\[type\] Indicates what type of transaction this is. Different types have different fields.<br><br>Valid types, and where their fields are stored:<br>* \[pay\] payment-transaction<br>* \[keyreg\] keyreg-transaction<br>* \[acfg\] asset-config-transaction<br>* \[axfer\] asset-transfer-transaction<br>* \[afrz\] asset-freeze-transaction<br>* \[appl\] application-transaction<br>* \[stpf\] state-proof-transaction<br>* \[hb\] heartbeat-transaction|
|»» transactions-root|string(byte)|true|none|\[txn\] TransactionsRoot authenticates the set of transactions appearing in the block. More specifically, it's the root of a merkle tree whose leaves are the block's Txids, in lexicographic order. For the empty block, it's 0. Note that the TxnRoot does not authenticate the signatures on the transactions, only the transactions themselves. Two blocks with the same transactions but in a different order and with different signatures will have the same TxnRoot.|
|»» transactions-root-sha256|string(byte)|true|none|\[txn256\] TransactionsRootSHA256 is an auxiliary TransactionRoot, built using a vector commitment instead of a merkle tree, and SHA256 hash function instead of the default SHA512_256. This commitment can be used on environments where only the SHA256 function exists.|
|»» transactions-root-sha512|string(byte)|false|none|\[txn512\] TransactionsRootSHA512 is an auxiliary TransactionRoot, built using a vector commitment instead of a merkle tree, and SHA512 hash function instead of the default SHA512_256.|
|»» txn-counter|integer|false|none|\[tc\] TxnCounter counts the number of transactions committed in the ledger, from the time at which support for this feature was introduced.<br><br>Specifically, TxnCounter is the number of the next transaction that will be committed after this block.  It is 0 when no transactions have ever been committed (since TxnCounter started being supported).|
|»» upgrade-state|[BlockUpgradeState](#schemablockupgradestate)|false|none|Fields relating to a protocol upgrade.|
|»»» current-protocol|string|true|none|\[proto\] The current protocol version.|
|»»» next-protocol|string|false|none|\[nextproto\] The next proposed protocol version.|
|»»» next-protocol-approvals|integer|false|none|\[nextyes\] Number of blocks which approved the protocol upgrade.|
|»»» next-protocol-switch-on|integer|false|none|\[nextswitch\] Round on which the protocol upgrade will take effect.|
|»»» next-protocol-vote-before|integer|false|none|\[nextbefore\] Deadline round for this protocol upgrade (No votes will be consider after this round).|
|»» upgrade-vote|[BlockUpgradeVote](#schemablockupgradevote)|false|none|Fields relating to voting for a protocol upgrade.|
|»»» upgrade-approve|boolean|false|none|\[upgradeyes\] Indicates a yes vote for the current proposal.|
|»»» upgrade-delay|integer|false|none|\[upgradedelay\] Indicates the time between acceptance and execution.|
|»»» upgrade-propose|string|false|none|\[upgradeprop\] Indicates a proposed upgrade.|
|» current-round|integer|true|none|Round at which the results were computed.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|

#### Enumerated Values

|Property|Value|
|---|---|
|on-completion|noop|
|on-completion|optin|
|on-completion|closeout|
|on-completion|clear|
|on-completion|update|
|on-completion|delete|
|tx-type|pay|
|tx-type|keyreg|
|tx-type|acfg|
|tx-type|axfer|
|tx-type|afrz|
|tx-type|appl|
|tx-type|stpf|
|tx-type|hb|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>


### searchForTransactions

<a id="opIdsearchForTransactions"></a>

> Code samples

```shell

curl -X GET https://example.com/v2/transactions \
  -H 'Accept: application/json'

```

```http
GET https://example.com/v2/transactions HTTP/1.1
Host: example.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://example.com/v2/transactions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://example.com/v2/transactions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://example.com/v2/transactions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://example.com/v2/transactions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://example.com/v2/transactions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://example.com/v2/transactions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/transactions`

Search for transactions. Transactions are returned oldest to newest unless the address parameter is used, in which case results are returned newest to oldest.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of results to return. There could be additional pages even if the limit is not reached.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|
|note-prefix|query|string|false|Specifies a prefix which must be contained in the note field.|
|tx-type|query|string|false|none|
|sig-type|query|string|false|SigType filters just results using the specified type of signature:|
|group-id|query|string|false|Lookup transactions by group ID. This field must be base64-encoded, and afterwards, base64 characters that are URL-unsafe (i.e. =, /, +) must be URL-encoded|
|txid|query|string|false|Lookup the specific transaction by ID.|
|round|query|integer|false|Include results for the specified round.|
|min-round|query|integer|false|Include results at or after the specified min-round.|
|max-round|query|integer|false|Include results at or before the specified max-round.|
|asset-id|query|integer|false|Asset ID|
|before-time|query|string(date-time)|false|Include results before the given time. Must be an RFC 3339 formatted string.|
|after-time|query|string(date-time)|false|Include results after the given time. Must be an RFC 3339 formatted string.|
|currency-greater-than|query|integer|false|Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.|
|currency-less-than|query|integer|false|Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.|
|address|query|string|false|Only include transactions with this address in one of the transaction fields.|
|address-role|query|string|false|Combine with the address parameter to define what type of address to search for.|
|exclude-close-to|query|boolean|false|Combine with address and address-role parameters to define what type of address to search for. The close to fields are normally treated as a receiver, if you would like to exclude them set this parameter to true.|
|rekey-to|query|boolean|false|Include results which include the rekey-to field.|
|application-id|query|integer|false|Application ID|

#### Detailed descriptions

**sig-type**: SigType filters just results using the specified type of signature:
* sig - Standard
* msig - MultiSig
* lsig - LogicSig

#### Enumerated Values

|Parameter|Value|
|---|---|
|tx-type|pay|
|tx-type|keyreg|
|tx-type|acfg|
|tx-type|axfer|
|tx-type|afrz|
|tx-type|appl|
|tx-type|stpf|
|tx-type|hb|
|sig-type|sig|
|sig-type|msig|
|sig-type|lsig|
|address-role|sender|
|address-role|receiver|
|address-role|freeze-target|

> Example responses

> 200 Response

```json
{
  "current-round": 0,
  "next-token": "string",
  "transactions": [
    {
      "application-transaction": {
        "access": [
          {
            "address": "string",
            "application-id": 0,
            "asset-id": 0,
            "box": {
              "app": 0,
              "name": "string"
            },
            "holding": {
              "address": "string",
              "asset": 0
            },
            "local": {
              "address": "string",
              "app": 0
            }
          }
        ],
        "accounts": [
          "string"
        ],
        "application-args": [
          "string"
        ],
        "application-id": 0,
        "approval-program": "string",
        "box-references": [
          {
            "app": 0,
            "name": "string"
          }
        ],
        "clear-state-program": "string",
        "extra-program-pages": 0,
        "foreign-apps": [
          0
        ],
        "foreign-assets": [
          0
        ],
        "global-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "local-state-schema": {
          "num-byte-slice": 0,
          "num-uint": 0
        },
        "on-completion": "noop",
        "reject-version": 0
      },
      "asset-config-transaction": {
        "asset-id": 0,
        "params": {
          "clawback": "string",
          "creator": "string",
          "decimals": 19,
          "default-frozen": true,
          "freeze": "string",
          "manager": "string",
          "metadata-hash": "string",
          "name": "string",
          "name-b64": "string",
          "reserve": "string",
          "total": 0,
          "unit-name": "string",
          "unit-name-b64": "string",
          "url": "string",
          "url-b64": "string"
        }
      },
      "asset-freeze-transaction": {
        "address": "string",
        "asset-id": 0,
        "new-freeze-status": true
      },
      "asset-transfer-transaction": {
        "amount": 0,
        "asset-id": 0,
        "close-amount": 0,
        "close-to": "string",
        "receiver": "string",
        "sender": "string"
      },
      "auth-addr": "string",
      "close-rewards": 0,
      "closing-amount": 0,
      "confirmed-round": 0,
      "created-application-index": 0,
      "created-asset-index": 0,
      "fee": 0,
      "first-valid": 0,
      "genesis-hash": "string",
      "genesis-id": "string",
      "global-state-delta": [
        {
          "key": "string",
          "value": {
            "action": 0,
            "bytes": "string",
            "uint": 0
          }
        }
      ],
      "group": "string",
      "heartbeat-transaction": {
        "hb-address": "string",
        "hb-key-dilution": 0,
        "hb-proof": {
          "hb-pk": "string",
          "hb-pk1sig": "string",
          "hb-pk2": "string",
          "hb-pk2sig": "string",
          "hb-sig": "string"
        },
        "hb-seed": "string",
        "hb-vote-id": "string"
      },
      "id": "string",
      "inner-txns": [
        {}
      ],
      "intra-round-offset": 0,
      "keyreg-transaction": {
        "non-participation": true,
        "selection-participation-key": "string",
        "state-proof-key": "string",
        "vote-first-valid": 0,
        "vote-key-dilution": 0,
        "vote-last-valid": 0,
        "vote-participation-key": "string"
      },
      "last-valid": 0,
      "lease": "string",
      "local-state-delta": [
        {
          "address": "string",
          "delta": [
            {
              "key": "string",
              "value": {
                "action": 0,
                "bytes": "string",
                "uint": 0
              }
            }
          ]
        }
      ],
      "logs": [
        "string"
      ],
      "note": "string",
      "payment-transaction": {
        "amount": 0,
        "close-amount": 0,
        "close-remainder-to": "string",
        "receiver": "string"
      },
      "receiver-rewards": 0,
      "rekey-to": "string",
      "round-time": 0,
      "sender": "string",
      "sender-rewards": 0,
      "signature": {
        "logicsig": {
          "args": [
            "string"
          ],
          "logic": "string",
          "logic-multisig-signature": {
            "subsignature": [
              {
                "public-key": "string",
                "signature": "string"
              }
            ],
            "threshold": 0,
            "version": 0
          },
          "multisig-signature": {
            "subsignature": [
              {
                "public-key": "string",
                "signature": "string"
              }
            ],
            "threshold": 0,
            "version": 0
          },
          "signature": "string"
        },
        "multisig": {
          "subsignature": [
            {
              "public-key": "string",
              "signature": "string"
            }
          ],
          "threshold": 0,
          "version": 0
        },
        "sig": "string"
      },
      "state-proof-transaction": {
        "message": {
          "block-headers-commitment": "string",
          "first-attested-round": 0,
          "latest-attested-round": 0,
          "ln-proven-weight": 0,
          "voters-commitment": "string"
        },
        "state-proof": {
          "part-proofs": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "positions-to-reveal": [
            0
          ],
          "reveals": [
            {
              "participant": {
                "verifier": {
                  "commitment": "string",
                  "key-lifetime": 0
                },
                "weight": 0
              },
              "position": 0,
              "sig-slot": {
                "lower-sig-weight": 0,
                "signature": {
                  "falcon-signature": "string",
                  "merkle-array-index": 0,
                  "proof": {
                    "hash-factory": {},
                    "path": [],
                    "tree-depth": 0
                  },
                  "verifying-key": "string"
                }
              }
            }
          ],
          "salt-version": 0,
          "sig-commit": "string",
          "sig-proofs": {
            "hash-factory": {
              "hash-type": 0
            },
            "path": [
              "string"
            ],
            "tree-depth": 0
          },
          "signed-weight": 0
        },
        "state-proof-type": 0
      },
      "tx-type": "pay"
    }
  ]
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|(empty)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Response for errors|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Response for errors|Inline|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» current-round|integer|true|none|Round at which the results were computed.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|
|» transactions|[[Transaction](#schematransaction)]|true|none|[Contains all fields common to all transactions and serves as an envelope to all transactions type. Represents both regular and inner transactions.<br><br>Definition:<br>data/transactions/signedtxn.go : SignedTxn<br>data/transactions/transaction.go : Transaction<br>]|
|»» application-transaction|[TransactionApplication](#schematransactionapplication)|false|none|Fields for application transactions.<br><br>Definition:<br>data/transactions/application.go : ApplicationCallTxnFields|
|»»» access|[[ResourceRef](#schemaresourceref)]|false|none|\[al\] Access unifies `accounts`, `foreign-apps`, `foreign-assets`, and `box-references` under a single list. If access is non-empty, these lists must be empty. If access is empty, those lists may be non-empty.|
|»»»» address|string|false|none|\[d\] Account whose balance record is accessible by the executing ApprovalProgram or ClearStateProgram.|
|»»»» application-id|integer|false|none|\[p\] Application id whose GlobalState may be read by the executing<br> ApprovalProgram or ClearStateProgram.|
|»»»» asset-id|integer|false|none|\[s\] Asset whose AssetParams may be read by the executing<br> ApprovalProgram or ClearStateProgram.|
|»»»» box|[BoxReference](#schemaboxreference)|false|none|BoxReference names a box by its name and the application ID it belongs to.|
|»»»»» app|integer|true|none|Application ID to which the box belongs, or zero if referring to the called application.|
|»»»»» name|string(byte)|true|none|Base64 encoded box name|
|»»»» holding|[HoldingRef](#schemaholdingref)|false|none|HoldingRef names a holding by referring to an Address and Asset it belongs to.|
|»»»»» address|string|true|none|\[d\] Address in access list, or the sender of the transaction.|
|»»»»» asset|integer|true|none|\[s\] Asset ID for asset in access list.|
|»»»» local|[LocalsRef](#schemalocalsref)|false|none|LocalsRef names a local state by referring to an Address and App it belongs to.|
|»»»»» address|string|true|none|\[d\] Address in access list, or the sender of the transaction.|
|»»»»» app|integer|true|none|\[p\] Application ID for app in access list, or zero if referring to the called application.|
|»»» accounts|[string]|false|none|\[apat\] List of accounts in addition to the sender that may be accessed from the application's approval-program and clear-state-program.|
|»»» application-args|[string]|false|none|\[apaa\] transaction specific arguments accessed from the application's approval-program and clear-state-program.|
|»»» application-id|integer|true|none|\[apid\] ID of the application being configured or empty if creating.|
|»»» approval-program|string(byte)|false|none|\[apap\] Logic executed for every application transaction, except when on-completion is set to "clear". It can read and write global state for the application, as well as account-specific local state. Approval programs may reject the transaction.|
|»»» box-references|[[BoxReference](#schemaboxreference)]|false|none|\[apbx\] the boxes that can be accessed by this transaction (and others in the same group).|
|»»» clear-state-program|string(byte)|false|none|\[apsu\] Logic executed for application transactions with on-completion set to "clear". It can read and write global state for the application, as well as account-specific local state. Clear state programs cannot reject the transaction.|
|»»» extra-program-pages|integer|false|none|\[epp\] specifies the additional app program len requested in pages.|
|»»» foreign-apps|[integer]|false|none|\[apfa\] Lists the applications in addition to the application-id whose global states may be accessed by this application's approval-program and clear-state-program. The access is read-only.|
|»»» foreign-assets|[integer]|false|none|\[apas\] lists the assets whose parameters may be accessed by this application's ApprovalProgram and ClearStateProgram. The access is read-only.|
|»»» global-state-schema|[StateSchema](#schemastateschema)|false|none|Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.|
|»»»» num-byte-slice|integer|true|none|Maximum number of TEAL byte slices that may be stored in the key/value store.|
|»»»» num-uint|integer|true|none|Maximum number of TEAL uints that may be stored in the key/value store.|
|»»» local-state-schema|[StateSchema](#schemastateschema)|false|none|Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.|
|»»» on-completion|[OnCompletion](#schemaoncompletion)|true|none|\[apan\] defines the what additional actions occur with the transaction.<br><br>Valid types:<br>* noop<br>* optin<br>* closeout<br>* clear<br>* update<br>* update<br>* delete|
|»»» reject-version|integer|false|none|\[aprv\] the lowest application version for which this transaction should immediately fail. 0 indicates that no version check should be performed.|
|»» asset-config-transaction|[TransactionAssetConfig](#schematransactionassetconfig)|false|none|Fields for asset allocation, re-configuration, and destruction.<br><br><br>A zero value for asset-id indicates asset creation.<br>A zero value for the params indicates asset destruction.<br><br>Definition:<br>data/transactions/asset.go : AssetConfigTxnFields|
|»»» asset-id|integer|false|none|\[xaid\] ID of the asset being configured or empty if creating.|
|»»» params|[AssetParams](#schemaassetparams)|false|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|
|»»»» clawback|string|false|none|Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|»»»» creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|»»»» decimals|integer|true|none|The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|»»»» default-frozen|boolean|false|none|Whether holdings of this asset are frozen by default.|
|»»»» freeze|string|false|none|Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|»»»» manager|string|false|none|Address of account used to manage the keys of this asset and to destroy it.|
|»»»» metadata-hash|string(byte)|false|none|A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|»»»» name|string|false|none|Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|»»»» name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|»»»» reserve|string|false|none|Address of account holding reserve (non-minted) units of this asset.|
|»»»» total|integer|true|none|The total number of units of this asset.|
|»»»» unit-name|string|false|none|Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|»»»» unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|»»»» url|string|false|none|URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|»»»» url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|
|»» asset-freeze-transaction|[TransactionAssetFreeze](#schematransactionassetfreeze)|false|none|Fields for an asset freeze transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetFreezeTxnFields|
|»»» address|string|true|none|\[fadd\] Address of the account whose asset is being frozen or thawed.|
|»»» asset-id|integer|true|none|\[faid\] ID of the asset being frozen or thawed.|
|»»» new-freeze-status|boolean|true|none|\[afrz\] The new freeze status.|
|»» asset-transfer-transaction|[TransactionAssetTransfer](#schematransactionassettransfer)|false|none|Fields for an asset transfer transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetTransferTxnFields|
|»»» amount|integer|true|none|\[aamt\] Amount of asset to transfer. A zero amount transferred to self allocates that asset in the account's Assets map.|
|»»» asset-id|integer|true|none|\[xaid\] ID of the asset being transferred.|
|»»» close-amount|integer|false|none|Number of assets transferred to the close-to account as part of the transaction.|
|»»» close-to|string|false|none|\[aclose\] Indicates that the asset should be removed from the account's Assets map, and specifies where the remaining asset holdings should be transferred.  It's always valid to transfer remaining asset holdings to the creator account.|
|»»» receiver|string|true|none|\[arcv\] Recipient address of the transfer.|
|»»» sender|string|false|none|\[asnd\] The effective sender during a clawback transactions. If this is not a zero value, the real transaction sender must be the Clawback address from the AssetParams.|
|»» auth-addr|string|false|none|\[sgnr\] this is included with signed transactions when the signing address does not equal the sender. The backend can use this to ensure that auth addr is equal to the accounts auth addr.|
|»» close-rewards|integer|false|none|\[rc\] rewards applied to close-remainder-to account.|
|»» closing-amount|integer|false|none|\[ca\] closing amount for transaction.|
|»» confirmed-round|integer|false|none|Round when the transaction was confirmed.|
|»» created-application-index|integer|false|none|Specifies an application index (ID) if an application was created with this transaction.|
|»» created-asset-index|integer|false|none|Specifies an asset index (ID) if an asset was created with this transaction.|
|»» fee|integer|true|none|\[fee\] Transaction fee.|
|»» first-valid|integer|true|none|\[fv\] First valid round for this transaction.|
|»» genesis-hash|string(byte)|false|none|\[gh\] Hash of genesis block.|
|»» genesis-id|string|false|none|\[gen\] genesis block ID.|
|»» global-state-delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|false|none|Application state delta.|
|»»» key|string|true|none|none|
|»»» value|[EvalDelta](#schemaevaldelta)|true|none|Represents a TEAL value delta.|
|»»»» action|integer|true|none|\[at\] delta action.|
|»»»» bytes|string|false|none|\[bs\] bytes value.|
|»»»» uint|integer|false|none|\[ui\] uint value.|
|»» group|string(byte)|false|none|\[grp\] Base64 encoded byte array of a sha512/256 digest. When present indicates that this transaction is part of a transaction group and the value is the sha512/256 hash of the transactions in that group.|
|»» heartbeat-transaction|[TransactionHeartbeat](#schematransactionheartbeat)|false|none|Fields for a heartbeat transaction.<br><br>Definition:<br>data/transactions/heartbeat.go : HeartbeatTxnFields|
|»»» hb-address|string|true|none|\[hbad\] HbAddress is the account this txn is proving onlineness for.|
|»»» hb-key-dilution|integer|true|none|\[hbkd\] HbKeyDilution must match HbAddress account's current KeyDilution.|
|»»» hb-proof|[HbProofFields](#schemahbprooffields)|true|none|\[hbprf\] HbProof is a signature using HeartbeatAddress's partkey, thereby showing it is online.|
|»»»» hb-pk|string(byte)|false|none|\[p\] Public key of the heartbeat message.|
|»»»» hb-pk1sig|string(byte)|false|none|\[p1s\] Signature of OneTimeSignatureSubkeyOffsetID(PK, Batch, Offset) under the key PK2.|
|»»»» hb-pk2|string(byte)|false|none|\[p2\] Key for new-style two-level ephemeral signature.|
|»»»» hb-pk2sig|string(byte)|false|none|\[p2s\] Signature of OneTimeSignatureSubkeyBatchID(PK2, Batch) under the master key (OneTimeSignatureVerifier).|
|»»»» hb-sig|string(byte)|false|none|\[s\] Signature of the heartbeat message.|
|»»» hb-seed|string(byte)|true|none|\[hbsd\] HbSeed must be the block seed for the this transaction's firstValid block.|
|»»» hb-vote-id|string(byte)|true|none|\[hbvid\] HbVoteID must match the HbAddress account's current VoteID.|
|»» id|string|false|none|Transaction ID|
|»» inner-txns|[[Transaction](#schematransaction)]|false|none|Inner transactions produced by application execution.|
|»» intra-round-offset|integer|false|none|Offset into the round where this transaction was confirmed.|
|»» keyreg-transaction|[TransactionKeyreg](#schematransactionkeyreg)|false|none|Fields for a keyreg transaction.<br><br>Definition:<br>data/transactions/keyreg.go : KeyregTxnFields|
|»»» non-participation|boolean|false|none|\[nonpart\] Mark the account as participating or non-participating.|
|»»» selection-participation-key|string(byte)|false|none|\[selkey\] Public key used with the Verified Random Function (VRF) result during committee selection.|
|»»» state-proof-key|string(byte)|false|none|\[sprfkey\] State proof key used in key registration transactions.|
|»»» vote-first-valid|integer|false|none|\[votefst\] First round this participation key is valid.|
|»»» vote-key-dilution|integer|false|none|\[votekd\] Number of subkeys in each batch of participation keys.|
|»»» vote-last-valid|integer|false|none|\[votelst\] Last round this participation key is valid.|
|»»» vote-participation-key|string(byte)|false|none|\[votekey\] Participation public key used in key registration transactions.|
|»» last-valid|integer|true|none|\[lv\] Last valid round for this transaction.|
|»» lease|string(byte)|false|none|\[lx\] Base64 encoded 32-byte array. Lease enforces mutual exclusion of transactions.  If this field is nonzero, then once the transaction is confirmed, it acquires the lease identified by the (Sender, Lease) pair of the transaction until the LastValid round passes.  While this transaction possesses the lease, no other transaction specifying this lease can be confirmed.|
|»» local-state-delta|[[AccountStateDelta](#schemaaccountstatedelta)]|false|none|\[ld\] Local state key/value changes for the application being executed by this transaction.|
|»»» address|string|true|none|none|
|»»» delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|true|none|Application state delta.|
|»» logs|[string]|false|none|\[lg\] Logs for the application being executed by this transaction.|
|»» note|string(byte)|false|none|\[note\] Free form data.|
|»» payment-transaction|[TransactionPayment](#schematransactionpayment)|false|none|Fields for a payment transaction.<br><br>Definition:<br>data/transactions/payment.go : PaymentTxnFields|
|»»» amount|integer|true|none|\[amt\] number of MicroAlgos intended to be transferred.|
|»»» close-amount|integer|false|none|Number of MicroAlgos that were sent to the close-remainder-to address when closing the sender account.|
|»»» close-remainder-to|string|false|none|\[close\] when set, indicates that the sending account should be closed and all remaining funds be transferred to this address.|
|»»» receiver|string|true|none|\[rcv\] receiver's address.|
|»» receiver-rewards|integer|false|none|\[rr\] rewards applied to receiver account.|
|»» rekey-to|string|false|none|\[rekey\] when included in a valid transaction, the accounts auth addr will be updated with this value and future signatures must be signed with the key represented by this address.|
|»» round-time|integer|false|none|Time when the block this transaction is in was confirmed.|
|»» sender|string|true|none|\[snd\] Sender's address.|
|»» sender-rewards|integer|false|none|\[rs\] rewards applied to sender account.|
|»» signature|[TransactionSignature](#schematransactionsignature)|false|none|Validation signature associated with some data. Only one of the signatures should be provided.|
|»»» logicsig|[TransactionSignatureLogicsig](#schematransactionsignaturelogicsig)|false|none|\[lsig\] Programatic transaction signature.<br><br>Definition:<br>data/transactions/logicsig.go|
|»»»» args|[string]|false|none|\[arg\] Logic arguments, base64 encoded.|
|»»»» logic|string(byte)|true|none|\[l\] Program signed by a signature or multi signature, or hashed to be the address of ana ccount. Base64 encoded TEAL program.|
|»»»» logic-multisig-signature|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»»»» subsignature|[[TransactionSignatureMultisigSubsignature](#schematransactionsignaturemultisigsubsignature)]|false|none|\[subsig\] holds pairs of public key and signatures.|
|»»»»»» public-key|string(byte)|false|none|\[pk\]|
|»»»»»» signature|string(byte)|false|none|\[s\]|
|»»»»» threshold|integer|false|none|\[thr\]|
|»»»»» version|integer|false|none|\[v\]|
|»»»» multisig-signature|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»»» signature|string(byte)|false|none|\[sig\] ed25519 signature.|
|»»» multisig|[TransactionSignatureMultisig](#schematransactionsignaturemultisig)|false|none|structure holding multiple subsignatures.<br><br>Definition:<br>crypto/multisig.go : MultisigSig|
|»»» sig|string(byte)|false|none|\[sig\] Standard ed25519 signature.|
|»» state-proof-transaction|[TransactionStateProof](#schematransactionstateproof)|false|none|Fields for a state proof transaction. <br><br>Definition:<br>data/transactions/stateproof.go : StateProofTxnFields|
|»»» message|[IndexerStateProofMessage](#schemaindexerstateproofmessage)|false|none|none|
|»»»» block-headers-commitment|string(byte)|false|none|\[b\]|
|»»»» first-attested-round|integer|false|none|\[f\]|
|»»»» latest-attested-round|integer|false|none|\[l\]|
|»»»» ln-proven-weight|integer|false|none|\[P\]|
|»»»» voters-commitment|string(byte)|false|none|\[v\]|
|»»» state-proof|[StateProofFields](#schemastateprooffields)|false|none|\[sp\] represents a state proof.<br><br>Definition:<br>crypto/stateproof/structs.go : StateProof|
|»»»» part-proofs|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»»» hash-factory|[HashFactory](#schemahashfactory)|false|none|none|
|»»»»»» hash-type|integer|false|none|\[t\]|
|»»»»» path|[string]|false|none|\[pth\]|
|»»»»» tree-depth|integer|false|none|\[td\]|
|»»»» positions-to-reveal|[integer]|false|none|\[pr\] Sequence of reveal positions.|
|»»»» reveals|[[StateProofReveal](#schemastateproofreveal)]|false|none|\[r\] Note that this is actually stored as a map[uint64] - Reveal in the actual msgp|
|»»»»» participant|[StateProofParticipant](#schemastateproofparticipant)|false|none|none|
|»»»»»» verifier|[StateProofVerifier](#schemastateproofverifier)|false|none|none|
|»»»»»»» commitment|string(byte)|false|none|\[cmt\] Represents the root of the vector commitment tree.|
|»»»»»»» key-lifetime|integer|false|none|\[lf\] Key lifetime.|
|»»»»»» weight|integer|false|none|\[w\]|
|»»»»» position|integer|false|none|The position in the signature and participants arrays corresponding to this entry.|
|»»»»» sig-slot|[StateProofSigSlot](#schemastateproofsigslot)|false|none|none|
|»»»»»» lower-sig-weight|integer|false|none|\[l\] The total weight of signatures in the lower-numbered slots.|
|»»»»»» signature|[StateProofSignature](#schemastateproofsignature)|false|none|none|
|»»»»»»» falcon-signature|string(byte)|false|none|none|
|»»»»»»» merkle-array-index|integer|false|none|none|
|»»»»»»» proof|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»»»»» verifying-key|string(byte)|false|none|\[vkey\]|
|»»»» salt-version|integer|false|none|\[v\] Salt version of the merkle signature.|
|»»»» sig-commit|string(byte)|false|none|\[c\]|
|»»»» sig-proofs|[MerkleArrayProof](#schemamerklearrayproof)|false|none|none|
|»»»» signed-weight|integer|false|none|\[w\]|
|»»» state-proof-type|integer|false|none|\[sptype\] Type of the state proof. Integer representing an entry defined in protocol/stateproof.go|
|»» tx-type|string|true|none|\[type\] Indicates what type of transaction this is. Different types have different fields.<br><br>Valid types, and where their fields are stored:<br>* \[pay\] payment-transaction<br>* \[keyreg\] keyreg-transaction<br>* \[acfg\] asset-config-transaction<br>* \[axfer\] asset-transfer-transaction<br>* \[afrz\] asset-freeze-transaction<br>* \[appl\] application-transaction<br>* \[stpf\] state-proof-transaction<br>* \[hb\] heartbeat-transaction|

#### Enumerated Values

|Property|Value|
|---|---|
|on-completion|noop|
|on-completion|optin|
|on-completion|closeout|
|on-completion|clear|
|on-completion|update|
|on-completion|delete|
|tx-type|pay|
|tx-type|keyreg|
|tx-type|acfg|
|tx-type|axfer|
|tx-type|afrz|
|tx-type|appl|
|tx-type|stpf|
|tx-type|hb|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|» message|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

