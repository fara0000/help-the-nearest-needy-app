import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coordinate {
  @PrimaryGeneratedColumn()
  id: number;
}
