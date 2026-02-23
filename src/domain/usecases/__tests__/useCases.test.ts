import { User } from '@domain/entities/User';
import { GetUserByIdUseCase } from '@domain/usecases/GetUserByIdUseCase';
import { GetUsersUseCase } from '@domain/usecases/GetUsersUseCase';

describe('UseCases', () => {
    const mockUsers: User[] = [
        {
            id: '1',
            nome: 'John Doe',
            email: 'john@example.com',
            telefone: '1234567890',
        },
        {
            id: '2',
            nome: 'Jane Doe',
            email: 'jane@example.com',
            telefone: '0987654321',
        },
    ];

    describe('GetUserByIdUseCase', () => {
        it('should return user when found', async () => {
            const mockRepository = {
                getUsers: jest.fn().mockResolvedValue(mockUsers),
            };

            const useCase = new GetUserByIdUseCase(mockRepository);
            const result = await useCase.execute('1');

            expect(result).toEqual(mockUsers[0]);
            expect(mockRepository.getUsers).toHaveBeenCalledTimes(1);
        });

        it('should return null when user not found', async () => {
            const mockRepository = {
                getUsers: jest.fn().mockResolvedValue(mockUsers),
            };

            const useCase = new GetUserByIdUseCase(mockRepository);
            const result = await useCase.execute('999');

            expect(result).toBeNull();
            expect(mockRepository.getUsers).toHaveBeenCalledTimes(1);
        });

        it('should handle empty users array', async () => {
            const mockRepository = {
                getUsers: jest.fn().mockResolvedValue([]),
            };

            const useCase = new GetUserByIdUseCase(mockRepository);
            const result = await useCase.execute('1');

            expect(result).toBeNull();
        });
    });

    describe('GetUsersUseCase', () => {
        it('should return all users', async () => {
            const mockRepository = {
                getUsers: jest.fn().mockResolvedValue(mockUsers),
            };

            const useCase = new GetUsersUseCase(mockRepository);
            const result = await useCase.execute();

            expect(result).toEqual(mockUsers);
            expect(mockRepository.getUsers).toHaveBeenCalledTimes(1);
        });

        it('should return empty array when no users', async () => {
            const mockRepository = {
                getUsers: jest.fn().mockResolvedValue([]),
            };

            const useCase = new GetUsersUseCase(mockRepository);
            const result = await useCase.execute();

            expect(result).toEqual([]);
            expect(mockRepository.getUsers).toHaveBeenCalledTimes(1);
        });

        it('should handle repository errors', async () => {
            const mockRepository = {
                getUsers: jest.fn().mockRejectedValue(new Error('Network error')),
            };

            const useCase = new GetUsersUseCase(mockRepository);

            await expect(useCase.execute()).rejects.toThrow('Network error');
        });
    });
});
