import { Book } from './books.entity';
import { EntityRepository, Repository } from 'typeorm';
import { BookDto } from './interfaces/book.dto';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  createBook = async (bookDto: BookDto) => {
    return await this.save(bookDto);
  };

  findOneBook = async (id: string) => {
    return this.findOneOrFail(id);
  };

  updateBook = async (id: string, bookDto: BookDto) => {
    return this.save({ ...bookDto, id: Number(id) });
  };

  removeBook = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
