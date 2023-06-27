import { Client } from 'ts-postgres';
import { Pool, createPool } from 'generic-pool';
import { DatabaseError } from '../errors/db';

export class DatabaseClientConfig {
    readonly host: string;
    readonly user: string;
    readonly database: string;
    readonly password: string;
    readonly keepAlive: boolean;

    constructor(host: string, user: string, database: string, password: string, keepAlive: boolean) {
        this.host = host;
        this.user = user;
        this.database = database;
        this.password = password;
        this.keepAlive = keepAlive;
    }

    public static buildFromEnv(): DatabaseClientConfig {
        return new DatabaseClientConfig(
            process.env.POSTGRES_HOST!, 
            process.env.POSTGRES_USER!, 
            process.env.POSTGRES_DB!, 
            process.env.POSTGRES_PASSWORD!, 
            true
        );
    }
}

/**
 * The DatabaseClientPool class defines the `getInstance` method that 
 * lets clients access the unique singleton instance and a `initInstance`
 * that lets clients initialize the instance with a specific config without
 * passing it to every `getInstance` call.
 */
export class DatabaseClientPool {
    private static instance: DatabaseClientPool;

    private clientPool: Pool<Client>;

    /**
     * The DatabaseClientPool's constructor should always be private 
     * to prevent directconstruction calls with the `new` operator.
     */
    private constructor(cfg: DatabaseClientConfig) {
        this.clientPool = createPool({
            create: async () => {
                const client = new Client({
                    'host': cfg.host,
                    'user': cfg.user,
                    'database': cfg.database,
                    'password': cfg.password,
                    'keepAlive': cfg.keepAlive
                });
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

    public getPool(): Pool<Client> {
        return this.clientPool;
    }

    /**
     * The static method that controls initialization of the singleton instance.
     */
    public static initInstance(cfg: DatabaseClientConfig) {
        if (DatabaseClientPool.instance != undefined)
            throw new DatabaseError('client pool is already initialized')
        DatabaseClientPool.instance = new DatabaseClientPool(cfg);
    }

    /**
     * The static method that controls the access to the singleton instance.
     */
    public static getInstance(): DatabaseClientPool {
        if (DatabaseClientPool.instance == undefined)
            throw new DatabaseError('client pool is not initialized')
        return DatabaseClientPool.instance;
    }
}