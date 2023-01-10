import { Status } from '../types';
import { Location } from '../database/models';
import { User } from '../database/models';
import { ApiProperty } from '@nestjs/swagger';

export class FeedDto {
  @ApiProperty({ example: 'post123' })
  title: string;

  @ApiProperty({ example: 'new post' })
  description: string;

  @ApiProperty({ example: 'URGENT' })
  status: Status;

  @ApiProperty({ example: 'null' })
  location: Location;

  @ApiProperty({ example: '1' })
  user: User;
}
