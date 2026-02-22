import { API_URL } from '@config';
import { HttpClient } from '@data/http/httpClient';

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
    private readonly endpoint = `${API_URL}/webhook/data-5dYbrVSlMVJxfmco`;
    constructor(private httpClient: HttpClient) {}

    async fetchUsers(): Promise<RawEncryptedPayload> {
        const body = await this.httpClient.get<ApiResponse<RawEncryptedPayload>>(this.endpoint);

        if (!body.success) {
            throw new Error('Server returned unsuccessful response');
        }

        return body.data;
    }
}
