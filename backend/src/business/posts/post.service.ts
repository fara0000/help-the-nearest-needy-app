import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
    async getAllPosts(): Promise<string> {
        return 'ура Posts';
    }
}