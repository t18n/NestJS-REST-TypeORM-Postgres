import { Book } from './books.entity';
import { EntityRepository, Repository } from 'typeorm';
import { BookDto } from './interfaces/book.dto';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  createDog = async (bookDto: BookDto) => {
    return await this.save(bookDto);
  }
}
