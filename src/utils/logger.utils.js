import { nodeEnvs } from "../constants/common.constants.js";
import { envProvider } from "../constants/env.constants.js";

export class logger {
    static log(...args) {
        if (envProvider.nodenv === nodeEnvs.development || envProvider.nodenv === nodeEnvs.testing) {
            console.log(...args);
        }
    }

    static error(...args) {
        if (envProvider.nodenv === nodeEnvs.development || envProvider.nodenv === nodeEnvs.testing) {
            console.error(...args);
        }
    }

    static warn(...args) {
        if (envProvider.nodenv === nodeEnvs.development || envProvider.nodenv === nodeEnvs.testing) {
            console.warn(...args);
        }
    }

    static info(...args) {
        if (envProvider.nodenv === nodeEnvs.development || envProvider.nodenv === nodeEnvs.testing) {
            console.info(...args);
        }
    }
}