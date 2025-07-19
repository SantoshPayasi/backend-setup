import { StatusCode } from "./statuscode.utils.js";

export class Response {
    static status;
    static message;
    static data;
    constructor(status, message, data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }


    // create constructor and than use this method
    send(response) {
        const statusCode = this.status || StatusCode.OK;
        const message = this.message || "Success";
        const data = this.data || null;
        return response.status(statusCode).json({ success: true, message: message, data: data });
    }

    // do not create constructor just import class and call this method
    static Send(response, statusCode, message, data) {
        return response.status(statusCode).json({ success: true, message: message, data: data });
    }
}