import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersController } from './users.controller';

import { GetUsersHandler } from './all/app/get-users.handler'
import { GetUserByIdHandler } from './id/app/get-user-by-id.handler';

import { CreateUserCommand } from './ create/app/create-user.command';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../shared/infrastructure/entities/user.entity';

const queryHandlers = [GetUsersHandler, GetUserByIdHandler];

const commandHandlers = [CreateUserCommand]

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [...queryHandlers, ...commandHandlers],
})
export class UsersModule {}