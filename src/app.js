import cors from "cors";
import dotenv from "dotenv";
import { APIError, globalErrorHandler } from "./utils/error.utils.js";
import mainRouter from "./routes/main.route.js"
import { StatusCode } from "./utils/statuscode.utils.js";
import { corsOptions } from "./constants/common.constants.js";
import express from "express"
dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));







app.use("/api/v1", mainRouter);

// error handler is route not found
app.use((request, response) => {
    throw new APIError(StatusCode.NOT_FOUND, "Route not found");
})


// global error handler if any controller throw any error then it will come here
app.use(globalErrorHandler);


export default app;


