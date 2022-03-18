import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechkboxSelectionComponent } from './chechkbox-selection.component';

describe('ChechkboxSelectionComponent', () => {
  let component: ChechkboxSelectionComponent;
  let fixture: ComponentFixture<ChechkboxSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChechkboxSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechkboxSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
