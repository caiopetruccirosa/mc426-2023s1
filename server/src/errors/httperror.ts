export class HttpError extends Error {
    statusCode: number;
    message: string;
    cause: any
    
    constructor(statusCode: number, message: string, cause: any = undefined) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.cause = cause;
    }
}