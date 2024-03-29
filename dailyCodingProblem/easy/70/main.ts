/**
 * This problem was asked by Microsoft.
 * A number is considered perfect if its digits sum up to exactly 10.
 * Given a positive integer n, return the n-th perfect number.
 * For example, given 1, you should return 19. Given 2, you should return 28.
 */

export const getPerfectNumber = (n: number) => {
    const sum = `${n}`.split('').reduce((acc, item) => {
        acc += Number.parseInt(item);

        return acc;
    }, 0);

    return Number.parseInt(`${n}${10 - sum}`);
}
