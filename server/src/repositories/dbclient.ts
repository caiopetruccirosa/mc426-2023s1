import { Client } from 'ts-postgres';
import { Pool, createPool } from 'generic-pool';

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
 * lets clients access the unique singleton instance.
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

    public static initInstance(cfg: DatabaseClientConfig) {
        DatabaseClientPool.instance = new DatabaseClientPool(cfg);
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the DatabaseClientPool class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): DatabaseClientPool {
        return DatabaseClientPool.instance;
    }
}