import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterUserDto } from '../../dto/request';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/login')
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
