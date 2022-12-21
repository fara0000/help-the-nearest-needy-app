import { Module } from '@nestjs/common';
import { UserModule } from './business/users';
import { FeedModule } from './business/feeds';
import { DataBaseModule } from './database';

@Module({
  imports: [UserModule, FeedModule, DataBaseModule],
})
export class AppModule {}
