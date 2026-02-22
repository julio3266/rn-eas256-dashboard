import { AuthExpiredError } from '@data/errors/AuthExpiredError';
import { HttpClient, HttpResponse } from '@data/http/HttpClient';

export interface RawEncryptedPayload {
    encrypted: {
        iv: string;
        authTag: string;
        encrypted: string;
    };
    secretKey: string;
    algorithm: string;
}

interface ApiResponse<T> {
    success: boolean;
    data: T;
}
export class RemoteUserDataSource {
    private readonly endpoint = `${process.env.API_URL}`;
    constructor(private httpClient: HttpClient) {}

    async fetchUsers(): Promise<RawEncryptedPayload> {
        const response: HttpResponse<ApiResponse<RawEncryptedPayload>> = await this.httpClient.get<
            ApiResponse<RawEncryptedPayload>
        >(this.endpoint);

        if (response.status === 401) {
            throw new AuthExpiredError();
        }

        if (!response.data.success) {
            throw new Error('Server returned unsuccessful response');
        }

        return response.data.data;
    }
}
