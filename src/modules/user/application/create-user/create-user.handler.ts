import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../../shared/infrastructure/entities/user.entity';
import { CreateUserCommand } from './create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}

  async execute(command: CreateUserCommand) {
    const { id, name } = command;
    return await this.userRepository.insert({ id: id, name: name })
  }
}