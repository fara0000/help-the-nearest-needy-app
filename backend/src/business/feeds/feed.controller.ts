import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FeedService } from './feed.service';
import { Feed } from '../../database/models';
import {
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { FeedDto } from '../../dto';

@Controller('/post')
@ApiTags('Feed')
export class FeedController {
  constructor(private postService: FeedService) {}

  @Get()
  async getAllPosts(): Promise<Array<Feed>> {
    return this.postService.getAllPosts();
  }

  @Post()
  @ApiOkResponse({ description: 'Successfully added' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  async createPost(@Body() feed: FeedDto): Promise<Feed> {
    console.log(feed);
    return this.postService.createPost(feed);
  }

  @Get(':id')
  async getPostById(@Param('id') id): Promise<Feed> {
    return this.postService.getPostById(id);
  }
}
