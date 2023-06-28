import Post from '../models/post';
import errors from '../errors';
import { DatabaseClientPool } from './dbclient'

const POST_TABLE = 'post';

export const createPost = async (post: Post): Promise<Post> => {
    const pool = DatabaseClientPool.getInstance().getPool();
    const client = await pool.acquire()
    const result = await client.query(
        `INSERT INTO ${POST_TABLE} (poster_username, related_article_id, title, content, timestamp) VALUES ($1, $2, $3, $4, NOW()) RETURNING id, related_article_id, timestamp;`,
        [post.posterUsername, post.relatedArticleId, post.title, post.content]
    )
    await pool.release(client)
    const rows = [...result]
    if (rows.length == 0)
        throw new errors.DatabaseError();

    const postData = rows[0];
    post.id = postData.get('id')!.toString();
    post.relatedArticleId = Number(postData.get('related_article_id'));
    post.timestamp = new Date(postData.get('timestamp') as string);
    
    return post
}

export const getPostById = async (id: string): Promise<Post> => {
    const pool = DatabaseClientPool.getInstance().getPool();
    const client = await pool.acquire();
    const result = await client.query(
        `SELECT id, poster_username, timestamp, related_article_id, title, content FROM ${POST_TABLE} WHERE id = $1;`,
        [id]
    );
    await pool.release(client)
    const rows = [...result]
    if (rows.length == 0)
        throw new errors.ResourceNotFound('Post');
    
    const postData = rows[0];
    return {
        id: postData.get('id')!.toString(),
        posterUsername: postData.get('poster_username')!.toString(),
        timestamp: new Date(postData.get('timestamp') as string),
        relatedArticleId: Number(postData.get('related_article_id')),
        title: postData.get('title')!.toString(),
        content: postData.get('content')!.toString()
    }
}

export const getAllPosts = async (): Promise<Post[]> => {
    const pool = DatabaseClientPool.getInstance().getPool();
    const client = await pool.acquire();
    const result = await client.query(
        `SELECT id, poster_username, timestamp, related_article_id, title, content FROM ${POST_TABLE};`
    );
    await pool.release(client);

    const rows = [...result];

    const posts: Post[] = [];
    if (rows.length == 0)
        throw new errors.DatabaseError();

    for (const postData of rows) {
        const post: Post = {
            id: postData.get('id')!.toString(),
            posterUsername: postData.get('poster_username')!.toString(),
            timestamp: new Date(postData.get('timestamp') as string),
            relatedArticleId: Number(postData.get('related_article_id')),
            title: postData.get('title')!.toString(),
            content: postData.get('content')!.toString()
        };
        posts.push(post);
    }

    return posts;
};
