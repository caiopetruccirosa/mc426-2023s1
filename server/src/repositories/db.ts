import { Client } from 'ts-postgres';
import { Pool, createPool } from 'generic-pool';

const createDatabaseClient = (): Client => {
    return new Client({
        "host": process.env.DATABASE_HOST,
        "user": process.env.DATABASE_USER,
        "database": process.env.DATABASE_DB,
        "password": process.env.DATABASE_PASSWORD,
        "keepAlive": true,
    });
}

const createDatabasePool = (): Pool<Client> => {
    return createPool({
        create: async () => {
            const client = createDatabaseClient()
            return client.connect().then(() => {
                client.on('error', console.log);
                return client;
            });
        },
        destroy: async (client: Client) => {
            return client.end().then(() => { })
        },
        validate: (client: Client) => {
            return Promise.resolve(!client.closed);
        }
    }, { testOnBorrow: true });
}

export default createDatabasePool();