import Redis from "ioredis";
import ApplicationModule from "../../share/interfaces/ApplicationModule";
import { logger } from "../../utils/logger";

export default class RedisConnection implements ApplicationModule {
    public connection: Redis | null = null;
    private readonly uri: string;

    constructor(uri: string) {
        this.uri = uri;
    }

    public start() {
        logger.debug("Starting Redis connection...");
        let resolve: () => void;
        let reject: (reason?: unknown) => void;

        const promise = new Promise<void>((res, rej) => {
            resolve = res;
            reject = rej;
        });

        this.connection = new Redis(this.uri, {
            offlineQueue: true,
            retryStrategy: (times) => {
                if (times >= 10) {
                    logger.error(
                        `Fallo al conectar con Redis. Se ha intentado ${times} veces.`
                    );
                    this.stop().finally(() =>
                        reject(new Error("Fallo al conectar con Redis"))
                    );
                    return null;
                }
                const delay = times * 250;

                logger.error(
                    `Fallo al conectar con Redis. re intentando ,Intento ${times} - proximo reintento ${delay} ms.`
                );
                return delay;
            },
            reconnectOnError(err) {
                const targetError = "READONLY";
                return err.message.includes(targetError);
            },
        });
        this.connection.on("connect", () => {
            logger.info(`Base de datos- Redis: ${"online"} 🟢`);
            resolve();
        });

        return promise;
    }

    public stop() {
        logger.debug("Stopping Redis connection...");

        let resolve: () => void;
        let reject: (reason?: unknown) => void;

        const promise = new Promise<void>((res, rej) => {
            resolve = res;
            reject = rej;
        });

        if (this.connection && this.connection.status === "connect") {
            this.connection?.quit((err) => {
                if (err) {
                    logger.error(`Error al desconectar Redis: ${err}`);
                    reject(err);
                }

                logger.info(`Base de datos- Redis: ${"offline"} 🔴`);
                resolve();
            });
        } else {
            resolve!();
        }

        return promise;
    }
}
