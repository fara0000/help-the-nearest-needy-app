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
  ApiForbiddenResponse,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { User } from '../../database/models';
import { LoginUserDto, RegisterUserDto } from '../../dto/request';
import { LoginResponseDto } from '../../dto/response/LoginResponse.dto';

@Controller('/auth')
@ApiTags('User')
export class UserController {
  constructor(private userService: UserService) {}

  /*
      Sign in users
  */
  @Post('/login')
  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiProperty({ examples: LoginUserDto })
  @ApiResponse({ status: HttpStatus.OK, type: LoginResponseDto })
  @ApiBody({
    type: LoginUserDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden response' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Request' })
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginUserDto: LoginUserDto): Promise<LoginResponseDto> {
    return await this.userService.login(loginUserDto);
  }

  /*
      Register users
  */
  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiProperty({ examples: RegisterUserDto })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  @ApiBody({
    type: RegisterUserDto,
  })
  @HttpCode(HttpStatus.OK)
  @Post('/register')
  async register(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    return await this.userService.register(registerUserDto);
  }

  /*
      Get user by ID
  */
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getUserById(@Param('id') id): Promise<User> {
    return await this.userService.getUserById(id);
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
