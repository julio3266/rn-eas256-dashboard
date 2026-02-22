import { mapUserApiToEntity } from '@data/mappers/UserMapper';
import { UserApiModel } from '@data/models/userApiModel';
import { RemoteUserDataSource } from '@data/sources/RemoteUserDataSource';
import { hexToUint8Array, importKey } from '@data/utils/cryptoHelpers';
import { decryptAES256GCM } from '@data/utils/decryptAES256';
import { User } from '@domain/entities/User';
import { IUserRepository } from '@domain/repositories/UserRepository';

export class UserRepository implements IUserRepository {
    constructor(private remote: RemoteUserDataSource) {}

    async getUsers(): Promise<User[]> {
        try {
            const payload = await this.remote.fetchUsers();
            const cipherHex = payload.encrypted.encrypted + payload.encrypted.authTag;

            const encryptedBytes = hexToUint8Array(cipherHex);
            const ivBytes = hexToUint8Array(payload.encrypted.iv);
            const keyBytes = hexToUint8Array(payload.secretKey);

            const cryptoKey = await importKey(keyBytes);
            const decrypted = await decryptAES256GCM(encryptedBytes, cryptoKey, ivBytes);
            const parsed: UserApiModel[] = JSON.parse(decrypted);

            return parsed.map(mapUserApiToEntity);
        } catch (error) {
            throw new Error('Failed to load and decrypt users', {
                cause: error as Error,
            });
        }
    }
}
