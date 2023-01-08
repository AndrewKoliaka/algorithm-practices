import hasSum from './main';

describe('1', () => {
    it('should return correct result', () => {
        expect(hasSum([10, 15, 3, 7], 17)).toBeTruthy();
        expect(hasSum([10, 15, 3, 5], 17)).toBeFalsy();
    });
});
