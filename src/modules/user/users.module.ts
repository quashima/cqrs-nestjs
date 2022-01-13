import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { UsersController } from './interface-adapter/users.controller';
import { GetUserController } from './get-users/interface-adapter/get-users.controller';

import { GetUsersHandler } from './get-users/application/get-users.handler';
import { GetUserByIdHandler } from './application/id/get-user-by-id.handler';

import { CreateUserHandler } from './application/create/create-user.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../shared/infrastructure/entities/user.entity';

import { UserModel } from './domain-model/user.model';

const controllers = [GetUserController]
// const queryHandlers = [GetUsersHandler, GetUserByIdHandler];
const queryHandlers = [GetUsersHandler];

// const commandHandlers = [CreateUserHandler]

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User])],
  controllers: [...controllers],
  providers: [...queryHandlers, UserModel],
})
export class UsersModule {}