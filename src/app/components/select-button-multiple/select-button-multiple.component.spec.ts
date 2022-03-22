import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectButtonMultipleComponent } from './select-button-multiple.component';

describe('SelectButtonMultipleComponent', () => {
  let component: SelectButtonMultipleComponent;
  let fixture: ComponentFixture<SelectButtonMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectButtonMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectButtonMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
