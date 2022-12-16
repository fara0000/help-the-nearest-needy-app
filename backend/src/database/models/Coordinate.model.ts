import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coordinate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'float' })
  x: number;

  @Column({ nullable: false, type: 'float' })
  y: number;
}
