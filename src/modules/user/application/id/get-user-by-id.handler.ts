import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../shared/infrastructure/entities/user.entity';
import { Repository } from 'typeorm';
import { GetUserByIdQuery } from './get-user-by-id.query';

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}
    
  async execute(query: GetUserByIdQuery) {
    const { id } = query;
    return this.userRepository.find({ where: { id: id } });
  }
}