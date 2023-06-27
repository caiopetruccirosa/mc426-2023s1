import express, { Express } from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import { DatabaseClientPool, DatabaseClientConfig } from './repositories/dbclient';

dotenv.config();

DatabaseClientPool.initInstance(DatabaseClientConfig.buildFromEnv());

const server: Express = express();
const port = process.env.PORT ?? 3000;

server.use(cors({ credentials: true }));;
server.use(compression());
server.use(cookieParser());
server.use(bodyParser.json());
server.use('', routes());

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});