import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersController } from './users.controller';
import { GetUsersHandler } from './get-users/app/get-users.handler'

const queryHandlers = [GetUsersHandler];

@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [...queryHandlers],
})
export class UsersModule {}