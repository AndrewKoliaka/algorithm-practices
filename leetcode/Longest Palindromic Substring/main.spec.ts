import LongestPalindromicSubstring from './main';

describe('Longest palindromic substring', () => {
    it('should return longest string length', () => {
        const ref = new LongestPalindromicSubstring();

        expect(ref.getMaxString('cbbd')).toBe('bb');
        expect(ref.getMaxString('babad')).toBe('bab');
        expect(ref.getMaxString('abcdbarabght')).toBe('barab');
    });
});
