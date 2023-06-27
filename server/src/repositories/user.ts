import User from '../models/user';
import errors from '../errors';
import { DatabaseClientPool } from './dbclient'

const USER_TABLE = '"user"';

export const createUser = async (user: User) => {
    const pool = DatabaseClientPool.getInstance().getPool();
    const client = await pool.acquire();
    await client.query(
        `INSERT INTO ${USER_TABLE} (username, nickname, email, salt, password, role) VALUES ($1, $2, $3, $4, $5, $6);`,
        [user.username, user.nickname, user.email, user.salt!, user.password!, user.role!]
    );
    await pool.release(client)
};

export const existsUserByUsername = async (username: string): Promise<boolean> => {
    const pool = DatabaseClientPool.getInstance().getPool();
    const client = await pool.acquire();
    const result = await client.query(
        `SELECT EXISTS(SELECT username FROM ${USER_TABLE} WHERE username = $1) as "exists";`,
        [username]
    );
    await pool.release(client)
    const rows = [...result];
    return rows[0].get("exists")!.valueOf() as boolean;
};

export const getUserByUsername = async (username: string): Promise<User> => {
    const pool = DatabaseClientPool.getInstance().getPool();
    const client = await pool.acquire();
    const result = await client.query(
        `SELECT username, nickname, email, role, salt, password FROM ${USER_TABLE} WHERE username = $1;`,
        [username]
    );
    await pool.release(client)
    const rows = [...result];
    if (rows.length == 0)
        throw new errors.ResourceNotFound('User');
    
    const userData = rows[0];
    return {
        username: userData.get('username')!.toString(),
        nickname: userData.get('nickname')!.toString(),
        email: userData.get('email')!.toString(),
        role: userData.get('role')!.toString(),
        salt: userData.get('salt')!.toString(),
        password: userData.get('password')!.toString(),
    };
};

