import { envProvider } from "../constants/env.constants.js";
import { StatusCode } from "./statuscode.utils.js";

export class APIError extends Error {
    constructor(status = StatusCode.SERVER_ERROR, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static BadRequest(message) {
        return new APIError(StatusCode.BAD_REQUEST, message);
    }

    static Unauthorized(message) {
        return new APIError(StatusCode.UNAUTHORIZED, message);
    }
}


export const globalErrorHandler = (error, request, response, next) => {
    if (error) {
        const statusCode = error?.statusCode || StatusCode.SERVER_ERROR;
        const message = error?.message || "Something went wrong";

        return response.status(statusCode).json({ success: false, message: message, stack: envProvider.nodenv === "development" ? error.stack : null });

    }
    next();
}