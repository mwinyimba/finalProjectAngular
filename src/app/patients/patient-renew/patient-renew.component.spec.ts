import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRenewComponent } from './patient-renew.component';

describe('PatientRenewComponent', () => {
  let component: PatientRenewComponent;
  let fixture: ComponentFixture<PatientRenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRenewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
