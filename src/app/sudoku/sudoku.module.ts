import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { SudokuBoardComponent } from './sudoku-board/sudoku-board.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SudokuFieldComponent } from './sudoku-field/sudoku-field.component';

const sudokuRoutes: Routes = [{ path: "", component: SudokuBoardComponent }];


@NgModule({
  declarations: [SudokuBoardComponent, SudokuFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(sudokuRoutes),
  ]
})
export class SudokuModule { }
