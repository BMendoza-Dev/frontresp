import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegadoProvincialComponent } from './delegado-provincial.component';

describe('DelegadoProvincialComponent', () => {
  let component: DelegadoProvincialComponent;
  let fixture: ComponentFixture<DelegadoProvincialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegadoProvincialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelegadoProvincialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
