import {
  HttpException,
  HttpStatus,
  Injectable, Logger,
  NotFoundException,
} from '@nestjs/common';
import { RegisterUserDto } from '../../dto/request';
import { LoginUserDto } from '../../dto/request';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/models';
import { Repository } from 'typeorm';
import { encryptPassword } from '../../helpers';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    return 'Got Login';
  }

  async register(registerUserDto: RegisterUserDto) {
    const user = this.getUserByLogin(registerUserDto.login);

    console.log(typeof user);

    if (user) {
      throw new HttpException(
        'Пользователь с таким именем уже существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = encryptPassword(registerUserDto.password);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const newUser = this.userRepository.create({
      ...registerUserDto,
      password: hashPassword,
    });

    await this.userRepository.save(newUser);

    return newUser;
  }

  async getUserById(id: number) {
    return 'Got user by id';
  }

  async getUserByLogin(login: string) {
    const user = await this.userRepository.findOne({ where: { login } });
    if (!user) throw new NotFoundException('Пользователь не найден');
    return user;
  }

  async generateToken(user: User) {
    const payload = { id: user.id, login: user.login, role: user.role };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
