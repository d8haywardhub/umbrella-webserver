import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Sudoku, SudokuRow } from '../../models';
import { SudokuStoreService } from 'src/app/store/sudoku-store/sudoku-store.service';

@Component({
  selector: 'app-sudoku-board',
  templateUrl: './sudoku-board.component.html',
  styleUrls: ['./sudoku-board.component.css']
})
export class SudokuBoardComponent implements OnInit, OnDestroy {

  sudoku$: Observable<Sudoku>;
  sudokuRows$: Observable<SudokuRow[]>;
  sudokuRowsSolution$: Observable<SudokuRow[]>;
  showResults: boolean = false;

  constructor(private sudokuStore: SudokuStoreService) { }

  ngOnInit() {
    this.sudokuStore.generateSudoku();
    this.sudoku$ = this.sudokuStore.sudoku$;
    this.sudokuRows$ = this.sudokuStore.sudokuRows$;
    this.sudokuRowsSolution$ = this.sudokuStore.sudokuRowsSolution$;
  }

  ngOnDestroy() {
    //this.subscribed.unsubscribe();
  }

  newGame() {
    this.sudokuStore.generateSudoku();
  }

  toggleShowSolution() {
    this.showResults = !this.showResults;
  }

  isCompletedSuccessfully() {
    return this.sudokuStore.isCompleted()
  }

  onChange(newState) {
    console.log(newState);
    this.sudokuStore.handleChange(newState)
  }

}
