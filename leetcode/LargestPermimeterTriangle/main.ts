/**
 * Task:
 * Given an integer array nums, return the largest perimeter of a triangle with a non-zero area,
 * formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
 *
 * Example 1:
 * Input: nums = [2,1,2]
 * Output: 5
 *
 * Example 2:
 * Input: nums = [1,2,1]
 * Output: 0
 *
 * Constraints:
 * 3 <= nums.length <= 104
 * 1 <= nums[i] <= 106
 */

export default class LargestPerimeterTriangle {
    private checkTriangle(arr: number[] = []): boolean {
        if (arr.length !== 3) {
            return false;
        }

        arr.sort((a: number, b: number) => b - a);

        const hypotenuseLength: number = arr[0];

        return arr[1] + arr[2] > hypotenuseLength;
    }

    getPerimeter(arr: number[] = []): number {
        if (!this.checkTriangle(arr)) {
            return 0;
        }

        return arr.reduce((sum: number, item: number) => sum + item, 0);
    }
}
