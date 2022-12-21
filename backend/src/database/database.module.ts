import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as models from '../database/models';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Coordinate, Feed, Location, User } from '../database/models';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        entities: [Coordinate, Feed, Location, User],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DataBaseModule {}
