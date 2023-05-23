import { Response } from 'express'
import { HttpError } from '../errors/httperror';

export const handleError = (res: Response, error: any) => {
    console.log(error);
    if (error instanceof HttpError) {
        res.status(error.statusCode).json(error);
    } else {
        res.status(500).json({ error: error });
    }
}