import { Controller, Get } from '@nestjs/common';
import { GetUsersService } from './get-users/get-user.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: GetUsersService) {}

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }
}
