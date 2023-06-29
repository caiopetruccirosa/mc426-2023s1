import authentication from './authentication';
import post from './post'
import express from 'express'
import user from './user';
import article from './article';
import comment from './comment';

export default (): express.Router => {
    const router = express.Router();
    
    authentication(router);
    post(router);
    user(router);
    article(router);
    comment(router);
    
    return router;
}