import { Controller, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetUsersQuery } from '../application/get-users.query';

@Controller('users')
export class GetUserController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('all')
  findAll() {
    return this.queryBus.execute(new GetUsersQuery());
  }
}