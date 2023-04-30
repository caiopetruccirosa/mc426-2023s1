import authentication from './authentication';
import post from './post'
import express from 'express'

export default (): express.Router => {
    const router = express.Router();
    
    authentication(router);
    post(router);
    
    return router;
}