/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * Example 1:
 * Input: x = 123
 * Output: 321
 *
 * Example 2:
 * Input: x = -123
 * Output: -321
 *
 * Example 3:
 * Input: x = 120
 * Output: 21
 *
 * Constraints:
 * -231 <= x <= 231 - 1
 */

export default class ReverseInteger {
    reverse(x: number): number {
        let reversedNumber = this.reverseNumber(x);

        if (x < 0) {
            reversedNumber *= -1;
        }

        return this.isNumberValid(reversedNumber) ? reversedNumber : 0;
    }

    private isNumberValid(x: number): boolean {
        return x > Math.pow(-2, 31) && x < Math.pow(2, 31) - 1;
    }

    private reverseNumber(x: number): number {
        return parseInt(Math.abs(x).toString().split('').reverse().join(''));
    }
}
