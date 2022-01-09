import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../../shared/infrastructure/entities/user.entity';
import { Repository } from 'typeorm';
import { GetUsersQuery } from './get-users.query';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async execute(query: GetUsersQuery) {
    return this.usersRepository.find();
  }
}
