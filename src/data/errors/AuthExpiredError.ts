export class AuthExpiredError extends Error {
    constructor(message = 'Token expirado') {
        super(message);
        this.name = 'AuthExpiredError';
    }
}
