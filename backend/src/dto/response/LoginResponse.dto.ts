import { Role } from '../../types';
import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ example: '1' })
  id: number;

  @ApiProperty({ example: '$2b$10$tz92cpDCBns2paLsuCGg3OMgZWa1ITpZ1rM/KG' })
  token: string;

  @ApiProperty({ example: 'ADMIN' })
  role: Role;
}
