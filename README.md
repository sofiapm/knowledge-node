# knowledge-node

Simple Node.js module for [Google Knowledge](https://developers.google.com/knowledge-graph/).

## Module Usage

## Search

Makes search re uest to Google Knowledge API.

Example
-
```js
```

## Helper Methods

### Types

Returns all possible types for search.

Example
-
```js
```

### Build Parameters

Builds parameter object to be used on request.

| Parameter    | Type         | Required | Information                    |
|--------------|--------------|----------|--------------------------------|
| query        | String       | Yes      |                                |
| limit        | Number       | No       | Default: 20                    |
| indent       | Boolean      | No       | Defaut: true                   |
| types        | Array[Types] | Yes      |                                |

Example
-
```js
```

## Test