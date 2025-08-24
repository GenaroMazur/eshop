import "dotenv/config";
import Server from "./infrastructure/Server";
import Application from "./infrastructure/Application";
import { CloseProcessCallback } from "./utils/closeProcess";
import RabbitMqConnection from "./infrastructure/queue/RabbitMqConnection";
import RedisConnection from "./infrastructure/database/RedisConnection";
import NotFoundController from "./infrastructure/http/controllers/NotFound.controller";
import indexRouter from "./infrastructure/http/routes/index.router";
import { logger } from "./utils/logger";

const application = Application.instance;

const PORT = process.env.PORT;
const REDIS_URI = process.env.REDIS_URI;
const RABBITMQ_URI = process.env.RABBITMQ_URI;

if (!REDIS_URI) throw new Error("environment required: REDIS_URI");
if (!RABBITMQ_URI) throw new Error("environment required: RABBITMQ_URI");
if (!PORT) throw new Error("environment required: PORT");

const server = new Server(parseInt(PORT));
const rabbitMQConnection = new RabbitMqConnection(RABBITMQ_URI);
const redisConnection = new RedisConnection(REDIS_URI);

application.Server = server;
application.RabbitMQConnection = rabbitMQConnection;
application.RedisConnection = redisConnection;

process.on("unhandledRejection", CloseProcessCallback(application));
process.on("uncaughtException", CloseProcessCallback(application));
process.on("SIGINT", CloseProcessCallback(application));
process.on("SIGTERM", CloseProcessCallback(application));

const SWAGGER_USER = process.env.SWAGGER_USER;
const SWAGGER_PASS = process.env.SWAGGER_PASS;

import swagger from "./infrastructure/http/middlewares/swagger/swagger.middleware";
import { swaggerAuth } from "./infrastructure/http/middlewares/swagger/swagger.auth";

if (SWAGGER_USER && SWAGGER_PASS) {
    logger.info("Swagger server started");
    application.Server.application.use(
        "/docs",
        swaggerAuth(SWAGGER_USER, SWAGGER_PASS),
        swagger.serve,
        swagger.setup
    );
}

application.Server.application.use("/api/v1", indexRouter);
application.Server.application.use(NotFoundController);

application.start().catch(CloseProcessCallback(application));
