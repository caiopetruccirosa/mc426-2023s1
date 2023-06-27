import * as postRepository from '../repositories/post';
import * as userRepository from '../repositories/user';
import Post from '../models/post';
import errors from '../errors';

export const getPostById = async (id: string): Promise<Post> => {
    return await postRepository.getPostById(id);
}

export const getAllPosts = async (): Promise<Post[]> => {
    return await postRepository.getAllPosts();
}

export const createPost = async (post: Post): Promise<Post> => {
    // check if user with username does exists
    if (!(await userRepository.existsUserByUsername(post.posterUsername)))
        throw new errors.ResourceNotFound('User')

    return await postRepository.createPost(post);
}
