export interface HttpResponse<T> {
    data: T;
    status: number;
}

export interface HttpClient {
    get<T>(url: string): Promise<HttpResponse<T>>;
}
