import Comment from '../models/comment'
import * as commentService from '../services/comment'
import { Request, Response, Router } from 'express'
import { handleError } from './error'

const getCommentsByPostId = async (req: Request, res: Response) => {
    try {
        const postId = req.params.id;
        const comment = await commentService.getCommentsByPostId(postId);
        res.status(200).json(comment);
    } catch (error) {
        handleError(res, error);
    }
};

const createComment = async (req: Request, res: Response) => {
    try {
        const comment = req.body as Comment;
        const commentCreated = await commentService.createComment(comment);
        res.status(200).json(commentCreated);
    } catch (error) {
        handleError(res, error);
    }
};

const getAllComments = async (req: Request, res: Response) => {
    try {
        const comments = await commentService.getAllComments();
        res.status(200).json(comments);
    } catch (error) {
        handleError(res, error);
    }
};

export default (router: Router) => {
    router.get("/comments/:id", getCommentsByPostId);
    router.post("/comments", createComment);
    router.get("/comments", getAllComments);
};
