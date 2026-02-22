import { HttpClient, HttpResponse } from './HttpClient';

export class FetchHttpClient implements HttpClient {
    async get<T>(url: string): Promise<HttpResponse<T>> {
        const response = await fetch(url);

        const data = (await response.json()) as T;

        return {
            status: response.status,
            data,
        };
    }
}
