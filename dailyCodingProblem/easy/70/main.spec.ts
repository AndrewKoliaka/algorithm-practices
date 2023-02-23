import { getPerfectNumber } from './main';

describe('getPerfectNumber', () => {
    it('should return the perfect number', () => {
        expect(getPerfectNumber(1)).toBe(19);
        expect(getPerfectNumber(2)).toBe(28);
        expect(getPerfectNumber(123)).toBe(1234);
    });
});
