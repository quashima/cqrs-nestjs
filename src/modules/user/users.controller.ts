import { Controller, Get, Body, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './ create/app/create-user.command';
import { GetUsersQuery } from './all/app/get-users.query';
import { GetUserByIdQuery } from './id/app/get-user-by-id.query';

@Controller('users')
export class UsersController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('all')
  findAll() {
    return this.queryBus.execute(new GetUsersQuery());
  }

  @Get('id')
  findOneById(@Body() dto: { id : number }) {
    return this.queryBus.execute(new GetUserByIdQuery(dto.id));
  }

  @Post('create')
  create(@Body() dto: { id : number, name : string }) {
    return this.queryBus.execute(new CreateUserCommand(dto.id, dto.name));
  }
}