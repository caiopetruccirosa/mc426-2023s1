const USER_ALREADY_EXISTS = "[BAD REQUEST] user already exists"
const USER_NOT_FOUND = "[BAD REQUEST] user not found"
const POST_NOT_FOUND = "[BAD REQUEST] post not found"
const INCORRECT_USERNAME_OR_PWD = "[BAD REQUEST] incorrect username or password"
const INVALID_USERNAME = "[BAD REQUEST] invalid value for username"
const INVALID_NICKNAME = "[BAD REQUEST] invalid value for nickname"
const INVALID_EMAIL = "[BAD REQUEST] invalid value for email"
const INVALID_PASSWORD = "[BAD REQUEST] invalid value for password"
const DATABASE_ERROR = "[INTERNAL SERVER ERROR] an error has occured when communicating with database"

export default {
    USER_ALREADY_EXISTS,
    USER_NOT_FOUND,
    POST_NOT_FOUND,
    INCORRECT_USERNAME_OR_PWD,
    INVALID_USERNAME,
    INVALID_NICKNAME,
    INVALID_EMAIL,
    INVALID_PASSWORD,
    DATABASE_ERROR
}