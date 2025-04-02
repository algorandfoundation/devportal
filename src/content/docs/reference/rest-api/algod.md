---
title: Algod API
---

<!-- Generator: Widdershins v4.0.1 -->



> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API endpoint for algod operations.

Base URLs:

* <a href="http://localhost/">http://localhost/</a>

* <a href="https://localhost/">https://localhost/</a>

Email: <a href="mailto:contact@algorand.com">algorand</a> Web: <a href="https://www.algorand.com/get-in-touch/contact">algorand</a> 


## Authentication

* API Key (api_key)
    - Parameter Name: **X-Algo-API-Token**, in: header. Generated header parameter. This token can be generated using the Goal command line tool. Example value ='b7e384d0317b8050ce45900a94a1931e28540e1f69b2d242b424659c341b4697'


## private


### AbortCatchup

<a id="opIdAbortCatchup"></a>

> Code samples

```shell

curl -X DELETE http://localhost/v2/catchup/{catchpoint} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
DELETE http://localhost/v2/catchup/{catchpoint} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/catchup/{catchpoint}',
{
  method: 'DELETE',

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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.delete 'http://localhost/v2/catchup/{catchpoint}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.delete('http://localhost/v2/catchup/{catchpoint}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://localhost/v2/catchup/{catchpoint}', array(
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
URL obj = new URL("http://localhost/v2/catchup/{catchpoint}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost/v2/catchup/{catchpoint}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /v2/catchup/{catchpoint}`

*Aborts a catchpoint catchup.*

Given a catchpoint, it aborts catching up to this catchpoint

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catchpoint|path|string(catchpoint)|true|A catch point|

> Example responses

> 200 Response

```json
{
  "catchup-message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

*An catchpoint abort response.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» catchup-message|string|true|none|Catchup abort response string|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### AddParticipationKey

<a id="opIdAddParticipationKey"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/participation \
  -H 'Content-Type: application/msgpack' \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/participation HTTP/1.1
Host: localhost
Content-Type: application/msgpack
Accept: application/json

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/msgpack',
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/participation',
{
  method: 'POST',
  body: inputBody,
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
  'Content-Type' => 'application/msgpack',
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/participation',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/msgpack',
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/participation', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/msgpack',
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/participation', array(
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
URL obj = new URL("http://localhost/v2/participation");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "Content-Type": []string{"application/msgpack"},
        "Accept": []string{"application/json"},
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/participation", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/participation`

*Add a participation key to the node*

> Body parameter

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string(binary)|true|The participation key to add to the node|

> Example responses

> 200 Response

```json
{
  "partId": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Participation ID of the submission|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Participation Key Not Found|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» partId|string|true|none|encoding of the participation ID.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### AppendKeys

<a id="opIdAppendKeys"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/participation/{participation-id} \
  -H 'Content-Type: application/msgpack' \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/participation/{participation-id} HTTP/1.1
Host: localhost
Content-Type: application/msgpack
Accept: application/json

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/msgpack',
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/participation/{participation-id}',
{
  method: 'POST',
  body: inputBody,
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
  'Content-Type' => 'application/msgpack',
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/participation/{participation-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/msgpack',
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/participation/{participation-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/msgpack',
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/participation/{participation-id}', array(
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
URL obj = new URL("http://localhost/v2/participation/{participation-id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "Content-Type": []string{"application/msgpack"},
        "Accept": []string{"application/json"},
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/participation/{participation-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/participation/{participation-id}`

*Append state proof keys to a participation key*

Given a participation ID, append state proof keys to a particular set of participation keys

