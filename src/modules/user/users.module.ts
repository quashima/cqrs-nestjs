import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersController } from './interface-adapter/users.controller';

import { GetUsersHandler } from './application/all/get-users.handler'
import { GetUserByIdHandler } from './application/id/get-user-by-id.handler';

import { CreateUserHandler } from './application/create/create-user.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../shared/infrastructure/entities/user.entity';

import { UserModel } from './domain/user.model';

const queryHandlers = [GetUsersHandler, GetUserByIdHandler];

const commandHandlers = [CreateUserHandler]

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [...queryHandlers, ...commandHandlers, UserModel],
})
export class UsersModule {}