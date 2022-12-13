import { Injectable } from '@nestjs/common';
import {RegisterUserDto} from "../../dto/request";

@Injectable()
export class UserService {
    async login() {
        return 'Got Login';
    }

    async register(registerUserDto: RegisterUserDto){
        return 'Got register'
    }

    async getUserById(id:number) {
        return 'Got user by id';
    }
}
