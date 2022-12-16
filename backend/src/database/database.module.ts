import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConnectionProd } from '../config';

@Module({
  imports: [TypeOrmModule.forRoot(dbConnectionProd)],
})
export class DataBaseModule {}
