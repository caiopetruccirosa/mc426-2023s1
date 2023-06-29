import Article from '../models/article';
import * as articleService from '../services/article';
import { Request, Response, Router } from 'express';
import { handleError } from './error';

const getArticleById = async (req: Request, res: Response) => {
    try {
        const articleId = req.params.id;
        const article = await articleService.getArticleById(articleId);
        res.status(200).json(article);
    } catch (error) {
        handleError(res, error);
    }
};

const createArticle = async (req: Request, res: Response) => {
    try {
        const article = req.body as Article;
        const articleCreated = await articleService.createArticle(article);
        res.status(200).json(articleCreated);
    } catch (error) {
        handleError(res, error);
    }
};

const getAllArticles = async (req: Request, res: Response) => {
    try {
        const articles = await articleService.getAllArticles();
        res.status(200).json(articles);
    } catch (error) {
        handleError(res, error);
    }
};

export default (router: Router) => {
    router.get("/articles/:id", getArticleById);
    router.post("/articles", createArticle);
    router.get("/articles", getAllArticles);
};
