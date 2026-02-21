import { API_URL } from '@config';

export interface RawEncryptedPayload {
    encrypted: {
        iv: string;
        authTag: string;
        encrypted: string;
    };
    secretKey: string;
    algorithm: string;
}

export class RemoteUserDataSource {
    private API_URL = API_URL;

    async fetchUsers(): Promise<RawEncryptedPayload> {
        const response = await fetch(`${this.API_URL}/webhook/data-5dYbrVSlMVJxfmco`);

        if (!response.ok) {
            throw new Error('Network error');
        }

        const body = await response.json();
        if (!body.success) {
            throw new Error('Server returned unsuccessful response');
        }

        return body.data as RawEncryptedPayload;
    }
}
