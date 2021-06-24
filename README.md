<h1 align="center">Assembly Payments (Node.js Client)</h1>
<p>
  <a href="https://www.npmjs.com/package/assembly-payments" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/assembly-payments.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: Apache--2.0" src="https://img.shields.io/badge/License-Apache--2.0-yellow.svg" />
  </a>
</p>

An (unofficial) Assembly Payments Typescript/Javascript client

types are swagger generated from - https://reference.assemblypayments.com/

# Usage

yarn

```sh
yarn add assembly-payments
```

npm

```sh
npm install --save assembly-payments
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

## Generating updated client

Copy swagger.yaml file into root directory and run

```bash
  npx swagger-typescript-api -p ./swagger.yaml -o ./src -n types.ts --no-client
```

## Example

```javascript
import { Api } from 'assembly-payments';

const authClient = new Api({
  baseURL: 'https://au-0000.auth.assemblypay.com/',
});

const tokenResponse = await authClient.tokens.token({
  client_id: process.env.AP_CLIENT_ID,
  client_secret: process.env.AP_CLIENT_SECRET,
  grant_type: 'client_credentials',
  scope: process.env.AP_CLIENT_SCOPE,
});

const token = tokenResponse.data.access_token;
const securityWorker = async (data) => ({
  headers: {
    Authorization: `Bearer ${data.token}`,
  },
});
const client = new Api({
  securityWorker,
  baseURL: 'https://secure.api.promisepay.com/',
});

client.setSecurityData({ token });
const itemResponse = await client.items.showItem(
  '6865E25F-3CFE-4C8C-8673-9231E0A19CF5'
);
console.log(itemResponse.data.items);
```
