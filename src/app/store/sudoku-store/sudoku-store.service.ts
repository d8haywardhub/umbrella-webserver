import { Injectable } from '@angular/core';
import generator from "sudoku";
import { BehaviorSubject, Observable } from 'rxjs';
import produce from "immer";

import { Sudoku, SudokuRow, SudokuCol } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class SudokuStoreService {

  private _sudoku$ = new BehaviorSubject<Sudoku>(null);
  private _sudokuRows$ = new BehaviorSubject<SudokuRow[]>([]);
  private _sudokuRowsSolution$ = new BehaviorSubject<SudokuRow[]>([]);
  //private _sudokuCol$ = new BehaviorSubject<SudokuCol>(null);

  constructor() { }

  get sudoku$(): Observable<Sudoku> {
    return this._sudoku$.asObservable();
  }

  get sudokuRows$(): Observable<SudokuRow[]> {
    return this._sudokuRows$.asObservable();
  }

  get sudokuRowsSolution$(): Observable<SudokuRow[]> {
    return this._sudokuRowsSolution$.asObservable();
  }


  // Getters and Setters
  //  Getters - return the last value emitted subject
  //  Setters - assigning a value - push it onto the observable 
  //            and down to all of its subsribers
  get sudoku(): Sudoku {
    return this._sudoku$.getValue();
  }

  set sudoku(val: Sudoku) {
    this._sudoku$.next(val);
  }
  
  get sudokuRows(): SudokuRow[] {
    return this._sudokuRows$.getValue();
  }

  set sudokuRows(val: SudokuRow[]) {
    this._sudokuRows$.next(val);
  }

  get sudokuRowsSolution(): SudokuRow[] {
    return this._sudokuRowsSolution$.getValue();
  }
  
  set sudokuRowsSolution(val: SudokuRow[]) {
    this._sudokuRowsSolution$.next(val);
  }


  // Public functions

  generateSudoku(): void {
    const raw = generator.makepuzzle();
    const rawSolution = generator.solvepuzzle(raw);
  
    const formatted = raw.map(e => (e === null ? null : e + 1));
    const formattedSolution = rawSolution.map(e => e + 1);
  
    const result: Sudoku = {
      raw,
      rows: [],
      rowsSolution: [],
      solution: formattedSolution,
      startTime: new Date(),
      solvedTime: null,
    };

    console.log(result.startTime.getTime());
    for (let i = 0; i < 9; i++) {
      const row = { cols: [], index: i };
      const rowSolution = { cols: [], index: i };
      for (let j = 0; j < 9; j++) {
        const value = formatted[i * 9 + j];
        const valueSolution = formattedSolution[i * 9 + j];
        const col = {
          row: i,
          col: j,
          value: value,
          readonly: value !== null
        };
        row.cols.push(col);

        const colSolution = {
          row: i,
          col: j,
          value: valueSolution,
          readonly: true
        };
        rowSolution.cols.push(colSolution);

      }
      result.rows.push(row);
      result.rowsSolution.push(rowSolution);
    }

    this.sudoku = result;
    this.sudokuRows = result.rows;
    this.sudokuRowsSolution = result.rowsSolution;
  
  }

  handleChange(newState: SudokuCol) {
    const state =
      produce(this.sudoku, state => {
        state.rows[newState.row].cols[newState.col].value = newState.value;
        if (!state.solvedTime) {
          const solved = this.checkSolution(state);
          if (solved) {
            state.solvedTime = new Date();
            debugger;
            // Set all Sudoku fields (numbers) to be read-only
            state.rows.map(col => col.cols.map(field => field.readonly = true));
          } else {
            state.solvedTime = null;
          }
        }
      })

      // Update the state
      this.sudoku = state;
      if (state.solvedTime !== null) {
        // Solved - update rows to reflect read-only status of game
        this.sudokuRows = state.rows; 
      }

  };


  checkSolution(sudoku: Sudoku) {
    const unflattened: Array<Array<number>> = sudoku.rows
      .map(row => row.cols.map(col => col.value));
      //.flat(2);     // cannot use flat to flatten number[][]..... so using Array concat

    const candidate: Array<number> = [].concat.apply([], unflattened);

    for (let i = 0; i < candidate.length; i++) {
      if (candidate[i] === null || candidate[i] !== sudoku.solution[i]) {
        return false;
      }
    }
    return true;
  }

  isCompleted(): boolean {
    return this.checkSolution(this.sudoku);
  }

}
