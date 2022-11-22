/**
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Constraints:
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 */

export default class LongestPalindromicSubstring {
    private isPalindrome(str: string): boolean {
        return str === str.split('').reverse().join('');
    }

    getMaxString(s: string): string {
        let maxStr = '';

        for (let i = 0; i < s.length - 1; i++) {
            let tempStr = s[i];

            for (let j = i + 1; j < s.length; j++) {
                tempStr += s[j];

                if (this.isPalindrome(tempStr) && tempStr.length > maxStr.length) {
                    maxStr = tempStr;
                }
            }
        }

        return maxStr;
    }
}
