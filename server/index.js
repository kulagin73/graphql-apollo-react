import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import cors from 'cors';
import { schema } from './schema/schema.js';
import { ruruHTML } from 'ruru/server';
import { rootValue } from './resolvers/root.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const staticDir = path.resolve(__dirname, '../dist');

const server = express();

server.use(express.urlencoded({ extended: true }));

server.use(express.json());

server.use(express.static(staticDir));

server.use(cors());

server.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: rootValue,
  })
)

server.get('/graphiql', (req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

server.get("/*", (req, res) => {
	res.type('text/html');
    res.sendFile(path.join(staticDir, "index.html"));
});

server.listen(5555, () => {
  console.log('server start')
})