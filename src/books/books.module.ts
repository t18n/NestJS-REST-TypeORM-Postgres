import { Module } from '@nestjs/common';
import { BookRepository } from './books.repository';
import { BookController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, BookRepository])],
  controllers: [BookController],
})

export class BooksModule {}
