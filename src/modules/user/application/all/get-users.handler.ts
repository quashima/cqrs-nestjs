import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../shared/infrastructure/entities/user.entity';
import { Repository } from 'typeorm';
import { GetUsersQuery } from './get-users.query';
import { UserModel } from '../../domain/user.model';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private userModel: UserModel
  ) {}

  async execute(query: GetUsersQuery) {
    const users = await this.usersRepository.find();
    return users.map((user) => {
      return this.userModel.create(user)
    })
  }
}
