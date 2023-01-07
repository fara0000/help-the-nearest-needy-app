import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Length, Max, Min } from 'class-validator';
import { Role } from '../../types';
import { Coordinate } from './Coordinate.model';

@Entity('Location')
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  @Length(5, 50)
  name: string;

  @Column({ nullable: false, default: 'City' })
  type: string;

  @OneToOne(() => Coordinate)
  coordinates: Coordinate;

  @Column({ default: 1, type: 'float', nullable: true })
  @Min(1.0)
  area: number;

  @Column({ nullable: true })
  @Length(5, 50)
  description: string;
}
