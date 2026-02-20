import { RemoteUserDataSource } from '@data/sources/RemoteUserDataSource';
import { base64ToUint8Array, importKey } from '@data/utils/cryptoHelpers';
import { decryptAES256GCM } from '@data/utils/decryptAES256';
import { User } from '@domain/entities/User';
import { IUserRepository } from '@domain/repositories/UserRepository';

export class UserRepository implements IUserRepository {
    constructor(private remote: RemoteUserDataSource) {}

    async getUsers(): Promise<User[]> {
        const encrypted = await this.remote.fetchUsers();

        const encryptedBytes = base64ToUint8Array(encrypted.data);
        const ivBytes = base64ToUint8Array(encrypted.iv);
        const keyBytes = base64ToUint8Array(encrypted.key);

        const cryptoKey = await importKey(keyBytes);

        const decrypted = await decryptAES256GCM(encryptedBytes, cryptoKey, ivBytes);

        return JSON.parse(decrypted);
    }
}
