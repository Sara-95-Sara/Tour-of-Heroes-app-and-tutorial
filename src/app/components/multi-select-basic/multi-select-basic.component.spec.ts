import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectBasicComponent } from './multi-select-basic.component';

describe('MultiSelectBasicComponent', () => {
  let component: MultiSelectBasicComponent;
  let fixture: ComponentFixture<MultiSelectBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
