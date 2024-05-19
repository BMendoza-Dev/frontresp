import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsProvincialesComponent } from './forms-provinciales.component';

describe('FormsProvincialesComponent', () => {
  let component: FormsProvincialesComponent;
  let fixture: ComponentFixture<FormsProvincialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsProvincialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsProvincialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
