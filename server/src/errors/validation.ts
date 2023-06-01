import { HttpError } from "./httperror";

export class InvalidParameterError extends HttpError {
    constructor(field: string, value: any) {
        super(400, `Field '${field}' got invalid value '${value}'`);
    }
}

export class UsernameIsTaken extends HttpError {
    constructor(username: string) {
        super(400, `Username '${username}' is taken`);
    }
}

export class ResourceNotFound extends HttpError {
    constructor(resourceName: string) {
        super(404, `${resourceName} not found`);
    }
}

export class InvalidCredentials extends HttpError {
    constructor() {
        super(401, `Invalid username or password`);
    }
}