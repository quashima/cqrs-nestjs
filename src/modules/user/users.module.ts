import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersController } from './users.controller';
import { GetUsersHandler } from './all/app/get-users.handler'
import { GetUserByIdHandler } from './id/app/get-user-by-id.handler';

const queryHandlers = [GetUsersHandler, GetUserByIdHandler];

@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [...queryHandlers],
})
export class UsersModule {}