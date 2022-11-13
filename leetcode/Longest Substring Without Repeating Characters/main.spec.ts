import LongestSubstringWithoutRepeatingCharacters from './main';

describe('LongestSubstringWithoutRepeatingCharacters', () => {
    it('should return the longest string', () => {
        const ref = new LongestSubstringWithoutRepeatingCharacters();

        expect(ref.getString('abcabcbb')).toBe(3);
        expect(ref.getString('bbbbb')).toBe(1);
        expect(ref.getString('pwwkew')).toBe(3);
    });
});
