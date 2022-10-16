import RomanToInteger from './main';

describe('RomanToInteger', () => {
    it('should return correct integer number from roman string', () => {
        const ref = new RomanToInteger();

        expect(ref.getInteger('III')).toBe(3);
        expect(ref.getInteger('LVIII')).toBe(58);
        expect(ref.getInteger('MCMXCIV')).toBe(1994);
    });
});
