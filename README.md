# VS Marketplace API

A simple NPM module to load extension data from the VS Marketplace API.

## Install

```
npm install vsmarketplace-api
```

## Usage

```js
const query = require("vsmarketplace-api");

query("Prettier").then(data => {
  // data holds the response from the VS Marketplace API

  // view array of objects of extensions
  console.log(data.results[0].extensions);
});
```

NOTE: Currently it will only grab VS Code Extensions.
