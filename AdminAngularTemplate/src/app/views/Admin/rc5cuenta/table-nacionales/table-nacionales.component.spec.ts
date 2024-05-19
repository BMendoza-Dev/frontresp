import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNacionalesComponent } from './table-nacionales.component';

describe('TableNacionalesComponent', () => {
  let component: TableNacionalesComponent;
  let fixture: ComponentFixture<TableNacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableNacionalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableNacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
