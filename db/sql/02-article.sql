CREATE TABLE IF NOT EXISTS article (
    id SERIAL PRIMARY KEY,
    creator_username VARCHAR(255) REFERENCES "user"(username),
    timestamp TIMESTAMP,
    title VARCHAR(255),
    content TEXT
);
