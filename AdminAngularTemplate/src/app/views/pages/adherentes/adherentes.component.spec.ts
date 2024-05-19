import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentesComponent } from './adherentes.component';

describe('AdherentesComponent', () => {
  let component: AdherentesComponent;
  let fixture: ComponentFixture<AdherentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdherentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdherentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
