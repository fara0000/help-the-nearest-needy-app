import { ConfigService } from '@nestjs/config';

export const dbConnectionDev = {
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: +configService.get<number>('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASS'),
    database: configService.get('DB_NAME'),
    entities: [],
    synchronize: true,
  }),
};

// export const dbConnectionDev: TypeOrmModuleOptions = {
//   type: 'mongodb',
//   host: '127.0.0.1',
//   port: '27017',
//   database: 'help-needy-app',
//   username: 'admin',
//   // password: 'fara0000',
//   // host: MONGO_HOST,
//   // port: Number(MONGO_PORT),
//   // database: MONGO_DB,
//   // username: MONGO_USERNAME,
//   // password: MONGO_PASSWORD,
//   synchronize: false,
//   useUnifiedTopology: true,
//   entities: Object.values(models),
//   autoLoadEntities: true,
//   logging: 'all',
// };

// export const dbConnectionProd: TypeOrmModuleOptions = {
//   type: 'mongodb',
//   url: 'mongodb+srv://fara0000:fara0000@cluster0.7npsigu.mongodb.net/test',
//   ssl: true,
//   entities: [Feed, Location, User, Coordinate],
//   autoLoadEntities: true,
//   synchronize: true,
//   useUnifiedTopology: true,
// };
