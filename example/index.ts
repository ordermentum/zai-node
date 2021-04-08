import { Api } from '../src';


const client = new Api();
const item = await client.items.showItem('1234');