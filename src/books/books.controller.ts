import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BookDto } from './interfaces/book.dto';
import { BookRepository } from './books.repository';

@Controller('books')
@UseGuards(AuthGuard('jwt'))
export class BookController {
  constructor(
    @InjectRepository(BookRepository) private readonly bookRepository: BookRepository,
    private readonly bookService: BookService,
  ) {}

  @Post()
  create(@Body() bookDto: BookDto) {
    return this.bookService.createBook(bookDto);
  }

  @Get()
  findAll() {
    return this.bookRepository.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookRepository.findOneBook(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() bookDto: BookDto) {
    return this.bookRepository.updateBook(id, bookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookRepository.removeBook(id);
  }
}