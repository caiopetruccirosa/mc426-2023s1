import User from '../models/user'
import * as authService from '../services/authentication'

import { Request, Response, Router } from 'express'

const signIn = async (req: Request, res: Response) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await authService.signIn(username, password);
        res.status(200).json({ user: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
}

const signUp = async (req: Request, res: Response) => {
    try {
        const user = req.body as User;
        const userCreated = await authService.signUp(user);
        res.status(200).json({ user: userCreated });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
}

export default (router: Router) => {
    router.post("/auth/signup", signUp);
    router.post("/auth/signin", signIn);
}