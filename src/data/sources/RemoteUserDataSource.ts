export interface EncryptedResponse {
    data: string;
    iv: string;
    key: string;
}

export class RemoteUserDataSource {
    async fetchUsers(): Promise<EncryptedResponse> {
        const response = await fetch(
            'https://n8n-apps.nlabshealth.com/webhook/data-5dYbrVSlMVJxfmco',
        );

        if (!response.ok) {
            throw new Error('Network error');
        }

        return response.json();
    }
}
