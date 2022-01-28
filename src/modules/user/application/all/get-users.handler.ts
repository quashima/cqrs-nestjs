import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../shared/infrastructure/entities/user.entity';
import { Repository } from 'typeorm';
import { GetUsersQuery } from './get-users.query';

@QueryHandler(GetUsersQuery)
export class GetUserHandler implements IQueryHandler<GetUsersQuery> {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}
    
  async execute(query: GetUsersQuery) {
    return this.userRepository.find();
  }
}