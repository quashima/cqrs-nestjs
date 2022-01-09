import { Controller, Get, Body, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './api/create/app/create-user.command';
import { GetUsersQuery } from './api/all/app/get-users.query';
import { GetUserByIdQuery } from './api/id/app/get-user-by-id.query';

@Controller('users')
export class UsersController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

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
    return this.commandBus.execute(new CreateUserCommand(dto.id, dto.name));
  }
}