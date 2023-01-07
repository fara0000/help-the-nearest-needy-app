import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database/models';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
})
export class UserModule {}
