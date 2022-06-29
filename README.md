<h1 align="center">Zai Node.js Client</h1>
<p>
  <a href="https://www.npmjs.com/package/assembly-payments" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/assembly-payments.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: Apache--2.0" src="https://img.shields.io/badge/License-Apache--2.0-yellow.svg" />
  </a>
</p>

An (unofficial) Zai Typescript/Javascript client

types are swagger generated from - https://developer.hellozai.com/reference/overview

# Usage

yarn

```sh
yarn add zai-payments
```

npm

```sh
npm install --save zai-payments
```

## Contributing

### Install

```sh
yarn install
```

### Run tests

```sh
yarn run test
```

## Author

👤 **engineering@ordermentum.com**

## Generating updated types

Copy swagger.yaml file into root directory and run

```bash
  npx swagger-typescript-api -p ./swagger.yaml -o ./src -n types.ts --no-client
```

## Example

```typescript
import { createClient } from "assembly-payments";

const baseURL = process.env.AP_SANDPIT
  ? "https://test.api.promisepay.com/"
  : "https://secure.api.promisepay.com/";

const authBaseURL = process.env.AP_SANDPIT
  ? "https://au-0000.sandbox.auth.assemblypay.com/"
  : "https://au-0000.auth.assemblypay.com/";

const dataURL = process.env.AP_SANDPIT
  ? "https://sandbox.au-0000.api.assemblypay.com/"
  : "https://au-0000.api.assemblypay.com/";

export const client = createClient({
  clientId: process.env.AP_CLIENT_ID,
  clientSecret: process.env.AP_CLIENT_SECRET,
  scope: process.env.AP_CLIENT_SCOPE,
  baseURL,
  authBaseURL,
  dataURL,
});

const itemResponse = await client.items.showItem(
  "6865E25F-3CFE-4C8C-8673-9231E0A19CF5"
);

console.log(itemResponse.items);
```
