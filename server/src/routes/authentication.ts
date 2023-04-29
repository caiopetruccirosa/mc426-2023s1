import User from '../models/user'
import * as authService from '../services/authentication'

import { Request, Response, Router } from 'express'

const signIn = async (req: Request, res: Response) => {
    
}

const signUp = async (req: Request, res: Response) => {
    // convert to User model
    const user = req.body as User
    try {
        await authService.signUp(user);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export default (router: Router) => {
    router.post("/auth/signup", signUp)
    router.post("/auth/signin", signIn)
}