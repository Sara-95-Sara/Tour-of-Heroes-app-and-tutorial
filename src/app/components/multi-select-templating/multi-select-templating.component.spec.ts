import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectTemplatingComponent } from './multi-select-templating.component';

describe('MultiSelectTemplatingComponent', () => {
  let component: MultiSelectTemplatingComponent;
  let fixture: ComponentFixture<MultiSelectTemplatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectTemplatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectTemplatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
