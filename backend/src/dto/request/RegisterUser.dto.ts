import { Role } from '../../types';
import { Location } from '../../database/models/Location.model';

export class RegisterUserDto {
  login: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  rating: number;
  temp_token: string;
  role: Role;
  location: Location;
}
