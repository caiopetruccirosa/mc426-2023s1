const USER_ALREADY_EXISTS = "[BAD REQUEST] user already exists"
const INVALID_USERNAME = "[BAD REQUEST] invalid value for username"
const INVALID_NICKNAME = "[BAD REQUEST] invalid value for nickname"
const INVALID_EMAIL = "[BAD REQUEST] invalid value for email"
const INVALID_PASSWORD = "[BAD REQUEST] invalid value for password"
const DATABASE_ERROR = "[INTERNAL SERVER ERROR] an error has occured when communicating with database"

export default {
    USER_ALREADY_EXISTS,
    INVALID_USERNAME,
    INVALID_NICKNAME,
    INVALID_EMAIL,
    INVALID_PASSWORD,
    DATABASE_ERROR
}