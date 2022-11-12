import SearchInsertPosition from './main';

describe('SearchInsertPosition', () => {
    it('should return correct index', () => {
        const ref = new SearchInsertPosition();

        expect(ref.getIndex([1,3,5,6], 5)).toBe(2);
        expect(ref.getIndex([1,3,5,6], 2)).toBe(1);
        expect(ref.getIndex([1,3,5,6], 7)).toBe(4);
    });
});
