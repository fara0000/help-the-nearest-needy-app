import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('/posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAllPosts(): Promise<string> {
    return this.postService.getAllPosts();
  }
}
