import { UserRepository } from '@data/repositories/UserRepository';
import { RemoteUserDataSource } from '@data/sources/RemoteUserDataSource';
import { GetUsersUseCase } from '@domain/usecases/GetUsersUseCase';

const remoteUserDataSource = new RemoteUserDataSource();
const userRepository = new UserRepository(remoteUserDataSource);

export const getUsersUseCase = new GetUsersUseCase(userRepository);
