import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCantonalesComponent } from './forms-cantonales.component';

describe('FormsCantonalesComponent', () => {
  let component: FormsCantonalesComponent;
  let fixture: ComponentFixture<FormsCantonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsCantonalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsCantonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
