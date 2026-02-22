import { User } from '@domain/entities/User';
import { IUserRepository } from '@domain/repositories/UserRepository';

export class GetUserByIdUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(id: string): Promise<User | null> {
        const users = await this.userRepository.getUsers();
        return users.find((u) => u.id === id) || null;
    }
}
