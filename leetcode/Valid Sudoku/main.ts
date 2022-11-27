/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Note:
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 *
 * Example 1:
 * Input: board =
 * [["5","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * Output: true
 *
 * Example 2:
 * Input: board =
 * [["8","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * Output: false
 *
 * Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 *
 * Constraints:
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit 1-9 or '.'.
 */

type Board = string[][];

export default class SudokuValidator {
    readonly BOARD_SIZE = 9;
    readonly BOX_SIZE = 3;
    readonly EMPTY_CELL = '.';

    validate(board: Board): boolean {
        return this.checkRowsValidity(board) &&
            this.checkColumnsValidity(board) &&
            this.checkBoxesValidity(board);
    }

    private checkRowsValidity(board: Board): boolean {
        for (let i = 0; i < this.BOARD_SIZE; i++) {
            const allowedChars: string[] = [board[i][0]];

            for (let j = 1; j < this.BOARD_SIZE; j++) {
                if (board[i][j] === this.EMPTY_CELL) {
                    continue;
                }

                if (!allowedChars.includes(board[i][j])) {
                    allowedChars.push(board[i][j]);
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    private checkColumnsValidity(board: Board): boolean {
        for (let i = 0; i < this.BOARD_SIZE; i++) {
            const allowedChars: string[] = [board[0][i]];

            for (let j = 1; j < this.BOARD_SIZE; j++) {
                if (board[j][i] === this.EMPTY_CELL) {
                    continue;
                }

                if (!allowedChars.includes(board[j][i])) {
                    allowedChars.push(board[j][i]);
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    private checkBoxesValidity(board: Board): boolean {
        for (let boxI = 0; boxI < this.BOARD_SIZE; boxI += 3) {
            for (let boxJ = 0; boxJ < this.BOARD_SIZE; boxJ += 3) {

                for (let i = 0; i < this.BOX_SIZE; i++) {
                    const boxChars: string[] = [];

                    for (let j = 0; j < this.BOX_SIZE; j++) {
                        const cell = board[boxI + i][boxJ + j];

                        if (cell === this.EMPTY_CELL) {
                            continue;
                        }

                        if (!boxChars.includes(cell)) {
                            boxChars.push(cell);
                        } else {
                            return false;
                        }
                    }
                }

            }
        }

        return true;
    }
}
