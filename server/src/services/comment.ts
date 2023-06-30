import * as commentRepository from '../repositories/comment';
import * as userRepository from '../repositories/user';
import Comment from '../models/comment';
import errors from '../errors';

export const getCommentsByPostId = async (id: string): Promise<Comment[]> => {
    return await commentRepository.getCommentsByPostId(id);
}

export const getAllComments = async (): Promise<Comment[]> => {
    return await commentRepository.getAllComments();
}

export const createComment = async (comment: Comment): Promise<Comment> => {
    if (!(await userRepository.existsUserByUsername(comment.authorUsername)))
        throw new errors.ResourceNotFound('User')

    return await commentRepository.createComment(comment);
}
