import { Injectable, NotFoundException } from '@nestjs/common';
import { Feed } from '../../database/models';
import { FeedDto } from '../../dto';
import { FeedRepository } from '../../database/repositories';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(Feed)
    private readonly feedRepository: Repository<Feed>,
  ) {}

  async getAllPosts(): Promise<Feed[]> {
    return this.feedRepository.find();
  }

  async createPost(feedDto: FeedDto): Promise<Feed> {
    console.log(feedDto);
    return this.feedRepository.save(feedDto);
  }

  async getPostById(id: number): Promise<Feed> {
    const feed = this.feedRepository.findOne({ where: { id } });
    if (!feed) throw new NotFoundException('Пост не найден');
    return feed;
  }
}
