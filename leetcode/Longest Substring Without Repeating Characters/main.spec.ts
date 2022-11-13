import LongestSubstringWithoutRepeatingCharacters from './main';

describe('LongestSubstringWithoutRepeatingCharacters', () => {
    it('should return the longest string', () => {
        const ref = new LongestSubstringWithoutRepeatingCharacters();

        expect(ref.getLength('abcabcbb')).toBe(3);
        expect(ref.getLength('bbbbb')).toBe(1);
        expect(ref.getLength('pwwkew')).toBe(3);
    });
});
