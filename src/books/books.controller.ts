import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Book } from './interfaces/book.dto';

@Controller('books')
export class BooksController {
  @Get()
  getBooks() {
      return 'The best seller books';
  }

  @Post()
  create(@Body() book: Book) {
    return book;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Book with ID ${id} found`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `Updated book ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Deleted book ${id}`;
  }
}
