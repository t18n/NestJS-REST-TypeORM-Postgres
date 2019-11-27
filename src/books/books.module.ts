import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { BookRepository } from './books.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Book, BookRepository])],
  controllers: [BooksController],
})
export class BooksModule {}
