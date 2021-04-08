import { Api } from '../src';

const main = async () => {
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
};

main().then(() => process.exit());
