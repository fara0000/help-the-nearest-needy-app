import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  MONGO_DB,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_PASSWORD,
  MONGO_USERNAME,
} from '.';

// mongodb+srv://fara0000:<password>@cluster0.7npsigu.mongodb.net/test

export const dbConnectionDev: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: MONGO_HOST,
  port: Number(MONGO_PORT),
  database: MONGO_DB,
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  synchronize: false,
  useUnifiedTopology: true,
  entities: [], //Object.values(models)
  autoLoadEntities: true,
  logging: 'all',
};

export const dbConnectionProd: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: 'mongodb+srv://fara0000:fara0000@cluster0.7npsigu.mongodb.net/test',
  ssl: true,
};
