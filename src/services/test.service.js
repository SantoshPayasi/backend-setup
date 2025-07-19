import { serviceResponse } from "../utils/serviceresponse.utils.js";

export class testingService {
    static test() {
        return serviceResponse.success(StatusCode.OK, "Success", "Backend is running fine and ready to go !! ");
    }
}