CREATE TABLE IF NOT EXISTS comment (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES post(id),
    author_username VARCHAR(255) REFERENCES "user"(username),
    timestamp TIMESTAMP,
    text TEXT
);