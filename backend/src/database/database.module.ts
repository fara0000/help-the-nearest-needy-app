import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as models from '../database/models';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Coordinate, Feed, Location, User } from '../database/models';
import * as fs from 'fs';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [Coordinate, Feed, Location, User],
        synchronize: true,
        ssl: {
          ca: fs.readFileSync(process.env.SSL_CERT).toString(),
        },
      }),

      // imports: [ConfigModule],
      // useFactory: (configService: ConfigService) => ({
      //   type: 'postgres',
      //   host: configService.get('DB_HOST'),
      //   port: +configService.get<number>('DB_PORT'),
      //   username: configService.get('DB_USER'),
      //   password: configService.get('DB_PASS'),
      //   database: configService.get('DB_NAME'),
      //   entities: [Coordinate, Feed, Location, User],
      //   synchronize: true,
      // }),
      // inject: [ConfigService],
    }),
  ],
})
export class DataBaseModule {}
