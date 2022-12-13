import { Logger } from "@nestjs/common";

export const logEnvs = () => {
    const logger = new Logger("ENV");

    logger.log(`POSTGRES ${process.env.POSTGRES}`);
    logger.log(`PORT_NEST ${process.env.PORT_NEST}`);
    logger.log(`HOST_NEST ${process.env.HOST_NEST}`);
};
