import { EntityRepository, Repository } from 'typeorm';
import { Feed } from '../models';
import { FeedDto } from '../../dto';

// @Injectable()
// export class FeedRepository {
//   constructor(
//     @InjectRepository(Feed)
//     private readonly feedRepository: MongoRepository<Feed>,
//   ) {}
//
//   async getFeed(feedId: number): Promise<Feed> {
//     return await this.feedRepository.findOneBy({ feedId });
//   }
//
//   async createPost(feedDto: FeedDto): Promise<Feed> {
//     return this.feedRepository.create(feedDto);
//   }
//
//   async getAllPosts(): Promise<Array<Feed>> {
//     return this.feedRepository.find();
//   }
// }

@EntityRepository(Feed)
export class FeedRepository extends Repository<Feed> {
  public async getAllPosts(): Promise<Feed[]> {
    return this.find();
  }

  public async createPost(feedDto: FeedDto): Promise<Feed> {
    return this.save(feedDto);
  }

  public async getPostById(id: number): Promise<Feed> {
    return this.findOne(id);
  }
}
