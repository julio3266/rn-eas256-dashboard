import { base64ToUint8Array, hexToUint8Array, importKey } from '@data/utils/cryptoHelpers';

describe('cryptoHelpers', () => {
    describe('base64ToUint8Array', () => {
        it('should convert base64 string to Uint8Array', () => {
            const base64 = 'SGVsbG8=';
            const result = base64ToUint8Array(base64);

            expect(result).toBeInstanceOf(Uint8Array);
            expect(result[0]).toBe(72);
            expect(result[1]).toBe(101);
            expect(result[2]).toBe(108);
            expect(result[3]).toBe(108);
            expect(result[4]).toBe(111);
        });

        it('should handle empty base64 string', () => {
            const result = base64ToUint8Array('');
            expect(result).toBeInstanceOf(Uint8Array);
            expect(result.length).toBe(0);
        });

        it('should handle base64 with special characters', () => {
            const base64 = 'VGVzdCEjQA==';
            const result = base64ToUint8Array(base64);

            expect(result).toBeInstanceOf(Uint8Array);
        });
    });

    describe('hexToUint8Array', () => {
        it('should convert hex string to Uint8Array', () => {
            const hex = '48656c6c6f';
            const result = hexToUint8Array(hex);

            expect(result).toBeInstanceOf(Uint8Array);
            expect(result.length).toBe(5);
            expect(result[0]).toBe(0x48);
            expect(result[1]).toBe(0x65);
            expect(result[2]).toBe(0x6c);
            expect(result[3]).toBe(0x6c);
            expect(result[4]).toBe(0x6f);
        });

        it('should handle hex string with spaces', () => {
            const hex = '48 65 6c 6c 6f';
            const result = hexToUint8Array(hex);

            expect(result).toBeInstanceOf(Uint8Array);
            expect(result.length).toBe(5);
        });

        it('should handle lowercase hex string', () => {
            const hex = '48656c6c6f';
            const result = hexToUint8Array(hex);

            expect(result).toBeInstanceOf(Uint8Array);
            expect(result.length).toBe(5);
        });

        it('should handle invalid hex characters by cleaning them', () => {
            const result = hexToUint8Array('12g');
            expect(result).toBeInstanceOf(Uint8Array);
            expect(result.length).toBe(1);
        });

        it('should throw error for odd length hex string', () => {
            expect(() => hexToUint8Array('123')).toThrow('Invalid hex string');
        });

        it('should handle empty hex string', () => {
            const result = hexToUint8Array('');
            expect(result).toBeInstanceOf(Uint8Array);
            expect(result.length).toBe(0);
        });
    });

    describe('importKey', () => {
        it('should call subtle.importKey with correct parameters', async () => {
            const mockKey = {} as any;
            const { subtle } = require('react-native-quick-crypto');

            (subtle.importKey as jest.Mock).mockResolvedValue(mockKey);

            const rawKey = new Uint8Array([1, 2, 3, 4]);
            const result = await importKey(rawKey);

            expect(subtle.importKey).toHaveBeenCalledWith(
                'raw',
                rawKey,
                { name: 'AES-GCM' },
                false,
                ['decrypt'],
            );
            expect(result).toBe(mockKey);
        });
    });
});
