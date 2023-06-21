import errors from '../errors';
import User from '../models/user';
import { existsUserByUsername, getUserByUsername, createUser } from '../repositories/user';
import crypto from 'crypto';
import { InvalidParameterError } from '../errors/validation';

const generateSalt = (): string => {
    return crypto.randomBytes(32).toString('base64');
}

const generatePassword = (salt: string, password: string): string =>  {
    const SECRET = "wikiforum"
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex')
}

const validateUserFields = (user: User) => {
    // check if username contains only letters
    const USERNAME_REGEX = /^[a-zA-Z]+$/;
    if (!USERNAME_REGEX.test(user.username)) 
        throw new InvalidParameterError('username', user.username);

    // check if username contains only letters or spaces
    const NICKNAME_REGEX = /^[a-zA-Z\s]+$/;
    if (!NICKNAME_REGEX.test(user.nickname)) 
        throw new InvalidParameterError('nickname', user.nickname);

    // check if email is valid
    // regex expression obtained from RFC882 (http://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html)
    const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    if (!EMAIL_REGEX.test(user.email))
        throw new InvalidParameterError('email', user.email);

    // check if password contains at least length 5 and one lowercase letter, uppercase letter, special character and number
    // explanation:
    // ^                               start anchor
    // (?=(.*[a-z]){3,})               lowercase letters
    // (?=(.*[A-Z]){2,})               uppercase letters
    // (?=(.*[0-9]){2,})               numbers
    // (?=(.*[!@#$%^&*()\-__+.]){1,})  all the special characters in the [] fields. the ones used by regex are escaped by using the \ or the character itself
    // {5,}                            indicates that we want 5 or more
    // $                               end anchor
    // obs: {n,} indicates that we want n of the group. {1,} is redundant, but good practice for future changes
    const PASSWORD_REGEX = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{5,}$/
    if (!user.password || !PASSWORD_REGEX.test(user.password!))
        throw new InvalidParameterError('password', user.password);
}

const overwriteUserSaltAndPwd = (user: User): User => {
    // overwrite user salt and password before returning
    user.salt = undefined;
    user.password = undefined;
    return user;
}

export const signUp = async (user: User): Promise<User> => {
    // check if user fields like username, nickname, email and password are valid
    validateUserFields(user);

    // check if user with username does not exists
    if (await existsUserByUsername(user.username))
        throw new errors.UsernameIsTaken(user.username)

    const salt = generateSalt();
    const userCreated = {
        username: user.username,
        nickname: user.nickname,
        email: user.email,
        role: 'DEFAULT_ROLE',
        salt: salt,
        password: generatePassword(salt, user.password!),
    };
    await createUser(userCreated);

    return overwriteUserSaltAndPwd(userCreated);
}

export const signIn = async (username: string, password: string): Promise<User> => {
    try {
        const user = await getUserByUsername(username);

        // check if password is correct
        const encryptedPwd = generatePassword(user.salt!, password);
        if (encryptedPwd != user.password)
            throw new errors.InvalidCredentials();

        return overwriteUserSaltAndPwd(user);
    } catch (error) {
        throw new errors.InvalidCredentials();
    }
}
