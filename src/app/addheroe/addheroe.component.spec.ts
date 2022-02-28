import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddheroeComponent } from './addheroe.component';

describe('AddheroeComponent', () => {
  let component: AddheroeComponent;
  let fixture: ComponentFixture<AddheroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddheroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
