import { InvalidParameterError, UsernameIsTaken, ResourceNotFound, InvalidCredentials } from "./validation";
import { HttpError } from "./httperror";
import { DatabaseError } from "./db";

export default {
    HttpError,
    InvalidParameterError,
    DatabaseError,
    UsernameIsTaken,
    ResourceNotFound,
    InvalidCredentials
}