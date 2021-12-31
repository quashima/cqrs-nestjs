import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetUsersQuery } from './get-users/app/get-users.query';

@Controller('users')
export class UsersController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('all')
  findAll() {
    return this.queryBus.execute(new GetUsersQuery());
  }
}
