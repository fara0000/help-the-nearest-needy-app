import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { User } from '../../database/models';
import { LoginUserDto, RegisterUserDto } from '../../dto/request';

@Controller('/auth')
@ApiTags('User')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @ApiProperty({ name: 'User' })
  @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  async login(@Body() loginUserDto: LoginUserDto): Promise<string> {
    return this.userService.login(loginUserDto);
  }

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiProperty({ examples: RegisterUserDto })
  @ApiResponse({ status: 200, type: User })
  @ApiBody({
    type: RegisterUserDto,
  })
  @Post('/register')
  async register(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    return this.userService.register(registerUserDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getUserById(@Param('id') id): Promise<string> {
    return this.userService.getUserById(id);
  }
}
// @ApiResponse({status: 200, description: 'successfully logged in...', type:'application/text',
// schema:{
//     type: 'object',
//     properties: {
//         // data: {
//         //     type: 'string',
//         //     example: 'Logged in...',
//         //     description: 'This is is message from server'
//         // }
//         data: {
//             type: 'array',
//             items: {
//                 type: 'object',
//                 properties: {
//                     id: {
//                         type: 'integer',
//                         example: 0,
//                         description: 'This is iD'
//                         },
//                     name: {
//                         type: 'string',
//                         example: 'Test',
//                         description: 'This will be the name'
//                     }
//                 }
//             }

//             }
//         }
// }})
