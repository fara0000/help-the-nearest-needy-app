import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterUserDto } from '../../dto/request';
import { UserService } from './user.service';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiProperty,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { User } from '../../database/models';

@Controller('/users')
@ApiTags('User')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/login')
  @ApiProperty({ name: 'User' })
  @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  async login(): Promise<string> {
    return this.userService.login();
  }

  @Post('/register')
  async register(@Body() registerUserDto: RegisterUserDto): Promise<string> {
    return this.userService.register(registerUserDto);
  }

  @Get(':id')
  async getUserById(@Param('id') id): Promise<string> {
    return this.userService.getUserById(id);
  }
}
