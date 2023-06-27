import Article from '../models/article';
import errors from '../errors';
import { DatabaseClientPool } from './dbclient'

const ARTICLE_TABLE = 'article';

export const createArticle = async (article: Article): Promise<Article> => {
    const pool = DatabaseClientPool.getInstance().getPool();
    const client = await pool.acquire();
    const result = await client.query(
        `INSERT INTO ${ARTICLE_TABLE} (creator_username, title, content) VALUES ($1, $2, $3) RETURNING id, timestamp;`,
        [article.creatorUsername, article.title, article.content]
    );
    await pool.release(client);
    
    const rows = [...result];
    if (rows.length === 0)
        throw new errors.DatabaseError();

    const articleData = rows[0];
    article.id = articleData.get('id')!.toString();
    article.timestamp = new Date(articleData.get('timestamp') as string);

    return article;
};

export const getArticleById = async (id: string): Promise<Article> => {
    const pool = DatabaseClientPool.getInstance().getPool();
    const client = await pool.acquire();
    const result = await client.query(
        `SELECT id, creator_username, timestamp, title, content FROM ${ARTICLE_TABLE} WHERE id = $1;`,
        [id]
    );
    await pool.release(client);
    
    const rows = [...result];
    if (rows.length === 0)
        throw new errors.ResourceNotFound('Article');

    const articleData = rows[0];
    return {
        id: articleData.get('id')!.toString(),
        creatorUsername: articleData.get('creator_username')!.toString(),
        timestamp: new Date(articleData.get('timestamp') as string),
        title: articleData.get('title')!.toString(),
        content: articleData.get('content')!.toString()
    };
};

export const getAllArticles = async (): Promise<Article[]> => {
    const pool = DatabaseClientPool.getInstance().getPool();
    const client = await pool.acquire();
    const result = await client.query(
        `SELECT id, creator_username, timestamp, title, content FROM ${ARTICLE_TABLE};`
    );
    await pool.release(client);
    const rows = [...result];
    const articles: Article[] = [];

    for (const articleData of rows) {
        const article: Article = {
            id: articleData.get('id')!.toString(),
            creatorUsername: articleData.get('creator_username')!.toString(),
            timestamp: new Date(articleData.get('timestamp') as string),
            title: articleData.get('title')!.toString(),
            content: articleData.get('content')!.toString()
        };
        articles.push(article);
    }

    return articles;
};
