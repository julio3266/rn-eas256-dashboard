import { subtle, CryptoKey } from 'react-native-quick-crypto';

export async function importKey(rawKey: Uint8Array): Promise<CryptoKey> {
    return await subtle.importKey('raw', rawKey, { name: 'AES-GCM' }, false, ['decrypt']);
}
export function base64ToUint8Array(base64: string): Uint8Array {
    const binaryString = global.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes;
}

export function hexToUint8Array(hex: string): Uint8Array {
    const clean = hex.replace(/[^0-9a-fA-F]/g, '');
    if (clean.length % 2 !== 0) {
        throw new Error('Invalid hex string');
    }
    const len = clean.length / 2;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = parseInt(clean.substr(i * 2, 2), 16);
    }
    return bytes;
}
