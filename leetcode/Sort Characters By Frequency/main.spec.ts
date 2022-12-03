import FrequencySort from './main';

describe('Sort characters by frequency', () => {
    it('should sort', () => {
        const ref = new FrequencySort();

        expect(ref.sort('tree')).toBe('eetr');
        expect(ref.sort('cccaaa')).toBe('cccaaa');
        expect(ref.sort('Aabb')).toBe('bbAa');
    });
});
