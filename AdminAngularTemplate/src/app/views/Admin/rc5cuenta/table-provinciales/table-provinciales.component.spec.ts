import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProvincialesComponent } from './table-provinciales.component';

describe('TableProvincialesComponent', () => {
  let component: TableProvincialesComponent;
  let fixture: ComponentFixture<TableProvincialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProvincialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableProvincialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
