import { HttpError } from "./httperror";

export class DatabaseError extends HttpError {
    constructor(message: string = 'Internal error while communicating with database', cause: any = undefined) {
        super(500, message, cause);
    }
}