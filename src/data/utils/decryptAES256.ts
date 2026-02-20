import { subtle, CryptoKey } from 'react-native-quick-crypto';

export async function decryptAES256GCM(
    encrypted: Uint8Array,
    key: CryptoKey,
    iv: Uint8Array,
): Promise<string> {
    const decryptedBuffer = await subtle.decrypt(
        {
            name: 'AES-GCM',
            iv,
            tagLength: 128,
        },
        key,
        encrypted,
    );

    return new TextDecoder().decode(decryptedBuffer);
}
