import LargestPerimeterTriangle from './main';

describe('LargestPerimeterTriangle', () => {
    it('should return triangle perimeter', () => {
        const ref = new LargestPerimeterTriangle();

        expect(ref.getPerimeter([2, 3, 2])).toBe(7);
        expect(ref.getPerimeter([1, 2, 1])).toBe(0);
        expect(ref.getPerimeter([1, 2])).toBe(0);
    });
});
