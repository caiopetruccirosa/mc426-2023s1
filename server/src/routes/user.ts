import User from '../models/user';
import * as userService from '../services/user';
import { Request, Response, Router } from 'express';
import { handleError } from './error';

const getUserByUsername = async (req: Request, res: Response) => {
    try {
        const username = req.params.username;
        const user = await userService.getUserByUsername(username);
        res.status(200).json(user);
    } catch (error) {
        handleError(res, error);
    }
};

const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body as User;
        const userCreated = await userService.createUser(user);
        res.status(200).json({ user: userCreated });
    } catch (error) {
        handleError(res, error);
    }
};

export default (router: Router) => {
    router.get("/users/:username", getUserByUsername);
    router.post("/users", createUser);
};