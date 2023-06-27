import Comment from '../models/comment';
import errors from '../errors';
import db from './db';

const COMMENT_TABLE = 'comment';

export const createComment = async (comment: Comment): Promise<Comment> => {
    const client = await db.acquire();
    const result = await client.query(
        `INSERT INTO ${COMMENT_TABLE} (post_id, author_username, text) VALUES ($1, $2, $3) RETURNING id, post_id, author_username, timestamp, text;`,
        [comment.postId, comment.authorUsername, comment.text]
    );
    await db.release(client);
    const rows = [...result];
    if (rows.length === 0) {
        throw new errors.DatabaseError();
    }

    const commentData = rows[0];
    comment.id = commentData.get('id')!.toString();
    comment.postId = Number(commentData.get('post_id'));
    comment.authorUsername = commentData.get('author_username')!.toString();
    comment.timestamp = new Date(commentData.get('timestamp') as string);
    comment.text = commentData.get('text')!.toString();

    return comment;
};

export const getCommentsByPostId = async (post_id: string): Promise<Comment[]> => {
    const client = await db.acquire();
    const result = await client.query(
        `SELECT id, post_id, author_username, timestamp, text FROM ${COMMENT_TABLE} WHERE post_id = $1;`,
        [post_id]
    );
    await db.release(client);
    const rows = [...result];
    const comments: Comment[] = [];

    for (const commentData of rows) {
        const comment: Comment = {
            id: commentData.get('id')!.toString(),
            postId: Number(commentData.get('post_id')),
            authorUsername: commentData.get('author_username')!.toString(),
            timestamp: new Date(commentData.get('timestamp') as string),
            text: commentData.get('text')!.toString()
        };
        comments.push(comment);
    }

    return comments;
};

export const getAllComments = async (): Promise<Comment[]> => {
    const client = await db.acquire();
    const result = await client.query(
        `SELECT id, post_id, author_username, timestamp, text FROM ${COMMENT_TABLE};`
    );
    await db.release(client);
    const rows = [...result];
    const comments: Comment[] = [];

    for (const commentData of rows) {
        const comment: Comment = {
            id: commentData.get('id')!.toString(),
            postId: Number(commentData.get('post_id')),
            authorUsername: commentData.get('author_username')!.toString(),
            timestamp: new Date(commentData.get('timestamp') as string),
            text: commentData.get('text')!.toString()
        };
        comments.push(comment);
    }

    return comments;
};
