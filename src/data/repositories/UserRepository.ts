import { RemoteUserDataSource, RawEncryptedPayload } from '@data/sources/RemoteUserDataSource';
import { hexToUint8Array, importKey } from '@data/utils/cryptoHelpers';
import { decryptAES256GCM } from '@data/utils/decryptAES256';
import { User } from '@domain/entities/User';
import { IUserRepository } from '@domain/repositories/UserRepository';

export class UserRepository implements IUserRepository {
    constructor(private remote: RemoteUserDataSource) {}

    async getUsers(): Promise<User[]> {
        const payload: RawEncryptedPayload = await this.remote.fetchUsers();
        console.log('raw payload', {
            iv: payload.encrypted.iv,
            encryptedLen: payload.encrypted.encrypted.length,
            authTag: payload.encrypted.authTag,
        });

        const cipherHex = payload.encrypted.encrypted + payload.encrypted.authTag;
        const encryptedBytes = hexToUint8Array(cipherHex);
        const ivBytes = hexToUint8Array(payload.encrypted.iv);
        const keyBytes = hexToUint8Array(payload.secretKey);

        const cryptoKey = await importKey(keyBytes);

        const decrypted = await decryptAES256GCM(encryptedBytes, cryptoKey, ivBytes);

        return JSON.parse(decrypted);
    }
}
