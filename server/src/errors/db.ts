import { HttpError } from "./httperror";

export class DatabaseError extends HttpError {
    constructor(cause: any = undefined) {
        super(500, 'Internal error while communicating with database', cause);
    }
}