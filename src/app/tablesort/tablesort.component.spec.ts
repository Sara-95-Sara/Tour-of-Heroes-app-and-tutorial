import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesortComponent } from './tablesort.component';

describe('TablesortComponent', () => {
  let component: TablesortComponent;
  let fixture: ComponentFixture<TablesortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
