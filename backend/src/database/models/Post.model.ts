import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Length } from 'class-validator';
import { Status } from '../../types';
import { Location } from './Location.model';
import { User } from './User.model';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @Length(5, 50)
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.URGENT,
    nullable: false,
  })
  status: Status;

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}
