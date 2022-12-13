/**
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17
 */

export default function hasSum(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }

            if (nums[i] + nums[j] === k) {
                return true;
            }
        }
    }

    return false;
}
