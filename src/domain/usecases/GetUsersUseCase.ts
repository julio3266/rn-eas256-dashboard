import { User } from '@domain/entities/User';
import { IUserRepository } from '@domain/repositories/UserRepository';

export class GetUsersUseCase {
    constructor(private repository: IUserRepository) {}

    async execute(): Promise<User[]> {
        return this.repository.getUsers();
    }
}
