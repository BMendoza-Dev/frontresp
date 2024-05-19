import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCantonalesComponent } from './table-cantonales.component';

describe('TableCantonalesComponent', () => {
  let component: TableCantonalesComponent;
  let fixture: ComponentFixture<TableCantonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCantonalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCantonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
