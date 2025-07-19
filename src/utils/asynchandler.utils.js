import { APIError } from "./error.utils.js";
import { StatusCode } from "./statuscode.utils.js";

export const AsyncHandler = (fn) => {
    return async (request, response, next) => {
        try {
            await fn(request, response, next);
        } catch (error) {
            if (error instanceof APIError) {
                return next(error);
            }
            next(new APIError(StatusCode.SERVER_ERROR, error.message));
        }
    }
}