import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Length, Max, Min } from 'class-validator';
import { Role } from '../../types';
import { Location } from './Location.model';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  @Length(5, 50)
  login: string;

  @Column({ nullable: true })
  @Length(5, 50)
  firstName: string;

  @Column({ nullable: true })
  @Length(5, 50)
  lastName: string;

  @Column({ unique: true, nullable: false })
  @Length(5, 50)
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: 5, type: 'float' })
  @Min(1)
  @Max(5)
  rating: number;

  @Column()
  @Column({ nullable: true })
  temp_token: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.VOLUNTEER,
    nullable: false,
  })
  role: Role;

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;
}
