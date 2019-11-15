export interface Sudoku {
    raw: any,
    rows: SudokuRow[],
    rowsSolution: SudokuRow[],
    solution: any,
    startTime: Date,
    solvedTime: Date
}

export interface SudokuRow {
    cols: SudokuCol[],
    index: number
}

export interface SudokuCol {
    row: number,
    col: number,
    value: number,
    readonly: boolean
}