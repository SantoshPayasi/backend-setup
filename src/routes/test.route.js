import express from "express";
import { testController } from "../controller/test.constroller.js";
import { AsyncHandler } from "../utils/asynchandler.utils.js";

const router = express.Router();


router.get("/", AsyncHandler(testController.test))


export default router;