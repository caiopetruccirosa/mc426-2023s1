import * as articleRepository from '../repositories/article';
import * as userRepository from '../repositories/user';
import Article from '../models/article';
import errors from '../errors';

export const getArticleById = async (id: string): Promise<Article> => {
    return await articleRepository.getArticleById(id);
}

export const getAllArticles = async (): Promise<Article[]> => {
    return await articleRepository.getAllArticles();
}

export const createArticle = async (article: Article): Promise<Article> => {
    // check if user with creatorUsername does exists
    if (!(await userRepository.existsUserByUsername(article.creatorUsername)))
        throw new errors.ResourceNotFound('User')

    return await articleRepository.createArticle(article);
}
