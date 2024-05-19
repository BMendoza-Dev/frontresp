import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsNacinalesComponent } from './forms-nacinales.component';

describe('FormsNacinalesComponent', () => {
  let component: FormsNacinalesComponent;
  let fixture: ComponentFixture<FormsNacinalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsNacinalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsNacinalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
