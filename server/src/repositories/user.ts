import User from '../models/user';
import errors from '../utils/errors';
import db from './db'

export const createUser = async (user: User) => {
    const client = await db.acquire()
    await client.query(
        'INSERT INTO user (username, nickname, email, salt, password, role) VALUES ($1, $2, $3, $4, $5, $6)',
        [user.username, user.nickname, user.email, user.salt!, user.password!, user.role!]
    )
};

export const existsUserByUsername = async (username: string): Promise<boolean> => {
    const client = await db.acquire();
    const result = await client.query(
        'SELECT EXISTS(SELECT username FROM user WHERE username = $1) as "exists"',
        [username]
    );
    const rows = [...result]
    return rows[0].get("exists")!.valueOf() as boolean;
};

export const getUserByUsername = async (username: string): Promise<User> => {
    const client = await db.acquire();
    const result = await client.query(
        'SELECT username, nickname, email, role, salt, password FROM user WHERE username = $1',
        [username]
    );

    const rows = [...result]
    if (rows.length == 0)
        throw Error(errors.USER_NOT_FOUND)
    
    const userData = rows[0];
    return {
        username: userData.get('username')!.toString(),
        nickname: userData.get('nickname')!.toString(),
        email: userData.get('email')!.toString(),
        role: userData.get('role')!.toString(),
        salt: userData.get('salt')!.toString(),
        password: userData.get('password')!.toString(),
    }
};

