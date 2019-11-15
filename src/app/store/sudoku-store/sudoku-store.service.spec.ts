import { TestBed } from '@angular/core/testing';

import { SudokuStoreService } from './sudoku-store.service';

describe('SudokuStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SudokuStoreService = TestBed.get(SudokuStoreService);
    expect(service).toBeTruthy();
  });
});
