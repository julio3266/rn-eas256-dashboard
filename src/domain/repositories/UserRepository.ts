import { User } from '@domain/entities/User';

export interface IUserRepository {
    getUsers(): Promise<User[]>;
}
