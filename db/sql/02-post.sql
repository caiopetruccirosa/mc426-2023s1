CREATE TABLE IF NOT EXISTS post (
    id SERIAL PRIMARY KEY,
    poster_username VARCHAR(255) REFERENCES users(username),
    date DATE,
    title VARCHAR(255),
    content TEXT
);
