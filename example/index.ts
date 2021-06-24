import createClient from '../src';

const main = async () => {
  const client = createClient({
    clientId: process.env.AP_CLIENT_ID!,
    clientSecret: process.env.AP_CLIENT_SECRET!,
    scope: process.env.AP_CLIENT_SCOPE!,
  });

  const itemResponse = await client.items.showItem(
    'E2A79013-1BC5-4852-B8EC-A442EBBE9EEA'
  );
  console.log(itemResponse);
};

main().then(() => process.exit());
