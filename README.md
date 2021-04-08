<h1 align="center">Assembly Payments (Node.js Client)</h1>
<p>
  <a href="https://www.npmjs.com/package/assembly-payments" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/assembly-payments.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: Apache--2.0" src="https://img.shields.io/badge/License-Apache--2.0-yellow.svg" />
  </a>
</p>

A client for Assembly Payments for Typescript/Javascript

A typescript swagger generated client for Assembly Payments

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
 npx swagger-typescript-api -p ./swagger.yaml -o ./src -n index.ts
```

## Example

```javascript
import { Api } from 'assembly-payments';

const client = new Api();
const item = await client.items.showItem('1234');
```
