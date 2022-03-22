import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectButtonSingleComponent } from './select-button-single.component';

describe('SelectButtonSingleComponent', () => {
  let component: SelectButtonSingleComponent;
  let fixture: ComponentFixture<SelectButtonSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectButtonSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectButtonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
