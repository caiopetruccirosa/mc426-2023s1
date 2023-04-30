CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(255) PRIMARY KEY,
    nickname VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    role VARCHAR(255),
    salt VARCHAR(255)
);
