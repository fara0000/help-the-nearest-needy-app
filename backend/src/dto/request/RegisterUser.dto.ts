import { Role } from '../../types';
import { Location } from '../../database/models';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty({ example: 'ivan123' })
  login: string;

  @ApiProperty({ example: 'Ivan' })
  firstName: string;

  @ApiProperty({ example: 'Ivanov' })
  lastName: string;

  @ApiProperty({ example: 'ivan123@mail.ru' })
  email: string;

  @ApiProperty({ example: 'ivan123' })
  password: string;

  @ApiProperty({ example: 'NEEDY' })
  role: Role;

  @ApiProperty({ example: 'null' })
  location: Location;
}
