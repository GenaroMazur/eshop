import ApplicationModule from "../domain/interfaces/ApplicationModule";
import { logger } from "../utils/logger";
import RedisConnection from "./database/RedisConnection";
import RabbitMqConnection from "./queue/RabbitMqConnection";
import Server from "./Server";

export default class Application implements ApplicationModule {
    private static _instance: Application | null = null;
    public static get instance() {
        if (!this._instance) {
            this._instance = new Application();
        }
        return this._instance;
    }

    private constructor() {}

    public RedisConnection: null | RedisConnection = null;
    public RabbitMQConnection: null | RabbitMqConnection = null;
    public Server: null | Server = null;

    public async start(): Promise<void> {
        logger.debug("Starting application...");
        const results = await Promise.allSettled([
            this.RedisConnection?.start(),
            this.RabbitMQConnection?.start(),
        ]);

        results.some((r) => {
            if (r.status === "rejected") {
                logger.error("Error starting one of the components:", r.reason);
                throw r.reason;
            }
            return false;
        });

        await this.Server?.start();
        logger.info("Application started successfully.");
    }

    public async stop(): Promise<void> {
        logger.debug("Stopping application...");
        await this.Server?.stop();

        await Promise.allSettled([
            this.RedisConnection?.stop(),
            this.RabbitMQConnection?.stop(),
        ]);
        logger.info("Application stopped successfully.");
    }
}
