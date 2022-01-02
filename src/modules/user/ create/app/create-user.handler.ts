import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand } from "./create-user.command";

@CommandHandler(CreateUserCommand)
export class KillDragonHandler implements ICommandHandler<CreateUserCommand> {

  async execute(command: CreateUserCommand) {
    const { id, name } = command;
    // TODO: create user
    // await this.repository.create(id, name);
  }
}