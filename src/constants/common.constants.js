export const nodeEnvs = {
    development: "development",
    production: "production",
    testing: "testing"
}


export const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
}