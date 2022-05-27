import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const alreadyUser = this.usersRepository.findByEmail(email);

    if (alreadyUser) {
      throw new Error("Email already registered");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
