export default class User {
    username: string;
    nickname: string;
    email: string;
    role?: string;
    salt?: string;
    password?: string;

    constructor(username: string, nickname: string, email: string, role?: string, salt?: string, password?: string) {
        this.username = username;
        this.nickname = nickname;
        this.email = email;
        this.role = role;
        this.salt = salt;
        this.password = password;
    }
}