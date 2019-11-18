import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainingComponent } from './raining.component';

describe('RainingComponent', () => {
  let component: RainingComponent;
  let fixture: ComponentFixture<RainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
