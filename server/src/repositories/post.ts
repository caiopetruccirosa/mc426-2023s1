import Post from '../models/post';
import errors from '../errors';
import db from './db'

export const createPost = async (post: Post): Promise<Post> => {
    const client = await db.acquire()
    const result = await client.query(
        'INSERT INTO post (poster_username, date, title, content) VALUES ($1, NOW(), $2, $3) RETURNING id, date',
        [post.posterUsername, post.title, post.content]
    )
    const rows = [...result]
    if (rows.length == 0)
        throw new errors.DatabaseError();

    const postData = rows[0];
    post.id = postData.get('id')!.toString();
    post.date = new Date(postData.get('date')!.toString());
    
    return post
}

export const getPostById = async (id: string): Promise<Post> => {
    const client = await db.acquire();
    const result = await client.query(
        'SELECT id, poster_username, date, title, content FROM post WHERE id = $1',
        [id]
    );

    const rows = [...result]
    if (rows.length == 0)
        throw new errors.ResourceNotFound('Post');
    
    const postData = rows[0];
    return {
        id: postData.get('id')!.toString(),
        posterUsername: postData.get('poster_username')!.toString(),
        date: new Date(postData.get('date')!.toString()),
        title: postData.get('title')!.toString(),
        content: postData.get('content')!.toString(),
    }
}