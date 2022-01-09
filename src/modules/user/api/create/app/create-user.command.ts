export class CreateUserCommand {
    constructor(
      public readonly id: number,
      public readonly name: string,
    ) {}
  }