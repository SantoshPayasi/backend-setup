import { Response } from "../utils/response.utils.js";
import { StatusCode } from "../utils/statuscode.utils.js";

export class testController {
    static async test(request, response) {
        // throw new APIError(StatusCode.BAD_REQUEST, "testing api is not working")
        return Response.Send(response, StatusCode.OK, "Success", "Backend is running fine and ready to go !! ");
    }
}