import { FetchHttpClient } from '@data/http/FetchHpttpClient';

describe('FetchHttpClient', () => {
    let httpClient: FetchHttpClient;

    beforeEach(() => {
        httpClient = new FetchHttpClient();
        jest.clearAllMocks();
    });

    describe('get', () => {
        it('should return data with status 200 on successful request', async () => {
            const mockResponse = {
                users: [{ id: '1', nome: 'John', email: 'john@example.com', telefone: '123' }],
            };

            (global.fetch as jest.Mock).mockResolvedValueOnce({
                json: jest.fn().mockResolvedValueOnce(mockResponse),
                status: 200,
            });

            const result = await httpClient.get<typeof mockResponse>('/api/users');

            expect(global.fetch).toHaveBeenCalledWith('/api/users');
            expect(result.status).toBe(200);
            expect(result.data).toEqual(mockResponse);
        });

        it('should handle 404 error', async () => {
            const mockError = { error: 'Not found' };

            (global.fetch as jest.Mock).mockResolvedValueOnce({
                json: jest.fn().mockResolvedValueOnce(mockError),
                status: 404,
            });

            const result = await httpClient.get<typeof mockError>('/api/nonexistent');

            expect(result.status).toBe(404);
            expect(result.data).toEqual(mockError);
        });

        it('should handle network error', async () => {
            (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

            await expect(httpClient.get('/api/users')).rejects.toThrow('Network error');
        });

        it('should handle 500 server error', async () => {
            const mockError = { error: 'Internal server error' };

            (global.fetch as jest.Mock).mockResolvedValueOnce({
                json: jest.fn().mockResolvedValueOnce(mockError),
                status: 500,
            });

            const result = await httpClient.get<typeof mockError>('/api/error');

            expect(result.status).toBe(500);
            expect(result.data).toEqual(mockError);
        });
    });

    describe('API Mocking Example', () => {
        it('should mock API response for testing', async () => {
            const mockUsers = [
                { id: '1', nome: 'Alice', email: 'alice@example.com', telefone: '111' },
                { id: '2', nome: 'Bob', email: 'bob@example.com', telefone: '222' },
            ];

            (global.fetch as jest.Mock).mockResolvedValueOnce({
                json: jest.fn().mockResolvedValueOnce(mockUsers),
                status: 200,
            });

            const httpClient = new FetchHttpClient();
            const result = await httpClient.get<typeof mockUsers>('/api/users');

            expect(result.data).toEqual(mockUsers);
            expect(result.status).toBe(200);
        });
    });
});
