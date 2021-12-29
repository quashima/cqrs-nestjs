import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { GetUsersService } from './get-users/get-user.service';

@Module({
  controllers: [UsersController],
  providers: [GetUsersService],
})
export class UsersModule {}