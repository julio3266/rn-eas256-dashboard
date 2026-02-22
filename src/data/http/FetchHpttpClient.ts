import { HttpClient } from './httpClient';

export class FetchHttpClient implements HttpClient {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar dados');
        }
        return response.json();
    }
}
