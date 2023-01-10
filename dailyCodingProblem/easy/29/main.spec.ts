import { decode, encode } from './main';

describe('29', () => {
    it('should encode text', () => {
        expect(encode('AAAABBBCCDAA')).toBe('4A3B2C1D2A');
        expect(encode('A')).toBe('1A');
        expect(encode('ABCDEF')).toBe('1A1B1C1D1E1F');
    });

    it('should decode text', () => {
        expect(decode('4A3B2C1D2A')).toBe('AAAABBBCCDAA');
        expect(decode('1A')).toBe('A');
        expect(decode('1A1B1C1D1E1F')).toBe('ABCDEF');
    });
});
