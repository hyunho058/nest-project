import { Controller, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return 'all';
  }

  @Get(':id')
  getById() {
    return 'user';
  }

  @Post()
  create() {
    return 'create';
  }

  @Put(':id')
  update() {
    return 'update';
  }
}
