import TwoSum from './main';

describe('TwoSum', () => {
    it('should return array with indices', () => {
        const ref = new TwoSum();

        expect(ref.getIndices([3, 3], 6)).toEqual([0, 1]);
        expect(ref.getIndices([3, 2, 4], 6)).toEqual([1, 2]);
        expect(ref.getIndices([2,7,11,15], 9)).toEqual([0, 1]);
        expect(ref.getIndices([5, 10, 6], 100)).toEqual([]);
    });
});
