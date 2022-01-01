import { Controller, Get, Body } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetUsersQuery } from './get-users/app/get-users.query';
import { GetUserByIdQuery } from './id/app/get-user-by-id.query';

@Controller('users')
export class UsersController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('all')
  findAll() {
    return this.queryBus.execute(new GetUsersQuery());
  }

  @Get('id')
  findById(@Body() dto: { id : number }) {
    return this.queryBus.execute(new GetUserByIdQuery(dto.id));
  }
}