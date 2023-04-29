import errors from '../utils/errors';
import User from '../models/user';
import { existsUserByUsername, createUser } from '../repositories/user';
import crypto from 'crypto';

const SECRET = "wikiforum"

const generateSalt = (): string => {
    return crypto.randomBytes(128).toString('base64');
}

const generatePassword = (salt: string, password: string): string =>  {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex')
}

export const signUp = async (user: User) => {
    // TODO: check if username, nickname and password is valid

    if (await existsUserByUsername(user.username)) {
        throw Error(errors.USER_ALREADY_EXISTS)
    }

    const salt = generateSalt();
    await createUser({
        username: user.username,
        nickname: user.nickname,
        email: user.nickname,
        role: "DEFAULT_ROLE",
        password: generatePassword(salt, user.password!),
    });
}

export const signIn = async () => {}