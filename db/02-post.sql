CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) REFERENCES "user"(username),
    date DATE,
    title VARCHAR(255),
    content TEXT
);
