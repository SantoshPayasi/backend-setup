import dotenv from "dotenv";
import path from "path";
import { nodeEnvs } from "./common.constants.js";
import { logger } from "../utils/logger.utils.js";

const env = process.env.NODE_ENV || "development";

const envs = {
    development: ".env",
    testing: ".env.staging",
    production: ".env.production"
}
const envPath = path.resolve(process.cwd(), envs[env]);


dotenv.config({ path: envPath });


dotenv.config();



export class envProvider {
    static PORT = process.env.PORT || 3001;
    static nodenv = process.env.NODE_ENV || "development";
}

