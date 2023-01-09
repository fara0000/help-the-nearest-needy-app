import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterUserDto } from '../../dto/request';
import { LoginUserDto } from '../../dto/request';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/models';
import { Repository } from 'typeorm';
import { comparePassword, encryptPassword } from '../../helpers';
import { LoginResponseDto } from '../../dto/response/LoginResponse.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<LoginResponseDto> {
    const user = await this.validateUser(loginUserDto);
    console.log(user, 'user');

    return {
      id: user.id,
      token: await this.generateToken(user),
      role: user.role,
    };
  }

  async register(registerUserDto: RegisterUserDto) {
    const { login } = registerUserDto;
    const user = await this.userRepository.findOne({ where: { login } });

    if (user) {
      throw new HttpException(
        'Пользователь с таким именем уже существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await encryptPassword(registerUserDto.password);

    console.log(hashPassword, registerUserDto.password, 'hashPasswrod');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const newUser = this.userRepository.create({
      ...registerUserDto,
      rating: 5,
      password: hashPassword,
    });

    await this.userRepository.save(newUser);

    return newUser;
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) throw new NotFoundException('Пользователь не найден');

    return user;
  }

  async getUserByLogin(login: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { login } });
    console.log(user, login, 'getUserByLogin');
    if (!user) throw new NotFoundException('Пользователь не найден');
    return user;
  }

  private async validateUser(loginUserDto: LoginUserDto) {
    const user = await this.getUserByLogin(loginUserDto.login);
    console.log(user, 'validateUser');

    const passwordEquals = await comparePassword(
      loginUserDto.password,
      user.password,
    );
    console.log(passwordEquals, 'passwordEquals');

    if (!passwordEquals || !user) {
      throw new UnauthorizedException({
        message: 'Логин или пароль неправильный, попробуйте еще раз!',
      });
    }

    return user;
  }

  async generateToken(user: User) {
    const payload = { id: user.id, login: user.login, role: user.role };

    return this.jwtService.sign(payload);
  }
}
