import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: 'ivan123' })
  login: string;

  @ApiProperty({ example: 'ivan123' })
  password: string;
}
