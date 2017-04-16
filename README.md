# knowledge-node

Simple Node.js module for [Google Graph Knowledge API](https://developers.google.com/knowledge-graph/).

## Module Usage
### Types
Returns all possible `types` to build `search` parameters.

Example
-
```js
const Knowledge = require('knowledge-node')({ serverKey: '<Your Google Server Key>' });

const allTypes = Knowledge.types;

console.log(allTypes);

//"types": {
//    "book": "Book",
//    "bookSeries": "BookSeries",
//    "educationalOrganization": "EducationalOrganization",
//    ...
//}
```

### Build Parameters

Builds parameter object to be used on `search` request.

| Parameter    | Type         | Required | Information                    |
|--------------|--------------|----------|--------------------------------|
| query        | String       | Yes      |                                |
| limit        | Number       | No       | Default: 20                    |
| indent       | Boolean      | No       | Defaut: true                   |
| types        | Array[Types] | Yes      |                                |

Example
-
```js
const Knowledge = require('knowledge-node')({ serverKey: '<Your Google Server Key>' });

const query = 'Harry Potter';
const types = [
    Knowledge.types.book,
    Knowledge.types.bookSeries
];
const limit = 5;
const indent = true;

const parameters = Knowledge.buildParams(query, types, limit, indent);

//{
//    "query": "Harry Potter",
//    "limit": 5,
//    "indent": true, 
//    "key": "<Google API Key>",
//    "types": [
//        "Book",
//        "BookSeries"
//    ]
//}

```
## Search

Makes search request to Google Knowledge API. 
You must define correctly the `search` parameters: please read `Build Parameters` section.

For more extensive information about `errors` and `successful body response`, please read [Google Knowledge Graph API Documentation](https://developers.google.com/knowledge-graph/).

Example
-
```js
const Knowledge = require('knowledge-node')({ serverKey: '<Your Google Server Key>' });

const query = 'Harry Potter';
const types = [
    Knowledge.types.book,
    Knowledge.types.bookSeries
];

const params = Knowledge.buildParams(query, types);
return Knowledge.search(params)
                .then(body => {
                    //do something with success response
                })
                .catch(error => {
                    //handle error
                });
```

## Test

First you should follow the [Google Knowledge Graph Search API Prerequisites](https://developers.google.com/knowledge-graph/prereqs), so you have your Google Account setup.

Edit ./test/fixtures/auth.json file and add your Google Server Key.
Install the dev dependencies and run the tests:

```
$ npm install
$ npm test

```

## License

Licensed under the MIT License.
