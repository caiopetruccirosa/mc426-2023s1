import express, { Express, Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, username } = req.body
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}