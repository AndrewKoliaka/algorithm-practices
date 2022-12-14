import getIntegerProduct from './main';

describe('2', () => {
    it('should return return correct array', () => {
        expect(getIntegerProduct([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
        expect(getIntegerProduct([3, 2, 1])).toEqual([2, 3, 6]);
    });
});