> Body parameter

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|participation-id|path|string|true|none|
|body|body|string(binary)|true|The state proof keys to add to an existing participation ID|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "effective-first-valid": 0,
  "effective-last-valid": 0,
  "id": "string",
  "key": {
    "selection-participation-key": "string",
    "state-proof-key": "string",
    "vote-first-valid": 0,
    "vote-key-dilution": 0,
    "vote-last-valid": 0,
    "vote-participation-key": "string"
  },
  "last-block-proposal": 0,
  "last-state-proof": 0,
  "last-vote": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A detailed description of a participation ID|[ParticipationKey](#schemaparticipationkey)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Participation Key Not Found|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### DeleteParticipationKeyByID

<a id="opIdDeleteParticipationKeyByID"></a>

> Code samples

```shell

curl -X DELETE http://localhost/v2/participation/{participation-id} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
DELETE http://localhost/v2/participation/{participation-id} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/participation/{participation-id}',
{
  method: 'DELETE',

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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.delete 'http://localhost/v2/participation/{participation-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.delete('http://localhost/v2/participation/{participation-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://localhost/v2/participation/{participation-id}', array(
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
URL obj = new URL("http://localhost/v2/participation/{participation-id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost/v2/participation/{participation-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /v2/participation/{participation-id}`

*Delete a given participation key by ID*

Delete a given participation key by ID

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|participation-id|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "data": {},
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Participation key got deleted by ID|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Participation Key Not Found|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GenerateParticipationKeys

<a id="opIdGenerateParticipationKeys"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/participation/generate/{address}?first=0&last=0 \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/participation/generate/{address}?first=0&last=0 HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/participation/generate/{address}?first=0&last=0',
{
  method: 'POST',

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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/participation/generate/{address}',
  params: {
  'first' => 'integer',
'last' => 'integer'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/participation/generate/{address}', params={
  'first': '0',  'last': '0'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/participation/generate/{address}', array(
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
URL obj = new URL("http://localhost/v2/participation/generate/{address}?first=0&last=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/participation/generate/{address}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/participation/generate/{address}`

*Generate and install participation keys to the node.*

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|An account public key|
|dilution|query|integer|false|Key dilution for two-level participation keys (defaults to sqrt of validity window).|
|first|query|integer|true|First round for participation key.|
|last|query|integer|true|Last round for participation key.|

> Example responses

> 200 Response

```json
"string"
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An empty JSON object is returned if the generation process was started. Currently no status is available.|string|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetConfig

<a id="opIdGetConfig"></a>

> Code samples

```shell

curl -X GET http://localhost/debug/settings/config \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/debug/settings/config HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/debug/settings/config',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/debug/settings/config',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/debug/settings/config', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/debug/settings/config', array(
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
URL obj = new URL("http://localhost/debug/settings/config");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/debug/settings/config", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /debug/settings/config`

*Gets the merged config file.*

Returns the merged (defaults + overrides) config file in json.

> Example responses

> 200 Response

```json
"string"
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The merged config file in json.|string|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetDebugSettingsProf

<a id="opIdGetDebugSettingsProf"></a>

> Code samples

```shell

curl -X GET http://localhost/debug/settings/pprof \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/debug/settings/pprof HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/debug/settings/pprof',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/debug/settings/pprof',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/debug/settings/pprof', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/debug/settings/pprof', array(
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
URL obj = new URL("http://localhost/debug/settings/pprof");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/debug/settings/pprof", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /debug/settings/pprof`

Retrieves the current settings for blocking and mutex profiles

> Example responses

> 200 Response

```json
{
  "block-rate": 1000,
  "mutex-rate": 1000
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|DebugPprof is the response to the /debug/extra/pprof endpoint|[DebugSettingsProf](#schemadebugsettingsprof)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetParticipationKeyByID

<a id="opIdGetParticipationKeyByID"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/participation/{participation-id} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/participation/{participation-id} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/participation/{participation-id}',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/participation/{participation-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/participation/{participation-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/participation/{participation-id}', array(
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
URL obj = new URL("http://localhost/v2/participation/{participation-id}");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/participation/{participation-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/participation/{participation-id}`

*Get participation key info given a participation ID*

Given a participation ID, return information about that participation key

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|participation-id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "effective-first-valid": 0,
  "effective-last-valid": 0,
  "id": "string",
  "key": {
    "selection-participation-key": "string",
    "state-proof-key": "string",
    "vote-first-valid": 0,
    "vote-key-dilution": 0,
    "vote-last-valid": 0,
    "vote-participation-key": "string"
  },
  "last-block-proposal": 0,
  "last-state-proof": 0,
  "last-vote": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A detailed description of a participation ID|[ParticipationKey](#schemaparticipationkey)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Participation Key Not Found|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetParticipationKeys

<a id="opIdGetParticipationKeys"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/participation \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/participation HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/participation',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/participation',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/participation', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/participation', array(
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
URL obj = new URL("http://localhost/v2/participation");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/participation", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/participation`

*Return a list of participation keys*

Return a list of participation keys

> Example responses

> 200 Response

```json
[
  {
    "address": "string",
    "effective-first-valid": 0,
    "effective-last-valid": 0,
    "id": "string",
    "key": {
      "selection-participation-key": "string",
      "state-proof-key": "string",
      "vote-first-valid": 0,
      "vote-key-dilution": 0,
      "vote-last-valid": 0,
      "vote-participation-key": "string"
    },
    "last-block-proposal": 0,
    "last-state-proof": 0,
    "last-vote": 0
  }
]
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of participation keys|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Participation Key Not Found|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ParticipationKey](#schemaparticipationkey)]|false|none|[Represents a participation key used by the node.]|
|» address|string|true|none|Address the key was generated for.|
|» effective-first-valid|integer|false|none|When registered, this is the first round it may be used.|
|» effective-last-valid|integer|false|none|When registered, this is the last round it may be used.|
|» id|string|true|none|The key's ParticipationID.|
|» key|[AccountParticipation](#schemaaccountparticipation)|true|none|AccountParticipation describes the parameters used by this account in consensus protocol.|
|»» selection-participation-key|string(byte)|true|none|\[sel\] Selection public key (if any) currently registered for this round.|
|»» state-proof-key|string(byte)|false|none|\[stprf\] Root of the state proof key (if any)|
|»» vote-first-valid|integer|true|none|\[voteFst\] First round for which this participation is valid.|
|»» vote-key-dilution|integer|true|none|\[voteKD\] Number of subkeys in each batch of participation keys.|
|»» vote-last-valid|integer|true|none|\[voteLst\] Last round for which this participation is valid.|
|»» vote-participation-key|string(byte)|true|none|\[vote\] root participation public key (if any) currently registered for this round.|
|» last-block-proposal|integer|false|none|Round when this key was last used to propose a block.|
|» last-state-proof|integer|false|none|Round when this key was last used to generate a state proof.|
|» last-vote|integer|false|none|Round when this key was last used to vote.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### PutDebugSettingsProf

<a id="opIdPutDebugSettingsProf"></a>

> Code samples

```shell

curl -X PUT http://localhost/debug/settings/pprof \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
PUT http://localhost/debug/settings/pprof HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/debug/settings/pprof',
{
  method: 'PUT',

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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.put 'http://localhost/debug/settings/pprof',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.put('http://localhost/debug/settings/pprof', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://localhost/debug/settings/pprof', array(
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
URL obj = new URL("http://localhost/debug/settings/pprof");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost/debug/settings/pprof", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /debug/settings/pprof`

Enables blocking and mutex profiles, and returns the old settings

> Example responses

> 200 Response

```json
{
  "block-rate": 1000,
  "mutex-rate": 1000
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|DebugPprof is the response to the /debug/extra/pprof endpoint|[DebugSettingsProf](#schemadebugsettingsprof)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### ShutdownNode

<a id="opIdShutdownNode"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/shutdown \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/shutdown HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/shutdown',
{
  method: 'POST',

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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/shutdown',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/shutdown', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/shutdown', array(
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
URL obj = new URL("http://localhost/v2/shutdown");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/shutdown", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/shutdown`

Special management endpoint to shutdown the node. Optionally provide a timeout parameter to indicate that the node should begin shutting down after a number of seconds.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeout|query|integer|false|none|

> Example responses

> 200 Response

```json
{}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### StartCatchup

<a id="opIdStartCatchup"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/catchup/{catchpoint} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/catchup/{catchpoint} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/catchup/{catchpoint}',
{
  method: 'POST',

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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/catchup/{catchpoint}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/catchup/{catchpoint}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/catchup/{catchpoint}', array(
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
URL obj = new URL("http://localhost/v2/catchup/{catchpoint}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/catchup/{catchpoint}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/catchup/{catchpoint}`

*Starts a catchpoint catchup.*

Given a catchpoint, it starts catching up to this catchpoint

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catchpoint|path|string(catchpoint)|true|A catch point|
|min|query|integer|false|Specify the minimum number of blocks which the ledger must be advanced by in order to start the catchup. This is useful for simplifying tools which support fast catchup, they can run the catchup unconditionally and the node will skip the catchup if it is not needed.|

> Example responses

> 200 Response

```json
{
  "catchup-message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|Request Timeout|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

*An catchpoint start response.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» catchup-message|string|true|none|Catchup start response string|

Status Code **201**

*An catchpoint start response.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» catchup-message|string|true|none|Catchup start response string|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


## public


### AccountApplicationInformation

<a id="opIdAccountApplicationInformation"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/accounts/{address}/applications/{application-id} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/accounts/{address}/applications/{application-id} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/accounts/{address}/applications/{application-id}',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/accounts/{address}/applications/{application-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/accounts/{address}/applications/{application-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/accounts/{address}/applications/{application-id}', array(
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
URL obj = new URL("http://localhost/v2/accounts/{address}/applications/{application-id}");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/accounts/{address}/applications/{application-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/accounts/{address}/applications/{application-id}`

*Get account information about a given app.*

Given a specific account public key and application ID, this call returns the account's application local state and global state (AppLocalState and AppParams, if either exists). Global state will only be returned if the provided address is the application's creator.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.|
|address|path|string|true|An account public key|
|application-id|path|integer|true|An application identifier|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|msgpack|

> Example responses

> 200 Response

```json
{
  "app-local-state": {
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
    "schema": {
      "num-byte-slice": 0,
      "num-uint": 0
    }
  },
  "created-app": {
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
    }
  },
  "round": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|AccountApplicationResponse describes the account's application local state and global state (AppLocalState and AppParams, if either exists) for a specific application ID. Global state will only be returned if the provided address is the application's creator.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Malformed address or application ID|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» app-local-state|[ApplicationLocalState](#schemaapplicationlocalstate)|false|none|Stores local state associated with an application.|
|»» id|integer|true|none|The application which this local state is for.|
|»» key-value|[[TealKeyValue](#schematealkeyvalue)]|false|none|Represents a key-value store for use in an application.|
|»»» key|string|true|none|none|
|»»» value|[TealValue](#schematealvalue)|true|none|Represents a TEAL value.|
|»»»» bytes|string|true|none|\[tb\] bytes value.|
|»»»» type|integer|true|none|\[tt\] value type. Value `1` refers to **bytes**, value `2` refers to **uint**|
|»»»» uint|integer|true|none|\[ui\] uint value.|
|»» schema|[ApplicationStateSchema](#schemaapplicationstateschema)|true|none|Specifies maximums on the number of each type that may be stored.|
|»»» num-byte-slice|integer|true|none|\[nbs\] num of byte slices.|
|»»» num-uint|integer|true|none|\[nui\] num of uints.|
|» created-app|[ApplicationParams](#schemaapplicationparams)|false|none|Stores the global information associated with an application.|
|»» approval-program|string(byte)|true|none|\[approv\] approval program.|
|»» clear-state-program|string(byte)|true|none|\[clearp\] approval program.|
|»» creator|string|true|none|The address that created this application. This is the address where the parameters and global state for this application can be found.|
|»» extra-program-pages|integer|false|none|\[epp\] the amount of extra program pages available to this app.|
|»» global-state|[[TealKeyValue](#schematealkeyvalue)]|false|none|Represents a key-value store for use in an application.|
|»» global-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|»» local-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|» round|integer|true|none|The round for which this information is relevant.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### AccountAssetInformation

<a id="opIdAccountAssetInformation"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/accounts/{address}/assets/{asset-id} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/accounts/{address}/assets/{asset-id} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/accounts/{address}/assets/{asset-id}',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/accounts/{address}/assets/{asset-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/accounts/{address}/assets/{asset-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/accounts/{address}/assets/{asset-id}', array(
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
URL obj = new URL("http://localhost/v2/accounts/{address}/assets/{asset-id}");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/accounts/{address}/assets/{asset-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/accounts/{address}/assets/{asset-id}`

*Get account information about a given asset.*

Given a specific account public key and asset ID, this call returns the account's asset holding and asset parameters (if either exist). Asset parameters will only be returned if the provided address is the asset's creator.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.|
|address|path|string|true|An account public key|
|asset-id|path|integer|true|An asset identifier|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|msgpack|

> Example responses

> 200 Response

```json
{
  "asset-holding": {
    "amount": 0,
    "asset-id": 0,
    "is-frozen": true
  },
  "created-asset": {
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
  },
  "round": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|AccountAssetResponse describes the account's asset holding and asset parameters (if either exist) for a specific asset ID. Asset parameters will only be returned if the provided address is the asset's creator.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Malformed address or asset ID|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» asset-holding|[AssetHolding](#schemaassetholding)|false|none|Describes an asset held by an account.<br><br>Definition:<br>data/basics/userBalance.go : AssetHolding|
|»» amount|integer|true|none|\[a\] number of units held.|
|»» asset-id|integer|true|none|Asset ID of the holding.|
|»» is-frozen|boolean|true|none|\[f\] whether or not the holding is frozen.|
|» created-asset|[AssetParams](#schemaassetparams)|false|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|
|»» clawback|string|false|none|\[c\] Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|»» creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|»» decimals|integer|true|none|\[dc\] The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|»» default-frozen|boolean|false|none|\[df\] Whether holdings of this asset are frozen by default.|
|»» freeze|string|false|none|\[f\] Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|»» manager|string|false|none|\[m\] Address of account used to manage the keys of this asset and to destroy it.|
|»» metadata-hash|string(byte)|false|none|\[am\] A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|»» name|string|false|none|\[an\] Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|»» name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|»» reserve|string|false|none|\[r\] Address of account holding reserve (non-minted) units of this asset.|
|»» total|integer|true|none|\[t\] The total number of units of this asset.|
|»» unit-name|string|false|none|\[un\] Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|»» unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|»» url|string|false|none|\[au\] URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|»» url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|
|» round|integer|true|none|The round for which this information is relevant.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### AccountAssetsInformation

<a id="opIdAccountAssetsInformation"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/accounts/{address}/assets \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/accounts/{address}/assets HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/accounts/{address}/assets',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/accounts/{address}/assets',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/accounts/{address}/assets', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/accounts/{address}/assets', array(
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
URL obj = new URL("http://localhost/v2/accounts/{address}/assets");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/accounts/{address}/assets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/accounts/{address}/assets`

*Get a list of assets held by an account, inclusive of asset params.*

Lookup an account's asset holdings.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|An account public key|
|limit|query|integer|false|Maximum number of results to return.|
|next|query|string|false|The next page of results. Use the next token provided by the previous results.|

> Example responses

> 200 Response

```json
{
  "asset-holdings": [
    {
      "asset-holding": {
        "amount": 0,
        "asset-id": 0,
        "is-frozen": true
      },
      "asset-params": {
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
  "next-token": "string",
  "round": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|AccountAssetsInformationResponse contains a list of assets held by an account.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Malformed address|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» asset-holdings|[[AccountAssetHolding](#schemaaccountassetholding)]|false|none|[AccountAssetHolding describes the account's asset holding and asset parameters (if either exist) for a specific asset ID.]|
|»» asset-holding|[AssetHolding](#schemaassetholding)|true|none|Describes an asset held by an account.<br><br>Definition:<br>data/basics/userBalance.go : AssetHolding|
|»»» amount|integer|true|none|\[a\] number of units held.|
|»»» asset-id|integer|true|none|Asset ID of the holding.|
|»»» is-frozen|boolean|true|none|\[f\] whether or not the holding is frozen.|
|»» asset-params|[AssetParams](#schemaassetparams)|false|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|
|»»» clawback|string|false|none|\[c\] Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|»»» creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|»»» decimals|integer|true|none|\[dc\] The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|»»» default-frozen|boolean|false|none|\[df\] Whether holdings of this asset are frozen by default.|
|»»» freeze|string|false|none|\[f\] Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|»»» manager|string|false|none|\[m\] Address of account used to manage the keys of this asset and to destroy it.|
|»»» metadata-hash|string(byte)|false|none|\[am\] A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|»»» name|string|false|none|\[an\] Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|»»» name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|»»» reserve|string|false|none|\[r\] Address of account holding reserve (non-minted) units of this asset.|
|»»» total|integer|true|none|\[t\] The total number of units of this asset.|
|»»» unit-name|string|false|none|\[un\] Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|»»» unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|»»» url|string|false|none|\[au\] URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|»»» url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|
|» round|integer|true|none|The round for which this information is relevant.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### AccountInformation

<a id="opIdAccountInformation"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/accounts/{address} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/accounts/{address} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/accounts/{address}',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/accounts/{address}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/accounts/{address}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/accounts/{address}', array(
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
URL obj = new URL("http://localhost/v2/accounts/{address}");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/accounts/{address}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/accounts/{address}`

*Get account information.*

Given a specific account public key, this call returns the account's status, balance and spendable amounts

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.|
|address|path|string|true|An account public key|
|exclude|query|string|false|When set to `all` will exclude asset holdings, application local state, created asset parameters, any created application parameters. Defaults to `none`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|msgpack|
|exclude|all|
|exclude|none|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "amount": 0,
  "amount-without-pending-rewards": 0,
  "apps-local-state": [
    {
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
      "is-frozen": true
    }
  ],
  "auth-addr": "string",
  "created-apps": [
    {
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
        }
      }
    }
  ],
  "created-assets": [
    {
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

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|AccountResponse wraps the Account type in a response.|[Account](#schemaaccount)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### ExperimentalCheck

<a id="opIdExperimentalCheck"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/experimental \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/experimental HTTP/1.1
Host: localhost

```

```javascript

const headers = {
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/experimental',
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
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/experimental',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/experimental', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/experimental', array(
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
URL obj = new URL("http://localhost/v2/experimental");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/experimental", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/experimental`

*Returns OK if experimental API is enabled.*

> Example responses

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Experimental API enabled|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Experimental API not enabled|None|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetApplicationBoxByName

<a id="opIdGetApplicationBoxByName"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/applications/{application-id}/box?name=string \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/applications/{application-id}/box?name=string HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/applications/{application-id}/box?name=string',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/applications/{application-id}/box',
  params: {
  'name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/applications/{application-id}/box', params={
  'name': 'string'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/applications/{application-id}/box', array(
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
URL obj = new URL("http://localhost/v2/applications/{application-id}/box?name=string");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/applications/{application-id}/box", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/applications/{application-id}/box`

*Get box information for a given application.*

Given an application ID and box name, it returns the round, box name, and value (each base64 encoded). Box names must be in the goal app call arg encoding form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, use the form 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application-id|path|integer|true|An application identifier|
|name|query|string|true|A box name, in the goal app call arg form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, use the form 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.|

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
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Box Not Found|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetApplicationBoxes

<a id="opIdGetApplicationBoxes"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/applications/{application-id}/boxes \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/applications/{application-id}/boxes HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/applications/{application-id}/boxes',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/applications/{application-id}/boxes',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/applications/{application-id}/boxes', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/applications/{application-id}/boxes', array(
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
URL obj = new URL("http://localhost/v2/applications/{application-id}/boxes");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/applications/{application-id}/boxes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/applications/{application-id}/boxes`

*Get boxes for a given application.*

Given an application ID, return boxes in lexographical order by name. If the results must be truncated, a next-token is supplied to continue the request.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application-id|path|integer|true|An application identifier|
|max|query|integer|false|Maximum number of boxes to return. Server may impose a lower limit.|
|prefix|query|string|false|A box name prefix, in the goal app call arg form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, use the form 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.|
|next|query|string|false|A box name, in the goal app call arg form 'encoding:value'. When provided, the returned boxes begin (lexographically) with the supplied name. Callers may implement pagination by reinvoking the endpoint with the token from a previous call's next-token.|
|values|query|boolean|false|If true, box values will be returned.|

> Example responses

> 200 Response

```json
{
  "boxes": [
    {
      "name": "string",
      "round": 0,
      "value": "string"
    }
  ],
  "next-token": "string",
  "round": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Boxes of an application|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» boxes|[[Box](#schemabox)]|true|none|[Box name and its content.]|
|»» name|string(byte)|true|none|The box name, base64 encoded|
|»» round|integer|false|none|The round for which this information is relevant|
|»» value|string(byte)|true|none|The box value, base64 encoded.|
|» next-token|string|false|none|Used for pagination, when making another request provide this token with the next parameter.|
|» round|integer|true|none|The round for which this information is relevant.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetApplicationByID

<a id="opIdGetApplicationByID"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/applications/{application-id} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/applications/{application-id} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/applications/{application-id}',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/applications/{application-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/applications/{application-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/applications/{application-id}', array(
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
URL obj = new URL("http://localhost/v2/applications/{application-id}");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/applications/{application-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/applications/{application-id}`

*Get application information.*

Given a application ID, it returns application information including creator, approval and clear programs, global and local schemas, and global state.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application-id|path|integer|true|An application identifier|

> Example responses

> 200 Response

```json
{
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
    }
  }
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Application information|[Application](#schemaapplication)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Application Not Found|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetAssetByID

<a id="opIdGetAssetByID"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/assets/{asset-id} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/assets/{asset-id} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/assets/{asset-id}',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/assets/{asset-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/assets/{asset-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/assets/{asset-id}', array(
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
URL obj = new URL("http://localhost/v2/assets/{asset-id}");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/assets/{asset-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/assets/{asset-id}`

*Get asset information.*

Given a asset ID, it returns asset information including creator, name, total supply and special addresses.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset-id|path|integer|true|An asset identifier|

> Example responses

> 200 Response

```json
{
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

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Asset information|[Asset](#schemaasset)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Application Not Found|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetBlock

<a id="opIdGetBlock"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/blocks/{round} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/blocks/{round} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/blocks/{round}',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/blocks/{round}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/blocks/{round}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/blocks/{round}', array(
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
URL obj = new URL("http://localhost/v2/blocks/{round}");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/blocks/{round}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/blocks/{round}`

*Get the block for the given round.*

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.|
|round|path|integer|true|The round from which to fetch block information.|
|header-only|query|boolean|false|If true, only the block header (exclusive of payset or certificate) may be included in response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|msgpack|

> Example responses

> 200 Response

```json
{
  "block": {},
  "cert": {}
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Encoded block object.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request - Non integer number|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|None existing block|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» block|object|true|none|Block header data.|
|» cert|object|false|none|Optional certificate object. This is only included when the format is set to message pack.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetBlockHash

<a id="opIdGetBlockHash"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/blocks/{round}/hash \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/blocks/{round}/hash HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/blocks/{round}/hash',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/blocks/{round}/hash',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/blocks/{round}/hash', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/blocks/{round}/hash', array(
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
URL obj = new URL("http://localhost/v2/blocks/{round}/hash");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/blocks/{round}/hash", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/blocks/{round}/hash`

*Get the block hash for the block on the given round.*

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|round|path|integer|true|The round from which to fetch block hash information.|

> Example responses

> 200 Response

```json
{
  "blockHash": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Hash of a block header.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request - Non integer number|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|None existing block|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» blockHash|string|true|none|Block header hash.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetBlockLogs

<a id="opIdGetBlockLogs"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/blocks/{round}/logs \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/blocks/{round}/logs HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/blocks/{round}/logs',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/blocks/{round}/logs',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/blocks/{round}/logs', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/blocks/{round}/logs', array(
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
URL obj = new URL("http://localhost/v2/blocks/{round}/logs");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/blocks/{round}/logs", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/blocks/{round}/logs`

*Get all of the logs from outer and inner app calls in the given round*

Get all of the logs from outer and inner app calls in the given round

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|round|path|integer|true|The round from which to fetch block log information.|

> Example responses

> 200 Response

```json
{
  "logs": [
    {
      "application-index": 0,
      "logs": [
        "string"
      ],
      "txId": "string"
    }
  ]
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All logs emitted in the given round. Each app call, whether top-level or inner, that contains logs results in a separate AppCallLogs object. Therefore there may be multiple AppCallLogs with the same application ID and outer transaction ID in the event of multiple inner app calls to the same app. App calls with no logs are not included in the response. AppCallLogs are returned in the same order that their corresponding app call appeared in the block (pre-order traversal of inner app calls)|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request - Non integer number|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Nonexistent block|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» logs|[[AppCallLogs](#schemaappcalllogs)]|true|none|[The logged messages from an app call along with the app ID and outer transaction ID. Logs appear in the same order that they were emitted.]|
|»» application-index|integer|true|none|The application from which the logs were generated|
|»» logs|[string]|true|none|An array of logs|
|»» txId|string|true|none|The transaction ID of the outer app call that lead to these logs|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetBlockTimeStampOffset

<a id="opIdGetBlockTimeStampOffset"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/devmode/blocks/offset \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/devmode/blocks/offset HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/devmode/blocks/offset',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/devmode/blocks/offset',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/devmode/blocks/offset', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/devmode/blocks/offset', array(
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
URL obj = new URL("http://localhost/v2/devmode/blocks/offset");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/devmode/blocks/offset", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/devmode/blocks/offset`

*Returns the timestamp offset. Timestamp offsets can only be set in dev mode.*

Gets the current timestamp offset.

> Example responses

> 200 Response

```json
{
  "offset": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response containing the timestamp offset in seconds|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|TimeStamp offset not set.|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» offset|integer|true|none|Timestamp offset in seconds.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetBlockTxids

<a id="opIdGetBlockTxids"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/blocks/{round}/txids \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/blocks/{round}/txids HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/blocks/{round}/txids',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/blocks/{round}/txids',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/blocks/{round}/txids', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/blocks/{round}/txids', array(
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
URL obj = new URL("http://localhost/v2/blocks/{round}/txids");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/blocks/{round}/txids", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/blocks/{round}/txids`

*Get the top level transaction IDs for the block on the given round.*

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|round|path|integer|true|The round from which to fetch block transaction IDs.|

> Example responses

> 200 Response

```json
{
  "blockTxids": [
    "string"
  ]
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Top level transaction IDs in a block.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request - Non integer number|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Non existing block|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» blockTxids|[string]|true|none|Block transaction IDs.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetGenesis

<a id="opIdGetGenesis"></a>

> Code samples

```shell

curl -X GET http://localhost/genesis \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/genesis HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/genesis',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/genesis',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/genesis', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/genesis', array(
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
URL obj = new URL("http://localhost/genesis");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/genesis", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /genesis`

*Gets the genesis information.*

Returns the entire genesis file in json.

> Example responses

> 200 Response

```json
"string"
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The genesis file in json.|string|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetLedgerStateDelta

<a id="opIdGetLedgerStateDelta"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/deltas/{round} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/deltas/{round} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/deltas/{round}',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/deltas/{round}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/deltas/{round}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/deltas/{round}', array(
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
URL obj = new URL("http://localhost/v2/deltas/{round}");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/deltas/{round}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/deltas/{round}`

*Get a LedgerStateDelta object for a given round*

Get ledger deltas for a round.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|round|path|integer|true|The round for which the deltas are desired.|
|format|query|string|false|Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|msgpack|

> Example responses

> 200 Response

```json
{}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Contains ledger deltas|[LedgerStateDelta](#schemaledgerstatedelta)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Could not find a delta for round|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|timed out on request|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetLedgerStateDeltaForTransactionGroup

<a id="opIdGetLedgerStateDeltaForTransactionGroup"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/deltas/txn/group/{id} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/deltas/txn/group/{id} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/deltas/txn/group/{id}',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/deltas/txn/group/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/deltas/txn/group/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/deltas/txn/group/{id}', array(
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
URL obj = new URL("http://localhost/v2/deltas/txn/group/{id}");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/deltas/txn/group/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/deltas/txn/group/{id}`

*Get a LedgerStateDelta object for a given transaction group*

Get a ledger delta for a given transaction group.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A transaction ID, or transaction group ID|
|format|query|string|false|Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|msgpack|

> Example responses

> 200 Response

```json
{}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response containing a ledger state delta for a single transaction group.|[LedgerStateDelta](#schemaledgerstatedelta)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Could not find a delta for transaction ID or group ID|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|timed out on request|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Not Implemented|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetLightBlockHeaderProof

<a id="opIdGetLightBlockHeaderProof"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/blocks/{round}/lightheader/proof \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/blocks/{round}/lightheader/proof HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/blocks/{round}/lightheader/proof',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/blocks/{round}/lightheader/proof',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/blocks/{round}/lightheader/proof', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/blocks/{round}/lightheader/proof', array(
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
URL obj = new URL("http://localhost/v2/blocks/{round}/lightheader/proof");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/blocks/{round}/lightheader/proof", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/blocks/{round}/lightheader/proof`

*Gets a proof for a given light block header inside a state proof commitment*

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|round|path|integer|true|The round to which the light block header belongs.|

> Example responses

> 200 Response

```json
{
  "index": 0,
  "proof": "string",
  "treedepth": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Proof of a light block header.|[LightBlockHeaderProof](#schemalightblockheaderproof)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Could not create proof since some data is missing|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|timed out on request|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetPendingTransactions

<a id="opIdGetPendingTransactions"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/transactions/pending \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/transactions/pending HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/transactions/pending',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/transactions/pending',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/transactions/pending', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/transactions/pending', array(
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
URL obj = new URL("http://localhost/v2/transactions/pending");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/transactions/pending", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/transactions/pending`

*Get a list of unconfirmed transactions currently in the transaction pool.*

Get the list of pending transactions, sorted by priority, in decreasing order, truncated at the end at MAX. If MAX = 0, returns all pending transactions.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max|query|integer|false|Truncated number of transactions to display. If max=0, returns all pending txns.|
|format|query|string|false|Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|msgpack|

> Example responses

> 200 Response

```json
{
  "top-transactions": [
    {}
  ],
  "total-transactions": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A potentially truncated list of transactions currently in the node's transaction pool. You can compute whether or not the list is truncated if the number of elements in the **top-transactions** array is fewer than **total-transactions**.|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

*PendingTransactions is an array of signed transactions exactly as they were submitted.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» top-transactions|[object]|true|none|An array of signed transaction objects.|
|» total-transactions|integer|true|none|Total number of transactions in the pool.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetPendingTransactionsByAddress

<a id="opIdGetPendingTransactionsByAddress"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/accounts/{address}/transactions/pending \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/accounts/{address}/transactions/pending HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/accounts/{address}/transactions/pending',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/accounts/{address}/transactions/pending',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/accounts/{address}/transactions/pending', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/accounts/{address}/transactions/pending', array(
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
URL obj = new URL("http://localhost/v2/accounts/{address}/transactions/pending");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/accounts/{address}/transactions/pending", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/accounts/{address}/transactions/pending`

*Get a list of unconfirmed transactions currently in the transaction pool by address.*

Get the list of pending transactions by address, sorted by priority, in decreasing order, truncated at the end at MAX. If MAX = 0, returns all pending transactions.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|An account public key|
|max|query|integer|false|Truncated number of transactions to display. If max=0, returns all pending txns.|
|format|query|string|false|Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|msgpack|

> Example responses

> 200 Response

```json
{
  "top-transactions": [
    {}
  ],
  "total-transactions": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A potentially truncated list of transactions currently in the node's transaction pool. You can compute whether or not the list is truncated if the number of elements in the **top-transactions** array is fewer than **total-transactions**.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Max must be a non-negative integer|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

*PendingTransactions is an array of signed transactions exactly as they were submitted.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» top-transactions|[object]|true|none|An array of signed transaction objects.|
|» total-transactions|integer|true|none|Total number of transactions in the pool.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetReady

<a id="opIdGetReady"></a>

> Code samples

```shell

curl -X GET http://localhost/ready \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/ready HTTP/1.1
Host: localhost

```

```javascript

const headers = {
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/ready',
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
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/ready',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/ready', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/ready', array(
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
URL obj = new URL("http://localhost/ready");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/ready", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /ready`

*Returns OK if healthy and fully caught up.*

> Example responses

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|None|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Node not ready yet|None|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetStateProof

<a id="opIdGetStateProof"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/stateproofs/{round} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/stateproofs/{round} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/stateproofs/{round}',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/stateproofs/{round}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/stateproofs/{round}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/stateproofs/{round}', array(
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
URL obj = new URL("http://localhost/v2/stateproofs/{round}");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/stateproofs/{round}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/stateproofs/{round}`

*Get a state proof that covers a given round*

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|round|path|integer|true|The round for which a state proof is desired.|

> Example responses

> 200 Response

```json
{
  "Message": {
    "BlockHeadersCommitment": "string",
    "FirstAttestedRound": 0,
    "LastAttestedRound": 0,
    "LnProvenWeight": 0,
    "VotersCommitment": "string"
  },
  "StateProof": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|StateProofResponse wraps the StateProof type in a response.|[StateProof](#schemastateproof)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Could not find a state proof that covers a given round|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|timed out on request|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetStatus

<a id="opIdGetStatus"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/status \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/status HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/status',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/status',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/status', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/status', array(
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
URL obj = new URL("http://localhost/v2/status");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/status", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/status`

*Gets the current node status.*

> Example responses

> 200 Response

```json
{
  "catchpoint": "string",
  "catchpoint-acquired-blocks": 0,
  "catchpoint-processed-accounts": 0,
  "catchpoint-processed-kvs": 0,
  "catchpoint-total-accounts": 0,
  "catchpoint-total-blocks": 0,
  "catchpoint-total-kvs": 0,
  "catchpoint-verified-accounts": 0,
  "catchpoint-verified-kvs": 0,
  "catchup-time": 0,
  "last-catchpoint": "string",
  "last-round": 0,
  "last-version": "string",
  "next-version": "string",
  "next-version-round": 0,
  "next-version-supported": true,
  "stopped-at-unsupported-round": true,
  "time-since-last-round": 0,
  "upgrade-delay": 0,
  "upgrade-next-protocol-vote-before": 0,
  "upgrade-no-votes": 0,
  "upgrade-node-vote": true,
  "upgrade-vote-rounds": 0,
  "upgrade-votes": 0,
  "upgrade-votes-required": 0,
  "upgrade-yes-votes": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|string|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

*NodeStatus contains the information about a node status*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» catchpoint|string|false|none|The current catchpoint that is being caught up to|
|» catchpoint-acquired-blocks|integer|false|none|The number of blocks that have already been obtained by the node as part of the catchup|
|» catchpoint-processed-accounts|integer|false|none|The number of accounts from the current catchpoint that have been processed so far as part of the catchup|
|» catchpoint-processed-kvs|integer|false|none|The number of key-values (KVs) from the current catchpoint that have been processed so far as part of the catchup|
|» catchpoint-total-accounts|integer|false|none|The total number of accounts included in the current catchpoint|
|» catchpoint-total-blocks|integer|false|none|The total number of blocks that are required to complete the current catchpoint catchup|
|» catchpoint-total-kvs|integer|false|none|The total number of key-values (KVs) included in the current catchpoint|
|» catchpoint-verified-accounts|integer|false|none|The number of accounts from the current catchpoint that have been verified so far as part of the catchup|
|» catchpoint-verified-kvs|integer|false|none|The number of key-values (KVs) from the current catchpoint that have been verified so far as part of the catchup|
|» catchup-time|integer|true|none|CatchupTime in nanoseconds|
|» last-catchpoint|string|false|none|The last catchpoint seen by the node|
|» last-round|integer|true|none|LastRound indicates the last round seen|
|» last-version|string|true|none|LastVersion indicates the last consensus version supported|
|» next-version|string|true|none|NextVersion of consensus protocol to use|
|» next-version-round|integer|true|none|NextVersionRound is the round at which the next consensus version will apply|
|» next-version-supported|boolean|true|none|NextVersionSupported indicates whether the next consensus version is supported by this node|
|» stopped-at-unsupported-round|boolean|true|none|StoppedAtUnsupportedRound indicates that the node does not support the new rounds and has stopped making progress|
|» time-since-last-round|integer|true|none|TimeSinceLastRound in nanoseconds|
|» upgrade-delay|integer|false|none|Upgrade delay|
|» upgrade-next-protocol-vote-before|integer|false|none|Next protocol round|
|» upgrade-no-votes|integer|false|none|No votes cast for consensus upgrade|
|» upgrade-node-vote|boolean|false|none|This node's upgrade vote|
|» upgrade-vote-rounds|integer|false|none|Total voting rounds for current upgrade|
|» upgrade-votes|integer|false|none|Total votes cast for consensus upgrade|
|» upgrade-votes-required|integer|false|none|Yes votes required for consensus upgrade|
|» upgrade-yes-votes|integer|false|none|Yes votes cast for consensus upgrade|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetSupply

<a id="opIdGetSupply"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/ledger/supply \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/ledger/supply HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/ledger/supply',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/ledger/supply',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/ledger/supply', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/ledger/supply', array(
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
URL obj = new URL("http://localhost/v2/ledger/supply");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/ledger/supply", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/ledger/supply`

*Get the current supply reported by the ledger.*

> Example responses

> 200 Response

```json
{
  "current_round": 0,
  "online-money": 0,
  "total-money": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Supply represents the current supply of MicroAlgos in the system.|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

*Supply represents the current supply of MicroAlgos in the system*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» current_round|integer|true|none|Round|
|» online-money|integer|true|none|OnlineMoney|
|» total-money|integer|true|none|TotalMoney|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetSyncRound

<a id="opIdGetSyncRound"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/ledger/sync \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/ledger/sync HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/ledger/sync',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/ledger/sync',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/ledger/sync', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/ledger/sync', array(
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
URL obj = new URL("http://localhost/v2/ledger/sync");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/ledger/sync", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/ledger/sync`

*Returns the minimum sync round the ledger is keeping in cache.*

Gets the minimum sync round for the ledger.

> Example responses

> 200 Response

```json
{
  "round": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response containing the ledger's minimum sync round|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Sync round not set.|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» round|integer|true|none|The minimum sync round for the ledger.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetTransactionGroupLedgerStateDeltasForRound

<a id="opIdGetTransactionGroupLedgerStateDeltasForRound"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/deltas/{round}/txn/group \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/deltas/{round}/txn/group HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/deltas/{round}/txn/group',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/deltas/{round}/txn/group',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/deltas/{round}/txn/group', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/deltas/{round}/txn/group', array(
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
URL obj = new URL("http://localhost/v2/deltas/{round}/txn/group");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/deltas/{round}/txn/group", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/deltas/{round}/txn/group`

*Get LedgerStateDelta objects for all transaction groups in a given round*

Get ledger deltas for transaction groups in a given round.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|round|path|integer|true|The round for which the deltas are desired.|
|format|query|string|false|Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|msgpack|

> Example responses

> 200 Response

```json
{
  "Deltas": [
    {
      "Delta": {},
      "Ids": [
        "string"
      ]
    }
  ]
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response containing all ledger state deltas for transaction groups, with their associated Ids, in a single round.|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Could not find deltas for round|[ErrorResponse](#schemaerrorresponse)|
|408|[Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)|timed out on request|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Not Implemented|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» Deltas|[[LedgerStateDeltaForTransactionGroup](#schemaledgerstatedeltafortransactiongroup)]|true|none|[Contains a ledger delta for a single transaction group]|
|»» Delta|[LedgerStateDelta](#schemaledgerstatedelta)|true|none|Ledger StateDelta object|
|»» Ids|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetTransactionProof

<a id="opIdGetTransactionProof"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/blocks/{round}/transactions/{txid}/proof \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/blocks/{round}/transactions/{txid}/proof HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/blocks/{round}/transactions/{txid}/proof',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/blocks/{round}/transactions/{txid}/proof',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/blocks/{round}/transactions/{txid}/proof', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/blocks/{round}/transactions/{txid}/proof', array(
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
URL obj = new URL("http://localhost/v2/blocks/{round}/transactions/{txid}/proof");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/blocks/{round}/transactions/{txid}/proof", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/blocks/{round}/transactions/{txid}/proof`

*Get a proof for a transaction in a block.*

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|round|path|integer|true|The round in which the transaction appears.|
|txid|path|string|true|The transaction ID for which to generate a proof.|
|hashtype|query|string|false|The type of hash function used to create the proof, must be one of: |
|format|query|string|false|Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.|

#### Detailed descriptions

**hashtype**: The type of hash function used to create the proof, must be one of: 
* sha512_256 
* sha256

#### Enumerated Values

|Parameter|Value|
|---|---|
|hashtype|sha512_256|
|hashtype|sha256|
|format|json|
|format|msgpack|

> Example responses

> 200 Response

```json
{
  "hashtype": "sha512_256",
  "idx": 0,
  "proof": "string",
  "stibhash": "string",
  "treedepth": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Proof of transaction in a block.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Malformed round number or transaction ID|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Non-existent block or transaction|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal error, including protocol not supporting proofs.|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» hashtype|string|true|none|The type of hash function used to create the proof, must be one of: <br>* sha512_256 <br>* sha256|
|» idx|integer|true|none|Index of the transaction in the block's payset.|
|» proof|string(byte)|true|none|Proof of transaction membership.|
|» stibhash|string(byte)|true|none|Hash of SignedTxnInBlock for verifying proof.|
|» treedepth|integer|true|none|Represents the depth of the tree that is being proven, i.e. the number of edges from a leaf to the root.|

#### Enumerated Values

|Property|Value|
|---|---|
|hashtype|sha512_256|
|hashtype|sha256|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetVersion

<a id="opIdGetVersion"></a>

> Code samples

```shell

curl -X GET http://localhost/versions \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/versions HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/versions',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/versions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/versions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/versions', array(
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
URL obj = new URL("http://localhost/versions");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/versions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /versions`

Retrieves the supported API versions, binary build versions, and genesis information.

> Example responses

> 200 Response

```json
{
  "build": {
    "branch": "string",
    "build_number": 0,
    "channel": "string",
    "commit_hash": "string",
    "major": 0,
    "minor": 0
  },
  "genesis_hash_b64": "string",
  "genesis_id": "string",
  "versions": [
    "string"
  ]
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|VersionsResponse is the response to 'GET /versions'|[Version](#schemaversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### HealthCheck

<a id="opIdHealthCheck"></a>

> Code samples

```shell

curl -X GET http://localhost/health \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/health HTTP/1.1
Host: localhost

```

```javascript

const headers = {
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/health',
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
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/health',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/health', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/health', array(
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
URL obj = new URL("http://localhost/health");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/health", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /health`

*Returns OK if healthy.*

> Example responses

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK.|None|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### Metrics

<a id="opIdMetrics"></a>

> Code samples

```shell

curl -X GET http://localhost/metrics \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/metrics HTTP/1.1
Host: localhost

```

```javascript

const headers = {
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/metrics',
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
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/metrics',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/metrics', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/metrics', array(
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
URL obj = new URL("http://localhost/metrics");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/metrics", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /metrics`

*Return metrics about algod functioning.*

> Example responses

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|text with \#-comments and key:value lines|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|metrics were compiled out|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### PendingTransactionInformation

<a id="opIdPendingTransactionInformation"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/transactions/pending/{txid} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/transactions/pending/{txid} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/transactions/pending/{txid}',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/transactions/pending/{txid}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/transactions/pending/{txid}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/transactions/pending/{txid}', array(
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
URL obj = new URL("http://localhost/v2/transactions/pending/{txid}");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/transactions/pending/{txid}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/transactions/pending/{txid}`

*Get a specific pending transaction.*

Given a transaction ID of a recently submitted transaction, it returns information about it.  There are several cases when this might succeed:
- transaction committed (committed round > 0)
- transaction still in the pool (committed round = 0, pool error = "")
- transaction removed from pool due to error (committed round = 0, pool error != "")
Or the transaction may have happened sufficiently long ago that the node no longer remembers it, and this will return an error.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|txid|path|string|true|A transaction ID|
|format|query|string|false|Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|msgpack|

> Example responses

> 200 Response

```json
{
  "application-index": 0,
  "asset-closing-amount": 0,
  "asset-index": 0,
  "close-rewards": 0,
  "closing-amount": 0,
  "confirmed-round": 0,
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
  "inner-txns": [
    {
      "application-index": 0,
      "asset-closing-amount": 0,
      "asset-index": 0,
      "close-rewards": 0,
      "closing-amount": 0,
      "confirmed-round": 0,
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
      "inner-txns": [],
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
      "pool-error": "string",
      "receiver-rewards": 0,
      "sender-rewards": 0,
      "txn": {}
    }
  ],
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
  "pool-error": "string",
  "receiver-rewards": 0,
  "sender-rewards": 0,
  "txn": {}
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Given a transaction ID of a recently submitted transaction, it returns information about it.  There are several cases when this might succeed:
- transaction committed (committed round > 0)
- transaction still in the pool (committed round = 0, pool error = "")
- transaction removed from pool due to error (committed round = 0, pool error != "")

Or the transaction may have happened sufficiently long ago that the node no longer remembers it, and this will return an error.|[PendingTransactionResponse](#schemapendingtransactionresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Transaction Not Found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### RawTransaction

<a id="opIdRawTransaction"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/transactions \
  -H 'Content-Type: application/x-binary' \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/transactions HTTP/1.1
Host: localhost
Content-Type: application/x-binary
Accept: application/json

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/x-binary',
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/transactions',
{
  method: 'POST',
  body: inputBody,
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
  'Content-Type' => 'application/x-binary',
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/transactions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/x-binary',
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/transactions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/x-binary',
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/transactions', array(
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
URL obj = new URL("http://localhost/v2/transactions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "Content-Type": []string{"application/x-binary"},
        "Accept": []string{"application/json"},
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/transactions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/transactions`

*Broadcasts a raw transaction or transaction group to the network.*

> Body parameter

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string(binary)|true|The byte encoded signed transaction to broadcast to network|

> Example responses

> 200 Response

```json
{
  "txId": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Transaction ID of the submission.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request - Malformed Algorand transaction|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» txId|string|true|none|encoding of the transaction hash.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### RawTransactionAsync

<a id="opIdRawTransactionAsync"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/transactions/async \
  -H 'Content-Type: application/x-binary' \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/transactions/async HTTP/1.1
Host: localhost
Content-Type: application/x-binary
Accept: application/json

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/x-binary',
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/transactions/async',
{
  method: 'POST',
  body: inputBody,
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
  'Content-Type' => 'application/x-binary',
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/transactions/async',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/x-binary',
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/transactions/async', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/x-binary',
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/transactions/async', array(
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
URL obj = new URL("http://localhost/v2/transactions/async");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "Content-Type": []string{"application/x-binary"},
        "Accept": []string{"application/json"},
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/transactions/async", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/transactions/async`

*Fast track for broadcasting a raw transaction or transaction group to the network through the tx handler without performing most of the checks and reporting detailed errors. Should be only used for development and performance testing.*

> Body parameter

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string(binary)|true|The byte encoded signed transaction to broadcast to network|

> Example responses

> 400 Response

```json
{
  "data": {},
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request - Malformed Algorand transaction|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Developer or Experimental API not enabled|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### SetBlockTimeStampOffset

<a id="opIdSetBlockTimeStampOffset"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/devmode/blocks/offset/{offset} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/devmode/blocks/offset/{offset} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/devmode/blocks/offset/{offset}',
{
  method: 'POST',

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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/devmode/blocks/offset/{offset}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/devmode/blocks/offset/{offset}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/devmode/blocks/offset/{offset}', array(
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
URL obj = new URL("http://localhost/v2/devmode/blocks/offset/{offset}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/devmode/blocks/offset/{offset}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/devmode/blocks/offset/{offset}`

*Given a timestamp offset in seconds, adds the offset to every subsequent block header's timestamp.*

Sets the timestamp offset (seconds) for blocks in dev mode. Providing an offset of 0 will unset this value and try to use the real clock for the timestamp.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|path|integer|true|The timestamp offset for blocks in dev mode.|

> Example responses

> 400 Response

```json
{
  "data": {},
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Cannot set timestamp offset to a negative integer.|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### SetSyncRound

<a id="opIdSetSyncRound"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/ledger/sync/{round} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/ledger/sync/{round} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/ledger/sync/{round}',
{
  method: 'POST',

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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/ledger/sync/{round}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/ledger/sync/{round}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/ledger/sync/{round}', array(
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
URL obj = new URL("http://localhost/v2/ledger/sync/{round}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/ledger/sync/{round}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/ledger/sync/{round}`

*Given a round, tells the ledger to keep that round in its cache.*

Sets the minimum sync round on the ledger.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|round|path|integer|true|The round for which the deltas are desired.|

> Example responses

> 400 Response

```json
{
  "data": {},
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Can not set sync round to an earlier round than the current round.|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### SimulateTransaction

<a id="opIdSimulateTransaction"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/transactions/simulate \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/transactions/simulate HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "allow-empty-signatures": true,
  "allow-more-logging": true,
  "allow-unnamed-resources": true,
  "exec-trace-config": {
    "enable": true,
    "scratch-change": true,
    "stack-change": true,
    "state-change": true
  },
  "extra-opcode-budget": 0,
  "fix-signers": true,
  "round": 0,
  "txn-groups": [
    {
      "txns": [
        "string"
      ]
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/transactions/simulate',
{
  method: 'POST',
  body: inputBody,
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
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/transactions/simulate',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/transactions/simulate', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/transactions/simulate', array(
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
URL obj = new URL("http://localhost/v2/transactions/simulate");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/transactions/simulate", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/transactions/simulate`

*Simulates a raw transaction or transaction group as it would be evaluated on the network. The simulation will use blockchain state from the latest committed round.*

> Body parameter

```json
{
  "allow-empty-signatures": true,
  "allow-more-logging": true,
  "allow-unnamed-resources": true,
  "exec-trace-config": {
    "enable": true,
    "scratch-change": true,
    "stack-change": true,
    "state-change": true
  },
  "extra-opcode-budget": 0,
  "fix-signers": true,
  "round": 0,
  "txn-groups": [
    {
      "txns": [
        "string"
      ]
    }
  ]
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.|
|body|body|[SimulateRequest](#schemasimulaterequest)|true|The transactions to simulate, along with any other inputs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|msgpack|

> Example responses

> 200 Response

```json
{
  "eval-overrides": {
    "allow-empty-signatures": true,
    "allow-unnamed-resources": true,
    "extra-opcode-budget": 0,
    "fix-signers": true,
    "max-log-calls": 0,
    "max-log-size": 0
  },
  "exec-trace-config": {
    "enable": true,
    "scratch-change": true,
    "stack-change": true,
    "state-change": true
  },
  "initial-states": {
    "app-initial-states": [
      {
        "app-boxes": {
          "account": "string",
          "kvs": [
            {
              "key": "string",
              "value": {
                "bytes": "string",
                "type": 0,
                "uint": 0
              }
            }
          ]
        },
        "app-globals": {
          "account": "string",
          "kvs": [
            {
              "key": "string",
              "value": {
                "bytes": "string",
                "type": 0,
                "uint": 0
              }
            }
          ]
        },
        "app-locals": [
          {
            "account": "string",
            "kvs": [
              {
                "key": "string",
                "value": {
                  "bytes": "string",
                  "type": 0,
                  "uint": 0
                }
              }
            ]
          }
        ],
        "id": 0
      }
    ]
  },
  "last-round": 0,
  "txn-groups": [
    {
      "app-budget-added": 0,
      "app-budget-consumed": 0,
      "failed-at": [
        0
      ],
      "failure-message": "string",
      "txn-results": [
        {
          "app-budget-consumed": 0,
          "exec-trace": {
            "approval-program-hash": "string",
            "approval-program-trace": [
              {
                "pc": 0,
                "scratch-changes": [
                  {
                    "new-value": {},
                    "slot": 0
                  }
                ],
                "spawned-inners": [
                  0
                ],
                "stack-additions": [
                  {
                    "bytes": "string",
                    "type": 0,
                    "uint": 0
                  }
                ],
                "stack-pop-count": 0,
                "state-changes": [
                  {
                    "account": "string",
                    "app-state-type": "string",
                    "key": "string",
                    "new-value": {},
                    "operation": "string"
                  }
                ]
              }
            ],
            "clear-state-program-hash": "string",
            "clear-state-program-trace": [
              {
                "pc": 0,
                "scratch-changes": [
                  {
                    "new-value": {},
                    "slot": 0
                  }
                ],
                "spawned-inners": [
                  0
                ],
                "stack-additions": [
                  {
                    "bytes": "string",
                    "type": 0,
                    "uint": 0
                  }
                ],
                "stack-pop-count": 0,
                "state-changes": [
                  {
                    "account": "string",
                    "app-state-type": "string",
                    "key": "string",
                    "new-value": {},
                    "operation": "string"
                  }
                ]
              }
            ],
            "clear-state-rollback": true,
            "clear-state-rollback-error": "string",
            "inner-trace": [
              {}
            ],
            "logic-sig-hash": "string",
            "logic-sig-trace": [
              {
                "pc": 0,
                "scratch-changes": [
                  {
                    "new-value": {},
                    "slot": 0
                  }
                ],
                "spawned-inners": [
                  0
                ],
                "stack-additions": [
                  {
                    "bytes": "string",
                    "type": 0,
                    "uint": 0
                  }
                ],
                "stack-pop-count": 0,
                "state-changes": [
                  {
                    "account": "string",
                    "app-state-type": "string",
                    "key": "string",
                    "new-value": {},
                    "operation": "string"
                  }
                ]
              }
            ]
          },
          "fixed-signer": "string",
          "logic-sig-budget-consumed": 0,
          "txn-result": {
            "application-index": 0,
            "asset-closing-amount": 0,
            "asset-index": 0,
            "close-rewards": 0,
            "closing-amount": 0,
            "confirmed-round": 0,
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
            "inner-txns": [
              {}
            ],
            "local-state-delta": [
              {
                "address": "string",
                "delta": [
                  {
                    "key": "string",
                    "value": {}
                  }
                ]
              }
            ],
            "logs": [
              "string"
            ],
            "pool-error": "string",
            "receiver-rewards": 0,
            "sender-rewards": 0,
            "txn": {}
          },
          "unnamed-resources-accessed": {
            "accounts": [
              "string"
            ],
            "app-locals": [
              {
                "account": "string",
                "app": 0
              }
            ],
            "apps": [
              0
            ],
            "asset-holdings": [
              {
                "account": "string",
                "asset": 0
              }
            ],
            "assets": [
              0
            ],
            "boxes": [
              {
                "app": 0,
                "name": "string"
              }
            ],
            "extra-box-refs": 0
          }
        }
      ],
      "unnamed-resources-accessed": {
        "accounts": [
          "string"
        ],
        "app-locals": [
          {
            "account": "string",
            "app": 0
          }
        ],
        "apps": [
          0
        ],
        "asset-holdings": [
          {
            "account": "string",
            "asset": 0
          }
        ],
        "assets": [
          0
        ],
        "boxes": [
          {
            "app": 0,
            "name": "string"
          }
        ],
        "extra-box-refs": 0
      }
    }
  ],
  "version": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Result of a transaction group simulation.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» eval-overrides|[SimulationEvalOverrides](#schemasimulationevaloverrides)|false|none|The set of parameters and limits override during simulation. If this set of parameters is present, then evaluation parameters may differ from standard evaluation in certain ways.|
|»» allow-empty-signatures|boolean|false|none|If true, transactions without signatures are allowed and simulated as if they were properly signed.|
|»» allow-unnamed-resources|boolean|false|none|If true, allows access to unnamed resources during simulation.|
|»» extra-opcode-budget|integer|false|none|The extra opcode budget added to each transaction group during simulation|
|»» fix-signers|boolean|false|none|If true, signers for transactions that are missing signatures will be fixed during evaluation.|
|»» max-log-calls|integer|false|none|The maximum log calls one can make during simulation|
|»» max-log-size|integer|false|none|The maximum byte number to log during simulation|
|» exec-trace-config|[SimulateTraceConfig](#schemasimulatetraceconfig)|false|none|An object that configures simulation execution trace.|
|»» enable|boolean|false|none|A boolean option for opting in execution trace features simulation endpoint.|
|»» scratch-change|boolean|false|none|A boolean option enabling returning scratch slot changes together with execution trace during simulation.|
|»» stack-change|boolean|false|none|A boolean option enabling returning stack changes together with execution trace during simulation.|
|»» state-change|boolean|false|none|A boolean option enabling returning application state changes (global, local, and box changes) with the execution trace during simulation.|
|» initial-states|[SimulateInitialStates](#schemasimulateinitialstates)|false|none|Initial states of resources that were accessed during simulation.|
|»» app-initial-states|[[ApplicationInitialStates](#schemaapplicationinitialstates)]|false|none|The initial states of accessed application before simulation. The order of this array is arbitrary.|
|»»» app-boxes|[ApplicationKVStorage](#schemaapplicationkvstorage)|false|none|An application's global/local/box state.|
|»»»» account|string|false|none|The address of the account associated with the local state.|
|»»»» kvs|[[AvmKeyValue](#schemaavmkeyvalue)]|true|none|Key-Value pairs representing application states.|
|»»»»» key|string(byte)|true|none|none|
|»»»»» value|[AvmValue](#schemaavmvalue)|true|none|Represents an AVM value.|
|»»»»»» bytes|string(byte)|false|none|bytes value.|
|»»»»»» type|integer|true|none|value type. Value `1` refers to **bytes**, value `2` refers to **uint64**|
|»»»»»» uint|integer|false|none|uint value.|
|»»» app-globals|[ApplicationKVStorage](#schemaapplicationkvstorage)|false|none|An application's global/local/box state.|
|»»» app-locals|[[ApplicationKVStorage](#schemaapplicationkvstorage)]|false|none|An application's initial local states tied to different accounts.|
|»»» id|integer|true|none|Application index.|
|» last-round|integer|true|none|The round immediately preceding this simulation. State changes through this round were used to run this simulation.|
|» txn-groups|[[SimulateTransactionGroupResult](#schemasimulatetransactiongroupresult)]|true|none|A result object for each transaction group that was simulated.|
|»» app-budget-added|integer|false|none|Total budget added during execution of app calls in the transaction group.|
|»» app-budget-consumed|integer|false|none|Total budget consumed during execution of app calls in the transaction group.|
|»» failed-at|[integer]|false|none|If present, indicates which transaction in this group caused the failure. This array represents the path to the failing transaction. Indexes are zero based, the first element indicates the top-level transaction, and successive elements indicate deeper inner transactions.|
|»» failure-message|string|false|none|If present, indicates that the transaction group failed and specifies why that happened|
|»» txn-results|[[SimulateTransactionResult](#schemasimulatetransactionresult)]|true|none|Simulation result for individual transactions|
|»»» app-budget-consumed|integer|false|none|Budget used during execution of an app call transaction. This value includes budged used by inner app calls spawned by this transaction.|
|»»» exec-trace|[SimulationTransactionExecTrace](#schemasimulationtransactionexectrace)|false|none|The execution trace of calling an app or a logic sig, containing the inner app call trace in a recursive way.|
|»»»» approval-program-hash|string(byte)|false|none|SHA512_256 hash digest of the approval program executed in transaction.|
|»»»» approval-program-trace|[[SimulationOpcodeTraceUnit](#schemasimulationopcodetraceunit)]|false|none|Program trace that contains a trace of opcode effects in an approval program.|
|»»»»» pc|integer|true|none|The program counter of the current opcode being evaluated.|
|»»»»» scratch-changes|[[ScratchChange](#schemascratchchange)]|false|none|The writes into scratch slots.|
|»»»»»» new-value|[AvmValue](#schemaavmvalue)|true|none|Represents an AVM value.|
|»»»»»» slot|integer|true|none|The scratch slot written.|
|»»»»» spawned-inners|[integer]|false|none|The indexes of the traces for inner transactions spawned by this opcode, if any.|
|»»»»» stack-additions|[[AvmValue](#schemaavmvalue)]|false|none|The values added by this opcode to the stack.|
|»»»»» stack-pop-count|integer|false|none|The number of deleted stack values by this opcode.|
|»»»»» state-changes|[[ApplicationStateOperation](#schemaapplicationstateoperation)]|false|none|The operations against the current application's states.|
|»»»»»» account|string|false|none|For local state changes, the address of the account associated with the local state.|
|»»»»»» app-state-type|string|true|none|Type of application state. Value `g` is **global state**, `l` is **local state**, `b` is **boxes**.|
|»»»»»» key|string(byte)|true|none|The key (name) of the global/local/box state.|
|»»»»»» new-value|[AvmValue](#schemaavmvalue)|false|none|Represents an AVM value.|
|»»»»»» operation|string|true|none|Operation type. Value `w` is **write**, `d` is **delete**.|
|»»»» clear-state-program-hash|string(byte)|false|none|SHA512_256 hash digest of the clear state program executed in transaction.|
|»»»» clear-state-program-trace|[[SimulationOpcodeTraceUnit](#schemasimulationopcodetraceunit)]|false|none|Program trace that contains a trace of opcode effects in a clear state program.|
|»»»» clear-state-rollback|boolean|false|none|If true, indicates that the clear state program failed and any persistent state changes it produced should be reverted once the program exits.|
|»»»» clear-state-rollback-error|string|false|none|The error message explaining why the clear state program failed. This field will only be populated if clear-state-rollback is true and the failure was due to an execution error.|
|»»»» inner-trace|[[SimulationTransactionExecTrace](#schemasimulationtransactionexectrace)]|false|none|An array of SimulationTransactionExecTrace representing the execution trace of any inner transactions executed.|
|»»»» logic-sig-hash|string(byte)|false|none|SHA512_256 hash digest of the logic sig executed in transaction.|
|»»»» logic-sig-trace|[[SimulationOpcodeTraceUnit](#schemasimulationopcodetraceunit)]|false|none|Program trace that contains a trace of opcode effects in a logic sig.|
|»»» fixed-signer|string|false|none|The account that needed to sign this transaction when no signature was provided and the provided signer was incorrect.|
|»»» logic-sig-budget-consumed|integer|false|none|Budget used during execution of a logic sig transaction.|
|»»» txn-result|[PendingTransactionResponse](#schemapendingtransactionresponse)|true|none|Details about a pending transaction. If the transaction was recently confirmed, includes confirmation details like the round and reward details.|
|»»»» application-index|integer|false|none|The application index if the transaction was found and it created an application.|
|»»»» asset-closing-amount|integer|false|none|The number of the asset's unit that were transferred to the close-to address.|
|»»»» asset-index|integer|false|none|The asset index if the transaction was found and it created an asset.|
|»»»» close-rewards|integer|false|none|Rewards in microalgos applied to the close remainder to account.|
|»»»» closing-amount|integer|false|none|Closing amount for the transaction.|
|»»»» confirmed-round|integer|false|none|The round where this transaction was confirmed, if present.|
|»»»» global-state-delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|false|none|Application state delta.|
|»»»»» key|string|true|none|none|
|»»»»» value|[EvalDelta](#schemaevaldelta)|true|none|Represents a TEAL value delta.|
|»»»»»» action|integer|true|none|\[at\] delta action.|
|»»»»»» bytes|string|false|none|\[bs\] bytes value.|
|»»»»»» uint|integer|false|none|\[ui\] uint value.|
|»»»» inner-txns|[[PendingTransactionResponse](#schemapendingtransactionresponse)]|false|none|Inner transactions produced by application execution.|
|»»»» local-state-delta|[[AccountStateDelta](#schemaaccountstatedelta)]|false|none|Local state key/value changes for the application being executed by this transaction.|
|»»»»» address|string|true|none|none|
|»»»»» delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|true|none|Application state delta.|
|»»»» logs|[string]|false|none|Logs for the application being executed by this transaction.|
|»»»» pool-error|string|true|none|Indicates that the transaction was kicked out of this node's transaction pool (and specifies why that happened).  An empty string indicates the transaction wasn't kicked out of this node's txpool due to an error.|
|»»»» receiver-rewards|integer|false|none|Rewards in microalgos applied to the receiver account.|
|»»»» sender-rewards|integer|false|none|Rewards in microalgos applied to the sender account.|
|»»»» txn|object|true|none|The raw signed transaction.|
|»»» unnamed-resources-accessed|[SimulateUnnamedResourcesAccessed](#schemasimulateunnamedresourcesaccessed)|false|none|These are resources that were accessed by this group that would normally have caused failure, but were allowed in simulation. Depending on where this object is in the response, the unnamed resources it contains may or may not qualify for group resource sharing. If this is a field in SimulateTransactionGroupResult, the resources do qualify, but if this is a field in SimulateTransactionResult, they do not qualify. In order to make this group valid for actual submission, resources that qualify for group sharing can be made available by any transaction of the group; otherwise, resources must be placed in the same transaction which accessed them.|
|»»»» accounts|[string]|false|none|The unnamed accounts that were referenced. The order of this array is arbitrary.|
|»»»» app-locals|[[ApplicationLocalReference](#schemaapplicationlocalreference)]|false|none|The unnamed application local states that were referenced. The order of this array is arbitrary.|
|»»»»» account|string|true|none|Address of the account with the local state.|
|»»»»» app|integer|true|none|Application ID of the local state application.|
|»»»» apps|[integer]|false|none|The unnamed applications that were referenced. The order of this array is arbitrary.|
|»»»» asset-holdings|[[AssetHoldingReference](#schemaassetholdingreference)]|false|none|The unnamed asset holdings that were referenced. The order of this array is arbitrary.|
|»»»»» account|string|true|none|Address of the account holding the asset.|
|»»»»» asset|integer|true|none|Asset ID of the holding.|
|»»»» assets|[integer]|false|none|The unnamed assets that were referenced. The order of this array is arbitrary.|
|»»»» boxes|[[BoxReference](#schemaboxreference)]|false|none|The unnamed boxes that were referenced. The order of this array is arbitrary.|
|»»»»» app|integer|true|none|Application ID which this box belongs to|
|»»»»» name|string(byte)|true|none|Base64 encoded box name|
|»»»» extra-box-refs|integer|false|none|The number of extra box references used to increase the IO budget. This is in addition to the references defined in the input transaction group and any referenced to unnamed boxes.|
|»» unnamed-resources-accessed|[SimulateUnnamedResourcesAccessed](#schemasimulateunnamedresourcesaccessed)|false|none|These are resources that were accessed by this group that would normally have caused failure, but were allowed in simulation. Depending on where this object is in the response, the unnamed resources it contains may or may not qualify for group resource sharing. If this is a field in SimulateTransactionGroupResult, the resources do qualify, but if this is a field in SimulateTransactionResult, they do not qualify. In order to make this group valid for actual submission, resources that qualify for group sharing can be made available by any transaction of the group; otherwise, resources must be placed in the same transaction which accessed them.|
|» version|integer|true|none|The version of this response object.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### SwaggerJSON

<a id="opIdSwaggerJSON"></a>

> Code samples

```shell

curl -X GET http://localhost/swagger.json \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/swagger.json HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/swagger.json',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/swagger.json',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/swagger.json', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/swagger.json', array(
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
URL obj = new URL("http://localhost/swagger.json");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/swagger.json", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /swagger.json`

*Gets the current swagger spec.*

Returns the entire swagger spec in json.

> Example responses

> 200 Response

```json
"string"
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The current swagger spec|string|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### TealCompile

<a id="opIdTealCompile"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/teal/compile \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/teal/compile HTTP/1.1
Host: localhost
Content-Type: text/plain
Accept: application/json

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'text/plain',
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/teal/compile',
{
  method: 'POST',
  body: inputBody,
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
  'Content-Type' => 'text/plain',
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/teal/compile',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'text/plain',
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/teal/compile', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'text/plain',
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/teal/compile', array(
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
URL obj = new URL("http://localhost/v2/teal/compile");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "Content-Type": []string{"text/plain"},
        "Accept": []string{"application/json"},
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/teal/compile", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/teal/compile`

*Compile TEAL source code to binary, produce its hash*

Given TEAL source code in plain text, return base64 encoded program bytes and base32 SHA512_256 hash of program bytes (Address style). This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.

> Body parameter

```
string

```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourcemap|query|boolean|false|When set to `true`, returns the source map of the program as a JSON. Defaults to `false`.|
|body|body|string(binary)|true|TEAL source code to be compiled|

> Example responses

> 200 Response

```json
{
  "hash": "string",
  "result": "string",
  "sourcemap": {}
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Teal compile Result|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request - Teal Compile Error|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Developer API not enabled|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» hash|string|true|none|base32 SHA512_256 of program bytes (Address style)|
|» result|string|true|none|base64 encoded program bytes|
|» sourcemap|object|false|none|JSON of the source map|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### TealDisassemble

<a id="opIdTealDisassemble"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/teal/disassemble \
  -H 'Content-Type: application/x-binary' \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/teal/disassemble HTTP/1.1
Host: localhost
Content-Type: application/x-binary
Accept: application/json

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/x-binary',
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/teal/disassemble',
{
  method: 'POST',
  body: inputBody,
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
  'Content-Type' => 'application/x-binary',
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/teal/disassemble',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/x-binary',
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/teal/disassemble', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/x-binary',
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/teal/disassemble', array(
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
URL obj = new URL("http://localhost/v2/teal/disassemble");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "Content-Type": []string{"application/x-binary"},
        "Accept": []string{"application/json"},
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/teal/disassemble", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/teal/disassemble`

*Disassemble program bytes into the TEAL source code.*

Given the program bytes, return the TEAL source code in plain text. This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.

> Body parameter

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string(byte)|true|TEAL program binary to be disassembled|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Teal disassembly Result|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request - Teal Compile Error|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Developer API not enabled|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» result|string|true|none|disassembled Teal code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### TealDryrun

<a id="opIdTealDryrun"></a>

> Code samples

```shell

curl -X POST http://localhost/v2/teal/dryrun \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
POST http://localhost/v2/teal/dryrun HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "accounts": [
    {
      "address": "string",
      "amount": 0,
      "amount-without-pending-rewards": 0,
      "apps-local-state": [
        {
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
          "is-frozen": true
        }
      ],
      "auth-addr": "string",
      "created-apps": [
        {
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
            }
          }
        }
      ],
      "created-assets": [
        {
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
  "apps": [
    {
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
        }
      }
    }
  ],
  "latest-timestamp": 0,
  "protocol-version": "string",
  "round": 0,
  "sources": [
    {
      "app-index": 0,
      "field-name": "string",
      "source": "string",
      "txn-index": 0
    }
  ],
  "txns": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/teal/dryrun',
{
  method: 'POST',
  body: inputBody,
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
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v2/teal/dryrun',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v2/teal/dryrun', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v2/teal/dryrun', array(
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
URL obj = new URL("http://localhost/v2/teal/dryrun");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
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
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v2/teal/dryrun", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v2/teal/dryrun`

*Provide debugging information for a transaction (or group).*

Executes TEAL program(s) in context and returns debugging information about the execution. This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.

> Body parameter

```json
{
  "accounts": [
    {
      "address": "string",
      "amount": 0,
      "amount-without-pending-rewards": 0,
      "apps-local-state": [
        {
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
          "is-frozen": true
        }
      ],
      "auth-addr": "string",
      "created-apps": [
        {
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
            }
          }
        }
      ],
      "created-assets": [
        {
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
  "apps": [
    {
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
        }
      }
    }
  ],
  "latest-timestamp": 0,
  "protocol-version": "string",
  "round": 0,
  "sources": [
    {
      "app-index": 0,
      "field-name": "string",
      "source": "string",
      "txn-index": 0
    }
  ],
  "txns": [
    "string"
  ]
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DryrunRequest](#schemadryrunrequest)|false|Transaction (or group) and any accompanying state-simulation data.|

> Example responses

> 200 Response

```json
{
  "error": "string",
  "protocol-version": "string",
  "txns": [
    {
      "app-call-messages": [
        "string"
      ],
      "app-call-trace": [
        {
          "error": "string",
          "line": 0,
          "pc": 0,
          "scratch": [
            {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          ],
          "stack": [
            {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          ]
        }
      ],
      "budget-added": 0,
      "budget-consumed": 0,
      "disassembly": [
        "string"
      ],
      "global-delta": [
        {
          "key": "string",
          "value": {
            "action": 0,
            "bytes": "string",
            "uint": 0
          }
        }
      ],
      "local-deltas": [
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
      "logic-sig-disassembly": [
        "string"
      ],
      "logic-sig-messages": [
        "string"
      ],
      "logic-sig-trace": [
        {
          "error": "string",
          "line": 0,
          "pc": 0,
          "scratch": [
            {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          ],
          "stack": [
            {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          ]
        }
      ],
      "logs": [
        "string"
      ]
    }
  ]
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|DryrunResponse contains per-txn debug information from a dryrun.|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Developer API not enabled|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» error|string|true|none|none|
|» protocol-version|string|true|none|Protocol version is the protocol version Dryrun was operated under.|
|» txns|[[DryrunTxnResult](#schemadryruntxnresult)]|true|none|[DryrunTxnResult contains any LogicSig or ApplicationCall program debug information and state updates from a dryrun.]|
|»» app-call-messages|[string]|false|none|none|
|»» app-call-trace|[[DryrunState](#schemadryrunstate)]|false|none|[Stores the TEAL eval step data]|
|»»» error|string|false|none|Evaluation error if any|
|»»» line|integer|true|none|Line number|
|»»» pc|integer|true|none|Program counter|
|»»» scratch|[[TealValue](#schematealvalue)]|false|none|[Represents a TEAL value.]|
|»»»» bytes|string|true|none|\[tb\] bytes value.|
|»»»» type|integer|true|none|\[tt\] value type. Value `1` refers to **bytes**, value `2` refers to **uint**|
|»»»» uint|integer|true|none|\[ui\] uint value.|
|»»» stack|[[TealValue](#schematealvalue)]|true|none|[Represents a TEAL value.]|
|»» budget-added|integer|false|none|Budget added during execution of app call transaction.|
|»» budget-consumed|integer|false|none|Budget consumed during execution of app call transaction.|
|»» disassembly|[string]|true|none|Disassembled program line by line.|
|»» global-delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|false|none|Application state delta.|
|»»» key|string|true|none|none|
|»»» value|[EvalDelta](#schemaevaldelta)|true|none|Represents a TEAL value delta.|
|»»»» action|integer|true|none|\[at\] delta action.|
|»»»» bytes|string|false|none|\[bs\] bytes value.|
|»»»» uint|integer|false|none|\[ui\] uint value.|
|»» local-deltas|[[AccountStateDelta](#schemaaccountstatedelta)]|false|none|[Application state delta.]|
|»»» address|string|true|none|none|
|»»» delta|[[EvalDeltaKeyValue](#schemaevaldeltakeyvalue)]|true|none|Application state delta.|
|»» logic-sig-disassembly|[string]|false|none|Disassembled lsig program line by line.|
|»» logic-sig-messages|[string]|false|none|none|
|»» logic-sig-trace|[[DryrunState](#schemadryrunstate)]|false|none|[Stores the TEAL eval step data]|
|»» logs|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### TransactionParams

<a id="opIdTransactionParams"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/transactions/params \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/transactions/params HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/transactions/params',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/transactions/params',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/transactions/params', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/transactions/params', array(
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
URL obj = new URL("http://localhost/v2/transactions/params");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/transactions/params", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/transactions/params`

*Get parameters for constructing a new transaction*

> Example responses

> 200 Response

```json
{
  "consensus-version": "string",
  "fee": 0,
  "genesis-hash": "string",
  "genesis-id": "string",
  "last-round": 0,
  "min-fee": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|TransactionParams contains the parameters that help a client construct a new transaction.|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

*TransactionParams contains the parameters that help a client construct
a new transaction.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» consensus-version|string|true|none|ConsensusVersion indicates the consensus protocol version<br>as of LastRound.|
|» fee|integer|true|none|Fee is the suggested transaction fee<br>Fee is in units of micro-Algos per byte.<br>Fee may fall to zero but transactions must still have a fee of<br>at least MinTxnFee for the current network protocol.|
|» genesis-hash|string(byte)|true|none|GenesisHash is the hash of the genesis block.|
|» genesis-id|string|true|none|GenesisID is an ID listed in the genesis block.|
|» last-round|integer|true|none|LastRound indicates the last round seen|
|» min-fee|integer|true|none|The minimum transaction fee (not per byte) required for the<br>txn to validate for the current network protocol.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### UnsetSyncRound

<a id="opIdUnsetSyncRound"></a>

> Code samples

```shell

curl -X DELETE http://localhost/v2/ledger/sync \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
DELETE http://localhost/v2/ledger/sync HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/ledger/sync',
{
  method: 'DELETE',

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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.delete 'http://localhost/v2/ledger/sync',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.delete('http://localhost/v2/ledger/sync', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://localhost/v2/ledger/sync', array(
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
URL obj = new URL("http://localhost/v2/ledger/sync");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost/v2/ledger/sync", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /v2/ledger/sync`

*Removes minimum sync round restriction from the ledger.*

Unset the ledger sync round.

> Example responses

> 400 Response

```json
{
  "data": {},
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Sync round not set.|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### WaitForBlock

<a id="opIdWaitForBlock"></a>

> Code samples

```shell

curl -X GET http://localhost/v2/status/wait-for-block-after/{round} \
  -H 'Accept: application/json' \
  -H 'X-Algo-API-Token: API_KEY'

```

```http
GET http://localhost/v2/status/wait-for-block-after/{round} HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Algo-API-Token':'API_KEY'
};

fetch('http://localhost/v2/status/wait-for-block-after/{round}',
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
  'Accept' => 'application/json',
  'X-Algo-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v2/status/wait-for-block-after/{round}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Algo-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v2/status/wait-for-block-after/{round}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Algo-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v2/status/wait-for-block-after/{round}', array(
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
URL obj = new URL("http://localhost/v2/status/wait-for-block-after/{round}");
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
        "X-Algo-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v2/status/wait-for-block-after/{round}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v2/status/wait-for-block-after/{round}`

*Gets the node status after waiting for a round after the given round.*

Waits for a block to appear after round {round} and returns the node's status at the time. There is a 1 minute timeout, when reached the current status is returned regardless of whether or not it is the round after the given round.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|round|path|integer|true|The round to wait until returning status|

> Example responses

> 200 Response

```json
{
  "catchpoint": "string",
  "catchpoint-acquired-blocks": 0,
  "catchpoint-processed-accounts": 0,
  "catchpoint-processed-kvs": 0,
  "catchpoint-total-accounts": 0,
  "catchpoint-total-blocks": 0,
  "catchpoint-total-kvs": 0,
  "catchpoint-verified-accounts": 0,
  "catchpoint-verified-kvs": 0,
  "catchup-time": 0,
  "last-catchpoint": "string",
  "last-round": 0,
  "last-version": "string",
  "next-version": "string",
  "next-version-round": 0,
  "next-version-supported": true,
  "stopped-at-unsupported-round": true,
  "time-since-last-round": 0,
  "upgrade-delay": 0,
  "upgrade-next-protocol-vote-before": 0,
  "upgrade-no-votes": 0,
  "upgrade-node-vote": true,
  "upgrade-vote-rounds": 0,
  "upgrade-votes": 0,
  "upgrade-votes-required": 0,
  "upgrade-yes-votes": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request -- number must be non-negative integer|[ErrorResponse](#schemaerrorresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid API Token|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|[ErrorResponse](#schemaerrorresponse)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Service Temporarily Unavailable|[ErrorResponse](#schemaerrorresponse)|
|default|Default|Unknown Error|None|

#### Response Schema

Status Code **200**

*NodeStatus contains the information about a node status*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» catchpoint|string|false|none|The current catchpoint that is being caught up to|
|» catchpoint-acquired-blocks|integer|false|none|The number of blocks that have already been obtained by the node as part of the catchup|
|» catchpoint-processed-accounts|integer|false|none|The number of accounts from the current catchpoint that have been processed so far as part of the catchup|
|» catchpoint-processed-kvs|integer|false|none|The number of key-values (KVs) from the current catchpoint that have been processed so far as part of the catchup|
|» catchpoint-total-accounts|integer|false|none|The total number of accounts included in the current catchpoint|
|» catchpoint-total-blocks|integer|false|none|The total number of blocks that are required to complete the current catchpoint catchup|
|» catchpoint-total-kvs|integer|false|none|The total number of key-values (KVs) included in the current catchpoint|
|» catchpoint-verified-accounts|integer|false|none|The number of accounts from the current catchpoint that have been verified so far as part of the catchup|
|» catchpoint-verified-kvs|integer|false|none|The number of key-values (KVs) from the current catchpoint that have been verified so far as part of the catchup|
|» catchup-time|integer|true|none|CatchupTime in nanoseconds|
|» last-catchpoint|string|false|none|The last catchpoint seen by the node|
|» last-round|integer|true|none|LastRound indicates the last round seen|
|» last-version|string|true|none|LastVersion indicates the last consensus version supported|
|» next-version|string|true|none|NextVersion of consensus protocol to use|
|» next-version-round|integer|true|none|NextVersionRound is the round at which the next consensus version will apply|
|» next-version-supported|boolean|true|none|NextVersionSupported indicates whether the next consensus version is supported by this node|
|» stopped-at-unsupported-round|boolean|true|none|StoppedAtUnsupportedRound indicates that the node does not support the new rounds and has stopped making progress|
|» time-since-last-round|integer|true|none|TimeSinceLastRound in nanoseconds|
|» upgrade-delay|integer|false|none|Upgrade delay|
|» upgrade-next-protocol-vote-before|integer|false|none|Next protocol round|
|» upgrade-no-votes|integer|false|none|No votes cast for consensus upgrade|
|» upgrade-node-vote|boolean|false|none|This node's upgrade vote|
|» upgrade-vote-rounds|integer|false|none|Total voting rounds for current upgrade|
|» upgrade-votes|integer|false|none|Total votes cast for consensus upgrade|
|» upgrade-votes-required|integer|false|none|Yes votes required for consensus upgrade|
|» upgrade-yes-votes|integer|false|none|Yes votes cast for consensus upgrade|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
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
      "is-frozen": true
    }
  ],
  "auth-addr": "string",
  "created-apps": [
    {
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
        }
      }
    }
  ],
  "created-assets": [
    {
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
|amount|integer|true|none|\[algo\] total number of MicroAlgos in the account|
|amount-without-pending-rewards|integer|true|none|specifies the amount of MicroAlgos in the account, without the pending rewards.|
|apps-local-state|[[ApplicationLocalState](#schemaapplicationlocalstate)]|false|none|\[appl\] applications local data stored in this account.<br><br>Note the raw object uses `map[int] -> AppLocalState` for this type.|
|apps-total-extra-pages|integer|false|none|\[teap\] the sum of all extra application program pages for this account.|
|apps-total-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|assets|[[AssetHolding](#schemaassetholding)]|false|none|\[asset\] assets held by this account.<br><br>Note the raw object uses `map[int] -> AssetHolding` for this type.|
|auth-addr|string|false|none|\[spend\] the address against which signing should be checked. If empty, the address of the current account is used. This field can be updated in any transaction by setting the RekeyTo field.|
|created-apps|[[Application](#schemaapplication)]|false|none|\[appp\] parameters of applications created by this account including app global data.<br><br>Note: the raw account uses `map[int] -> AppParams` for this type.|
|created-assets|[[Asset](#schemaasset)]|false|none|\[apar\] parameters of assets created by this account.<br><br>Note: the raw account uses `map[int] -> Asset` for this type.|
|incentive-eligible|boolean|false|none|Whether or not the account can receive block incentives if its balance is in range at proposal time.|
|last-heartbeat|integer|false|none|The round in which this account last went online, or explicitly renewed their online status.|
|last-proposed|integer|false|none|The round in which this account last proposed the block.|
|min-balance|integer|true|none|MicroAlgo balance required by the account.<br><br>The requirement grows based on asset and application usage.|
|participation|[AccountParticipation](#schemaaccountparticipation)|false|none|AccountParticipation describes the parameters used by this account in consensus protocol.|
|pending-rewards|integer|true|none|amount of MicroAlgos of pending rewards in this account.|
|reward-base|integer|false|none|\[ebase\] used as part of the rewards computation. Only applicable to accounts which are participating.|
|rewards|integer|true|none|\[ern\] total rewards of MicroAlgos the account has received, including pending rewards.|
|round|integer|true|none|The round for which this information is relevant.|
|sig-type|string|false|none|Indicates what type of signature is used by this account, must be one of:<br>* sig<br>* msig<br>* lsig|
|status|string|true|none|\[onl\] delegation status of the account's MicroAlgos<br>* Offline - indicates that the associated account is delegated.<br>*  Online  - indicates that the associated account used as part of the delegation pool.<br>*   NotParticipating - indicates that the associated account is neither a delegator nor a delegate.|
|total-apps-opted-in|integer|true|none|The count of all applications that have been opted in, equivalent to the count of application local data (AppLocalState objects) stored in this account.|
|total-assets-opted-in|integer|true|none|The count of all assets that have been opted in, equivalent to the count of AssetHolding objects held by this account.|
|total-box-bytes|integer|false|none|\[tbxb\] The total number of bytes used by this account's app's box keys and values.|
|total-boxes|integer|false|none|\[tbx\] The number of existing boxes created by this account's app.|
|total-created-apps|integer|true|none|The count of all apps (AppParams objects) created by this account.|
|total-created-assets|integer|true|none|The count of all assets (AssetParams objects) created by this account.|

#### Enumerated Values

|Property|Value|
|---|---|
|sig-type|sig|
|sig-type|msig|
|sig-type|lsig|


### AccountAssetHolding
<!-- backwards compatibility -->
<a id="schemaaccountassetholding"></a>
<a id="schema_AccountAssetHolding"></a>
<a id="tocSaccountassetholding"></a>
<a id="tocsaccountassetholding"></a>

```json
{
  "asset-holding": {
    "amount": 0,
    "asset-id": 0,
    "is-frozen": true
  },
  "asset-params": {
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

AccountAssetHolding describes the account's asset holding and asset parameters (if either exist) for a specific asset ID.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset-holding|[AssetHolding](#schemaassetholding)|true|none|Describes an asset held by an account.<br><br>Definition:<br>data/basics/userBalance.go : AssetHolding|
|asset-params|[AssetParams](#schemaassetparams)|false|none|AssetParams specifies the parameters for an asset.<br><br>\[apar\] when part of an AssetConfig transaction.<br><br>Definition:<br>data/transactions/asset.go : AssetParams|


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
|selection-participation-key|string(byte)|true|none|\[sel\] Selection public key (if any) currently registered for this round.|
|state-proof-key|string(byte)|false|none|\[stprf\] Root of the state proof key (if any)|
|vote-first-valid|integer|true|none|\[voteFst\] First round for which this participation is valid.|
|vote-key-dilution|integer|true|none|\[voteKD\] Number of subkeys in each batch of participation keys.|
|vote-last-valid|integer|true|none|\[voteLst\] Last round for which this participation is valid.|
|vote-participation-key|string(byte)|true|none|\[vote\] root participation public key (if any) currently registered for this round.|


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


### AppCallLogs
<!-- backwards compatibility -->
<a id="schemaappcalllogs"></a>
<a id="schema_AppCallLogs"></a>
<a id="tocSappcalllogs"></a>
<a id="tocsappcalllogs"></a>

```json
{
  "application-index": 0,
  "logs": [
    "string"
  ],
  "txId": "string"
}

```

The logged messages from an app call along with the app ID and outer transaction ID. Logs appear in the same order that they were emitted.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application-index|integer|true|none|The application from which the logs were generated|
|logs|[string]|true|none|An array of logs|
|txId|string|true|none|The transaction ID of the outer app call that lead to these logs|


### Application
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
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
    }
  }
}

```

Application index and its parameters

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|\[appidx\] application index.|
|params|[ApplicationParams](#schemaapplicationparams)|true|none|Stores the global information associated with an application.|


### ApplicationInitialStates
<!-- backwards compatibility -->
<a id="schemaapplicationinitialstates"></a>
<a id="schema_ApplicationInitialStates"></a>
<a id="tocSapplicationinitialstates"></a>
<a id="tocsapplicationinitialstates"></a>

```json
{
  "app-boxes": {
    "account": "string",
    "kvs": [
      {
        "key": "string",
        "value": {
          "bytes": "string",
          "type": 0,
          "uint": 0
        }
      }
    ]
  },
  "app-globals": {
    "account": "string",
    "kvs": [
      {
        "key": "string",
        "value": {
          "bytes": "string",
          "type": 0,
          "uint": 0
        }
      }
    ]
  },
  "app-locals": [
    {
      "account": "string",
      "kvs": [
        {
          "key": "string",
          "value": {
            "bytes": "string",
            "type": 0,
            "uint": 0
          }
        }
      ]
    }
  ],
  "id": 0
}

```

An application's initial global/local/box states that were accessed during simulation.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app-boxes|[ApplicationKVStorage](#schemaapplicationkvstorage)|false|none|An application's global/local/box state.|
|app-globals|[ApplicationKVStorage](#schemaapplicationkvstorage)|false|none|An application's global/local/box state.|
|app-locals|[[ApplicationKVStorage](#schemaapplicationkvstorage)]|false|none|An application's initial local states tied to different accounts.|
|id|integer|true|none|Application index.|


### ApplicationKVStorage
<!-- backwards compatibility -->
<a id="schemaapplicationkvstorage"></a>
<a id="schema_ApplicationKVStorage"></a>
<a id="tocSapplicationkvstorage"></a>
<a id="tocsapplicationkvstorage"></a>

```json
{
  "account": "string",
  "kvs": [
    {
      "key": "string",
      "value": {
        "bytes": "string",
        "type": 0,
        "uint": 0
      }
    }
  ]
}

```

An application's global/local/box state.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|The address of the account associated with the local state.|
|kvs|[[AvmKeyValue](#schemaavmkeyvalue)]|true|none|Key-Value pairs representing application states.|


### ApplicationLocalReference
<!-- backwards compatibility -->
<a id="schemaapplicationlocalreference"></a>
<a id="schema_ApplicationLocalReference"></a>
<a id="tocSapplicationlocalreference"></a>
<a id="tocsapplicationlocalreference"></a>

```json
{
  "account": "string",
  "app": 0
}

```

References an account's local state for an application.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|true|none|Address of the account with the local state.|
|app|integer|true|none|Application ID of the local state application.|


### ApplicationLocalState
<!-- backwards compatibility -->
<a id="schemaapplicationlocalstate"></a>
<a id="schema_ApplicationLocalState"></a>
<a id="tocSapplicationlocalstate"></a>
<a id="tocsapplicationlocalstate"></a>

```json
{
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
|id|integer|true|none|The application which this local state is for.|
|key-value|[TealKeyValueStore](#schematealkeyvaluestore)|false|none|Represents a key-value store for use in an application.|
|schema|[ApplicationStateSchema](#schemaapplicationstateschema)|true|none|Specifies maximums on the number of each type that may be stored.|


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
  }
}

```

Stores the global information associated with an application.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approval-program|string(byte)|true|none|\[approv\] approval program.|
|clear-state-program|string(byte)|true|none|\[clearp\] approval program.|
|creator|string|true|none|The address that created this application. This is the address where the parameters and global state for this application can be found.|
|extra-program-pages|integer|false|none|\[epp\] the amount of extra program pages available to this app.|
|global-state|[TealKeyValueStore](#schematealkeyvaluestore)|false|none|Represents a key-value store for use in an application.|
|global-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|
|local-state-schema|[ApplicationStateSchema](#schemaapplicationstateschema)|false|none|Specifies maximums on the number of each type that may be stored.|


### ApplicationStateOperation
<!-- backwards compatibility -->
<a id="schemaapplicationstateoperation"></a>
<a id="schema_ApplicationStateOperation"></a>
<a id="tocSapplicationstateoperation"></a>
<a id="tocsapplicationstateoperation"></a>

```json
{
  "account": "string",
  "app-state-type": "string",
  "key": "string",
  "new-value": {
    "bytes": "string",
    "type": 0,
    "uint": 0
  },
  "operation": "string"
}

```

An operation against an application's global/local/box state.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|For local state changes, the address of the account associated with the local state.|
|app-state-type|string|true|none|Type of application state. Value `g` is **global state**, `l` is **local state**, `b` is **boxes**.|
|key|string(byte)|true|none|The key (name) of the global/local/box state.|
|new-value|[AvmValue](#schemaavmvalue)|false|none|Represents an AVM value.|
|operation|string|true|none|Operation type. Value `w` is **write**, `d` is **delete**.|


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
|num-byte-slice|integer|true|none|\[nbs\] num of byte slices.|
|num-uint|integer|true|none|\[nui\] num of uints.|


### Asset
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
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
  "is-frozen": true
}

```

Describes an asset held by an account.

Definition:
data/basics/userBalance.go : AssetHolding

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|true|none|\[a\] number of units held.|
|asset-id|integer|true|none|Asset ID of the holding.|
|is-frozen|boolean|true|none|\[f\] whether or not the holding is frozen.|


### AssetHoldingReference
<!-- backwards compatibility -->
<a id="schemaassetholdingreference"></a>
<a id="schema_AssetHoldingReference"></a>
<a id="tocSassetholdingreference"></a>
<a id="tocsassetholdingreference"></a>

```json
{
  "account": "string",
  "asset": 0
}

```

References an asset held by an account.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|true|none|Address of the account holding the asset.|
|asset|integer|true|none|Asset ID of the holding.|


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
|clawback|string|false|none|\[c\] Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.|
|creator|string|true|none|The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.|
|decimals|integer|true|none|\[dc\] The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).|
|default-frozen|boolean|false|none|\[df\] Whether holdings of this asset are frozen by default.|
|freeze|string|false|none|\[f\] Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.|
|manager|string|false|none|\[m\] Address of account used to manage the keys of this asset and to destroy it.|
|metadata-hash|string(byte)|false|none|\[am\] A commitment to some unspecified asset metadata. The format of this metadata is up to the application.|
|name|string|false|none|\[an\] Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.|
|name-b64|string(byte)|false|none|Base64 encoded name of this asset, as supplied by the creator.|
|reserve|string|false|none|\[r\] Address of account holding reserve (non-minted) units of this asset.|
|total|integer|true|none|\[t\] The total number of units of this asset.|
|unit-name|string|false|none|\[un\] Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.|
|unit-name-b64|string(byte)|false|none|Base64 encoded name of a unit of this asset, as supplied by the creator.|
|url|string|false|none|\[au\] URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.|
|url-b64|string(byte)|false|none|Base64 encoded URL where more information about the asset can be retrieved.|


### AvmKeyValue
<!-- backwards compatibility -->
<a id="schemaavmkeyvalue"></a>
<a id="schema_AvmKeyValue"></a>
<a id="tocSavmkeyvalue"></a>
<a id="tocsavmkeyvalue"></a>

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

Represents an AVM key-value pair in an application store.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string(byte)|true|none|none|
|value|[AvmValue](#schemaavmvalue)|true|none|Represents an AVM value.|


### AvmValue
<!-- backwards compatibility -->
<a id="schemaavmvalue"></a>
<a id="schema_AvmValue"></a>
<a id="tocSavmvalue"></a>
<a id="tocsavmvalue"></a>

```json
{
  "bytes": "string",
  "type": 0,
  "uint": 0
}

```

Represents an AVM value.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytes|string(byte)|false|none|bytes value.|
|type|integer|true|none|value type. Value `1` refers to **bytes**, value `2` refers to **uint64**|
|uint|integer|false|none|uint value.|


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
|name|string(byte)|true|none|The box name, base64 encoded|
|round|integer|false|none|The round for which this information is relevant|
|value|string(byte)|true|none|The box value, base64 encoded.|


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

References a box of an application.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|integer|true|none|Application ID which this box belongs to|
|name|string(byte)|true|none|Base64 encoded box name|


### BuildVersion
<!-- backwards compatibility -->
<a id="schemabuildversion"></a>
<a id="schema_BuildVersion"></a>
<a id="tocSbuildversion"></a>
<a id="tocsbuildversion"></a>

```json
{
  "branch": "string",
  "build_number": 0,
  "channel": "string",
  "commit_hash": "string",
  "major": 0,
  "minor": 0
}

```

BuildVersion contains the current algod build version information.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|string|true|none|none|
|build_number|integer(int64)|true|none|none|
|channel|string|true|none|none|
|commit_hash|string|true|none|none|
|major|integer(int64)|true|none|none|
|minor|integer(int64)|true|none|none|


### DebugSettingsProf
<!-- backwards compatibility -->
<a id="schemadebugsettingsprof"></a>
<a id="schema_DebugSettingsProf"></a>
<a id="tocSdebugsettingsprof"></a>
<a id="tocsdebugsettingsprof"></a>

```json
{
  "block-rate": 1000,
  "mutex-rate": 1000
}

```

algod mutex and blocking profiling state.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block-rate|integer|false|none|The rate of blocking events. The profiler aims to sample an average of one blocking event per rate nanoseconds spent blocked. To turn off profiling entirely, pass rate 0.|
|mutex-rate|integer|false|none|The rate of mutex events. On average 1/rate events are reported. To turn off profiling entirely, pass rate 0|


### DryrunRequest
<!-- backwards compatibility -->
<a id="schemadryrunrequest"></a>
<a id="schema_DryrunRequest"></a>
<a id="tocSdryrunrequest"></a>
<a id="tocsdryrunrequest"></a>

```json
{
  "accounts": [
    {
      "address": "string",
      "amount": 0,
      "amount-without-pending-rewards": 0,
      "apps-local-state": [
        {
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
          "is-frozen": true
        }
      ],
      "auth-addr": "string",
      "created-apps": [
        {
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
            }
          }
        }
      ],
      "created-assets": [
        {
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
  "apps": [
    {
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
        }
      }
    }
  ],
  "latest-timestamp": 0,
  "protocol-version": "string",
  "round": 0,
  "sources": [
    {
      "app-index": 0,
      "field-name": "string",
      "source": "string",
      "txn-index": 0
    }
  ],
  "txns": [
    "string"
  ]
}

```

Request data type for dryrun endpoint. Given the Transactions and simulated ledger state upload, run TEAL scripts and return debugging information.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[Account](#schemaaccount)]|true|none|[Account information at a given round.<br><br>Definition:<br>data/basics/userBalance.go : AccountData<br>]|
|apps|[[Application](#schemaapplication)]|true|none|[Application index and its parameters]|
|latest-timestamp|integer(int64)|true|none|LatestTimestamp is available to some TEAL scripts. Defaults to the latest confirmed timestamp this algod is attached to.|
|protocol-version|string|true|none|ProtocolVersion specifies a specific version string to operate under, otherwise whatever the current protocol of the network this algod is running in.|
|round|integer|true|none|Round is available to some TEAL scripts. Defaults to the current round on the network this algod is attached to.|
|sources|[[DryrunSource](#schemadryrunsource)]|true|none|[DryrunSource is TEAL source text that gets uploaded, compiled, and inserted into transactions or application state.]|
|txns|[string]|true|none|none|


### DryrunSource
<!-- backwards compatibility -->
<a id="schemadryrunsource"></a>
<a id="schema_DryrunSource"></a>
<a id="tocSdryrunsource"></a>
<a id="tocsdryrunsource"></a>

```json
{
  "app-index": 0,
  "field-name": "string",
  "source": "string",
  "txn-index": 0
}

```

DryrunSource is TEAL source text that gets uploaded, compiled, and inserted into transactions or application state.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app-index|integer|true|none|none|
|field-name|string|true|none|FieldName is what kind of sources this is. If lsig then it goes into the transactions[this.TxnIndex].LogicSig. If approv or clearp it goes into the Approval Program or Clear State Program of application[this.AppIndex].|
|source|string|true|none|none|
|txn-index|integer|true|none|none|


### DryrunState
<!-- backwards compatibility -->
<a id="schemadryrunstate"></a>
<a id="schema_DryrunState"></a>
<a id="tocSdryrunstate"></a>
<a id="tocsdryrunstate"></a>

```json
{
  "error": "string",
  "line": 0,
  "pc": 0,
  "scratch": [
    {
      "bytes": "string",
      "type": 0,
      "uint": 0
    }
  ],
  "stack": [
    {
      "bytes": "string",
      "type": 0,
      "uint": 0
    }
  ]
}

```

Stores the TEAL eval step data

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Evaluation error if any|
|line|integer|true|none|Line number|
|pc|integer|true|none|Program counter|
|scratch|[[TealValue](#schematealvalue)]|false|none|[Represents a TEAL value.]|
|stack|[[TealValue](#schematealvalue)]|true|none|[Represents a TEAL value.]|


### DryrunTxnResult
<!-- backwards compatibility -->
<a id="schemadryruntxnresult"></a>
<a id="schema_DryrunTxnResult"></a>
<a id="tocSdryruntxnresult"></a>
<a id="tocsdryruntxnresult"></a>

```json
{
  "app-call-messages": [
    "string"
  ],
  "app-call-trace": [
    {
      "error": "string",
      "line": 0,
      "pc": 0,
      "scratch": [
        {
          "bytes": "string",
          "type": 0,
          "uint": 0
        }
      ],
      "stack": [
        {
          "bytes": "string",
          "type": 0,
          "uint": 0
        }
      ]
    }
  ],
  "budget-added": 0,
  "budget-consumed": 0,
  "disassembly": [
    "string"
  ],
  "global-delta": [
    {
      "key": "string",
      "value": {
        "action": 0,
        "bytes": "string",
        "uint": 0
      }
    }
  ],
  "local-deltas": [
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
  "logic-sig-disassembly": [
    "string"
  ],
  "logic-sig-messages": [
    "string"
  ],
  "logic-sig-trace": [
    {
      "error": "string",
      "line": 0,
      "pc": 0,
      "scratch": [
        {
          "bytes": "string",
          "type": 0,
          "uint": 0
        }
      ],
      "stack": [
        {
          "bytes": "string",
          "type": 0,
          "uint": 0
        }
      ]
    }
  ],
  "logs": [
    "string"
  ]
}

```

DryrunTxnResult contains any LogicSig or ApplicationCall program debug information and state updates from a dryrun.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app-call-messages|[string]|false|none|none|
|app-call-trace|[[DryrunState](#schemadryrunstate)]|false|none|[Stores the TEAL eval step data]|
|budget-added|integer|false|none|Budget added during execution of app call transaction.|
|budget-consumed|integer|false|none|Budget consumed during execution of app call transaction.|
|disassembly|[string]|true|none|Disassembled program line by line.|
|global-delta|[StateDelta](#schemastatedelta)|false|none|Application state delta.|
|local-deltas|[[AccountStateDelta](#schemaaccountstatedelta)]|false|none|[Application state delta.]|
|logic-sig-disassembly|[string]|false|none|Disassembled lsig program line by line.|
|logic-sig-messages|[string]|false|none|none|
|logic-sig-trace|[[DryrunState](#schemadryrunstate)]|false|none|[Stores the TEAL eval step data]|
|logs|[string]|false|none|none|


### ErrorResponse
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "data": {},
  "message": "string"
}

```

An error response with optional data field.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|message|string|true|none|none|


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


### LedgerStateDelta
<!-- backwards compatibility -->
<a id="schemaledgerstatedelta"></a>
<a id="schema_LedgerStateDelta"></a>
<a id="tocSledgerstatedelta"></a>
<a id="tocsledgerstatedelta"></a>

```json
{}

```

Ledger StateDelta object

#### Properties

*None*


### LedgerStateDeltaForTransactionGroup
<!-- backwards compatibility -->
<a id="schemaledgerstatedeltafortransactiongroup"></a>
<a id="schema_LedgerStateDeltaForTransactionGroup"></a>
<a id="tocSledgerstatedeltafortransactiongroup"></a>
<a id="tocsledgerstatedeltafortransactiongroup"></a>

```json
{
  "Delta": {},
  "Ids": [
    "string"
  ]
}

```

Contains a ledger delta for a single transaction group

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Delta|[LedgerStateDelta](#schemaledgerstatedelta)|true|none|Ledger StateDelta object|
|Ids|[string]|true|none|none|


### LightBlockHeaderProof
<!-- backwards compatibility -->
<a id="schemalightblockheaderproof"></a>
<a id="schema_LightBlockHeaderProof"></a>
<a id="tocSlightblockheaderproof"></a>
<a id="tocslightblockheaderproof"></a>

```json
{
  "index": 0,
  "proof": "string",
  "treedepth": 0
}

```

Proof of membership and position of a light block header.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer|true|none|The index of the light block header in the vector commitment tree|
|proof|string(byte)|true|none|The encoded proof.|
|treedepth|integer|true|none|Represents the depth of the tree that is being proven, i.e. the number of edges from a leaf to the root.|


### ParticipationKey
<!-- backwards compatibility -->
<a id="schemaparticipationkey"></a>
<a id="schema_ParticipationKey"></a>
<a id="tocSparticipationkey"></a>
<a id="tocsparticipationkey"></a>

```json
{
  "address": "string",
  "effective-first-valid": 0,
  "effective-last-valid": 0,
  "id": "string",
  "key": {
    "selection-participation-key": "string",
    "state-proof-key": "string",
    "vote-first-valid": 0,
    "vote-key-dilution": 0,
    "vote-last-valid": 0,
    "vote-participation-key": "string"
  },
  "last-block-proposal": 0,
  "last-state-proof": 0,
  "last-vote": 0
}

```

Represents a participation key used by the node.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Address the key was generated for.|
|effective-first-valid|integer|false|none|When registered, this is the first round it may be used.|
|effective-last-valid|integer|false|none|When registered, this is the last round it may be used.|
|id|string|true|none|The key's ParticipationID.|
|key|[AccountParticipation](#schemaaccountparticipation)|true|none|AccountParticipation describes the parameters used by this account in consensus protocol.|
|last-block-proposal|integer|false|none|Round when this key was last used to propose a block.|
|last-state-proof|integer|false|none|Round when this key was last used to generate a state proof.|
|last-vote|integer|false|none|Round when this key was last used to vote.|


### PendingTransactionResponse
<!-- backwards compatibility -->
<a id="schemapendingtransactionresponse"></a>
<a id="schema_PendingTransactionResponse"></a>
<a id="tocSpendingtransactionresponse"></a>
<a id="tocspendingtransactionresponse"></a>

```json
{
  "application-index": 0,
  "asset-closing-amount": 0,
  "asset-index": 0,
  "close-rewards": 0,
  "closing-amount": 0,
  "confirmed-round": 0,
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
  "inner-txns": [
    {
      "application-index": 0,
      "asset-closing-amount": 0,
      "asset-index": 0,
      "close-rewards": 0,
      "closing-amount": 0,
      "confirmed-round": 0,
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
      "inner-txns": [],
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
      "pool-error": "string",
      "receiver-rewards": 0,
      "sender-rewards": 0,
      "txn": {}
    }
  ],
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
  "pool-error": "string",
  "receiver-rewards": 0,
  "sender-rewards": 0,
  "txn": {}
}

```

Details about a pending transaction. If the transaction was recently confirmed, includes confirmation details like the round and reward details.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application-index|integer|false|none|The application index if the transaction was found and it created an application.|
|asset-closing-amount|integer|false|none|The number of the asset's unit that were transferred to the close-to address.|
|asset-index|integer|false|none|The asset index if the transaction was found and it created an asset.|
|close-rewards|integer|false|none|Rewards in microalgos applied to the close remainder to account.|
|closing-amount|integer|false|none|Closing amount for the transaction.|
|confirmed-round|integer|false|none|The round where this transaction was confirmed, if present.|
|global-state-delta|[StateDelta](#schemastatedelta)|false|none|Application state delta.|
|inner-txns|[[PendingTransactionResponse](#schemapendingtransactionresponse)]|false|none|Inner transactions produced by application execution.|
|local-state-delta|[[AccountStateDelta](#schemaaccountstatedelta)]|false|none|Local state key/value changes for the application being executed by this transaction.|
|logs|[string]|false|none|Logs for the application being executed by this transaction.|
|pool-error|string|true|none|Indicates that the transaction was kicked out of this node's transaction pool (and specifies why that happened).  An empty string indicates the transaction wasn't kicked out of this node's txpool due to an error.|
|receiver-rewards|integer|false|none|Rewards in microalgos applied to the receiver account.|
|sender-rewards|integer|false|none|Rewards in microalgos applied to the sender account.|
|txn|object|true|none|The raw signed transaction.|


### ScratchChange
<!-- backwards compatibility -->
<a id="schemascratchchange"></a>
<a id="schema_ScratchChange"></a>
<a id="tocSscratchchange"></a>
<a id="tocsscratchchange"></a>

```json
{
  "new-value": {
    "bytes": "string",
    "type": 0,
    "uint": 0
  },
  "slot": 0
}

```

A write operation into a scratch slot.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new-value|[AvmValue](#schemaavmvalue)|true|none|Represents an AVM value.|
|slot|integer|true|none|The scratch slot written.|


### SimulateInitialStates
<!-- backwards compatibility -->
<a id="schemasimulateinitialstates"></a>
<a id="schema_SimulateInitialStates"></a>
<a id="tocSsimulateinitialstates"></a>
<a id="tocssimulateinitialstates"></a>

```json
{
  "app-initial-states": [
    {
      "app-boxes": {
        "account": "string",
        "kvs": [
          {
            "key": "string",
            "value": {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          }
        ]
      },
      "app-globals": {
        "account": "string",
        "kvs": [
          {
            "key": "string",
            "value": {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          }
        ]
      },
      "app-locals": [
        {
          "account": "string",
          "kvs": [
            {
              "key": "string",
              "value": {
                "bytes": "string",
                "type": 0,
                "uint": 0
              }
            }
          ]
        }
      ],
      "id": 0
    }
  ]
}

```

Initial states of resources that were accessed during simulation.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app-initial-states|[[ApplicationInitialStates](#schemaapplicationinitialstates)]|false|none|The initial states of accessed application before simulation. The order of this array is arbitrary.|


### SimulateRequest
<!-- backwards compatibility -->
<a id="schemasimulaterequest"></a>
<a id="schema_SimulateRequest"></a>
<a id="tocSsimulaterequest"></a>
<a id="tocssimulaterequest"></a>

```json
{
  "allow-empty-signatures": true,
  "allow-more-logging": true,
  "allow-unnamed-resources": true,
  "exec-trace-config": {
    "enable": true,
    "scratch-change": true,
    "stack-change": true,
    "state-change": true
  },
  "extra-opcode-budget": 0,
  "fix-signers": true,
  "round": 0,
  "txn-groups": [
    {
      "txns": [
        "string"
      ]
    }
  ]
}

```

Request type for simulation endpoint.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow-empty-signatures|boolean|false|none|Allows transactions without signatures to be simulated as if they had correct signatures.|
|allow-more-logging|boolean|false|none|Lifts limits on log opcode usage during simulation.|
|allow-unnamed-resources|boolean|false|none|Allows access to unnamed resources during simulation.|
|exec-trace-config|[SimulateTraceConfig](#schemasimulatetraceconfig)|false|none|An object that configures simulation execution trace.|
|extra-opcode-budget|integer|false|none|Applies extra opcode budget during simulation for each transaction group.|
|fix-signers|boolean|false|none|If true, signers for transactions that are missing signatures will be fixed during evaluation.|
|round|integer|false|none|If provided, specifies the round preceding the simulation. State changes through this round will be used to run this simulation. Usually only the 4 most recent rounds will be available (controlled by the node config value MaxAcctLookback). If not specified, defaults to the latest available round.|
|txn-groups|[[SimulateRequestTransactionGroup](#schemasimulaterequesttransactiongroup)]|true|none|The transaction groups to simulate.|


### SimulateRequestTransactionGroup
<!-- backwards compatibility -->
<a id="schemasimulaterequesttransactiongroup"></a>
<a id="schema_SimulateRequestTransactionGroup"></a>
<a id="tocSsimulaterequesttransactiongroup"></a>
<a id="tocssimulaterequesttransactiongroup"></a>

```json
{
  "txns": [
    "string"
  ]
}

```

A transaction group to simulate.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txns|[string]|true|none|An atomic transaction group.|


### SimulateTraceConfig
<!-- backwards compatibility -->
<a id="schemasimulatetraceconfig"></a>
<a id="schema_SimulateTraceConfig"></a>
<a id="tocSsimulatetraceconfig"></a>
<a id="tocssimulatetraceconfig"></a>

```json
{
  "enable": true,
  "scratch-change": true,
  "stack-change": true,
  "state-change": true
}

```

An object that configures simulation execution trace.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enable|boolean|false|none|A boolean option for opting in execution trace features simulation endpoint.|
|scratch-change|boolean|false|none|A boolean option enabling returning scratch slot changes together with execution trace during simulation.|
|stack-change|boolean|false|none|A boolean option enabling returning stack changes together with execution trace during simulation.|
|state-change|boolean|false|none|A boolean option enabling returning application state changes (global, local, and box changes) with the execution trace during simulation.|


### SimulateTransactionGroupResult
<!-- backwards compatibility -->
<a id="schemasimulatetransactiongroupresult"></a>
<a id="schema_SimulateTransactionGroupResult"></a>
<a id="tocSsimulatetransactiongroupresult"></a>
<a id="tocssimulatetransactiongroupresult"></a>

```json
{
  "app-budget-added": 0,
  "app-budget-consumed": 0,
  "failed-at": [
    0
  ],
  "failure-message": "string",
  "txn-results": [
    {
      "app-budget-consumed": 0,
      "exec-trace": {
        "approval-program-hash": "string",
        "approval-program-trace": [
          {
            "pc": 0,
            "scratch-changes": [
              {
                "new-value": {
                  "bytes": "string",
                  "type": 0,
                  "uint": 0
                },
                "slot": 0
              }
            ],
            "spawned-inners": [
              0
            ],
            "stack-additions": [
              {
                "bytes": "string",
                "type": 0,
                "uint": 0
              }
            ],
            "stack-pop-count": 0,
            "state-changes": [
              {
                "account": "string",
                "app-state-type": "string",
                "key": "string",
                "new-value": {
                  "bytes": "string",
                  "type": 0,
                  "uint": 0
                },
                "operation": "string"
              }
            ]
          }
        ],
        "clear-state-program-hash": "string",
        "clear-state-program-trace": [
          {
            "pc": 0,
            "scratch-changes": [
              {
                "new-value": {
                  "bytes": "string",
                  "type": 0,
                  "uint": 0
                },
                "slot": 0
              }
            ],
            "spawned-inners": [
              0
            ],
            "stack-additions": [
              {
                "bytes": "string",
                "type": 0,
                "uint": 0
              }
            ],
            "stack-pop-count": 0,
            "state-changes": [
              {
                "account": "string",
                "app-state-type": "string",
                "key": "string",
                "new-value": {
                  "bytes": "string",
                  "type": 0,
                  "uint": 0
                },
                "operation": "string"
              }
            ]
          }
        ],
        "clear-state-rollback": true,
        "clear-state-rollback-error": "string",
        "inner-trace": [
          {}
        ],
        "logic-sig-hash": "string",
        "logic-sig-trace": [
          {
            "pc": 0,
            "scratch-changes": [
              {
                "new-value": {
                  "bytes": "string",
                  "type": 0,
                  "uint": 0
                },
                "slot": 0
              }
            ],
            "spawned-inners": [
              0
            ],
            "stack-additions": [
              {
                "bytes": "string",
                "type": 0,
                "uint": 0
              }
            ],
            "stack-pop-count": 0,
            "state-changes": [
              {
                "account": "string",
                "app-state-type": "string",
                "key": "string",
                "new-value": {
                  "bytes": "string",
                  "type": 0,
                  "uint": 0
                },
                "operation": "string"
              }
            ]
          }
        ]
      },
      "fixed-signer": "string",
      "logic-sig-budget-consumed": 0,
      "txn-result": {
        "application-index": 0,
        "asset-closing-amount": 0,
        "asset-index": 0,
        "close-rewards": 0,
        "closing-amount": 0,
        "confirmed-round": 0,
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
        "inner-txns": [
          {}
        ],
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
        "pool-error": "string",
        "receiver-rewards": 0,
        "sender-rewards": 0,
        "txn": {}
      },
      "unnamed-resources-accessed": {
        "accounts": [
          "string"
        ],
        "app-locals": [
          {
            "account": "string",
            "app": 0
          }
        ],
        "apps": [
          0
        ],
        "asset-holdings": [
          {
            "account": "string",
            "asset": 0
          }
        ],
        "assets": [
          0
        ],
        "boxes": [
          {
            "app": 0,
            "name": "string"
          }
        ],
        "extra-box-refs": 0
      }
    }
  ],
  "unnamed-resources-accessed": {
    "accounts": [
      "string"
    ],
    "app-locals": [
      {
        "account": "string",
        "app": 0
      }
    ],
    "apps": [
      0
    ],
    "asset-holdings": [
      {
        "account": "string",
        "asset": 0
      }
    ],
    "assets": [
      0
    ],
    "boxes": [
      {
        "app": 0,
        "name": "string"
      }
    ],
    "extra-box-refs": 0
  }
}

```

Simulation result for an atomic transaction group

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app-budget-added|integer|false|none|Total budget added during execution of app calls in the transaction group.|
|app-budget-consumed|integer|false|none|Total budget consumed during execution of app calls in the transaction group.|
|failed-at|[integer]|false|none|If present, indicates which transaction in this group caused the failure. This array represents the path to the failing transaction. Indexes are zero based, the first element indicates the top-level transaction, and successive elements indicate deeper inner transactions.|
|failure-message|string|false|none|If present, indicates that the transaction group failed and specifies why that happened|
|txn-results|[[SimulateTransactionResult](#schemasimulatetransactionresult)]|true|none|Simulation result for individual transactions|
|unnamed-resources-accessed|[SimulateUnnamedResourcesAccessed](#schemasimulateunnamedresourcesaccessed)|false|none|These are resources that were accessed by this group that would normally have caused failure, but were allowed in simulation. Depending on where this object is in the response, the unnamed resources it contains may or may not qualify for group resource sharing. If this is a field in SimulateTransactionGroupResult, the resources do qualify, but if this is a field in SimulateTransactionResult, they do not qualify. In order to make this group valid for actual submission, resources that qualify for group sharing can be made available by any transaction of the group; otherwise, resources must be placed in the same transaction which accessed them.|


### SimulateTransactionResult
<!-- backwards compatibility -->
<a id="schemasimulatetransactionresult"></a>
<a id="schema_SimulateTransactionResult"></a>
<a id="tocSsimulatetransactionresult"></a>
<a id="tocssimulatetransactionresult"></a>

```json
{
  "app-budget-consumed": 0,
  "exec-trace": {
    "approval-program-hash": "string",
    "approval-program-trace": [
      {
        "pc": 0,
        "scratch-changes": [
          {
            "new-value": {
              "bytes": "string",
              "type": 0,
              "uint": 0
            },
            "slot": 0
          }
        ],
        "spawned-inners": [
          0
        ],
        "stack-additions": [
          {
            "bytes": "string",
            "type": 0,
            "uint": 0
          }
        ],
        "stack-pop-count": 0,
        "state-changes": [
          {
            "account": "string",
            "app-state-type": "string",
            "key": "string",
            "new-value": {
              "bytes": "string",
              "type": 0,
              "uint": 0
            },
            "operation": "string"
          }
        ]
      }
    ],
    "clear-state-program-hash": "string",
    "clear-state-program-trace": [
      {
        "pc": 0,
        "scratch-changes": [
          {
            "new-value": {
              "bytes": "string",
              "type": 0,
              "uint": 0
            },
            "slot": 0
          }
        ],
        "spawned-inners": [
          0
        ],
        "stack-additions": [
          {
            "bytes": "string",
            "type": 0,
            "uint": 0
          }
        ],
        "stack-pop-count": 0,
        "state-changes": [
          {
            "account": "string",
            "app-state-type": "string",
            "key": "string",
            "new-value": {
              "bytes": "string",
              "type": 0,
              "uint": 0
            },
            "operation": "string"
          }
        ]
      }
    ],
    "clear-state-rollback": true,
    "clear-state-rollback-error": "string",
    "inner-trace": [
      {}
    ],
    "logic-sig-hash": "string",
    "logic-sig-trace": [
      {
        "pc": 0,
        "scratch-changes": [
          {
            "new-value": {
              "bytes": "string",
              "type": 0,
              "uint": 0
            },
            "slot": 0
          }
        ],
        "spawned-inners": [
          0
        ],
        "stack-additions": [
          {
            "bytes": "string",
            "type": 0,
            "uint": 0
          }
        ],
        "stack-pop-count": 0,
        "state-changes": [
          {
            "account": "string",
            "app-state-type": "string",
            "key": "string",
            "new-value": {
              "bytes": "string",
              "type": 0,
              "uint": 0
            },
            "operation": "string"
          }
        ]
      }
    ]
  },
  "fixed-signer": "string",
  "logic-sig-budget-consumed": 0,
  "txn-result": {
    "application-index": 0,
    "asset-closing-amount": 0,
    "asset-index": 0,
    "close-rewards": 0,
    "closing-amount": 0,
    "confirmed-round": 0,
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
    "inner-txns": [
      {}
    ],
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
    "pool-error": "string",
    "receiver-rewards": 0,
    "sender-rewards": 0,
    "txn": {}
  },
  "unnamed-resources-accessed": {
    "accounts": [
      "string"
    ],
    "app-locals": [
      {
        "account": "string",
        "app": 0
      }
    ],
    "apps": [
      0
    ],
    "asset-holdings": [
      {
        "account": "string",
        "asset": 0
      }
    ],
    "assets": [
      0
    ],
    "boxes": [
      {
        "app": 0,
        "name": "string"
      }
    ],
    "extra-box-refs": 0
  }
}

```

Simulation result for an individual transaction

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app-budget-consumed|integer|false|none|Budget used during execution of an app call transaction. This value includes budged used by inner app calls spawned by this transaction.|
|exec-trace|[SimulationTransactionExecTrace](#schemasimulationtransactionexectrace)|false|none|The execution trace of calling an app or a logic sig, containing the inner app call trace in a recursive way.|
|fixed-signer|string|false|none|The account that needed to sign this transaction when no signature was provided and the provided signer was incorrect.|
|logic-sig-budget-consumed|integer|false|none|Budget used during execution of a logic sig transaction.|
|txn-result|[PendingTransactionResponse](#schemapendingtransactionresponse)|true|none|Details about a pending transaction. If the transaction was recently confirmed, includes confirmation details like the round and reward details.|
|unnamed-resources-accessed|[SimulateUnnamedResourcesAccessed](#schemasimulateunnamedresourcesaccessed)|false|none|These are resources that were accessed by this group that would normally have caused failure, but were allowed in simulation. Depending on where this object is in the response, the unnamed resources it contains may or may not qualify for group resource sharing. If this is a field in SimulateTransactionGroupResult, the resources do qualify, but if this is a field in SimulateTransactionResult, they do not qualify. In order to make this group valid for actual submission, resources that qualify for group sharing can be made available by any transaction of the group; otherwise, resources must be placed in the same transaction which accessed them.|


### SimulateUnnamedResourcesAccessed
<!-- backwards compatibility -->
<a id="schemasimulateunnamedresourcesaccessed"></a>
<a id="schema_SimulateUnnamedResourcesAccessed"></a>
<a id="tocSsimulateunnamedresourcesaccessed"></a>
<a id="tocssimulateunnamedresourcesaccessed"></a>

```json
{
  "accounts": [
    "string"
  ],
  "app-locals": [
    {
      "account": "string",
      "app": 0
    }
  ],
  "apps": [
    0
  ],
  "asset-holdings": [
    {
      "account": "string",
      "asset": 0
    }
  ],
  "assets": [
    0
  ],
  "boxes": [
    {
      "app": 0,
      "name": "string"
    }
  ],
  "extra-box-refs": 0
}

```

These are resources that were accessed by this group that would normally have caused failure, but were allowed in simulation. Depending on where this object is in the response, the unnamed resources it contains may or may not qualify for group resource sharing. If this is a field in SimulateTransactionGroupResult, the resources do qualify, but if this is a field in SimulateTransactionResult, they do not qualify. In order to make this group valid for actual submission, resources that qualify for group sharing can be made available by any transaction of the group; otherwise, resources must be placed in the same transaction which accessed them.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[string]|false|none|The unnamed accounts that were referenced. The order of this array is arbitrary.|
|app-locals|[[ApplicationLocalReference](#schemaapplicationlocalreference)]|false|none|The unnamed application local states that were referenced. The order of this array is arbitrary.|
|apps|[integer]|false|none|The unnamed applications that were referenced. The order of this array is arbitrary.|
|asset-holdings|[[AssetHoldingReference](#schemaassetholdingreference)]|false|none|The unnamed asset holdings that were referenced. The order of this array is arbitrary.|
|assets|[integer]|false|none|The unnamed assets that were referenced. The order of this array is arbitrary.|
|boxes|[[BoxReference](#schemaboxreference)]|false|none|The unnamed boxes that were referenced. The order of this array is arbitrary.|
|extra-box-refs|integer|false|none|The number of extra box references used to increase the IO budget. This is in addition to the references defined in the input transaction group and any referenced to unnamed boxes.|


### SimulationEvalOverrides
<!-- backwards compatibility -->
<a id="schemasimulationevaloverrides"></a>
<a id="schema_SimulationEvalOverrides"></a>
<a id="tocSsimulationevaloverrides"></a>
<a id="tocssimulationevaloverrides"></a>

```json
{
  "allow-empty-signatures": true,
  "allow-unnamed-resources": true,
  "extra-opcode-budget": 0,
  "fix-signers": true,
  "max-log-calls": 0,
  "max-log-size": 0
}

```

The set of parameters and limits override during simulation. If this set of parameters is present, then evaluation parameters may differ from standard evaluation in certain ways.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow-empty-signatures|boolean|false|none|If true, transactions without signatures are allowed and simulated as if they were properly signed.|
|allow-unnamed-resources|boolean|false|none|If true, allows access to unnamed resources during simulation.|
|extra-opcode-budget|integer|false|none|The extra opcode budget added to each transaction group during simulation|
|fix-signers|boolean|false|none|If true, signers for transactions that are missing signatures will be fixed during evaluation.|
|max-log-calls|integer|false|none|The maximum log calls one can make during simulation|
|max-log-size|integer|false|none|The maximum byte number to log during simulation|


### SimulationOpcodeTraceUnit
<!-- backwards compatibility -->
<a id="schemasimulationopcodetraceunit"></a>
<a id="schema_SimulationOpcodeTraceUnit"></a>
<a id="tocSsimulationopcodetraceunit"></a>
<a id="tocssimulationopcodetraceunit"></a>

```json
{
  "pc": 0,
  "scratch-changes": [
    {
      "new-value": {
        "bytes": "string",
        "type": 0,
        "uint": 0
      },
      "slot": 0
    }
  ],
  "spawned-inners": [
    0
  ],
  "stack-additions": [
    {
      "bytes": "string",
      "type": 0,
      "uint": 0
    }
  ],
  "stack-pop-count": 0,
  "state-changes": [
    {
      "account": "string",
      "app-state-type": "string",
      "key": "string",
      "new-value": {
        "bytes": "string",
        "type": 0,
        "uint": 0
      },
      "operation": "string"
    }
  ]
}

```

The set of trace information and effect from evaluating a single opcode.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pc|integer|true|none|The program counter of the current opcode being evaluated.|
|scratch-changes|[[ScratchChange](#schemascratchchange)]|false|none|The writes into scratch slots.|
|spawned-inners|[integer]|false|none|The indexes of the traces for inner transactions spawned by this opcode, if any.|
|stack-additions|[[AvmValue](#schemaavmvalue)]|false|none|The values added by this opcode to the stack.|
|stack-pop-count|integer|false|none|The number of deleted stack values by this opcode.|
|state-changes|[[ApplicationStateOperation](#schemaapplicationstateoperation)]|false|none|The operations against the current application's states.|


### SimulationTransactionExecTrace
<!-- backwards compatibility -->
<a id="schemasimulationtransactionexectrace"></a>
<a id="schema_SimulationTransactionExecTrace"></a>
<a id="tocSsimulationtransactionexectrace"></a>
<a id="tocssimulationtransactionexectrace"></a>

```json
{
  "approval-program-hash": "string",
  "approval-program-trace": [
    {
      "pc": 0,
      "scratch-changes": [
        {
          "new-value": {
            "bytes": "string",
            "type": 0,
            "uint": 0
          },
          "slot": 0
        }
      ],
      "spawned-inners": [
        0
      ],
      "stack-additions": [
        {
          "bytes": "string",
          "type": 0,
          "uint": 0
        }
      ],
      "stack-pop-count": 0,
      "state-changes": [
        {
          "account": "string",
          "app-state-type": "string",
          "key": "string",
          "new-value": {
            "bytes": "string",
            "type": 0,
            "uint": 0
          },
          "operation": "string"
        }
      ]
    }
  ],
  "clear-state-program-hash": "string",
  "clear-state-program-trace": [
    {
      "pc": 0,
      "scratch-changes": [
        {
          "new-value": {
            "bytes": "string",
            "type": 0,
            "uint": 0
          },
          "slot": 0
        }
      ],
      "spawned-inners": [
        0
      ],
      "stack-additions": [
        {
          "bytes": "string",
          "type": 0,
          "uint": 0
        }
      ],
      "stack-pop-count": 0,
      "state-changes": [
        {
          "account": "string",
          "app-state-type": "string",
          "key": "string",
          "new-value": {
            "bytes": "string",
            "type": 0,
            "uint": 0
          },
          "operation": "string"
        }
      ]
    }
  ],
  "clear-state-rollback": true,
  "clear-state-rollback-error": "string",
  "inner-trace": [
    {
      "approval-program-hash": "string",
      "approval-program-trace": [
        {
          "pc": 0,
          "scratch-changes": [
            {
              "new-value": {
                "bytes": "string",
                "type": 0,
                "uint": 0
              },
              "slot": 0
            }
          ],
          "spawned-inners": [
            0
          ],
          "stack-additions": [
            {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          ],
          "stack-pop-count": 0,
          "state-changes": [
            {
              "account": "string",
              "app-state-type": "string",
              "key": "string",
              "new-value": {
                "bytes": "string",
                "type": 0,
                "uint": 0
              },
              "operation": "string"
            }
          ]
        }
      ],
      "clear-state-program-hash": "string",
      "clear-state-program-trace": [
        {
          "pc": 0,
          "scratch-changes": [
            {
              "new-value": {
                "bytes": "string",
                "type": 0,
                "uint": 0
              },
              "slot": 0
            }
          ],
          "spawned-inners": [
            0
          ],
          "stack-additions": [
            {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          ],
          "stack-pop-count": 0,
          "state-changes": [
            {
              "account": "string",
              "app-state-type": "string",
              "key": "string",
              "new-value": {
                "bytes": "string",
                "type": 0,
                "uint": 0
              },
              "operation": "string"
            }
          ]
        }
      ],
      "clear-state-rollback": true,
      "clear-state-rollback-error": "string",
      "inner-trace": [],
      "logic-sig-hash": "string",
      "logic-sig-trace": [
        {
          "pc": 0,
          "scratch-changes": [
            {
              "new-value": {
                "bytes": "string",
                "type": 0,
                "uint": 0
              },
              "slot": 0
            }
          ],
          "spawned-inners": [
            0
          ],
          "stack-additions": [
            {
              "bytes": "string",
              "type": 0,
              "uint": 0
            }
          ],
          "stack-pop-count": 0,
          "state-changes": [
            {
              "account": "string",
              "app-state-type": "string",
              "key": "string",
              "new-value": {
                "bytes": "string",
                "type": 0,
                "uint": 0
              },
              "operation": "string"
            }
          ]
        }
      ]
    }
  ],
  "logic-sig-hash": "string",
  "logic-sig-trace": [
    {
      "pc": 0,
      "scratch-changes": [
        {
          "new-value": {
            "bytes": "string",
            "type": 0,
            "uint": 0
          },
          "slot": 0
        }
      ],
      "spawned-inners": [
        0
      ],
      "stack-additions": [
        {
          "bytes": "string",
          "type": 0,
          "uint": 0
        }
      ],
      "stack-pop-count": 0,
      "state-changes": [
        {
          "account": "string",
          "app-state-type": "string",
          "key": "string",
          "new-value": {
            "bytes": "string",
            "type": 0,
            "uint": 0
          },
          "operation": "string"
        }
      ]
    }
  ]
}

```

The execution trace of calling an app or a logic sig, containing the inner app call trace in a recursive way.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approval-program-hash|string(byte)|false|none|SHA512_256 hash digest of the approval program executed in transaction.|
|approval-program-trace|[[SimulationOpcodeTraceUnit](#schemasimulationopcodetraceunit)]|false|none|Program trace that contains a trace of opcode effects in an approval program.|
|clear-state-program-hash|string(byte)|false|none|SHA512_256 hash digest of the clear state program executed in transaction.|
|clear-state-program-trace|[[SimulationOpcodeTraceUnit](#schemasimulationopcodetraceunit)]|false|none|Program trace that contains a trace of opcode effects in a clear state program.|
|clear-state-rollback|boolean|false|none|If true, indicates that the clear state program failed and any persistent state changes it produced should be reverted once the program exits.|
|clear-state-rollback-error|string|false|none|The error message explaining why the clear state program failed. This field will only be populated if clear-state-rollback is true and the failure was due to an execution error.|
|inner-trace|[[SimulationTransactionExecTrace](#schemasimulationtransactionexectrace)]|false|none|An array of SimulationTransactionExecTrace representing the execution trace of any inner transactions executed.|
|logic-sig-hash|string(byte)|false|none|SHA512_256 hash digest of the logic sig executed in transaction.|
|logic-sig-trace|[[SimulationOpcodeTraceUnit](#schemasimulationopcodetraceunit)]|false|none|Program trace that contains a trace of opcode effects in a logic sig.|


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


### StateProof
<!-- backwards compatibility -->
<a id="schemastateproof"></a>
<a id="schema_StateProof"></a>
<a id="tocSstateproof"></a>
<a id="tocsstateproof"></a>

```json
{
  "Message": {
    "BlockHeadersCommitment": "string",
    "FirstAttestedRound": 0,
    "LastAttestedRound": 0,
    "LnProvenWeight": 0,
    "VotersCommitment": "string"
  },
  "StateProof": "string"
}

```

Represents a state proof and its corresponding message

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|[StateProofMessage](#schemastateproofmessage)|true|none|Represents the message that the state proofs are attesting to.|
|StateProof|string(byte)|true|none|The encoded StateProof for the message.|


### StateProofMessage
<!-- backwards compatibility -->
<a id="schemastateproofmessage"></a>
<a id="schema_StateProofMessage"></a>
<a id="tocSstateproofmessage"></a>
<a id="tocsstateproofmessage"></a>

```json
{
  "BlockHeadersCommitment": "string",
  "FirstAttestedRound": 0,
  "LastAttestedRound": 0,
  "LnProvenWeight": 0,
  "VotersCommitment": "string"
}

```

Represents the message that the state proofs are attesting to.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockHeadersCommitment|string(byte)|true|none|The vector commitment root on all light block headers within a state proof interval.|
|FirstAttestedRound|integer|true|none|The first round the message attests to.|
|LastAttestedRound|integer|true|none|The last round the message attests to.|
|LnProvenWeight|integer|true|none|An integer value representing the natural log of the proven weight with 16 bits of precision. This value would be used to verify the next state proof.|
|VotersCommitment|string(byte)|true|none|The vector commitment root of the top N accounts to sign the next StateProof.|


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
|bytes|string|true|none|\[tb\] bytes value.|
|type|integer|true|none|\[tt\] value type. Value `1` refers to **bytes**, value `2` refers to **uint**|
|uint|integer|true|none|\[ui\] uint value.|


### Version
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "build": {
    "branch": "string",
    "build_number": 0,
    "channel": "string",
    "commit_hash": "string",
    "major": 0,
    "minor": 0
  },
  "genesis_hash_b64": "string",
  "genesis_id": "string",
  "versions": [
    "string"
  ]
}

```

Version contains the current algod version.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|[BuildVersion](#schemabuildversion)|true|none|none|
|genesis_hash_b64|string(byte)|true|none|none|
|genesis_id|string|true|none|none|
|versions|[string]|true|none|none|

