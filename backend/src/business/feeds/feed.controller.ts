import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { FeedService } from './feed.service';
import { Feed } from '../../database/models';
import {
  ApiBody,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { FeedDto } from '../../dto';
import { LoginUserDto } from '../../dto/request';
import { LoginResponseDto } from '../../dto/response/LoginResponse.dto';

@Controller('/post')
@ApiTags('Feed')
export class FeedController {
  constructor(private postService: FeedService) {}

  @Get()
  async getAllPosts(): Promise<Array<Feed>> {
    return this.postService.getAllPosts();
  }

  @Post()
  @ApiOperation({ summary: 'Создание поста' })
  @ApiProperty({ examples: FeedDto })
  @ApiResponse({ status: HttpStatus.OK, type: Feed })
  @ApiBody({
    type: FeedDto,
  })
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Successfully added' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  async createPost(@Body() feed: FeedDto): Promise<Feed> {
    console.log(feed);
    return this.postService.createPost(feed);
  }

  @Get(':id')
  async getPostById(@Param('id') id): Promise<Feed> {
    return this.postService.getPostById(id);
  }
}
