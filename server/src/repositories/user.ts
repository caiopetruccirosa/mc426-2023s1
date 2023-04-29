import User from '../models/user';
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
        'EXISTS(SELECT * FROM user WHERE username = $1)',
        [username]
    );
    const rows = [...result]
    if (rows[0].data[0]) {
        return true;
    }
    return false;
};