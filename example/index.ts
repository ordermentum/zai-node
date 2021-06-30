import createClient from '../src';

const main = async () => {
  const client = createClient({
    clientId: process.env.AP_CLIENT_ID!,
    clientSecret: process.env.AP_CLIENT_SECRET!,
    scope: process.env.AP_CLIENT_SCOPE!,
  });

  const itemResponse = await client.items.showItem(
    '865E25F-3CFE-4C8C-8673-9231E0A19CF5'
  );
  console.log(itemResponse);
};

main().then(() => process.exit());
