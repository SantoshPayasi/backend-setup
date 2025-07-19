import { StatusCode } from "./statuscode.utils.js"

export class serviceResponse {
    static success(statusCode = StatusCode.OK, message = " ", data = null) {
        return {
            success: true,
            statusCode,
            message,
            data
        }
    }


    static failure(statusCode = StatusCode.NOT_FOUND, message = " ") {
        return {
            success: false,
            statusCode,
            message
        }
    }
}