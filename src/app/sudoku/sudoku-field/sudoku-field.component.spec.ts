import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuFieldComponent } from './sudoku-field.component';

describe('SudokuFieldComponent', () => {
  let component: SudokuFieldComponent;
  let fixture: ComponentFixture<SudokuFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
