import { FetchHttpClient } from '@data/http/FetchHpttpClient';
import { UserRepository } from '@data/repositories/UserRepository';
import { RemoteUserDataSource } from '@data/sources/RemoteUserDataSource';
import { GetUserByIdUseCase } from '@domain/usecases/GetUserByIdUseCase';
import { GetUsersUseCase } from '@domain/usecases/GetUsersUseCase';

const httpClient = new FetchHttpClient();
const remoteUserDataSource = new RemoteUserDataSource(httpClient);
const userRepository = new UserRepository(remoteUserDataSource);
export const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);

export const getUsersUseCase = new GetUsersUseCase(userRepository);
