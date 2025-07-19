const { nodeEnvs } = require("./src/constants/common.constants");

module.exports = {
    apps: [
        {
            name: "dev-app",
            script: "server.js",
            env: {
                NODE_ENV: nodeEnvs.development
            }
        },
        {
            name: "testing-app",
            script: "server.js",
            env: {
                NODE_ENV: nodeEnvs.testing
            }
        },
        {
            name: "prod-app",
            script: "server.js",
            env: {
                NODE_ENV: nodeEnvs.production
            }
        }
    ]
}

/*
Process to setup in pm2

npm install pm2 -g
pm2 start ecosystem.config.cjs --only dev-app
or
pm2 start ecosystem.config.cjs --env development
*/