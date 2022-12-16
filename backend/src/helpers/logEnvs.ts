import { Logger } from '@nestjs/common';

export const logEnvs = () => {
  const logger = new Logger('ENV');

  logger.log(`MONGO_DB ${process.env.MONGO_DB}`);
  logger.log(`PORT_NEST ${process.env.PORT_NEST}`);
  logger.log(`HOST_NEST ${process.env.HOST_NEST}`);
};
