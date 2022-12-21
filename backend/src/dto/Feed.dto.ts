import { Status } from '../types';
import { Location } from '../database/models';
import { User } from '../database/models';

export class FeedDto {
  title: string;
  description: string;
  status: Status;
  location: Location;
  user: User;
}
