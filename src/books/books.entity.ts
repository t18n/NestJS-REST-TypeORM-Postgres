import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50})
   title: string;

   @Column()
   price: number;

   @Column({length: 100, nullable: true})
   genre: string;
}
