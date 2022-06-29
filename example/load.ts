import { createClient } from '../src';

const CLIENT_ID = '';
const CLIENT_SECRET = '';
const CLIENT_SCOPE = '';

async function runner() {
  const client = createClient({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    scope: CLIENT_SCOPE,
    baseURL: 'https://secure.api.promisepay.com',
    nppUrl: 'https://au-0000.api.assemblypay.com/',
  });

  const data = await client.transactions.showSupplementaryData('');
  const user = await client.users.showUser('');

  console.log(data, user);
}

runner()
  .then(() => process.exit())
  .catch(e => {
    console.error(e);
    process.exit();
  });
