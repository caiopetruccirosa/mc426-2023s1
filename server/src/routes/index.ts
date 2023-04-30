import authentication from './authentication';
import express from 'express'

export default (): express.Router => {
    const router = express.Router();
    
    authentication(router);
    
    return router;
}