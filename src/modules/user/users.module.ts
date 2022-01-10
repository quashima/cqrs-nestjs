import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersController } from './users.controller';

import { GetUsersHandler } from './api/all/app/get-users.handler'
import { GetUserByIdHandler } from './api/id/app/get-user-by-id.handler';

import { CreateUserHandler } from './api/create/app/create-user.handler';
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