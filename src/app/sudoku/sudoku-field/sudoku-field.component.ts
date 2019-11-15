import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import produce from "immer";

import { SudokuCol, Sudoku } from '../../models';
import { SudokuStoreService } from 'src/app/store/sudoku-store/sudoku-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sudoku-field',
  templateUrl: './sudoku-field.component.html',
  styleUrls: ['./sudoku-field.component.css']
})
export class SudokuFieldComponent implements OnInit {
  @Input() sudokuCol: SudokuCol;
  @Output() onNumberChanged = new EventEmitter()

  constructor(private sudokuStore: SudokuStoreService) { }

  ngOnInit() {
  }

  isReadOnly() {
    return this.sudokuCol.readonly;
  }

  onChange($event) {
    const nextSudokuColState = produce(this.sudokuCol, draftState => {
      draftState.value = parseInt($event.target.value,10);
    })
    this.onNumberChanged.emit(nextSudokuColState);
  }

}
