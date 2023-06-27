import User from '../models/user';
import errors from '../errors';
import db from './db'

const USER_TABLE = '"user"';

export const createUser = async (user: User): Promise<User> => {
    const client = await db.acquire()
    const result = await client.query(
        `INSERT INTO ${USER_TABLE} (username, nickname, email, salt, password, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING username, nickname, email;`,
        [user.username, user.nickname, user.email, user.salt!, user.password!, user.role!]
    )
    const rows = [...result]
    if (rows.length == 0)
        throw new errors.DatabaseError();
    await db.release(client)

    const userData = rows[0];
    user.username = userData.get('username')!.toString();
    user.nickname = userData.get('nickname')!.toString();
    user.email = userData.get('email')!.toString();

    return user
};

export const existsUserByUsername = async (username: string): Promise<boolean> => {
    const client = await db.acquire();
    const result = await client.query(
        `SELECT EXISTS(SELECT username FROM ${USER_TABLE} WHERE username = $1) as "exists";`,
        [username]
    );
    await db.release(client)
    const rows = [...result];
    return rows[0].get("exists")!.valueOf() as boolean;
};

export const getUserByUsername = async (username: string): Promise<User> => {
    const client = await db.acquire();
    const result = await client.query(
        `SELECT username, nickname, email, role, salt, password FROM ${USER_TABLE} WHERE username = $1;`,
        [username]
    );
    await db.release(client)
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


