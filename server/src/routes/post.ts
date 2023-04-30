import Post from '../models/post'
import * as postService from '../services/post'

import { Request, Response, Router } from 'express'

const getPostById = async (req: Request, res: Response) => {
    try {
        const postId = req.params.id;
        const post = await postService.getPostById(postId);
        res.status(200).json({ post: post });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
}

const createPost = async (req: Request, res: Response) => {
    try {
        const post = req.body as Post;
        const postCreated = await postService.createPost(post);
        res.status(200).json({ post: postCreated });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
}

export default (router: Router) => {
    router.get("/posts/:id", getPostById);
    router.post("/posts", createPost);
}