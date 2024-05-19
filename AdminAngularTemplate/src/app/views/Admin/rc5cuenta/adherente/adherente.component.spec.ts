import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherenteComponent } from './adherente.component';

describe('AdherenteComponent', () => {
  let component: AdherenteComponent;
  let fixture: ComponentFixture<AdherenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdherenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdherenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
