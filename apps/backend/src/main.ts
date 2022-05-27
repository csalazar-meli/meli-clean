import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';

import { ItemApi } from './presentation/item.api';
import { registerProviders } from './providers';

registerProviders();

const port = process.env.SERVER_PORT || 3333;
const app = express();

app.use(cors());

app.use(express.json());
app.use(compression());

app.use('/api/items', ItemApi());

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
