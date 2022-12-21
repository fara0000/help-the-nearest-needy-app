import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedRepository } from '../../database/repositories';
import { Feed } from '../../database/models';

@Module({
  // imports: [TypeOrmModule.forFeature([FeedRepository])],
  imports: [TypeOrmModule.forFeature([Feed])],
  controllers: [FeedController],
  providers: [FeedService],
  exports: [FeedService],
})
export class FeedModule {}
