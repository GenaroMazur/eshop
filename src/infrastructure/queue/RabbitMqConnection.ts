import { Channel, ChannelModel, connect } from "amqplib";
import ApplicationModule from "../../domain/interfaces/ApplicationModule";
import { logger } from "../../utils/logger";

export default class RabbitMqConnection implements ApplicationModule {
    private readonly uri: string;
    public connection: ChannelModel | null = null;
    public channel: Channel | null = null;

    constructor(uri: string) {
        this.uri = uri;
    }

    public async start() {
        logger.debug("Starting rabbitMQ connection...");
        this.connection = await connect(this.uri, {
            heartbeat: 60, // Intervalo de latido en segundos
            clientProperties: {
                connection_name: "template-app",
                product: "template-app",
                version: "1.0.0",
            },
        });

        this.channel = await this.connection.createChannel();

        logger.info(`Broker de mensajería- RabbitMq: online 🟢`);
    }

    public async stop() {
        logger.debug("Stopping rabbitMQ connection...");
        await this.connection?.close();

        logger.info(`Base de datos- RabbitMq: offline 🔴`);
    }
}
