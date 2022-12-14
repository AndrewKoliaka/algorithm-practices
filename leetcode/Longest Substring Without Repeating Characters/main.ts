/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * Constraints:
 * 0 <= s.length <= 5 * 104
 * s consists of English letters, digits, symbols and spaces.
 */

export default class LongestSubstringWithoutRepeatingCharacters {
    getLength(s: string): number {
        let longestStr = '';
        let tempStr = '';
        let i = 0;

        while (i < s.length) {
            if (!tempStr.includes(s[i]) && i !== s.length - 1) {
                tempStr += s[i];
                continue;
            }

            if (tempStr.length > longestStr.length) {
                longestStr = tempStr;
                tempStr = s[i];
            }

            i++;
        }

        return longestStr.length;
    }
}
