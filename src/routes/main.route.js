import express from "express";
import testingRouter from "./test.route.js"
const router = express.Router();

router.use("/test", testingRouter);


export default router;