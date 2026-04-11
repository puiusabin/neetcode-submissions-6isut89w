class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = {
            '0': new Set(),
            '1': new Set(),
            '2': new Set(),
            '3': new Set(),
            '4': new Set(),
            '5': new Set(),
            '6': new Set(),
            '7': new Set(),
            '8': new Set(),
        }
        let cols = {
            '0': new Set(),
            '1': new Set(),
            '2': new Set(),
            '3': new Set(),
            '4': new Set(),
            '5': new Set(),
            '6': new Set(),
            '7': new Set(),
            '8': new Set(),
        }
        let squares = {
            '0 0': new Set(),
            '0 1': new Set(),
            '0 2': new Set(),
            '1 0': new Set(),
            '1 1': new Set(),
            '1 2': new Set(),
            '2 0': new Set(),
            '2 1': new Set(),
            '2 2': new Set(),
        }

        console.log(squares[`${Math.floor(1 / 3)} ${Math.floor(2 / 3)}`])
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") {
                    continue
                }
                if (rows[r].has(board[r][c]) || cols[c].has(board[r][c]) || squares[`${Math.floor(r / 3)} ${Math.floor(c / 3)}`].has(board[r][c])){
                    return false;
                }
                rows[r].add(board[r][c]);
                cols[c].add(board[r][c]);
                squares[`${Math.floor(r / 3)} ${Math.floor(c / 3)}`].add(board[r][c]);
            }
        }
        return true;

    }
}
