import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { UserController } from './presentation/users.controller';

import { GetUserByIdHandler } from './application/id/get-user-by-id.handler';
import { GetUserHandler } from './application/all/get-users.handler';

import { CreateUserHandler } from './application/create/create-user.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../shared/infrastructure/entities/user.entity';

import { UserModel } from './domain/user.model';

const controllers = [UserController]

const queryHandlers = [GetUserHandler, GetUserByIdHandler];

const commandHandlers = [CreateUserHandler]

const models = [UserModel]

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User])],
  controllers: [...controllers],
  providers: [
    ...models,
    ...queryHandlers,
    ...commandHandlers
  ],
})
export class UsersModule {}