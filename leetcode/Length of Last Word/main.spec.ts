import LengthOfLastWord from './main';

describe('LengthOfLastWord', () => {
    it('should return length of last word', () => {
        const ref = new LengthOfLastWord();

        expect(ref.getLengthOfLast('')).toBe(0);
        expect(ref.getLengthOfLast('Hello World')).toBe(5);
        expect(ref.getLengthOfLast('   fly me   to   the moon  d')).toBe(4);
        expect(ref.getLengthOfLast('luffy is still joyboy')).toBe(6);
    });
});
