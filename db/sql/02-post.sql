CREATE TABLE IF NOT EXISTS post (
    id SERIAL PRIMARY KEY,
    poster_username VARCHAR(255) REFERENCES "user"(username),
    timestamp TIMESTAMP,
    related_article_id INTEGER REFERENCES article(id),
    title VARCHAR(255),
    content TEXT
);
