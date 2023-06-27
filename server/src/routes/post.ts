import Post from '../models/post'
import * as postService from '../services/post'
import { Request, Response, Router } from 'express'
import { handleError } from './error';

const getPostById = async (req: Request, res: Response) => {
    try {
        const postId = req.params.id;
        const post = await postService.getPostById(postId);
        res.status(200).json(post);
    } catch (error) {
        handleError(res, error);
    }
};

const createPost = async (req: Request, res: Response) => {
    try {
        const post = req.body as Post;
        const postCreated = await postService.createPost(post);
        res.status(200).json(postCreated);
    } catch (error) {
        handleError(res, error);
    }
};

const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await postService.getAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        handleError(res, error);
    }
};

export default (router: Router) => {
    router.get("/posts/:id", getPostById);
    router.post("/posts", createPost);
    router.get("/posts", getAllPosts);
}