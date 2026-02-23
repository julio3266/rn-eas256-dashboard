jest.mock('react-native-quick-crypto', () => ({
    subtle: {
        importKey: jest.fn(),
        decrypt: jest.fn(),
    },
    CryptoKey: class CryptoKey {},
}));

global.fetch = jest.fn();

global.TextDecoder = class TextDecoder {
    readonly encoding: string;
    readonly fatal: boolean;
    readonly ignoreBOM: boolean;

    constructor(label: string = 'utf-8', options?: TextDecoderOptions) {
        this.encoding = label;
        this.fatal = options?.fatal ?? false;
        this.ignoreBOM = options?.ignoreBOM ?? false;
    }

    decode(buffer: ArrayBuffer): string {
        const bytes = new Uint8Array(buffer);
        let result = '';
        for (let i = 0; i < bytes.length; i++) {
            result += String.fromCharCode(bytes[i]);
        }
        return result;
    }
};

global.atob = (str: string) => Buffer.from(str, 'base64').toString('binary');
global.btoa = (str: string) => Buffer.from(str, 'binary').toString('base64');
