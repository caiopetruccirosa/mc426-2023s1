import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server: Express = express();
const port = process.env.PORT;

server.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});