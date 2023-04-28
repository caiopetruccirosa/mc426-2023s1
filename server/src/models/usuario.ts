class Usuario {
    username: string;
    nickname: string;
    email: string;
    password?: string;

    constructor(username: string, nickname: string, email: string, password?: string) {
        this.username = username;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
    }
}

export default Usuario;