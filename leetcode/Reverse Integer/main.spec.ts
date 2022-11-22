import ReverseInteger from './main';

describe('Reverse Integer', () => {
    it('should return correct reversed integer', () => {
        const ref = new ReverseInteger();

        expect(ref.reverse(123)).toBe(321);
        expect(ref.reverse(-123)).toBe(-321);
        expect(ref.reverse(120)).toBe(21);
        expect(ref.reverse(2147483649)).toBe(0);
    });
});
